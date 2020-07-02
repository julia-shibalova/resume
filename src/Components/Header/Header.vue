<template>
  <header class="header">
    <div class="container header__content">
      <div class="header__right flex-end">
        <transition name="show">
          <HeaderMobile v-if="mobileShow" :links="links" />
        </transition>
        
        <div class="header-burger" :class="{'open': mobileShow}" @click="mobileMenu">
          <div>
            <span></span><span></span><span></span>
          </div>
        </div>
      
        <ul class="header__links flex-end">
          <!--router-link :to="{name: 'About'}" tag="li" v-text="$ml.get('header_link_1')"/-->
          <li><a href="#about" v-text="$ml.get('header_link_1')" /></li>
          <li><a href="#projects" v-text="$ml.get('header_link_2')" /></li>
          <li><a href="#edu" v-text="$ml.get('header_link_3')" /></li>
          <li><a href="#contacts" v-text="$ml.get('header_link_4')" /></li>
        </ul>

        
      </div>
    </div>
  </header>
</template>

<script>
import HeaderMobile from './HeaderMobile';

export default ({
  name: 'Header',
  components: {
    HeaderMobile
  },
  data() {
    return {
      mobileShow: false
    };
  },
  methods: {
    mobileMenu() {
      this.mobileShow = !this.mobileShow;
    }
  }
});
</script>