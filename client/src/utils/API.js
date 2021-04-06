import axios from "axios";

export default {
    searchTerms: function(){
        return axios.get( "http://hn.algolia.com/api/v1/items/:id");
    },
    getUsername: function(username){
        return axios.get("http://hn.algolia.com/api/v1/users/:username" + username);
    }
};