<template>
  <footer id="footer">
    <div class="footer-top">
      <b-container fluid>
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-info">
            <h3>Paint Magics</h3>
            <p>
              <v-clamp autoresize :max-lines="6">{{ aboutText }}</v-clamp>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/privacy">Privacy policy</a>
              </li>
              <li>
                <a href="/faqs">FAQ</a>
              </li>
              <li>
                <a href="/">Buy Paints</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              <span>20/1 Wellington Street,</span>
              <br />
              <span>Langford Garden,</span>
              <br />
              <span>Richmond Town,</span>
              <br />
              <span>Bangalore 560025</span>
              <br />
              <span> <strong>Phone:</strong>+91 9741252425 </span>
              <br />
              <span>
                <strong>Email:</strong> paintmagicsbangalore@gmail.com
              </span>
              <br />
              <span> <strong>Web:</strong> www.paintmagics.com </span>
              <br />
            </p>

            <div class="social-links">
              <a href="/" class="twitter">
                <fa-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="/" class="facebook">
                <fa-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="/" class="instagram">
                <fa-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="/" class="linkedin">
                <fa-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Subscribe for More</h4>
            <p>
              Please enter your email address to subscribe for more offers and
              discounts...
            </p>
            <Form method="post">
              <input type="email" name="email" required="required" />
              <input type="submit" value="Subscribe" />
            </Form>
          </div>
        </div>
      </b-container>
    </div>

    <div class="container">
      <div class="copyright">
        © Copyright
        <strong>&nbsp;Paint Magics</strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by
        <a class="dev_card" @click="devCard = true">&nbsp;Masters</a>
        <!-- use the modal component, pass in the prop -->
        <DevCard v-if="devCard" @close="devCard = false" class="creditsModal">
          <!-- you can use custom content here to overwrite default content -->
          <h3 slot="header">Developer Details</h3>
          <div slot="body">
            <div class="dev_name">
              <label>Dev Name: </label>
              <span>Vishweshwarayya K J</span>
            </div>
            <div class="dev_contact">
              <label>Contact Number: </label>
              <span>
                {{ showNumber ? "+91-7353333573" : "XXXXXXXXXXXX" }}
                <fa-icon class="show_num" @click="revealNumber" icon="eye" />
              </span>
            </div>
          </div>
          <div slot="footer"></div>
        </DevCard>
      </div>
    </div>
  </footer>
</template>

<script>
import VClamp from "vue-clamp";
import DevCard from "@/components/dev_card/DevCard.vue";
export default {
  name: "CommonFooter",
  components: {
    VClamp,
    DevCard
  },
  data() {
    return {
      aboutText: `Since 1975, HariBhai Wood Décor has been crafting sensible
      Woodwork with Interior & Exterior Painting Services for
      residential and commercials with great craftsmanship and
      service at the modest cost. 4 decades of experience, skill and
      commitment will surpass your expectation. Paint Magics is a
      team of professional, energetic individuals who understand to
      deliver the same level of customer expectation that the family
      had been exceeding over the years. Every Project is a
      personalized project for every professional at Paint Magics as
      we understand the happiness of every Living Walls at your
      house. We are committed to delivering any projects on time as
      we understand each project, we begin has specific needs and a
      dream to live!!!`,
      devCard: false,
      showNumber: false
    };
  },
  methods: {
    revealNumber() {
      this.showNumber = !this.showNumber;
    }
  }
};
</script>
