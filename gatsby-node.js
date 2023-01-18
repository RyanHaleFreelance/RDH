exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
	{
	  allWpPage {
		nodes {
		  id
		  uri
		  template {
			templateName
		  }
		}
	  }
	}
  `)

  const posts = await graphql(`
	{
	  allWpPost {
		nodes {
		  id
		  uri
		}
	  }
	}
  `)

const archives = await graphql(`
{
  allWpContentType {
	edges {
	  node {
		id
		uri
	  }
	}
  }
}
`)


const categories = await graphql(`
{
	allWpCategory {
	  nodes {
		id
		uri
	  }
	}
  }
`)

const users = await graphql(`
{
  allWpUser {
	edges {
	  node {
		id
		uri
	  }
	}
  }
}
`)

  if (result.errors) {
	reporter.error("There was an error fetching posts", result.errors)
  }
  
  const { allWpPage } = result.data
  const { allWpPost } = posts.data
  const { allWpContentType } = archives.data
  const { allWpUser } = users.data
  
  // Define the template to use
  const pageTemplate = require.resolve(`./src/templates/WpPage.js`)
  const blogHome = require.resolve(`./src/templates/blogHome.js`)
  const postTemplate = require.resolve(`./src/templates/WpPost.js`)
  const author = require.resolve(`./src/templates/authorSingle.js`)
  const catSingle = require.resolve(`./src/templates/catSingle.js`)
  
  if (allWpPage.nodes.length) {
		allWpPage.nodes.map(page => {
			if(page.template.templateName == 'Blog Home') {
				actions.createPage({
				path: page.uri,
				component: blogHome,
				context: page,
				})
			}
			else {
				actions.createPage({
				path: page.uri,
				component: pageTemplate,
				context: page,
				})
	  		}
   		})
  	}

  if (allWpPost.nodes.length) {
	allWpPost.nodes.map(post => {
	  actions.createPage({
		path: post.uri,
		component: postTemplate,
		context: post,
	  })
	})
  }

  if (categories.data.allWpCategory.nodes.length) {
	categories.data.allWpCategory.nodes.map(post => {
	  actions.createPage({
		path: post.uri,
		component: catSingle,
		context: post,
	  })
	})
  }

  if (allWpUser.edges.length) {
	allWpUser.edges.map(post => {
	  actions.createPage({
		path: post.node.uri,
		component: author,
		context: {
		  id: post.node.id,
		  uri: post.node.uri,
		},
	  })
	})
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
	type WpBlockAttributesObject {
	  foobar: String
	}
  `;
  createTypes(typeDefs);
};