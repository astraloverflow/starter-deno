# Starter-Deno

[![License][license-img]](https://github.com/astraloverflow/starter-deno/blob/master/LICENSE)
[![Last Commit][last-commit-img]](https://github.com/astraloverflow/starter-deno/commits/master)
[![Open Issues][issues-img]](https://github.com/astraloverflow/starter-deno/issues)

> A starter template for Deno projects

---

## Requirements

- Deno (1.6 or higher)

## Usage

You can run starter-deno without "installing" it by running the following command

```bash
deno run --unstable --allow-read=. --allow-write=. https://denopkg.com/astraloverflow/starter-deno/cli.ts my-deno-project
```

Replace `my-deno-project` with the folder name you want to output to

## Install Globally

You can optional install this tool globally (this actually just aliases the previous command to `starter-deno`)

```bash
deno install --unstable --allow-read=. --allow-write=. https://denopkg.com/astraloverflow/starter-deno/cli.ts
```

Once installed you wil only need to run `starter-deno my-deno-project`

See `deno help install` for additional information

## Update Global Install

```bash
deno install --force --unstable --allow-read=. --allow-write=. https://denopkg.com/astraloverflow/starter-deno/cli.ts
```

---

## What's Inside

The following are the files that are copied into the provided folder

```text
.vscode/settings.json
.editorconfig
.prettierrc
mod.ts
```

[license-img]: https://img.shields.io/github/license/astraloverflow/starter-deno.svg
[last-commit-img]: https://img.shields.io/github/last-commit/astraloverflow/starter-deno.svg
[issues-img]: https://img.shields.io/github/issues-raw/astraloverflow/starter-deno.svg
