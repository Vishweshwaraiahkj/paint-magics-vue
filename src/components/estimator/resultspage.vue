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
      <div class="products_details">
        <div v-if="Object.keys(wallsPaintProduct).length !== 0">
          <h2 class="results_title">Wall Paint Details</h2>
          <hr />
          <div>
            <h4 class="results_sub_title">Wall Paint Product</h4>
            <span>{{ wallsPaintProduct.product }}</span>
          </div>
          <div>
            <h4 class="results_sub_title">Wall Paint Quality</h4>
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
          <hr />
          <div class="rate_box">
            <label>Wall Paint Base Rate/Unit:</label>
            <span>{{ addRupeeSign(wallsPaintProduct.rate) }}</span>
          </div>
        </div>
        <div v-if="Object.keys(ceilingPaintProduct).length !== 0">
          <h2 class="results_title">Ceiling Paint Details</h2>
          <hr />
          <div>
            <h4 class="results_sub_title">Ceiling Paint Product</h4>
            <span>{{ ceilingPaintProduct.product }}</span>
          </div>
          <div>
            <h4 class="results_sub_title">Ceiling Paint Quality</h4>
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
          <hr />
          <div class="rate_box">
            <label>Ceiling Paint Base Rate/Unit:</label>
            <span>{{ addRupeeSign(ceilingPaintProduct.rate) }}</span>
          </div>
        </div>
      </div>
      <h1 class="results_header">
        <label class="mr-3">Final Price:</label>
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
  methods: {
    addRupeeSign(price) {
      let theResult = price.toLocaleString("en-IN", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "INR"
      });

      return theResult;
    }
  },
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
      let theResult = result.total.toLocaleString("en-IN", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "INR"
      });

      this.finalRes = theResult;
    }
  }
};
</script>
