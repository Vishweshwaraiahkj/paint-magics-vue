<template>
  <div class="results_page">
    <h1>Your Results:</h1>
    <div v-if="Object.keys(wallsPaintProduct).length !== 0">
      <pre>{{ wallsPaintProduct }}</pre>
    </div>
    <div v-if="Object.keys(ceilingPaintProduct).length !== 0">
      <pre>{{ ceilingPaintProduct }}</pre>
    </div>
    <h1>{{ finalRes }}</h1>
  </div>
</template>
<script>
import * as estCalculator from "@/assets/js/calculator.js";
export default {
  name: "PaintProducts",
  props: ["increasing_prop"],
  components: {},
  data() {
    return {
      finalRes: 0,
      fullData: {}
    };
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
    const result = estCalculator.EstimationCalculator({
      calculationData: this.$store.state.calculationData,
      increasing_prop: this.increasing_prop
    });
    this.fullData = this.$store.state.calculationData;
    this.finalRes = result;
  }
};
</script>
