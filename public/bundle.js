/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderAdvice_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderAdvice.helper */ \"./src/renderAdvice.helper.ts\");\n\r\nconst adviceContainer = document.querySelector('.container__advice');\r\nconst diceButton = document.querySelector('.dice');\r\ndiceButton.addEventListener('click', () => Object(_renderAdvice_helper__WEBPACK_IMPORTED_MODULE_0__[\"renderAdvice\"])(adviceContainer));\r\nObject(_renderAdvice_helper__WEBPACK_IMPORTED_MODULE_0__[\"renderAdvice\"])(adviceContainer);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQXFEO0FBRXJELE1BQU0sZUFBZSxHQUNuQixRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsTUFBTSxVQUFVLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFdEUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyx5RUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFFMUUseUVBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckFkdmljZSB9IGZyb20gJy4vcmVuZGVyQWR2aWNlLmhlbHBlcic7XG5cbmNvbnN0IGFkdmljZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19hZHZpY2UnKTtcbmNvbnN0IGRpY2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpY2UnKTtcblxuZGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckFkdmljZShhZHZpY2VDb250YWluZXIpKTtcblxucmVuZGVyQWR2aWNlKGFkdmljZUNvbnRhaW5lcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/renderAdvice.helper.ts":
/*!************************************!*\
  !*** ./src/renderAdvice.helper.ts ***!
  \************************************/
/*! exports provided: renderAdvice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAdvice\", function() { return renderAdvice; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst connectToApi = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    const response = yield fetch('https://api.adviceslip.com/advice');\r\n    const data = yield response.json();\r\n    return data.slip;\r\n});\r\nconst renderAdvice = (adviceContainer) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const data = yield connectToApi();\r\n    adviceContainer.innerText = '';\r\n    const adviceNumberElement = document.createElement('p');\r\n    adviceNumberElement.innerText = `ADVICE #${data.id}`;\r\n    const adviceTextElement = document.createElement('h1');\r\n    adviceTextElement.innerText = `\"${data.advice}\"`;\r\n    adviceContainer.appendChild(adviceNumberElement);\r\n    adviceContainer.appendChild(adviceTextElement);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyQWR2aWNlLmhlbHBlci50cz82MzgwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxZQUFZLEdBQUcsR0FBUyxFQUFFO0lBQzlCLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDbEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ25CLENBQUMsRUFBQztBQUVLLE1BQU0sWUFBWSxHQUdKLENBQU8sZUFBZSxFQUFFLEVBQUU7SUFDN0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztJQUNsQyxlQUFlLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMvQixNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsbUJBQW1CLENBQUMsU0FBUyxHQUFHLFdBQVcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRXJELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7SUFFakQsZUFBZSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pELGVBQWUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNqRCxDQUFDLEVBQUMiLCJmaWxlIjoiLi9zcmMvcmVuZGVyQWR2aWNlLmhlbHBlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbm5lY3RUb0FwaSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYWR2aWNlc2xpcC5jb20vYWR2aWNlJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLnNsaXA7XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQWR2aWNlOiAoXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBhZHZpY2VDb250YWluZXI6IEhUTUxFbGVtZW50XG4pID0+IFByb21pc2U8dm9pZD4gPSBhc3luYyAoYWR2aWNlQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjb25uZWN0VG9BcGkoKTtcbiAgYWR2aWNlQ29udGFpbmVyLmlubmVyVGV4dCA9ICcnO1xuICBjb25zdCBhZHZpY2VOdW1iZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZHZpY2VOdW1iZXJFbGVtZW50LmlubmVyVGV4dCA9IGBBRFZJQ0UgIyR7ZGF0YS5pZH1gO1xuXG4gIGNvbnN0IGFkdmljZVRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYWR2aWNlVGV4dEVsZW1lbnQuaW5uZXJUZXh0ID0gYFwiJHtkYXRhLmFkdmljZX1cImA7XG5cbiAgYWR2aWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkdmljZU51bWJlckVsZW1lbnQpO1xuICBhZHZpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYWR2aWNlVGV4dEVsZW1lbnQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/renderAdvice.helper.ts\n");

/***/ })

/******/ });