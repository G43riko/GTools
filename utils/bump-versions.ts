import { join } from "@std/path";
import { parseFlags } from "@cliffy/flags";

const PACKAGES_DIR = "workspaces";
const INDENT = /*DenoJSON.fmt.indentWidth ?? */ 4;
const { flags, unknown } = parseFlags(Deno.args, {
    stopEarly: true,
    flags: [
        {
            name: "dry-run",
            type: "boolean",
            default: true,
        },
        {
            name: "skip",
            type: "string",
            list: true,
        },
        {
            name: "verbose",
            aliases: ["v"],
            collect: true,
            value: (_, verbose = 0) => ++verbose,
        },
    ],
});
const bump = unknown[0]; // patch | minor | major

const skip = flags.skip;
const dryRun = flags.dryRun;
const verbose = flags.verbose;

if (verbose) {
    console.log(`Flags: skip=${skip.join("")} | dryRun=${dryRun} | verbose=${verbose}`);
}
// console.log("Parsed flags: %O", flags, {bump});
if (!["patch", "minor", "major"].includes(bump)) {
    console.error("Usage: deno run bump.ts patch|minor|major");
    Deno.exit(1);
}
let bumped = 0;
for await (const entry of Deno.readDir(PACKAGES_DIR)) {
    if (!entry.isDirectory) {
        continue;
    }

    if (skip.includes(entry.name)) {
        if (verbose) {
            console.log(`Skipping ignored directory '${entry.name}'`);
        }
        continue;
    }
    const path = join(PACKAGES_DIR, entry.name, "deno.json");
    const json = JSON.parse(await Deno.readTextFile(path));

    if (skip.includes(json.name)) {
        if (verbose) {
            console.log(`Skipping ignored package name '${json.name}'`);
        }
        continue;
    }
    if (!json.version) {
        console.error(`[Error]: There is missing version in '${path}'`);
        continue;
    }
    const [major, minor, patch] = json.version.split(".").map(Number);

    const next = bump === "patch"
        ? [major, minor, patch + 1]
        : bump === "minor"
        ? [major, minor + 1, 0]
        : [major + 1, 0, 0];

    const newVersion = next.join(".");
    console.log(`${json.name}: ${json.version} → ${newVersion}`);
    bumped++;
    if (!dryRun) {
        json.version = newVersion;
        await Deno.writeTextFile(path, JSON.stringify(json, null, INDENT) + "\n");
    }
}

console.log(`Updated ${bumped} packages`);
