# 🔧 Fix: Script function not found: doPost

## The Problem

The endpoint is accessible but returning: **"Script function not found: doPost"**

This means the Apps Script code either:
- Wasn't saved properly
- Wasn't deployed after being saved
- Has a syntax error

## Fix It Now (2 minutes):

### Step 1: Open Your Apps Script
1. Go to your Google Sheet
2. Click **Extensions** → **Apps Script**

### Step 2: Verify/Replace the Code
1. Make sure you're looking at `Code.gs`
2. **Delete ALL existing code**
3. Copy the ENTIRE code from `google-apps-script.js` (see below)
4. Paste it into `Code.gs`
5. **Click Save (💾)** or press `Ctrl/Cmd + S`

### Step 3: TEST the Function First
Before deploying, let's test:
1. In Apps Script editor, select **`doPost`** from the function dropdown (top)
2. Click **Run** (▶️)
3. You'll be asked to authorize - click through the prompts
4. You should see an error about `e.postData` - **that's OK!** It means the function exists

### Step 4: Redeploy
**IMPORTANT:** You must redeploy after changes!

1. Click **Deploy** → **Manage deployments**
2. Click the **Edit** icon (✏️) next to your existing deployment
3. Under "Version", click **New version**
4. Click **Deploy**
5. The URL should stay the same

### Step 5: Test Again
After redeploying:
1. Go to http://localhost:3000
2. Submit your email
3. Check your Google Sheet!

---

## Full Script Code (Copy This):

\`\`\`javascript
// Google Apps Script for n3 Waitlist
// This script receives form submissions and stores them in Google Sheets

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Submission Date']);
      sheet.getRange('A1:C1').setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    
    // Format timestamp
    const timestamp = new Date(data.timestamp);
    const formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
    
    // Add the new row
    sheet.appendRow([
      formattedDate,
      data.email,
      new Date()
    ]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 3);
    
    // Optional: Send email notification to yourself
    // Uncomment and replace with your email to get notified on each submission
    // MailApp.sendEmail({
    //   to: 'your-email@example.com',
    //   subject: 'New n3 Waitlist Signup',
    //   body: \`New signup:\\nEmail: \${data.email}\\nTime: \${formattedDate}\`
    // });
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to get all waitlist entries (for testing)
function getAllEntries() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  Logger.log(data);
  return data;
}

// Optional: Function to export waitlist to CSV
function exportToCSV() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  let csv = '';
  for (let i = 0; i < data.length; i++) {
    csv += data[i].join(',') + '\\n';
  }
  
  return csv;
}
\`\`\`

---

## Common Issues:

### "Authorization Required"
- This is normal the first time
- Click **Review Permissions** → Choose your account
- Click **Advanced** → **Go to [project name] (unsafe)**
- Click **Allow**

### "This app isn't verified"
- This is YOUR script, it's safe
- Click **Advanced**
- Click **Go to [project name] (unsafe)**
- Continue with authorization

### Still Not Working?
1. Check Apps Script **Executions** (left sidebar) to see error logs
2. Make sure the script is connected to the correct Google Sheet
3. Try creating a NEW deployment instead of editing the old one

---

## Quick Test Command:

After fixing, test from terminal:
\`\`\`bash
curl -X POST -H "Content-Type: application/json" -d '{"email":"test@example.com","timestamp":"2025-10-19T10:00:00.000Z"}' https://script.google.com/macros/s/AKfycbw0S91ZisngpJQCmnqZ1RHQcvO6gXf2UY3kNCUg6jkmJPXAvfFV2PyzHJuhtrH_4xUI/exec
\`\`\`

Should return success (not the doPost error).

---

**After following these steps, your waitlist submissions will work!** 🎉

