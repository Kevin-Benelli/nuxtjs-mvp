<template>
  <div>
    <b-container fluid>
      <b-col>
   <a href = ''> <img src = "../images/promos/promo-banner1.jpg" class = "sub-image" alt ="Bronze Members: Let the perks roll in. Get your Macy's reward card today!"> </a> 
    
   <a href = ''> <img src = "../images/promos/promo-banner2.jpg" class = "sub-image" alt ="Bronze Members: Let the perks roll in. Get your Macy's reward card today!"> </a> 
    </b-col>
      
      <b-col>
      <div class = "img-size">

        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
           <!-- Text slides with image -->
           <a href ="">
                <b-carousel-slide
                    caption="Promo 1"
                    img-src="../images/promos/promo1.jpg"
                    alt="Macy's Promotion Sale Image 1"
                    text="Extra 30% off Home Essentials">

                    <h1>Check out Macy's Promotion 1</h1>
                </b-carousel-slide>
           </a>

           <!-- Slides with custom text -->
            <a href ="">
                <b-carousel-slide 
                    caption="Promo 2"
                    img-src="../images/promos/promo2.jpg"
                    alt="Macy's Promotion Sale Image 2"
                    text="Fathers Day is on June 16, get your gift now!">
                    <h1>Check out Macy's Promotion 2</h1>
                </b-carousel-slide>
            </a>

           <!-- Slides with image only -->
            <a href ="">
                <b-carousel-slide 
                    caption="Promo 3" 
                    img-src="../images/promos/promo3.jpg"
                    alt="Macy's Promotion Sale Image 3"
                    texst = "Friends and Family, take an extra 30% off">
                    <h1>Check out Macy's Promotion 3 </h1>
                </b-carousel-slide>
            </a>


            <a href ="">
                <b-carousel-slide
                    capiton = "Extra 15% off beauty supplies"
                    img-src="../images/promos/promo4.jpg"
                    alt="Macy's Promotion Sale Image 4"
                    text = "Extra 15% off beauty supplies">
                   <h1>Check out Macy's Promotion 4</h1>
                </b-carousel-slide>
            </a>

            <a href ="">
                <b-carousel-slide
                    capiton = "Promo 5"
                    img-src="../images/promos/promo5.jpg"
                    alt="Macy's Promotion Sale Image 5"
                    text = "25% off Tommy Hilfiger">
                      <h1>Check out Macy's Promotion 5</h1>
                </b-carousel-slide>
            </a>

            <a href ="">
                <b-carousel-slide
                    capiton = "Promo 6"
                    img-src="../images/promos/promo6.jpg"
                    alt="Macy's Promotion Sale Image 6"
                    text="June is national Pride Month, Celebrate with Macy's Pride!">
                      <h1>Check out Macy's Promotion 6</h1>
                </b-carousel-slide>
            </a>
        </b-carousel>
  
    <!-- <p class="mt-4">
      Slide #: {{ slide + 1}}<br>
      Sliding: {{ sliding }}
    </p> -->
      </div>
</b-col>

<b-col>
   <a href = ''> <img src = "../images/promos/promo-banner3.jpg" class = "tall-banner" alt ="Bronze Members: Let the perks roll in. Get your Macy's reward card today!"> </a> 
    </b-col>
    </b-container>

  </div>
</template>

<script>
import { CarouselPlugin } from 'bootstrap-vue'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>


<style scoped>
.img-size{
    padding: 2vh;
    height: 50vh;
    max-height: 50vh;
    width: 60vw;
    align-content: center;
    margin: auto;
    margin-bottom: 10vh;
}

.sub-image{
    height: 6vh;
    /* width: 100vw; */
    align-content: center;
    margin: auto;
    display: flex;
    width: 60vw;
}

.tall-banner{
    height: 15vh;
    /* width: 100vw; */
    /* align-content: center; */
    margin: auto;
    display: flex;
    width: 58vw;
    margin-bottom:20vh;
}

</style>
