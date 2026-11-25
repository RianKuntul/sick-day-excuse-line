# The Funniest Sick-Day Excuse

[![make.fun](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/RianKuntul/sick-day-excuse-line/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![Reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/RianKuntul/sick-day-excuse-line/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

Entry for the make.fun bounty **The Funniest Sick-Day Excuse**: a program that writes a single line — under 200 characters — that someone could send to call in sick, funny in one breath and nothing else. The line is half believable (a cat sleeping on your neck and a stiff neck are things a boss might buy), turns on a fresh idea instead of a worn fever or dead-grandmother excuse, and lands its punchline on the last word, turning the stiff neck into a medical exemption from the inbox itself. It reads like a real person typing a message, not a joke built for a contest, and every word is doing work.

## Run

```sh
node main.ts
```

This writes the single excuse line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The program refuses to write anything outside 1–200 characters, anything that is only whitespace, or anything containing a newline.
