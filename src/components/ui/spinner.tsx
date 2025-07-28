import * as React from "react";
import { cn } from "@/lib/utils";

// Using HTMLAttributes directly without an empty interface
export const Spinner = React.forwardRef<
  HTMLDivElement, 
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent", className)}
      {...props}
    />
  )
);

Spinner.displayName = "Spinner";