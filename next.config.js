/** @type {import('next').NextConfig} */

module.exports = {
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   "@mui/styled-engine": "@mui/styled-engine-sc",
    // };
    return config;
  },
  images: {
    domains: [
      // "[yourapp].wpengine.com" (Update this to be your Wordpress application name in order to load images connected to your posts)
      //TODO: Add domains you will use
      "secure.gravatar.com",
    ],
  },
  env: {
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    WORDPRESS_MENU_LOCATION_NAVIGATION:
      process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || "PRIMARY",

    // The image directory for open graph images will be saved at the location above
    // with `public` prepended. By default, images will be saved at /public/images/og
    // and available at /images/og. If changing, make sure to update the .gitignore

    OG_IMAGE_DIRECTORY: "/images/og",
  },
};
