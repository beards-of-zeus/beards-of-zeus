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

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || 'Gat2goCXdKhmGCGXYcPzHQ6FhM0tXJwQ';
	var AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || 'tagalong.auth0.com';
	var AUTH0_CALLBACK_URL = location.href;
	var App = __webpack_require__(1);
	React.render(React.createElement(App, { clientId: AUTH0_CLIENT_ID, domain: AUTH0_DOMAIN }), document.getElementById('login-page'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LoggedIn = __webpack_require__(2);
	var Home = __webpack_require__(12);
	module.exports = React.createClass({
	  displayName: 'App',
	  componentWillMount: function componentWillMount() {
	    this.setupAjax();
	    this.createLock();
	    this.setState({ idToken: this.getIdToken() });
	  },
	  createLock: function createLock() {
	    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
	  },
	  setupAjax: function setupAjax() {
	    $.ajaxSetup({
	      'beforeSend': function beforeSend(xhr) {
	        if (localStorage.getItem('userToken')) {
	          console.log('here');
	          xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('userToken'));
	        }
	      }
	    });
	  },
	  getIdToken: function getIdToken() {
	    var idToken = localStorage.getItem('userToken');
	    var authHash = this.lock.parseHash(window.location.hash);
	    if (!idToken && authHash) {
	      if (authHash.id_token) {
	        idToken = authHash.id_token;
	        localStorage.setItem('userToken', authHash.id_token);
	      }
	      if (authHash.error) {
	        console.log("Error signing in", authHash);
	      }
	    }
	    return idToken;
	  },
	  render: function render() {
	    if (this.state.idToken) {
	      return React.createElement(LoggedIn, { lock: this.lock, idToken: this.state.idToken });
	    } else {
	      return React.createElement(Home, { lock: this.lock });
	    }
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Main = __webpack_require__(3);
	module.exports = React.createClass({
	  displayName: 'LoggedIn',

	  logOut: function logOut() {
	    localStorage.removeItem('userToken');
	    window.location = 'https://tagalong.auth0.com/v2/logout?returnTo=http://localhost:4568';
	  },

	  getInitialState: function getInitialState() {
	    return {
	      profile: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.props.lock.getProfile(this.props.idToken, (function (err, profile) {
	      if (err) {
	        console.log("Error loading the Profile", err);
	        alert("Error loading the Profile");
	      }
	      //POST profile to API /user
	      this.setState({ profile: profile });
	    }).bind(this));
	  },

	  render: function render() {
	    if (this.state.profile) {
	      return React.createElement(
	        'div',
	        { className: 'logged-in-box auth0-box logged-in' },
	        React.createElement(
	          'button',
	          { onClick: this.logOut, className: 'btn btn-lg btn-primary' },
	          'Log Out'
	        ),
	        React.createElement('img', { src: this.state.profile.picture }),
	        React.createElement(
	          'h2',
	          null,
	          'Welcome ',
	          this.state.profile.nickname
	        ),
	        React.createElement(Main, null)
	      );
	    } else {
	      return React.createElement(
	        'div',
	        { className: 'logged-in-box auth0-box logged-in' },
	        React.createElement(
	          'h1',
	          { id: 'logo' },
	          React.createElement('img', { src: 'https://cdn.auth0.com/blog/auth0_logo_final_blue_RGB.png' })
	        )
	      );
	    }
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	//For webpack, require react components here
	'use strict';

	var Nav = __webpack_require__(4);
	var User = __webpack_require__(5);
	var Activities = __webpack_require__(6);
	var AdSpace = __webpack_require__(8);
	var Footer = __webpack_require__(9);

	module.exports = React.createClass({
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

	// React.render(<Main />, document.getElementsByTagName('Main')[0]);

/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Activity = __webpack_require__(7);

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
/* 7 */
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

/***/ },
/* 8 */
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
/* 9 */
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
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// var Nav = require('./home/nav.jsx');
	'use strict';

	var Banner = __webpack_require__(14);
	var TestimonialGroup = __webpack_require__(15);
	var Footer = __webpack_require__(9);

	module.exports = React.createClass({
	  displayName: 'Home',
	  showLock: function showLock() {
	    this.props.lock.show();
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { className: 'login-box auth0-box before' },
	        React.createElement(
	          'a',
	          { onClick: this.showLock, className: 'btn btn-primary btn-lg btn-login btn-block' },
	          'Sign In'
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'div',
	          { className: 'large-12 columns' },
	          React.createElement(Banner, null),
	          React.createElement(
	            'div',
	            { className: 'row' },
	            React.createElement(
	              'div',
	              { className: 'large-12 columns' },
	              React.createElement(TestimonialGroup, null)
	            )
	          )
	        )
	      ),
	      React.createElement(Footer, null)
	    );
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: 'Banner',
	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "large-12 hide-for-small" },
	          React.createElement(
	            "div",
	            { id: "featured", "data-orbit": true },
	            React.createElement("img", { src: "//placehold.it/1200x500&text=Slide Image 1", alt: "slide image" })
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "large-12 columns show-for-small" },
	          React.createElement("img", { src: "//placehold.it/1200x700&text=Mobile Header" })
	        )
	      ),
	      React.createElement("br", null)
	    );
	  }

	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Testimonial = __webpack_require__(16);
	module.exports = React.createClass({
	  displayName: 'TestimonialGroup',
	  render: function render() {
	    var testArray = [{ avatar: "//placehold.it/50x50&text=[img]", user: 'Macho Man', quote: 'Oh YEEEEEAH' }, { avatar: "//placehold.it/50x50&text=[img]", user: 'Jon Snow', quote: 'Winter is Coming' }, { avatar: "//placehold.it/50x50&text=[img]", user: 'Austin Powers', quote: 'Yeah Babby Yeah' }, { avatar: "//placehold.it/50x50&text=[img]", user: 'Daryl from Walking Dead', quote: 'Sorry Brother' }];
	    return React.createElement(
	      'div',
	      { className: 'row' },
	      testArray.map(function (quote) {
	        return React.createElement(
	          'div',
	          { className: 'large-3 small-12 columns', key: quote.user },
	          React.createElement(Testimonial, { avatar: quote.avatar, name: quote.user, quote: quote.quote })
	        );
	      })
	    );
	  }

	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = React.createClass({
	  displayName: 'Testimonial',
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { className: 'row person' },
	        React.createElement(
	          'div',
	          { className: 'small-4 columns' },
	          React.createElement('img', { className: 'img-round', src: this.props.avatar })
	        ),
	        React.createElement(
	          'div',
	          { className: 'small-8 columns' },
	          React.createElement(
	            'h5',
	            null,
	            this.props.name
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	          'blockquote',
	          null,
	          this.props.quote
	        )
	      )
	    );
	  }
	});

/***/ }
/******/ ]);