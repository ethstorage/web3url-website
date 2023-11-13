<template>
  <div class="home">
    <div class="work">
      <p class="work-title">How web3:// Works</p>
      <div class="work-context">
        <div class="work-label">web3://app-uniswap-org.eth/</div>
        <img class="work-image" src="@/assets/work.png"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #F9F9F9;
}

.work {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.work-title {
  margin-top: 80px;
  font-size: 36px;
  font-weight: normal;
  color: #000000;
  line-height: 36px;
  font-family: AlibabaPuHuiTiH;
}


.work-context {
  width: 100%;
  margin-top: 80px;
  margin-bottom: 120px;
  box-shadow: 6px 6px 0 0 #EDEDED;
  border: 1px solid #000000;
  background: #FFFFFF;
}

.work-label {
  width: 300px;
  height: 40px;
  background: #FFFFFF;
  border-style: none solid solid;
  border-color: #000000;
  border-width: 1px;
  font-size: 16px;
  color: #000000;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
  font-family: AlibabaPuHuiTiM;
}

.work-image {
  width: 1100px;
  margin-top: 60px;
  margin-bottom: 70px;
}

@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }

  .work {
    max-width: 95%;
  }

  .work-title {
    margin-top: 35px;
    font-size: 20px;
    line-height: 20px;
  }


  .work-context {
    width: 100%;
    margin-top: 35px;
    margin-bottom: 35px;
  }

  .work-label {
    width: 190px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
  }

  .work-image {
    width: 95%;
    margin-top: 25px;
    margin-bottom: 35px;
  }
}
</style>
