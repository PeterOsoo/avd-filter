# Google Sheets Data Filter Automation

This Google Apps Script automates the process of filtering rows from a source sheet into two categories:  
- **Active (no completion value)**  
- **Completed (with completion value)**  

The script creates two new sheets each time it runs:
- `Filtered_Active` → contains rows still in progress  
- `Filtered_Completed` → contains rows that are done  

It rebuilds these sheets fresh on every run to ensure clean, up-to-date results.

---

## Features
- Automatically splits data into **active** and **completed** sets based on a column value.  
- Removes unwanted columns (configurable in the script).  
- Displays a toast notification with the number of rows processed.  
- Includes a scheduled trigger to run every **Wednesday at 9 AM** (customizable).  

---

## How It Works
1. **Source Sheet**  
   - The script looks for a sheet named `SourceData`.  
   - All rows are read, with the first row treated as headers.  

2. **Condition for Active vs Completed**  
   - If column D (`row[3]`) equals `"TargetCategory"`, the row is considered.  
   - If column AG (`row[32]`) has a value → the row is placed in **Completed**.  
   - If column AG is empty → the row is placed in **Active**.  

3. **Column Filtering**  
   - Certain columns are excluded from the final output (see `removeCols` array in code).  

4. **Output**  
   - Two new sheets are created: `Filtered_Active` and `Filtered_Completed`.  
   - Headers and filtered data are written into them.  

---

## Setup Instructions
1. Open your Google Sheet.  
2. Go to **Extensions > Apps Script**.  
3. Copy the code from [`Code.gs`](./Code.gs) into the editor.  
4. Update the following if needed:  
   - `SourceData` → replace with the name of your input sheet.  
   - `"TargetCategory"` → replace with the category/condition relevant to your data.  
   - Adjust the `removeCols` array to exclude/include the columns you want.  

5. Run the function `filterData()` to test.  
6. (Optional) Run `createWednesdayTrigger()` once to schedule an automatic run every Wednesday at 9 AM.  

---

## Example Use Case
- **Expense tracker** → Split transactions into “Pending” vs. “Reimbursed.”  
- **Project management** → Separate “Open” vs. “Closed” tasks.  
- **Data processing** → Filter rows based on status or category fields.  

---

## License
MIT License — free to use, modify, and share.  

---

## Author
Maintained by PO ✨  
