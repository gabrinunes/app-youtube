<template>
  <div>
   <search-input @SendSearch="ReceivingSearch" v-if="listing"></search-input>
   <search-input class="video" @SendSearch="ReceivingSearch" v-else></search-input>
   <band-details
   :Pesquisa="dados"
   ></band-details>
   <video-list
   :Pesquisa="dados"
   ></video-list> 
  </div>
</template>

<script>
import SearchInput from './components/SearchInput'
import VideoList from './components/VideoList'
import BandDetails from './components/BandDetails'
export default {
   components:{SearchInput,VideoList,BandDetails},
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
