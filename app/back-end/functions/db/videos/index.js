exports.getVideos = async (databse) => {
    const videos = await databse.ref('Videos').once('value') //mind that Videos is capital
    console.log('videos : ', videos.val())
    return videos.val()
}

let errorHandler = err => {
    if(err) {
        console.log('error : ' + err)
    }
    else {
        console.log(success)
    }
}

exports.addVideo = async (databse, data) => {
   let newPost = await databse.ref('Videos').push(data)    
   console.log("newPost" + newPost.key)
   return newPost.key
}