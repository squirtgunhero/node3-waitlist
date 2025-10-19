# Google Sheets Waitlist Setup Guide

Follow these steps to connect your waitlist form to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "n3 Waitlist" (or whatever you prefer)
4. Keep this tab open

## Step 2: Open Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. This will open a new tab with the script editor
3. You'll see a default `Code.gs` file

## Step 3: Add the Script Code

1. Delete any existing code in `Code.gs`
2. Copy all the code from `google-apps-script.js` in your project folder
3. Paste it into the Apps Script editor
4. Click the **Save** icon (💾) or press `Ctrl/Cmd + S`
5. Name your project "n3 Waitlist Handler" when prompted

## Step 4: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "n3 Waitlist Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **IMPORTANT**: Copy the **Web app URL** - it should look like:
   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXX/exec
   ```

## Step 5: Configure Your Landing Page

You have two options:

### Option A: Environment Variable (Recommended)

1. Create a `.env` file in your project root:
   ```bash
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXXX/exec
   ```
2. Replace the URL with your actual Web app URL from Step 4

### Option B: Direct Code Update

1. Open `src/components/WaitlistForm.tsx`
2. Find line 34 where it says `'YOUR_SCRIPT_URL'`
3. Replace it with your Web app URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/XXXXXXXXXXXXX/exec';
   ```

## Step 6: Test It!

1. Restart your dev server if it's running:
   ```bash
   npm run dev
   ```
2. Open your landing page at http://localhost:3000
3. Submit a test email
4. Check your Google Sheet - you should see a new row with the submission!

## Step 7: Optional Enhancements

### Email Notifications

To receive an email when someone joins the waitlist:

1. Open your Apps Script
2. Find the commented section around line 35:
   ```javascript
   // MailApp.sendEmail({
   ```
3. Uncomment these lines (remove the `//`)
4. Replace `'your-email@example.com'` with your actual email
5. Save and **redeploy** the script (Deploy → Manage deployments → Edit → New version)

### View Your Data

Your Google Sheet will have three columns:
- **Timestamp**: When they submitted
- **Email**: Their email address
- **Submission Date**: Server-side timestamp

### Export Your Data

You can export to CSV anytime:
- File → Download → Comma Separated Values (.csv)

## Troubleshooting

### "YOUR_SCRIPT_URL" Error
- Make sure you've added the Web app URL to your `.env` file or directly in the code

### No Data Appearing in Sheet
- Check the browser console for errors
- Make sure you deployed the script as "Anyone" can access
- Verify the URL is correct (should end with `/exec`)

### CORS Errors
- The code uses `mode: 'no-cors'` which is correct for Google Apps Script
- You won't be able to read the response, but the data will still be saved

## Security Notes

- The script is public but only accepts POST requests
- Only email and timestamp data is collected
- No sensitive information is exposed
- You can make the sheet private (only you can view it)

## Need Help?

If something isn't working, check:
1. Apps Script execution logs (View → Executions in Apps Script)
2. Browser console for errors
3. Make sure the sheet has write permissions

---

**That's it!** Your waitlist is now saving to Google Sheets. 🎉

