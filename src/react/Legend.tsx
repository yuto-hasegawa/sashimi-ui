"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./Fieldset.js";
import { prefix } from "./utils/prefix.js";
import { cn } from "./utils/cn.js";

export interface LegendProps {
	error?: string;
	classNamePrefix?: string;
}

const Legend = React.forwardRef<
	HTMLLegendElement,
	LegendProps & React.ComponentPropsWithoutRef<"legend">
>(({ error, children, className, classNamePrefix, ...rest }, ref) => {
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
});

Legend.displayName = "Legend";

export default Legend;
