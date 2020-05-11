<style lang="scss" scoped>
.paint_product_tabs {
  color: green;
  background: #f8f4ed;
  padding: 1rem;
  border: 1px solid #ddd;
  margin: 1rem 0;

  .title-flex {
    display: flex;

    .title-span {
      text-align: justify;
      flex: 1;
    }
  }

  .card-deck .card {
    max-width: calc(25% - 30px);
    min-width: calc(25% - 30px);
    margin-bottom: 1rem;
  }

  .price_box {
    display: flex;
    align-content: flex-start;
  }

  .paint_product_box {
    background: brown;
    font-size: 12px;
    &.active {
      .card-body {
        background: rgb(233, 113, 133);
      }

      &:before {
        content: "\2713";
        line-height: 1em;
        width: 1em;
        height: 1em;
        color: #999;
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>

<template>
  <div class="paint_products">
    <h1>Select Paint Product for walls</h1>
    <div class="paint_product_tabs">
      <h3 v-if="Object.keys(paintproducts.non_ceiling).length">Wall Paints</h3>
      <div
        v-if="
          Object.keys(wallsPaintProduct).length && wallsPaintProduct.product
        "
        class="selected_product"
      >
        <label>Wall Paint: </label>
        <span>{{ wallsPaintProduct.product }}</span>
      </div>
      <b-tabs v-if="Object.keys(paintproducts.non_ceiling).length">
        <b-tab active>
          <template v-slot:title>
            <span>Economy</span>
          </template>
          <div class="p-3">
            <b-card-group v-if="paintproducts.non_ceiling.economy" columns>
              <b-card
                v-for="(economy, index) in paintproducts.non_ceiling.economy"
                :key="index"
                bg-variant="light"
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
                    <v-clamp autoresize :max-lines="1">
                      {{ economy.product }}
                    </v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price: </label>
                  <fa-icon :icon="['fas', 'rupee-sign']" />
                  <span>{{ economy.rate }}</span>
                </div>
                <b-card-text class="d-flex flex-column">
                  <div>
                    <label>Finish: </label>
                    <span>{{ economy.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability: </label>
                    <span>{{ economy.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability: </label>
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
          <div class="p-3">
            <b-card-group v-if="paintproducts.non_ceiling.standard" columns>
              <b-card
                v-for="(standard, index) in paintproducts.non_ceiling.standard"
                :key="index"
                bg-variant="light"
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
                    <v-clamp autoresize :max-lines="1">
                      {{ standard.product }}
                    </v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price: </label>
                  <fa-icon :icon="['fas', 'rupee-sign']" />
                  <span>{{ standard.rate }}</span>
                </div>
                <b-card-text class="d-flex flex-column">
                  <div>
                    <label>Finish: </label>
                    <span>{{ standard.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability: </label>
                    <span>{{ standard.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability: </label>
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
          <div class="p-3">
            <b-card-group v-if="paintproducts.non_ceiling.premium" columns>
              <b-card
                v-for="(premium, index) in paintproducts.non_ceiling.premium"
                :key="index"
                bg-variant="light"
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
                    <v-clamp autoresize :max-lines="1">
                      {{ premium.product }}
                    </v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price: </label>
                  <fa-icon :icon="['fas', 'rupee-sign']" />
                  <span>{{ premium.rate }}</span>
                </div>
                <b-card-text class="d-flex flex-column">
                  <div>
                    <label>Finish: </label>
                    <span>{{ premium.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability: </label>
                    <span>{{ premium.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability: </label>
                    <span>{{ premium.quality.durability }}</span>
                  </div>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
        </b-tab>
      </b-tabs>
      <div v-else>
        No products! Please check with our support team.
      </div>

      <h3 v-if="Object.keys(paintproducts.ceiling).length">Ceiling Paints</h3>
      <div
        v-if="
          Object.keys(ceilingPaintProduct).length && ceilingPaintProduct.product
        "
        class="selected_product"
      >
        <label>Ceiling Paint: </label>
        <span>{{ ceilingPaintProduct.product }}</span>
      </div>
      <b-tabs v-if="Object.keys(paintproducts.ceiling).length">
        <b-tab active>
          <template v-slot:title>
            <span>Economy</span>
          </template>
          <div class="p-3">
            <b-card-group v-if="paintproducts.ceiling.economy" columns>
              <b-card
                v-for="(economy, index) in paintproducts.ceiling.economy"
                :key="index"
                bg-variant="light"
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
                    <v-clamp autoresize :max-lines="1">
                      {{ economy.product }}
                    </v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price: </label>
                  <fa-icon :icon="['fas', 'rupee-sign']" />
                  <span>{{ economy.rate }}</span>
                </div>
                <b-card-text class="d-flex flex-column">
                  <div>
                    <label>Finish: </label>
                    <span>{{ economy.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability: </label>
                    <span>{{ economy.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability: </label>
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
          <div class="p-3">
            <b-card-group v-if="paintproducts.ceiling.standard" columns>
              <b-card
                v-for="(standard, index) in paintproducts.ceiling.standard"
                :key="index"
                bg-variant="light"
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
                    <v-clamp autoresize :max-lines="1">
                      {{ standard.product }}
                    </v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price: </label>
                  <fa-icon :icon="['fas', 'rupee-sign']" />
                  <span>{{ standard.rate }}</span>
                </div>
                <b-card-text class="d-flex flex-column">
                  <div>
                    <label>Finish: </label>
                    <span>{{ standard.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability: </label>
                    <span>{{ standard.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability: </label>
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
          <div class="p-3">
            <b-card-group v-if="paintproducts.ceiling.premium" columns>
              <b-card
                v-for="(premium, index) in paintproducts.ceiling.premium"
                :key="index"
                bg-variant="light"
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
                    <v-clamp autoresize :max-lines="1">
                      {{ premium.product }}
                    </v-clamp>
                  </span>
                </b-card-title>
                <div class="price_box">
                  <label>Price: </label>
                  <fa-icon :icon="['fas', 'rupee-sign']" />
                  <span>{{ premium.rate }}</span>
                </div>
                <b-card-text class="d-flex flex-column">
                  <div>
                    <label>Finish: </label>
                    <span>{{ premium.quality.finish }}</span>
                  </div>
                  <div>
                    <label>Washability: </label>
                    <span>{{ premium.quality.washability }}</span>
                  </div>
                  <div>
                    <label>Durability: </label>
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
  props: ["paintproducts"],
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
    },
    selectedCeilingProduct(object, index, type) {
      this.activeCeilingProductId = type + "_" + index;
      this.ceilingPaintProduct = object;
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
