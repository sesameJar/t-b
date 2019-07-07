# `tüb`

tüb is a decentralized video platform which aims to solve the problems Youtube currently has with advertisers, demonetization, and censorship.

View the site [here](https://t-b-d-b.firebaseapp.com/).

Metamask is required to post videos or send tips to creators.

### Running locally

To launch the frontend locally:
* Navigate to `app/front-end`
* `npm install`
* `npm start`

To launch the backend locally:
* Navigate to `app/back-end/functions`
* `npm install`
* `firebase serve --only functions`

### Work-in-progress

tüb currently uses Youtube to host videos, but the end goal for the project is to host the videos using IPFS, making the platform truly decentralized.

The smart contract we are currently using works like a tip jar. Similar functionality is possible without using a smart contract and just having users send tips to creators directly using Metamask. However, future plans for the project include crowdfunding to encourage creators to post new content, as well as other monetization schemes. This would require smart contract functionality, so the current contract is just being used for proof of concept.

