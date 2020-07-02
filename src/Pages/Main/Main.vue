<template>
  <div class="main flex-center">
    <div class="main__banner">
      <div class="container main__banner-content flex-end">
        <div class="main__banner-item">
          <h2 v-text="$ml.get('main_name')"/>
          <p class="main__banner-subtitle" v-text="$ml.get('main_subtitle')"/>
          <div class="form-group">
            <button type="submit" v-text="$ml.get('main_button')" />
          </div>
          
        </div>

        <div class="flex-center arrow">
          <a href="#about"><font-awesome-icon :icon="['fas', 'arrow-down']" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown);

export default ({
  name: 'Main',
  components: {
    FontAwesomeIcon
  }
});
</script>