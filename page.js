var Excel = require("exceljs");


  


 var filename= "D:/dump/new.xlsx"; // existing filepath
  var workbook = new Excel.Workbook();

workbook.xlsx.readFile(filename)
    .then(function() {
        var worksheet = workbook.getWorksheet(1);
    worksheet.columns = [
    { header: 'Id',  width: 10 },
    { header: 'Name', width: 32 },
    { header: 'D.O.B.', width: 10 }
];
        var size=worksheet.rowCount+1;
        console.log(size)
      var row = worksheet.getRow(size);
        row.getCell(1).value = scenario();
        row.getCell(2).value=name();
        row.commit();
         return workbook.xlsx.writeFile('D:/dump/new.xlsx');
      })


function scenario(){
var scenario="test"
return scenario;
}

function name()
{

var name="praveen"
return name;
}
