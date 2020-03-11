<template>
  <b-container fluid class="text-center my-3 py-2">
    <h1 class="homeTitles">Why Paint Magics?</h1>
    <b-row class="text-left">
      <b-list-group class="gradient-list row">
        <b-col>
          <b-list-group-item v-for="feature in features" :key="feature.id">
            <b-img :src="feature.image" alt="images" class="why_us_icons" />
            &nbsp;{{ feature.title }}
          </b-list-group-item>
        </b-col>
        <b-col>
          <b-list-group-item v-for="feature in features_set" :key="feature.id">
            <b-img :src="feature.image" alt="images" class="why_us_icons" />
            &nbsp;{{ feature.title }}
          </b-list-group-item>
        </b-col>
      </b-list-group>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "WhatsUnique",
  components: {},
  data() {
    return {
      features: [
        {
          id: 1,
          image: require("@/assets/images/why_us/1_free_color_design_consultation.png"),
          title: "Free Color & Design Consultation."
        },
        {
          id: 2,
          image: require("@/assets/images/why_us/2_2_years_garuntee.png"),
          title: "2 years Guarantee."
        },
        {
          id: 3,
          image: require("@/assets/images/why_us/3_dedicated_project_manager.png"),
          title: "Dedicated Project Managers."
        },
        {
          id: 4,
          image: require("@/assets/images/why_us/4_trained_professional.png"),
          title: "Trained Professionals."
        }
      ],
      features_set: [
        {
          id: 5,
          image: require("@/assets/images/why_us/5_on_time_delivery.png"),
          title: "On Time Delivery."
        },
        {
          id: 6,
          image: require("@/assets/images/why_us/6_no_subcontracting.png"),
          title: "No Subcontracting."
        },
        {
          id: 7,
          image: require("@/assets/images/why_us/7_modern_and_contemprary.png"),
          title: "Modern and Contemporary designs."
        },
        {
          id: 8,
          image: require("@/assets/images/why_us/8_budgeted_plan_for_rented_flats_2.png"),
          title: "Budgeted package for renting out flats."
        }
      ]
    };
  }
};
</script>
