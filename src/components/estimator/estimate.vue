<template>
  <div class="estimateContainer">
    <div class="statusIndicators">
      <div
        class="options colorIndicator wizard-step"
        :class="{ active: optionsPage }"
      >
        <div class="wizard-label">
          <fa-icon :icon="['fas', 'edit']" size="2x" />
          <span class="wizard-title">1. Enter Details</span>
        </div>
      </div>
      <fa-icon
        :icon="['fas', 'chevron-right']"
        size="1x"
        :class="{ active: optionsPage }"
      />
      <div
        class="paintProds colorIndicator wizard-step"
        :class="{ active: paintProducts }"
      >
        <div class="wizard-label">
          <fa-icon :icon="['fas', 'check-double']" size="2x" />
          <span class="wizard-title">2. Select Paints</span>
        </div>
      </div>
      <fa-icon
        :icon="['fas', 'chevron-right']"
        size="1x"
        :class="{ active: paintProducts }"
      />
      <div
        class="results colorIndicator wizard-step"
        :class="{ active: resultsPage }"
      >
        <div class="wizard-label">
          <fa-icon :icon="['fas', 'poll-h']" size="2x" />
          <span class="wizard-title">3. Review Results</span>
        </div>
      </div>
    </div>
    <b-form class="estimator-form">
      <div
        class="c-error"
        v-if="Object.keys(errors).length && errorsLength > 0"
      >
        <b>Please correct the following error(s):</b>
      </div>

      <div v-if="optionsPage" class="optionsPage">
        <City v-if="estimationData.cities" :cities="estimationData.cities">
          <ErrorMessage
            v-if="errors.city && !Object.keys(userData.cityValue).length"
            :errorMessage="errors.city.message"
          />
        </City>

        <Type v-if="estimationData.types" :types="estimationData.types">
          <ErrorMessage
            v-if="errors.type && !userData.typeValue.code"
            :errorMessage="errors.type.message"
          />
        </Type>

        <Bhk
          v-if="estimationData.bhks && typeValue !== 'exterior_paints'"
          :bhks="estimationData.bhks"
        >
          <ErrorMessage
            v-if="errors.bhk && !Object.keys(userData.bhkValue).length"
            :errorMessage="errors.bhk.message"
          />
        </Bhk>

        <Floor
          v-if="estimationData.floors && typeValue == 'exterior_paints'"
          :floors="estimationData.floors"
        >
          <ErrorMessage
            v-if="errors.floor && !Object.keys(userData.floorValue).length"
            :errorMessage="errors.floor.message"
          />
        </Floor>

        <Area
          v-if="estimationData.area_type"
          :area_type="estimationData.area_type"
        />

        <ErrorMessage
          v-if="
            errors.area_value &&
              (!userData.areaValue || userData.areaValue == 0)
          "
          :errorMessage="errors.area_value.message"
        />

        <Paint
          v-if="estimationData.painttypes"
          :painttypes="estimationData.painttypes"
        />

        <ErrorMessage
          v-if="errors.paint_type && !userData.paintTypeValue.text"
          :errorMessage="errors.paint_type.message"
        />
      </div>

      <div v-if="paintProducts" class="paintProducts">
        <PaintProducts
          v-if="filteredPaintproducts"
          :paintproducts="filteredPaintproducts"
          :checkErrors="checkPaints"
        >
          <template v-slot:wallpaintError>
            <ErrorMessage
              v-if="paint_errors.wallpaint_error"
              :errorMessage="paint_errors.wallpaint_error.message"
            />
          </template>
          <template v-slot:ceilingpaintError>
            <ErrorMessage
              v-if="paint_errors.ceilingpaint_error"
              :errorMessage="paint_errors.ceilingpaint_error.message"
            />
          </template>
        </PaintProducts>
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
              v-if="PreviousBtnName"
              variant="light"
              :disabled="!previousPage"
              @click="navigateTo(previousPage, 'prev')"
              class="px-5 font-weight-bold text-uppercase"
            >
              <fa-icon :icon="['fas', 'arrow-left']" size="1x" class="mr-3" />
              {{ PreviousBtnName }}
            </b-button>
          </span>
          <span>
            <b-button
              v-if="NextBtnName"
              variant="primary"
              :disabled="!nextPage"
              @click="navigateTo(nextPage, 'next')"
              class="px-5 font-weight-bold text-uppercase"
            >
              {{ NextBtnName }}
              <fa-icon :icon="['fas', 'arrow-right']" size="1x" class="ml-3" />
            </b-button>
          </span>
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
import ErrorMessage from "@/components/common/ErrorMessage.vue";
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
    ResultsPage,
    ErrorMessage
  },
  data() {
    return {
      optionsPage: true,
      paintProducts: false,
      resultsPage: false,
      previousPage: null,
      nextPage: "paintProducts",
      errors: {},
      errorsLength: 0,
      paint_errors: {},
      userData: this.$store.state.calculationData,
      NextBtnName: "Select Paint(s)",
      PreviousBtnName: ""
    };
  },
  methods: {
    navigateTo(pageType, action) {
      if (action == "next") {
        if (pageType == "paintProducts") {
          if (this.checkForm()) return;
          this.NextBtnName = "Finish";
          this.PreviousBtnName = "Options";
        }

        if (pageType == "resultsPage") {
          if (this.checkPaints()) return;
          this.PreviousBtnName = "Select Paint(s)";
          this.NextBtnName = "";
        }
      }

      if (action == "prev") {
        this.$store.dispatch("loadInitialState");
        if (pageType == "paintProducts") {
          this.NextBtnName = "Finish";
          this.PreviousBtnName = "Options";
        }

        if (pageType == "optionsPage") {
          this.PreviousBtnName = "";
          this.NextBtnName = "Select Paint(s)";
        }
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
      let userData = this.userData;
      this.errors = {};

      if (!Object.keys(userData.cityValue).length) {
        this.errors.city = {
          type: "city",
          message: "City is required."
        };
      }

      if (!userData.typeValue.code) {
        this.errors.type = {
          type: "type",
          message: "Type is required!."
        };
      }

      if (userData.typeValue.code == "exterior_paints") {
        if (!Object.keys(userData.floorValue).length) {
          this.errors.floor = {
            type: "floor",
            message: "Floor type is required."
          };
        }
        delete this.errors.bhk;
      } else {
        if (!Object.keys(userData.bhkValue).length) {
          this.errors.bhk = {
            type: "bhk",
            message: "Bhk type is required."
          };
        }
        delete this.errors.floor;
      }

      if (!Object.keys(userData.areaType).length) {
        this.errors.area_type = {
          type: "area_type",
          message: "Carpet/Buildup area is required."
        };
      }

      if (!userData.areaValue || userData.areaValue == 0) {
        this.errors.area_value = {
          type: "area_value",
          message: "Area in sqft is required."
        };
      }

      if (!userData.paintTypeValue.text) {
        this.errors.paint_type = {
          type: "paint_type",
          message: "Paint type is required."
        };
      }

      if (!Object.keys(this.errors).length) {
        this.errorsLength = 0;
        return false;
      } else {
        this.errorsLength = Object.keys(this.errors).length;
        return true;
      }
    },
    checkPaints: function() {
      this.paint_errors = {};

      let wallsPaintProduct = this.userData.wallsPaintProduct;

      let ceilingPaintProduct = this.userData.ceilingPaintProduct;

      if (!Object.keys(wallsPaintProduct).length) {
        this.paint_errors.wallpaint_error = {
          message: "Please select a wall paint product."
        };
      }

      if (
        !Object.keys(ceilingPaintProduct).length &&
        this.userData.includeCeilingPaint
      ) {
        this.paint_errors.ceilingpaint_error = {
          message: "Please select a ceiling paint product."
        };
      }

      if (!Object.keys(this.paint_errors).length) {
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

      // filter with type
      let result = {
        non_ceiling: {},
        ceiling: {}
      };

      let non_ceiling = filteredData[this.userData.typeValue.code];

      // filter withpaint types
      if (non_ceiling)
        result.non_ceiling = non_ceiling[this.userData.paintTypeValue.key];

      if (this.userData.includeCeilingPaint) {
        let ceiling = filteredData["ceiling_paints"];
        result.ceiling = ceiling[this.userData.paintTypeValue.key];
      }

      return result;
    },
    typeValue() {
      return this.userData.typeValue.code;
    }
  }
};
</script>
