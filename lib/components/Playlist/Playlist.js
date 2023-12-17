"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PlaylistModule = _interopRequireDefault(require("./Playlist.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PlayList = props => {
  function handleClick(props) {
    let playList = "Your ".concat(props.list, " has been added to Spotify");
    alert(playList);
  }
  handleClick.defaultProps = {
    playList: []
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _PlaylistModule.default.playList
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: _PlaylistModule.default.saveToSpoti,
    onClick: handleClick
  }, "Save To Spotify"));
};
var _default = exports.default = PlayList;