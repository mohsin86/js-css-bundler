# js-css-bundler
Minify and bundle multiple css and js file into respective css and js file via gulp

Installation
-----------
Install the dependencies in the local node_modules folder
```
npm install
```

Build css and js
------------------
Need this gulp command for grouping & minimification css and js files.
```
gulp
```

Step to Follow
-----------
1. Put css and js file into assets folder
2. Edit gulpfile.js, update css and js file url here that you want to group and minify.
3. Run gulp command, after that you will find minifid version of css and js file under public/build
4. Now add those bundle css and js file in your project

```
