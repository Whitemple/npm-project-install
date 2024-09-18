import jest from "eslint-plugin-jest";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("prettier"), {
    plugins: {
        jest,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...jest.environments.globals.globals,
            ymaps: true,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "import/prefer-default-export": "off",

        "max-len": ["error", {
            ignoreComments: true,
            ignoreUrls: true,
        }],

        "import/extensions": [0, {
            js: "always",
        }],

        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
        }],
    },
}];