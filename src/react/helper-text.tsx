"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./fieldset";

export interface HelperTextProps {
	error?: string;
}

const HelperText = React.forwardRef<
	HTMLParagraphElement,
	HelperTextProps & JSX.IntrinsicElements["p"]
>(({ error, children, className, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<p
			{...rest}
			ref={ref}
			className={["helper-text", err ? "error" : "", className]
				.filter(Boolean)
				.join(" ")}
		>
			{err || children}
		</p>
	);
});

HelperText.displayName = "HelperText";

export default HelperText;
