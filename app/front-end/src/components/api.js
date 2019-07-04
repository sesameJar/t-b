// import config from '../config/config'

// Just for testing
const data = {
  "videos" : [ {
    "date" : 1562265077596,
    "publicKey" : "0xCE79dB57f83cBdc29062fc636753715148868214",
    "tips" : 0,
    "title" : "King Gizzard and the Lizard Wizard",
    "youtubeLink" : "https://www.youtube.com/watch?v=cmAlQvDQGoI"
  }, {
    "date" : 1562260247159,
    "publicKey" : "0x06854f66338A7F9FD597E790A12F9E930D4Bd88B",
    "tips" : 0,
    "title" : "Chernobyl",
    "youtubeLink" : "https://www.youtube.com/watch?v=FfDa8tR25dk"
  }, {
    "date" : 1562260247150,
    "publicKey" : "0x06854f66338A7F9FD597E790A12F9E930D4Bd88B",
    "tips" : 0,
    "title" : "Chernobyl 2",
    "youtubeLink" : "https://www.youtube.com/watch?v=FfDa8tR25dk"
  } ]
}

const getAllVideos = async () => {
  return data
}

export default getAllVideos