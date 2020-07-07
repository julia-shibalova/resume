<template>
  <div class="education" id="edu">
    <div class="container">
      <h2 class="main__title title" v-text="$ml.get('education_title')" />
      <div class="education__item">
        <h3 v-text="$ml.get('education_nstu_title')"/>
        <p v-text="$ml.get('education_nstu_fac')"/>
        <p v-text="$ml.get('education_nstu_direction')"/>
        <p v-text="$ml.get('education_nstu_mark')"/>
      </div>

      <div class="education__item">
        <h3 v-text="$ml.get('education_osu_title')"/>
        <p v-text="$ml.get('education_osu_fac')"/>
        <p v-text="$ml.get('education_osu_direction')"/>
        <p v-text="$ml.get('education_osu_mark')"/>
      </div>

      <div class="education__item">
        <h3 v-text="$ml.get('education_add_title')"/>
        <p ><font-awesome-icon :icon="['fas', 'check-circle']" /> <span v-text="$ml.get('education_add_item_1')" /></p>
        <p><font-awesome-icon :icon="['fas', 'check-circle']" /> <span v-text="$ml.get('education_add_item_2')" /> </p>
      </div>

      <div class="flex-center arrow">
        <a href="#contacts" class="link-arrow"><span></span><span></span></a>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown, faCheckCircle);

export default ({
  name: 'Education',
  components: {
    FontAwesomeIcon
  }
});
</script>