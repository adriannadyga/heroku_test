const dotenv = require('dotenv');
dotenv.config();

module.exports = {
      PORT: process.env.PORT,
      DB: 'mongodb+srv://kodilla:N3ZZJF4fo0l8Cue0@cluster0-inkhk.mongodb.net/test?retryWrites=true&w=majority';
}