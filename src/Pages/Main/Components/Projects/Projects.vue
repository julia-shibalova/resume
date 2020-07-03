<template>
  <div class="projects">
    <div class="container projects__content">
      <div class="main__title title" id="projects" v-text="$ml.get('projects_title')"/>
      <span class="projects__content-subtitle">Junior frontend-разработчик / АналитикJunior frontend-разработчик / АналJunior frontend-разработчик / Аналитик итикJunior frontend</span>

      <div class="projects__content-items flex-center">
        <div 
          v-on:mouseover="mouseover" 
          v-on:mouseleave="mouseleave" 
          class="item item__2"
        >
          <a href="https://digitalnsk.ru/" target="_blank" class="item-shadow flex-center" v-show="message" >
            <div class="smooth-arrow">
              <p>перейти</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div 
          v-on:mouseover="mouseover1" 
          v-on:mouseleave="mouseleave1" 
          class="item item__4"
        >
          <a href="http://novosib-m.ru/" target="_blank" class="item-shadow flex-center"  v-show="message1" >
            <div class="smooth-arrow">
              <p>перейти</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div 
          v-on:mouseover="mouseover2" 
          v-on:mouseleave="mouseleave2" 
          class="item item__5"
        >
          <a href="http://yantar.in/" target="_blank" class="item-shadow flex-center" v-show="message2" >
            <div class="smooth-arrow">
              <p>перейти</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div 
          v-on:mouseover="mouseover3" 
          v-on:mouseleave="mouseleave3" 
          class="item item__3"
        >
          <a href="https://simulatos.com/" target="_blank" class="item-shadow flex-center" v-show="message3" >
            <div class="smooth-arrow">
              <p>перейти</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div 
          v-on:mouseover="mouseover4" 
          v-on:mouseleave="mouseleave4" 
          class="item item__1"
        >
          <a href="https://digitalnsk.ru/" target="_blank" class="item-shadow flex-center" v-show="message4" >
            <div class="smooth-arrow">
              <p>перейти</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

      </div>
      <div class="flex-center arrow">
        <a href="#edu" class="link-arrow"><span></span><span></span></a>
      </div>
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
  data() {
    return {
      message: false,
      message1: false,
      message2: false,
      message3: false,
      message4: false,
      content: [ {
        photo: '../../assets/images/me.jpg'
      }

      ]
    }
  },

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