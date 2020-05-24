<template>
  <div class="floorSelector">
    <v-select
      :options="floors"
      :clearable="false"
      v-model="floorValue"
      label="label"
      class="style-chooser"
      placeholder="--Choose a FLOOR--"
    >
      <template #search="{attributes, events}">
        <input class="vs__search" :required="!floorValue" v-bind="attributes" v-on="events" />
      </template>
    </v-select>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Floor",
  props: ["floors"],
  data() {
    return {};
  },
  computed: {
    floorValue: {
      get() {
        const floorValue = this.$store.state.calculationData.floorValue;
        if (Object.keys(floorValue).length === 0) {
          return "";
        }
        return floorValue;
      },
      set(value) {
        this.$store.commit("UPDATE_FLOOR_VALUE", value);
      }
    }
  }
};
</script>
