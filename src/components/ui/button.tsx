import * as React from "react";
import {
  useButton,
  Ripple,
  Spinner,
  type ButtonProps as BaseButtonProps,
} from "@nextui-org/react"; 
import { cn } from "@/lib/utils"; 

export interface ButtonProps extends BaseButtonProps {
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      domRef,
      children,
      spinnerSize,
      spinner = <Spinner color="current" size={spinnerSize} />,
      spinnerPlacement = "start",
      startContent,
      endContent,
      isLoading,
      disableRipple,
      getButtonProps,
      getRippleProps,
    } = useButton({
      ref,
      ...props,
    });

    const { ripples, onClear } = getRippleProps();

    return (
      <button
        ref={domRef}
        {...getButtonProps()}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          props.className
        )}
      >
        {startContent}
        {isLoading && spinnerPlacement === "start" && spinner}
        {children}
        {isLoading && spinnerPlacement === "end" && spinner}
        {endContent}
        {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
