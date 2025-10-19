# 🚀 Quick Start - Google Sheets Integration

## What You Need to Do (5 minutes):

### 1️⃣ Create Google Sheet
- Go to [sheets.google.com](https://sheets.google.com)
- Create new blank sheet
- Name it "n3 Waitlist"

### 2️⃣ Add Script
- In sheet: **Extensions** → **Apps Script**
- Copy code from `google-apps-script.js`
- Paste and save

### 3️⃣ Deploy
- Click **Deploy** → **New deployment**
- Type: **Web app**
- Execute as: **Me**
- Who has access: **Anyone**
- Click **Deploy**
- Copy the URL (looks like: `https://script.google.com/macros/s/XXXXX/exec`)

### 4️⃣ Configure Website
Create a `.env` file in project root:
```
VITE_GOOGLE_SCRIPT_URL=YOUR_URL_HERE
```

### 5️⃣ Restart Server
```bash
npm run dev
```

## ✅ Test It
1. Go to http://localhost:3000
2. Enter test email
3. Click "Join Waitlist"
4. Check your Google Sheet!

---

📖 **Need help?** See `GOOGLE_SHEETS_SETUP.md` for detailed instructions.

## What Happens Now:
- Every submission goes to your Google Sheet
- Data includes: timestamp, email
- You can export to CSV anytime
- (Optional) Get email notifications on each signup

