
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/datacite/data-metrics-badge)
[![npm version](https://badge.fury.io/js/data-metrics-badge.svg)](https://badge.fury.io/js/data-metrics-badge)
[![](https://data.jsdelivr.com/v1/package/npm/data-metrics-badge/badge)](https://www.jsdelivr.com/package/npm/data-metrics-badge)
[![Build Status](https://travis-ci.org/datacite/spitz.svg?branch=master)](https://travis-ci.org/datacite/spitz)

# Data Metrics Badge

The *Data Metrics Badge* provides an open and easy way to display the number of citations and usage that your research datasets and resources have received. 

The *Data Metrics Badge* was created as part of the [PARSEC](http://www.belmontforum.org/projects/4057/), Building New Tools for Data Sharing and Reuse through a Transnational Investigation of the Socioeconomic Impacts of Protected Areas. 

The *Data Metrics Badge* is a an easy way to embed usage and citations metrics from DataCite Services on your repository landing page. Usage statistics are processed according to the [Code of Practice for Research Data](https://www.projectcounter.org/code-practice-research-data/). Citation statistics are collected via the [DataCite and Crossref EventData Service](https://blog.datacite.org/are-your-data-being-used-event-data-has-the-answer/). 


## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions



One will need to include the web-components-loader for Edge and IE compatibility.

```html
  <script src="https://unpkg.com/browse/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js"></script>
```


## Installation and Usage

Getting set up with a Data Metrics Badge is a straightforward process – just add the following code to the HTML of your website wherever you want the Data Metrics Badge to appear:


```html

<script src="https://unpkg.com/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/data-metrics-badge/dist/data-metrics-badge.min.js"></script>


<body>
  <data-metrics-badge doi="10.7272/q6g15xs4"></data-metrics-badge>
</body>


```


There is also a [live demo](https://support.datacite.org/docs/displaying-usage-and-citations-in-your-repository).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build --target wc --name data-metrics-badge 'src/components/DataMetricsBadge.vue'

npm version patch -m "Upgrade to %s for reasons"
```

### Run your tests
```
yarn test:unit tests/
```

### Lints and fixes files
```
npm run lint
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
