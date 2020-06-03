<template>
  <div class="slider-box">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="slide in slides"
        :key="slide.id"
        :img-src="slide.image"
      >
        <h1>
          <v-clamp autoresize :max-lines="1">{{ slide.name }}</v-clamp>
        </h1>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4 d-none">
      Slide #: {{ slide }}
      <br />
      Sliding: {{ sliding }}
    </p>
    <b-button
      class="estimate-button btn-square p-2 animated styled_btn"
      variant="warning"
    >
      <b-link href="/estimator">Get Free Estimate</b-link>
    </b-button>
    <b-button
      class="freedesign-button btn-square p-2 animated styled_btn"
      variant="primary"
    >
      <v-clamp autoresize :max-lines="1"
        >Book Free Design & Color Consultation</v-clamp
      >
    </b-button>
  </div>
</template>

<script>
import VClamp from "vue-clamp";
export default {
  name: "PmCarousal",
  components: {
    VClamp
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      slides: [
        {
          id: 1,
          name: "Free Color & Design Consultation.",
          image: require("@/assets/images/slides/slider1.jpg"),
          alt: "Slider",
          desc: ""
        },
        {
          id: 2,
          name: "2 years Guarantee.",
          image: require("@/assets/images/slides/slider2.jpg"),
          alt: "Slider",
          desc: ""
        },
        {
          id: 3,
          name: "Dedicated Project Managers.",
          image: require("@/assets/images/slides/slider3.jpg"),
          alt: "Slider",
          desc: ""
        },
        {
          id: 4,
          name: "Trained Professionals.",
          image: require("@/assets/images/slides/slider4.jpg"),
          alt: "Slider",
          desc: ""
        },
        {
          id: 5,
          name: "On Time Delivery.",
          image: require("@/assets/images/slides/slider5.jpg"),
          alt: "Slider",
          desc: ""
        },
        {
          id: 6,
          name: "No Subcontracting.",
          image: require("@/assets/images/slides/slider6.jpg"),
          alt: "Slider",
          desc: ""
        },
        {
          id: 7,
          name: "Modern and Contemporary designs.",
          image: require("@/assets/images/slides/slider7.jpg"),
          alt: "Slider",
          desc: ""
        },
        {
          id: 8,
          name: "Budgeted package for renting out flats.",
          image: require("@/assets/images/slides/slider8.jpg"),
          alt: "Slider",
          desc: ""
        }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      if (slide) this.sliding = true;
    },
    onSlideEnd(slide) {
      if (slide) this.sliding = false;
    }
  }
};
</script>
