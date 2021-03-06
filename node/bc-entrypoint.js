const Node = require('./app/models/node');
const Block = require('./app/models/block');
const Transaction = require('./app/models/transaction');

const node = new Node(process.url, [], 4);


var getGenesisBlock = () => {
    return new Block(
        0, [
            Transaction.newCoinbaseTo("0x1b2f108f8297d330d822dde0cddd40e709233856", 50000)
        ], 3, "h279fa6o31ie4fu07yfd9c67535cc013cf20a",
        "j582r57467h819e692588ce93895d749858fa95b",
        "5d845cddcd4404ecfd5476fd6b1cf0ea8icd3",
        2455432, "2018-02-01T23:23:56.337Z",
        '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7');
};
var block = getGenesisBlock();
node.blockchain.add(block);
node.balances['0x1b2f108f8297d330d822dde0cddd40e709233856'] = 50000;
node.balances['0x0000000000000000000000000000000000000000'] = 100000000000;

for(let peer of process.peers){
    node.addPeer(peer);
}

module.exports = node