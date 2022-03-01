const mongoose = require('mongoose');
const uri =
  'mongodb+srv://123:123@cluster0.0lw1h.mongodb.net/Notes?retryWrites=true&w=majority';
(async () => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      connectTimeoutMS: 1000,
    });
    console.log('Mongodb is connected to', db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
console.table('xd');
