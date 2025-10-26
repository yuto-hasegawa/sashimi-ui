"use client";

import { type ComponentPropsWithRef, useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { cn } from "./utils/cn.js";
import { prefix } from "./utils/prefix.js";

export interface HelperTextProps {
	error?: string;
	classNamePrefix?: string;
}

const HelperText = ({
	error,
	children,
	className,
	classNamePrefix,
	ref,
	...rest
}: HelperTextProps & ComponentPropsWithRef<"p">) => {
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
};

HelperText.displayName = "HelperText";

export default HelperText;
