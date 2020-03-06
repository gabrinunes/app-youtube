<template>
   <div>
       <div class="input"> 
    <div class="container text-center">
      <h1 class="header-main-title">Youtube Api Search</h1>
      <form id="connectionForm" v-on:submit.prevent>
        <div class="form-group">
          <b-input required type="text"  class="form-control character-search-box"
            placeholder="(Ex. PinkFloyd, Iron Maiden, Pearl Jam, etc...)" v-model="search" @keyup.enter="SendSearch(search)"></b-input>
        </div>
        <b-button class="btn btn-danger mb-2 float-right search-character-button" @click="SendSearch(search)">Search</b-button>
      </form>
    </div>
  </div>
   </div>
</template>

<script>
export default {
    data(){
        return {
            search:''
        }
    },
    methods:{
        SendSearch(search){
          this.$emit('SendSearch',search)  
        }
    }

}
</script>

<style scooped>
 .input{
     margin-top: 19rem;
 }

</style>