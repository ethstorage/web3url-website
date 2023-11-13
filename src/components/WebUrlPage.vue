<template>
  <div class="home">
    <div class="web-url">
      <p class="web-url-title">Why web3://</p>
      <div class="web-context">
        <div class="web-context-item">
          <img class="web-context-image" src="@/assets/web1.png" />
          <span class="web-context-title">Decentralized DNS</span>
          <span class="web-context-message">Whereas traditional DNS points browsers to central servers, decentralized domains point to a distributed registry. It provides censorship resistance, better privacy, and full ownership.</span>
        </div>
        <div class="web-context-item">
          <img class="web-context-image" src="@/assets/web2.png" />
          <span class="web-context-title">On-Chain/L2 Storage</span>
          <span class="web-context-message">Web contents are stored in multiple computers (nodes) around the world, instead of centralized locations. It provides more security and lower cost.</span>
        </div>
        <div class="web-context-item">
          <img class="web-context-image" src="@/assets/web3.png" />
          <span class="web-context-title">Dynamic Composition</span>
          <span class="web-context-message">Web Contents can be accessed and composited by smart contracts. It opens many unexplored areas like on-chain dynamic website rendering, wearable NFT, etc.</span>
        </div>
      </div>
      <img class="feature-img" alt="web icon">
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #F9F9F9;
}

.web-url {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.web-url-title {
  margin-top: 80px;
  font-size: 36px;
  font-weight: normal;
  color: #000000;
  line-height: 36px;
  font-family: AlibabaPuHuiTiH;
}

.web-context {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 75px;
}
.web-context-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 315px;
}
.web-context-image {
  width: 95px;
  height: 95px;
}
.web-context-title {
  margin-top: 20px;
  font-size: 18px;
  color: #000000;
  line-height: 16px;
  font-family: AlibabaPuHuiTiM;
}
.web-context-message {
  margin-top: 10px;
  font-size: 16px;
  color: #333333;
  line-height: 28px;
  text-align: left;
  font-family: AlibabaPuHuiTiR;
}

.feature-img {
  width: 1200px;
  margin-top: 90px;
  margin-bottom: 120px;
  content: url("../assets/web-icon.png");
}

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .web-url {
    max-width: 100%;
  }

  .web-url-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .web-context {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;
  }
  .web-context-item {
    max-width: 88%;
    margin-top: 35px;
  }
  .web-context-image {
    width: 56px;
    height: 56px;
  }
  .web-context-title {
    margin-top: 15px;
    font-size: 16px;
    line-height: 16px;
  }
  .web-context-message {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }

  .feature-img {
    width: 88%;
    margin-top: 35px;
    margin-bottom: 35px;
    content: url("../assets/web-icon-phone.png");
  }
}
</style>
