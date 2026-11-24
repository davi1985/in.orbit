import dayjs from 'dayjs'
import { client, db } from '.'
import { goalCompletions, goals } from './schema'

export const seed = async () => {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const results = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Estudar Ingles', desiredWeeklyFrequency: 3 },
      { title: 'Devocional', desiredWeeklyFrequency: 5 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    { goalId: results[0].id, createdAt: startOfWeek.toDate() },
    { goalId: results[1].id, createdAt: startOfWeek.add(1).toDate() },
  ])
}

seed().finally(() => client.end())
