import type { ComponentPropsWithRef } from "react";
import BaseDialog, { type DialogProps } from "../Dialog.js";
import BaseFieldset, { type FieldsetProps } from "../Fieldset.js";
import BaseHelperText, { type HelperTextProps } from "../HelperText.js";
import BaseInput, { type InputProps } from "../Input.js";
import BaseLabel, { type LabelProps } from "../Label.js";
import BaseLegend, { type LegendProps } from "../Legend.js";
import BaseSelect, { type SelectProps } from "../Select.js";
import BaseTextarea, { type TextareaProps } from "../Textarea.js";

export const Dialog = ({
	ref,
	...props
}: DialogProps & ComponentPropsWithRef<"dialog">) => (
	<BaseDialog ref={ref} {...props} classNamePrefix="sui-" />
);

export const Fieldset = ({
	ref,
	...props
}: FieldsetProps & ComponentPropsWithRef<"fieldset">) => (
	<BaseFieldset ref={ref} {...props} classNamePrefix="sui-" />
);

export const HelperText = ({
	ref,
	...props
}: HelperTextProps & ComponentPropsWithRef<"p">) => (
	<BaseHelperText ref={ref} {...props} classNamePrefix="sui-" />
);

export const Input = ({
	ref,
	...props
}: InputProps & ComponentPropsWithRef<"input">) => (
	<BaseInput ref={ref} {...props} classNamePrefix="sui-" />
);

export const Label = ({
	ref,
	...props
}: LabelProps & ComponentPropsWithRef<"label">) => (
	<BaseLabel ref={ref} {...props} classNamePrefix="sui-" />
);

export const Legend = ({
	ref,
	...props
}: LegendProps & ComponentPropsWithRef<"legend">) => (
	<BaseLegend ref={ref} {...props} classNamePrefix="sui-" />
);

export const Select = ({
	ref,
	...props
}: SelectProps & ComponentPropsWithRef<"select">) => (
	<BaseSelect ref={ref} {...props} classNamePrefix="sui-" />
);

export const Textarea = ({
	ref,
	...props
}: TextareaProps & ComponentPropsWithRef<"textarea">) => (
	<BaseTextarea ref={ref} {...props} classNamePrefix="sui-" />
);
