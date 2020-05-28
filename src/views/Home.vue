<template>
  <div class="app home">
    <div class="homeBox">
      <PmCarousal />
    </div>
    <div class="homeBox" id="servieces">
      <OurServices />
    </div>
    <div class="homeBox" id="whats_unique">
      <WhatsUnique />
    </div>
    <div class="homeBox" id="how_it_works">
      <HowItWorks />
    </div>
    <div class="homeBox" id="enquire_us">
      <EnquireUs />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PmCarousal from "@/components/home/PmCarousal.vue";
import OurServices from "@/components/home/OurServices.vue";
import WhatsUnique from "@/components/home/WhatsUnique.vue";
import EnquireUs from "@/components/home/EnquireUs.vue";
import HowItWorks from "@/components/home/HowItWorks.vue";
export default {
  name: "Home",
  components: {
    PmCarousal,
    OurServices,
    WhatsUnique,
    EnquireUs,
    HowItWorks
  }
};
</script>
