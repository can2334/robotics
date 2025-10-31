import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "secondary" | "destructive";
    size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "default",
    size = "md",
    className,
    children,
    ...props
}) => {
    const base =
        "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        default:
            "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
        outline:
            "border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
        secondary:
            "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
        destructive:
            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    const sizes = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
    };

    return (
        <button
            className={clsx(base, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
