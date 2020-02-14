# js-css-bundler
Minify and bundle multiple css and js file into respective css and js file

Installation
-----------
Install the dependencies in the local node_modules folder
```
npm install
```

Step to Convert
-----------
1. Put css and js file in assets folder
2. Edit gulpfile.js, here,  update css and js url that you want to group and minify.
3. Run gulp command, after that you will find minifid file under public/build
 

Build css and js
------------------
run the docker build command, I set the image with with -t parameter "dockrize-jwt", choose image name what you prefer
```
gulp
```
