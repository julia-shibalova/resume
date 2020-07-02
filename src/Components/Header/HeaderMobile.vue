<template>
  <div class="header-mobile">
    <ul class="header-mobile__links">
      
      <li v-for="(link, index) in links"
          :key="index"
          @click="$parent.mobileMenu()"
      >
        <router-link :to="{name: link.routerName}">{{link.text}}</router-link>
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',

  data() {
    return {
      links: [
        {
          routerName: 'main',
          text: this.$ml.get('header_link_1')
        },
        {
          routerName: 'main',
          text: this.$ml.get('header_link_2')
        },
        {
          routerName: 'main',
          text: this.$ml.get('header_link_3')
        },
        {
          routerName: 'main',
          text: this.$ml.get('header_link_4')
        }
      ],
      mobileShow: false
    };
  }
}
</script>