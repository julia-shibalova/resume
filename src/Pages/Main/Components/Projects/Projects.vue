<template>
  <div class="projects " id="projects">
    <div class="container projects__content ">
      <div class="main__title title"  v-text="$ml.get('projects_title')"/>
      <div class="projects__content-items flex-center">
        <div 
          v-on:mouseover="mouseover" 
          v-on:mouseleave="mouseleave" 
          class="item item__2"
        >
          <a href="https://digitalnsk.ru/" target="_blank" class="item__shadow flex-center" v-show="message" >
            <h3 v-text="$ml.get('projects_item1_title')"/>
            <span v-text="$ml.get('projects_item1_comp')"/>
            <span class="item__shadow-subtitle" v-text="$ml.get('projects_item1_subtitle')"/>
            <div class="item__shadow-link">
              <span class="smooth-arrow">
                <p>digitalnsk.ru</p>
                <div class="rightarrow"><span></span></div>
              </span>
            </div>
          </a>
        </div>
        <div 
          v-on:mouseover="mouseover1" 
          v-on:mouseleave="mouseleave1" 
          class="item item__4"
        >
          <a href="http://novosib-m.ru/" target="_blank" class="item__shadow flex-center"  v-show="message1" >
            <h3 v-text="$ml.get('projects_item2_title')"/>
            <span v-text="$ml.get('projects_item2_comp')" />
            <span class="item__shadow-subtitle" v-text="$ml.get('projects_item2_subtitle')"/>
            <div class="smooth-arrow">
              <p>novosib-m.ru</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div 
          v-on:mouseover="mouseover2" 
          v-on:mouseleave="mouseleave2" 
          class="item item__5"
        >
          <a href="http://yantar.in/" target="_blank" class="item__shadow flex-center" v-show="message2" >
            <h3 v-text="$ml.get('projects_item3_title')"/>
            <span v-text="$ml.get('projects_item3_comp')"/>
            <span class="item__shadow-subtitle" v-text="$ml.get('projects_item3_subtitle')"/>
            <div class="smooth-arrow">
              <p>yantar.in</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div 
          v-on:mouseover="mouseover3" 
          v-on:mouseleave="mouseleave3" 
          class="item item__3"
        >
          <a href="https://simulatos.com/" target="_blank" class="item__shadow flex-center" v-show="message3" >
            <h3 v-text="$ml.get('projects_item4_title')"/>
            <span class="item__shadow-subtitle" v-text="$ml.get('projects_item4_subtitle')"/>
            <div class="smooth-arrow">
              <p>simulatos.com</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div 
          v-on:mouseover="mouseover4" 
          v-on:mouseleave="mouseleave4" 
          class="item item__1"
        >
          <a href="https://www.figma.com/file/8DgnMsul6JsCPhXkUba7kV/NSTU?node-id=532%3A2" target="_blank" class="item__shadow flex-center" v-show="message4" >
            <h3 v-text="$ml.get('projects_item5_title')"/>
            <span class="item__shadow-subtitle" v-text="$ml.get('projects_item5_subtitle')"/>
            <div class="smooth-arrow">
              <p>view design</p>
              <div class="rightarrow"><span></span></div>
            </div>
          </a>
        </div>

        <div class="item item__test flex-center">
          <img src="../../../../assets/images/test.svg" alt="Resume" />
        </div>

      </div>
      <div class="flex-center arrow">
        <a href="#edu" class="link-arrow"><span></span><span></span></a>
      </div>
    </div>

    
  </div>
</template>

<script>
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
});
</script>