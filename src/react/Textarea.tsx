"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { prefix } from "./utils/prefix.js";
import { cn } from "./utils/cn.js";

export interface TextareaProps {
	error?: string;
	classNamePrefix?: string;
}

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	TextareaProps & React.ComponentPropsWithoutRef<"textarea">
>(({ error, children, className, classNamePrefix, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<textarea
			{...rest}
			ref={ref}
			className={cn(
				prefix(classNamePrefix, "textarea"),
				err ? prefix(classNamePrefix, "error") : "",
				className,
			)}
		>
			{children}
		</textarea>
	);
});

Textarea.displayName = "Textarea";

export default Textarea;
