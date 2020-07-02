<template>
  <div class="projects">
    <div class="main__projects container projects__content">
      <div class="main__title title" id="projects" v-text="$ml.get('projects_title')"/>
      <span class="projects__content-subtitle">Junior frontend-разработчик / АналитикJunior frontend-разработчик / АналJunior frontend-разработчик / Аналитик итикJunior frontend</span>

      <div class="projects__content-items flex-center">
        <div class="item"><div class="item-shadow"></div></div>
        <div class="item"><div class="item-shadow"></div></div>
        <div class="item"><div class="item-shadow"></div></div>
        <div class="item"><div class="item-shadow"></div></div>
        <div class="item"><div class="item-shadow"></div></div>
      </div>

      <!--div class="flex-center arrow">
        <a href="#edu"><font-awesome-icon :icon="['fas', 'arrow-down']" /></a>
      </div-->
    </div>

    
  </div>
</template>

<script>
/*
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown);
*/
export default ({
  name: 'Projects'
  /*
  components: {
    FontAwesomeIcon
  }*/
});
</script>