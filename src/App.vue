<template>
  <div id="app">
    <Header />
    <router-view class="main-content"></router-view>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';


export default {
  name: 'app',
  components: {
    Header, Footer, Contact
  }
}
</script>
