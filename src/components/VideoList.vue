<template>
  <div>
      <b-embed v-for="videoList in videoList" :key="videoList.index"
    type="iframe"
    aspect="4by3"
    :src="url + videoList.id.videoId"
    allowfullscreen
  ></b-embed>
  </div>
</template>

<script>
import youtube from '../services/YoutubeAPI'
export default {   
    props:['Pesquisa'],
    data(){
        return{
             videoList:[],
             url:'//www.youtube.com/embed/'
        }
    },
    watch:{
       Pesquisa:function () {
         this.SearchVideos()
       } 
    },
    methods:{
       SearchVideos(){
          youtube.SearchVideos(this.Pesquisa,res=>{
           this.videoList = res.data.items
          })  
        } 
    }

}
</script>

<style>

</style>