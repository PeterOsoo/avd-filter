
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("⚡ CAP Tools")
    .addItem("🔍 Filter Data", "filterData")
    .addToUi();
}
