<template>
  <router-link :to="`/game/${game._id}`">
    <div
      class="
        game-app-container
        flex-column
        align-items-center
        flex-md-row
        d-flex
        p-3
        my-2
        border
      "
    >
      <div class="avatar">
        <img class="img-fluid" alt="game-image" :src="game.header_image" />
      </div>
      <div class="info w-100">
        <div class="price d-inline d-md-none">
          <div class="discount">
            <div v-if="getDiscountPercent > 0" class="container-item">
              -{{ getDiscountPercent }}%
            </div>
          </div>
          <div class="container-item">
            <div>
              <div
                v-if="getFinalPrice"
                class="discounted-price"
                :class="{ 'is-discounted': getDiscountPercent }"
              >
                {{ getFinalPrice }}
              </div>
              <div class="current-price">{{ getInitPrice }}</div>
            </div>
          </div>
        </div>
        <div class="title">
          {{ game.name }}
        </div>
        <div class="platforms">
          <img
            v-if="game.platforms.mac"
            alt="mac"
            class="mac"
            width="20"
            height="20"
            src="@/assets/mac.png"
          /><img
            class="window"
            src="@/assets/microsoft.png"
            width="20"
            alt="windows"
            height="20"
            v-if="game.platforms.windows"
          />
          <img
            class="linux"
            width="20"
            height="20"
            alt="linux"
            src="@/assets/penguin.png"
            v-if="game.platforms.linux"
          />
        </div>
        <div class="tags">
          <div class="tags-container" v-for="tag in getTag" :key="tag.id">
            <span class="single-tag">{{ tag.description }}</span>
          </div>
        </div>
      </div>

      <div class="price d-none d-md-block">
        <div class="discount">
          <div class="container-item" v-if="getDiscountPercent > 0">
            -{{ getDiscountPercent }}%
          </div>
        </div>
        <div class="container-item">
          <div>
            <div
              v-if="getFinalPrice"
              class="discounted-price"
              :class="{ 'is-discounted': getDiscountPercent }"
            >
              {{ getFinalPrice }}
            </div>
            <div class="current-price">{{ getInitPrice }}</div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getInitPrice() {
      if (this.game.price_overview) {
        return this.game.price_overview.initial_formatted;
      } else return "";
    },
    getDiscountPercent() {
      if (this.game.price_overview) {
        return this.game.price_overview.discount_percent;
      } else return "";
    },
    getFinalPrice() {
      if (this.game.price_overview) {
        return this.game.price_overview.final_formatted;
      } else return "";
    },
    getTag() {
      if (this.game.categories) {
        return this.game.categories.slice(0, 3);
      } else return [{ description: "", id: 0 }];
    },
  },
};
</script>
<style lang="scss">
.game-app-container {
  color: white;
  background-color: #00000033;
  max-width: 675px;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
  position: relative;
  .avatar {
    float: left;
    display: inline-block;
    vertical-align: top;
    img {
      vertical-align: baseline;
    }
  }
  .info {
    float: left;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    margin-left: 16px;
    height: 100%;
    text-align: start;
    .title {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-top: 4px;
      max-width: 280px;
    }

    .platforms {
      margin-bottom: 4px;
    }
    .tags {
      float: left;
      display: inline-block;
      vertical-align: top;
      .tags-container {
        font-size: 0.75rem;
        color: #384959;
        width: 100%;
        .single-tag {
          display: inline-block;
        }
      }
    }
  }

  .price {
    margin-right: 20px;
    height: 100%;
    position: static;
    float: right;
    width: 35%;
    text-align: end;

    .discount {
      position: static;
      height: 100%;
      margin-left: 16px;
      .container-item {
        background-color: #4c6b22;
        color: #a4d007;
        font-size: 0.875rem;
        padding: 0 4px;
        display: inline;
      }
    }
    .container-item {
      .is-discounted {
        text-decoration: line-through;
        color: #656873 !important;
        font-size: 0.7125rem !important;
      }
      .discounted-price {
        color: #fff;
        position: relative;
        font-size: 0.8125rem;
        bottom: -2px;
        display: inline;
      }
      .current-price {
        font-size: 0.8125rem;
        color: #fff;
      }
    }
  }
}
</style>
