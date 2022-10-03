"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.session_secret = exports.qnet_key = exports.kakao_key = exports.db_cstring = void 0;
var db_cstring = process.env.DB_CSTRING || 'mongodb+srv://WILIM:wilimadmin@wilim-database.vtlkdho.mongodb.net/?retryWrites=true&w=majority';
exports.db_cstring = db_cstring;
var session_secret = process.env.SESSION_SECRET || 'WILIMSESSIONSECRETKEY';
exports.session_secret = session_secret;
var kakao_key = process.env.KAKAO_KEY || "924213ef9bf44dea96f40c16d7aab8f3";
exports.kakao_key = kakao_key;
var qnet_key = process.env.QNET_KEY;
exports.qnet_key = qnet_key;