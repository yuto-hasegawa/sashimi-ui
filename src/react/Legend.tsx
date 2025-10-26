"use client";

import { type ComponentPropsWithRef, useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { cn } from "./utils/cn.js";
import { prefix } from "./utils/prefix.js";

export interface LegendProps {
	error?: string;
	classNamePrefix?: string;
}

const Legend = ({
	error,
	children,
	className,
	classNamePrefix,
	ref,
	...rest
}: LegendProps & ComponentPropsWithRef<"legend">) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<legend
			{...rest}
			ref={ref}
			className={cn(
				prefix(classNamePrefix, "legend"),
				err ? prefix(classNamePrefix, "error") : "",
				className,
			)}
		>
			{children}
		</legend>
	);
};

Legend.displayName = "Legend";

export default Legend;
