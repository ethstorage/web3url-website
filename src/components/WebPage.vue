<template>
  <div id="clients-embedded-viewer-area">
    <div class="clients-content">
      <img src="@/assets/cancel.svg" class="cancel" @click="onCancel">
      <div id="clients-embedded-viewer-url-infos">
        <div>
          <div class="infos-title">Smart Contract</div>

          <LoadingComponent v-if="parsedWeb3Url.contractAddress == null" />
          <div v-else>
            <div class="normal-text normal-text-phone">
              <a v-if="parsedWeb3Url.chainId in chainExplorerUrls"
                 class="link-text" target="_blank"
                 :href="chainExplorerUrls[parsedWeb3Url.chainId].replace('<address>', parsedWeb3Url.contractAddress)">
                {{ parsedWeb3Url.contractAddress }}
              </a>
              <span v-else>
                    {{ parsedWeb3Url.contractAddress }}
                </span>
              @
              <span v-if="chainList.find(chain => chain.id === parsedWeb3Url.chainId)">
                    {{ chainList.find(chain => chain.id === parsedWeb3Url.chainId).name }}
                    <span v-if="parsedWeb3Url.chainId !== 1">
                      (id {{ parsedWeb3Url.chainId }})
                    </span>
                </span>
              <span v-else>
                    chain id {{ parsedWeb3Url.chainId }}
                </span>
            </div>

            <div class="normal-text normal-text-phone">
              <span class="infos-value-subtitle">Domain name resolution: </span>
              {{
                parsedWeb3Url.nameResolution.resolver ? parsedWeb3Url.nameResolution.resolver.toUpperCase() : "(none)"
              }}
              <span v-if="parsedWeb3Url.nameResolution.resolver">
                    @
                    <span v-if="chainList.find(chain => chain.id === parsedWeb3Url.nameResolution.resolverChainId)">
                      {{ chainList.find(chain => chain.id === parsedWeb3Url.nameResolution.resolverChainId).name }}
                      <span v-if="parsedWeb3Url.nameResolution.resolverChainId !== 1">
                        (id {{ parsedWeb3Url.nameResolution.resolverChainId }})
                      </span>
                    </span>
                    <span v-else>
                      chain id {{ parsedWeb3Url.nameResolution.resolverChainId }}
                    </span>

                    <span v-if="parsedWeb3Url.nameResolution.resolutionType === 'contentContractTxt'">
                      (via contentcontract TXT field
                      <sup><a href="https://docs.web3url.io/web3-url-structure/domain-name" target="_blank"
                              class="link-text"> ? </a></sup>
                      )
                    </span>
                  </span>
            </div>
          </div>
        </div>
        <div class="infos-item-layout">
          <div class="infos-item-col">
            <div class="infos-title">
              Resolve mode <a href="https://docs.web3url.io/web3-url-structure/resolve-mode" target="_blank"
                             class="link-text">?</a>
            </div>
            <div class="info-item-margin">
              <LoadingComponent v-if="parsedWeb3Url.mode == null" />
              <div v-else>
                <a v-if="parsedWeb3Url.mode === 'manual'" class="link-text"
                   href="https://docs.web3url.io/web3-url-structure/resolve-mode/mode-manual" target="_blank">
                  Manual
                </a>
                <a v-else-if="parsedWeb3Url.mode === 'auto'" class="link-text"
                   href="https://docs.web3url.io/web3-url-structure/resolve-mode/mode-auto" target="_blank">
                  Auto
                </a>
                <a v-else-if="parsedWeb3Url.mode === 'resourceRequest'" class="link-text"
                   href="https://docs.web3url.io/web3-url-structure/resolve-mode/mode-resource-request" target="_blank">
                  Resource request
                </a>
                <span v-else class="normal-text">
                  {{ parsedWeb3Url.mode }}
              </span>
              </div>
            </div>
          </div>
          <div class="infos-item-col">
            <div class="infos-title">Smart Contract call</div>
            <div class="info-item-margin">
              <LoadingComponent v-if="parsedWeb3Url.parsedPath == null" />
              <div v-else class="normal-text">
                <div v-if="parsedWeb3Url.parsedPath.contractCallMode === 'method'">
                  <div>
                    <span class="infos-value-subtitle">Method: </span>
                    {{
                      parsedWeb3Url.parsedPath.methodName
                    }}({{ parsedWeb3Url.parsedPath.methodArgs.map(arg => arg.type).join(', ') }})
                  </div>
                  <div>
                    <span class="infos-value-subtitle">Args: </span>
                    <span v-for="argValue in parsedWeb3Url.parsedPath.methodArgValues" :key="argValue">
                      {{ argValue }}
                    </span>
                  </div>
                </div>
                <div v-else-if="parsedWeb3Url.parsedPath.contractCallMode === 'calldata'">
                  <span class="infos-value-subtitle">Calldata:</span> {{ parsedWeb3Url.parsedPath.calldata }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe id="clients-embedded-viewer" src="" frameborder="0"></iframe>
      <span class="infos-title text-margin" @click.prevent="loadWeb3UrlInNewTab">Open in A New Tab <img src="@/assets/arrow-white.svg"/></span>
    </div>
    <div class="dot" />
    <div class="dot1" />
    <div class="dot2" />
    <div class="dot3" />
  </div>
</template>

<script>
import LoadingComponent from "@/components/LoadingComponent.vue";
import {Client} from 'web3protocol';
import {getDefaultChainList} from 'web3protocol/chains';

export default {
  name: "WebPage",
  data() {
    return {
      chainList: {},
      web3Client: null,

      // Incremental parsing of the web3 URL by web3protocol-js is stored here.
      parsedWeb3Url: {},
      chainExplorerUrls: {
        1: "https://etherscan.io/address/<address>#code",
        5: "https://goerli.etherscan.io/address/<address>#code",
        11155111: "https://sepolia.etherscan.io/address/<address>#code",
        137: "https://polygonscan.com/address/<address>#code",
        42170: "https://nova.arbiscan.io/address/<address>#code",
        10: "https://optimistic.etherscan.io/address/<address>#code",
      },
    }
  },
  components: {
    LoadingComponent
  },
  props: {
    web3Url: {
      type: String,
      default: 'web3://vitalikblog.eth'
    }
  },
  created() {
    this.chainList = getDefaultChainList()
    this.web3Client = new Client(this.chainList)
  },
  mounted() {
    this.loadWeb3UrlInViewer();
  },
  methods: {
    /**
     * Load the web3 URL in the embedded viewer.
     * It will first load the URL using web3protocol-js, display a few infos (smart contract
     * address, resolve mode, smart contract call) and then load the URL in an iframe.
     */
    async loadWeb3UrlInViewer() {
      // Reinitialize the parsed web3 url
      this.$set(this, 'parsedWeb3Url', {});
      // Reinitialize the viewer
      this.setSrc("");

      let urlMainParts
      try {
        // Step 1.1 : Extract parts of the URL, determine if a chain id was provided.
        let chainId
        ({urlMainParts, chainId} = this.web3Client.parseUrlBasic(this.web3Url))
        this.$set(this.parsedWeb3Url, 'chainId', chainId);
      } catch (err) {
        alert("web3curl: Basic parsing: Error: " + err.message + "\n")
        return
      }

      try {
        // Step 1.2 : For a given hostname, determine the target contract address.
        let {
          contractAddress,
          chainId: updatedChainId,
          nameResolution
        } = await this.web3Client.determineTargetContractAddress(urlMainParts.hostname, this.parsedWeb3Url.chainId)
        this.$set(this.parsedWeb3Url, 'contractAddress', contractAddress);
        this.$set(this.parsedWeb3Url, 'chainId', updatedChainId);
        this.$set(this.parsedWeb3Url, 'nameResolution', nameResolution);

      } catch (err) {
        alert("web3curl: Hostname resolution: Error: " + err.message + "\n")
        return;
      }

      try {
        // Step 1.3 : Determine the web3 mode.
        const resolveModeDeterminationResult = await this.web3Client.determineResolveMode(this.parsedWeb3Url.contractAddress, this.parsedWeb3Url.chainId)
        this.$set(this.parsedWeb3Url, 'mode', resolveModeDeterminationResult.mode);
        this.$set(this.parsedWeb3Url, 'modeDeterminationCalldata', resolveModeDeterminationResult.calldata);
        this.$set(this.parsedWeb3Url, 'modeDeterminationReturn', resolveModeDeterminationResult.return);
      } catch (err) {
        alert("web3curl: Resolve mode determination: Error: " + err.message + "\n")
        return;
      }

      try {
        // Step 1.4 : Parse the path part of the URL, given the web3 resolve mode.
        let parsedPath = await this.web3Client.parsePathForResolveMode(urlMainParts.path, this.parsedWeb3Url.mode, this.parsedWeb3Url.chainId)
        this.$set(this.parsedWeb3Url, 'parsedPath', parsedPath);
      } catch (err) {
        alert("web3curl: Path parsing: Error: " + err.message + "\n")
        return;
      }

      // Load the web3 url in the embedded viewer
      this.setSrc(this.web3UrlToGatewayUrl(this.web3Url));
    },
    /**
     * Translate a web3:// URL to a gateway URL.
     */
    web3UrlToGatewayUrl(web3Url) {
      // Parse the URL
      let matchResult = web3Url.match(/^(?<protocol>[^:]+):\/\/(?<hostname>[^:/?]+)(:(?<chainId>[1-9][0-9]*))?(?<path>.*)?$/)
      if (matchResult == null) {
        alert("Invalid web3:// URL");
      }
      let urlMainParts = matchResult.groups

      // Check protocol name
      if (["web3", "w3"].includes(urlMainParts.protocol) == false) {
        throw new Error("Bad protocol name");
      }

      // Get subdomain components
      let gateway = "w3link.io"
      let subDomains = []
      // Is the contract an ethereum address?
      if (/^0x[0-9a-fA-F]{40}$/.test(urlMainParts.hostname)) {
        subDomains.push(urlMainParts.hostname)
        if (urlMainParts.chainId !== undefined) {
          subDomains.push(urlMainParts.chainId)
        } else {
          gateway = "w3eth.io"
        }
      } else { // It is a domain name
        // ENS domains on mainnet have a shortcut
        if (urlMainParts.hostname.endsWith('.eth') && urlMainParts.chainId === undefined) {
          gateway = "w3eth.io"
          subDomains.push(urlMainParts.hostname.slice(0, -4))
        } else {
          subDomains.push(urlMainParts.hostname)
          if (urlMainParts.chainId !== undefined) {
            subDomains.push(urlMainParts.chainId)
          }
        }
      }

      return "https://" + subDomains.join(".") + "." + gateway + (urlMainParts.path ?? "");
    },
    setSrc(src) {
      const el = document.getElementById('clients-embedded-viewer');
      if (el) {
        el.src = src;
      }
    },

    loadWeb3UrlInNewTab() {
      let gatewayUrl = this.web3UrlToGatewayUrl(this.web3Url);
      this.openUrlInNewTab(gatewayUrl);
    },
    openUrlInNewTab(url) {
      window.open(url, "_blank");
    },
    onCancel() {
      this.$parent.close();
    }
  }
};
</script>

<style lang="scss" scoped>
#clients-embedded-viewer-area {
  position: relative;
  width: 100%;
}
.dot {
  position: absolute;
  right: 0;
  bottom: -5px;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.dot1 {
  position: absolute;
  bottom: -5px;
  left: 0;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.dot2 {
  position: absolute;
  top: -5px;
  right: 0;
  background-color: #fff;
  width: 10px;
  height: 10px;
}
.dot3 {
  position: absolute;
  top: -5px;
  left: 0;
  background-color: #fff;
  width: 10px;
  height: 10px;
}

.clients-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  border: 2px solid #FFF;
  background: rgba(0, 0, 0, 0.80);
  margin: 5px;

  .cancel {
    align-self: flex-end;
    margin-bottom: 8px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .cancel:hover {
    opacity: 0.8;
  }
}

#clients-embedded-viewer-url-infos {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border: 0.6px solid #FFF;
  height: 188px;

  .infos-value-subtitle {
    text-align: left;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 900;
    line-height: 140%;
    font-style: normal;
    font-family: Satoshi;
  }

  .infos-item-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 10px;

    .infos-item-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    .info-item-margin {
      margin-top: 4px;
    }
  }
}

