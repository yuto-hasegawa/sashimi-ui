export function prefix(pre: string | undefined, body: string) {
	return pre ? `${pre}${body}` : body;
}
