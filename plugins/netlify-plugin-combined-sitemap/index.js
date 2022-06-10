/* Generates a sitemap */
const { env } = require("process");

const makeSitemap = require("./make_sitemap");

const fetch = async () => {
  return await import("node-fetch");
};
const getInputsDir = ({ inputs }) =>
  inputs.dir || inputs.distPath || inputs.buildDir;

const getBuildDir = ({ inputs, constants }) => {
  // Backwards compat... Correct opt is buildDir
  const buildDir = getInputsDir({ inputs }) || constants.PUBLISH_DIR;
  // constants.PUBLISH_DIR is always an absolute path
  if (buildDir === constants.PUBLISH_DIR) {
    return buildDir;
  }
  // remove leading / to treat the dir a a relative one
  const trimmedBuildDir = buildDir.startsWith("/")
    ? buildDir.slice(1)
    : buildDir;
  return trimmedBuildDir || ".";
};

const getLegacySitemap = async (legacyUrl) => {
  fetch(`${legacyUrl}/sitemap.xml`)
    .then((response) => {
      console.log("response", response);

      response.text();
      console.log(response.statusText);
    })
    .then((data) => console.log("Some data", data)); // got "undefined"
  // const legacySitemapRaw = await fetch(`${legacyUrl}/sitemap.xml`);
  // console.log("sitemap test 1", legacyUrl, legacySitemapRaw);
  const parser = new DOMParser();
  const legacySitemap = parser.parseFromString(
    legacySitemapRaw,
    "application/xml"
  );
  console.log("sitemap test 2", legacySitemap);
};

module.exports = {
  onPostBuild: async ({ constants, inputs, utils }) => {
    const legacyUrl =
      env.NETLIFY_PLUGIN_SITEMAP_LEGACY_APP_URL || env.LEGACY_APP_URL;
    const baseUrl =
      inputs.baseUrl || env.NETLIFY_PLUGIN_SITEMAP_BASEURL || env.URL;
    const urlPrefix =
      inputs.urlPrefix || env.NETLIFY_PLUGIN_SITEMAP_URL_PREFIX || null;
    const buildDir = getBuildDir({ inputs, constants });

    if (legacyUrl) {
      const legacySitemap = getLegacySitemap(legacyUrl);
      console.log("Legacy Sitemap", await legacySitemap);
    }
    console.log("Creating sitemap from files...");

    const data = await makeSitemap({
      fileName: inputs.filePath,
      homepage: baseUrl,
      distPath: buildDir,
      exclude: inputs.exclude,
      prettyURLs: inputs.prettyURLs,
      changeFreq: inputs.changeFreq,
      priority: inputs.priority,
      trailingSlash: inputs.trailingSlash,
      failBuild: utils.build.failBuild,
      urlPrefix,
    });

    console.log("Sitemap Built!", data.sitemapPath);
  },
};
