const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongodb.js <password>');
  process.exit(1);
}

const password = process.argv[2];

const url =
  `mongodb+srv://fullstackopen_user_0:${password}@fullstackopen0.63j2p.mongodb.net/phonebookdb?retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const PhonebookEntry = mongoose.model('PhonebookEntry', phonebookSchema);

if (process.argv.length === 3) {
  PhonebookEntry.find({}).then((result) => {
    console.log('phonebook:');
    result.forEach((p) => {
      console.log(p.name, p.number);
    });
    mongoose.connection.close();
  });
} else {
  const name = process.argv[3];
  const number = process.argv[4];

  const phonebookEntry = new PhonebookEntry({
    name: name,
    number: number,
  });

  phonebookEntry.save().then((result) => {
    console.log(`added ${name} ${number} to phonebook`);
    mongoose.connection.close();
  });
}


