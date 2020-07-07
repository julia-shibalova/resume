<template>
  <div class="main flex-center">
    <div class="main__banner">
      <div class="container main__banner-content flex-end">
        <div class="main__banner-item">
          <h2 v-text="$ml.get('main_name')"/>
          <p class="main__banner-subtitle" v-text="$ml.get('main_subtitle')"/>
          <div class="form-group">
            <a :href="require('../../assets/images/Resume.Julia.jpg')" target="_blank" download><button type="submit" v-text="$ml.get('main_button')" /></a>
          </div>
          
        </div>

        <div class="flex-center arrow">
          <a href="#about" class="link-arrow"><span></span><span></span></a>
        </div>
      </div>
    </div>

    <About/>
    <Projects />
    <Education />
  </div>
</template>

<script>
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';

export default ({
  name: 'Main',
  components: {
    About, Projects, Education
  }
});
</script>