<template>
  <div class="paint_products">
    <div class="paint_product_tabs">
      <h3 v-if="Object.keys(paintproducts.non_ceiling).length">Wall Paints</h3>
      <hr />
      <slot name="wallpaintError"></slot>
      <div
        v-if="
          Object.keys(wallsPaintProduct).length && wallsPaintProduct.product
        "
        class="selected_product"
      >
        <label>Selected Wall Paint:</label>
        <span>{{ wallsPaintProduct.product }}</span>
      </div>
      <b-tabs
        v-if="Object.keys(paintproducts.non_ceiling).length"
        vertical
        pills
        card
      >
        <b-tab active>
          <template v-slot:title>
            <span>Economy</span>
          </template>
          <div>
            <b-card-group v-if="paintproducts.non_ceiling.economy" columns>
              <b-card
                v-for="(economy, index) in paintproducts.non_ceiling.economy"
                :key="index"
                bg-variant="white"
                text-variant="dark"
                :id="'wall_economy_' + index"
                class="paint_product_box"
                :class="
                  activeWallProductId == 'wall_economy_' + index ? 'active' : ''
                "
                @click="selectedPaintProduct(economy, index, 'wall_economy')"
              >
                <b-card-title class="title-flex">
                  <span class="title-span" :title="economy.product">
                    <v-clamp autoresize :max-lines="1">{{
                      economy.product
                    }}</v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price:</label>
                  <div>
                    <fa-icon :icon="['fas', 'rupee-sign']" />
                    <span>{{ economy.rate }}</span>
                  </div>
                </div>
                <b-card-text class="quality_details">
                  <div>
                    <label>Finish:</label>
                    <span>{{ economy.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability:</label>
                    <span>{{ economy.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability:</label>
                    <span>{{ economy.quality.durability }}</span>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <span>Standard</span>
          </template>
          <div>
            <b-card-group v-if="paintproducts.non_ceiling.standard" columns>
              <b-card
                v-for="(standard, index) in paintproducts.non_ceiling.standard"
                :key="index"
                bg-variant="white"
                text-variant="dark"
                :id="'wall_standard_' + index"
                class="paint_product_box"
                :class="
                  activeWallProductId == 'wall_standard_' + index
                    ? 'active'
                    : ''
                "
                @click="selectedPaintProduct(standard, index, 'wall_standard')"
              >
                <b-card-title class="title-flex">
                  <span class="title-span" :title="standard.product">
                    <v-clamp autoresize :max-lines="1">{{
                      standard.product
                    }}</v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price:</label>
                  <div>
                    <fa-icon :icon="['fas', 'rupee-sign']" />
                    <span>{{ standard.rate }}</span>
                  </div>
                </div>
                <b-card-text class="quality_details">
                  <div>
                    <label>Finish:</label>
                    <span>{{ standard.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability:</label>
                    <span>{{ standard.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability:</label>
                    <span>{{ standard.quality.durability }}</span>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <span>Premium</span>
          </template>
          <div>
            <b-card-group v-if="paintproducts.non_ceiling.premium" columns>
              <b-card
                v-for="(premium, index) in paintproducts.non_ceiling.premium"
                :key="index"
                bg-variant="white"
                text-variant="dark"
                :id="'wall_premium_' + index"
                class="paint_product_box"
                :class="
                  activeWallProductId == 'wall_premium_' + index ? 'active' : ''
                "
                @click="selectedPaintProduct(premium, index, 'wall_premium')"
              >
                <b-card-title class="title-flex">
                  <span class="title-span" :title="premium.product">
                    <v-clamp autoresize :max-lines="1">{{
                      premium.product
                    }}</v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price:</label>
                  <div>
                    <fa-icon :icon="['fas', 'rupee-sign']" />
                    <span>{{ premium.rate }}</span>
                  </div>
                </div>
                <b-card-text class="quality_details">
                  <div>
                    <label>Finish:</label>
                    <span>{{ premium.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability:</label>
                    <span>{{ premium.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability:</label>
                    <span>{{ premium.quality.durability }}</span>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-tab>
      </b-tabs>
      <div v-else>No products! Please check with our support team.</div>
      <h3 v-if="Object.keys(paintproducts.ceiling).length" class="pt-3">
        Ceiling Paints
      </h3>
      <hr />
      <slot name="ceilingpaintError"></slot>
      <div
        v-if="
          Object.keys(ceilingPaintProduct).length && ceilingPaintProduct.product
        "
        class="selected_product"
      >
        <label>Selected Ceiling Paint:</label>
        <span>{{ ceilingPaintProduct.product }}</span>
      </div>
      <b-tabs
        v-if="Object.keys(paintproducts.ceiling).length"
        vertical
        pills
        card
      >
        <b-tab active>
          <template v-slot:title>
            <span>Economy</span>
          </template>
          <div>
            <b-card-group v-if="paintproducts.ceiling.economy" columns>
              <b-card
                v-for="(economy, index) in paintproducts.ceiling.economy"
                :key="index"
                bg-variant="white"
                text-variant="dark"
                :id="'ceiling_economy_' + index"
                class="paint_product_box"
                :class="
                  activeCeilingProductId == 'ceiling_economy_' + index
                    ? 'active'
                    : ''
                "
                @click="
                  selectedCeilingProduct(economy, index, 'ceiling_economy')
                "
              >
                <b-card-title class="title-flex">
                  <span class="title-span" :title="economy.product">
                    <v-clamp autoresize :max-lines="1">{{
                      economy.product
                    }}</v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price:</label>
                  <div>
                    <fa-icon :icon="['fas', 'rupee-sign']" />
                    <span>{{ economy.rate }}</span>
                  </div>
                </div>
                <b-card-text class="quality_details">
                  <div>
                    <label>Finish:</label>
                    <span>{{ economy.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability:</label>
                    <span>{{ economy.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability:</label>
                    <span>{{ economy.quality.durability }}</span>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <span>Standard</span>
          </template>
          <div>
            <b-card-group v-if="paintproducts.ceiling.standard" columns>
              <b-card
                v-for="(standard, index) in paintproducts.ceiling.standard"
                :key="index"
                bg-variant="white"
                text-variant="dark"
                :id="'ceiling_standard_' + index"
                class="paint_product_box"
                :class="
                  activeCeilingProductId == 'ceiling_standard_' + index
                    ? 'active'
                    : ''
                "
                @click="
                  selectedCeilingProduct(standard, index, 'ceiling_standard')
                "
              >
                <b-card-title class="title-flex">
                  <span class="title-span" :title="standard.product">
                    <v-clamp autoresize :max-lines="1">{{
                      standard.product
                    }}</v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price:</label>
                  <div>
                    <fa-icon :icon="['fas', 'rupee-sign']" />
                    <span>{{ standard.rate }}</span>
                  </div>
                </div>
                <b-card-text class="quality_details">
                  <div>
                    <label>Finish:</label>
                    <span>{{ standard.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability:</label>
                    <span>{{ standard.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability:</label>
                    <span>{{ standard.quality.durability }}</span>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <span>Premium</span>
          </template>
          <div>
            <b-card-group v-if="paintproducts.ceiling.premium" columns>
              <b-card
                v-for="(premium, index) in paintproducts.ceiling.premium"
                :key="index"
                bg-variant="white"
                text-variant="dark"
                :id="'ceiling_premium_' + index"
                class="paint_product_box"
                :class="
                  activeCeilingProductId == 'ceiling_premium_' + index
                    ? 'active'
                    : ''
                "
                @click="
                  selectedCeilingProduct(premium, index, 'ceiling_premium')
                "
              >
                <b-card-title class="title-flex">
                  <span class="title-span" :title="premium.product">
                    <v-clamp autoresize :max-lines="1">{{
                      premium.product
                    }}</v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price:</label>
                  <div>
                    <fa-icon :icon="['fas', 'rupee-sign']" />
                    <span>{{ premium.rate }}</span>
                  </div>
                </div>
                <b-card-text class="quality_details">
                  <div>
                    <label>Finish:</label>
                    <span>{{ premium.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability:</label>
                    <span>{{ premium.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability:</label>
                    <span>{{ premium.quality.durability }}</span>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import VClamp from "vue-clamp";
export default {
  name: "PaintProducts",
  props: ["paintproducts", "checkErrors"],
  components: {
    VClamp
  },
  data() {
    return {
      activeWallProductId: "",
      activeCeilingProductId: ""
    };
  },
  methods: {
    selectedPaintProduct(object, index, type) {
      this.activeWallProductId = type + "_" + index;
      this.wallsPaintProduct = object;
      this.checkErrors("paint_product");
    },
    selectedCeilingProduct(object, index, type) {
      this.activeCeilingProductId = type + "_" + index;
      this.ceilingPaintProduct = object;
      this.checkErrors("ceiling_product");
    }
  },
  computed: {
    wallsPaintProduct: {
      get() {
        return this.$store.state.calculationData.wallsPaintProduct;
      },
      set(value) {
        this.$store.commit("UPDATE_WALLS_PAINT_PRODUCT", value);
      }
    },
    ceilingPaintProduct: {
      get() {
        return this.$store.state.calculationData.ceilingPaintProduct;
      },
      set(value) {
        this.$store.commit("UPDATE_CEILING_PAINT_PRODUCT", value);
      }
    }
  }
};
</script>
