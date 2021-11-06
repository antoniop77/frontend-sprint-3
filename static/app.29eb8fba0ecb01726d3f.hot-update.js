webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Settings/Profiles.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Settings/Profiles.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_navbar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/navbar.vue */ \"./src/components/navbar.vue\");\n/* harmony import */ var _graphql_queries_profilesQr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/graphql/queries/profilesQr */ \"./src/graphql/queries/profilesQr.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Profiles',\n  components: {\n    MyNavbar: _components_navbar_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      profileData: {\n        id: 0,\n        profileName: '',\n        description: ''\n      },\n      profiles: [],\n      isSuccessfuly: false\n    };\n  },\n  methods: {\n    saveProfile: function saveProfile() {\n      var _this = this;\n\n      return Object(C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var _yield$_this$$apollo$, data;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _this.$apollo.mutate({\n                  mutation: _graphql_queries_profilesQr__WEBPACK_IMPORTED_MODULE_5__[\"SAVE_PROFILE\"],\n                  variables: {\n                    name: _this.profileData.profileName,\n                    description: _this.profileData.description\n                  }\n                });\n\n              case 2:\n                _yield$_this$$apollo$ = _context.sent;\n                data = _yield$_this$$apollo$.data;\n                console.log(data.createProfileType.profileType);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    refreshTable: function refreshTable() {\n      var _this2 = this;\n\n      return Object(C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var _yield$_this2$$apollo, data;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _this2.$apollo.query({\n                  query: _graphql_queries_profilesQr__WEBPACK_IMPORTED_MODULE_5__[\"GET_ALL_PROFILES\"]\n                });\n\n              case 2:\n                _yield$_this2$$apollo = _context2.sent;\n                data = _yield$_this2$$apollo.data;\n                _this2.profiles = data.allProfileTypes;\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    deleteProfile: function deleteProfile(id) {\n      var _this3 = this;\n\n      return Object(C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                console.log(id);\n                _context3.next = 3;\n                return _this3.$apollo.mutate({\n                  mutation: _graphql_queries_profilesQr__WEBPACK_IMPORTED_MODULE_5__[\"DELETE_PROFILE\"],\n                  variables: {\n                    id: id\n                  }\n                });\n\n              case 3:\n                _this3.refreshTable();\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    }\n  },\n  mounted: function mounted() {\n    var _this4 = this;\n\n    return Object(C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _this4.refreshTable();\n\n            case 1:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }))();\n  },\n  updated: function updated() {\n    var _this5 = this;\n\n    return Object(C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _this5.refreshTable();\n\n            case 1:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }))();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL1NldHRpbmdzL1Byb2ZpbGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUHJvZmlsZXMudnVlP2QzMTkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9maWxlc1wiPlxyXG4gICAgPE15TmF2YmFyPjwvTXlOYXZiYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxmb3JtIGNsYXNzPVwiY29sIHM2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvZmlsZU5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidmFsaWRhdGVcIiB2LW1vZGVsPVwicHJvZmlsZURhdGEucHJvZmlsZU5hbWVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2ZpbGVOYW1lXCI+Tm9tYnJlPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25Qcm9maWxlXCIgY2xhc3M9XCJtYXRlcmlhbGl6ZS10ZXh0YXJlYVwiIHYtbW9kZWw9XCJwcm9maWxlRGF0YS5kZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblByb2ZpbGVcIj5EZXNjcmlwY2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIG9yYW5nZSBkYXJrZW4tMiB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiBuYW1lPVwiYWN0aW9uXCIgQGNsaWNrPVwic2F2ZVByb2ZpbGUoKVwiPlxyXG4gICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJjb2xsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbVwiIHYtZm9yPVwicHJvZmlsZSBpbiBwcm9maWxlc1wiIDprZXk9XCJwcm9maWxlLmlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzOVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e3Byb2ZpbGUucHJvZmlsZU5hbWV9fSAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gcmVkIGRhcmtlbi0yIHdhdmVzLWVmZmVjdCB3YXZlcy1saWd0aFwiIEBjbGljaz1cImRlbGV0ZVByb2ZpbGUocHJvZmlsZS5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3Byb2ZpbGUuaWR9fUVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgTXlOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL25hdmJhci52dWUnXHJcbmltcG9ydCB7R0VUX0FMTF9QUk9GSUxFUyxTQVZFX1BST0ZJTEUsREVMRVRFX1BST0ZJTEV9IGZyb20gJ0AvZ3JhcGhxbC9xdWVyaWVzL3Byb2ZpbGVzUXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1Byb2ZpbGVzJyxcclxuICBjb21wb25lbnRzOntcclxuICAgIE15TmF2YmFyXHJcbiAgfSxcclxuICBkYXRhKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlRGF0YSA6IHtpZDowLHByb2ZpbGVOYW1lOicnLGRlc2NyaXB0aW9uOicnfSxcclxuICAgICAgcHJvZmlsZXM6W10sXHJcbiAgICAgIGlzU3VjY2Vzc2Z1bHk6ZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6e1xyXG4gICAgYXN5bmMgc2F2ZVByb2ZpbGUoKXtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IFNBVkVfUFJPRklMRSxcclxuICAgICAgICB2YXJpYWJsZXM6e1xyXG4gICAgICAgICAgbmFtZTp0aGlzLnByb2ZpbGVEYXRhLnByb2ZpbGVOYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246dGhpcy5wcm9maWxlRGF0YS5kZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfSkgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuY3JlYXRlUHJvZmlsZVR5cGUucHJvZmlsZVR5cGUpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgcmVmcmVzaFRhYmxlKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHRoaXMuJGFwb2xsby5xdWVyeSh7cXVlcnk6R0VUX0FMTF9QUk9GSUxFU30pXHJcbiAgICAgIHRoaXMucHJvZmlsZXMgPSBkYXRhLmFsbFByb2ZpbGVUeXBlc1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZVByb2ZpbGUoaWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgYXdhaXQgdGhpcy4kYXBvbGxvLm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246REVMRVRFX1BST0ZJTEUsXHJcbiAgICAgICAgdmFyaWFibGVzOntcclxuICAgICAgICAgIGlkOmlkXHJcbiAgICAgICAgfX0pXHJcbiAgICAgIHRoaXMucmVmcmVzaFRhYmxlKClcclxuICAgIH1cclxuICB9XHJcbiAgLFxyXG4gIGFzeW5jIG1vdW50ZWQoKXtcclxuICAgIHRoaXMucmVmcmVzaFRhYmxlKClcclxuICB9LFxyXG4gIGFzeW5jIHVwZGF0ZWQoKXtcclxuICAgIHRoaXMucmVmcmVzaFRhYmxlKClcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBdkJBO0FBMEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQTNDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Settings/Profiles.vue?vue&type=script&lang=js&\n");

/***/ })

})