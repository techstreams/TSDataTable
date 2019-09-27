# TSDataTable

**TSDataTable** is a simple elegant data table publishing tool for Google Sheets &amp; Sites.  

See the [blog post](https://medium.com/@techstreams/tsdatatable-simple-elegant-data-tables-for-google-sheets-sites-28ccd35385d0).

![](img/Diagram1.png)


**TSDataTable** employs [Google Apps Script](https://developers.google.com/apps-script) inside a [Google Sheet](https://www.google.com/sheets/about/) to retrieve data from the *first sheet*, filter the data based on hidden rows and columns, cache the data to speed loading and display data in a nicely formatted, paginated and searchable data table. 

**TSDataTable** display options are configurable and the resulting site can be standalone or embedded in [Google Sites](https://medium.com/r/?url=https%3A%2F%2Fgsuite.google.com%2Fproducts%2Fsites%2F).

**TSDataTable** is intended for data table publishing within a [G Suite for Business](https://gsuite.google.com/solutions/) or [G Suite for Education](https://edu.google.com/products/gsuite-for-education) domain.

---

## Getting Started

### Installation

* Login to [Google Drive](https://drive.google.com/)

* Access TSDataTable

* Click the ***Make a copy*** button. _This will copy the **TSDataTable** host Google Sheet to your Google Drive._

### Table Data

Once enabled, **TSDataTable** retrieves data from the *first sheet* of the Google Sheet and uses the *first* row of data as the **table column headings** in the resulting table display.  

*If you would like to display another sheet of data, move that sheet to the first position in the Google Spreadsheet and clear the data cache using the table configuration options.*

To add, delete or change the order of the table data columns or rows [add, delete or move columns/rows](https://support.google.com/docs/answer/54813) in Google Sheets.

![](img/Diagram2.png)

### Data Table Column Alignment

To align the data in the table columns, align the corresponding column header in the *first row* of the Google Sheet. 

![](img/Diagram3.png)



### Hide Table Data

To remove data columns or rows in the table view, [hide](https://support.google.com/docs/answer/9060449) the corresponding columns or rows in Google Sheets and reload the table.  

![](img/Diagram4.png)


### Configure Table Title




| # | OPTION | DESCRIPTION |
|-| ---- | --------- |
| 1 | Show Table Title | Enable/Disable table title bar display |
| 2 | Table Title | Edit table title.  *(The initial table title defaults to the name of the Google Spreadsheet.)* |
| 3 | Table Title Color | Color picker to set table title bar background color. |
| 4 | Table Title Alignment | Alignment of table title within title bar (left, center, right). |
| 5 | View Changes | Button to close configuration dialog to view configuration changes. |



---

## Additional Notes

* **TSDataTable** is intended for internal use within a [G Suite for Business](https://gsuite.google.com/solutions/) or [G Suite for Education](https://edu.google.com/products/gsuite-for-education) domain.

* **TSDataTable** caches data for up to 6 hours to speed table display but the cache can be manually cleared to pick up new data and table configuration changes.

* **TSDataTable** is not meant to be used with large data sets.  If you receive error for exceeding the cache quota and need a more robust solution look at [App Maker](https://developers.google.com/appmaker/).

* **TSDataTable** works with the **new** version of Google Sites.


---

## Credits

* [Vue.js](https://vuejs.org) - Progressive Javascript Framework

* [Vuetify](https://vuetifyjs.com) - Material Design Component Framework

---

## License

**TSDataTable License**

© Laura Taylor ([github.com/techstreams](https://github.com/techstreams)). Licensed under an MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

