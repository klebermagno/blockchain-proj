const express = require('express'),
    transactionsRouter = express.Router(),
    Transaction = require('../models/transaction'),
    node = require('../models/node');


transactionsRouter.post("/send", function (req, res) {

    var transactionJSON = req.body;

    /*
    {
  "from": "44fe0696beb6e24541cc0e8728276c9ec3af2675",
  "to": "9a9f082f37270ff54c5ca4204a0e4da6951fe917",
  "value": 25.00,
  "senderPubKey": "2a1d79fb8743d0a4a8501e0028079bcf82a4f…eae1",
  "senderSignature": [e20c…a3c29d3370f79f, cf92…0acd0c132ffe56]
  "transactionHash": "4dfc3e0ef89ed603ed54e47435a18b836b…176a"
  "paid": true,
  "dateReceived": "2018-02-01T07:47:51.982Z",
  "minedInBlockIndex": 7
}

    */

    let from = transactionJSON.from;
    let to = transactionJSON.to;
    let value = transactionJSON.value;
    let senderPubKey = transactionJSON.senderPubKey;
    let senderSignature = transactionJSON.senderSignature;
    let transactionHash = transactionJSON.transactionHash;
    let paid = transactionJSON.paid;
    
});

module.exports = transactionsRouter;
