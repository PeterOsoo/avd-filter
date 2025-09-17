
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("⚡ CAP Tools")
    .addItem("🔍 Filter Strongroom", "filterStrongroom")
    .addToUi();
}
