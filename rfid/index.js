var dummyData = [
  {
    name: 'Cody',
    id: '04121fcaac2480',
  },
  {
    name: 'Justin',
    id: '30ebc8b3',
  },
  {
    name: 'Samir',
    id: '04444152725780',
  },
];
var user;
var tessel = require('tessel');
var rfidlib = require('rfid-pn532');
var rfid = rfidlib.use(tessel.port['A']);

rfid.on('ready', function(version) {
  console.log('Ready to read RFID card');
  rfid.on('data', function(card) {
    // console.log('UID:', card.uid.toString('hex'));
    // user = dummyData.filter(user => {
    //   if (user.id === card.uid.toString('hex')) return true;
    // });
    if (card.uid.toString('hex') === dummyData[0].id){user = 'Welcome, Cody'}
    if (card.uid.toString('hex') === dummyData[1].id){user = 'Welcome, Justin'}
    if (card.uid.toString('hex') === dummyData[2].id){user = 'Welcome, Samir'}
  });
});
rfid.on('error', function(err) {
  console.error(err);
});

module.exports = user
