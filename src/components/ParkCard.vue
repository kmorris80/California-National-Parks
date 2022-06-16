<template>
<div class="park-card">
  <div class="child">
    <h1 class="park-name">{{park.name}}</h1>
    </div>
    <div class="park-desc child">{{park.description}}</div>
    <div class="child">
    <img class="park-img" v-bind:src="park.imgUrl" alt=""/> 
    </div>
    <div class="child">
    <h3>{{park.latLong}}</h3>
    <!-- parse out the string -->
    </div>
    <div class="child">
      <h3 id="activity-top">The top 3 activities</h3>
    </div>
    <div class="activities" 
    :activity="activity" 
    v-for="activity in park.activities" 
    v-bind:key="activity.id">{{activity.name}}
  </div>
    <a class="child" v-bind:href="park.parkUrl" target="_blank"><button>{{park.name}}</button></a>

    
</div>
</template>


<script>


export default{
name: "park-card",
  props: {
    park: Object,
}

}

</script>



<style lang="scss">
@import '../sass/parkCard.scss';

@import url('https://fonts.googleapis.com/css2?family=Manjari:wght@100&family=Poppins:wght@300;600&display=swap');


</style>