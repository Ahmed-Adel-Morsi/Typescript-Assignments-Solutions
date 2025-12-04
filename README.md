**Typescript Assignments Solutions**

**Description**: My assignment solutions for the Elzero Web School TypeScript course. The repository contains solutions organized by lesson ranges and assignment number.

**Repository Structure**:

- **`From 01 to 11 lessons Assignments/`**: Assignments for lessons 1–11 (each assignment in its own folder).
- **`From 12 to 21 lessons Assignments/`**: Assignments for lessons 12–21.
- **`From 22 to 31 lessons Assignments/`**: Assignments for lessons 22–31.
- **`From 32 to 38 lessons Assignments/`**: Assignments for lessons 32–38.

Each assignment folder typically contains an `index.ts` (or `index.js`) file and sometimes a `tsconfig.json` specific to that assignment.

**How to run a single TypeScript assignment**:

1. Open a terminal (this repository was developed on Windows with `bash.exe`, these commands are compatible with that shell).
2. Change to the assignment folder you want to run. Example:

```bash
cd "From 01 to 11 lessons Assignments/Assignment-2"
```

3. Run the TypeScript file using `ts-node` (recommended for quick runs) or compile with `tsc` then run with `node`.

- Using `npx ts-node` (no global install required):

```bash
npx ts-node index.ts
```

- Or compile then run:

```bash
npx tsc index.ts
node index.js
```

Note: Some assignment folders include their own `tsconfig.json`. If you prefer compiling the whole project, run `npx tsc` from the folder with the `tsconfig.json`.

**Install dev tools (optional)**:

```bash
npm init -y
npm install --save-dev typescript ts-node @types/node

# Optionally add a local `tsconfig.json` if needed
npx tsc --init
```

**Notes & tips**:

- Some assignments are already compiled to `.js` next to the `.ts` file — you can run the `.js` directly with `node`.
- File paths in this repo contain spaces; wrap them in quotes when using `cd` in the terminal.
- If you want a central `tsconfig.json` or an automated script to run assignments, I can add a small `package.json` with convenient npm scripts.

**Contributing / Next steps**:

- If you'd like, I can add `package.json` scripts, a single workspace `tsconfig.json`, or a small runner script to choose and execute assignments by number.

**License**: This repo is the author's work (no license specified).
