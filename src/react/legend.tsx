"use client";

import React, { useContext } from "react";
import { FieldsetContext } from "./fieldset";

export interface LegendProps {
	error?: string;
}

const Legend = React.forwardRef<
	HTMLLegendElement,
	LegendProps & JSX.IntrinsicElements["legend"]
>(({ error, children, className, ...rest }, ref) => {
	const ctx = useContext(FieldsetContext);
	const err = error ?? ctx.error;

	return (
		<legend
			{...rest}
			ref={ref}
			className={["legend", err ? "error" : "", className]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</legend>
	);
});

Legend.displayName = "Legend";

export default Legend;
