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
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div v-if="optionsPage" class="optionsPage">
        <City v-if="estimationData.cities" :cities="estimationData.cities" />
        <Type v-if="estimationData.types" :types="estimationData.types" />
        <Bhk
          v-if="estimationData.bhks && typeValue !== 'exterior_paints'"
          :bhks="estimationData.bhks"
        />
        <Floor
          v-if="estimationData.floors && typeValue == 'exterior_paints'"
          :floors="estimationData.floors"
        />
        <Area v-if="estimationData.area_type" :area_type="estimationData.area_type" />
        <Paint v-if="estimationData.painttypes" :painttypes="estimationData.painttypes" />
      </div>

      <div v-if="paintProducts" class="paintProducts">
        <PaintProducts v-if="filteredPaintproducts" :paintproducts="filteredPaintproducts" />
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
              variant="light"
              :disabled="!previousPage"
              @click="navigateTo(previousPage, 'prev')"
              class="px-5"
            >
              <fa-icon :icon="['fas', 'arrow-left']" size="2x" />
            </b-button>
          </span>
          <span>
            <b-button
              variant="light"
              :disabled="!nextPage"
              @click="navigateTo(nextPage, 'next')"
              class="px-5"
            >
              <fa-icon :icon="['fas', 'arrow-right']" size="2x" />
            </b-button>
          </span>
        </div>
        <div class="statusIndicators">
          <span class="options colorIndicator" :class="{ active: optionsPage }"></span>
          <span class="paintProds colorIndicator" :class="{ active: paintProducts }"></span>
          <span class="results colorIndicator" :class="{ active: resultsPage }"></span>
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
import Floor from "@/components/estimator/floor.vue";
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
    Floor,
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
      nextPage: "paintProducts",
      errors: []
    };
  },
  methods: {
    navigateTo(pageType, action) {
      if (action == "next") {
        let errorResult = this.checkForm();
        if (errorResult) return;
      }

      if (action == "prev") {
        this.$store.dispatch("loadInitialState");
      }

      if (pageType == "optionsPage") {
        this.optionsPage = true;
        this.paintProducts = false;
        this.resultsPage = false;
        this.previousPage = null;
        this.nextPage = "paintProducts";
      } else if (pageType == "paintProducts") {
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
      }
    },
    checkForm: function() {
      let userData = this.$store.state.calculationData;
      this.errors = [];

      if (!Object.keys(userData.cityValue).length) {
        this.errors.push("City is required.");
      }

      if (!userData.typeValue.code) {
        this.errors.push("Type is required!.");
      }

      if (
        !Object.keys(userData.bhkValue).length &&
        !Object.keys(userData.floorValue).length
      ) {
        this.errors.push("BHK/FLOOR required.");
      }

      if (!Object.keys(userData.areaType).length) {
        this.errors.push("Carpet/Buildup area is required.");
      }

      if (!userData.areaValue) {
        this.errors.push("Area in sqft is required.");
      }

      if (!userData.paintTypeValue.text) {
        this.errors.push("Paint type is required.");
      }

      if (!this.errors.length) {
        return false;
      } else {
        return true;
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

      console.log("Data", userData);

      // filter with type
      let result = {
        non_ceiling: {},
        ceiling: {}
      };

      let non_ceiling = filteredData[userData.typeValue.code];

      // filter withpaint types
      if (non_ceiling)
        result.non_ceiling = non_ceiling[userData.paintTypeValue.key];

      if (userData.includeCeilingPaint) {
        let ceiling = filteredData["ceiling_paints"];
        result.ceiling = ceiling[userData.paintTypeValue.key];
      }

      return result;
    },
    typeValue() {
      return this.$store.state.calculationData.typeValue.code;
    }
  }
};
</script>
