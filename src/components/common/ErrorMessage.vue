<template>
  <div class="c-error">
    <p class="c-validation">{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: "ErrorMessage",
  props: {
    errorMessage: String
  },
  data() {
    return {
      message: this.errorMessage ? this.errorMessage : "This field is required!"
    };
  },
  computed: {},
  methods: {},
  mounted: function() {}
};
</script>
