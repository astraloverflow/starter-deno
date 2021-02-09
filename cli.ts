import * as files from "./files.ts";
import {
  ensureDirSync,
  existsSync,
} from "https://deno.land/std@0.86.0/fs/mod.ts";
import * as colors from "https://deno.land/std@0.86.0/fmt/colors.ts";

const projectPath = Deno.args[0].endsWith("/")
  ? Deno.args[0]
  : Deno.args[0] + "/";

if (
  existsSync(projectPath + ".vscode/settings.json") === false &&
  existsSync(projectPath + ".editorconfig") === false &&
  existsSync(projectPath + ".prettierrc") === false &&
  existsSync(projectPath + "mod.ts") === false
) {
  console.log(colors.bold(colors.blue(`No conflicts in ${projectPath}`)));

  ensureDirSync(projectPath);
  ensureDirSync(projectPath + ".vscode/");

  Deno.writeTextFileSync(
    projectPath + ".vscode/settings.json",
    files.vscodeSettings,
  );
  console.log(colors.italic("- Copied .vscode/settings.json"));

  Deno.writeTextFileSync(projectPath + ".editorconfig", files.editorconfig);
  console.log(colors.italic("- Copied .editorconfig"));

  Deno.writeTextFileSync(projectPath + ".prettierrc", files.prettierrc);
  console.log(colors.italic("- Copied .prettierrc"));

  Deno.writeTextFileSync(projectPath + "mod.ts", files.modts);
  console.log(colors.italic("- Copied mod.ts"));

  console.log(colors.green("Done"));
} else {
  console.log(colors.bold(colors.red(`[!] Conflicts in ${projectPath}`)));

  console.log(colors.italic(`- Didn't copy .vscode/settings.json
- Didn't copy .editorconfig
- Didn't copy .prettierrc
- Didn't copy mod.ts`));

  console.log(colors.bold(colors.red(`Canceled`)));
}
