<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__inner flex-center">
        <p>©JuliaShibalova | Russia, Kaliningrad, 2020 | Design by JuliaShibalova</p>

          <div class="footer__lang form-group flex-center">
            <button 
              type="submit"
              v-for="lang in $ml.list"
              :key="lang"
              @click="$ml.change(lang)"
              v-text="lang"
            />
          </div>
    
      </div>
    </div>
  </footer>
</template>

<script>

export default ({
  name: 'Footer'
});
</script>