.infos-title {
  color: #FFF;
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  font-family: Satoshi;
}

.normal-text {
  margin-top: 4px;
  text-align: left;
  color: #FFFFFFD0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Satoshi;
}
.link-text {
  color: #FF8972;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
}

.text-margin {
  width: 100%;
  text-align: right;
  margin: 16px 0 0;
  cursor: pointer;
}

#clients-embedded-viewer {
  border: 0.6px solid #FFF;
  width: 100%;
  height: 420px;
  margin-top: 16px;
}

@media screen and (max-width: 500px) {
  #clients-embedded-viewer-area {
    width: 95%;
    margin: 0 auto;
  }

  .clients-content {
    padding: 12px;
    margin: 5px;

    .cancel {
      margin-bottom: 5px;
    }
  }

  #clients-embedded-viewer-url-infos {
    padding: 16px;
    gap: 12px;
    height: 180px;

    .infos-value-subtitle {
      text-align: left;
      font-size: 10px;
      font-weight: 700;
    }

    .infos-item-layout {
      width: 100%;
      margin-top: 0px;

      .infos-item-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .info-item-margin {
        margin-top: 1px;
      }
    }
  }

  .infos-title {
    text-align: center;
    font-size: 12px;
  }

  .normal-text {
    margin-top: 4px;
    font-size: 10px;
  }
  .link-text {
    font-size: 10px;
  }

  .text-margin {
    width: 100%;
    text-align: right;
    margin: 4px 0 0;
  }

  #clients-embedded-viewer {
    height: 368px;
  }

  .normal-text-phone {
    text-align: center;
    margin: 8px auto 0;
    width: 65%;
  }
}
</style>
