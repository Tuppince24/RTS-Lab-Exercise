import axios from "axios";

export default {
    searchTerms: function(){
        return axios.get( "http://hn.algolia.com/api/v1/search?query=...");
    }
};