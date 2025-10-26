"use client";

import { type ComponentPropsWithRef, useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { cn } from "./utils/cn.js";
import { prefix } from "./utils/prefix.js";

export interface LabelProps {
	error?: string;
	classNamePrefix?: string;
}

const Label = ({
	error,
	children,
	className,
	classNamePrefix,
	ref,
	...rest
}: LabelProps & ComponentPropsWithRef<"label">) => {
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
};

Label.displayName = "Input";

export default Label;
