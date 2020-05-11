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
      <ButtonSwitch
        :key="Math.random()"
        :options="buttonOptions"
        v-on:setIsActive="setCeilingStatus($event)"
      >
        <template v-slot:after_text>
          <label class="label_medium switch_label">
            <span>Ceiling Paint </span>
            <span v-if="includeCeilingPaint">Included</span>
            <span v-else>Excluded</span>
          </label>
        </template>
      </ButtonSwitch>
    </div>
  </div>
</template>
<script>
import ButtonSwitch from "@/components/estimator/button-switch.vue";
export default {
  name: "Type",
  props: ["types"],
  components: {
    ButtonSwitch
  },
  data() {
    return {};
  },
  methods: {
    setCeilingStatus(event) {
      this.includeCeilingPaint = event;
    }
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
    },
    buttonOptions() {
      return {
        disabled: this.typeValue.code == "exterior_paints",
        isActive: this.includeCeilingPaint
      };
    }
  }
};
</script>
