import axios from 'axios'

const URL_BASE_TICKET = 'https://app.ticketmaster.com/discovery/v2/'
const API_KEY = 'RWo7588QwS01R29TZlUhBtMOUgLGmyoY'

export default {
    SearchArtist:(search,callback) =>{
        const URL_DETAILS_ARTIST = `${URL_BASE_TICKET}attractions.json?size=20&sort=relevance,desc&keyword=${search}&apikey=${API_KEY}`
        axios.get(URL_DETAILS_ARTIST).then(list =>{
            if(callback){
               callback(list) 
            }
        })
    }
}