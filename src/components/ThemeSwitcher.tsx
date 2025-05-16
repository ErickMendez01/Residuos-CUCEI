import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { FaRegMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = (props: SwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({ ...props, isSelected: theme === "dark" });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} onChange={toggleTheme} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {theme === "dark" ? (
            <FaSun className="text-white-500" />
          ) : (
            <FaRegMoon className="text-gray-800" />
          )}
        </div>
      </Component>
    </div>
  );
};

