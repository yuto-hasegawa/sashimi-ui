"use client";

import React, { type ComponentPropsWithRef } from "react";
import { cn } from "./utils/cn.js";
import { prefix } from "./utils/prefix.js";

export const FieldsetContext = React.createContext<{ error?: string }>({});

export interface FieldsetProps {
	error?: string;
	classNamePrefix?: string;
}

const Fieldset = ({
	error,
	children,
	className,
	classNamePrefix,
	ref,
	...rest
}: FieldsetProps & ComponentPropsWithRef<"fieldset">) => {
	return (
		<FieldsetContext value={{ error }}>
			<fieldset
				{...rest}
				ref={ref}
				className={cn(prefix(classNamePrefix, "fieldset"), className)}
			>
				{children}
			</fieldset>
		</FieldsetContext>
	);
};

Fieldset.displayName = "Fieldset";

export default Fieldset;
