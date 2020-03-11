<template>
  <div class="typeSelector">
    <v-select
      :options="types"
      :clearable="false"
      v-model="typeValue"
      label="label"
      class="style-chooser"
      placeholder="--Choose a type--"
    >
      <template #search="{attributes, events}">
        <input
          class="vs__search"
          :required="!typeValue"
          v-bind="attributes"
          v-on="events"
        />
      </template>
    </v-select>
  </div>
</template>
<script>
export default {
  name: "Type",
  props: ["types"],
  data() {
    return {};
  },
  computed: {
    typeValue: {
      get() {
        const typeValue = this.$store.state.calculationData.typeValue;
        if (Object.keys(typeValue).length === 0) {
          return "";
        }
        return typeValue;
      },
      set(value) {
        this.$store.commit("updateTypeValue", value);
      }
    }
  }
};
</script>
