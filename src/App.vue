<template>

<div id="app">
<div class="header">
<header><img id="logo" src="./assets/Explore.png" alt="logo"></header>
</div>
<heroImg></heroImg>

</div>
  <div class="container">
  <park-card
  :park="park" 
  v-for="park in parks" 
  v-bind:key="park.id"
  >
  </park-card>
  <footer>
<pageFooter></pageFooter>
</footer>
  </div>

</template>

<script>
import parkCard from './components/ParkCard.vue';
import heroImg from './components/HeroImg.vue';
import pageFooter from './components/pageFooter.vue'

export default {
 
  components: {
    parkCard,
    heroImg,
    pageFooter

   
  },
  data(){
    return{
    parks:null
    }
   
  },
   created(){
    fetch('https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=vUhprzKO53jTYrkRfkynLCMiLjikUFgFHSacbpjq')
    .then(response => response.json())
    .then(parksResult => {
      console.log(parksResult);
      this.parks= parksResult.data
        .slice(0,12)
        .map(park=>{
          let imgUrl = park.images[0].url;
          let latLong= park.latLong
          .replace("lat:", "")
          .replace("long:","")
          .replace("-","")
          .split(",")
          .map(x=> parseFloat(x,10).toFixed(3))
          .join(",")
          .replace(",", " N ") + " W"
          
          
          
          
         
          
        
         
          // calculate lat and long like assignment
          return{
            name: park.name,
            description: park.description,
            imgUrl: imgUrl,
            latLong: latLong,
            activities: park.activities.slice(0,3),
            parkUrl: park.url



          }
        });
   });

   },
   filteredLatLong(){

   }
  }
</script>

<style>
@import './sass/main.scss';
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");


</style>
