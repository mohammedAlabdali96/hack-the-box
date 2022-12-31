<template>
  <router-link to="/game/123">
    <div
      class="
        game-app-container
        flex-column
        align-items-center
        flex-md-row
        d-flex
      "
    >
      <div class="avatar">
        <img
          class="img-fluid"
          src="https://cdn.akamai.steamstatic.com/steam/apps/1648410/header.jpg?t=1654505950"
        />
      </div>
      <div class="info w-100">
        <span class="price d-inline d-md-none">
          <div class="discount">
            <div class="container-item">-25%</div>
          </div>
          <div class="container-item">
            <div>
              <div class="discounted-price">$9.99</div>
              <div class="current-price">$7.49</div>
            </div>
          </div>
        </span>
        <div class="title">
          RPG Maker MZ - Winding Road and Grassland Tileset
        </div>
        <div class="platforms">
          <img
            class="windows"
            src="/images/c60164ce4938cd46386a23defa4bdb59.png"
          /><img
            class="mac"
            src="/images/40458cabc134984d5fea298ac01ad68b.png"
          />
        </div>
        <div class="tags">
          <div class="tags-container">
            <span class="single-tag">RPG</span>
            <span class="single-tag">Design &amp; Illustration</span>
            <span class="single-tag">Web Publishing</span>
          </div>
        </div>
      </div>

      <div class="price d-none d-md-block">
        <div class="discount">
          <div class="container-item">-25%</div>
        </div>
        <div class="container-item">
          <div>
            <div class="discounted-price">$9.99</div>
            <div class="current-price">$7.49</div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {};
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
    // max-width: 169px;
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
      .discounted-price {
        text-decoration: line-through;
        font-size: 0.6875rem;
        color: #626366;
        position: relative;
        bottom: -2px;
        display: inline;
      }
      .current-price {
        font-size: 0.8125rem;
        color: #9099a1;
      }
    }
  }
}
</style>
