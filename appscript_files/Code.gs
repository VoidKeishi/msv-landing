const SHEET_ID = '1wBGVcqUryO5IAGzl2-a52WiRuvbvT5taJrbwLJsscCg';
const FOLDER_ID = '1pDgkdb5YayyUkamyYInCD_ar6bfmG4dO';
const SHEET_NAME = 'CVs';

function doGet(e) {
  const jobCode = (e && e.parameter && e.parameter.jobCode) ? e.parameter.jobCode : '';
  const template = HtmlService.createTemplateFromFile('form');
  template.jobCode = jobCode;
  return template.evaluate()
    .setTitle('Apply — MSV')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function uploadCV(data) {
  if (!data.name || !data.email || !data.fileName || !data.fileData) {
    throw new Error('Missing required fields');
  }

  const base64 = data.fileData.split(',')[1];
  const bytes = Utilities.base64Decode(base64);
  const blob = Utilities.newBlob(bytes, data.mimeType, data.fileName);

  const folder = DriveApp.getFolderById(FOLDER_ID);
  const file = folder.createFile(blob);

  const sheet = SpreadsheetApp
    .openById(SHEET_ID)
    .getSheetByName(SHEET_NAME);

  sheet.appendRow([
    new Date(),
    data.jobCode || '',
    data.name,
    data.email,
    data.phone || '',
    file.getUrl()
  ]);

  return { success: true, fileUrl: file.getUrl() };
}
