(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Copyright 2015 Google Inc. All Rights Reserved.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *      http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n\r\n html, body {\r\n    font-family: 'Roboto', 'Helvetica', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__header-row {\r\n    padding-left: 40px;\r\n  }\r\n\r\n .mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\r\n    font-size: inherit;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__tab-bar-button {\r\n    display: none;\r\n  }\r\n\r\n .mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\r\n    display: none;\r\n  }\r\n\r\n .mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\r\n  .mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\r\n    overflow: visible;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__tab-bar-container {\r\n    height: 64px;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__tab-bar {\r\n    padding: 0;\r\n    padding-left: 16px;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\r\n    height: 64px;\r\n    line-height: 64px;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\r\n    background-color: white;\r\n    height: 4px;\r\n  }\r\n\r\n .mdl-demo main > .mdl-layout__tab-panel {\r\n    padding: 8px;\r\n    padding-top: 48px;\r\n  }\r\n\r\n .mdl-demo .mdl-card {\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n .mdl-demo .mdl-card > * {\r\n    height: auto;\r\n  }\r\n\r\n .mdl-demo .mdl-card .mdl-card__supporting-text {\r\n    margin: 40px;\r\n    flex-grow: 1;\r\n    padding: 0;\r\n    color: inherit;\r\n    width: calc(100% - 80px);\r\n  }\r\n\r\n .mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n .mdl-demo .mdl-card__actions {\r\n    margin: 0;\r\n    padding: 4px 40px;\r\n    color: inherit;\r\n  }\r\n\r\n .mdl-demo .mdl-card__actions a {\r\n    color: #00BCD4;\r\n    margin: 0;\r\n  }\r\n\r\n .mdl-demo .mdl-card__actions a:hover,\r\n  .mdl-demo .mdl-card__actions a:active {\r\n    color: inherit;\r\n    background-color: transparent;\r\n  }\r\n\r\n .mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n .mdl-demo #add {\r\n    position: absolute;\r\n    right: 40px;\r\n    top: 36px;\r\n    z-index: 999;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__content section:not(:last-of-type) {\r\n    position: relative;\r\n    margin-bottom: 48px;\r\n  }\r\n\r\n .mdl-demo section.section--center {\r\n    max-width: 860px;\r\n  }\r\n\r\n .mdl-demo #features section.section--center {\r\n    max-width: 620px;\r\n  }\r\n\r\n .mdl-demo section > header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n .mdl-demo section > .section__play-btn {\r\n    min-height: 200px;\r\n  }\r\n\r\n .mdl-demo section > header > .material-icons {\r\n    font-size: 3rem;\r\n  }\r\n\r\n .mdl-demo section > button {\r\n    position: absolute;\r\n    z-index: 99;\r\n    top: 8px;\r\n    right: 8px;\r\n  }\r\n\r\n .mdl-demo section .section__circle {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    flex-grow: 0;\r\n    flex-shrink: 1;\r\n  }\r\n\r\n .mdl-demo section .section__text {\r\n    flex-grow: 1;\r\n    flex-shrink: 0;\r\n    padding-top: 8px;\r\n  }\r\n\r\n .mdl-demo section .section__text h5 {\r\n    font-size: inherit;\r\n    margin: 0;\r\n    margin-bottom: 0.5em;\r\n  }\r\n\r\n .mdl-demo section .section__text a {\r\n    text-decoration: none;\r\n  }\r\n\r\n .mdl-demo section .section__circle-container > .section__circle-container__circle {\r\n    width: 64px;\r\n    height: 64px;\r\n    border-radius: 32px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n .mdl-demo section.section--footer .section__circle--big {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50px;\r\n    margin: 8px 32px;\r\n  }\r\n\r\n .mdl-demo .is-small-screen section.section--footer .section__circle--big {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    margin: 8px 16px;\r\n  }\r\n\r\n .mdl-demo section.section--footer {\r\n    padding: 64px 0;\r\n    margin: 0 -8px -8px -8px;\r\n  }\r\n\r\n .mdl-demo section.section--center .section__text:not(:last-child) {\r\n    border-bottom: 1px solid rgba(0,0,0,.13);\r\n  }\r\n\r\n .mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n .mdl-demo .mdl-layout__tab-panel:not(#overview) {\r\n    background-color: white;\r\n  }\r\n\r\n .mdl-demo #features section {\r\n    margin-bottom: 72px;\r\n  }\r\n\r\n .mdl-demo #features h4, #features h5 {\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n .mdl-demo .toc {\r\n    border-left: 4px solid #C1EEF4;\r\n    margin: 24px;\r\n    padding: 0;\r\n    padding-left: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n .mdl-demo .toc h4 {\r\n    font-size: 0.9rem;\r\n    margin-top: 0;\r\n  }\r\n\r\n .mdl-demo .toc a {\r\n    color: #4DD0E1;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    line-height: 28px;\r\n    display: block;\r\n  }\r\n\r\n .mdl-demo .mdl-menu__container {\r\n    z-index: 99;\r\n  }\r\n  "

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PJH\1494054\RogueWrite\angular-src\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map