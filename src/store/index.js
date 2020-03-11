import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estimationData: {},
    calculationData: {
      typeValue: {},
      cityValue: {},
      bhkValue: {},
      paintTypeValue: {
        type: "",
        text: "",
        coating: []
      },
      areaValue: 0,
      areaType: {},
      wallsPaintProduct: {},
      ceilingPaintProduct: {}
    }
  },
  mutations: {
    ADD_ESTIMATION_DATA(state, data) {
      state.estimationData = data;
    },
    updateTypeValue(state, typeValue) {
      state.calculationData.typeValue = typeValue;
    },
    updateCityValue(state, cityValue) {
      state.calculationData.cityValue = cityValue;
    },
    updateBhkValue(state, bhkValue) {
      state.calculationData.bhkValue = bhkValue;
    },
    updatePaintTypeValue(state, paintTypeValue) {
      state.calculationData.paintTypeValue = paintTypeValue;
    },
    updateAreaValue(state, areaValue) {
      state.calculationData.areaValue = areaValue;
    },
    updateAreaType(state, areaType) {
      state.calculationData.areaType = areaType;
    },
    updateWallsPaintProduct(state, wallsPaintProduct) {
      state.calculationData.wallsPaintProduct = wallsPaintProduct;
    },
    updateCeilingPaintProduct(state, ceilingPaintProduct) {
      state.calculationData.ceilingPaintProduct = ceilingPaintProduct;
    }
  },
  actions: {
    loadEstimationData({ commit }) {
      axios
        .get("/data.json")
        .then(r => r.data)
        .then(data => {
          commit("ADD_ESTIMATION_DATA", data);
        });
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    },
    events: state => {
      return state.events;
    }
  }
});
