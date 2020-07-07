<template>
  <div class="about container" id="about">
    <div class="main__title title"  v-text="$ml.get('about_title')" />

    <div class="about__content flex-center">
      <div class="about__content-item item">
        <p v-text="$ml.get('about_info_1')"/>
        <p v-text="$ml.get('about_info_2')"/>
        <p v-text="$ml.get('about_info_3')"/>
      </div>
       <div class="about__content-item">
        <h3 v-text="$ml.get('about_skills_title')"/>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> HTML5 / CSS3</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Sass / LESS</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Figma / Axure / Photoshop</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Node.js (limited)</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> React.js (limited)</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Vue.js</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Git</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Linux</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> English (A2); Français (B1)</p>

      </div>
    </div>
    <div class="flex-center arrow">
      <a href="#projects" class="link-arrow"><span></span><span></span></a>
    </div>

    
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown, faCheckCircle);

export default ({
  name: 'About',
  components: {
    FontAwesomeIcon
  }
});
</script>