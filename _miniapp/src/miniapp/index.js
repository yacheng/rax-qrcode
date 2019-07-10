"use strict";

var _qr = _interopRequireDefault(require("qr.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyleProps(key, styles) {
  var props = styles.split(";");
  var value = "";
  props.map(function (prop) {
    var _prop$split = prop.split(":"),
        propKey = _prop$split[0],
        propValue = _prop$split[1];

    if (propKey == key) {
      value = propValue;
    }
  });
  return value;
}

function getStyleNumber(styleProp) {
  var rpxEndIndex = styleProp.indexOf("rpx");

  if (rpxEndIndex > 0) {
    return styleProp.substring(0, rpxEndIndex);
  } else {
    var pxEndIndex = styleProp.indexOf("px");

    if (pxEndIndex > 0) {
      return styleProp.substring(0, pxEndIndex);
    } else {
      return "";
    }
  }
}

Component({
  onInit: function onInit() {
    this.randomId = Math.random().toString().substr(2);
    this.setData({
      randomId: this.randomId
    });
  },
  data: {
    randomId: "qrid"
  },
  props: {
    className: '',
    style: '',
    data: ""
  },
  didMount: function didMount() {
    var _this$props = this.props,
        _this$props$data = _this$props.data,
        data = _this$props$data === void 0 ? '' : _this$props$data,
        _this$props$options = _this$props.options,
        options = _this$props$options === void 0 ? {} : _this$props$options,
        width = _this$props.width,
        heigth = _this$props.heigth,
        _this$props$style = _this$props.style,
        style = _this$props$style === void 0 ? {} : _this$props$style;

    if (data === '') {
      return;
    }

    var styleHeight = getStyleProps("height", style);
    var styleWidth = getStyleProps("width", style);
    this.width = width || getStyleNumber(styleWidth) || 300;
    this.height = heigth || getStyleNumber(styleHeight) || 300;
    this.drawCode(data, options);
  },
  methods: {
    drawCode: function drawCode(data, options) {
      var codeData = (0, _qr.default)(data, options);
      var _options$fillColor = options.fillColor,
          fillColor = _options$fillColor === void 0 ? '#000000' : _options$fillColor,
          _options$blankColor = options.blankColor,
          blankColor = _options$blankColor === void 0 ? '#ffffff' : _options$blankColor;
      var cells = codeData.modules;
      var tileWidth = this.width / cells.length;
      var tileHeight = this.height / cells.length;
      var ctx = my.createCanvasContext(this.randomId || "qrid");

      for (var r = 0; r < cells.length; ++r) {
        var row = cells[r];

        for (var c = 0; c < row.length; ++c) {
          ctx.setFillStyle(row[c] ? fillColor : blankColor);
          var w = Math.ceil((c + 1) * tileWidth) - Math.floor(c * tileWidth);
          var h = Math.ceil((r + 1) * tileHeight) - Math.floor(r * tileHeight);
          ctx.fillRect(Math.round(c * tileWidth), Math.round(r * tileHeight), w, h);
        }
      }

      ctx.fill();
      ctx.draw();
    }
  }
});