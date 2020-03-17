<template>
  <div class="bhkSelector">
    <v-select
      :options="bhks"
      :clearable="false"
      v-model="bhkValue"
      label="label"
      class="style-chooser"
      placeholder="--Choose a BHK--"
    >
      <template #search="{attributes, events}">
        <input
          class="vs__search"
          :required="!bhkValue"
          v-bind="attributes"
          v-on="events"
        />
      </template>
    </v-select>
  </div>
</template>
<script>
export default {
  name: "Bhk",
  props: ["bhks"],
  data() {
    return {};
  },
  computed: {
    bhkValue: {
      get() {
        const bhkValue = this.$store.state.calculationData.bhkValue;
        if (Object.keys(bhkValue).length === 0) {
          return "";
        }
        return bhkValue;
      },
      set(value) {
        this.$store.commit("UPDATE_BHK_VALUE", value);
      }
    }
  }
};
</script>
