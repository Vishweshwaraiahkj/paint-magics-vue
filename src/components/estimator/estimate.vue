<style scoped>
.estimateContainer {
  margin: 2rem 5vw;
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.08);
  padding: 1rem;
}

.action-bar {
  width: 100%;
  z-index: 10;
  background-color: #fff;
}

.action-btns {
  display: flex;
  margin-bottom: 1rem;
}

.action-btns span {
  flex: 1;
}

.action-btns span:first-child button {
  float: left;
}

.action-btns span:last-child button {
  float: right;
}

.action-btns span button:focus {
  outline: none;
  border: none;
}

.statusIndicators {
  display: flex;
}

.colorIndicator {
  background-color: rgb(180, 174, 174);
  padding: 0.25rem 1rem;
  margin: 0.625rem 0;
  margin-right: 0.5rem;
  border-radius: 4px;
}

.colorIndicator.active {
  background-color: #18d26e;
}
</style>
<template>
  <div class="estimateContainer">
    <b-form>
      <div v-if="optionsPage" class="optionsPage">
        <City v-if="estimationData.cities" :cities="estimationData.cities" />
        <Type v-if="estimationData.types" :types="estimationData.types" />
        <Bhk v-if="estimationData.bhks" :bhks="estimationData.bhks" />
        <Area
          v-if="estimationData.area_type"
          :area_type="estimationData.area_type"
        />
        <Paint
          v-if="estimationData.painttypes"
          :painttypes="estimationData.painttypes"
        />
      </div>

      <div v-if="paintProducts" class="paintProducts">
        <PaintProducts
          v-if="filteredPaintproducts"
          :paintproducts="filteredPaintproducts"
        />
      </div>

      <div v-if="resultsPage" class="resultsPage">
        <ResultsPage
          v-if="estimationData.increasing_prop"
          :increasing_prop="estimationData.increasing_prop"
        />
      </div>

      <div class="action-bar">
        <div class="action-btns">
          <span>
            <b-button
              :disabled="!previousPage"
              @click="navigateTo(previousPage)"
            >
              Previous
            </b-button>
          </span>
          <span>
            <b-button :disabled="!nextPage" @click="navigateTo(nextPage)">
              Next
            </b-button>
          </span>
        </div>
        <div class="statusIndicators">
          <span
            class="options colorIndicator"
            :class="{ active: optionsPage }"
          ></span>
          <span
            class="paintProds colorIndicator"
            :class="{ active: paintProducts }"
          ></span>
          <span
            class="results colorIndicator"
            :class="{ active: resultsPage }"
          ></span>
        </div>
      </div>
    </b-form>
  </div>
</template>
<script>
// map state and getters here to local variables
import { mapState, mapGetters } from "vuex";
// components imported
import City from "@/components/estimator/city.vue";
import Type from "@/components/estimator/type.vue";
import Bhk from "@/components/estimator/bhk.vue";
import Area from "@/components/estimator/area.vue";
import Paint from "@/components/estimator/paint.vue";
import PaintProducts from "@/components/estimator/paintproducts.vue";
import ResultsPage from "@/components/estimator/resultspage.vue";
export default {
  name: "Estimate",
  components: {
    City,
    Type,
    Bhk,
    Area,
    Paint,
    PaintProducts,
    ResultsPage
  },
  data() {
    return {
      optionsPage: true,
      paintProducts: false,
      resultsPage: false,
      previousPage: null,
      nextPage: "paintProducts"
    };
  },
  methods: {
    navigateTo(pageType) {
      console.log(
        "Calculation Data in " + pageType + " Page: ",
        this.$store.state.calculationData
      );
      if (pageType == "paintProducts") {
        this.optionsPage = false;
        this.paintProducts = true;
        this.resultsPage = false;
        this.previousPage = "optionsPage";
        this.nextPage = "resultsPage";
      } else if (pageType == "resultsPage") {
        this.optionsPage = false;
        this.paintProducts = false;
        this.resultsPage = true;
        this.previousPage = "paintProducts";
        this.nextPage = null;
      } else if (pageType == "optionsPage") {
        this.optionsPage = true;
        this.paintProducts = false;
        this.resultsPage = false;
        this.previousPage = null;
        this.nextPage = "paintProducts";
      }
    }
  },
  mounted() {
    this.$store.dispatch("loadEstimationData");
  },
  computed: {
    ...mapState(["estimationData"]),
    ...mapGetters(["getEventById", "events"]),
    filteredPaintproducts() {
      const filteredData = this.estimationData.paintproducts
        ? this.estimationData.paintproducts
        : null;

      if (filteredData == null) {
        return null;
      }

      let userData = this.$store.state.calculationData;

      // filter with type
      let result = filteredData[userData.typeValue.code];

      // filter withpaint types
      result = result[userData.paintTypeValue.key];

      return result;
    }
  }
};
</script>
