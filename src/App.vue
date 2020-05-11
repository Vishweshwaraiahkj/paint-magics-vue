<style scoped>
.content-body {
  display: flex;
  margin-top: 75px;
}
.app.home {
  margin-top: -75px;
}
.estimator {
  flex: 1;
}
</style>
<template>
  <div id="app">
    <CommonHeader :key="Math.random()" />
    <div class="content-body">
      <router-view />
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonFooter from "@/components/common/CommonFooter.vue";
export default {
  name: "App",
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>
