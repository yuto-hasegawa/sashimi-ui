"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./fieldset";

export interface SelectProps {
	error?: string;
}

const Select = React.forwardRef<
	HTMLSelectElement,
	SelectProps & JSX.IntrinsicElements["select"]
>(({ error, children, className, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<select
			{...rest}
			ref={ref}
			className={["select", err ? "error" : "", className]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</select>
	);
});

Select.displayName = "Select";

export default Select;
