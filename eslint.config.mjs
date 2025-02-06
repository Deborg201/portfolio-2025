import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react/no-unescaped-entities": "off",  // Disable the no unescaped entities rule
    "quotes": [0],  // Allow all types of quotes (no preference)
    "avoidEscape": 0,  // Disable avoid escape rule
    "allowTemplateLiterals": 0,  // Allow template literals freely
    "no-useless-escape": "off",  // Disable the no useless escape rule
  },
};

export default eslintConfig;
