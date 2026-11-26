import * as ProgressPrimitive from '@radix-ui/react-progress'

export const Progress = (props: ProgressPrimitive.ProgressProps) => (
  <ProgressPrimitive.Progress
    {...props}
    className="bg-zinc-900 rounded-full h-2"
  />
)

export const ProgressIndicator = (
  props: ProgressPrimitive.ProgressIndicatorProps
) => (
  <ProgressPrimitive.Indicator
    {...props}
    className="bg-linear-to-r from-pink-500 to-violet-500 w-1/2 h-2 rounded-full"
  />
)
