module.exports = {
  devServer: {
    proxy: 'https://api.datacite.org/graphql',
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      const sassRule = config.module.rule('sass');
      sassRule.uses.clear();
      sassRule.use('null-loader').loader('null-loader');
    }
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    // svgRule
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');
    // Edge compatibility
    // https://github.com/visualfanatic/vue-svg-loader/issues/63#issuecomment-463114598
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options.transpileOptions = {
          transforms: {
            dangerousTaggedTemplateString: true,
          },
        };
        return options;
      });
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
  transpileDependencies: [
    'vuetify',
  ],
};
