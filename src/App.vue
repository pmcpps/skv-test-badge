/* eslint-disable max-len */
<template>
  <div id="app">
    <!-- <DataMetricsBadge
      doi="10.7272/q6g15xs4"
      display="small"
    />
    <br>
    <DataMetricsBadge
      doi="10.7272/q6g15xs4"
      display="medium"
    />
    <br>

    <DataMetricsBadge
      doi="10.7272/q6g15xs4"
      display="datacite"
    /> -->
    <br>
    <div
      class="row"
      style="width:500px;"
    >
      <DataMetricsBadge
        doi="10.5438/0012"
        display="small"
        data-input="{&quot;views&quot;: 0, &quot;downloads&quot;:262, &quot;citations&quot;:2424}"
      />
    </div>
    <br>
    <div
      class="row"
      style="width:350px;"
    >
      <DataMetricsBadge
        doi="10.5438/0012"
        display="small"
        data-input="{&quot;views&quot;: 4, &quot;downloads&quot;:262, &quot;citations&quot;:2424}"
      />
    </div>
    <br>
    <div
      class="row"
      style="width:10px;"
    >
      <DataMetricsBadge
        doi="10.7272/q6g15xs4"
        display="regular"
        data-input="{&quot;views&quot;: 4, &quot;downloads&quot;:262, &quot;citations&quot;:400000}"
      />

      <DataMetricsBadge
        doi="10.17639/nott.6751"
        display="regular"
      />
    </div>

    <!-- <DataMetricsBadge doi="10.7272/q6g15xs4" />

    <br>

    <DataMetricsBadge
      doi="10.7272/q6g15xs4"
      display="medium"
      data-input="{&quot;views&quot;: 77, &quot;downloads&quot;:8, &quot;citations&quot;:244324}"
    />
    <DataMetricsBadge
      doi="10.7272/q6g15xs4"
      display="regular"
      data-input="{&quot;views&quot;: 4, &quot;downloads&quot;:262, &quot;citations&quot;:244324}"
    />

    <br>

    <DataMetricsBadge
      doi=""
      display="small"
      data-input="{&quot;views&quot;: 77, &quot;downloads&quot;:8, &quot;citations&quot;:244324}"
    /> -->
  </div>
</template>

<script>
import DataMetricsBadge from './components/DataMetricsBadge.vue';

export default {
  name: 'App',

  components: {
    DataMetricsBadge,
  },

  data: () => ({
    //
  }),
};
</script>


<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
