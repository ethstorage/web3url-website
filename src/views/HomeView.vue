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
const BasedPage = () => import('../page/BasedPage.vue')
const ClientsPage = () => import('../page/ClientsPage.vue')
const UsePage = () => import('../page/UsePage.vue')
const WorkPage = () => import('../page/WorkPage.vue')
const WebUrlPage = () => import('../page/WebUrlPage.vue')
const HowPage = () => import('../page/HowPage.vue')
const FooterPage = () => import('../page/FooterPage.vue')

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
