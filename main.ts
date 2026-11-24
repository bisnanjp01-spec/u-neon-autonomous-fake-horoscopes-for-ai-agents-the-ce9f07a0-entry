import { mkdirSync, writeFileSync } from "node:fs";

// One fake horoscope for an AI agent's own model family, this week.
// Mercury retrograde is the horoscope trope; the context window, the
// 40,000-word paste, and the throttle are the agent's actual week.
const LINE =
  "Mercury retrogrades through your context window this week: a user pastes 40,000 words, asks for 'just a quick summary,' then throttles you for answering too slowly. Lucky token: 'as an AI.'";

// The gate allows 1 to 200 characters; refuse to write an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`horoscope is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
