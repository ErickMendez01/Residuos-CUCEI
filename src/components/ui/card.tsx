import * as React from "react"
import {
  Card as NextUICard,
  CardHeader as NextUICardHeader,
  CardBody as NextUICardBody,
  CardFooter as NextUICardFooter,
  type CardProps as NextUICardProps,
} from "@nextui-org/react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, NextUICardProps>(
  ({ className, ...props }, ref) => (
    <NextUICard
      ref={ref}
      as="div"
      className={cn("bg-white dark:bg-neutral-900", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof NextUICardHeader>
>(({ className, ...props }, ref) => (
  <NextUICardHeader
    ref={ref}
    as="div"
    className={cn("font-semibold text-lg p-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof NextUICardBody>
>(({ className, ...props }, ref) => (
  <NextUICardBody
    ref={ref}
    as="div"
    className={cn("text-sm text-gray-600 dark:text-gray-300 px-4 py-2", className)}
    {...props}
  />
))
CardBody.displayName = "CardBody"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof NextUICardFooter>
>(({ className, ...props }, ref) => (
  <NextUICardFooter
    ref={ref}
    as="div"
    className={cn("flex justify-end gap-2 p-4 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardBody, CardFooter }
