# Bloom — Daily Games (AGENTS.md)

## Project Overview
Bloom is a mobile-first brain games app that secretly embeds CMS-compliant BIMS (Brief Interview for Mental Status) cognitive assessments into casual gameplay. The target users are older women in healthcare facility lobbies. The clinical assessment must be completely invisible to the player — they should think they're just playing fun games.

## Architecture
- **Single-file HTML app** — all CSS, HTML, and JavaScript in one file (`bloom.html`)
- **No build system, no dependencies, no frameworks** — pure vanilla JS, CSS, HTML
- **Mobile-first** — max-width 430px, touch-optimized, safe-area-inset support
- **Persistent storage** — uses `window.storage` API (get/set/delete/list with async/await)
- **Fonts** — Nunito (body) + Cormorant Garamond (display) loaded from Google Fonts

## Design System
- **Colors**: coral (#E8736C), teal (#5B9B8A), honey (#E8B44D), plum (#7B5EA7), sky (#6AABE8), cream (#FFFCF7), ink (#2D2438)
- **Border radius**: 20px (large), 14px (medium), 10px (small)
- **Aesthetic**: Garden/floral theme, warm and feminine, zero clinical language
- **Tone**: Fun, relaxing, encouraging — never clinical, never condescending

## Critical Design Principles
1. **NO clinical language visible to players** — no "brain," "cognitive," "test," "assessment," "screening," "mental status," "score" (in clinical sense), "decline," "impairment"
2. **YES to**: "bonus round," "trivia," "challenge," "points," "streak," "level"
3. **Results use garden metaphors**: "Blooming Brilliantly" (13-15), "Growing Nicely" (8-12), "Keep Growing" (0-7)
4. **Clinical data** is hidden behind a toggle ("📋 Clinical Details") only visible to clinicians
5. **Respect the audience** — these are sharp women who watch westerns and play hangman. Don't sanitize or patronize.

## BIMS Assessment Integration
Every game embeds 3 BIMS phases as "bonus rounds" during natural gameplay:

### Phase 1 — Immediate Recall (C0200, 0-3 pts)
- Show 3 words (one wearable, one color, one furniture) with emojis
- Player repeats them back
- 1 point per correct word

### Phase 2 — Temporal Orientation (C0300, 0-6 pts)
- Year: 3 pts exact, 2 pts ±1yr, 1 pt ±2-5yr, 0 >5yr
- Month: 2 pts exact, 1 pt ±1mo, 0 otherwise
- Day of week: 1 pt exact, 0 otherwise
- Presented as "Daily Trivia"

### Phase 3 — Delayed Recall (C0400, 0-6 pts)
- Player recalls the 3 words from Phase 1
- Options: "I remember!" (no cue, 2pts), "Give me a hint" (with cue, 1pt), "Can't remember" (0pts)
- Presented as "Final Bonus"

### BIMS Total (C0500): 0-15 pts
- 13-15: Intact cognition
- 8-12: Moderate impairment  
- 0-7: Severe impairment

## Word Rotation System
- 24 wearables × 24 colors × 24 furniture = 13,824 unique combinations
- CMS official mode uses: sock, blue, bed (MDS 3.0 standard)
- Practice mode rotates through random combinations
- Toggle in Settings screen

## Current Games
1. **Bubble Pop** — tap floating bubbles, emoji-based, 90s timer
2. **Garden Match** — 4×4 memory card matching, 120s timer
3. **Tile Garden** — 6×6 mahjong-style tile matching, 120s timer
4. **Hangman** — classic stickman drawn on canvas, on-screen keyboard, 6 wrong guesses
5. **Tic Tac Toe** — player is X, goes first, AI deliberately plays badly so player wins ~70% of games

## Data Storage
```
DB = {
  patients: {
    [key]: {
      name: string,
      pid: string,       // optional patient ID
      scores: [{
        date: ISO string,
        bt: number,       // BIMS total 0-15
        d: {              // details
          ir: number,     // immediate recall 0-3
          or: number,     // orientation 0-6
          rc: number,     // recall 0-6
          gt: string,     // game type
          words: string[],// words used
          cms: boolean    // was CMS official mode
        }
      }]
    }
  }
}
```

## Testing Guidance
- Test on mobile viewport (430px wide)
- Verify BIMS bonus rounds trigger during gameplay
- Verify scores save to persistent storage
- Verify clinical panel shows correct MDS 3.0 scoring
- Check that NO clinical language is visible in normal gameplay flow

## File Structure
```
bloom.html    — the complete app (single file)
AGENTS.md     — this file
README.md     — project documentation
```
