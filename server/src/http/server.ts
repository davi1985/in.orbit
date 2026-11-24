import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import z from 'zod'
import { createGoal } from '../features/create-goal'
import { createGoalCompletion } from '../features/create-goal-completion'
import { getWeekPendingGoals } from '../features/get-week-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.get('/pending-goals', async () => {
  const { pendingGoals } = await getWeekPendingGoals()

  return { pendingGoals }
})

app.post(
  '/goals',
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
      }),
    },
  },
  async (request, reply) => {
    const { title, desiredWeeklyFrequency } = request.body

    const { goal } = await createGoal({
      title,
      desiredWeeklyFrequency,
    })

    return reply.status(201).send({ goal })
  }
)

app.post(
  '/completions',
  {
    schema: {
      body: z.object({
        goalId: z.string(),
      }),
    },
  },
  async (request, reply) => {
    const { goalId } = request.body

    const { goalCompletion } = await createGoalCompletion({
      goalId,
    })

    return reply.status(201).send({ goalCompletion })
  }
)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server running at http://localhost:3333'))
