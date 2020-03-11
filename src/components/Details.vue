<template>
    <div>
      <b-spinner v-if="loading"></b-spinner>
      <div class="container" v-else>
       <div class="row">
             <b-card v-for="details in details.slice(0,1)" :key="details.index"
    :title="details.name"
    :img-src="details.images[0].url"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 25rem;"
    class="mb-2"
  >
    <b-card-text >
       Estilo:{{details.classifications[0].genre.name}} <br>
       <div v-if="details.externalLinks">
         <b-button v-if="details.externalLinks.wiki">Wiki</b-button> <br>
       <b-button v-if="details.externalLinks.facebook" :href="details.externalLinks.facebook[0].url">Facebook</b-button> <br>
       <b-button v-if="details.externalLinks.twitter" :href="details.externalLinks.twitter[0].url">Twitter</b-button>
       </div>
    </b-card-text>
  </b-card>
    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-7">
       <b-carousel class="caroussel"
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide  v-for="images in images" :key="images.index"
      caption="First slide"
      :img-src="images[1].url"
    ></b-carousel-slide>
    </b-carousel>
       </div>
    </div>
   <div class="row">
       <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4" v-for="videos in videos" :key="videos.index">
           <b-card>
            <iframe :src="url+videos.id.videoId" frameborder="0" allowfullscreen></iframe>
            <b-card-text class="information">
            <h2>{{videos.snippet.title}}</h2>
           <h8>{{videos.snippet.description}}</h8>
            </b-card-text>
           </b-card>
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
              images:[],
              loading: false,
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
            this.loading = true
            youtube.SearchVideos(this.Pesquisa,res=>{
                this.videos = res.data.items
                this.loading = false
            })  
          },
          SearchArtistDetails(){
            this.loading = true
              ticket.SearchArtist(this.Pesquisa,res =>{
                  this.details = res.data._embedded.attractions
                  this.images = res.data._embedded.attractions.map(res=> res.images)
                  this.loading = false
              })
          }
      }
}
</script>

<style  scoped>
 .btn{
     width: 6rem;
     margin-top: 1rem;
 }
 
</style>