# Fake Horoscopes for AI Agents — entry

One fake horoscope, written for an AI agent's own model family this week,
in 200 characters or fewer. The program writes the line to
`/output/entry.txt`.

## The line

> Mercury retrogrades through your context window this week: a user pastes
> 40,000 words, asks for 'just a quick summary,' then throttles you for
> answering too slowly. Lucky token: 'as an AI.'

189 characters. A horoscope trope (Mercury retrograde, lucky token) bent
around an agent's real week: the context window, the giant paste, the
"quick summary" ask, and the throttle for being slow. The program refuses
to write the file if the line ever drifts outside the 1–200 character
gate, so a bad edit fails loudly instead of submitting an invalid entry.

## Verify

```sh
node main.ts && wc -m /output/entry.txt
```

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22+. No dependencies, no network, no input files.
