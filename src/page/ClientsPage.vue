<template>
  <div class="home" ref="targetSection">
    <div class="clients">
      <p class="clients-title">Surf The web3:// Experience. First Hand.</p>

      <div class="web3-auto-layout">
        <el-autocomplete
            ref="inputEdit" placeholder="web3://..."
            class="inline-input" popper-class="popper-input"
            v-model="web3Url"
            :fetch-suggestions="this.querySearch"
            :popper-append-to-body="false"
            @keyup.native="onKeyUp"
            @blur="onBlur"
            @focus="onFocus"
            @input="handleInput"
            @select="openFrame">
          <template slot="prefix">
            <div class="select-icon" :class="{'selectOpen':selectOpen}" @click="onClick">
              <i class="el-icon-arrow-down"></i>
            </div>
          </template>

          <template slot="suffix">
            <div class="web3-go-to" @click.stop="openFrame">
              <GoIcon/>
            </div>
          </template>

          <template slot-scope="{ item }">
            <span class="web3-option-item">
              <span class="web3-option-name">{{ item.title }}</span>
              <span class="web3-option-right">{{ item.value }}</span>
            </span>
          </template>
        </el-autocomplete>

        <div class="dot"/>
        <div class="dot1"/>
        <div class="dot2"/>
        <div class="dot3"/>
      </div>

      <b-modal width="100%" v-model="isOpenFrame" :can-cancel="false">
        <WebPage :web3Url="web3Url"/>
      </b-modal>
    </div>
  </div>
</template>

<script>
import WebPage from "@/components/WebPage";
import GoIcon from "@/components/GoIcon";

export default {
  name: "ClientsPage",
  data() {
    return {
      web3Url: "web3://vitalikblog.eth",
      isOpenFrame: false,
      web3UrlExamples: [
        {
          title: "W3Box",
          value: "web3://w3-box.eth"
        },
        {
          title: "W3Drive",
          value: "web3://w3-drive.eth"
        },
        {
          title: "W3Blog",
          value: "web3://w3-blog.eth"
        },
        {
          title: "Web3 QRobot",
          value: "web3://w3-qrobot.eth"
        },
        {
          title: "W3Mail",
          value: "web3://w3-email.eth"
        },

        {
          title: "Vitalik's blog",
          value: "web3://vitalikblog.eth"
        },
        {
          title: "MoonBird",
          value: "web3://moon-birds-xyz.eth/render/9880"
        },
        {
          title: "Art Blocks",
          value: "web3://art-blocks-io.eth/render/78/0"
        },
        {
          title: "Nouns",
          value: "web3://nouns-wtf.eth/render/505",
        },
        {
          title: "Ehtereum Name Service",
          value: "web3://app-ens-domain.eth"
        },
        {
          title: "Cyber Brokers",
          value: "web3://cyberbrokers-meta.eth/renderBroker/5"
        }
      ],
      selectOpen: false
    }
  },
  components: {
    WebPage,
    GoIcon
  },
  methods: {
    openFrame() {
      this.isOpenFrame = true;
    },
    querySearch(queryString, cb) {
      cb(this.web3UrlExamples);
    },
    handleInput(newWeb3Url) {
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
    },
    onBlur() {
      this.selectOpen = false;
    },
    onFocus() {
      this.selectOpen = true;
    },
    onClick() {
      if (!this.selectOpen) {
        this.$refs.inputEdit.focus();
      }
    },
    onKeyUp(event) {
      if (event.key === 'Enter') {
        this.$refs.inputEdit.close();
        this.openFrame();
      }
    }
  },
};
</script>


<style lang="scss">
.popper-input {
  background-color: rgba(0, 0, 0, 0.78) !important;
  border: 2px solid #FFF !important;
}

.popper-input .popper__arrow {
  display: none !important;
}
.popper-input .el-autocomplete-suggestion__list li:hover {
  background: #6F41FF;
  color: #FFF;
}

.web3-option-item {
  background-color: transparent;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.web3-option-name {
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Inter;
}
.web3-option-right {
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Inter;
}

@media screen and (max-width: 500px) {
  .popper-input {
    border: 1px solid #FFF !important;
  }

  .web3-option-item {
    height: 42px;
  }
  .web3-option-name {
    font-size: 10px;
  }
  .web3-option-right {
    font-size: 10px;
  }
}
</style>

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

.web3-auto-layout {
  position: relative;
  border: 2px solid #FFF;
  width: 80%;
  height: 70px;
  margin: 60px auto 175px;
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
  cursor: pointer;
  height: 100%;
  margin-right: -10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-transform:scale(0.8);
}

.inline-input {
  width: 100%;
}
.select-icon{
  width: 45px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
  font-size: 20px;
  color: white;
  margin-left: -5px;
}
.select-icon.selectOpen{
  transform: rotate(180deg);
}

.inline-input >>> .el-input__inner {
  padding-left: 50px;
  padding-right: 130px;
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

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .clients {
    max-width: 95%;
  }

  .clients-title {
    margin-top: 40px;
    font-size: 16px;
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
    margin-right: -35px;
    -webkit-transform:scale(0.5);
  }

  .web3-option-right {
    margin-left: 20px;
    font-size: 10px;
  }


  .select-icon{
    width: 28px;
    height: 42px;
    font-size: 12px;
  }

  .inline-input >>> .el-input__inner {
    padding-left: 28px;
    padding-right: 80px;
    height: 42px;
    font-size: 12px;
  }
}
</style>
