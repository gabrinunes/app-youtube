<template>
  <div></div>
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