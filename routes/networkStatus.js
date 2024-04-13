const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.render('networkStatus', { title: "RPC/WSS Status（RPC/WSS接続タイムアウト未実装）" });
  } catch(err) {
    next(err);
  }
});

module.exports = router;
