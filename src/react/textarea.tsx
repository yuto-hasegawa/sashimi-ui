"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./fieldset";

export interface TextareaProps {
	error?: string;
}

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	TextareaProps & JSX.IntrinsicElements["textarea"]
>(({ error, children, className, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<textarea
			{...rest}
			ref={ref}
			className={["textarea", err ? "error" : "", className]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</textarea>
	);
});

Textarea.displayName = "Textarea";

export default Textarea;
