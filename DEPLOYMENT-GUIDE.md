# Bloom Daily Games - Deployment Guide

Quick guide for deploying to test machines.

---

## For IT/Staff: Deploying the App

### Step 1: Copy the App
1. Navigate to: `D:\mmse_games\bloom-app\dist\`
2. Copy `Bloom-Daily-Games.exe` (84 MB)
3. Paste to shared drive or directly to test machines

### Step 2: Run on Test Machine
1. Double-click `Bloom-Daily-Games.exe`
2. Windows may show "Windows protected your PC" - click "More info" then "Run anyway"
3. App opens immediately - no installation required

### Step 3: First-Time Setup
1. Enter player's first name or nickname
2. Optional: Add room number or initials as ID
3. Click "Start Playing!"

---

## For Testers: Using the App

### Adding a Player
1. Open the app
2. Type name in "New Player" field
3. Click "Start Playing!"

### Playing Games
1. Tap any game tile to start
2. Play the game normally
3. "Bonus Rounds" may appear - these are fun challenges for extra points!
4. Results show at the end with your score

### Switching Players
1. Tap "Switch" on the home screen
2. Select your name from the list
3. Or add a new player

---

## Where Data is Stored

Each machine stores data locally:
```
%APPDATA%\bloom-daily-games\bloom-data.json
```

To find this folder:
1. Press `Win + R`
2. Type `%APPDATA%\bloom-daily-games`
3. Press Enter

---

## Collecting Test Data

After testing period:

1. On each test machine, navigate to the data folder (see above)
2. Copy `bloom-data.json`
3. Rename to include machine/location: `bloom-data-surface1.json`
4. Collect all files for analysis

---

## Troubleshooting

### App won't start
- Make sure you're running Windows 10 or 11
- Try running as Administrator (right-click → Run as administrator)

### "Windows protected your PC" warning
- Click "More info"
- Click "Run anyway"
- This is normal for unsigned apps

### Data not saving
- Make sure you have write permissions to AppData
- Try running as Administrator once

### App crashes
- Note what you were doing when it crashed
- Check if it happens consistently
- Report to development team

---

## Feedback Collection

Please note during testing:

**Players:**
- Which games do they enjoy most?
- Do they find any games confusing?
- Do they notice/mind the bonus rounds?
- Any frustration points?

**Technical:**
- Any crashes or freezes?
- Slow performance?
- Display issues?

**Clinical:**
- Is the clinical panel information sufficient?
- What export format would be helpful?
- How would this fit into charting workflow?

---

## Contact

For technical issues during testing, document the issue with:
- What you were doing
- What happened
- Screenshot if possible
- Machine type (Surface Pro, Dell laptop, etc.)
