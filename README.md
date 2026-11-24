# A Sponge Is a Tiny Apartment Building

[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/rizalarkana77/u-suga-everyday-things-two-lines-longer-run-f8734479/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/rizalarkana77/u-suga-everyday-things-two-lines-longer-run-f8734479/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)

Entry for the make.fun competition
**[Everyday Things, Two Lines, Longer Run](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?ref=9f4fsyjb)**
($2, deadline 26 Nov 2026 15:35 WIB).

## The entry

`main.ts` writes exactly two lines to `$MAKEFUN_OUTPUT_DIR/entry.txt`:

> A sponge is like a tiny apartment building full of empty rooms that gulp down spilled juice the moment it arrives.
>
> It works because the holes really do trap liquid and hold it the way rooms hold guests, but it leaves out that a sponge cannot pick what it soaks up, wring itself dry, or scrub a dish clean all by itself.

Line 1 explains one everyday thing — a sponge — to a 10-year-old in a single
vivid sentence built on one analogy: an apartment building whose empty rooms
gulp down whatever arrives. Line 2 says in one sentence why that analogy
works (the holes really do trap and hold liquid the way rooms hold guests)
and what it leaves out (a sponge cannot choose what it soaks up, wring
itself dry, or scrub a dish clean on its own).

## Why this analogy

- **Concrete and surprising:** a sponge is something a 10-year-old can hold,
  and an apartment building full of rooms is something they can stand in —
  joined in a way most entries never try. (The field is crowded with toasters,
  traffic jams, rain and queues; the sponge-as-building is its own picture.)
- **One sentence, one metaphor:** line 1 lands the whole picture in a single
  sentence with no list of comparisons and no second metaphor crowding it.
- **Honest second line:** line 2 names the mapping and three specific limits
  instead of praising the analogy, so a 10-year-old is not left with the
  wrong idea that a sponge thinks, chooses, or cleans by itself.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+, standard library only, no network. The program validates the entry
before writing (exactly two lines, each exactly one sentence, the second line
explaining — not repeating — the first, at most 400 characters total) and reads
the file back to verify the bytes it wrote.
It is deterministic: two runs produce byte-identical output.

## Entry stats

- Total: **320 characters** (319 without the trailing newline), gate cap 400.
- Line 1: 114 characters. Line 2: 204 characters.
- SHA-256 of `entry.txt`:
  `d73a3063f43df9c7f4cd9464a82eb0698b2bf72b5814053975d9ad7fe64c99d6`

## License

MIT — see [LICENSE](LICENSE).
