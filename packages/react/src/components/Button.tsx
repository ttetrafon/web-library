import { clamp } from "@ttetrafon/core";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button. */
  variant?: "primary" | "secondary";
}

/**
 * Example component — replace with your own.
 * Demonstrates importing from @ttetrafon/core.
 */
export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  // Just a silly demo of using core — clamp has no real purpose here
  const _demo = clamp(1, 0, 10);

  return (
    <button data-variant={variant} {...props}>
      {children}
    </button>
  );
}
