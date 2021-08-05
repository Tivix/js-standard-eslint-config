module.exports = () => {
  const tsconfigPath = "./tsconfig.json";

  return {
    files: ["*.ts", "*.tsx"],
    extends: [
      "plugin:import/typescript",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: tsconfigPath
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowTypedFunctionExpressions: true,
          allowExpressions: true,
          allowHigherOrderFunctions: true
        }
      ],
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/no-explicit-any": 2,
      "import/no-default-export": 2,
      "import/prefer-default-export": 0,
      "react/jsx-filename-extension": 0,
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": 0,
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/no-floating-promises": "off"
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        node: {},
        ts: {
          directory: tsconfigPath
        }
      }
    },
    overrides: [
      {
        files: ["*.stories.*"],
        rules: {
          "import/no-default-export": 0
        }
      }
    ]
  };
};
