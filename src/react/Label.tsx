"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { prefix } from "./utils/prefix.js";
import { cn } from "./utils/cn.js";

export interface LabelProps {
	error?: string;
	classNamePrefix?: string;
}

const Label = React.forwardRef<
	HTMLLabelElement,
	LabelProps & React.ComponentPropsWithoutRef<"label">
>(({ error, children, className, classNamePrefix, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<label
			{...rest}
			ref={ref}
			className={cn(
				prefix(classNamePrefix, "label"),
				err ? prefix(classNamePrefix, "error") : "",
				className,
			)}
		>
			{children}
		</label>
	);
});

Label.displayName = "Input";

export default Label;
