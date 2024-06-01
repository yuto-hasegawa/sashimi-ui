module.exports = (ctx) => ({
	"no-map": true,
	plugins: [require("autoprefixer"), require("cssnano")],
});
