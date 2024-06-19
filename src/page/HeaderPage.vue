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
          Transforming Ethereum into the<br class="br-phone"> Unstoppable Decentralized Web Server.
        </div>

        <div class="header-list">
          <div class="lb-text lb-text-margin" @click.stop="goEthDenver">
            Watch ETHDenver Talk <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </div>
          <div class="lb-text lb-text-margin" @click.stop="goDevcon">
            Watch Devcon Talk <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </div>
        </div>
      </div>
      <div class="content-video">
        <VideoPlayer />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  name: "HeaderPage",
  components: {
    HeaderComponent,
    VideoPlayer
  },
  methods: {
    goEthDenver() {
      window.open('https://www.youtube.com/watch?v=h31q2ZMwHkQ', "_blank");
    },
    goDevcon() {
      window.open('https://www.youtube.com/watch?v=rRI-3RV_JHw', "_blank");
    },
  }
};
</script>

<style scoped>
.home {
  background: #FFFFFF;
  width: 100%;
  padding-bottom: 66px;
}

.header {
  transform: translateX(60px);
  margin: 0 auto;
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.header-title {
  margin-top: 70px;
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
  margin-top:  45px;
  text-align: left;
  color: #070102;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 150%; /* 2.25rem */
  font-style: normal;
  font-family: SatoshiRegular;
}


.header-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 124px;
}
.lb-text {
  cursor: pointer;
  color: #000000;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  font-family: SatoshiRegular;
}
.lb-text:hover {
  opacity: 0.6;
}
.lb-text-margin {
  margin-top: 15px;
}


.content-video {
  width: 63%;
}
video {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 500px) {
  .home {
    padding-bottom: 40px;
  }

  .header {
    transform: translateX(0);
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
    gap: 0;
  }

  .content {
    width: 90%;
  }

  .header-title {
    width: 100%;
    margin-top: 25px;
    text-align: center;
    font-size: 28px;
    line-height: 32px;
  }
  .br-phone {
    display: none;
  }

  .header-content {
    width: 100%;
    margin-top:  25px;
    text-align: center;
    font-size: 12px;
    letter-spacing: -0.36px;
  }

  .header-list {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }
  .lb-text {
    font-size: 12px;
  }
  .lb-text-margin {
    margin-top: 8px;
  }


  .content-video {
    width: 90%;
  }
}
</style>
