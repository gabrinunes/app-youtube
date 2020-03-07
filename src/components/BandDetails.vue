<template>
   <div>
     <b-card-group deck v-for="details in details " :key="details.index">
     <div class="mb-2">
       <b-card
    :title="details.name" 
    :img-src="details.images[0].url"  
    img-alt="Image" 
    img-top >
      <b-card-text>
      </b-card-text>
    </b-card>
     </div>
  </b-card-group>
   </div>
</template>

<script>
import ticket from '../services/TicketAPI'
export default {
    props:['Pesquisa'],
      data(){
          return {
              details:[]
          }
      },
      watch:{
       Pesquisa:function (){
           this.SearchBand()
       }
      },
      methods:{
          SearchBand(){
            ticket.SearchArtist(this.Pesquisa,res=>{
            this.details = res.data._embedded.attractions
            console.log(this.details)
            })  
          }
      }
}
</script>

<style scooped>
 .card{
   max-width:25rem;
 }
</style>