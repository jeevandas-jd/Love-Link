const mongoose = require('mongoose');
const Letter = require('../model/letterModel');
 // adjust the path to your Letter model

// Connect to your DB
mongoose.connect('mongodb://localhost:27017/YOUR_DB_NAME', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', async () => {
  try {
    const result = await Letter.deleteMany({});
    console.log(`Deleted ${result.deletedCount} letters.`);
  } catch (err) {
    console.error('Error deleting letters:', err);
  } finally {
    mongoose.connection.close();
  }
});
