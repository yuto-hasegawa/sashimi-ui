import { forwardRef } from "react";
import BaseDialog, { type DialogProps } from "../Dialog.js";
import BaseFieldset, { type FieldsetProps } from "../Fieldset.js";
import BaseHelperText, { type HelperTextProps } from "../HelperText.js";
import BaseInput, { type InputProps } from "../Input.js";
import BaseLabel, { type LabelProps } from "../Label.js";
import BaseLegend, { type LegendProps } from "../Legend.js";
import BaseSelect, { type SelectProps } from "../Select.js";
import BaseTextarea, { type TextareaProps } from "../Textarea.js";

export const Dialog = forwardRef<
	HTMLDialogElement,
	DialogProps & React.ComponentPropsWithoutRef<"dialog">
>((props, ref) => <BaseDialog ref={ref} {...props} classNamePrefix="sui-" />);

export const Fieldset = forwardRef<
	HTMLFieldSetElement,
	FieldsetProps & React.ComponentPropsWithoutRef<"fieldset">
>((props, ref) => <BaseFieldset ref={ref} {...props} classNamePrefix="sui-" />);

export const HelperText = forwardRef<
	HTMLParagraphElement,
	HelperTextProps & React.ComponentPropsWithoutRef<"p">
>((props, ref) => (
	<BaseHelperText ref={ref} {...props} classNamePrefix="sui-" />
));

export const Input = forwardRef<
	HTMLInputElement,
	InputProps & React.ComponentPropsWithoutRef<"input">
>((props, ref) => <BaseInput ref={ref} {...props} classNamePrefix="sui-" />);

export const Label = forwardRef<
	HTMLLabelElement,
	LabelProps & React.ComponentPropsWithoutRef<"label">
>((props, ref) => <BaseLabel ref={ref} {...props} classNamePrefix="sui-" />);

export const Legend = forwardRef<
	HTMLLegendElement,
	LegendProps & React.ComponentPropsWithoutRef<"legend">
>((props, ref) => <BaseLegend ref={ref} {...props} classNamePrefix="sui-" />);

export const Select = forwardRef<
	HTMLSelectElement,
	SelectProps & React.ComponentPropsWithoutRef<"select">
>((props, ref) => <BaseSelect ref={ref} {...props} classNamePrefix="sui-" />);

export const Textarea = forwardRef<
	HTMLTextAreaElement,
	TextareaProps & React.ComponentPropsWithoutRef<"textarea">
>((props, ref) => <BaseTextarea ref={ref} {...props} classNamePrefix="sui-" />);
