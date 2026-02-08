# Bloom Daily Games - Next Steps

After user testing is complete, here's the roadmap for continued development.

---

## Phase 2: Multi-Player Security

**Goal:** Prevent grandkids from playing as grandma and corrupting data

### Tasks
1. Add player PIN (4-digit code) for profile access
2. Integrate Windows Hello facial recognition
3. Add session timeout (re-verify after 30 min inactivity)
4. Lock player switching behind verification

### Technical Notes
- Windows Hello: Use `@peerq/windows-hello` npm package
- PIN storage: Hash with bcrypt, store in player profile
- Fallback: Always allow PIN if Windows Hello unavailable

### Estimated Time: 1 day

---

## Phase 3: Azure Integration

**Goal:** Sync data to cloud for longitudinal analysis and multi-device support

### Architecture
```
[Bloom App] → [Azure Functions API] → [Cosmos DB]
                                    → [Blob Storage (exports)]
```

### Azure Resources Needed
1. **Azure Function App** - API endpoints
2. **Cosmos DB** - Patient data (HIPAA compliant)
3. **Blob Storage** - CSV exports
4. **Application Insights** - Monitoring (optional)

### API Endpoints
```
POST /api/sessions          Upload game session
GET  /api/patients/{id}     Get patient history
POST /api/export            Generate CSV export
GET  /api/stats             Aggregate statistics
```

### Data Schema (Cosmos DB)
```json
{
  "id": "session_uuid",
  "patientId": "patient_uuid",
  "deviceId": "device_fingerprint",
  "timestamp": "2026-02-08T14:30:00Z",
  "timeOfDay": "afternoon",
  "gameType": "Hangman",
  "bimsTotal": 14,
  "bimsBreakdown": {
    "immediateRecall": 3,
    "orientation": 5,
    "delayedRecall": 6
  },
  "wordsUsed": ["hat", "blue", "chair"],
  "cmsOfficial": false,
  "gameScore": 450,
  "demographics": {
    "facility": "Main Office",
    "ageGroup": "75-84"
  }
}
```

### Statistical Analysis Features
- Mean/median BIMS by time of day
- Trend analysis per patient
- Demographic group comparisons
- Decline detection alerts

### Estimated Time: 2-3 days

---

## Phase 4: Microsoft Store Submission

**Goal:** Publish to Microsoft Store for easy deployment

### Prerequisites
1. Microsoft Partner Center account ($19 one-time)
2. App icon (512x512 PNG)
3. Screenshots (1366x768 minimum)
4. Privacy policy URL
5. Age rating questionnaire

### Package Changes
```bash
npm run build-installer    # Creates MSIX installer
```

### Store Listing Content
- **Name:** Bloom - Daily Games
- **Category:** Health & Fitness or Puzzle & Trivia
- **Description:** Fun daily games to keep your mind sharp
- **Privacy:** Collects gameplay data for wellness tracking

### Certification Notes
- No in-app purchases
- No ads
- Health-related claims need careful wording
- Avoid "medical" or "diagnostic" language

### Estimated Time: 1-2 days (plus Microsoft review time)

---

## Phase 5: Additional Features (Future)

### More Games
- Word Search
- Sudoku (simple 4x4)
- Picture Matching
- Trivia categories

### Enhanced Assessments
- SLUMS integration (optional)
- MMSE integration (optional)
- Custom facility assessments

### Reporting Dashboard
- Web-based clinician portal
- Patient trend visualization
- Exportable reports for charting
- Alert system for decline detection

### Accessibility
- Larger touch targets option
- High contrast mode
- Screen reader support
- Adjustable game speed

---

## Quick Reference Commands

```bash
# Navigate to project
cd D:\mmse_games\bloom-app

# Run in development
npm start

# Build portable .exe
npm run build

# Build installer
npm run build-installer

# Update bloom.html in app
cp D:\mmse_games\bloom.html D:\mmse_games\bloom-app\bloom.html
```

---

## Questions to Answer from User Testing

Before Phase 2, gather feedback on:

1. **Player Management**
   - How do staff prefer to set up new players?
   - Is the current name/ID system sufficient?
   - Do they need patient photo display?

2. **Game Experience**
   - Which games are most popular?
   - Are any games too difficult?
   - Is bonus round timing comfortable?

3. **Clinical Workflow**
   - How will results be documented in EMR?
   - Who reviews the clinical panel?
   - What export format is preferred?

4. **Technical**
   - Any crashes or freezes?
   - Performance on older devices?
   - Display issues on different screen sizes?

---

## Resuming Development with Claude

When ready to continue, start a new session and say:

> "I'm continuing work on the Bloom cognitive games app. Please read PROJECT-STATUS.md and NEXT-STEPS.md in D:\mmse_games to get up to speed. I've completed user testing and here's what I learned: [feedback]"

This will help Claude quickly understand the project state and continue where we left off.

---

**Ready when you are, neurubulus pal!** 🧠🌸
