<style scoped>
.app-header {
  color: #fff;
}
</style>
<template>
  <header class="app-header">
    <b-navbar toggleable="lg" id="headerBox">
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
          <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/estimator"
              >Estimate Calculator</router-link
            ></b-nav-item
          >
          <b-nav-item href="#servieces">Services</b-nav-item>
          <b-nav-item href="#how_it_works">How It Works</b-nav-item>
          <b-nav-item href="#">Design Gallery</b-nav-item>
          <b-nav-item href="#enquire_us">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav right class="ml-auto">
          <b-nav-item>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              ><span class="calluson">
                &nbsp;&nbsp; <a href="tel:+919741252425">+91-9741-252425</a>
              </span></b-button
            >
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
  },
  mounted: function() {
    console.log(this.headerHeight());
  }
};
</script>
