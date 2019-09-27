# TSDataTable

**TSDataTable** is a simple elegant data table publishing tool for Google Sheets &amp; Sites.  See the [blog post](https://medium.com/@techstreams/tsdatatable-simple-elegant-data-tables-for-google-sheets-sites-28ccd35385d0).

![](img/Diagram1.png)


**TSDataTable** employs [Google Apps Script](https://developers.google.com/apps-script) inside a [(Google Sheet](https://www.google.com/sheets/about/) to retrieve data from the *first sheet*, filter the data based on hidden rows and columns, cache the data to speed subsequent views and display data in a nicely formatted, paginated and searchable data table. 

**TSDataTable** display options are configurable and the resulting site can be standalone or embedded in Google Sites.

**TSDataTable** is intended for data table publishing within a [G Suite for Business](https://gsuite.google.com/solutions/) or [G Suite for Education](https://edu.google.com/products/gsuite-for-education) domain.

---

## Getting Started

### Installation

* Login to [Google Drive](https://drive.google.com/)

* Access TSDataTable

* Click the ***Make a copy*** button. _This will copy the **TSDataTable** host Google Sheet to your Google Drive._

### Table Data

Once enabled, **TSDataTable** retrieves data from the *first sheet* of the Google Sheet.  *If you would like to display another tab of data, move the tab you wish to display to the first tab location in the Google Sheet and reload the table.*

To add, delete or change the order of the table data columns or rows [add, delete or move columns/rows](https://support.google.com/docs/answer/54813) in Google Sheets.


#### Column Headings

**TSDataTable** uses the *first* row of data as the **table column headings** in the resulting table display.

#### Column Alignment

To align the data in the table columns, align the corresponding column header in the *first row* of the Google Sheet. 

#### Hide Data

To remove data columns or rows in the table view, [hide](https://support.google.com/docs/answer/9060449) the corresponding columns or rows in Google Sheets and reload the table.  *In this example rows 2 through 5 are hidden and column C is hidden.  The data in the hidden rows and hidden column will not display in the table.*


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

