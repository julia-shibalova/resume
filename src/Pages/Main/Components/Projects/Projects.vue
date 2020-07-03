<template>
  <div class="projects">
    <div class="main__projects container projects__content">
      <div class="main__title title" id="projects" v-text="$ml.get('projects_title')"/>
      <span class="projects__content-subtitle">Junior frontend-разработчик / АналитикJunior frontend-разработчик / АналJunior frontend-разработчик / Аналитик итикJunior frontend</span>

      <div class="projects__content-items flex-center">
        <div 
          v-on:mouseover="mouseover" 
          v-on:mouseleave="mouseleave" 
          class="item"
        >
          <div class="item-shadow" v-show="message">
            lzlzl
          </div>
        </div>

        <div 
          v-on:mouseover="mouseover1" 
          v-on:mouseleave="mouseleave1" 
          class="item"
        >
          <div class="item-shadow" v-show="message1">
            lzlzllelell
          </div>
        </div>

        <div 
          v-on:mouseover="mouseover2" 
          v-on:mouseleave="mouseleave2" 
          class="item"
        >
          <div class="item-shadow" v-show="message2">
            lzlzllelelldkldkkdkdk
          </div>
        </div>

        <div 
          v-on:mouseover="mouseover3" 
          v-on:mouseleave="mouseleave3" 
          class="item"
        >
          <div class="item-shadow" v-show="message3">
            lzlzllelelldldlldlldldlldldlldlldld
          </div>
        </div>

        <div 
          v-on:mouseover="mouseover4" 
          v-on:mouseleave="mouseleave4" 
          class="item"
        >
          <div class="item-shadow" v-show="message4">
            lzlzllelell;al;a'a;
          </div>
        </div>

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
  name: 'Projects',
  data: () => ({
    message: false,
    message1: false,
    message2: false,
    message3: false,
    message4: false
  }),

  methods: {
    mouseover: function(){
      this.message = true
    },    
    mouseleave: function(){
      this.message = false
    },

    mouseover1: function(){
      this.message1 = true
    },    
    mouseleave1: function(){
      this.message1 = false
    },

    mouseover2: function(){
      this.message2 = true
    },    
    mouseleave2: function(){
      this.message2 = false
    },

    mouseover3: function(){
      this.message3 = true
    },    
    mouseleave3: function(){
      this.message3 = false
    },

    mouseover4: function(){
      this.message4 = true
    },    
    mouseleave4: function(){
      this.message4 = false
    }
  }
  /*
  components: {
    FontAwesomeIcon
  }*/
});
</script>