<template>
  <transition name="fade-in-up">
    <div class="d-flex flex-column flex-root error_pages">
      <div
        class="error error-404 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
        :style="{
          backgroundImage: `url(${backgroundImage})`
        }"
      >
        <!-- begin:: Content -->
        <div class="d-flex flex-column flex-row-fluid text-center">
          <h1
            class="error-title font-weight-boldest text-white mb-12"
            style="margin-top: 12rem;"
          >
            Oops...
          </h1>
          <p class="display-4 text-white">
            Looks like something went wrong.
            <br />We're working on it
            <br />
          </p>
        </div>
        <!-- end:: Content -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Error_404",
  mounted() {},
  data() {
    return {
      errorImage: require("@/assets/images/errors/error_404.jpg")
    };
  },
  computed: {
    backgroundImage() {
      return process.env.VUE_APP_PUBLIC_URL + this.errorImage;
    }
  }
};
</script>
