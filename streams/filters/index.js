var chalk = require('chalk');
var users = require('./../ids').STREAM_IDS
var twitter_client = require('./../../twitter');
var streamFilter = function(tweet) {
  if(users.filter(user => user.id === tweet.user.id_str).length){
    console.log(chalk.green('replying to', tweet.user.screen_name));
    reply(tweet.id_str);
  }
};

const randomCaps = input => {
  const inputArray = input.split('');
  const len = inputArray.length;
  for (var i = 0; i < len; i++){
    const upper = Math.floor((Math.random() * 2));
    inputArray[i] = upper ? inputArray[i].toUpperCase() : inputArray[i].toLowerCase();
  }

  return inputArray.join('');
}

const getTweetText = (id) => {
  return new Promise((resolve, reject) => {
    twitter_client.get(`statuses/show/${id}`, {"tweet_mode":"extended"}, (err, tweet) => {
      if(err) reject(err);

      resolve(tweet);
    });
  });
};

const replyToTweet = (user, tweetId, tweetText) => {
  return new Promise((resolve, reject) => {
    const params = {
      status: `@${user} ${randomCaps(tweetText)}`,
      in_reply_to_status_id: tweetId
    }
    twitter_client.post('statuses/update', params, (err, tweet) => {
      if(err) reject(err);
      
      resolve(tweet.id);
    });
  });
};

const reply = (tweetId) => {
  getTweetText(tweetId)
  .then(tweet => {
    return replyToTweet(tweet.user.screen_name, tweetId, tweet.full_text);
  })
  .then(id => {
    console.log(`tweeted reply`, id);
  })
  .catch(err => console.error('error:', err));
};

module.exports = streamFilter;