# webpack-tutorial
Intro to webpack [from here](https://www.youtube.com/watch?annotation_id=annotation_4139363737&amp;feature=iv&amp;src_vid=MhkGQAoc7bc&amp;v=9kJVYpOqcVU)

    cd webpack-tutorial
    npm install
    webpack
    open index.html

To generate a production-ready (minified) script file, run `NODE_ENV=production webpack` instead of `webpack`

---

#### Notes

- You have separate JS files
- Make one master scripts.js file and require() all your separate JS files
- `webpack`
 - this compiles 1 minified scripts.min.js file which includes all your JS files
- use nodemon to watch for changes and auto-reload
