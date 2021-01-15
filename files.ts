// output to .vscode/settings.json
export const vscodeSettings = `{
  "deno.enable": true,
  "deno.unstable": true,
  "deno.lint": true,
  "[typescript]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  },
  "deno.import_intellisense_origins": {
    "https://deno.land": true
  },
  "prettier.resolveGlobalModules": true
}
`;

// output to .editorconfig
export const editorconfig = `# http://editorconfig.org

# Project Root, Don't Look Any Higher
root = true

# Default Settings For All Files
[*]
charset = utf-8
end_of_line = lf
indent_style = space # Spaces VS Tabs
indent_size = 2 # Two Spaces Wide
insert_final_newline = true
trim_trailing_whitespace = true

# JSON Settings
[*.{json}]
trim_trailing_whitespace = true

# Markdown & YAML Settings
[*.{md,yml}]
trim_trailing_whitespace = false
`;

// output to .prettierrc
export const prettierrc = `{
  "endOfLine": "lf",
  "trailingComma": "es5"
}
`;

// out to ./mod.ts
export const modts = `export {}
`;
