webpackHotUpdate("app/index",{

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./app/components/common/settingModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/apan1121/Documents/Web/luckyDraw/node_modules/babel-loader/lib!/Users/apan1121/Documents/Web/luckyDraw/node_modules/vue-loader/lib??vue-loader-options!./app/components/common/settingModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vue = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(/*! vuex */ "../../node_modules/vuex/dist/vuex.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var targetDom = null;

exports.default = {
    data: function data() {
        return {
            fontSize: 0
        };
    },
    methods: {},
    watch: {
        triggerOpenSetting: function triggerOpenSetting() {
            var that = this;
            targetDom.modal("show");
        }
    },
    computed: _extends({}, (0, _vuex.mapGetters)(["triggerOpenSetting"])),
    mounted: function mounted() {
        var that = this;
        targetDom = $(that.$el);
        targetDom.bind("shown.bs.modal", function () {});
    },

    props: {},
    components: {}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./app/components/common/settingModal.vue?vue&type=template&id=41f90424&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/apan1121/Documents/Web/luckyDraw/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/apan1121/Documents/Web/luckyDraw/node_modules/vue-loader/lib??vue-loader-options!./app/components/common/settingModal.vue?vue&type=template&id=41f90424& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal", attrs: { tabindex: "-1", role: "dialog" } },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("label", { attrs: { for: "fontsize" } }, [_vm._v("Font Size")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fontSize,
                  expression: "fontSize"
                }
              ],
              attrs: { type: "range", min: "8", max: "48", name: "fontSize" },
              domProps: { value: _vm.fontSize },
              on: {
                __r: function($event) {
                  _vm.fontSize = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "range-value" }, [
              _vm._v(_vm._s(_vm.fontSize))
            ]),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass: "text-center",
                style: { "font-size": _vm.fontSize + "px" }
              },
              [_vm._v("Set the Size of this text")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c("div", { staticClass: "col-6 text-left" }),
            _vm._v(" "),
            _c("div", { staticClass: "col-6 text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.save }
                },
                [_vm._v("儲存")]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _c("i", { staticClass: "fas fa-cog" }),
        _vm._v("\n                    設定\n                ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ })

})
//# sourceMappingURL=index.4120aefbeb0dd92fec5f.hot-update.js.map