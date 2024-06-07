module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addPassthroughCopy("resrouces");
  eleventyConfig.addPassthroughCopy("imgs");

// const fs = require('fs');

// fs.copyFile(__dirname + "/_site/index.html", "index.html", (err) => {
//     if (err) {
//         console.log("Oops! An Error Occured:", err);
//     } else {
//         console.log("File Contents of async_copied_file")
//     }
// });
};