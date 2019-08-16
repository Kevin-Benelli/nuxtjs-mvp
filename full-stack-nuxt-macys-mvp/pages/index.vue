<template>
  <div>
      <div>
    
      <section>
        <Carousel />
      </section>
      
      
    </div>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop.vue";
import HeaderBottom from "../components/HeaderBottom.vue";
import HeaderNav from "../components/HeaderNav.vue";
import Footer from "../components/Footer.vue";

import Carousel from "../components/Carousel.vue";

export default {
  components: {
    HeaderTop, 
    HeaderBottom,
    HeaderNav,
    Footer,
    Carousel
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
