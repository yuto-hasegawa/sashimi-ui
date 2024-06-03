"use client";

import React from "react";
import { prefix } from "./utils/prefix.js";
import { cn } from "./utils/cn.js";

export const FieldsetContext = React.createContext<{ error?: string }>({});

export interface FieldsetProps {
	error?: string;
	classNamePrefix?: string;
}

const Fieldset = React.forwardRef<
	HTMLFieldSetElement,
	FieldsetProps & React.ComponentPropsWithoutRef<"fieldset">
>(({ error, children, className, classNamePrefix, ...rest }, ref) => {
	return (
		<FieldsetContext.Provider value={{ error }}>
			<fieldset
				{...rest}
				ref={ref}
				className={cn(prefix(classNamePrefix, "fieldset"), className)}
			>
				{children}
			</fieldset>
		</FieldsetContext.Provider>
	);
});

Fieldset.displayName = "Fieldset";

export default Fieldset;
