<template>
  <div class="about container">
    <div class="main__title title" id="about" v-text="$ml.get('about_title')" />
    <span class="about-subtitle">Junior frontend-разработчик / АналитикJunior frontend-разработчик / АналJunior frontend-разработчик / Аналитик итикJunior frontend</span>

    <div class="about__content flex-center">
      <div class="about__content-item">
        <h3>Интересы</h3>
        <p>С 2018 года занимаюсь frontend-ом: участвовала как в коммерческих, так и некоммерческих проектах. В большинстве из них проявляла себя не только в качестве непосредственного разработчика, но и как проектировщика и дизайнера, организовывала работу других участников проектов.  Быстро адаптируюсь к новой команде.  </p>
        <p>Сейчас проявляю высокий интерес к работе аналитика, опыт в разработке проектов станет полезным навыком для этой сферы. </p>

      </div>
       <div class="about__content-item">
        <h3>Skills</h3>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> HTML5 / CSS3</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Sass / LESS</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Figma / Axure</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Node.js (limited)</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> React.js (limited)</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Vue.js</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Git</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Linux</p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> Languages:  English (A2); Français (B1)</p>

      </div>
    </div>
    <!--div class="flex-center arrow">
      <a href="#projects"><font-awesome-icon :icon="['fas', 'arrow-down']" /></a>
    </div-->

    
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