import axios from 'axios'

const URL_BASE_YOUTUBE ='https://www.googleapis.com/youtube/v3/'
const API_KEY ='AIzaSyCxjzx8lmB62YIoYCaYLMGl_GAdzwlqdLA'

export default {

    SearchVideos:(search,callback) =>{
      const URL_LIST_VIDEOS = `${URL_BASE_YOUTUBE}search?part=snippet&type=video&q=${search}&maxResults=15&key=${API_KEY}`
      axios.get(URL_LIST_VIDEOS).then(list =>{
          if(callback){
              callback(list)
          }
      })  
    }


}