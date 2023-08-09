module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css");
    eleventyConfig.addPassthroughCopy("page");
  eleventyConfig.addWatchTarget("page");
  eleventyConfig.addPassthroughCopy("resrouces");
  eleventyConfig.addPassthroughCopy("imgs");
};