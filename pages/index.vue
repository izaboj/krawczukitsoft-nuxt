<template>
<div class="main-container">
  <navbar/>
  <image-header/>
  <team-container :content="teamContent"></team-container>
  <work-container :content="workContent"></work-container>
  <workshop-container />
  <workshop-html/>
  <workshop-js/>
  <workshop-wpress/>
  <contact/>
  <footer/>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ImageHeader from '~/components/ImageHeader.vue'
import Navbar from '~/components/Navbar.vue'
import TeamContainer from '~/components/TeamContainer.vue'
import WorkContainer from '~/components/WorkContainer.vue'
import WorkshopContainer from '~/components/WorkshopContainer.vue'
import WorkshopHtml from '~/components/WorkshopHtml.vue'
import WorkshopJs from '~/components/WorkshopJs.vue'
import WorkshopWpress from '~/components/WorkshopWpress.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    Navbar,
    ImageHeader,
    TeamContainer,
    WorkContainer,
    WorkshopContainer,
    WorkshopHtml,
    WorkshopJs,
    WorkshopWpress,
    Contact,
    Footer
  },
  async asyncData({ $content }) {
    const workData = await $content("work").fetch();
    const teamData = await $content("team").fetch();
    return {
      workContent: workData,
      teamContent: teamData
    };
  }
}
</script>

<style
</style>
