<style lang="scss" scoped>
.inputstyle {
  border-radius: 4px;
  white-space: normal;
  width: 100%;
  line-height: 2;
  padding: 0 0.625rem;
  font-size: 1em;
  border: 1px solid transparent;
  border-left: none;
  outline: none;
  margin: 4px 0 0 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  max-width: 100%;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

input.inputstyle:focus {
  outline: none;
}

input.inputstyle::placeholder {
  color: #000;
}

.area_type {
  display: flex;
  text-transform: lowercase;
  font-variant: small-caps;

  .buildup_area {
    margin-right: 1rem;
  }

  .carpet_area {
    margin-left: 1rem;
  }
}
</style>
<template>
  <div class="style-chooser">
    <div class="area_type">
      <span class="buildup_area">Buildup Area</span>
      <ButtonSwitch
        :key="Math.random()"
        :options="buttonOptions"
        v-on:setIsActive="setAreaType($event)"
      />
      <span class="carpet_area">Carpet Area</span>
    </div>
    <input
      type="text"
      class="inputstyle"
      :required="true"
      placeholder="Carpet Area / Build up area"
      v-model="areaValue"
    />
    <slot></slot>
  </div>
</template>
<script>
import ButtonSwitch from "@/components/estimator/button-switch.vue";
export default {
  name: "Area",
  props: ["area_type"],
  components: {
    ButtonSwitch
  },
  data() {
    return {};
  },
  computed: {
    areaValue: {
      get() {
        return this.$store.state.calculationData.areaValue;
      },
      set(value) {
        this.$store.commit("UPDATE_AREA_VALUE", value);
      }
    },
    areaType: {
      get() {
        return this.$store.state.calculationData.areaType;
      },
      set(value) {
        this.$store.commit("UPDATE_AREA_TYPE_VALUE", value);
      }
    },
    typeValue() {
      return this.$store.state.calculationData.typeValue.code;
    },
    buttonOptions() {
      return {
        disabled: this.typeValue == "exterior_paints",
        isActive: this.buttonActive
      };
    },
    buttonActive() {
      this.setInitialAreaType();
      if (this.typeValue == "exterior_paints") {
        return false;
      }
      return true;
    }
  },
  methods: {
    setAreaType(event) {
      if (event) {
        this.areaType = this.area_type.carpet_area;
      } else {
        this.areaType = this.area_type.buildup_area;
      }
    },
    setInitialAreaType() {
      if (this.typeValue == "exterior_paints") {
        this.$store.commit(
          "UPDATE_AREA_TYPE_VALUE",
          this.area_type.buildup_area
        );
      } else {
        this.$store.commit(
          "UPDATE_AREA_TYPE_VALUE",
          this.area_type.carpet_area
        );
      }
    }
  },
  mounted() {
    this.setInitialAreaType();
  }
};
</script>
