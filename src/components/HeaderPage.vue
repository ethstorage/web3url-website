<template>
  <div class="home">
    <HeaderComponent />

    <div class="header">
      <div class="content">
        <div class="header-title">
          web3:// - <br class="br-phone"/>
          <span class="title-color1">Access Protocol</span> <br/>
          for <span class="title-color2">Future Web3</span>
        </div>

        <div class="header-content">
          Transforming Ethereum into the<br> Unstoppable Decentralized Web Server.
        </div>

        <div class="header-list">
          <div class="lb-text" @click.stop="goEthDenver2024">
            Watch ETHDenver 2024 Talk <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </div>
          <div class="lb-text lb-text-margin" @click.stop="goEthDenver">
            Watch ETHDenver 2023 Talk <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </div>
          <div class="lb-text lb-text-margin" @click.stop="goDevcon">
            Watch Devcon Talk <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </div>
        </div>
      </div>

      <div class="content-video">
        <video autoplay loop muted playsinline>
          <source :src="videoSrc" type="video/webm">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
  name: "HeaderPage",
  components: {
    HeaderComponent
  },
  data() {
    return {
      videoSrc: require('@/assets/video.webm')
    };
  }
};
</script>

<style scoped>
.home {
  background: #FFFFFF;
  width: 100%;
  margin-bottom: 5rem;
}

.header {
  margin: 0 0 0 9.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.header-title {
  margin-top: -5rem;
  text-align: left;
  color: #070102;
  font-style: normal;
  font-weight: 900;
  line-height: 4.5625rem;
  font-size: 3.75rem;
  font-family: Satoshi;
}
.title-color1 {
  color: #6F41FF;
}
.title-color2 {
  color: #2593FF;
}

.header-content {
  margin-top:  8.6rem;
  text-align: left;
  color: #070102;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 150%; /* 2.25rem */
  font-style: normal;
  font-family: Satoshi;
}


.header-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5.4rem;
}
.lb-text {
  cursor: pointer;
  color: #000000;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  font-family: Satoshi;
}
.lb-text:hover {
  filter: opacity(80%);
}
.lb-text-margin {
  margin-top: 15px;
}


.content-video {
  width: 62rem;
}
video {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 500px) {
  .header {
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 15px;
  }
}
</style>
