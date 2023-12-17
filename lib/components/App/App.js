"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchBar = _interopRequireDefault(require("../SearchBar/SearchBar"));
var _Playlist = _interopRequireDefault(require("../Playlist/Playlist"));
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Ja", /*#__PURE__*/_react.default.createElement("span", {
    className: "highlight"
  }, "mmm"), "ing"), /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.default, {
    onSearch: {}
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "App-playlist"
  }, /*#__PURE__*/_react.default.createElement(_Playlist.default, {
    list: 'TrackList'
  }))));
};
var _default = exports.default = App;