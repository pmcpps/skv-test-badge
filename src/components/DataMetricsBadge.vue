<template>
  <div
    :title="'Metrics for DOI: ' + doi"
  >
    <div
      v-if="(doi && errored != true)"
    >
      <div v-if="display == 'small'">
        <SmallWidget
          :doi="doi"
          :display="display"
          :data-input="dataObject"
        />
      </div>
      <div v-if="display == 'medium'">
        <MediumWidget
          :doi="doi"
          :display="display"
          :data-input="dataObject"
        />
      </div>
      <div v-if="display == 'datacite'">
        <DataCiteWidget
          :doi="doi"
          :display="display"
          :data-input="dataObject"
        />
      </div>
      <div v-if="display == 'regular'">
        <RegularWidget
          :doi="doi"
          :display="display"
          :data-input="dataObject"
        />
      </div>
    </div>
    <a v-else>There is no DOI</a>
  </div>
</template>

<script>
import SmallWidget from './SmallWidget.vue';
import MediumWidget from './MediumWidget.vue';
import DataCiteWidget from './DataCiteWidget.vue';
import RegularWidget from './RegularWidget.vue';

export default {
  name: 'DataMetricsBadge',
  funtional: true,
  components: {
    MediumWidget,
    SmallWidget,
    DataCiteWidget,
    RegularWidget,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    dataInput: {
      type: String,
    },
    doi: {
      type: String,
      default: '',
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
  computed: {
    dataObject() {
      if (typeof this.dataInput !== 'undefined') {
        return JSON.parse(this.dataInput);
      }
      return null;
    },
  },
};
</script>

<style scoped></style>
