exports.getVideos = async (database) => {
    const videos = await database.ref('Videos').once('value') //mind that Videos is capital
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

exports.getVideo = async (primaryKey, database) => {
    const video = await database.ref(`Videos/${primaryKey}`).once('value')
    return video.val()
}

exports.addVideo = async (database, data) => {
    let newPost = await database.ref('Videos').push(data)
    return { primaryKey: newPost.key }
}

exports.tip = async (database, data) => {
    let currentValue = await database.ref(`Videos/${data.primaryKey}`).once('value')
    currentValue = currentValue.val().tips
    update = { tips: Number(currentValue) + Number(data.tip) }
    await database.ref(`Videos/${data.primaryKey}`).update(update)
    return update
}