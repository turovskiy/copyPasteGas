function Copy(){
  //Таблица и лист откуда мы копируем
  var ss = SpreadsheetApp.openById("1u0aRlwb0rQHbjE9avbgCqIJSQ3EvPfTxT-h54jTQh8I")
  var sheet = ss.getSheetByName("https://t.me/google_sheets")
  
  //Забираем диапазон в переменную и фильтруем его по первому столбцу, по дате поста старше 1-го июня (в js месяца начинаются с 0)
   var data = sheet.getRange("A:D").getValues()
  .filter(function(row){return row[0] >= new Date(2019, 5, 1)}) 
  
  //Таблица и лист куда мы копируем
  var ss1 = SpreadsheetApp.openById("1VTh3v3IaSvK8fpTXOavfdHe7I4Entbr9OnQmDdBy_CM") 
  var sheet0 = ss1.getSheetByName("Лист1")
  
  //Удаляем данные из листа, в которым мы вставляем
  sheet0.clear()
  
  //Вставляем отфильтрованный по дате диапазон
  sheet0.getRange(1, 1, data.length, data[0].length).setValues(data)
  
  //флуш обновляет изменения
  SpreadsheetApp.flush()
}
