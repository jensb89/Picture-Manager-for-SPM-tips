# Picture Manager for SPM tips

"Picture Manager for SPM tips" was written to organize SEM pictures of gold tips used in scanning probe microscopy (SPM) / Scanning near field optical microscopy (SNOM) but can be easily applied to all sorts of picture collections...

### Features:

* HTML Website
* Written in AngularJS
* Real time filters to show only used tips etc
* Usage of JSONP to load and save information for every tip
* Python script to generate initial JSON file
* Can be used locally without internet connection / without a running webserver
* Direct option to mark a tip as used and save the informations
* easy extendible
    
### Usage:
    
- Copy the index.html, app.js and the python file to the folder with the pictures
- Run python file: $ python create_init_JSON.py to create data.json file
- Open index.html 
- Save changes with the save button, replace the JSON file with the downloaded JSON file

### Preview:
![Preview](https://raw.githubusercontent.com/jensb89/Picture-Manager-for-SPM-tips/images/preview.jpg)
