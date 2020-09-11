/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 const fetch = require('isomorphic-fetch')
 const {createHttpLink} = require ("apollo-link-http")


module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-graphql',

      options: {
         typeName : 'hasura',
         fieldName : 'test',
         createLink: pluginOptions => {
          return createHttpLink({
            uri: 'https://fresh-jackal-96.hasura.app/v1/graphql',
            headers: {
              'x-hasura-admin-secret': 'TzFXJm86RxahHsg',
            },
            fetch,
          })
        }
      }
    }
  ],
}
