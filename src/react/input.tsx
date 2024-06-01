"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./fieldset";

export interface InputProps {
	error?: string;
}

const Input = React.forwardRef<
	HTMLInputElement,
	InputProps & JSX.IntrinsicElements["input"]
>(({ error, children, className, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<input
			{...rest}
			ref={ref}
			className={["input", err ? "error" : "", className]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</input>
	);
});

Input.displayName = "Input";

export default Input;
