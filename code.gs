// Parse_OE (On Edit)
function Parse_OE() {
  // Setup Sheets
    var sheet = SpreadsheetApp.getActive();
    var sd_file = sheet.getSheetByName("Student Data");
    var kinder = sheet.getSheetByName("KG");
    var first = sheet.getSheetByName("First");
    var second = sheet.getSheetByName("Second");
    var third = sheet.getSheetByName("Third");
    var fourth = sheet.getSheetByName("Fourth");
    var fifth = sheet.getSheetByName("Fifth");

  // Grab Value From Entry Page's Cell
    var placard = sheet.getRange("Entry!C2");
    var placard_val = placard.getValues();

  // Grab Student Data from Seperate Sheet
    var stu_data = sd_file.getDataRange().getValues();


    // Search for same values
    stu_data.forEach((val, ind) => {
        // console.log(placard_val)
  
        // Add Student Name(s) & Number to appropriate grade's sheet
        if (val[3] == placard_val){
          if (val[5] == "KG") {
            // console.log(stu_data[ind]);
            kinder.appendRow(stu_data[ind]);
          } 
          else if (val[5] == "1") {
            // console.log(stu_data[ind]);
            first.appendRow(stu_data[ind]);
          }
          else if (val[5] == "2") {
            // console.log(stu_data[ind]);
            second.appendRow(stu_data[ind]);
          }
          else if (val[5] == "3") {
            // console.log(stu_data[ind]);
            third.appendRow(stu_data[ind]);
          }
          else if (val[5] == "4") {
            // console.log(stu_data[ind]);
            fourth.appendRow(stu_data[ind]);
          }
         else if (val[5] == "5"){
            // console.log(stu_data[ind]);
            fifth.appendRow(stu_data[ind]);
          }
         else {
           // No Grade / Unformatted Grade provided by CS. Add student to all grade sheets.
            kinder.appendRow(stu_data[ind]);
            first.appendRow(stu_data[ind]);
            second.appendRow(stu_data[ind]);
            third.appendRow(stu_data[ind]);
            fourth.appendRow(stu_data[ind]);
            fifth.appendRow(stu_data[ind]);
          }
        }
    })

    // Clear Cell of data
    placard.clearContent();
}

// For Clear Release button. Resets all sheets. ** Cannot have more than 250 rows or must increase A2:F250 value in argument **
function ClearRelease() {
  // Setup Sheet
    var sheet = SpreadsheetApp.getActive();

  // Clear all grade sheet content besides headers
    sheet.getSheetByName("KG").getRange("A2:F250").clearContent();
    sheet.getSheetByName("First").getRange("A2:F250").clearContent();
    sheet.getSheetByName("Second").getRange("A2:F250").clearContent();
    sheet.getSheetByName("Third").getRange("A2:F250").clearContent();
    sheet.getSheetByName("Fourth").getRange("A2:F250").clearContent();
    sheet.getSheetByName("Fifth").getRange("A2:F250").clearContent();

  SpreadsheetApp.getUi().alert('Release Cleared Successfully...');
}

function CheckSetDate() {

// Check for Last Update and Remind in Alert
  // Grab range from README csv
    var sheet = SpreadsheetApp.getActive();
    var current_date = sheet.getSheetByName("README").getRange("D16");

    if (current_date.getValue() == "") {
      // Set Current Date since none exists yet
        var temp_date = new Date().toDateString();
        current_date.setValue(temp_date);
    }

}

CheckSetDate()
