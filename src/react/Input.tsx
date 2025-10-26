"use client";

import { type ComponentPropsWithRef, useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { cn } from "./utils/cn.js";
import { prefix } from "./utils/prefix.js";

export interface InputProps {
	error?: string;
	classNamePrefix?: string;
}

const Input = ({
	error,
	children,
	className,
	classNamePrefix,
	ref,
	...rest
}: InputProps & ComponentPropsWithRef<"input">) => {
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
};

Input.displayName = "Input";

export default Input;
