/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/server/app.tsx"
/*!****************************!*\
  !*** ./app/server/app.tsx ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prefetch: () => (/* binding */ prefetch),\n/* harmony export */   renderApp: () => (/* binding */ renderApp)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/index */ \"./src/index.tsx\");\n/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/routes */ \"./src/routes/index.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n// prefetch：根据当前 URL 预取 route 数据\n\nconst prefetch = async (ctx, queryClient) => {\n  const matches = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(_src_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], ctx.url);\n  if (!matches) return;\n  const tasks = matches.map(({\n    route,\n    params\n  }) => {\n    if (route.queryKey && route.loadData) {\n      return queryClient.prefetchQuery({\n        queryKey: route.queryKey,\n        queryFn: () => route.loadData(params)\n      });\n    }\n    return null;\n  }).filter(Boolean);\n  await Promise.allSettled(tasks);\n};\n\n// renderApp：完成服务端 React 渲染\nconst renderApp = async (ctx, extractor) => {\n  const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\n  const helmetContext = {};\n  await prefetch(ctx, queryClient);\n  const dehydratedState = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient);\n\n  // StaticRouter: 现在服务端正在渲染 ctx.url 这个地址，请你按这个地址匹配路由。\n  const appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)(extractor.collectChunks(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {\n    location: ctx.url,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.HelmetProvider, {\n      context: helmetContext,\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.HydrationBoundary, {\n          state: dehydratedState,\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            context: ctx\n          })\n        })\n      })\n    })\n  })));\n  queryClient.clear();\n  return {\n    appHtml,\n    dehydratedState,\n    helmetContext\n  };\n};\n\n//# sourceURL=webpack://react-custom-ssr/./app/server/app.tsx?\n}");

/***/ },

/***/ "./app/server/htmlTemplate.ts"
/*!************************************!*\
  !*** ./app/server/htmlTemplate.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHtmlTemplate: () => (/* binding */ getHtmlTemplate)\n/* harmony export */ });\nconst getHtmlTemplate = ({\n  appHtml,\n  dehydratedState,\n  helmetContext,\n  extractor\n}) => {\n  const helmet = helmetContext.helmet;\n  return `\n    <!DOCTYPE html>\n    <html ${helmet?.htmlAttributes.toString() ?? \"\"}>\n        <head>\n            <meta charset=\"utf-8\" />\n            ${helmet?.title.toString() ?? \"<title>React Custom SSR</title>\"}\n            ${helmet?.meta.toString() ?? \"\"}\n            ${helmet?.link.toString() ?? \"\"}\n            ${extractor.getLinkTags()}\n            ${extractor.getStyleTags()}\n        </head>\n        \n        <body ${helmet?.bodyAttributes.toString() ?? \"\"}>\n            <div id=\"root\">${appHtml}</div>\n            <script id=\"__REACT_QUERY_STATE__\" type=\"application/json\">\n                ${JSON.stringify(dehydratedState)}\n            </script>\n            ${extractor.getScriptTags()}\n        </body>\n    </html>\n    `;\n};\n// 专门负责生成 HTML\n\n//# sourceURL=webpack://react-custom-ssr/./app/server/htmlTemplate.ts?\n}");

/***/ },

/***/ "./app/server/server.tsx"
/*!*******************************!*\
  !*** ./app/server/server.tsx ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ \"./app/server/app.tsx\");\n/* harmony import */ var _htmlTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./htmlTemplate */ \"./app/server/htmlTemplate.ts\");\n\n\n\n\n\n\n\n// 创建服务\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\n\n// 托管静态资源 \napp.use(koa_static__WEBPACK_IMPORTED_MODULE_1___default()(node_path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), \"dist/client\")));\nconst statsFile = node_path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), \"dist/client/loadable-stats.json\");\n\n// 调用 renderApp 返回 HTML\napp.use(async ctx => {\n  const extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_3__.ChunkExtractor({\n    statsFile,\n    entrypoints: [\"client\"]\n  });\n  const {\n    appHtml,\n    dehydratedState,\n    helmetContext\n  } = await (0,_app__WEBPACK_IMPORTED_MODULE_4__.renderApp)(ctx, extractor);\n  ctx.type = \"html\";\n  ctx.body = (0,_htmlTemplate__WEBPACK_IMPORTED_MODULE_5__.getHtmlTemplate)({\n    appHtml,\n    dehydratedState,\n    helmetContext,\n    extractor\n  });\n});\n\n// 监听端口\napp.listen(3000, () => {\n  console.log(\"SSR server running at http://localhost:3000\");\n});\n\n//# sourceURL=webpack://react-custom-ssr/./app/server/server.tsx?\n}");

/***/ },

