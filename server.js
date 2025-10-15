// peerライブラリをインポート
const { PeerServer } = require("peer");

// PeerServerを初期化
const peerServer = PeerServer({
  port: 9000,
  path: "/myapp",
});

console.log("PeerJS server running on port 9000");
