"use client";

import React from "react";

export const FieldsetContext = React.createContext<{ error?: string }>({});

export interface FieldsetProps {
	error?: string;
}

const Fieldset = React.forwardRef<
	HTMLFieldSetElement,
	FieldsetProps & JSX.IntrinsicElements["fieldset"]
>(({ error, children, className, ...rest }, ref) => {
	return (
		<FieldsetContext.Provider value={{ error }}>
			<fieldset
				{...rest}
				ref={ref}
				className={["fieldset", className].filter(Boolean).join(" ")}
			>
				{children}
			</fieldset>
		</FieldsetContext.Provider>
	);
});

Fieldset.displayName = "Fieldset";

export default Fieldset;
