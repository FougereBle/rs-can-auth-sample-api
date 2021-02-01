const mongoose = require("mongoose");

let db = null;

module.exports = {
  db,
  connect() {
    db = mongoose
      .connect(process.env.MONGOOSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connection to database established.\n");
      });
  },
};
