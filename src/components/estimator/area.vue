<style lang="scss" scoped>
.inputstyle {
  border-radius: 4px;
  white-space: normal;
  width: 100%;
  line-height: 2;
  padding: 0 0.625rem;
}

input.inputstyle:focus {
  outline: none;
}

.area_type {
  display: flex;

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
      <ButtonSwitch v-on:setIsActive="setAreaType($event)" />
      <span class="carpet_area">Carpet Area</span>
    </div>
    <input
      type="text"
      class="inputstyle"
      :required="true"
      placeholder="Carpet Area / Build up area"
      v-model="areaValue"
    />
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
        this.$store.commit("updateAreaValue", value);
      }
    },
    areaType: {
      get() {
        return this.$store.state.calculationData.areaType;
      },
      set(value) {
        this.$store.commit("updateAreaType", value);
      }
    }
  },
  methods: {
    setAreaType(event) {
      if (event) {
        this.areaType = this.area_type.carpet_area;
      } else {
        this.areaType = this.area_type.buildup_area;
      }
    }
  },
  mounted() {
    this.$store.commit("updateAreaType", this.area_type.carpet_area);
  }
};
</script>
