module.exports = (ctx) => ({
	"no-map": true,
	plugins: [
		require("postcss-rename")({ prefix: "sui-" }),
		require("autoprefixer"),
		require("cssnano"),
	],
});
