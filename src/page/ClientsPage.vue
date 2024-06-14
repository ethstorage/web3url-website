<template>
  <div class="home" ref="targetSection">
    <div class="clients">
      <p class="clients-title">Surf The web3:// Experience. First Hand.</p>
      <div class="clients-tab">
        <div class="clients-tab-btn" :class="{'active': inputType === 1}" @click="onSwitchAuto">
          See What web3:// Can Do
        </div>
        <div class="clients-tab-btn btn-margin" :class="{'active': inputType === 2}" @click="onSwitchInput">
          Enter Your web3://
        </div>
      </div>

      <div v-if="inputType === 1" class="web3-auto-layout">
        <el-select v-model="web3Url" placeholder="web://"
                   @change="openFrame"
                   :popper-append-to-body="false">
          <el-option
              v-for="item in web3UrlExamples"
              :key="item.url"
              :label="item.url"
              :value="item.url">
            <span style="float: left">{{ item.title }}</span>
            <span style="float: right" class="web3-option-right">{{ item.url }}</span>
          </el-option>
        </el-select>
        <div class="dot" />
        <div class="dot1" />
        <div class="dot2" />
        <div class="dot3" />
        <img class="web3-go-to" @click="openFrame" alt="go"/>
      </div>
      <div v-else class="web3-auto-layout">
        <input class="clients-input" type="text" placeholder="web3://..." v-model="web3Url"
               @keyup.enter="openFrame"/>
        <div class="dot" />
        <div class="dot1" />
        <div class="dot2" />
        <div class="dot3" />
        <img class="web3-go-to" @click="openFrame" alt="go"/>
      </div>

      <b-modal v-model="isOpenFrame" :can-cancel="false">
        <WebPage :web3Url="web3Url"/>
      </b-modal>
    </div>
  </div>
</template>

<script>
import WebPage from "@/components/WebPage";

