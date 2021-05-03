# Usage

Put spreadsheets into `generator/spreadsheets/`. It will use the name of the spreadsheet to generate the folder in the output folder.

Create cards in `src/cards`, and introduce them in `App.js`, with the base url matching the name of the spreadsheet.

Run `npm start` to start the webserver.

Run `node generator/generate.js` to generate the files in the output folder.