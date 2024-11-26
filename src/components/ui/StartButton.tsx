"use client";

import { forwardRef } from "react";
import { useButton, Ripple, Spinner } from "@nextui-org/react";

interface MyButtonProps {
  children?: React.ReactNode;
  spinnerSize?: string;
  spinnerPlacement?: "start" | "end";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  disableRipple?: boolean;
}

const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>((props, ref) => {
  const {
    domRef,
    children = "Comenzar",
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
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
    <button ref={domRef} {...getButtonProps()}>
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
      {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
    </button>
  );
});

MyButton.displayName = "MyButton";

export default MyButton;
