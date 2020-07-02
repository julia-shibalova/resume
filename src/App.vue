<template>
  <div id="app">
    <Header />
    <router-view class="main-content"></router-view>
    <About/>
    <Projects />
    <Education />

    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';


export default {
  name: 'app',
  components: {
    Header, Footer, Contact, About, Projects, Education
  }
}
</script>
