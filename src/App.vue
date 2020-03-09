<template>
  <div>
   <search-input @SendSearch="ReceivingSearch" v-if="listing"></search-input>
   <search-input class="video" @SendSearch="ReceivingSearch" v-else></search-input>
   <details-artist
   :Pesquisa="dados"
   ></details-artist>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput'
import DetailsArtist from './components/Details'
export default {
   components:{SearchInput,DetailsArtist},
   data(){
     return {
       dados:'',
       listing : true
     }
   },
   methods:{
     ReceivingSearch(search){
       this.dados = search
       this.listing = false
     }
   }
}
</script>

<style>
 .video{
   display: block;
   margin-top: -19rem;
 }
</style>
