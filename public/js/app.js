/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//For webpack, require react components here
	'use strict';

	var Nav = __webpack_require__(1);
	var User = __webpack_require__(2);
	var Activities = __webpack_require__(3);
	var AdSpace = __webpack_require__(4);
	var Footer = __webpack_require__(5);

	var Main = React.createClass({
	  displayName: 'Main',

	  render: function render() {
	    //Need to get data from db here
	    var activityArray = [{ id: 1, avatar: "//placehold.it/80x80&text=[img]", user: "Bob Bob", description: "Now, look here, my good man. Where'd you get the coconuts? No, no, no! Yes, yes. A bit. But she's got a wart." }, { id: 2, avatar: "//placehold.it/80x80&text=[img]", user: "Jim Jim", description: "Found them? In Mercia?! The coconut's tropical! Well, she turned me into a newt. And the hat. She's a witch!" }, { id: 3, avatar: "//placehold.it/80x80&text=[img]", user: "Jill Jill", description: "A newt? Why do you think that she is a witch? What a strange person. You don't vote for kings. Did you dress her up like this? Well, I didn't vote for you. What do you mean? No, no, no! Yes, yes. A bit. But she's got a wart. Bring her forward! No, no, no! Yes, yes. A bit. But she's got a wart." }, { id: 4, avatar: "//placehold.it/80x80&text=[img]", user: "Ted Ted", description: "Well, Mercia's a temperate zone! You don't frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person! I blow my nose at you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits! You don't vote for kings. Ah, now we see the violence inherent in the system! She looks like one." }];

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Nav, null),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'large-3 columns ' },
	          React.createElement(User, null)
	        ),
	        React.createElement(
	          'div',
	          { className: 'large-6 columns' },
	          React.createElement(Activities, { activities: activityArray })
	        ),
	        React.createElement(
	          'aside',
	          { className: 'large-3 columns hide-for-small' },
	          React.createElement(AdSpace, null)
	        )
	      ),
	      React.createElement(Footer, null)
	    );
	  }
	});

	React.render(React.createElement(Main, null), document.getElementsByTagName('Main')[0]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "Nav",
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "row" },
	      React.createElement(
	        "div",
	        { className: "large-12 columns" },
	        React.createElement(
	          "div",
	          { className: "panel radius" },
	          React.createElement(
	            "h1",
	            null,
	            "TagAlong Template"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "User",
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "panel radius" },
	      React.createElement(
	        "a",
	        { href: "#" },
	        React.createElement("img", { className: "img-round", src: "//placehold.it/300x300&text=[img]" })
	      ),
	      React.createElement(
	        "h5",
	        null,
	        React.createElement(
	          "a",
	          { href: "#" },
	          "Your Name"
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "section-container vertical-nav", "data-section": true, "data-options": "deep_linking: false; one_up: true" },
	        React.createElement(
	          "section",
	          { className: "section" },
	          React.createElement(
	            "h5",
	            { className: "title" },
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Section 1"
	            )
	          )
	        ),
	        React.createElement(
	          "section",
	          { className: "section" },
	          React.createElement(
	            "h5",
	            { className: "title" },
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Section 2"
	            )
	          )
	        ),
	        React.createElement(
	          "section",
	          { className: "section" },
	          React.createElement(
	            "h5",
	            { className: "title" },
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Section 3"
	            )
	          )
	        ),
	        React.createElement(
	          "section",
	          { className: "section" },
	          React.createElement(
	            "h5",
	            { className: "title" },
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Section 4"
	            )
	          )
	        ),
	        React.createElement(
	          "section",
	          { className: "section" },
	          React.createElement(
	            "h5",
	            { className: "title" },
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Section 5"
	            )
	          )
	        ),
	        React.createElement(
	          "section",
	          { className: "section" },
	          React.createElement(
	            "h5",
	            { className: "title" },
	            React.createElement(
	              "a",
	              { href: "#" },
	              "Section 6"
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Activity = __webpack_require__(6);

	module.exports = React.createClass({
	  displayName: "Activities",
	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      this.props.activities.map(function (activity) {
	        return React.createElement(
	          "div",
	          { key: activity.id },
	          React.createElement(Activity, { avatar: activity.avatar, user: activity.user, description: activity.description })
	        );
	      })
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "AdSpace",
	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "p",
	        null,
	        React.createElement("img", { src: "//placehold.it/300x440&text=[ad]" })
	      ),
	      React.createElement(
	        "p",
	        null,
	        React.createElement("img", { src: "//placehold.it/300x440&text=[ad]" })
	      )
	    );
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "Footer",
	  render: function render() {
	    return React.createElement(
	      "footer",
	      { className: "row" },
	      React.createElement(
	        "div",
	        { className: "large-12 columns" },
	        React.createElement("hr", null),
	        React.createElement(
	          "div",
	          { className: "row" },
	          React.createElement(
	            "div",
	            { className: "large-5 columns" },
	            React.createElement(
	              "p",
	              null,
	              "© Copyright Beards of Zeus."
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "large-6 columns" },
	            React.createElement(
	              "ul",
	              { className: "inline-list right" },
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Section 1"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Section 2"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Section 3"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Section 4"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "#" },
	                  "Section 5"
	                )
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "large-1 columns" },
	            React.createElement(
	              "a",
	              { href: "https://www.positivessl.com" },
	              React.createElement("img", { src: "https://www.positivessl.com/images-new/PositiveSSL_tl_trans.png", alt: "SSL Certificate", title: "SSL Certificate", border: "0" })
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "Activity",
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "row" },
	      React.createElement(
	        "div",
	        { className: "large-2 columns small-3" },
	        React.createElement("img", { className: "img-round", src: this.props.avatar })
	      ),
	      React.createElement(
	        "div",
	        { className: "large-10 columns panel radius" },
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "strong",
	            null,
	            this.props.user,
	            ":"
	          ),
	          " ",
	          this.props.description
	        ),
	        React.createElement(
	          "ul",
	          { className: "inline-list" },
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "" },
	              "Reply"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "" },
	              "Share"
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ }
/******/ ]);