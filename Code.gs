/*
 * Copyright Laura Taylor
 * (https://github.com/techstreams/TSDataTable)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



var CACHEKEY = 'table-data'; 

var CONFIG = {
  nav: {
    show: true,
    title: SpreadsheetApp.getActiveSpreadsheet().getName(),
    alignment: 'left',
    color: '#000FFF'
  },
  table: {
    dark: false,
    dense: true,
    fixedHeader: true,
    numberItems: false,
    height: '300',
    search: {
      show: true,
      text: ''
    },
    sort: true,
    check: {
      show: true,
      type: 'check'
    },
    link: {
      show: true,
      icon: true
    },
    controls: {
      checkoptions: ['check', 'check_circle','check_circle_outline','check_box']
    }
  }
}


/*
 * This function displays a spreadsheet menu
 *
 */
function onOpen() {
   SpreadsheetApp.getUi().createMenu('TSDataTable')
     .addItem('Configure Data Table', 'configureView')
     .addSeparator()
     .addItem('About TSDataTable', 'showAbout')
     .addToUi()

}

/*
 * This function displays the data table site
 *
 */
function doGet() {
  var template= HtmlService.createTemplateFromFile('index');
  template.data = getData();
  template.config = getConfig();
  return template.evaluate();
}

/*
 * This function creates a data table configuration dialog
 *
 */
function configureView() {

   var template = HtmlService.createTemplateFromFile('config');
   template.data = getData();
   template.config = getConfig();
   template.showControls = true;
   SpreadsheetApp.getUi().showModelessDialog(template.evaluate().setWidth(700).setHeight(600), 'Configure Data Table');

}


/*
 * This function displays the about dialog
 *
 */
function showAbout() {
   var template = HtmlService.createTemplateFromFile('about');
   SpreadsheetApp.getUi().showModelessDialog(template.evaluate().setHeight(380), ' ');
}


/*
 * This function retrieves the table data from the spreadsheet's first tab.
 * Table data is filterd based on columns hidden by the user and rows hidden by the user or by a filter (does not apply to filter views).
 * Data is cached for ~6 hours to speed up display time.
 *
 * @return {Object} Object containing table headers and data
 */
function getData() {
  var cache = CacheService.getScriptCache().get(CACHEKEY),
      data = {headers:null, values:null},
      ss, sheet, values;
  if (cache) {
    return JSON.parse(cache);   
  } else {  
    ss = SpreadsheetApp.getActiveSpreadsheet();
    sheet = ss.getSheets()[0],
    range = sheet.getDataRange(),
    values = range.getDisplayValues(),
    alignments = range.getHorizontalAlignments(),
    rows = [];
    
    data.headers = values[0].map(function(header, h) {
      return {
        text: header,
        value: header.replace(' ', '').toLowerCase(),
        hidden: sheet.isColumnHiddenByUser(h+1),
        align: alignments[0][h]
      }
    });    
    values.forEach(function(row, r) {
      var newObj;
      if (r !== 0 && (!sheet.isRowHiddenByFilter(r+1) && !sheet.isRowHiddenByUser(r+1))) {
        rowObj = {};
        row.forEach(function(col, c) {
          if (!data.headers[c].hidden) {
            rowObj[data.headers[c].value] = col;
          }
        });
        rows.push(rowObj);
      }
    });
    data.headers = data.headers.filter(function(header, h) {
      return !header.hidden;
    });    
    data.values = rows;   
    CacheService.getScriptCache().put(CACHEKEY, JSON.stringify(data), 21600); 
    return data;
  }
}


/*
 * This function retrieves the configuration data from the script properties
 *
 * @return {Object} Object containing data table site configuration
 */
function getConfig() {
   var props = PropertiesService.getScriptProperties().getProperty(CACHEKEY);
   if (props) {
     return JSON.parse(props);
   } else {
     setConfig(CONFIG);
     return CONFIG;  
   }
}


/*
 * This function sets the configuration data in the script properties
 *
 * @param {Object} Object containing configuration to add to script properties
 */
function setConfig(props) {
   PropertiesService.getScriptProperties().setProperty(CACHEKEY, JSON.stringify(props));
   return true;
}


/*
 * This function removes the table data from the script cache and returns a rebuild of the table data.
 *
 * @return {Object} Object containing a rebuild of the table data.
 */
function invalidateCache() {
   CacheService.getScriptCache().remove(CACHEKEY);
   return getData();
}
