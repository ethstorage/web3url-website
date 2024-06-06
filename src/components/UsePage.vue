<template>
  <div class="home">
    <div class="use">
      <p class="use-title">What Is web3:// ?</p>

      <CardComponent class="web3-card"
                     bgColor="#EAE3FF"
                     shadowColor="#d8ccff"
                     titleBgColor="#d8ccff">
        <template v-slot:title>
          web3:// (defined by ERC4804
          <a class="use-text-a" href="https://eips.ethereum.org/EIPS/eip-4804" target="_blank">
            <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </a>)
        </template>
        <div class="card-layout">
          <img class="use-image1" src="@/assets/auto-mode.svg"/>
          <img class="use-image2" src="@/assets/manual-mode.svg"/>
          <div class="use-text-layout">
            <a class="use-text use-text-a" href="https://docs.web3url.io/web3-url-structure/resolve-mode" target="_blank">
              More About Resolve Mode <img class="rt-go" src="@/assets/arrow-right.svg"/>
            </a>
          </div>
        </div>
      </CardComponent>

      <CardComponent class="http-card"
                     bgColor="#F9EDF3"
                     shadowColor="#FFDCD5"
                     titleBgColor="#FFDCD4"
                     title="http://">
        <img class="use-image1" src="@/assets/http.svg"/>
      </CardComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent";

export default {
  name: "UsePage",
  components: {
    CardComponent
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  background: #F4F0FF;
}

.use {
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.use-title {
  margin-top: 120px;
  color: #000;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;
  font-family: Satoshi;
}

.web3-card {
  width: 100%;
  margin-top: 70px;
  height: 630px;
}
.http-card {
  width: 100%;
  margin-top: 50px;
  height: 360px;
  margin-bottom: 80px;
}

.use-image1 {
  width: 100%;
  height: 160px;
}
.use-image2 {
  width: 100%;
  margin-top: 28px;
  height: 160px;
}
.use-text-layout {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-items: center;
  margin: 38px 0 0;
  padding-right: 25px;
}
.use-text {
  color: #000;
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  font-family: Satoshi;
}
.use-text-a:hover{
  background: transparent;
  opacity: 0.6;
}

.rt-go {
  cursor: pointer;
  padding: 3px 3px 5px 1px;
}
@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .use {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .use-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }

  .use-image1 {
    width: 95%;
    margin-top: 25px;
    margin-left: 0;
  }

  .use-image2 {
    width: 95%;
    margin-top: 25px;
    margin-bottom: 20px;
    margin-left: 0;
  }
}
</style>
