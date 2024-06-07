module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addPassthroughCopy("resrouces");
  eleventyConfig.addPassthroughCopy("imgs");
};