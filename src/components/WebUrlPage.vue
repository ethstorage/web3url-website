<template>
  <div class="home">
    <div class="web-url">
      <p class="web-url-title">Core Features of web3://</p>
      <div class="web-context">
        <img src="@/assets/core-list.svg" class="web-context-img"/>
        <div class="web-context-item">
          <span class="web-context-title">Decentralized DNS</span>
          <span class="web-context-message">Trustless decentralized names can be issued as tokens on the blockchain. Registration is done through smart contracts, and name ownership is secured by the blockchain.</span>

          <span class="web-context-title">On-Chain/L2 Storage</span>
          <span class="web-context-message">Web contents are stored in permissionless storage network consisting of multiple nodes around the world. It provides greater security, low cost and resistance to censorship.</span>

          <span class="web-context-title">Dynamic Composition</span>
          <span class="web-context-message">Web contents can be accessed and composited by smart contracts. It opens many unexplored areas like on-chain dynamic website rendering, wearable NFT, etc.</span>
        </div>
      </div>
    </div>
    <img class="work-img" src="@/assets/work-bg.png"/>
  </div>
</template>

<style scoped>
.home {
  background: #EEF6FF;
}

.web-url {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.web-url-title {
  margin-top: 120px;
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.web-context {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 40px;
}
.web-context-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 550px;
  margin-left: 120px;
  margin-top: 30px;
}
.web-context-title {
  margin-top: 80px;
  margin-bottom: 30px;
  text-align: left;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 77.778% */
  font-family: Satoshi;
}
.web-context-message {
  text-align: left;
  color: #272D38;
  font-size: 24px;
  font-weight: 300;
  line-height: 140%; /* 33.6px */
  font-style: normal;
  font-family: SatoshiRegular;
}

.work-img {
  width: 100%;
  margin-top: -19%;
  margin-bottom: 80px;
}
@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .web-url {
    max-width: 95%;
  }

  .web-url-title {
    margin-top: 40px;
    font-size: 16px;
  }

  .web-context {
    margin-top: 5px;
  }
  .web-context-img {
    width: 44%;
  }

  .web-context-item {
    max-width: 53%;
    margin-left: auto;
    margin-top: 0;
  }
  .web-context-title {
    margin-top: 24px;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: normal;
  }
  .web-context-message {
    font-size: 12px;
    line-height: normal;
  }

  .work-img {
    width: 100%;
    margin-top: -19%;
    margin-bottom: 40px;
  }
}
</style>