/***/ "./app/utils/KoaContext.tsx"
/*!**********************************!*\
  !*** ./app/utils/KoaContext.tsx ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KoaConsumer: () => (/* binding */ KoaConsumer),\n/* harmony export */   KoaProvider: () => (/* binding */ KoaProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst KoaContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n\n// 在App中使用包裹在最外层接收一个context\nconst KoaProvider = KoaContext.Provider;\nconst KoaConsumer = KoaContext.Consumer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KoaContext);\n\n//# sourceURL=webpack://react-custom-ssr/./app/utils/KoaContext.tsx?\n}");

/***/ },

/***/ "./app/utils/Redirect.tsx"
/*!********************************!*\
  !*** ./app/utils/Redirect.tsx ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _KoaContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KoaContext */ \"./app/utils/KoaContext.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Redirect = ({\n  to,\n  status = 302\n}) => {\n  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_KoaContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n\n  // CSR 没有 Koa context\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!context) {\n      navigate(to, {\n        replace: true\n      });\n    }\n  }, [context, navigate, to]);\n\n  // SSR 有 Koa context\n  if (context) {\n    context.status = status;\n    context.redirect(to);\n  }\n  return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redirect);\n\n//# sourceURL=webpack://react-custom-ssr/./app/utils/Redirect.tsx?\n}");

/***/ },

/***/ "./app/utils/loadable.tsx"
/*!********************************!*\
  !*** ./app/utils/loadable.tsx ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/.pnpm/@loadable+component@5.16.7_react@18.2.0/node_modules/@loadable/component/dist/esm/loadable.esm.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst loadable = (dynamicImport, loading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n  children: \"loading\"\n}), ssr = true) => {\n  return (0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dynamicImport, {\n    fallback: loading,\n    ssr\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadable);\n\n//# sourceURL=webpack://react-custom-ssr/./app/utils/loadable.tsx?\n}");

/***/ },

/***/ "./src/apis/querykeys.ts"
/*!*******************************!*\
  !*** ./src/apis/querykeys.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryKeys: () => (/* binding */ QueryKeys)\n/* harmony export */ });\nlet QueryKeys = /*#__PURE__*/function (QueryKeys) {\n  QueryKeys[\"HOME_LIST\"] = \"home-list\";\n  return QueryKeys;\n}({});\n\n//# sourceURL=webpack://react-custom-ssr/./src/apis/querykeys.ts?\n}");

/***/ },

/***/ "./src/apis/services/Home.ts"
/*!***********************************!*\
  !*** ./src/apis/services/Home.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHomeList: () => (/* binding */ getHomeList)\n/* harmony export */ });\nconst getHomeList = async () => {\n  await new Promise(resolve => setTimeout(resolve, 100));\n  return [{\n    id: 1,\n    name: \"SSR data item 1\"\n  }, {\n    id: 2,\n    name: \"SSR data item 2\"\n  }, {\n    id: 3,\n    name: \"SSR data item 3\"\n  }];\n};\n\n//# sourceURL=webpack://react-custom-ssr/./src/apis/services/Home.ts?\n}");

/***/ },

/***/ "./src/index.tsx"
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.tsx\");\n/* harmony import */ var _app_utils_KoaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/utils/KoaContext */ \"./app/utils/KoaContext.tsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst App = ({\n  context\n}) => {\n  const element = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useRoutes)(_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_app_utils_KoaContext__WEBPACK_IMPORTED_MODULE_2__.KoaProvider, {\n    value: context ?? null,\n    children: element\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-custom-ssr/./src/index.tsx?\n}");

/***/ },

