let config = {}
const hostname = window && window.location && window.location.hostname;

if (hostname === 't-b-d-b.firebaseapp.com'){
  config.backendUrl = "https://us-central1-t-b-d-b.cloudfunctions.net/"
} else {
  config.backendUrl = "http://localhost:5000/t-b-d-b/us-central1"
}

export default config

// https://daveceddia.com/multiple-environments-with-react/