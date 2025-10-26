"use client";

import { type ComponentPropsWithRef, useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { cn } from "./utils/cn.js";
import { prefix } from "./utils/prefix.js";

export interface SelectProps {
	error?: string;
	classNamePrefix?: string;
}

const Select = ({
	error,
	children,
	className,
	classNamePrefix,
	ref,
	...rest
}: SelectProps & ComponentPropsWithRef<"select">) => {
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
};

Select.displayName = "Select";

export default Select;
