webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_queries_userQueries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/queries/userQueries.js */ \"./src/graphql/queries/userQueries.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Home\",\n  data: function data() {\n    return {\n      users: []\n    };\n  },\n  methods: {\n    click: function click() {\n      var _this = this;\n\n      return Object(C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var r;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('localhost/MGM/frontend/api/cliente.php');\n\n              case 2:\n                r = _context.sent;\n                _this.users = r.data.data.AllUsers;\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    getUsers: function getUsers() {\n      var _this2 = this;\n\n      return Object(C_Users_ZSystems_Allan_Documents_UNAH_2021_IIIPAC_Ing_Software_Peluditos_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var x;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _this2.$apollo.query({\n                  query: _graphql_queries_userQueries_js__WEBPACK_IMPORTED_MODULE_3__[\"GET_ALL_USERS_QUERY\"]\n                });\n\n              case 2:\n                x = _context2.sent;\n                _this2.users = x.data.data.AllUsers;\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Ib21lLnZ1ZT83NmYyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxyXG4gICAgPHVsPlxyXG4gICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJjbGljaygpXCI+Y2xpY2s8L2J1dHRvbj5cclxuICAgICAge3t1c2Vyc319XHJcbiAgICAgIDxsaSB2LWZvcj1cInBlcnNvbiBpbiB1c2Vyc1wiIDprZXk9XCJwZXJzb24uaWRcIj5cclxuICAgICAgICB7e3BlcnNvbi5maXJzdE5hbWV9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtHRVRfQUxMX1VTRVJTX1FVRVJZfSBmcm9tICdAL2dyYXBocWwvcXVlcmllcy91c2VyUXVlcmllcy5qcydcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiSG9tZVwiLFxyXG4gIGRhdGEoKXtcclxuICAgIHJldHVybntcclxuICAgICAgdXNlcnM6W11cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6e1xyXG4gICAgYXN5bmMgY2xpY2soKXtcclxuICAgICAgY29uc3QgciA9IGF3YWl0IGF4aW9zLnBvc3QoJ2xvY2FsaG9zdC9NR00vZnJvbnRlbmQvYXBpL2NsaWVudGUucGhwJylcclxuICAgICAgdGhpcy51c2VycyA9IHIuZGF0YS5kYXRhLkFsbFVzZXJzXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0VXNlcnMoKXtcclxuICAgICAgLy8gY29uc3QgciA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIC8vICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9ncmFwaHFsXCIse1wicXVlcnlcIjpcclxuICAgICAgLy8gICAgIGB7XHJcbiAgICAgIC8vICAgICAgIGFsbFVzZXJze1xyXG4gICAgICAvLyAgICAgICAgIGlkXHJcbiAgICAgIC8vICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgLy8gICAgICAgICBmaXJ0TmFtZVxyXG4gICAgICAvLyAgICAgICB9XHJcbiAgICAgIC8vICAgICB9YFxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICApXHJcbiAgICAgIC8vIHRoaXMudXNlcnMgPSByLmRhdGEuZGF0YS5hbGxVc2Vyc1xyXG4gICAgICBjb25zdCB4ID0gYXdhaXQgdGhpcy4kYXBvbGxvLnF1ZXJ5KHtxdWVyeTpHRVRfQUxMX1VTRVJTX1FVRVJZfSlcclxuICAgICAgdGhpcy51c2VycyA9IHguZGF0YS5kYXRhLkFsbFVzZXJzXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59O1xyXG48L3NjcmlwdD5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUFBO0FBQ0E7QUFkQTtBQWFBO0FBQ0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFwQkE7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Home.vue?vue&type=script&lang=js&\n");

/***/ })

})