<style scoped>
.label_medium {
  font-size: 1rem;
}
</style>
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
    <div class="ceiling_paint">
      <b-form-checkbox
        v-model="includeCeilingPaint"
        name="ceiling_paint"
        switch
        size="lg"
        class="mr-3"
        :disabled="typeValue.code == 'exterior_paints' ? true : false"
      >
        <label class="label_medium">
          <span>Ceiling Paint </span>
          <span v-if="includeCeilingPaint">Included</span>
          <span v-else>Excluded</span>
        </label>
      </b-form-checkbox>
    </div>
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
        if (value.code == "exterior_paints") {
          this.includeCeilingPaint = false;
        }
        this.$store.commit("UPDATE_TYPE_VALUE", value);
      }
    },
    includeCeilingPaint: {
      get() {
        return this.$store.state.calculationData.includeCeilingPaint;
      },
      set(value) {
        this.$store.commit("UPDATE_INCLUDE_CEILING_PAINT", value);
      }
    }
  }
};
</script>
