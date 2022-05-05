<template>
  <div
    class="container-fluid metrics"
    :title="tooltip"
  >
    <a
      v-if="views > 0"
      class="usage-counts usage-views"
      :href="link + '#views-tab'"
    >
      <viewIcon class="icon-metrics" />
      {{ views }} Views
    </a>
    <a
      v-if="downloads > 0"
      class="usage-counts usage-downloads"
      :href="link + '#downloads-tab'"
    >
      <downloadIcon class="icon-metrics" />
      {{ downloads }} Downloads
    </a>
    <a
      v-if="citations > 0"
      class="usage-counts usage-downloads"
      :href="link + '#citations-tab'"
    >
      <citationIcon class="icon-metrics" />
      {{ citations }} Citations
    </a>
    <a
      v-if="downloads + views == 0 || citations == 0"
      class="usage-counts usage-views"
    >
      <infoCircleIcon class="icon-metrics" />
      {{ infoMessage }}
    </a>
  </div>
</template>

<script>
import BaseWidget from '@/models/BaseWidget.vue';

export default {
  name: 'DataCiteWidget',
  components: {},
  extends: BaseWidget,
  computed: {
    infoMessage() {
      let message = '';
      if (this.views + this.downloads === 0) {
        message = 'No usage information was reported.';
      }
      if (this.citations === 0) {
        message += ' No citations were reported.';
      }

      return message;
    },
  },
};
</script>

<style scoped>
a.usage-counts {
  margin-right: 1.5em;
}
.nav-tabs.usage {
  border-bottom: 1px solid #dddddd;
}
.nav-tabs.usage > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs.usage > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid #dddddd;
  border-radius: 4px 4px 0 0;
  border-bottom-color: #dddddd;
}
.nav-tabs.usage > li > a:hover {
  background-color: #dddddd;
  border-color: #dddddd #dddddd #dddddd;
}
.nav-tabs.usage > li.active > a,
.nav-tabs.usage > li.active > a:hover,
.nav-tabs.usage > li.active > a:focus {
  color: #555555;
  cursor: default;
  background-color: #ffffffff;
  border: 1px solid #dddddd;
  border-bottom-color: #ffffffff;
}
.nav-tabs.usage > li.active :before {
  border-bottom: 11px solid #ffffffff;
}
rect.bar.relations-alt {
  fill: #68b3c8;
}
rect.bar.relations-high {
  fill: #66615b;
}
.panel-body.usage-charts {
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
a {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Raleway", "Helvetica", Arial, sans-serif;
}
a {
  color: #222222;
  -webkit-transition: all 150ms linear;
  -moz-transition: all 150ms linear;
  -o-transition: all 150ms linear;
  -ms-transition: all 150ms linear;
  transition: all 150ms linear;
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
.fa {
  width: 18px;
  text-align: center;
}
.panel-footer {
  margin-top: 0;
  line-height: 1.4em;
  background-color: #ffffff;
  color: #777777;
}
.panel-footer img {
  margin-top: -0.33em;
}
.panel-footer a {
  color: #222222;
}
@import url("https://fonts.googleapis.com/css?family=Raleway:400,600,400italic,600italic");
</style>
