<template>
  <div id="paintModal" class="customSelectBox">
    <v-select
      :options="painttypes"
      :clearable="false"
      v-model="paintTypeValue"
      label="type"
      class="style-chooser paint_selector"
      placeholder="Choose a Paint type"
    >
      <template slot="option" slot-scope="option">
        <h4>{{ option.type }}</h4>
        <div class="customSelectText">
          <span>
            {{ option.text }}
          </span>
          <div class="coatTypes">
            <span v-for="(coat, index) in option.coating" :key="index">
              {{ coat }}
            </span>
          </div>
        </div>
      </template>
    </v-select>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Paint",
  props: ["painttypes"],
  data() {
    return {};
  },
  computed: {
    paintTypeValue: {
      get() {
        return this.$store.state.calculationData.paintTypeValue;
      },
      set(value) {
        this.$store.commit("UPDATE_PAINT_TYPE_VALUE", value);
      }
    }
  },
  mounted() {
    let initValue = {
      type: "--Choose a Paint type--",
      text: "",
      coating: []
    };
    this.$store.commit("UPDATE_PAINT_TYPE_VALUE", initValue);
  }
};
</script>
