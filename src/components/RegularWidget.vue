<template>
  <div class="container">
    <a :href="link">
      <div class="d-flex">
        <div class="row">
          <div class="p-2">
            <v-badge class="align-self-center">
              <template
                v-if="['', '0', 0].includes(citations) == false"
                v-slot:badge
              >
                {{ formatNumbers(citations) }}
              </template>
              <!-- <a
                :href="link + '#citations-tab'"
                :title="pluralize(citations,'Citation')"
              > -->
              <citationIcon
                :class="
                  ['', '0', 0].includes(citations) == false
                    ? activeClass
                    : inactiveClass
                "
              />
              <!-- </a> -->
            </v-badge>
          </div>
          <div class="p-2">
            <v-badge class="align-self-center">
              <template
                v-if="['', '0', 0].includes(views) == false"
                v-slot:badge
              >
                {{ formatNumbers(views) }}
              </template>
              <!-- <a
                :href="link + '#citations-tab'"
                :title="pluralize(views,'View')"
              > -->
              <viewIcon
                :class="
                  ['', '0', 0].includes(views) == false
                    ? activeClass
                    : inactiveClass
                "
              />

              <!-- </a> -->
            </v-badge>
          </div>
          <div class="p-2">
            <v-badge class="align-self-center">
              <template
                v-if="['', '0', 0].includes(downloads) == false"
                v-slot:badge
              >
                {{ formatNumbers(downloads) }}
              </template>
              <!-- <a
                :href="link + '#downloads-tab'"
                :title="pluralize(downloads,'Download')"
              > -->
              <downloadIcon
                :class="
                  ['', '0', 0].includes(downloads) == false
                    ? activeClass
                    : inactiveClass
                "
              />
              <!-- </a> -->
            </v-badge>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="p-2">
          <p
            :class="
              ['', '0', 0].includes(citations) == false
                ? labelActiveClass
                : labelInactiveClass
            "
          >
            Citations
          </p>
        </div>
        <div class="p-2">
          <p
            :class="
              ['', '0', 0].includes(views) == false
                ? labelActiveClass
                : labelInactiveClass
            "
          >
            Views
          </p>
        </div>
        <div class="p-2">
          <p
            :class="
              ['', '0', 0].includes(downloads) == false
                ? labelActiveClass
                : labelInactiveClass
            "
          >
            Downloads
          </p>
        </div>
      </div>
      <div class="row justify-content-end">
        <logo :class="'svglogo'" />
      </div>
    </a>
  </div>
</template>

<script>
import { VBadge } from 'vuetify/lib';
import BaseWidget from '@/models/BaseWidget.vue';

export default {
  name: 'RegularWidget',
  components: {
    'v-badge': VBadge,
  },
  extends: BaseWidget,
  data() {
    return {
      activeClass: 'icon-metrics',
      inactiveClass: 'icon-metrics-empty',
      labelActiveClass: 'metrics-label',
      labelInactiveClass: 'metrics-label-empty',
    };
  },
};
</script>

<style>
div.logo {
  padding: 0px 0px 0px 0px;
}

.svglogo {
  color: #455a64;
  fill: #455a64;
  width: 25%;
}

.v-badge__badge {
  align-items: center;
  border-radius: 45px;
  color: #ffffff;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 23px;
  font-family: "Helvetica";
  height: 45px;
  justify-content: center;
  line-height: normal;
  min-width: 45px;
  padding: 0 4px;
  position: absolute;
  top: -11px;
  right: -17px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  background-color: rgba(255, 0, 0) !important;
  border-color: rgba(255, 0, 0) !important;
}
--is-ltr .v-badge__badge {
  right: -22px;
}
*,
::before,
::after {
  box-sizing: inherit;
}
::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
::-moz-selection {
  background-color: #b3d4fc;
  color: #000;
  text-shadow: none;
}
::selection {
  background-color: #b3d4fc;
  color: #000;
  text-shadow: none;
}
::-ms-clear,
::-ms-reveal {
  display: none;
}

.icon-metrics {
  width: 80%;
  height: 80%;
  display: inline-block;
  color: rgba(0, 89, 173);
  stroke: rgba(0, 89, 173);
  fill: rgba(0, 89, 173);
}

.icon-metrics-empty {
  width: 80%;
  height: 80%;
  display: inline-block;
  color: #78909c;
  stroke: #78909c;
  fill: #78909c;
}

.metrics-label {
  text-align: center;
  color: rgba(0, 89, 173);
}

.metrics-label-empty {
  text-align: center;
  color: #78909c;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}

.p-2 {
  padding: 0.5rem !important;
  width: 33%;
  position: relative;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.align-self-center {
  -ms-flex-item-align: center !important;
  align-self: center !important;
}

.container {
  width: 90%;
  min-width: 350px;
  max-width: 350px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 250px) {
  .container {
    max-width: 350px;
  }
}

.justify-content-end {
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}
</style>
