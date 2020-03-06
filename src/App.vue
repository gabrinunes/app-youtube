<template>
  <div>
   <search-input @SendSearch="ReceivingSearch" v-show="listing"></search-input>
   <video-list
   :Pesquisa="dados"
   ></video-list> 
  </div>
</template>

<script>
import SearchInput from './components/SearchInput'
import VideoList from './components/VideoList'
export default {
   components:{SearchInput,VideoList},
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
.input{
  margin-top: 18rem;
}
</style>
