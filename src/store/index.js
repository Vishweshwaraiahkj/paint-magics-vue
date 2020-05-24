import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const initialState = {
  estimationData: {},
  calculationData: {
    typeValue: {},
    cityValue: {},
    bhkValue: {},
    floorValue: {},
    includeCeilingPaint: false,
    paintTypeValue: {
      type: "",
      text: "",
      coating: []
    },
    areaValue: null,
    areaType: {},
    wallsPaintProduct: {},
    ceilingPaintProduct: {}
  }
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    ADD_ESTIMATION_DATA(state, data) {
      state.estimationData = data;
    },
    UPDATE_TYPE_VALUE(state, typeValue) {
      state.calculationData.typeValue = typeValue;
    },
    UPDATE_CITY_VALUE(state, cityValue) {
      state.calculationData.cityValue = cityValue;
    },
    UPDATE_BHK_VALUE(state, bhkValue) {
      state.calculationData.bhkValue = bhkValue;
    },
    UPDATE_FLOOR_VALUE(state, floorValue) {
      state.calculationData.floorValue = floorValue;
    },
    UPDATE_PAINT_TYPE_VALUE(state, paintTypeValue) {
      state.calculationData.paintTypeValue = paintTypeValue;
    },
    UPDATE_AREA_VALUE(state, areaValue) {
      state.calculationData.areaValue = areaValue;
    },
    UPDATE_AREA_TYPE_VALUE(state, areaType) {
      state.calculationData.areaType = areaType;
    },
    UPDATE_WALLS_PAINT_PRODUCT(state, wallsPaintProduct) {
      state.calculationData.wallsPaintProduct = wallsPaintProduct;
    },
    UPDATE_CEILING_PAINT_PRODUCT(state, ceilingPaintProduct) {
      state.calculationData.ceilingPaintProduct = ceilingPaintProduct;
    },
    UPDATE_INCLUDE_CEILING_PAINT(state, includeCeilingPaint) {
      state.calculationData.includeCeilingPaint = includeCeilingPaint;
    },
    LOAD_INITIAL_STATE(state) {
      state.calculationData.wallsPaintProduct = {};
      state.calculationData.ceilingPaintProduct = {};
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
    },
    loadInitialState({ commit }) {
      commit("LOAD_INITIAL_STATE");
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
