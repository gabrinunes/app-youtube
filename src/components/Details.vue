<template>
   <div class="container">
        <b-card v-for="details in details.slice(0,1)" :key="details.index"
    :title="details.name"
    :img-src="details.images[0].url"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 25rem;"
    class="mb-2"
  >
    <b-card-text>
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
   <div class="row">
       <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4" v-for="videos in videos" :key="videos.index">
           <iframe :src="url+videos.id.videoId" frameborder="0" allowfullscreen></iframe>
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
              images:[],
              featureVideo:{},
              url:'https://www.youtube.com/embed/',
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
                  this.details = res.data._embedded.attractions
                  this.images = res.data._embedded.attractions.map(res=> res.images)
              })
          }
      }
}
</script>

<style  scoped>
 
</style>