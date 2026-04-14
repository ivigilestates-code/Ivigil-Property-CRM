const https = require('https');
https.get('https://docs.google.com/spreadsheets/d/1ccTNwr6N-RNITHHY1sWcKt-cBGEF0ngRu9b7An3qRqc/gviz/tq?tqx=out:json&callback=test', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data.substring(0, 100)));
});
