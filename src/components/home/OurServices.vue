<template>
  <b-container fluid class="text-center my-3 py-2">
    <h1 class="homeTitles">Our Services</h1>
    <b-row class="text-left">
      <b-col v-for="slide in slides" :key="slide.id" sm="6" md="3" lg="3">
        <b-card :img-src="slide.image" img-bottom class="service_card">
          <h5 class="card_title">
            <v-clamp autoresize :max-lines="1">{{ slide.name }}</v-clamp>
          </h5>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import VClamp from "vue-clamp";
export default {
  name: "OurServices",
  components: {
    VClamp
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "Interior & Exterior Painting – Residential / Commercia",
          image: require("@/assets/images/services/service1.jpg"),
          alt: "Slider",
          desc:
            "Paints Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
          id: 2,
          name: "Textures",
          image: require("@/assets/images/services/service2.jpg"),
          alt: "Slider",
          desc:
            "Magics Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
          id: 3,
          name: "Wallpaper",
          image: require("@/assets/images/services/service3.jpg"),
          alt: "Slider",
          desc:
            "Masters Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
          id: 4,
          name: "Designer / Accent Wall",
          image: require("@/assets/images/services/service4.jpg"),
          alt: "Slider",
          desc:
            "Masters Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ]
    };
  }
};
</script>
