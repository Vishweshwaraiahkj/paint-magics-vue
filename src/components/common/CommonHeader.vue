<style scoped>
.app-header {
  color: #fff;
}
</style>
<template>
  <header class="app-header">
    <b-navbar toggleable="lg" id="headerBox" fixed="top">
      <b-navbar-brand class="app-logo">
        <router-link to="/">
          <img :src="logo" alt="Paint Magics" width="50px" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="homePage">
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/estimator">Estimate Calculator</router-link>
          </b-nav-item>
          <b-nav-item href="/#servieces">Services</b-nav-item>
          <b-nav-item href="/#">Design Gallery</b-nav-item>
          <b-nav-item href="/#enquire_us">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav right class="ml-auto">
          <b-nav-item>
            <b-button size="sm" variant="light" class="my-2 my-sm-0 mobile" type="submit">
              <span class="icon">
                <fa-icon :icon="['fas', 'mobile-alt']" class="mr-2" />
              </span>
              <span class="calluson">
                <a class="text-dark" href="tel:+919741252425">+91-9741-252425</a>
              </span>
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  name: "CommonHeader",
  components: {},
  data() {
    return {
      logo: require("@/assets/logos/paintmagics.png"),
      calluslogo: require("@/assets/images/call-us-on.png")
    };
  },
  computed: {
    homePage() {
      let a = window.location.pathname == "/" ? true : false;
      return !a;
    }
  },
  methods: {
    headerHeight() {
      let height = document.getElementById("headerBox").offsetHeight;
      return height;
    }
  }
};
</script>
