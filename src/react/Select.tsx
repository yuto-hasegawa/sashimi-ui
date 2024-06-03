"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { prefix } from "./utils/prefix.js";
import { cn } from "./utils/cn.js";

export interface SelectProps {
	error?: string;
	classNamePrefix?: string;
}

const Select = React.forwardRef<
	HTMLSelectElement,
	SelectProps & React.ComponentPropsWithoutRef<"select">
>(({ error, children, className, classNamePrefix, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<select
			{...rest}
			ref={ref}
			className={cn(
				prefix(classNamePrefix, "select"),
				err ? prefix(classNamePrefix, "error") : "",
				className,
			)}
		>
			{children}
		</select>
	);
});

Select.displayName = "Select";

export default Select;
