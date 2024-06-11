<template>
  <div class="home">
    <div class="based">
      <p class="based-title">Enabling Unstoppable Fully-Onchain Dapps</p>
      <div class="based-title2">Your Unstoppable Dapps:
        <span class="go-btn-link" @click="goWeb3">Visit GitHub<img src="@/assets/arrow-right.svg" class="go-btn"/></span>
      </div>

      <CardComponent class="dapp-card"
                     bgColor="#e1efff"
                     shadowColor="#9ac8ff"
                     titleBgColor="#d2e6ff"
                     title="Demo web3:// Dapps in Testnet">
        <div class="card-layout">
          <div class="card-item" @click="goW3box">
            <img class="card-item-icon" src="@/assets/w3box.svg"/>
            <div class="card-item-text">W3Box</div>
          </div>
          <div class="card-item" @click="goW3drive">
            <img class="card-item-icon" src="@/assets/w3drive.svg"/>
            <div class="card-item-text">W3Drive</div>
          </div>
          <div class="card-item" @click="goW3Blog">
            <img class="card-item-icon" src="@/assets/w3blog.svg"/>
            <div class="card-item-text">W3Blog</div>
          </div>
          <div class="card-item" @click="goQRobot">
            <img class="card-item-icon" src="@/assets/qrobot.svg"/>
            <div class="card-item-text">Web3<br/>QRobot</div>
          </div>
          <div class="card-item" @click="goW3mail">
            <img class="card-item-icon" src="@/assets/w3mail.svg"/>
            <div class="card-item-text">W3Mail</div>
          </div>
        </div>
      </CardComponent>

      <CardComponent class="web3-card"
                     bgColor="#F4F0FF"
                     shadowColor="#d8ccff"
                     titleBgColor="#d8ccff"
                     title="web3://-Accessible Mainnet Resources">
        <div class="card-layout">
          <img class="card-item-img" src="@/assets/vblog.png" @click="goVitalik"/>
          <img class="card-item-img" src="@/assets/moonbird.png" @click="goMoonBird"/>
          <img class="card-item-img" src="@/assets/art.png" @click="goArtBlock"/>
          <img class="card-item-img" src="@/assets/nous.png" @click="goNous"/>
          <img class="card-item-img" src="@/assets/etherum-name-serve.png" @click="goEns"/>
          <img class="card-item-img" src="@/assets/cyber-brokers.png" @click="goCyberbrokers"/>
        </div>
      </CardComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent";
import { EventBus } from '@/utils/eventBus.js';

export default {
  name: "BasedPage",
  components: {
    CardComponent
  },
  methods: {
    goW3box(){
      EventBus.$emit('scrollToSection', 'web3://w3-box.eth');
    },
    goW3drive(){
      EventBus.$emit('scrollToSection', 'web3://w3-drive.eth');
    },
    goW3Blog(){
      EventBus.$emit('scrollToSection', 'web3://w3-blog.eth');
    },
    goQRobot(){
      EventBus.$emit('scrollToSection', 'web3://w3-qrobot.eth');
    },
    goW3mail(){
      EventBus.$emit('scrollToSection', 'web3://w3-email.eth');
    },

    goCyberbrokers(){
      EventBus.$emit('scrollToSection', 'web3://cyberbrokers-meta.eth/renderBroker/5');
    },
    goEns(){
      EventBus.$emit('scrollToSection', 'web3://app-ens-domain.eth');
    },
    goNous() {
      EventBus.$emit('scrollToSection', 'web3://nouns-wtf.eth/render/505');
    },
    goVitalik(){
      EventBus.$emit('scrollToSection', 'web3://vitalikblog.eth');
    },
    goMoonBird() {
      EventBus.$emit('scrollToSection', 'web3://moon-birds-xyz.eth/render/9880');
    },
    goArtBlock(){
      EventBus.$emit('scrollToSection', 'web3://art-blocks-io.eth/render/78/0');
    },
    goWeb3() {
      window.open('https://github.com/ethstorage/awesome-web3', "_blank");
    }
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  background: #EEF6FF;
}

.based {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
}

.based-title {
  width: 100%;
  margin-top: 5.5rem;
  text-align: left;
  color: #000;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: normal;
  font-style: normal;
  font-family: Satoshi;
}
.based-title2 {
  width: 100%;
  margin-top: 1rem;
  text-align: left;
  color: #000;
  font-size: 1.75rem;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  font-family: Satoshi;
}


.dapp-card {
  width: 100%;
  height: 310px;
  margin-top: 6.83rem;
}
.web3-card {
  width: 100%;
  height: 21rem;
  margin-top: 5.2rem;
  margin-bottom: 64px;
}

.card-layout {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid #000;
  background: #FFF;
  cursor: pointer;
}
.card-item-icon {
  width: 35px;
}
.card-item-text {
  text-align: left;
  padding-left: 10px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  font-style: normal;
  font-family: Inter;
}

.card-item-img {
  cursor: pointer;
  height: 114px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid transparent;
  background: lightgray 50% / cover no-repeat;
}

.card-item:hover,
.card-item-img:hover {
  border: 1px solid #cccccc;
  box-shadow: 6px 6px 0px 0px #cccccca0;
}

.go-btn-link {
  cursor: pointer;
}
.go-btn-link:hover {
  opacity: 0.6;
}
.go-btn {
  padding: 3px 4px 5px;
}
@media screen and (max-width: 500px) {
  .based {
    max-width: 95%;
  }

  .based-title {
    width: 100%;
    font-size: 16px;
    margin-top: 40px;
  }
  .based-title2 {
    font-size: 12px;
    margin-top: 15px;
  }

  .dapp-card {
    height: 138px;
    margin-top: 24px;
  }
  .web3-card {
    height: 125px;
    margin-top: 24px;
    margin-bottom: 40px;
  }

  .card-item {
    height: 36px;
    padding: 12px 5px;
    border-radius: 12px;
  }
  .card-item-icon {
    width: 12px;
  }
  .card-item-text {
    padding-left: 5px;
    font-size: 10px;
  }

  .card-item-img {
    height: 36px;
    border-radius: 8px;
    border: 0.4px solid transparent;
  }

  .go-btn {
    width: 16px;
    padding: 0;
  }
}
</style>
