import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://yuto-hasegawa.github.io",
	base: "/sashimi-ui",
	trailingSlash: "always",
	integrations: [react(), mdx()],
});
