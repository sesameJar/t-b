exports.getVideos = async (databse) => {
    const videos = await databse.ref('Videos').once('value') //mind that Videos is capital
    let responseArr = []

    for (let [key, value] of Object.entries(videos.val())) {
        responseArr.push({
            primaryKey: key,
            youtubeLink: value.youtubeLink,
            title: value.title
        })
    }
    return responseArr
}

exports.addVideo = async (databse, data) => {
    let newPost = await databse.ref('Videos').push(data)
    console.log("newPost" + newPost.key)
    return newPost.key
}