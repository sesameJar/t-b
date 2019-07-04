const  functions= require( 'firebase-functions')
const  admin= require('firebase-admin') 
const cors = require('cors')({origin :true})
const website = require('./db/videos')
const serviceAccount = require('./t-b-d-b-firebase-adminsdk-kk3ut-b41be08488.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://t-b-d-b.firebaseio.com"
  });

exports.getVideos = functions.https.onRequest((req,res) => {
    return cors(req,res, async() => {
        try {
            const Links = await website.getVideos(admin.database())
            
            return res.status(200).json(Links)
        }
        catch(err){
            return res.status(500).json(err)
        }
    })
})

exports.addVideo = functions.https.onRequest((req,res) => {
    return cors(req,res, async ()=> {
        try {
            // const videos = await website.getVideos(admin.database())
            const data = {
                date : Date.now(),
                youtubeLink : "https://www.youtube.com/watch?v=Se5E4PbOZHc",
                publicKey : "myPUblicKey",
                title : "Firebase tutorial",
                tips : 5
            }
            const video = await website.addVideo(admin.database(), data)
            console.log("video:" +  video)
            return res.status(200).json(video)
        }
        catch(err) {
            console.log(err)
            return res.status(500).json(err)
        }
    })
})

