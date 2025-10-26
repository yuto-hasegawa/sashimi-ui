"use client";

import { type ComponentPropsWithRef, useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { cn } from "./utils/cn.js";
import { prefix } from "./utils/prefix.js";

export interface TextareaProps {
	error?: string;
	classNamePrefix?: string;
}

const Textarea = ({
	error,
	children,
	className,
	classNamePrefix,
	ref,
	...rest
}: TextareaProps & ComponentPropsWithRef<"textarea">) => {
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
};

Textarea.displayName = "Textarea";

export default Textarea;
