<template>
  <div class="citySelector">
    <v-select
      :options="cities"
      :clearable="false"
      v-model="cityValue"
      label="label"
      class="style-chooser"
    >
      <template #search="{attributes, events}">
        <input
          class="vs__search"
          :required="!cityValue"
          v-bind="attributes"
          v-on="events"
        />
      </template>
    </v-select>
  </div>
</template>
<script>
export default {
  name: "City",
  props: ["cities"],
  data() {
    return {};
  },
  computed: {
    cityValue: {
      get() {
        const cityValue = this.$store.state.calculationData.cityValue;
        if (Object.keys(cityValue).length === 0) {
          return "";
        }
        return cityValue;
      },
      set(value) {
        this.$store.commit("updateCityValue", value);
      }
    }
  },
  mounted() {
    this.$store.commit("updateCityValue", this.cities[0]);
  }
};
</script>
