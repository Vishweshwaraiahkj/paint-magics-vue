<template>
  <b-container fluid class="text-center my-3 py-2">
    <h1 class="homeTitles">Enquire Us</h1>
    <b-row class="text-left">
      <b-col>Ads and other text goes here..</b-col>
      <b-col>
        <b-form>
          <b-form-group>
            <b-form-input type="text" placeholder="Name..." />
          </b-form-group>
          <b-form-group>
            <b-form-input type="email" placeholder="Email..." />
          </b-form-group>
          <b-form-group>
            <b-form-input type="number" placeholder="Phone..." />
          </b-form-group>
          <b-button variant="primary" size="lg" block type="submit">
            Submit
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "EnquireUs",
  components: {},
  data() {
    return {};
  }
};
</script>
