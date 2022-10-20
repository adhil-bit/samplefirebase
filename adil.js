
var admin = require("firebase-admin");

var serviceAccount = require("./fir-sample-8ad71-firebase-adminsdk-3s6jp-512650fd1e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