/***/ "./src/routes/index.tsx"
/*!******************************!*\
  !*** ./src/routes/index.tsx ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_utils_Redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/utils/Redirect */ \"./app/utils/Redirect.tsx\");\n/* harmony import */ var _app_utils_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/utils/loadable */ \"./app/utils/loadable.tsx\");\n/* harmony import */ var _apis_querykeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/querykeys */ \"./src/apis/querykeys.ts\");\n/* harmony import */ var _apis_services_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/services/Home */ \"./src/apis/services/Home.ts\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Home = (0,_app_utils_loadable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName() {\n    return \"pages-Home\";\n  },\n  isReady(props) {\n    const key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    // removed by dead control flow\n\n  },\n  importAsync: () => __webpack_require__.e(/*! import() | pages-Home */ \"pages-Home\").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Home */ \"./src/pages/Home.tsx\")),\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync(props) {\n    const id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    // removed by dead control flow\n\n  },\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../pages/Home */ \"./src/pages/Home.tsx\");\n    }\n    // removed by dead control flow\n\n  }\n}, null);\nconst About = (0,_app_utils_loadable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName() {\n    return \"pages-About\";\n  },\n  isReady(props) {\n    const key = this.resolve(props);\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n    // removed by dead control flow\n\n  },\n  importAsync: () => __webpack_require__.e(/*! import() | pages-About */ \"pages-About\").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/About */ \"./src/pages/About.tsx\")),\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync(props) {\n    const id = this.resolve(props);\n    if (true) {\n      return __webpack_require__(id);\n    }\n    // removed by dead control flow\n\n  },\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../pages/About */ \"./src/pages/About.tsx\");\n    }\n    // removed by dead control flow\n\n  }\n}, null);\nconst routes = [{\n  path: \"/\",\n  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Home, {}),\n  queryKey: [_apis_querykeys__WEBPACK_IMPORTED_MODULE_2__.QueryKeys.HOME_LIST],\n  loadData: _apis_services_Home__WEBPACK_IMPORTED_MODULE_3__.getHomeList\n}, {\n  path: \"/about\",\n  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(About, {})\n}, {\n  path: \"/old-about\",\n  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_app_utils_Redirect__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    to: \"/about\",\n    status: 301\n  })\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://react-custom-ssr/./src/routes/index.tsx?\n}");

/***/ },

/***/ "./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\nvar reactIs = __webpack_require__(/*! react-is */ \"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js\");\n\n/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */\nvar REACT_STATICS = {\n  childContextTypes: true,\n  contextType: true,\n  contextTypes: true,\n  defaultProps: true,\n  displayName: true,\n  getDefaultProps: true,\n  getDerivedStateFromError: true,\n  getDerivedStateFromProps: true,\n  mixins: true,\n  propTypes: true,\n  type: true\n};\nvar KNOWN_STATICS = {\n  name: true,\n  length: true,\n  prototype: true,\n  caller: true,\n  callee: true,\n  arguments: true,\n  arity: true\n};\nvar FORWARD_REF_STATICS = {\n  '$$typeof': true,\n  render: true,\n  defaultProps: true,\n  displayName: true,\n  propTypes: true\n};\nvar MEMO_STATICS = {\n  '$$typeof': true,\n  compare: true,\n  defaultProps: true,\n  displayName: true,\n  propTypes: true,\n  type: true\n};\nvar TYPE_STATICS = {};\nTYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;\nTYPE_STATICS[reactIs.Memo] = MEMO_STATICS;\n\nfunction getStatics(component) {\n  // React v16.11 and below\n  if (reactIs.isMemo(component)) {\n    return MEMO_STATICS;\n  } // React v16.12 and above\n\n\n  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;\n}\n\nvar defineProperty = Object.defineProperty;\nvar getOwnPropertyNames = Object.getOwnPropertyNames;\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar getPrototypeOf = Object.getPrototypeOf;\nvar objectPrototype = Object.prototype;\nfunction hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {\n  if (typeof sourceComponent !== 'string') {\n    // don't hoist over string (html) components\n    if (objectPrototype) {\n      var inheritedComponent = getPrototypeOf(sourceComponent);\n\n      if (inheritedComponent && inheritedComponent !== objectPrototype) {\n        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);\n      }\n    }\n\n    var keys = getOwnPropertyNames(sourceComponent);\n\n    if (getOwnPropertySymbols) {\n      keys = keys.concat(getOwnPropertySymbols(sourceComponent));\n    }\n\n    var targetStatics = getStatics(targetComponent);\n    var sourceStatics = getStatics(sourceComponent);\n\n    for (var i = 0; i < keys.length; ++i) {\n      var key = keys[i];\n\n      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {\n        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);\n\n        try {\n          // Avoid failures from read-only properties\n          defineProperty(targetComponent, key, descriptor);\n        } catch (e) {}\n      }\n    }\n  }\n\n  return targetComponent;\n}\n\nmodule.exports = hoistNonReactStatics;\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, exports) {

