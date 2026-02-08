# Bloom Daily Games - Project Status

**Last Updated:** February 8, 2026
**Status:** Phase 1 Complete - Ready for User Testing

---

## Project Summary

Bloom is a cognitive wellness gaming app for geriatric patients (ages 65-110) that embeds CMS-compliant BIMS assessments invisibly within fun, casual gameplay. Players enjoy games without realizing they're being cognitively assessed.

### Key Innovation
- BIMS cognitive test disguised as "Bonus Rounds"
- No clinical language visible to players
- Garden metaphors for results ("Blooming Brilliantly" instead of "Intact Cognition")
- Statistical tracking over time for early decline detection

---

## Completed Work (Phase 1)

### Milestone 1A: Electron App Window ✅
- Created Electron wrapper for bloom.html
- Window opens correctly at 480x800 (mobile-friendly size)
- Clean, professional appearance

### Milestone 1B: Persistent Storage ✅
- Implemented IPC-based file storage
- Player data persists across app restarts
- Data saved to: `%APPDATA%\bloom-daily-games\bloom-data.json`

### Milestone 1C: Portable .exe Build ✅
- Built distributable Windows executable
- **File:** `D:\mmse_games\bloom-app\dist\Bloom-Daily-Games.exe` (84 MB)
- No installation required - just double-click to run
- Each user's data saved to their Windows profile

---

## Games Included

| Game | Description | BIMS Integration |
|------|-------------|------------------|
| Bubble Pop | Tap floating bubbles | Triggers after 8 pops |
| Garden Match | 4x4 memory card matching | Triggers after 3 matches |
| Tile Garden | Mahjong-style tile matching | Triggers after 4 matches |
| Hangman | Classic word guessing with hints | Triggers after round 2 |
| Tic Tac Toe | Play against "dumb" AI | Triggers after round 2 |

---

## Features Implemented

### Gameplay
- 5 fully functional games
- Category hints in Hangman (e.g., "Category: Food")
- Extra hint button appears after 3 wrong guesses
- Clear correct/wrong feedback with checkmarks

### BIMS Assessment
- Immediate Recall (3 words with emojis)
- Temporal Orientation (year, month, day-of-week)
- Delayed Recall (with optional hints)
- 13,824 unique word combinations (37+ years without repeats)
- CMS Official mode toggle (sock, blue, bed)

### Assessment Frequency
- Game 1: Full BIMS assessment
- Games 2-6: Just fun gameplay
- Game 7: BIMS assessment
- Repeats every 7 games

### Data Tracking
- Per-player profiles
- Game count tracking
- BIMS scores with breakdown (IR, OR, RC)
- Historical trend charts
- Clinical panel for MDS 3.0 documentation

---

## File Structure

```
D:\mmse_games\
├── bloom.html              # Master game file (edit this)
├── bloom-app\              # Electron app
│   ├── main.js             # Electron main process
│   ├── preload.js          # IPC storage bridge
│   ├── bloom.html          # Copy of master (auto-copied on build)
│   ├── package.json        # App config & build settings
│   ├── node_modules\       # Dependencies (don't edit)
│   └── dist\               # Built executables
│       └── Bloom-Daily-Games.exe  # THE APP TO DISTRIBUTE
├── AGENTS.md               # Developer documentation
├── README.md               # Project overview
├── PROJECT-STATUS.md       # This file
├── NEXT-STEPS.md           # Future development guide
└── planning chat.txt       # Original planning notes
```

---

## How to Resume Development

### Prerequisites
- Node.js v22+ (already installed)
- npm 10+ (already installed)

### Quick Start
```bash
cd D:\mmse_games\bloom-app
npm start                    # Run in development mode
npm run build               # Build new .exe
```

### After Editing bloom.html
Always copy to app folder before building:
```bash
cp D:\mmse_games\bloom.html D:\mmse_games\bloom-app\bloom.html
npm run build
```

---

## User Testing Phase

### Distribution
1. Copy `D:\mmse_games\bloom-app\dist\Bloom-Daily-Games.exe` to shared drive
2. Staff copies to their Surface Pro or laptop
3. Double-click to run - no installation needed

### What to Observe
- Do players understand how to add themselves?
- Are games too easy/hard?
- Is bonus round timing disruptive?
- Any confusion or frustration points?
- Do players enjoy the experience?

### Data Collection
- Each device saves data locally
- To collect: Navigate to `%APPDATA%\bloom-daily-games\bloom-data.json`
- Copy JSON files from each test device for analysis

---

## Known Issues

1. **GPU Cache Warnings** - Harmless Electron errors about disk cache, don't affect functionality
2. **No App Icon** - Using default Electron icon (cosmetic only)

---

## Contact

Built with Claude Code (Opus 4.5)
"Your neurubulus pal" 🧠🌸
