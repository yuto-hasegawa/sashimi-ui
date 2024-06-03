import { forwardRef } from "react";
import BaseDialog, { type DialogProps } from "../Dialog";
import BaseFieldset, { type FieldsetProps } from "../Fieldset";
import BaseHelperText, { type HelperTextProps } from "../HelperText";
import BaseInput, { type InputProps } from "../Input";
import BaseLabel, { type LabelProps } from "../Label";
import BaseLegend, { type LegendProps } from "../Legend";
import BaseSelect, { type SelectProps } from "../Select";
import BaseTextarea, { type TextareaProps } from "../Textarea";

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
