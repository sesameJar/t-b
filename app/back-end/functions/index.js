const  functions= require( 'firebase-functions')
const  admin= require('firebase-admin') 
const cors = require('cors')({origin :true})
const website = require('./db/media')
const serviceAccount = require('./dapp1-2-firebase-adminsdk-9g3ah-856fd60e63.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dApp1-2.firebaseio.com"
  });

exports.getVideoLinks = functions.https.onRequest((req,res) => {
    return cors(req,res,async ()=>{
        try {
            const Links = await website.getMedia(admin.database())
            const views = Links.Views
            await website.updateViews(admin.database(), views)
            console.log()
            return res.status(200).json(Links)
        }
        catch(err){
            return res.status(500).json(err)
        }
    })
})

