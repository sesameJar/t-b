import config from "../config/config";

const getVideos = async () => {
  const response = await fetch(`${config.backendUrl}/getVideos`, {
    method: "get",
    mode: "cors"
  });
  let json = await response.json();
  return json;
};

const getVideo = async (prKey) => {
  const response = await fetch(`${config.development.backendUrl}/getVideo/?prKey=${prKey}`, {
    method: "get",
    mode: "cors"
  });
  let json = await response.json();
  return json;
};

const addVideo = async data => {
  const response = await fetch(`${config.backendUrl}/addVideo`, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  let primaryKey = await response.json();
  return primaryKey;
};



export { getVideos, getVideo, addVideo };
