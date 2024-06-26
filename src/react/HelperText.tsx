"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { prefix } from "./utils/prefix.js";
import { cn } from "./utils/cn.js";

export interface HelperTextProps {
	error?: string;
	classNamePrefix?: string;
}

const HelperText = React.forwardRef<
	HTMLParagraphElement,
	HelperTextProps & React.ComponentPropsWithoutRef<"p">
>(({ error, children, className, classNamePrefix, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<p
			{...rest}
			ref={ref}
			className={cn(
				prefix(classNamePrefix, "helper-text"),
				err ? prefix(classNamePrefix, "error") : "",
				className,
			)}
		>
			{err || children}
		</p>
	);
});

HelperText.displayName = "HelperText";

export default HelperText;
