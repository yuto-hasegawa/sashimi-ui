export function cn(...classNames: (string | undefined)[]) {
	return classNames.filter(Boolean).join(" ");
}
