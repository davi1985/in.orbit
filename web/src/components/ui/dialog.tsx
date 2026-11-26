import * as DialogPrimitive from '@radix-ui/react-dialog'

export const Dialog = (props: DialogPrimitive.DialogProps) => (
  <DialogPrimitive.Dialog {...props} />
)

export const DialogTrigger = (props: DialogPrimitive.DialogTriggerProps) => (
  <DialogPrimitive.DialogTrigger {...props} />
)

export const DialogClose = (props: DialogPrimitive.DialogCloseProps) => (
  <DialogPrimitive.DialogClose {...props} />
)

export const DialogPortal = (props: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.DialogPortal {...props} />
)

export const DialogOverlay = (props: DialogPrimitive.DialogOverlayProps) => (
  <DialogPrimitive.DialogOverlay
    {...props}
    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
  />
)

export const DialogContent = (props: DialogPrimitive.DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />

    <DialogPrimitive.DialogContent
      {...props}
      className="fixed z-50 right-0 top-0 bottom-0 w-100 h-screen border-l border-zinc-900 bg-zinc-950 p-8"
    />
  </DialogPortal>
)

export const DialogTitle = (props: DialogPrimitive.DialogTitleProps) => (
  <DialogPrimitive.DialogTitle {...props} className="text-lg font-semibold" />
)

export const DialogDescription = (
  props: DialogPrimitive.DialogDescriptionProps
) => (
  <DialogPrimitive.DialogDescription
    {...props}
    className="text-zinc-400 text-sm leading-relaxed"
  />
)
