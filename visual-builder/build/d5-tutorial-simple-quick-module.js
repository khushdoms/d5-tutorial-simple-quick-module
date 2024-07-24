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

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.json */ \"./src/module.json\");\n// External library dependencies.\n\n\n// WordPress package dependencies.\nconst {\n  addAction\n} = window?.vendor?.wp?.hooks;\n\n// Divi package dependencies.\nconst {\n  RichTextContainer,\n  TextContainer,\n  RangeContainer\n} = window?.divi?.fieldLibrary;\nconst {\n  GroupContainer\n} = window?.divi?.modal;\nconst {\n  // Renderer - HTML\n  ModuleContainer,\n  // Renderer - Styles\n  StyleContainer,\n  // Renderer - Classnames\n  elementClassnames,\n  // Settings - Content\n  AdminLabelGroup,\n  BackgroundGroup,\n  FieldContainer,\n  // Settings - Design\n  AnimationGroup,\n  BorderGroup,\n  BoxShadowGroup,\n  FiltersGroup,\n  FontGroup,\n  FontBodyGroup,\n  SizingGroup,\n  SpacingGroup,\n  TransformGroup,\n  // Settings - Advanced\n  PositionSettingsGroup,\n  ScrollSettingsGroup,\n  TransitionGroup,\n  VisibilitySettingsGroup\n} = window?.divi?.module;\nconst {\n  registerModule\n} = window?.divi?.moduleLibrary;\nconst {\n  useFetch\n} = window?.divi?.rest;\n\n// Module metadata that is used in both Frontend and Visual Builder.\n\n\n/**\r\n * React function component for rendering module style.\r\n */\nconst ModuleStyles = ({\n  attrs,\n  elements,\n  settings,\n  orderClass,\n  mode,\n  state,\n  noStyleTag\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyleContainer, {\n  mode: mode,\n  state: state,\n  noStyleTag: noStyleTag\n}, elements.style({\n  attrName: 'module',\n  styleProps: {\n    disabledOn: {\n      disabledModuleVisibility: settings?.disabledModuleVisibility\n    }\n  }\n}), elements.style({\n  attrName: 'title'\n}), elements.style({\n  attrName: 'content'\n}));\n\n/**\r\n * React function component for registering module script data.\r\n */\nconst ModuleScriptData = ({\n  elements\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, elements.scriptData({\n  attrName: 'module'\n}));\n\n/**\r\n * Function for registering module classnames.\r\n */\nconst moduleClassnames = ({\n  classnamesInstance,\n  attrs\n}) => {\n  // Add element classnames.\n  classnamesInstance.add(elementClassnames({\n    attrs: attrs?.module?.decoration ?? {}\n  }));\n};\n\n/**\r\n * Simple Quick Module.\r\n */\nconst simpleQuickModule = {\n  // Metadata that is used on Visual Builder and Frontend\n  metadata: _module_json__WEBPACK_IMPORTED_MODULE_1__,\n  // Layout renderer components.\n  renderers: {\n    // React Function Component for rendering module's output on layout area.\n    edit: ({\n      attrs,\n      id,\n      name,\n      elements\n    }) => {\n      // Divi's hook for fetching value from REST API, and handling loading state.\n      const {\n        fetch,\n        response,\n        isLoading\n      } = useFetch({\n        html: ''\n      });\n\n      // Attribute for handling number of posts to be displayed.\n      // If you have question on why it has to be in nested object, we'll explain this on the later tutorial.\n      const postsNumber = attrs?.recentPosts?.innerContent?.desktop?.value?.postsNumber;\n\n      // React hook that will execute the callback (in this case, fetching value from REST API endpoint)\n      // whenever the `postsNumber` value is changed.\n      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        // Fetch value from this REST API endpoint. The returned value will be available\n        // on `response` properties of `useFetch` hook declaration above.\n        fetch({\n          method: 'GET',\n          restRoute: `/wp/v2/posts?context=view&per_page=${postsNumber}`,\n          data: {\n            postsNumber: postsNumber\n          }\n        }).catch(error => {\n          console.log(error);\n        });\n\n        // This will make sure that the callback is only executed when the `postsNumber` value is changed.\n      }, [postsNumber]);\n      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (fetchAbortRef.current) {\n          fetchAbortRef.current.abort();\n        }\n        fetchAbortRef.current = new AbortController();\n        fetch({\n          restRoute: `/wp/v2/posts?context=view&per_page=${postsNumber}`,\n          method: 'GET',\n          signal: fetchAbortRef.current.signal\n        }).catch(error => {\n          console.error(error);\n        });\n        return () => {\n          if (fetchAbortRef.current) {\n            fetchAbortRef.current.abort();\n          }\n        };\n      }, [postsNumber]);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ModuleContainer, {\n        attrs: attrs,\n        elements: elements,\n        id: id,\n        moduleClassName: \"d5_tut_simple_quick_module\",\n        name: name,\n        scriptDataComponent: ModuleScriptData,\n        stylesComponent: ModuleStyles,\n        classnamesFunction: moduleClassnames\n      }, elements.styleComponents({\n        attrName: 'module'\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"et_pb_module_inner\"\n      }, elements.render({\n        attrName: 'title'\n      }), elements.render({\n        attrName: 'content'\n      }), isLoading ? 'Loading...' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"d5-tut-simple-quick-module-recent-posts\",\n        dangerouslySetInnerHTML: {\n          __html: response?.html\n        }\n      })));\n    }\n  },\n  // Settings component.\n  settings: {\n    // React function component that renders module settings' content panel.\n    content: ({\n      defaultSettingsAttrs\n    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GroupContainer, {\n      id: \"mainContent\",\n      title: \"Text\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldContainer, {\n      attrName: \"title.innerContent\",\n      label: \"Title\",\n      description: \"Title\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextContainer, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldContainer, {\n      attrName: \"content.innerContent\",\n      label: \"Content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RichTextContainer, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldContainer, {\n      attrName: \"recentPosts.innerContent\",\n      subName: \"postsNumber\",\n      label: \"Number of Posts\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RangeContainer, {\n      min: 1,\n      minLimit: 1,\n      max: 10,\n      maxLimit: 10,\n      defaultUnit: \"\",\n      allowedUnits: ['']\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminLabelGroup, {\n      defaultGroupAttr: defaultSettingsAttrs?.adminLabel\n    })),\n    // React function component that renders module settings' design panel.\n    design: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontGroup, {\n      attrName: \"title.decoration.font\",\n      groupLabel: \"Title Font\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FontBodyGroup, {\n      attrName: \"content.decoration.bodyFont\",\n      groupLabel: \"Content Font\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SizingGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpacingGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BorderGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BoxShadowGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FiltersGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransformGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimationGroup, null)),\n    // React function component that renders module settings' advanced panel.\n    advanced: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VisibilitySettingsGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TransitionGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PositionSettingsGroup, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollSettingsGroup, null))\n  },\n  // Attribute that is automatically added into the module when the module is inserted\n  // into the layout so that the newly inserted module has some placeholder content\n  placeholderContent: {\n    module: {\n      decoration: {\n        background: {\n          desktop: {\n            value: {\n              color: '#DFDFDF'\n            }\n          }\n        }\n      }\n    },\n    title: {\n      innerContent: {\n        desktop: {\n          value: 'Module Title'\n        }\n      }\n    },\n    content: {\n      innerContent: {\n        desktop: {\n          value: 'Module Content'\n        }\n      }\n    }\n  }\n};\n\n// Register module.\naddAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'd5Tut.simpleQuickModule', () => {\n  registerModule(simpleQuickModule.metadata, simpleQuickModule);\n});\n\n//# sourceURL=webpack://d5-tutorial-simple-quick-module/./src/index.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "./src/module.json":
/*!*************************!*\
  !*** ./src/module.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"d5-tut/simple-quick-module\",\"d4Shortcode\":\"d5_tut_simple_quick_module\",\"title\":\"Simple Quick Module\",\"titles\":\"Simple Quick Modules\",\"category\":\"module\",\"attributes\":{\"module\":{\"type\":\"object\",\"selector\":\"{{selector}}\",\"default\":{\"meta\":{\"adminLabel\":{\"desktop\":{\"value\":\"Simple Quick Module\"}}}}},\"title\":{\"type\":\"object\",\"selector\":\"{{selector}} .d5_tut_simple_quick_module_title\",\"attributes\":{\"class\":\"d5_tut_simple_quick_module_title\"},\"tagName\":\"h2\",\"inlineEditor\":\"plainText\",\"elementType\":\"heading\",\"childrenSanitizer\":\"et_core_esc_previously\"},\"content\":{\"type\":\"object\",\"selector\":\"{{selector}} .d5_tut_simple_quick_module_content\",\"attributes\":{\"class\":\"d5_tut_simple_quick_module_content\"},\"tagName\":\"div\",\"inlineEditor\":\"richText\",\"childrenSanitizer\":\"et_core_esc_previously\",\"allowHtml\":true},\"recentPosts\":{\"type\":\"object\",\"selector\":\"{{selector}} .d5-tut-simple-quick-module-recent-posts\",\"default\":{\"innerContent\":{\"desktop\":{\"value\":{\"postsNumber\":\"3\"}}}}}}}');\n\n//# sourceURL=webpack://d5-tutorial-simple-quick-module/./src/module.json?");

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.jsx");
/******/ 	
/******/ })()
;