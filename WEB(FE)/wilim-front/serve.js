const axios = require("axios");

axios.get('https://5000-geunoh-webwilimteamwili-ikokc0ocbmc.ws-us67.gitpod.io/userSchemaAPI/Geun-Oh').then((Response)=>{
    console.log(Response);
}).catch((Error)=>{
    console.log(Error);
})