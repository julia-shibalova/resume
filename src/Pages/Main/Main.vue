<template>
  <div class="main flex-center">
    <div class="main__banner">
      <div class="container main__banner-content flex-end">
        <div class="main__banner-item">
          <h2 v-text="$ml.get('main_name')"/>
          <p class="main__banner-subtitle" v-text="$ml.get('main_subtitle')"/>
          <div class="form-group">
            <a href="../../assets/images/Resume.pdf" download><button type="submit" v-text="$ml.get('main_button')" /></a>
          </div>
          
        </div>

        <div class="flex-center arrow">
          <a href="#about"><font-awesome-icon :icon="['fas', 'arrow-down']" /></a>
        </div>
      </div>
    </div>

    <About/>
    <Projects />
    <Education />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';

library.add(faArrowDown);

export default ({
  name: 'Main',
  components: {
    FontAwesomeIcon, About, Projects, Education
  }
});
</script>