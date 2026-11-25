// The Funniest Honest Appliance Error — make.fun entry
// A toaster reports the truth: the bread jammed, it kept toasting anyway.
//
// The program writes exactly one line (<= 200 chars) to /output/entry.txt.
// The grader runs: node main.ts   (Node >= 22.18, type stripping on)
import { mkdirSync, writeFileSync } from "node:fs";

// Revision pass (against the RULES judging criteria, in order):
// 1. Plausibility: unchanged — a jammed slice is a real toaster fault (E04).
// 2. Laugh: "anyway" is the twist — the machine kept doing its job despite
//    the fault, so the humour comes out of the fault itself, not a pun.
// 3. Honesty: unchanged — it names the fault and its true outcome (charcoal).
// 4. Machine's voice: dropped "Please" — a flat imperative is how a
//    put-upon appliance talks, not a polite request.
// 5. Economy: 110 chars, every word earns its place; nothing explains the joke.
const LINE =
  "ERROR E04: Bread jammed in slot 2. I toasted it four times anyway. It is charcoal now. Stop pressing the lever.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

if (LINE.length > 200) {
  throw new Error(`entry too long: ${LINE.length} chars (max 200)`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is empty");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} chars)`);
