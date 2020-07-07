<template>
  <div class="header-mobile">
    <ul class="header-mobile__links">
      <li><a href="#about" v-text="$ml.get('header_link_1')" /></li>
      <li><a href="#projects" v-text="$ml.get('header_link_2')" /></li>
      <li><a href="#edu" v-text="$ml.get('header_link_3')" /></li>
      <li><a href="#contacts" v-text="$ml.get('header_link_4')" /></li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'HeaderMobile',

  data() {
    return {
      mobileShow: false
    };
  }
}
</script>