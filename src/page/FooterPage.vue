<template>
  <div class="footer-div">
    <div class="footer-top">
      <img class="footer-font" src="@/assets/footer-left.png" />
      <div class="subscribe-div">
        <div class="subscribe-title">Build Your Dapps with web3://</div>
        <div class="subscribe-msg" @click="goDocs">Learn More <img src="@/assets/arrow-white.svg" class="go-btn"/></div>
      </div>
      <div class="footer-empty"/>
    </div>
    <div class="footer-b">
      <img class="logo-icon" src="@/assets/footer-logo.svg" alt="twitter" />
      <div class="community-layout">
        <img class="community-icon" src="@/assets/twitter.png" alt="twitter" @click.stop="goTwitter"/>
        <img class="community-icon" src="@/assets/discord.png" alt="discord" @click.stop="goDiscord"/>
        <img class="community-icon" src="@/assets/telegram.png" alt="telegram" @click.stop="goTelegram"/>
        <img class="community-icon" src="@/assets/github.png" alt="discord" @click.stop="goGithub"/>
        <img class="community-icon" src="@/assets/medium.png" alt="telegram" @click.stop="goMedium"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
  methods: {
    goDocs() {
      window.open('https://docs.web3url.io/', "_blank");
    },
    goTwitter(){
      window.open('https://twitter.com/EthStorage', "_blank");
    },
    goDiscord(){
      window.open('https://discord.gg/xhCwaMp7ps', "_blank");
    },
    goTelegram(){
      window.open('https://t.me/ethstorage', "_blank");
    },
    goGithub() {
      window.open('https://github.com/ethstorage/', "_blank");
    },
    goMedium() {
      window.open('https://ethstorage.medium.com/', "_blank");
    }
  }
};
</script>

<style>
.footer-div {
  background: #000 url("../assets/footer-right.png") no-repeat bottom 0 right 0;
  background-size: 500px;
}

.footer-top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.footer-font {
  width: 278px;
}

.subscribe-div {
  margin-top: 120px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.subscribe-title  {
  color: #FFF;
  text-align: center;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}
.subscribe-msg {
  margin-top: 50px;
  cursor: pointer;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Satoshi;
}
.subscribe-msg:hover {
  opacity: 0.7;
}

.footer-empty {
  width: 265px;
  height: 100px;
}

.footer-b {
  padding-bottom: 50px;
  width: 1280px;
  margin: -80px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo-icon {
  height: 34px;
}

.community-layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.community-icon {
  margin: auto 15px;
  width: 28px;
  cursor: pointer;
}
.community-icon:hover {
  opacity: .7;
}

@media screen and (max-width: 500px) {
  .footer-div {
    background-size: 140px;
  }

  .footer-font {
    width: 90px;
  }

  .subscribe-div {
    margin-top: 16px;
  }
  .subscribe-title  {
    font-size: 16px;
  }
  .subscribe-msg {
    margin-top: 16px;
    font-size: 10px;
  }

  .footer-empty {
    width: 90px;
    height: 90px;
  }

  .footer-b {
    padding-bottom: 16px;
    width: 90%;
    margin: -30px auto 0;
  }

  .logo-icon {
    width: 50px;
  }
  .community-icon {
    margin: auto 8px;
    width: 14px;
  }

  .go-btn {
    width: 12px;
  }
}
</style>
