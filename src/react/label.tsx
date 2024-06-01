"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./fieldset";

export interface LabelProps {
	error?: string;
}

const Label = React.forwardRef<
	HTMLLabelElement,
	LabelProps & JSX.IntrinsicElements["label"]
>(({ error, children, className, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<label
			{...rest}
			ref={ref}
			className={["label", err ? "error" : "", className]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</label>
	);
});

Label.displayName = "Input";

export default Label;
