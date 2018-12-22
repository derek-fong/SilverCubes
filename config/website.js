const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/SilverCubes', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'SilverCubes', // Navigation and Site Title
  siteTitleAlt: 'SilverCubes', // Alternative Site title for SEO
  siteUrl: 'http://www.alppix.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Alppix home page. ',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
