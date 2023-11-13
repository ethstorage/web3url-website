<template>
  <div class="home">
    <div class="dapp">
      <p class="dapp-title">Live dApps Using web3://</p>
      <div class="dapp-table">
        <div class="dapp-item" @click="goW3box">
          <img class="dapp-item-img" src="@/assets/w3box.png"/>
          <div class="dapp-item-title">W3Box</div>
          <div class="dapp-item-message">The file hosting service on EthStorage.</div>
          <div class="dapp-item-link">web3://w3-box.eth/</div>
        </div>
        <div class="dapp-item" @click="goW3drive">
          <img class="dapp-item-img" src="@/assets/w3drive.png"/>
          <div class="dapp-item-title">W3Drive</div>
          <div class="dapp-item-message">Your Private Hard Drive on Blockchain.</div>
          <div class="dapp-item-link">web3://w3-drive.eth/</div>
        </div>
        <div class="dapp-item" @click="goW3mail">
          <img class="dapp-item-img" src="@/assets/w3mail.png"/>
          <div class="dapp-item-title">W3Mail</div>
          <div class="dapp-item-message">Fully decentralized email service on Web3Q.</div>
          <div class="dapp-item-link">web3://w3-email.eth/</div>
        </div>
      </div>
      <div class="dapp-table dapp-table-margin">
<!--        <div class="dapp-item" @click="goStanfordBlockchain">-->
<!--          <img class="dapp-item-img" src="@/assets/stanford.png"/>-->
<!--          <div class="dapp-item-title">Stanford Blockchain Review</div>-->
<!--          <div class="dapp-item-message">Stanford Blockchain Club's Official Industry Journal.</div>-->
<!--          <div class="dapp-item-link">web3://stanfordblockchainreview.eth/</div>-->
<!--        </div>-->
        <div class="dapp-item" @click="goRbot">
          <img class="dapp-item-img" src="@/assets/qrbot.png"/>
          <div class="dapp-item-title">Web3 QRobot</div>
          <div class="dapp-item-message">An NFT collection of cute robots that can be minted freely. All the metadata
            including the images are deployed on EthStorage.
          </div>
          <div class="dapp-item-link">web3://w3-qrobot.eth/</div>
        </div>
        <div class="dapp-item" @click="goBlog">
          <img class="dapp-item-img" src="@/assets/deblog.png"/>
          <div class="dapp-item-title">W3Blog</div>
          <div class="dapp-item-message">Fully decentralized blog platform. The frontend and contents are all deployed
            on EthStorage.
          </div>
          <div class="dapp-item-link">web3://w3-blog.eth/</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DAppPage",
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      //window.location.href = url : 当前页面重定向
    },
    goBlog(){
      this.openUrl("https://w3-blog.w3eth.io/");
    },
    goRbot(){
      this.openUrl("https://w3-qrobot.w3eth.io/");
    },
    goW3box(){
      this.openUrl("https://w3-box.w3eth.io/");
    },
    goW3mail(){
      this.openUrl("https://w3-email.w3eth.io/");
    },
    goW3drive(){
      this.openUrl("https://w3-drive.w3eth.io/");
    },
    goStanfordBlockchain(){
      this.openUrl("https://stanfordblockchainreview.w3eth.io/");
    },
  },
};
</script>

<style scoped>
.home {
  background: #FFFFFF;
}

.dapp {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.dapp-title {
  margin-top: 80px;
  font-size: 36px;
  font-weight: normal;
  color: #000000;
  line-height: 36px;
  font-family: AlibabaPuHuiTiH;
}

.dapp-table{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
}
.dapp-table-margin {
  margin-top: 30px;
  margin-bottom: 200px;
}

.dapp-item {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  cursor: pointer;
  background: #FFFFFF;
  box-shadow: 6px 6px 0px 0px #EDEDED;
  border-radius: 8px;
  border: 1px solid #000000;
  width: 380px;
  height: 340px;
  padding: 20px 30px 0;
  margin: 0 15px;
}
.dapp-item:hover {
  border: 1px solid #cccccc;
}
.dapp-item-img {
  margin-top: -10px;
  margin-left: -15px;
  width: 80px;
}
.dapp-item-title {
  font-size: 18px;
  color: #000000;
  line-height: 25px;
  margin-top: 5px;
  font-family: AlibabaPuHuiTiB;
}
.dapp-item-message {
  font-size: 16px;
  color: #000000;
  line-height: 30px;
  text-align: left;
  margin-top: 5px;
  font-family: AlibabaPuHuiTiR;
}
.dapp-item-link {
  font-size: 16px;
  color: #1B60FF;
  line-height: 22px;
  margin-top: auto;
  margin-bottom: 20px;
  font-family: AlibabaPuHuiTiR;
}


@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .dapp {
    max-width: 100%;
  }
  .dapp-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .dapp-table{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    margin-top: 25px;
  }
  .dapp-table-margin {
    margin-top: 0;
    margin-bottom: 35px;
  }

  .dapp-item {
    align-items: center;
    width: 100%;
    height: 200px;
    padding: 12px 30px 0;
    margin: 25px 0 0;
  }
  .dapp-item-img {
    margin-top: -5px;
    margin-left: 0;
    width: 55px;
  }
  .dapp-item-title {
    font-size: 13px;
    margin-top: 2px;
  }
  .dapp-item-message {
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    margin-top: 2px;
  }
  .dapp-item-link {
    font-size: 12px;
    line-height: 15px;
    margin-top: auto;
    margin-bottom: 13px;
  }
}
</style>
