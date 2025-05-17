import * as React from "react"
import { FiChevronLeft, FiChevronRight, FiMoreHorizontal } from "react-icons/fi"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

interface PaginationLinkProps extends React.ComponentProps<typeof Button> {
  isActive?: boolean
}

const PaginationLink = ({
  className,
  isActive,
  size = "sm",
  variant,
  ...props
}: PaginationLinkProps) => (
  <Button
    aria-current={isActive ? "page" : undefined}
    variant={isActive ? "ghost" : variant || "ghost"}
    size={size}
    className={cn("px-4 py-2", className)}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: PaginationLinkProps) => (
  <PaginationLink
    aria-label="Ir a la pagina anterior"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <FiChevronLeft className="h-4 w-4" />
    <span>Atrás</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: PaginationLinkProps) => (
  <PaginationLink
    aria-label="Ir a la siguiente pagina"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Siguiente</span>
    <FiChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <FiMoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Más páginas</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
