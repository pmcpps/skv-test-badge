<script>
import axios from 'axios';

import { APIURL } from '@/models/constants.js';

import viewIcon from '@/assets/viewIcon.svg';
import downloadIcon from '@/assets/downloadIcon.svg';
import citationIcon from '@/assets/citationIcon.svg';
import smallBadge from '@/assets/smallBadge.svg';
import mediumBadge from '@/assets/mediumBadge.svg';
import infoCircleIcon from '@/assets/infoCircleIcon.svg';
import logo from '@/assets/logo.svg';

export default {
  name: 'BaseWidget',
  components: {
    viewIcon,
    downloadIcon,
    smallBadge,
    mediumBadge,
    infoCircleIcon,
    citationIcon,
    logo,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    dataInput: {
      type: Object,
      required: false,
      validator(value) {
        const keys = Object.keys(value);
        return ['citations', 'views', 'downloads'].some((r) => keys.includes(r));
      },
    },
    doi: {
      type: String,
      required: true,
      validator(value) {
        return value.match(/^10\.\d{4,5}\/[-._;()/:a-zA-Z0-9*~$=]+/);
      },
    },
    display: {
      type: String,
      required: false,
      validator(value) {
        return ['small', 'medium', 'datacite', 'regular'].indexOf(value) > -1;
      },
      default: 'small',
    },
  },
  data() {
    return {
      views: '',
      downloads: '',
      citations: '',
    };
  },
  computed: {
    link() {
      return `https://commons.datacite.org/doi.org/${this.doi}`;
    },
    url() {
      return `${APIURL}/graphql`;
    },
    dataInputApi() {
      return this.viewsDistribution;
    },
    alt() {
      return (
        `${Number(this.views)
        } Views ${
          Number(this.downloads)
        } Downloads ${
          Number(this.citations)
        } Citations from DataCite`
      );
    },
    tooltip() {
      let message = '';
      message += `${this.doi} `;
      message += this.datacite ? `${this.datacite} from DataCite ` : '';
      message += this.crossref ? `${this.crossref} from Crossref` : '';
      return message;
    },
  },
  watch: {
    getEvents: {
      handler: 'getMetrics',
      immediate: true,
    },
  },
  methods: {
    getMetrics() {
      if (this.isLocal() === false) {
        this.requestMetrics();
      } else {
        this.grabMetrics(this.dataInput);
      }
      return true;
    },
    pluralize(value = 0, label) {
      if (value === 1) {
        return `${value.toLocaleString('en-us')} ${label}`;
      }
      return `${value.toLocaleString('en-us')} ${label}s`;
    },
    formatNumbers(num) {
      if (num < 1e3) return num;
      if (num >= 1e3 && num < 1e6) return `${+(num / 1e3).toFixed(1)}K`;
      if (num >= 1e6 && num < 1e9) return `${+(num / 1e6).toFixed(1)}M`;
      if (num >= 1e9 && num < 1e12) return `${+(num / 1e9).toFixed(1)}B`;
      if (num >= 1e12) return `${+(num / 1e12).toFixed(1)}T`;
      return num;
    },
    isLocal() {
      if (this.dataInput == null && typeof this.doi !== 'undefined') {
        return false;
      }
      return true;
    },
    grabMetrics(data) {
      this.views = this.formatNumbers(data.views) || '';
      this.downloads = this.formatNumbers(data.downloads) || '';
      this.citations = this.formatNumbers(data.citations) || '';
      this.crossref = this.formatNumbers(data.crossref) || '';
      this.datacite = this.formatNumbers(data.datacite) || '';
    },
    requestMetrics() {
      axios({
        url: this.url,
        method: 'post',
        data: {
          query: `
              {
                counts: work(id: "${this.doi}") {
                    id
                    views: viewCount
                    downloads: downloadCount
                    citations: citationCount
                  } 
              }
              `,
        },
      })
        .then((response) => {
          // eslint-disable-next-line
          // console.log(response)
          this.grabMetrics(response.data.data.counts);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.errored = true;
        })
        // eslint-disable-next-line no-return-assign
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* https://stackoverflow.com/questions/12675622/script1028-expected-identifier-string-or-number */
.icon-metrics {
  width: 17px;
  height: 17px;
  display: inline-block;
}

a {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Cairo", "Helvetica", Arial, sans-serif;
  vertical-align: top;
}
a {
  color: #222222;
  -webkit-transition: all 150ms linear;
  -moz-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  -ms-transition: all 150ms linear;
  transition: all 150ms linear;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #222222;
  text-decoration: none;
}
a:focus,
a:active {
  outline: 0;
}
a,
a:visited {
  text-decoration: none;
}
</style>
