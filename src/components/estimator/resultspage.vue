<template>
  <div class="results_page">
    <h1>Your Results:</h1>
    <div v-if="Object.keys(wallsPaintProduct).length !== 0">
      <VClamp>{{ wallsPaintProduct }}</VClamp>
    </div>
    <div v-if="Object.keys(ceilingPaintProduct).length !== 0">
      <VClamp>{{ ceilingPaintProduct }}</VClamp>
    </div>
  </div>
</template>
<script>
import VClamp from "vue-clamp";
import * as estCalculator from "@/assets/js/calculator.js";
export default {
  name: "PaintProducts",
  props: ["increasing_prop"],
  components: {
    VClamp
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    wallsPaintProduct: {
      get() {
        return this.$store.state.calculationData.wallsPaintProduct;
      }
    },
    ceilingPaintProduct: {
      get() {
        return this.$store.state.calculationData.ceilingPaintProduct;
      }
    }
  },
  mounted() {
    estCalculator.EstimationCalculator({
      calculationData: this.$store.state.calculationData,
      increasing_prop: this.increasing_prop
    });
  }
};
</script>
