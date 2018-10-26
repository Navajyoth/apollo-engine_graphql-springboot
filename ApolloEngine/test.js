const { ApolloEngineLauncher } = require('apollo-engine');

const launcher = new ApolloEngineLauncher({
  apiKey: 'service:ajeshgeorge22-607:A1FCSRVHPGC2fMeOtTvxbw',
  logging: {
    level: 'WARN'
  },
  origins: [
{
    name: 'reference-graphql',
    requestTimeout: '300s',
    http: {
      url: 'http://springboot-graphql:8080/graphql',
      useFrontendPath: false,
      overrideRequestHeaders: {
         host: 'localhost',
         origin: 'http://springboot-graphql:8080',
         referer: 'http://springboot-graphql:8080/graphql'
     },
   },
  }
  ],
  // ['/graphql'].
  frontends: [{
    port: 5000,
    endpointMap: {'/Ref/graphql':'reference-graphql'},

   overrideGraphqlResponseHeaders : {'Access-Control-Allow-Origin':'*'}
 }],
logging: {
    // Only show warnings and errors, not info messages.
    level: 'WARN',
  },
});

launcher.start().catch(err => { throw err; });