import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import testingLibrary from "eslint-plugin-testing-library"

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		files: ["**/*.{test,spec}.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
		plugins: {
			"testing-library": testingLibrary,
		},
		rules: {
			...testingLibrary.configs["flat/react"].rules,
		},
	},
	{
		rules: {
			"react/no-unescaped-entities": "off",
		},
	},
	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"coverage/**",
		"next-env.d.ts",
		"eslint.config.mjs",
		"jest.config.js",
		"jest.setup.js",
	]),
])

export default eslintConfig