export default {
  name: "ClientsPage",
  data() {
    return {
      web3Url: "web3://vitalikblog.eth",
      isOpenFrame: false,
      inputType: 1,
      web3UrlExamples: [
        {
          title: "W3Box",
          url: "web3://w3-box.eth"
        },
        {
          title: "W3Drive",
          url: "web3://w3-drive.eth"
        },
        {
          title: "W3Blog",
          url: "web3://w3-blog.eth"
        },
        {
          title: "Web3 QRobot",
          url: "web3://w3-qrobot.eth"
        },
        {
          title: "W3Mail",
          url: "web3://w3-email.eth"
        },

        {
          title: "Vitalik's blog",
          url: "web3://vitalikblog.eth"
        },
        {
          title: "MoonBird",
          url: "web3://moon-birds-xyz.eth/render/9880"
        },
        {
          title: "Art Blocks",
          url: "web3://art-blocks-io.eth/render/78/0"
        },
        {
          title: "Nouns",
          url: "web3://nouns-wtf.eth/render/505",
        },
        {
          title: "Ehtereum Name Service",
          url: "web3://app-ens-domain.eth"
        },
        {
          title: "Cyber Brokers",
          url: "web3://cyberbrokers-meta.eth/renderBroker/5"
        }
      ],
      parsedWeb3Url: {}
    }
  },
  components: {
    WebPage
  },
  watch: {
    web3Url: function (newWeb3Url) {
      // If the new value is a substring of web3://, put web3:// instead
      if(newWeb3Url.length < "web3://".length && newWeb3Url === "web3://".substring(0, newWeb3Url.length)) {
        this.web3Url = "web3://";
      }
      // If the new value does not start with web3://, add it.
      else if(newWeb3Url.startsWith("web3://") === false) {
        this.web3Url = "web3://" + newWeb3Url;
      }
      // If the user pasted an URL starting with web3:// while there was already the
      // web3:// prefix, then remove the web3:// prefix.
      else if(newWeb3Url.startsWith("web3://web3://")) {
        this.web3Url = newWeb3Url.slice(7);
      }
    }
  },
  methods: {
    onSwitchAuto() {
      this.inputType = 1;
    },
    onSwitchInput() {
      this.inputType = 2;
    },
    openFrame() {
      this.isOpenFrame = true;
    }
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  background: #000;
}

.clients {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.clients-title {
  margin-top: 150px;
  color: #FFF;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;
  font-family: Satoshi;
}

.clients-tab {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
}
.clients-tab-btn {
  cursor: pointer;
  width: 412px;
  height: 56px;
  border-radius: 50px;
  border: 1px solid #FFF;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.44px;
  font-family: Satoshi;
}
.clients-tab-btn:hover {
  opacity: 0.8;
}
.active {
  border: 1px solid #6F41FF;
  background-color: #6F41FF;
}
.btn-margin {
  margin-left: 48px;
}


.web3-auto-layout {
  position: relative;
  border: 2px solid #FFF;
  width: 80%;
  height: 70px;
  margin-bottom: 175px;
}
.dot {
  position: absolute;
  right: -5px;
  bottom: -5px;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.dot1 {
  position: absolute;
  bottom: -5px;
  left: -5px;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.dot2 {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.dot3 {
  position: absolute;
  top: -5px;
  left: -5px;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.web3-go-to {
  position: absolute;
  height: 100%;
  padding: 14px 0;
  right: 16px;
  content: url("@/assets/go-to.svg");
}
.web3-go-to:hover {
  content: url("@/assets/go-to-hover.svg");
}


.clients-input {
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-right: 80px;
  color: #FFF;
  border: none;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Satoshi;
}


.web3-option-right {
  color: #FFF;
  margin-left: 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Inter;
}

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .clients {
    max-width: 100%;
  }

  .clients-title {
    margin-top: 40px;
    font-size: 16px;
  }

  .clients-tab {
    margin: 24px auto;
  }
  .clients-tab-btn {
    width: 160px;
    height: 25px;
    border-radius: 20px;
    font-size: 10px;
    line-height: 25px;
  }
  .btn-margin {
    margin-left: 16px;
  }


  .web3-auto-layout {
    border: 1px solid #FFF;
    width: 90%;
    height: 42px;
    margin-bottom: 80px;
  }
  .dot {
    right: -2px;
    bottom: -2px;
    width: 4px;
    height: 4px;
  }
  .dot1 {
    bottom: -2px;
    left: -2px;
    width: 4px;
    height: 4px;
  }
  .dot2 {
    top: -2px;
    right: -2px;
    width: 4px;
    height: 4px;
  }
  .dot3 {
    top: -2px;
    left: -2px;
    width: 4px;
    height: 4px;
  }
  .web3-go-to {
    height: 100%;
    padding: 6px 0;
    right: 6px;
  }

  .clients-input {
    padding-left: 30px;
    padding-right: 80px;
    font-size: 10px;
  }

  .web3-option-right {
    margin-left: 20px;
    font-size: 10px;
  }
}
</style>


<style lang="scss" scoped>
::v-deep .el-select {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
}
::v-deep .el-input__inner {
  padding-left: 50px;
  padding-right: 80px;
  width: 100%;
  height: 70px;
  border: 0;
  background: transparent;
  text-align: left;
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Satoshi;
}
::v-deep .el-input__suffix {
  position: absolute;
  left: 15px;
  right: auto;
}
::v-deep .el-select .el-input .el-select__caret {
  color: #fff;
  font-size: 24px;
}

::v-deep .el-popper .popper__arrow, .el-popper .popper__arrow::after{
  display: none;
}
::v-deep .el-select-dropdown{
  background: rgba(0, 0, 0, 0.78);
  margin: 0;
  border: 2px solid #FFF;
}
::v-deep .el-select-dropdown__item{
  background-color: transparent;
  display: flex;
  height: 60px;
  padding: 0 50px;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Inter;
}
::v-deep .el-select-dropdown__item.selected,
::v-deep .el-select-dropdown__item.hover,
::v-deep .el-select-dropdown__item:hover{
  background: #6F41FF;
  color: #FFF;
}

@media screen and (max-width: 500px) {
  ::v-deep .el-input__inner {
    padding-left: 30px;
    padding-right: 80px;
    height: 42px;
    font-size: 10px;
  }
  ::v-deep .el-input__suffix {
    left: 4px;
  }
  ::v-deep .el-select .el-input .el-select__caret {
    font-size: 12px;
  }

  ::v-deep .el-select-dropdown{
    border: 1px solid #FFF;
  }
  ::v-deep .el-select-dropdown__item {
    height: 42px;
    padding: 0 25px;
    font-size: 10px;
  }
}
</style>
