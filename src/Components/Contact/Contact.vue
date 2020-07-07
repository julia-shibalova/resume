<template>
  <div class="contact container flex-center">
    
    <div class="contact__feedback" id="contacts">
      <div class="contact__feedback-title title" v-text="$ml.get('contact_title')" />

      <ValidationObserver ref="feedback" tag="form" class="contact__feedback-form flex-center" action="Contact.vue" method="post" @submit.prevent="sendForm">
        
        <div class="contact__feedback-content flex-center">
          <div class="form-group half">
            <input type="text"
                  placeholder="Name"
                  name="name"
                  v-model="formData.name"
            />
          </div>

          <ValidationProvider class="form-group half"
                              tag="div"
                              rules="required|email"
                              v-slot="{ errors }"
          >
              <input type="text"
                    name="email"
                    placeholder="E-mail"
                    :class="{'input-error' : errors[0]}"
                    v-model="formData.email"
              />
          </ValidationProvider>
          
          <div class="form-group">
            <input v-model="formData.object"
                  type="text"
                  placeholder="Object"
            />
          </div>

          <ValidationProvider class="form-group"
                              tag="div"
                              rules="required|min:6"
                              v-slot="{ errors }"
          >
            <textarea placeholder="Message"
                      v-model="formData.message"
                      :class="{'input-error' : errors[0]}"
            ></textarea>
          </ValidationProvider>

          <ValidationProvider tag="div"
                              class="form-group form-group__checkbox"
                              :rules="{ required: { allowFalse: false } }"
                              
          >  
          </ValidationProvider>

            
          <div class="form-group">
            <button type="submit" v-text="$ml.get('contact_button')" />
          </div>
        </div>
      </ValidationObserver>
      
    </div>

    <div class="flex-center contact__icons">
      <a href="https://t.me/Julia_Shibalova" target="_blank"><font-awesome-icon :icon="['fab', 'telegram']"  class="icons"/></a>
      <a href="https://www.instagram.com/julishibalova/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"  class="icons" /></a>
      <a href="https://vk.com/im?peers=c26_30894203" target="_blank"><font-awesome-icon :icon="['fab', 'vk']"  class="icons"/></a>
      <a href="mailto:juli.shibalova@gmail.com" target="_blank"><font-awesome-icon :icon="['fas', 'envelope']"  class="icons"/></a>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend , configure } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTelegram, faInstagram, faVk, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faTelegram, faVk, faInstagram, faYoutube, faEnvelope);


extend('required', required);
extend('email', email);
extend('min', min);
configure({
  classes: {
    invalid: ['input-error']
  }
});

export default ({
  name: 'Contact',
  components: {
    ValidationObserver, ValidationProvider, FontAwesomeIcon
  },
  data() {
    return {
      formData: {
        email: '',
        name: '',
        object: '',
        message: ''
      }
    };
  },
  methods: {
    async sendForm() {
      // eslint-disable-next-line no-console
      console.log('Email', this.formData.email),
      // eslint-disable-next-line no-console
      console.log('name', this.formData.name)

    }
  }
});
</script>
