var streamIDs = {
  STREAM_IDS: [
    {
      name: 'donald_trump',
      id: '25073877'
    },
    {
      name: 'donna warren',
      id: '2922345639'
    },
    {
      name: 'eric trump',
      id: '39349894'
    },
    {
      name: 'hannity',
      id: '41634520'
    },
    {
      name: 'jacob wahl',
      id: '736959136164806657'
    },
    {
      name: 'trump jr',
      id: '39344374'
    },
    {
      name: 'kellyanne conway',
      id: '471672239'
    },
    {
      name: 'matt gaetz',
      id: '818948638890217473'
    },
    {
      name: 'boca vista',
      id: '4175166177'
    },
    {
      name: 'seb gorka',
      id: '2417586104'
    }
  ],
  getStreamIDs: function() {
    var ids = [];

    this.STREAM_IDS.forEach(function(streamId) {
        ids.push(streamId.id);
    });

    return ids.toString();
  } 
};

module.exports = streamIDs;