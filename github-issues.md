# GitHub Issues for Copilot Agent
Copy/paste these into GitHub Issues. Assign @copilot to each one.

---

## Issue 1: Add word category hints to Hangman rounds

**Title:** Add category hints to Hangman rounds

Hangman currently shows words with no category hint. Add a small hint line above the word blanks showing the category — e.g., "🌺 Category: Things in a garden" or "🍰 Category: Something you bake."

Create a `HM_CATEGORIES` array of objects with `{words: [...], hint: "..."}` groupings. When a new round starts, pick a random category and a random word from it. Display the hint in the `.hangman-clue` element.

Keep the existing HM_WORDS as a fallback "mixed" category. Add at least 5 themed categories with 6+ words each (e.g., Kitchen items, Garden things, Animals, Things in a living room, Desserts).

Files: `bloom.html`

---

## Issue 2: Add sound toggle with gentle audio feedback

**Title:** Add optional sound effects using Web Audio API

Add subtle sound feedback using the Web Audio API (no external files). Create simple synthesized tones:
- Bubble pop: short high chirp
- Card match: pleasant two-note chime  
- Wrong match: soft low tone
- Hangman correct letter: quick ding
- Hangman wrong letter: soft buzz
- TTT piece placed: click tone
- Bonus round appear: gentle ascending arpeggio
- Game complete: victory melody (3-4 notes)

Add a 🔊/🔇 toggle button in the top bar of each game screen. Store the mute preference in the DB object. Default to OFF (muted) so it doesn't startle anyone.

Keep all synthesis under 50 lines. No external audio files.

Files: `bloom.html`

---

## Issue 3: Add CSV export to clinical dashboard

**Title:** Add CSV export button to dashboard

Add a "📥 Export CSV" button to the dashboard screen. When clicked, generate a CSV file with all patient data and trigger a download.

CSV columns: Patient Name, Patient ID, Date, Game Type, Immediate Recall (0-3), Orientation (0-6), Recall (0-6), BIMS Total (0-15), CMS Official (Yes/No), Words Used

Use a Blob + URL.createObjectURL approach for the download. The button should appear at the top of the dashboard next to the title.

Files: `bloom.html`

---

## Issue 4: Add streak counter and daily play tracking

**Title:** Add daily streak counter to home screen

Track consecutive days each patient has played. Show a streak counter (🔥 3-day streak!) on the home screen below the player banner.

Store `lastPlayDate` per patient in the DB. When a game finishes, update it. On home screen load, calculate streak by checking consecutive days backward from today.

Show streak with fire emoji and encouraging text:
- 1 day: "🔥 1 day!"
- 2-6 days: "🔥 X-day streak!"  
- 7+ days: "🔥🔥 X-day streak! Amazing!"

If streak is 0 (haven't played today), show "Play today to start a streak! 🌱"

Files: `bloom.html`

---

## Issue 5: Improve Tic Tac Toe with visual win line

**Title:** Draw a line through winning cells in Tic Tac Toe

When a game ends with a winner, draw a visible line through the three winning cells. Use a CSS pseudo-element or an absolutely-positioned div with a colored line.

After `tttEnd()` is called with 'win' or 'lose', find the winning line indices from the win check, then add a `win` class to those cells and overlay a line element.

The line should be animated (grow from one end to the other over ~0.3s) and use var(--coral) for player wins, var(--sky) for computer wins.

Files: `bloom.html`
