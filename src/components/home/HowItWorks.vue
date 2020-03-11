<template>
  <b-container fluid class="text-center my-3 py-2">
    <h1 class="homeTitles">How It Works?</h1>
    <b-row class="text-center how_box">
      <b-card v-for="slider in slides" :key="slider.id" class="how_card">
        <b-card-img bottom :src="slider.image"></b-card-img>
        <h5 class="m-2">
          <v-clamp autoresize :max-lines="1">{{ slider.name }}</v-clamp>
        </h5>
      </b-card>
    </b-row>
  </b-container>
</template>
<script>
import VClamp from "vue-clamp";
export default {
  name: "HowItWorks",
  components: {
    VClamp
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "Book Free Color Consultation",
          image: require("@/assets/images/how_it_works/support.png"),
          alt: "Slider",
          desc:
            "Paints Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
          id: 2,
          name: "Color & Design",
          image: require("@/assets/images/how_it_works/colordesign.png"),
          alt: "Slider",
          desc:
            "Magics Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
          id: 3,
          name: "Estimate",
          image: require("@/assets/images/how_it_works/estimate.png"),
          alt: "Slider",
          desc:
            "Masters Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
          id: 4,
          name: "Execute",
          image: require("@/assets/images/how_it_works/execute.png"),
          alt: "Slider",
          desc:
            "Masters Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ]
    };
  }
};
</script>
