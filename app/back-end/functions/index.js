const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const website = require("./db/videos");
const serviceAccount = require("./t-b-d-b-firebase-adminsdk-kk3ut-b41be08488.json");

function validate(data) {
  if (!data.youtubeLink) {
    throw "Invalid link";
  }
  if (!data.publicKey) {
    throw "Invalid public key";
  }
  if (!data.title) {
    throw "Invalid title";
  }
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://t-b-d-b.firebaseio.com"
});

exports.getVideos = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    try {
      const videoList = await website.getVideos(admin.database());
      return res.status(200).json(videoList)
    } catch (err) {
      return res.status(500).json(err)
    }
  });
});

exports.getVideo = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    try {
      const video = await website.getVideo(req.query.prKey, admin.database());
      return res.status(200).json(video)
    } catch (err) {
      return res.status(500).json(err)
    }
  });
});

exports.addVideo = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    try {
      const data = {
        date: Date.now(),
        youtubeLink: req.body.youtubeLink,
        publicKey: req.body.publicKey,
        title: req.body.title,
        tips: 0
      };
      validate(data);
      const video = await website.addVideo(admin.database(), data);
      return res.status(200).json(video)
    } catch (err) {
      console.log(err);
      return res.status(500).json(err)
    }
  });
});

exports.tip = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    const data = {
      primaryKey : req.query.prKey,
      tip : req.query.tip
    }
    try {
      const newValue = await website.tip(admin.database(), data)
      return res.status(200).json(newValue)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })
})
