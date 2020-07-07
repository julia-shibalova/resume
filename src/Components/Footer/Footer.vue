<template>
  <footer class="footer">
    <div class="footer__content container">
      <ul class="footer__inner flex-center">
        <li>©JuliaShibalova | Russia, Kaliningrad, 2020 | Designed JuliaShibalova</li>
        <li class="footer__lang form-group flex-center">
          <button 
            type="submit"
            v-for="lang in $ml.list"
            :key="lang"
            @click="$ml.change(lang)"
            v-text="lang"
          />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>

export default ({
  name: 'Footer'
});
</script>