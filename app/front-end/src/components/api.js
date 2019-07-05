import config from '../config/config'

const getVideos = async () => {
  const response = await fetch(`${config.development.backendUrl}/getVideos`, {
    method: "get",
    mode: "cors",
  })
  let json = await response.json()
  return json
}

const getVideo = async () => {
  const response = await fetch(`${config.development.backendUrl}/getVideo`, {
    method : "get",
    mode : "cors"
  })
  let json = await response.json()
  return json
}

export {getVideos, getVideo}