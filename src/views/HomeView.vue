<template>
  <div>
    <HeaderPage/>
    <BasedPage/>
    <ClientsPage/>
    <UsePage/>
    <WorkPage/>
    <WebUrlPage/>
    <HowPage/>
    <FooterPage/>
  </div>
</template>
<script>
import HeaderPage from '../page/HeaderPage.vue';
import BasedPage from '../page/BasedPage.vue';
import ClientsPage from '../page/ClientsPage.vue';
import UsePage from '../page/UsePage.vue';
import WorkPage from '../page/WorkPage.vue';
import WebUrlPage from '../page/WebUrlPage.vue';
import HowPage from "@/page/HowPage.vue";
import FooterPage from "@/page/FooterPage.vue";

export default {
  name: "HomePage",
  components: {
    HeaderPage,
    BasedPage,
    ClientsPage,
    UsePage,
    WorkPage,
    WebUrlPage,
    HowPage,
    FooterPage,
  },
};
</script>
