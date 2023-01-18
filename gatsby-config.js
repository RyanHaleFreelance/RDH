module.exports = {
  siteMetadata: {
	title: `Gatsby WordPress Tutorial`,
	description: `An example to learn how to source data from WordPress.`,
	author: `@gatsbyjs`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet",
	/*
	 * Gatsby's data processing layer begins with “source”
	 * plugins. Here the site sources its data from WordPress.
	 */
	// highlight-start
	{
	  resolve: `gatsby-source-wordpress`,
	  options: {
		url: `https://dev-rdhbackend.pantheonsite.io/graphql`,
		debug: {
		  graphql: {
			writeQueriesToDisk: true,
		  },
		},
	  },
	},
	`gatsby-plugin-react-helmet`,
	{
	  resolve: `gatsby-source-filesystem`,
	  options: {
		name: `images`,
		path: `${__dirname}/src/images`,
	  },
	},
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	{
	  resolve: `gatsby-plugin-manifest`,
	  options: {
		name: `gatsby-starter-default`,
		short_name: `starter`,
		start_url: `/`,
		background_color: `#663399`,
		theme_color: `#663399`,
		display: `minimal-ui`,
		icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
	  },
	},
  ],
}