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
import HeaderPage from '../components/HeaderPage.vue';
import BasedPage from '../components/BasedPage.vue';
import ClientsPage from '../components/ClientsPage.vue';
import UsePage from '../components/UsePage.vue';
import WorkPage from '../components/WorkPage.vue';
import WebUrlPage from '../components/WebUrlPage.vue';
import HowPage from "@/components/HowPage.vue";
import FooterPage from "@/components/FooterPage.vue";

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
