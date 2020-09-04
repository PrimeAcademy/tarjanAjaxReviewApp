Tarjan W8 Review App 
===

Inventory App with server using JQ, Node, & Express

Setup
---

- initialize git
- initialize npm
- npm install express and node 
- added start script in package.json
- created server folder with server.js in this folder

Phase 1 - spinning up server
---

in server.js:

- require express
- set up global const for port
- spin up server
- create "public folder within "server" folder
- create index.html in public folder
- create "scripts" and "vendors" folders in public
- move jQUERY into vendors
- create "client.js" in scripts
- src both in html and check in browser

Phase 2 - front end interface
---

- set up basic interface for adding an item to inventory
- capture click event when add item button is clicked
- retrieve user input and put in an object 

Phase 3 - server handshake and first POST
---

- add AJAX call to our button click
- add a POST route to server
- check that the data is getting to server correctly
- if so, push object into an array on server
