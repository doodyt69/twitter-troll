var twitter_client = require('./twitter');

var streamFilter = require('./streams/filters');
var streamError = require('./streams/error');
var streamIDs = require('./streams/ids');

var streamParameters = {
  follow: streamIDs.getStreamIDs()
};


twitter_client.stream('statuses/filter', streamParameters, function (stream) {
  stream.on('data', streamFilter);
  stream.on('error', streamError);
});