import { mkdir, writeFile } from "node:fs/promises";

const joke = "I told my router a joke about Wi-Fi, but it didn't get the signal.";

if (joke.length > 200) throw new Error("joke exceeds 200 characters");

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", joke, "utf8");
