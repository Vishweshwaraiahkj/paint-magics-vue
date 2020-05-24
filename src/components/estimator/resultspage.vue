<template>
  <div class="results_page">
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, index) in errors" :key="index">
          <b-alert show variant="danger">{{ error }}</b-alert>
        </li>
      </ul>
    </div>
    <div v-else>
      <h1>Your Results:</h1>
      <div v-if="Object.keys(wallsPaintProduct).length !== 0">
        <h2>Wall Paint Details</h2>
        <div>
          <label>Wall Paint Product:</label>
          <span>{{ wallsPaintProduct.product }}</span>
        </div>
        <div>
          <label>Wall Paint Quality:</label>
          <div>
            <label>Finish:</label>
            <span>{{ wallsPaintProduct.quality.finish }}</span>
          </div>
          <div>
            <label>Washability:</label>
            <span>{{ wallsPaintProduct.quality.washability }}</span>
          </div>
          <div>
            <label>Durability:</label>
            <span>{{ wallsPaintProduct.quality.durability }}</span>
          </div>
        </div>
        <div>
          <label>Wall Paint Base Rate Per Each:</label>
          <span>{{ wallsPaintProduct.rate }}</span>
        </div>
        <hr />
      </div>
      <div v-if="Object.keys(ceilingPaintProduct).length !== 0">
        <h2>Ceiling Paint Details</h2>
        <div>
          <label>Ceiling Paint Product:</label>
          <span>{{ ceilingPaintProduct.product }}</span>
        </div>
        <div>
          <label>Ceiling Paint Quality:</label>
          <div>
            <label>Finish:</label>
            <span>{{ ceilingPaintProduct.quality.finish }}</span>
          </div>
          <div>
            <label>Washability:</label>
            <span>{{ ceilingPaintProduct.quality.washability }}</span>
          </div>
          <div>
            <label>Durability:</label>
            <span>{{ ceilingPaintProduct.quality.durability }}</span>
          </div>
        </div>
        <div>
          <label>Ceiling Paint Base Rate Per Each:</label>
          <span>{{ ceilingPaintProduct.rate }}</span>
        </div>
        <hr />
      </div>
      <h1>
        <label>Final Price:</label>
        {{ finalRes }}
      </h1>
    </div>
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
      fullData: {},
      errors: []
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
    if (result.error) {
      this.errors = result.messages;
    } else {
      this.finalRes = result.total;
    }
  }
};
</script>
