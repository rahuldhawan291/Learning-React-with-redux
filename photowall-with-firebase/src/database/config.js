import * as firebase from 'firebase';

var config = {
    apiKey: "<your API Key>",
    authDomain: "<Your auth domain>",
    databaseURL: "your db url>",
    projectId: "<your firebase project ID>",
    storageBucket: "<your firebase storage bucket ID>",
    messagingSenderId: "<message sender ID>",
    appId: "<Your app ID>"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {database};