eval("{/** @license React v16.13.1\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar hasSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\nvar REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\nvar REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\nvar REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\nvar REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\nvar REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\nvar REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n// (unstable) APIs that have been removed. Can we remove the symbols?\n\nvar REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;\nvar REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;\nvar REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\nvar REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;\nvar REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;\nvar REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;\nvar REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;\nvar REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;\nvar REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;\nvar REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;\n\nfunction isValidElementType(type) {\n  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);\n}\n\nfunction typeOf(object) {\n  if (typeof object === 'object' && object !== null) {\n    var $$typeof = object.$$typeof;\n\n    switch ($$typeof) {\n      case REACT_ELEMENT_TYPE:\n        var type = object.type;\n\n        switch (type) {\n          case REACT_ASYNC_MODE_TYPE:\n          case REACT_CONCURRENT_MODE_TYPE:\n          case REACT_FRAGMENT_TYPE:\n          case REACT_PROFILER_TYPE:\n          case REACT_STRICT_MODE_TYPE:\n          case REACT_SUSPENSE_TYPE:\n            return type;\n\n          default:\n            var $$typeofType = type && type.$$typeof;\n\n            switch ($$typeofType) {\n              case REACT_CONTEXT_TYPE:\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_LAZY_TYPE:\n              case REACT_MEMO_TYPE:\n              case REACT_PROVIDER_TYPE:\n                return $$typeofType;\n\n              default:\n                return $$typeof;\n            }\n\n        }\n\n      case REACT_PORTAL_TYPE:\n        return $$typeof;\n    }\n  }\n\n  return undefined;\n} // AsyncMode is deprecated along with isAsyncMode\n\nvar AsyncMode = REACT_ASYNC_MODE_TYPE;\nvar ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\nvar ContextConsumer = REACT_CONTEXT_TYPE;\nvar ContextProvider = REACT_PROVIDER_TYPE;\nvar Element = REACT_ELEMENT_TYPE;\nvar ForwardRef = REACT_FORWARD_REF_TYPE;\nvar Fragment = REACT_FRAGMENT_TYPE;\nvar Lazy = REACT_LAZY_TYPE;\nvar Memo = REACT_MEMO_TYPE;\nvar Portal = REACT_PORTAL_TYPE;\nvar Profiler = REACT_PROFILER_TYPE;\nvar StrictMode = REACT_STRICT_MODE_TYPE;\nvar Suspense = REACT_SUSPENSE_TYPE;\nvar hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated\n\nfunction isAsyncMode(object) {\n  {\n    if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n\n      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');\n    }\n  }\n\n  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n}\nfunction isConcurrentMode(object) {\n  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n}\nfunction isContextConsumer(object) {\n  return typeOf(object) === REACT_CONTEXT_TYPE;\n}\nfunction isContextProvider(object) {\n  return typeOf(object) === REACT_PROVIDER_TYPE;\n}\nfunction isElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\nfunction isForwardRef(object) {\n  return typeOf(object) === REACT_FORWARD_REF_TYPE;\n}\nfunction isFragment(object) {\n  return typeOf(object) === REACT_FRAGMENT_TYPE;\n}\nfunction isLazy(object) {\n  return typeOf(object) === REACT_LAZY_TYPE;\n}\nfunction isMemo(object) {\n  return typeOf(object) === REACT_MEMO_TYPE;\n}\nfunction isPortal(object) {\n  return typeOf(object) === REACT_PORTAL_TYPE;\n}\nfunction isProfiler(object) {\n  return typeOf(object) === REACT_PROFILER_TYPE;\n}\nfunction isStrictMode(object) {\n  return typeOf(object) === REACT_STRICT_MODE_TYPE;\n}\nfunction isSuspense(object) {\n  return typeOf(object) === REACT_SUSPENSE_TYPE;\n}\n\nexports.AsyncMode = AsyncMode;\nexports.ConcurrentMode = ConcurrentMode;\nexports.ContextConsumer = ContextConsumer;\nexports.ContextProvider = ContextProvider;\nexports.Element = Element;\nexports.ForwardRef = ForwardRef;\nexports.Fragment = Fragment;\nexports.Lazy = Lazy;\nexports.Memo = Memo;\nexports.Portal = Portal;\nexports.Profiler = Profiler;\nexports.StrictMode = StrictMode;\nexports.Suspense = Suspense;\nexports.isAsyncMode = isAsyncMode;\nexports.isConcurrentMode = isConcurrentMode;\nexports.isContextConsumer = isContextConsumer;\nexports.isContextProvider = isContextProvider;\nexports.isElement = isElement;\nexports.isForwardRef = isForwardRef;\nexports.isFragment = isFragment;\nexports.isLazy = isLazy;\nexports.isMemo = isMemo;\nexports.isPortal = isPortal;\nexports.isProfiler = isProfiler;\nexports.isStrictMode = isStrictMode;\nexports.isSuspense = isSuspense;\nexports.isValidElementType = isValidElementType;\nexports.typeOf = typeOf;\n  })();\n}\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\nif (false) // removed by dead control flow\n{} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js\");\n}\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js?\n}");

/***/ },

/***/ "@loadable/server"
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
(module) {

module.exports = require("@loadable/server");

/***/ },

/***/ "@tanstack/react-query"
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
(module) {

module.exports = require("@tanstack/react-query");

/***/ },

/***/ "koa"
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
(module) {

module.exports = require("koa");

/***/ },

