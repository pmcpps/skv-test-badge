<template>
  <div class="metrics">
    <div
      class="wrapper"
      :title="tooltip"
    >
      <div>
        <mediumBadge
          class="medium-badge"
          :alt="this.alt"
        />
      </div>

      <div class="metrics">
        <a
          v-if="views > 0"
          class="usage-counts usage-views"
          :href="link + '#views-tab'"
        >
          <viewIcon class="icon-metrics" />
          {{ views }} Views<br>
        </a>

        <a
          v-if="downloads > 0"
          class="usage-counts usage-downloads"
          :href="link + '#downloads-tab'"
        >
          <downloadIcon class="icon-metrics" />
          {{ downloads }} Downloads<br>
        </a>

        <a
          v-if="citations > 0"
          class="usage-counts usage-downloads"
          :href="link + '#citations-tab'"
        >
          <citationIcon class="icon-metrics" />

          {{ citations }} Citations<br>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { VBadge, VIcon } from 'vuetify/lib';
import BaseWidget from '@/models/BaseWidget.vue';

export default {
  name: 'MediumWidget',
  extends: BaseWidget,
};
</script>

<style scoped>
.wrapper {
  display: grid;
  text-align: left;
  grid-template-columns: 133px max-content 5px;
}

.metrics {
  padding-top: 20px;
}

.medium-badge {
  width: 140px;
  height: 140px;
  display: block;
  margin: auto;
  /* margin-right: 3px; */

  /* display:inline-block; */
}
</style>
