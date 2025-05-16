import * as React from "react"
import {
  Modal as NextUIModal,
  ModalContent as NextUIModalContent,
  ModalHeader as NextUIModalHeader,
  ModalBody as NextUIModalBody,
  ModalFooter as NextUIModalFooter,
  type ModalProps as NextUIModalProps,
} from "@nextui-org/react"

import { cn } from "@/lib/utils"

const Modal = React.forwardRef<HTMLDivElement, NextUIModalProps>(
  ({ className, ...props }, ref) => (
    <NextUIModal
      ref={ref}
      backdrop="opaque"
      scrollBehavior="inside"
      radius="lg"
      className={cn("bg-white text-black dark:bg-black dark:text-white ", className)}
      classNames={{
        body: "space-y-5",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        header: "border-b-[1px] border-grey dark:border-grey-100",
        footer: "border-t-[1px] border-grey dark:border-grey-100",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      {...props}
    />
  )
)
Modal.displayName = "Modal"

const ModalContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof NextUIModalContent>
>(({ className, ...props }, ref) => (
  <NextUIModalContent ref={ref} className={className} {...props}>
    {props.children}
  </NextUIModalContent>
))
ModalContent.displayName = "ModalContent"

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof NextUIModalHeader>
>(({ className, ...props }, ref) => (
  <NextUIModalHeader
    ref={ref}
    as="div"
    className={cn("flex flex-col text-center", className)}
    {...props}
  />
))
ModalHeader.displayName = "ModalHeader"

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof NextUIModalBody>
>(({ className, ...props }, ref) => (
  <NextUIModalBody
    ref={ref}
    as="div"
    className={cn("px-4 py-2", className)}
    {...props}
  />
))
ModalBody.displayName = "ModalBody"

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof NextUIModalFooter>
>(({ className, ...props }, ref) => (
  <NextUIModalFooter
    ref={ref}
    as="div"
    className={cn("flex justify-end gap-2 pt-4", className)}
    {...props}
  />
))
ModalFooter.displayName = "ModalFooter"

export { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter }
