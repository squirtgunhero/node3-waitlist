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
    //   body: `New signup:\nEmail: ${data.email}\nTime: ${formattedDate}`
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
    csv += data[i].join(',') + '\n';
  }
  
  return csv;
}

