module.exports = {
  pathPrefix: "/test",
	plugins: [
		{
			resolve: '@directus/gatsby-source-directus',
			options: {
				url: `https://j3zc8tu6.directus.app`, // Fill with your Directus instance address
				auth: {
					token: 'GVxdg0WQsrYdfnyjjLXaZ2NPe2XtiLbD', // You can use a static token from an user

					// Or you can use the credentials of an user
					//email: "6210110083@psu.ac.th",
					//password: "Seedan16!",
				},
			},
		},
	],
};