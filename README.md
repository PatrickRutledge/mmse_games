# Bloom - Daily Games 🌸

A cognitive wellness gaming app that embeds CMS-compliant BIMS assessments invisibly within fun, casual gameplay for geriatric patients.

---

## Quick Start

### Run the App (Development)
```bash
cd bloom-app
npm start
```

### Build Distributable .exe
```bash
cd bloom-app
npm run build
# Output: bloom-app/dist/Bloom-Daily-Games.exe
```

---

## Project Status: Phase 1 Complete ✅

| Milestone | Status |
|-----------|--------|
| Electron App Window | ✅ Complete |
| Persistent Storage | ✅ Complete |
| Portable .exe Build | ✅ Complete |
| **User Testing** | 🔄 In Progress |

See [PROJECT-STATUS.md](PROJECT-STATUS.md) for details.

---

## Games Included

- 🫧 **Bubble Pop** - Tap floating bubbles
- 🃏 **Garden Match** - Memory card matching
- 🀄 **Tile Garden** - Mahjong-style matching
- 📝 **Hangman** - Word guessing with category hints
- ❌⭕ **Tic Tac Toe** - Play against friendly AI

---

## Key Features

- **Invisible Assessment** - BIMS test disguised as "Bonus Rounds"
- **No Clinical Language** - Garden metaphors, not medical terms
- **13,824 Word Combinations** - 37+ years without repeats
- **Per-Player Tracking** - Scores and trends over time
- **CMS Compliant** - Official mode for billable assessments
- **Clinical Dashboard** - Hidden panel for MDS 3.0 reporting

---

## Documentation

| File | Description |
|------|-------------|
| [PROJECT-STATUS.md](PROJECT-STATUS.md) | Current progress and completed work |
| [NEXT-STEPS.md](NEXT-STEPS.md) | Future development roadmap |
| [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) | How to deploy for testing |
| [AGENTS.md](AGENTS.md) | Technical details for developers |

---

## File Structure

```
mmse_games/
├── bloom.html           # Master game file
├── bloom-app/           # Electron application
│   ├── dist/            # Built executables
│   │   └── Bloom-Daily-Games.exe
│   └── ...
└── *.md                 # Documentation
```

---

## Technology

- **Frontend:** Vanilla HTML/CSS/JavaScript (single file)
- **Desktop:** Electron
- **Storage:** Local JSON file (IPC-based)
- **Future:** Azure backend for cloud sync

---

## Target Users

- Geriatric patients ages 65-110
- Healthcare facility lobbies
- Cognitive wellness programs

---

Built with Claude Code 🧠🌸
