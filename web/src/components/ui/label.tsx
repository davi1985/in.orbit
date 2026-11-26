import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = ComponentProps<'label'> & {
  htmlFor: string
  children: ReactNode
}

export const Label = ({
  htmlFor,
  className,
  children,
  ...props
}: LabelProps) => (
  <label
    {...props}
    htmlFor={htmlFor}
    className={twMerge(
      'font-medium text-sm tracking-tight leading-normal',
      className
    )}
  >
    {children}
  </label>
)
