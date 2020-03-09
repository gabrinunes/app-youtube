<template>
   <div>
     <div class="container">
         <div class="row">
             <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

             </div>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
             <iframe class="featureVideo" :src="url+featureVideo.id.videoId" frameborder="0"></iframe>
         </div>
     </div>
     <div class="row">
         <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8" v-for="videos in videos" :key="videos.index">
             <div class="ytb-card">
                 <iframe  :src="url+videos.id.videoId" frameborder="0"></iframe>
             </div>
         </div>
     </div>
   </div>
</template>

<script>
import youtube from '../services/YoutubeAPI'
import ticket from '../services/TicketAPI'
export default {
    props:['Pesquisa'],
      data(){
          return {
              videos:[],
              details:[],
              featureVideo:{},
              url:'https://www.youtube.com/embed/'
          }
      },
      watch:{
       Pesquisa: function (){
           this.SearchVideos()
           this.SearchArtistDetails()
       }
      },
      methods:{
          SearchVideos(){
            youtube.SearchVideos(this.Pesquisa,res=>{
                this.videos = res.data.items
                this.featureVideo = this.videos[2]
            })  
          },
          SearchArtistDetails(){
              ticket.SearchArtist(this.Pesquisa,res =>{
                  console.log(res.data._embedded)
              })
          }
      }
}
</script>

<style scoped>
.featureVideo {
        width: 100%;
        height: 480px;
        margin-top: 40px;
        margin-left: 30px;
    }
   

</style>