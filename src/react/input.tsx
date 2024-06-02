"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./fieldset";
import { prefix } from "./utils/prefix";
import { cn } from "./utils/cn";

export interface InputProps {
	error?: string;
	classNamePrefix?: string;
}

const Input = React.forwardRef<
	HTMLInputElement,
	InputProps & React.ComponentPropsWithoutRef<"input">
>(({ error, children, className, classNamePrefix, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<input
			{...rest}
			ref={ref}
			className={cn(
				prefix(classNamePrefix, "input"),
				err ? prefix(classNamePrefix, "error") : "",
				className,
			)}
		>
			{children}
		</input>
	);
});

Input.displayName = "Input";

export default Input;