/***/ "koa-static"
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
(module) {

module.exports = require("koa-static");

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = require("react");

/***/ },

/***/ "react-dom/server"
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
(module) {

module.exports = require("react-dom/server");

/***/ },

/***/ "react-helmet-async"
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
(module) {

module.exports = require("react-helmet-async");

/***/ },

/***/ "react-router-dom"
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
(module) {

module.exports = require("react-router-dom");

/***/ },

/***/ "react/jsx-runtime"
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
(module) {

module.exports = require("react/jsx-runtime");

/***/ },

/***/ "node:path"
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
(module) {

module.exports = require("node:path");

/***/ },

/***/ "./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*******************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(e) {\n  if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  return e;\n}\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*****************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  return _extends = Object.assign ? Object.assign.bind() : function (n) {\n    for (var e = 1; e < arguments.length; e++) {\n      var t = arguments[e];\n      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);\n    }\n    return n;\n  }, _extends.apply(null, arguments);\n}\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inheritsLoose)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inheritsLoose(t, o) {\n  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t, o);\n}\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _objectWithoutPropertiesLoose)\n/* harmony export */ });\nfunction _objectWithoutPropertiesLoose(r, e) {\n  if (null == r) return {};\n  var t = {};\n  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {\n    if (-1 !== e.indexOf(n)) continue;\n    t[n] = r[n];\n  }\n  return t;\n}\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(t, e) {\n  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {\n    return t.__proto__ = e, t;\n  }, _setPrototypeOf(t, e);\n}\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/@loadable+component@5.16.7_react@18.2.0/node_modules/@loadable/component/dist/esm/loadable.esm.mjs"
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@loadable+component@5.16.7_react@18.2.0/node_modules/@loadable/component/dist/esm/loadable.esm.mjs ***!
  \*******************************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (/* binding */ __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   lazy: () => (/* binding */ lazy$2),\n/* harmony export */   loadableReady: () => (/* binding */ loadableReady)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"./node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n\n\n\n\n\n\n\n/* eslint-disable import/prefer-default-export */\nfunction invariant(condition, message) {\n  if (condition) return;\n  var error = new Error(\"loadable: \" + message);\n  error.framesToPop = 1;\n  error.name = 'Invariant Violation';\n  throw error;\n}\nfunction warn(message) {\n  // eslint-disable-next-line no-console\n  console.warn(\"loadable: \" + message);\n}\n\nvar Context = /*#__PURE__*/\nreact__WEBPACK_IMPORTED_MODULE_0__.createContext();\n\nvar LOADABLE_REQUIRED_CHUNKS_KEY = '__LOADABLE_REQUIRED_CHUNKS__';\nfunction getRequiredChunkKey(namespace) {\n  return \"\" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;\n}\n\nvar sharedInternals = /*#__PURE__*/Object.freeze({\n  __proto__: null,\n  getRequiredChunkKey: getRequiredChunkKey,\n  invariant: invariant,\n  Context: Context\n});\n\nvar LOADABLE_SHARED = {\n  initialChunks: {}\n};\n\nvar STATUS_PENDING = 'PENDING';\nvar STATUS_RESOLVED = 'RESOLVED';\nvar STATUS_REJECTED = 'REJECTED';\n\nfunction resolveConstructor(ctor) {\n  if (typeof ctor === 'function') {\n    return {\n      requireAsync: ctor,\n      resolve: function resolve() {\n        return undefined;\n      },\n      chunkName: function chunkName() {\n        return undefined;\n      }\n    };\n  }\n\n  return ctor;\n}\n\nvar withChunkExtractor = function withChunkExtractor(Component) {\n  var LoadableWithChunkExtractor = function LoadableWithChunkExtractor(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Consumer, null, function (extractor) {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({\n        __chunkExtractor: extractor\n      }, props));\n    });\n  };\n\n  if (Component.displayName) {\n    LoadableWithChunkExtractor.displayName = Component.displayName + \"WithChunkExtractor\";\n  }\n\n  return LoadableWithChunkExtractor;\n};\n\nvar identity = function identity(v) {\n  return v;\n};\n\nfunction createLoadable(_ref) {\n  var _ref$defaultResolveCo = _ref.defaultResolveComponent,\n      defaultResolveComponent = _ref$defaultResolveCo === void 0 ? identity : _ref$defaultResolveCo,\n      _render = _ref.render,\n      onLoad = _ref.onLoad;\n\n  function loadable(loadableConstructor, options) {\n    if (options === void 0) {\n      options = {};\n    }\n\n    var ctor = resolveConstructor(loadableConstructor);\n    var cache = {};\n    /**\n     * Cachekey represents the component to be loaded\n     * if key changes - component has to be reloaded\n     * @param props\n     * @returns {null|Component}\n     */\n\n    function _getCacheKey(props) {\n      if (options.cacheKey) {\n        return options.cacheKey(props);\n      }\n\n      if (ctor.resolve) {\n        return ctor.resolve(props);\n      }\n\n      return 'static';\n    }\n    /**\n     * Resolves loaded `module` to a specific `Component\n     * @param module\n     * @param props\n     * @param Loadable\n     * @returns Component\n     */\n\n\n    function resolve(module, props, Loadable) {\n      var Component = options.resolveComponent ? options.resolveComponent(module, props) : defaultResolveComponent(module); // FIXME: suppressed due to https://github.com/gregberge/loadable-components/issues/990\n      // if (options.resolveComponent && !ReactIs.isValidElementType(Component)) {\n      //   throw new Error(\n      //     `resolveComponent returned something that is not a React component!`,\n      //   )\n      // }\n\n      hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__(Loadable, Component, {\n        preload: true\n      });\n      return Component;\n    }\n\n    var cachedLoad = function cachedLoad(props) {\n      var cacheKey = _getCacheKey(props);\n\n      var promise = cache[cacheKey];\n\n      if (!promise || promise.status === STATUS_REJECTED) {\n        promise = ctor.requireAsync(props);\n        promise.status = STATUS_PENDING;\n        cache[cacheKey] = promise;\n        promise.then(function () {\n          promise.status = STATUS_RESOLVED;\n        }, function (error) {\n          console.error('loadable-components: failed to asynchronously load component', {\n            fileName: ctor.resolve(props),\n            chunkName: ctor.chunkName(props),\n            error: error ? error.message : error\n          });\n          promise.status = STATUS_REJECTED;\n        });\n      }\n\n      return promise;\n    };\n\n    var InnerLoadable =\n    /*#__PURE__*/\n    function (_React$Component) {\n      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(InnerLoadable, _React$Component);\n\n      InnerLoadable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {\n        var cacheKey = _getCacheKey(props);\n\n        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state, {\n          cacheKey: cacheKey,\n          // change of a key triggers loading state automatically\n          loading: state.loading || state.cacheKey !== cacheKey\n        });\n      };\n\n      function InnerLoadable(props) {\n        var _this;\n\n        _this = _React$Component.call(this, props) || this;\n        _this.state = {\n          result: null,\n          error: null,\n          loading: true,\n          cacheKey: _getCacheKey(props)\n        };\n        invariant(!props.__chunkExtractor || ctor.requireSync, 'SSR requires `@loadable/babel-plugin`, please install it'); // Server-side\n\n        if (props.__chunkExtractor) {\n          // This module has been marked with no SSR\n          if (options.ssr === false) {\n            return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this);\n          } // We run load function, we assume that it won't fail and that it\n          // triggers a synchronous loading of the module\n\n\n          ctor.requireAsync(props)[\"catch\"](function () {\n            return null;\n          }); // So we can require now the module synchronously\n\n          _this.loadSync();\n\n          props.__chunkExtractor.addChunk(ctor.chunkName(props));\n\n          return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this);\n        } // Client-side with `isReady` method present (SSR probably)\n        // If module is already loaded, we use a synchronous loading\n        // Only perform this synchronous loading if the component has not\n        // been marked with no SSR, else we risk hydration mismatches\n\n\n        if (options.ssr !== false && ( // is ready - was loaded in this session\n        ctor.isReady && ctor.isReady(props) || // is ready - was loaded during SSR process\n        ctor.chunkName && LOADABLE_SHARED.initialChunks[ctor.chunkName(props)])) {\n          _this.loadSync();\n        }\n\n        return _this;\n      }\n\n      var _proto = InnerLoadable.prototype;\n\n      _proto.componentDidMount = function componentDidMount() {\n        this.mounted = true; // retrieve loading promise from a global cache\n\n        var cachedPromise = this.getCache(); // if promise exists, but rejected - clear cache\n\n        if (cachedPromise && cachedPromise.status === STATUS_REJECTED) {\n          this.setCache();\n        } // component might be resolved synchronously in the constructor\n\n\n        if (this.state.loading) {\n          this.loadAsync();\n        }\n      };\n\n      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {\n        // Component has to be reloaded on cacheKey change\n        if (prevState.cacheKey !== this.state.cacheKey) {\n          this.loadAsync();\n        }\n      };\n\n      _proto.componentWillUnmount = function componentWillUnmount() {\n        this.mounted = false;\n      };\n\n      _proto.safeSetState = function safeSetState(nextState, callback) {\n        if (this.mounted) {\n          this.setState(nextState, callback);\n        }\n      }\n      /**\n       * returns a cache key for the current props\n       * @returns {Component|string}\n       */\n      ;\n\n      _proto.getCacheKey = function getCacheKey() {\n        return _getCacheKey(this.props);\n      }\n      /**\n       * access the persistent cache\n       */\n      ;\n\n      _proto.getCache = function getCache() {\n        return cache[this.getCacheKey()];\n      }\n      /**\n       * sets the cache value. If called without value sets it as undefined\n       */\n      ;\n\n      _proto.setCache = function setCache(value) {\n        if (value === void 0) {\n          value = undefined;\n        }\n\n        cache[this.getCacheKey()] = value;\n      };\n\n      _proto.triggerOnLoad = function triggerOnLoad() {\n        var _this2 = this;\n\n        if (onLoad) {\n          setTimeout(function () {\n            onLoad(_this2.state.result, _this2.props);\n          });\n        }\n      }\n      /**\n       * Synchronously loads component\n       * target module is expected to already exists in the module cache\n       * or be capable to resolve synchronously (webpack target=node)\n       */\n      ;\n\n      _proto.loadSync = function loadSync() {\n        // load sync is expecting component to be in the \"loading\" state already\n        // sounds weird, but loading=true is the initial state of InnerLoadable\n        if (!this.state.loading) return;\n\n        try {\n          var loadedModule = ctor.requireSync(this.props);\n          var result = resolve(loadedModule, this.props, Loadable);\n          this.state.result = result;\n          this.state.loading = false;\n        } catch (error) {\n          console.error('loadable-components: failed to synchronously load component, which expected to be available', {\n            fileName: ctor.resolve(this.props),\n            chunkName: ctor.chunkName(this.props),\n            error: error ? error.message : error\n          });\n          this.state.error = error;\n        }\n      }\n      /**\n       * Asynchronously loads a component.\n       */\n      ;\n\n      _proto.loadAsync = function loadAsync() {\n        var _this3 = this;\n\n        var promise = this.resolveAsync();\n        promise.then(function (loadedModule) {\n          var result = resolve(loadedModule, _this3.props, Loadable);\n\n          _this3.safeSetState({\n            result: result,\n            loading: false\n          }, function () {\n            return _this3.triggerOnLoad();\n          });\n        })[\"catch\"](function (error) {\n          return _this3.safeSetState({\n            error: error,\n            loading: false\n          });\n        });\n        return promise;\n      }\n      /**\n       * Asynchronously resolves(not loads) a component.\n       * Note - this function does not change the state\n       */\n      ;\n\n      _proto.resolveAsync = function resolveAsync() {\n        var _this$props = this.props,\n            __chunkExtractor = _this$props.__chunkExtractor,\n            forwardedRef = _this$props.forwardedRef,\n            props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this$props, [\"__chunkExtractor\", \"forwardedRef\"]);\n\n        return cachedLoad(props);\n      };\n\n      _proto.render = function render() {\n        var _this$props2 = this.props,\n            forwardedRef = _this$props2.forwardedRef,\n            propFallback = _this$props2.fallback,\n            __chunkExtractor = _this$props2.__chunkExtractor,\n            props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this$props2, [\"forwardedRef\", \"fallback\", \"__chunkExtractor\"]);\n\n        var _this$state = this.state,\n            error = _this$state.error,\n            loading = _this$state.loading,\n            result = _this$state.result;\n\n        if (options.suspense) {\n          var cachedPromise = this.getCache() || this.loadAsync();\n\n          if (cachedPromise.status === STATUS_PENDING) {\n            throw this.loadAsync();\n          }\n        }\n\n        if (error) {\n          throw error;\n        }\n\n        var fallback = propFallback || options.fallback || null;\n\n        if (loading) {\n          return fallback;\n        }\n\n        return _render({\n          fallback: fallback,\n          result: result,\n          options: options,\n          props: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, props, {\n            ref: forwardedRef\n          })\n        });\n      };\n\n      return InnerLoadable;\n    }(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n    var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);\n    var Loadable = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {\n      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(EnhancedInnerLoadable, Object.assign({\n        forwardedRef: ref\n      }, props));\n    });\n    Loadable.displayName = 'Loadable'; // In future, preload could use `<link rel=\"preload\">`\n\n    Loadable.preload = function (props) {\n      Loadable.load(props);\n    };\n\n    Loadable.load = function (props) {\n      return cachedLoad(props);\n    };\n\n    return Loadable;\n  }\n\n  function lazy(ctor, options) {\n    return loadable(ctor, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, options, {\n      suspense: true\n    }));\n  }\n\n  return {\n    loadable: loadable,\n    lazy: lazy\n  };\n}\n\nfunction defaultResolveComponent(loadedModule) {\n  // eslint-disable-next-line no-underscore-dangle\n  return loadedModule.__esModule ? loadedModule[\"default\"] : loadedModule[\"default\"] || loadedModule;\n}\n\n/* eslint-disable no-use-before-define, react/no-multi-comp */\n\nvar _createLoadable =\n/*#__PURE__*/\ncreateLoadable({\n  defaultResolveComponent: defaultResolveComponent,\n  render: function render(_ref) {\n    var Component = _ref.result,\n        props = _ref.props;\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props);\n  }\n}),\n    loadable = _createLoadable.loadable,\n    lazy = _createLoadable.lazy;\n\n/* eslint-disable no-use-before-define, react/no-multi-comp */\n\nvar _createLoadable$1 =\n/*#__PURE__*/\ncreateLoadable({\n  onLoad: function onLoad(result, props) {\n    if (result && props.forwardedRef) {\n      if (typeof props.forwardedRef === 'function') {\n        props.forwardedRef(result);\n      } else {\n        props.forwardedRef.current = result;\n      }\n    }\n  },\n  render: function render(_ref) {\n    var result = _ref.result,\n        props = _ref.props;\n\n    if (props.children) {\n      return props.children(result);\n    }\n\n    return null;\n  }\n}),\n    loadable$1 = _createLoadable$1.loadable,\n    lazy$1 = _createLoadable$1.lazy;\n\n/* eslint-disable no-underscore-dangle, camelcase */\nvar BROWSER = typeof window !== 'undefined';\nfunction loadableReady(done, _temp) {\n  if (done === void 0) {\n    done = function done() {};\n  }\n\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$namespace = _ref.namespace,\n      namespace = _ref$namespace === void 0 ? '' : _ref$namespace,\n      _ref$chunkLoadingGlob = _ref.chunkLoadingGlobal,\n      chunkLoadingGlobal = _ref$chunkLoadingGlob === void 0 ? '__LOADABLE_LOADED_CHUNKS__' : _ref$chunkLoadingGlob;\n\n  if (!BROWSER) {\n    warn('`loadableReady()` must be called in browser only');\n    done();\n    return Promise.resolve();\n  }\n\n  var requiredChunks = null;\n\n  if (BROWSER) {\n    var id = getRequiredChunkKey(namespace);\n    var dataElement = document.getElementById(id);\n\n    if (dataElement) {\n      requiredChunks = JSON.parse(dataElement.textContent);\n      var extElement = document.getElementById(id + \"_ext\");\n\n      if (extElement) {\n        var _JSON$parse = JSON.parse(extElement.textContent),\n            namedChunks = _JSON$parse.namedChunks;\n\n        namedChunks.forEach(function (chunkName) {\n          LOADABLE_SHARED.initialChunks[chunkName] = true;\n        });\n      } else {\n        // version mismatch\n        throw new Error('loadable-component: @loadable/server does not match @loadable/component');\n      }\n    }\n  }\n\n  if (!requiredChunks) {\n    warn('`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side');\n    done();\n    return Promise.resolve();\n  }\n\n  var resolved = false;\n  return new Promise(function (resolve) {\n    window[chunkLoadingGlobal] = window[chunkLoadingGlobal] || [];\n    var loadedChunks = window[chunkLoadingGlobal];\n    var originalPush = loadedChunks.push.bind(loadedChunks);\n\n    function checkReadyState() {\n      if (requiredChunks.every(function (chunk) {\n        return loadedChunks.some(function (_ref2) {\n          var chunks = _ref2[0];\n          return chunks.indexOf(chunk) > -1;\n        });\n      })) {\n        if (!resolved) {\n          resolved = true;\n          resolve();\n        }\n      }\n    }\n\n    loadedChunks.push = function () {\n      originalPush.apply(void 0, arguments);\n      checkReadyState();\n    };\n\n    checkReadyState();\n  }).then(done);\n}\n\n/* eslint-disable no-underscore-dangle */\nvar loadable$2 = loadable;\nloadable$2.lib = loadable$1;\nvar lazy$2 = lazy;\nlazy$2.lib = lazy$1;\nvar __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadable$2);\n\n\n\n//# sourceURL=webpack://react-custom-ssr/./node_modules/.pnpm/@loadable+component@5.16.7_react@18.2.0/node_modules/@loadable/component/dist/esm/loadable.esm.mjs?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".server.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					var installedChunk = require("./" + __webpack_require__.u(chunkId));
/******/ 					if (!installedChunks[chunkId]) {
/******/ 						installChunk(installedChunk);
/******/ 					}
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./app/server/server.tsx");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;