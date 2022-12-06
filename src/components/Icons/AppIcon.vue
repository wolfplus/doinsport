<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 14,
    },
    height: {
      type: Number,
      default: 14,
    },
    stroke: {
      type: String,
      default: "",
    },
    strokedWidth: {
      type: String,
      default: "",
    },
    fill: {
      type: String,
      default: "",
    },
  },
})
export default class AppIcon extends Vue {
  name!: string;
  width!: number;
  height!: number;
  stroke!: string;
  strokedWidth!: string;
  fill!: string;

  getSVGUrl() {
    var images = require.context("../../assets/icons/", false, /\.svg$/);
    return images("./" + this.name + ".svg");
  }
}
</script>
<template>
  <img :src="getSVGUrl()" :width="width" :height="height" />
</template>
