(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
require("./angular-modules/app");


//# sourceURL=D:/thedrinkinggame/src/main.js
},{"./angular-modules/app":8}],2:[function(require,module,exports){
"use strict";
(function(Q, W, t) {
  'use strict';
  function R(b) {
    return function() {
      var a = arguments[0],
          c;
      c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.15/" + (b ? b + "/" : "") + a;
      for (a = 1; a < arguments.length; a++) {
        c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
        var d = encodeURIComponent,
            e;
        e = arguments[a];
        e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
        c += d(e);
      }
      return Error(c);
    };
  }
  function Sa(b) {
    if (null == b || Ta(b))
      return !1;
    var a = b.length;
    return b.nodeType === qa && a ? !0 : C(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;
  }
  function r(b, a, c) {
    var d,
        e;
    if (b)
      if (G(b))
        for (d in b)
          "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
      else if (H(b) || Sa(b)) {
        var f = "object" !== typeof b;
        d = 0;
        for (e = b.length; d < e; d++)
          (f || d in b) && a.call(c, b[d], d, b);
      } else if (b.forEach && b.forEach !== r)
        b.forEach(a, c, b);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d, b);
    return b;
  }
  function Ed(b, a, c) {
    for (var d = Object.keys(b).sort(),
        e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function mc(b) {
    return function(a, c) {
      b(c, a);
    };
  }
  function Fd() {
    return ++ob;
  }
  function nc(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function w(b) {
    for (var a = b.$$hashKey,
        c = 1,
        d = arguments.length; c < d; c++) {
      var e = arguments[c];
      if (e)
        for (var f = Object.keys(e),
            g = 0,
            h = f.length; g < h; g++) {
          var l = f[g];
          b[l] = e[l];
        }
    }
    nc(b, a);
    return b;
  }
  function aa(b) {
    return parseInt(b, 10);
  }
  function Ob(b, a) {
    return w(Object.create(b), a);
  }
  function E() {}
  function ra(b) {
    return b;
  }
  function ea(b) {
    return function() {
      return b;
    };
  }
  function x(b) {
    return "undefined" === typeof b;
  }
  function y(b) {
    return "undefined" !== typeof b;
  }
  function J(b) {
    return null !== b && "object" === typeof b;
  }
  function C(b) {
    return "string" === typeof b;
  }
  function Y(b) {
    return "number" === typeof b;
  }
  function ga(b) {
    return "[object Date]" === Ca.call(b);
  }
  function G(b) {
    return "function" === typeof b;
  }
  function Ua(b) {
    return "[object RegExp]" === Ca.call(b);
  }
  function Ta(b) {
    return b && b.window === b;
  }
  function Va(b) {
    return b && b.$evalAsync && b.$watch;
  }
  function Wa(b) {
    return "boolean" === typeof b;
  }
  function oc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }
  function Gd(b) {
    var a = {};
    b = b.split(",");
    var c;
    for (c = 0; c < b.length; c++)
      a[b[c]] = !0;
    return a;
  }
  function va(b) {
    return z(b.nodeName || b[0] && b[0].nodeName);
  }
  function Xa(b, a) {
    var c = b.indexOf(a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function Da(b, a, c, d) {
    if (Ta(b) || Va(b))
      throw Ja("cpws");
    if (a) {
      if (b === a)
        throw Ja("cpi");
      c = c || [];
      d = d || [];
      if (J(b)) {
        var e = c.indexOf(b);
        if (-1 !== e)
          return d[e];
        c.push(b);
        d.push(a);
      }
      if (H(b))
        for (var f = a.length = 0; f < b.length; f++)
          e = Da(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
      else {
        var g = a.$$hashKey;
        H(a) ? a.length = 0 : r(a, function(b, c) {
          delete a[c];
        });
        for (f in b)
          b.hasOwnProperty(f) && (e = Da(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
        nc(a, g);
      }
    } else if (a = b)
      H(b) ? a = Da(b, [], c, d) : ga(b) ? a = new Date(b.getTime()) : Ua(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : J(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Da(b, e, c, d));
    return a;
  }
  function sa(b, a) {
    if (H(b)) {
      a = a || [];
      for (var c = 0,
          d = b.length; c < d; c++)
        a[c] = b[c];
    } else if (J(b))
      for (c in a = a || {}, b)
        if ("$" !== c.charAt(0) || "$" !== c.charAt(1))
          a[c] = b[c];
    return a || b;
  }
  function ha(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b,
        d;
    if (c == typeof a && "object" == c)
      if (H(b)) {
        if (!H(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!ha(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (ga(b))
          return ga(a) ? ha(b.getTime(), a.getTime()) : !1;
        if (Ua(b))
          return Ua(a) ? b.toString() == a.toString() : !1;
        if (Va(b) || Va(a) || Ta(b) || Ta(a) || H(a) || ga(a) || Ua(a))
          return !1;
        c = {};
        for (d in b)
          if ("$" !== d.charAt(0) && !G(b[d])) {
            if (!ha(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== t && !G(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function Ya(b, a, c) {
    return b.concat(Za.call(a, c));
  }
  function pc(b, a) {
    var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
    return !G(a) || a instanceof RegExp ? a : c.length ? function() {
      return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c);
    } : function() {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function Hd(b, a) {
    var c = a;
    "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Ta(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE");
    return c;
  }
  function $a(b, a) {
    if ("undefined" === typeof b)
      return t;
    Y(a) || (a = a ? 2 : null);
    return JSON.stringify(b, Hd, a);
  }
  function qc(b) {
    return C(b) ? JSON.parse(b) : b;
  }
  function wa(b) {
    b = A(b).clone();
    try {
      b.empty();
    } catch (a) {}
    var c = A("<div>").append(b).html();
    try {
      return b[0].nodeType === pb ? z(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
        return "<" + z(b);
      });
    } catch (d) {
      return z(c);
    }
  }
  function rc(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {}
  }
  function sc(b) {
    var a = {},
        c,
        d;
    r((b || "").split("&"), function(b) {
      b && (c = b.replace(/\+/g, "%20").split("="), d = rc(c[0]), y(d) && (b = y(c[1]) ? rc(c[1]) : !0, tc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b));
    });
    return a;
  }
  function Pb(b) {
    var a = [];
    r(b, function(b, d) {
      H(b) ? r(b, function(b) {
        a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)));
      }) : a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)));
    });
    return a.length ? a.join("&") : "";
  }
  function qb(b) {
    return Ea(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }
  function Ea(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+");
  }
  function Id(b, a) {
    var c,
        d,
        e = rb.length;
    b = A(b);
    for (d = 0; d < e; ++d)
      if (c = rb[d] + a, C(c = b.attr(c)))
        return c;
    return null;
  }
  function Jd(b, a) {
    var c,
        d,
        e = {};
    r(rb, function(a) {
      a += "app";
      !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
    });
    r(rb, function(a) {
      a += "app";
      var e;
      !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a));
    });
    c && (e.strictDi = null !== Id(c, "strict-di"), a(c, d ? [d] : [], e));
  }
  function uc(b, a, c) {
    J(c) || (c = {});
    c = w({strictDi: !1}, c);
    var d = function() {
      b = A(b);
      if (b.injector()) {
        var d = b[0] === W ? "document" : wa(b);
        throw Ja("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }
      a = a || [];
      a.unshift(["$provide", function(a) {
        a.value("$rootElement", b);
      }]);
      c.debugInfoEnabled && a.push(["$compileProvider", function(a) {
        a.debugInfoEnabled(!0);
      }]);
      a.unshift("ng");
      d = ab(a, c.strictDi);
      d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
        a.$apply(function() {
          b.data("$injector", d);
          c(b)(a);
        });
      }]);
      return d;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;
    Q && e.test(Q.name) && (c.debugInfoEnabled = !0, Q.name = Q.name.replace(e, ""));
    if (Q && !f.test(Q.name))
      return d();
    Q.name = Q.name.replace(f, "");
    ca.resumeBootstrap = function(b) {
      r(b, function(b) {
        a.push(b);
      });
      return d();
    };
    G(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap();
  }
  function Kd() {
    Q.name = "NG_ENABLE_DEBUG_INFO!" + Q.name;
    Q.location.reload();
  }
  function Ld(b) {
    b = ca.element(b).injector();
    if (!b)
      throw Ja("test");
    return b.get("$$testability");
  }
  function vc(b, a) {
    a = a || "_";
    return b.replace(Md, function(b, d) {
      return (d ? a : "") + b.toLowerCase();
    });
  }
  function Nd() {
    var b;
    wc || ((ta = Q.jQuery) && ta.fn.on ? (A = ta, w(ta.fn, {
      scope: Ka.scope,
      isolateScope: Ka.isolateScope,
      controller: Ka.controller,
      injector: Ka.injector,
      inheritedData: Ka.inheritedData
    }), b = ta.cleanData, ta.cleanData = function(a) {
      var c;
      if (Qb)
        Qb = !1;
      else
        for (var d = 0,
            e; null != (e = a[d]); d++)
          (c = ta._data(e, "events")) && c.$destroy && ta(e).triggerHandler("$destroy");
      b(a);
    }) : A = T, ca.element = A, wc = !0);
  }
  function Rb(b, a, c) {
    if (!b)
      throw Ja("areq", a || "?", c || "required");
    return b;
  }
  function sb(b, a, c) {
    c && H(b) && (b = b[b.length - 1]);
    Rb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
    return b;
  }
  function La(b, a) {
    if ("hasOwnProperty" === b)
      throw Ja("badname", a);
  }
  function xc(b, a, c) {
    if (!a)
      return b;
    a = a.split(".");
    for (var d,
        e = b,
        f = a.length,
        g = 0; g < f; g++)
      d = a[g], b && (b = (e = b)[d]);
    return !c && G(b) ? pc(e, b) : b;
  }
  function tb(b) {
    var a = b[0];
    b = b[b.length - 1];
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return A(c);
  }
  function ia() {
    return Object.create(null);
  }
  function Od(b) {
    function a(a, b, c) {
      return a[b] || (a[b] = c());
    }
    var c = R("$injector"),
        d = R("ng");
    b = a(b, "angular", Object);
    b.$$minErr = b.$$minErr || R;
    return a(b, "module", function() {
      var b = {};
      return function(f, g, h) {
        if ("hasOwnProperty" === f)
          throw d("badname", "module");
        g && b.hasOwnProperty(f) && (b[f] = null);
        return a(b, f, function() {
          function a(c, d, e, f) {
            f || (f = b);
            return function() {
              f[e || "push"]([c, d, arguments]);
              return u;
            };
          }
          if (!g)
            throw c("nomod", f);
          var b = [],
              d = [],
              e = [],
              q = a("$injector", "invoke", "push", d),
              u = {
                _invokeQueue: b,
                _configBlocks: d,
                _runBlocks: e,
                requires: g,
                name: f,
                provider: a("$provide", "provider"),
                factory: a("$provide", "factory"),
                service: a("$provide", "service"),
                value: a("$provide", "value"),
                constant: a("$provide", "constant", "unshift"),
                animation: a("$animateProvider", "register"),
                filter: a("$filterProvider", "register"),
                controller: a("$controllerProvider", "register"),
                directive: a("$compileProvider", "directive"),
                config: q,
                run: function(a) {
                  e.push(a);
                  return this;
                }
              };
          h && q(h);
          return u;
        });
      };
    });
  }
  function Pd(b) {
    w(b, {
      bootstrap: uc,
      copy: Da,
      extend: w,
      equals: ha,
      element: A,
      forEach: r,
      injector: ab,
      noop: E,
      bind: pc,
      toJson: $a,
      fromJson: qc,
      identity: ra,
      isUndefined: x,
      isDefined: y,
      isString: C,
      isFunction: G,
      isObject: J,
      isNumber: Y,
      isElement: oc,
      isArray: H,
      version: Qd,
      isDate: ga,
      lowercase: z,
      uppercase: ub,
      callbacks: {counter: 0},
      getTestability: Ld,
      $$minErr: R,
      $$csp: bb,
      reloadWithDebugInfo: Kd
    });
    cb = Od(Q);
    try {
      cb("ngLocale");
    } catch (a) {
      cb("ngLocale", []).provider("$locale", Rd);
    }
    cb("ng", ["ngLocale"], ["$provide", function(a) {
      a.provider({$$sanitizeUri: Sd});
      a.provider("$compile", yc).directive({
        a: Td,
        input: zc,
        textarea: zc,
        form: Ud,
        script: Vd,
        select: Wd,
        style: Xd,
        option: Yd,
        ngBind: Zd,
        ngBindHtml: $d,
        ngBindTemplate: ae,
        ngClass: be,
        ngClassEven: ce,
        ngClassOdd: de,
        ngCloak: ee,
        ngController: fe,
        ngForm: ge,
        ngHide: he,
        ngIf: ie,
        ngInclude: je,
        ngInit: ke,
        ngNonBindable: le,
        ngPluralize: me,
        ngRepeat: ne,
        ngShow: oe,
        ngStyle: pe,
        ngSwitch: qe,
        ngSwitchWhen: re,
        ngSwitchDefault: se,
        ngOptions: te,
        ngTransclude: ue,
        ngModel: ve,
        ngList: we,
        ngChange: xe,
        pattern: Ac,
        ngPattern: Ac,
        required: Bc,
        ngRequired: Bc,
        minlength: Cc,
        ngMinlength: Cc,
        maxlength: Dc,
        ngMaxlength: Dc,
        ngValue: ye,
        ngModelOptions: ze
      }).directive({ngInclude: Ae}).directive(vb).directive(Ec);
      a.provider({
        $anchorScroll: Be,
        $animate: Ce,
        $browser: De,
        $cacheFactory: Ee,
        $controller: Fe,
        $document: Ge,
        $exceptionHandler: He,
        $filter: Fc,
        $interpolate: Ie,
        $interval: Je,
        $http: Ke,
        $httpBackend: Le,
        $location: Me,
        $log: Ne,
        $parse: Oe,
        $rootScope: Pe,
        $q: Qe,
        $$q: Re,
        $sce: Se,
        $sceDelegate: Te,
        $sniffer: Ue,
        $templateCache: Ve,
        $templateRequest: We,
        $$testability: Xe,
        $timeout: Ye,
        $window: Ze,
        $$rAF: $e,
        $$asyncCallback: af,
        $$jqLite: bf
      });
    }]);
  }
  function db(b) {
    return b.replace(cf, function(a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(df, "Moz$1");
  }
  function Gc(b) {
    b = b.nodeType;
    return b === qa || !b || 9 === b;
  }
  function Hc(b, a) {
    var c,
        d,
        e = a.createDocumentFragment(),
        f = [];
    if (Sb.test(b)) {
      c = c || e.appendChild(a.createElement("div"));
      d = (ef.exec(b) || ["", ""])[1].toLowerCase();
      d = ja[d] || ja._default;
      c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
      for (d = d[0]; d--; )
        c = c.lastChild;
      f = Ya(f, c.childNodes);
      c = e.firstChild;
      c.textContent = "";
    } else
      f.push(a.createTextNode(b));
    e.textContent = "";
    e.innerHTML = "";
    r(f, function(a) {
      e.appendChild(a);
    });
    return e;
  }
  function T(b) {
    if (b instanceof T)
      return b;
    var a;
    C(b) && (b = N(b), a = !0);
    if (!(this instanceof T)) {
      if (a && "<" != b.charAt(0))
        throw Tb("nosel");
      return new T(b);
    }
    if (a) {
      a = W;
      var c;
      b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Hc(b, a)) ? c.childNodes : [];
    }
    Ic(this, b);
  }
  function Ub(b) {
    return b.cloneNode(!0);
  }
  function wb(b, a) {
    a || xb(b);
    if (b.querySelectorAll)
      for (var c = b.querySelectorAll("*"),
          d = 0,
          e = c.length; d < e; d++)
        xb(c[d]);
  }
  function Jc(b, a, c, d) {
    if (y(d))
      throw Tb("offargs");
    var e = (d = yb(b)) && d.events,
        f = d && d.handle;
    if (f)
      if (a)
        r(a.split(" "), function(a) {
          if (y(c)) {
            var d = e[a];
            Xa(d || [], c);
            if (d && 0 < d.length)
              return;
          }
          b.removeEventListener(a, f, !1);
          delete e[a];
        });
      else
        for (a in e)
          "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a];
  }
  function xb(b, a) {
    var c = b.ng339,
        d = c && zb[c];
    d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Jc(b)), delete zb[c], b.ng339 = t));
  }
  function yb(b, a) {
    var c = b.ng339,
        c = c && zb[c];
    a && !c && (b.ng339 = c = ++hf, c = zb[c] = {
      events: {},
      data: {},
      handle: t
    });
    return c;
  }
  function Vb(b, a, c) {
    if (Gc(b)) {
      var d = y(c),
          e = !d && a && !J(a),
          f = !a;
      b = (b = yb(b, !e)) && b.data;
      if (d)
        b[a] = c;
      else {
        if (f)
          return b;
        if (e)
          return b && b[a];
        w(b, a);
      }
    }
  }
  function Ab(b, a) {
    return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
  }
  function Bb(b, a) {
    a && b.setAttribute && r(a.split(" "), function(a) {
      b.setAttribute("class", N((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + N(a) + " ", " ")));
    });
  }
  function Cb(b, a) {
    if (a && b.setAttribute) {
      var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      r(a.split(" "), function(a) {
        a = N(a);
        -1 === c.indexOf(" " + a + " ") && (c += a + " ");
      });
      b.setAttribute("class", N(c));
    }
  }
  function Ic(b, a) {
    if (a)
      if (a.nodeType)
        b[b.length++] = a;
      else {
        var c = a.length;
        if ("number" === typeof c && a.window !== a) {
          if (c)
            for (var d = 0; d < c; d++)
              b[b.length++] = a[d];
        } else
          b[b.length++] = a;
      }
  }
  function Kc(b, a) {
    return Db(b, "$" + (a || "ngController") + "Controller");
  }
  function Db(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);
    for (a = H(a) ? a : [a]; b; ) {
      for (var d = 0,
          e = a.length; d < e; d++)
        if ((c = A.data(b, a[d])) !== t)
          return c;
      b = b.parentNode || 11 === b.nodeType && b.host;
    }
  }
  function Lc(b) {
    for (wb(b, !0); b.firstChild; )
      b.removeChild(b.firstChild);
  }
  function Mc(b, a) {
    a || wb(b);
    var c = b.parentNode;
    c && c.removeChild(b);
  }
  function jf(b, a) {
    a = a || Q;
    if ("complete" === a.document.readyState)
      a.setTimeout(b);
    else
      A(a).on("load", b);
  }
  function Nc(b, a) {
    var c = Eb[a.toLowerCase()];
    return c && Oc[va(b)] && c;
  }
  function kf(b, a) {
    var c = b.nodeName;
    return ("INPUT" === c || "TEXTAREA" === c) && Pc[a];
  }
  function lf(b, a) {
    var c = function(c, e) {
      c.isDefaultPrevented = function() {
        return c.defaultPrevented;
      };
      var f = a[e || c.type],
          g = f ? f.length : 0;
      if (g) {
        if (x(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;
          c.stopImmediatePropagation = function() {
            c.immediatePropagationStopped = !0;
            c.stopPropagation && c.stopPropagation();
            h && h.call(c);
          };
        }
        c.isImmediatePropagationStopped = function() {
          return !0 === c.immediatePropagationStopped;
        };
        1 < g && (f = sa(f));
        for (var l = 0; l < g; l++)
          c.isImmediatePropagationStopped() || f[l].call(b, c);
      }
    };
    c.elem = b;
    return c;
  }
  function bf() {
    this.$get = function() {
      return w(T, {
        hasClass: function(b, a) {
          b.attr && (b = b[0]);
          return Ab(b, a);
        },
        addClass: function(b, a) {
          b.attr && (b = b[0]);
          return Cb(b, a);
        },
        removeClass: function(b, a) {
          b.attr && (b = b[0]);
          return Bb(b, a);
        }
      });
    };
  }
  function Ma(b, a) {
    var c = b && b.$$hashKey;
    if (c)
      return "function" === typeof c && (c = b.$$hashKey()), c;
    c = typeof b;
    return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b;
  }
  function eb(b, a) {
    if (a) {
      var c = 0;
      this.nextUid = function() {
        return ++c;
      };
    }
    r(b, this.put, this);
  }
  function mf(b) {
    return (b = b.toString().replace(Qc, "").match(Rc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }
  function ab(b, a) {
    function c(a) {
      return function(b, c) {
        if (J(b))
          r(b, mc(a));
        else
          return a(b, c);
      };
    }
    function d(a, b) {
      La(a, "service");
      if (G(b) || H(b))
        b = q.instantiate(b);
      if (!b.$get)
        throw Fa("pget", a);
      return p[a + "Provider"] = b;
    }
    function e(a, b) {
      return function() {
        var c = s.invoke(b, this);
        if (x(c))
          throw Fa("undef", a);
        return c;
      };
    }
    function f(a, b, c) {
      return d(a, {$get: !1 !== c ? e(a, b) : b});
    }
    function g(a) {
      var b = [],
          c;
      r(a, function(a) {
        function d(a) {
          var b,
              c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b],
                f = q.get(e[0]);
            f[e[1]].apply(f, e[2]);
          }
        }
        if (!n.get(a)) {
          n.put(a, !0);
          try {
            C(a) ? (c = cb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : sb(a, "module");
          } catch (e) {
            throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Fa("modulerr", a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }
    function h(b, c) {
      function d(a, e) {
        if (b.hasOwnProperty(a)) {
          if (b[a] === l)
            throw Fa("cdep", a + " <- " + k.join(" <- "));
          return b[a];
        }
        try {
          return k.unshift(a), b[a] = l, b[a] = c(a, e);
        } catch (f) {
          throw b[a] === l && delete b[a], f;
        } finally {
          k.shift();
        }
      }
      function e(b, c, f, g) {
        "string" === typeof f && (g = f, f = null);
        var k = [],
            h = ab.$$annotate(b, a, g),
            l,
            q,
            p;
        q = 0;
        for (l = h.length; q < l; q++) {
          p = h[q];
          if ("string" !== typeof p)
            throw Fa("itkn", p);
          k.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g));
        }
        H(b) && (b = b[l]);
        return b.apply(c, k);
      }
      return {
        invoke: e,
        instantiate: function(a, b, c) {
          var d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null);
          a = e(a, d, b, c);
          return J(a) || G(a) ? a : d;
        },
        get: d,
        annotate: ab.$$annotate,
        has: function(a) {
          return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
        }
      };
    }
    a = !0 === a;
    var l = {},
        k = [],
        n = new eb([], !0),
        p = {$provide: {
            provider: c(d),
            factory: c(f),
            service: c(function(a, b) {
              return f(a, ["$injector", function(a) {
                return a.instantiate(b);
              }]);
            }),
            value: c(function(a, b) {
              return f(a, ea(b), !1);
            }),
            constant: c(function(a, b) {
              La(a, "constant");
              p[a] = b;
              u[a] = b;
            }),
            decorator: function(a, b) {
              var c = q.get(a + "Provider"),
                  d = c.$get;
              c.$get = function() {
                var a = s.invoke(d, c);
                return s.invoke(b, null, {$delegate: a});
              };
            }
          }},
        q = p.$injector = h(p, function(a, b) {
          ca.isString(b) && k.push(b);
          throw Fa("unpr", k.join(" <- "));
        }),
        u = {},
        s = u.$injector = h(u, function(a, b) {
          var c = q.get(a + "Provider", b);
          return s.invoke(c.$get, c, t, a);
        });
    r(g(b), function(a) {
      s.invoke(a || E);
    });
    return s;
  }
  function Be() {
    var b = !0;
    this.disableAutoScrolling = function() {
      b = !1;
    };
    this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
      function e(a) {
        var b = null;
        Array.prototype.some.call(a, function(a) {
          if ("a" === va(a))
            return b = a, !0;
        });
        return b;
      }
      function f(b) {
        if (b) {
          b.scrollIntoView();
          var c;
          c = g.yOffset;
          G(c) ? c = c() : oc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);
          c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
        } else
          a.scrollTo(0, 0);
      }
      function g() {
        var a = c.hash(),
            b;
        a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }
      var h = a.document;
      b && d.$watch(function() {
        return c.hash();
      }, function(a, b) {
        a === b && "" === a || jf(function() {
          d.$evalAsync(g);
        });
      });
      return g;
    }];
  }
  function af() {
    this.$get = ["$$rAF", "$timeout", function(b, a) {
      return b.supported ? function(a) {
        return b(a);
      } : function(b) {
        return a(b, 0, !1);
      };
    }];
  }
  function nf(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, Za.call(arguments, 1));
      } finally {
        if (m--, 0 === m)
          for (; F.length; )
            try {
              F.pop()();
            } catch (b) {
              c.error(b);
            }
      }
    }
    function f(a, b) {
      (function da() {
        r(Z, function(a) {
          a();
        });
        L = b(da, a);
      })();
    }
    function g() {
      h();
      l();
    }
    function h() {
      a: {
        try {
          B = u.state;
          break a;
        } catch (a) {}
        B = void 0;
      }
      B = x(B) ? null : B;
      ha(B, O) && (B = O);
      O = B;
    }
    function l() {
      if (D !== n.url() || I !== B)
        D = n.url(), I = B, r(X, function(a) {
          a(n.url(), B);
        });
    }
    function k(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }
    var n = this,
        p = a[0],
        q = b.location,
        u = b.history,
        s = b.setTimeout,
        M = b.clearTimeout,
        v = {};
    n.isMock = !1;
    var m = 0,
        F = [];
    n.$$completeOutstandingRequest = e;
    n.$$incOutstandingRequestCount = function() {
      m++;
    };
    n.notifyWhenNoOutstandingRequests = function(a) {
      r(Z, function(a) {
        a();
      });
      0 === m ? a() : F.push(a);
    };
    var Z = [],
        L;
    n.addPollFn = function(a) {
      x(L) && f(100, s);
      Z.push(a);
      return a;
    };
    var B,
        I,
        D = q.href,
        S = a.find("base"),
        P = null;
    h();
    I = B;
    n.url = function(a, c, e) {
      x(e) && (e = null);
      q !== b.location && (q = b.location);
      u !== b.history && (u = b.history);
      if (a) {
        var f = I === e;
        if (D === a && (!d.history || f))
          return n;
        var g = D && Ga(D) === Ga(a);
        D = a;
        I = e;
        !d.history || g && f ? (g || (P = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), h(), I = B);
        return n;
      }
      return P || q.href.replace(/%27/g, "'");
    };
    n.state = function() {
      return B;
    };
    var X = [],
        ba = !1,
        O = null;
    n.onUrlChange = function(a) {
      if (!ba) {
        if (d.history)
          A(b).on("popstate", g);
        A(b).on("hashchange", g);
        ba = !0;
      }
      X.push(a);
      return a;
    };
    n.$$checkUrlChange = l;
    n.baseHref = function() {
      var a = S.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };
    var fa = {},
        y = "",
        ka = n.baseHref();
    n.cookies = function(a, b) {
      var d,
          e,
          f,
          g;
      if (a)
        b === t ? p.cookie = encodeURIComponent(a) + "=;path=" + ka + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : C(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + ka).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
      else {
        if (p.cookie !== y)
          for (y = p.cookie, d = y.split("; "), fa = {}, f = 0; f < d.length; f++)
            e = d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), fa[a] === t && (fa[a] = k(e.substring(g + 1))));
        return fa;
      }
    };
    n.defer = function(a, b) {
      var c;
      m++;
      c = s(function() {
        delete v[c];
        e(a);
      }, b || 0);
      v[c] = !0;
      return c;
    };
    n.defer.cancel = function(a) {
      return v[a] ? (delete v[a], M(a), e(E), !0) : !1;
    };
  }
  function De() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
      return new nf(b, d, a, c);
    }];
  }
  function Ee() {
    this.$get = function() {
      function b(b, d) {
        function e(a) {
          a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
        }
        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw R("$cacheFactory")("iid", b);
        var g = 0,
            h = w({}, d, {id: b}),
            l = {},
            k = d && d.capacity || Number.MAX_VALUE,
            n = {},
            p = null,
            q = null;
        return a[b] = {
          put: function(a, b) {
            if (k < Number.MAX_VALUE) {
              var c = n[a] || (n[a] = {key: a});
              e(c);
            }
            if (!x(b))
              return a in l || g++, l[a] = b, g > k && this.remove(q.key), b;
          },
          get: function(a) {
            if (k < Number.MAX_VALUE) {
              var b = n[a];
              if (!b)
                return;
              e(b);
            }
            return l[a];
          },
          remove: function(a) {
            if (k < Number.MAX_VALUE) {
              var b = n[a];
              if (!b)
                return;
              b == p && (p = b.p);
              b == q && (q = b.n);
              f(b.n, b.p);
              delete n[a];
            }
            delete l[a];
            g--;
          },
          removeAll: function() {
            l = {};
            g = 0;
            n = {};
            p = q = null;
          },
          destroy: function() {
            n = h = l = null;
            delete a[b];
          },
          info: function() {
            return w({}, h, {size: g});
          }
        };
      }
      var a = {};
      b.info = function() {
        var b = {};
        r(a, function(a, e) {
          b[e] = a.info();
        });
        return b;
      };
      b.get = function(b) {
        return a[b];
      };
      return b;
    };
  }
  function Ve() {
    this.$get = ["$cacheFactory", function(b) {
      return b("templates");
    }];
  }
  function yc(b, a) {
    function c(a, b) {
      var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
          d = {};
      r(a, function(a, e) {
        var f = a.match(c);
        if (!f)
          throw la("iscp", b, e, a);
        d[e] = {
          mode: f[1][0],
          collection: "*" === f[2],
          optional: "?" === f[3],
          attrName: f[4] || e
        };
      });
      return d;
    }
    var d = {},
        e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        g = Gd("ngSrc,ngSrcset,src,srcset"),
        h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        l = /^(on[a-z]+|formaction)$/;
    this.directive = function p(a, e) {
      La(a, "directive");
      C(a) ? (Rb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function(b, e) {
        var f = [];
        r(d[a], function(d, g) {
          try {
            var h = b.invoke(d);
            G(h) ? h = {compile: ea(h)} : !h.compile && h.link && (h.compile = ea(h.link));
            h.priority = h.priority || 0;
            h.index = g;
            h.name = h.name || a;
            h.require = h.require || h.controller && h.name;
            h.restrict = h.restrict || "EA";
            J(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
            f.push(h);
          } catch (k) {
            e(k);
          }
        });
        return f;
      }])), d[a].push(e)) : r(a, mc(p));
      return this;
    };
    this.aHrefSanitizationWhitelist = function(b) {
      return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function(b) {
      return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    var k = !0;
    this.debugInfoEnabled = function(a) {
      return y(a) ? (k = a, this) : k;
    };
    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, s, M, v, m, F, Z, L, B) {
      function I(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }
      function D(a, b, c, d, e) {
        a instanceof A || (a = A(a));
        r(a, function(b, c) {
          b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0]);
        });
        var f = S(a, b, a, c, d, e);
        D.$$addScopeClass(a);
        var g = null;
        return function(b, c, d) {
          Rb(b, "scope");
          d = d || {};
          var e = d.parentBoundTranscludeFn,
              h = d.transcludeControllers;
          d = d.futureParentElement;
          e && e.$$boundTransclude && (e = e.$$boundTransclude);
          g || (g = (d = d && d[0]) ? "foreignobject" !== va(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
          d = "html" !== g ? A(Xb(g, A("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;
          if (h)
            for (var k in h)
              d.data("$" + k + "Controller", h[k].instance);
          D.$$addScopeInfo(d, b);
          c && c(d, b);
          f && f(b, d, d, e);
          return d;
        };
      }
      function S(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f,
              k,
              l,
              q,
              p,
              s,
              M;
          if (m)
            for (M = Array(c.length), q = 0; q < h.length; q += 3)
              f = h[q], M[f] = c[f];
          else
            M = c;
          q = 0;
          for (p = h.length; q < p; )
            k = M[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (l = a.$new(), D.$$addScopeInfo(A(k), l)) : l = a, s = c.transcludeOnThisElement ? P(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? P(a, b) : null, c(f, l, k, d, s)) : f && f(a, k.childNodes, t, e);
        }
        for (var h = [],
            k,
            l,
            q,
            p,
            m,
            s = 0; s < a.length; s++) {
          k = new Yb;
          l = X(a[s], [], k, 0 === s ? d : t, e);
          (f = l.length ? fa(l, a[s], k, b, c, null, [], [], f) : null) && f.scope && D.$$addScopeClass(k.$$element);
          k = f && f.terminal || !(q = a[s].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
          if (f || k)
            h.push(s, f, k), p = !0, m = m || f;
          f = null;
        }
        return p ? g : null;
      }
      function P(a, b, c, d) {
        return function(d, e, f, g, h) {
          d || (d = a.$new(!1, h), d.$$transcluded = !0);
          return b(d, e, {
            parentBoundTranscludeFn: c,
            transcludeControllers: f,
            futureParentElement: g
          });
        };
      }
      function X(a, b, c, d, g) {
        var h = c.$attr,
            k;
        switch (a.nodeType) {
          case qa:
            ka(b, xa(va(a)), "E", d, g);
            for (var l,
                q,
                p,
                m = a.attributes,
                s = 0,
                M = m && m.length; s < M; s++) {
              var u = !1,
                  L = !1;
              l = m[s];
              k = l.name;
              q = N(l.value);
              l = xa(k);
              if (p = U.test(l))
                k = k.replace(Sc, "").substr(8).replace(/_(.)/g, function(a, b) {
                  return b.toUpperCase();
                });
              var B = l.replace(/(Start|End)$/, "");
              x(B) && l === B + "Start" && (u = k, L = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
              l = xa(k.toLowerCase());
              h[l] = k;
              if (p || !c.hasOwnProperty(l))
                c[l] = q, Nc(a, l) && (c[l] = !0);
              Oa(a, b, q, l, p);
              ka(b, l, "A", d, g, u, L);
            }
            a = a.className;
            J(a) && (a = a.animVal);
            if (C(a) && "" !== a)
              for (; k = f.exec(a); )
                l = xa(k[2]), ka(b, l, "C", d, g) && (c[l] = N(k[3])), a = a.substr(k.index + k[0].length);
            break;
          case pb:
            za(b, a.nodeValue);
            break;
          case 8:
            try {
              if (k = e.exec(a.nodeValue))
                l = xa(k[1]), ka(b, l, "M", d, g) && (c[l] = N(k[2]));
            } catch (v) {}
        }
        b.sort(da);
        return b;
      }
      function ba(a, b, c) {
        var d = [],
            e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a)
              throw la("uterdir", b, c);
            a.nodeType == qa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling;
          } while (0 < e);
        } else
          d.push(a);
        return A(d);
      }
      function O(a, b, c) {
        return function(d, e, f, g, h) {
          e = ba(e[0], b, c);
          return a(d, e, f, g, h);
        };
      }
      function fa(a, d, e, f, g, k, l, p, m) {
        function s(a, b, c, d) {
          if (a) {
            c && (a = O(a, c, d));
            a.require = K.require;
            a.directiveName = da;
            if (P === K || K.$$isolateScope)
              a = Y(a, {isolateScope: !0});
            l.push(a);
          }
          if (b) {
            c && (b = O(b, c, d));
            b.require = K.require;
            b.directiveName = da;
            if (P === K || K.$$isolateScope)
              b = Y(b, {isolateScope: !0});
            p.push(b);
          }
        }
        function L(a, b, c, d) {
          var e,
              f = "data",
              g = !1,
              k = c,
              l;
          if (C(b)) {
            l = b.match(h);
            b = b.substring(l[0].length);
            l[3] && (l[1] ? l[3] = null : l[1] = l[3]);
            "^" === l[1] ? f = "inheritedData" : "^^" === l[1] && (f = "inheritedData", k = c.parent());
            "?" === l[2] && (g = !0);
            e = null;
            d && "data" === f && (e = d[b]) && (e = e.instance);
            e = e || k[f]("$" + b + "Controller");
            if (!e && !g)
              throw la("ctreq", b, a);
            return e || null;
          }
          H(b) && (e = [], r(b, function(b) {
            e.push(L(a, b, c, d));
          }));
          return e;
        }
        function B(a, c, f, g, h) {
          function k(a, b, c) {
            var d;
            Va(a) || (c = b, b = a, a = t);
            E && (d = F);
            c || (c = E ? X.parent() : X);
            return h(a, b, d, c, Wb);
          }
          var m,
              s,
              u,
              I,
              F,
              gb,
              X,
              O;
          d === f ? (O = e, X = e.$$element) : (X = A(f), O = new Yb(X, e));
          P && (I = c.$new(!0));
          h && (gb = k, gb.$$boundTransclude = h);
          S && (Z = {}, F = {}, r(S, function(a) {
            var b = {
              $scope: a === P || a.$$isolateScope ? I : c,
              $element: X,
              $attrs: O,
              $transclude: gb
            };
            u = a.controller;
            "@" == u && (u = O[a.name]);
            b = v(u, b, !0, a.controllerAs);
            F[a.name] = b;
            E || X.data("$" + a.name + "Controller", b.instance);
            Z[a.name] = b;
          }));
          if (P) {
            D.$$addScopeInfo(X, I, !0, !(ma && (ma === P || ma === P.$$originalDirective)));
            D.$$addScopeClass(X, !0);
            g = Z && Z[P.name];
            var ba = I;
            g && g.identifier && !0 === P.bindToController && (ba = g.instance);
            r(I.$$isolateBindings = P.$$isolateBindings, function(a, d) {
              var e = a.attrName,
                  f = a.optional,
                  g,
                  h,
                  k,
                  l;
              switch (a.mode) {
                case "@":
                  O.$observe(e, function(a) {
                    ba[d] = a;
                  });
                  O.$$observers[e].$$scope = c;
                  O[e] && (ba[d] = b(O[e])(c));
                  break;
                case "=":
                  if (f && !O[e])
                    break;
                  h = M(O[e]);
                  l = h.literal ? ha : function(a, b) {
                    return a === b || a !== a && b !== b;
                  };
                  k = h.assign || function() {
                    g = ba[d] = h(c);
                    throw la("nonassign", O[e], P.name);
                  };
                  g = ba[d] = h(c);
                  f = function(a) {
                    l(a, ba[d]) || (l(a, g) ? k(c, a = ba[d]) : ba[d] = a);
                    return g = a;
                  };
                  f.$stateful = !0;
                  f = a.collection ? c.$watchCollection(O[e], f) : c.$watch(M(O[e], f), null, h.literal);
                  I.$on("$destroy", f);
                  break;
                case "&":
                  h = M(O[e]), ba[d] = function(a) {
                    return h(c, a);
                  };
              }
            });
          }
          Z && (r(Z, function(a) {
            a();
          }), Z = null);
          g = 0;
          for (m = l.length; g < m; g++)
            s = l[g], $(s, s.isolateScope ? I : c, X, O, s.require && L(s.directiveName, s.require, X, F), gb);
          var Wb = c;
          P && (P.template || null === P.templateUrl) && (Wb = I);
          a && a(Wb, f.childNodes, t, h);
          for (g = p.length - 1; 0 <= g; g--)
            s = p[g], $(s, s.isolateScope ? I : c, X, O, s.require && L(s.directiveName, s.require, X, F), gb);
        }
        m = m || {};
        for (var I = -Number.MAX_VALUE,
            F,
            S = m.controllerDirectives,
            Z,
            P = m.newIsolateScopeDirective,
            ma = m.templateDirective,
            fa = m.nonTlbTranscludeDirective,
            ka = !1,
            x = !1,
            E = m.hasElementTranscludeDirective,
            w = e.$$element = A(d),
            K,
            da,
            V,
            fb = f,
            za,
            z = 0,
            Q = a.length; z < Q; z++) {
          K = a[z];
          var Oa = K.$$start,
              U = K.$$end;
          Oa && (w = ba(d, Oa, U));
          V = t;
          if (I > K.priority)
            break;
          if (V = K.scope)
            K.templateUrl || (J(V) ? (Na("new/isolated scope", P || F, K, w), P = K) : Na("new/isolated scope", P, K, w)), F = F || K;
          da = K.name;
          !K.templateUrl && K.controller && (V = K.controller, S = S || {}, Na("'" + da + "' controller", S[da], K, w), S[da] = K);
          if (V = K.transclude)
            ka = !0, K.$$tlb || (Na("transclusion", fa, K, w), fa = K), "element" == V ? (E = !0, I = K.priority, V = w, w = e.$$element = A(W.createComment(" " + da + ": " + e[da] + " ")), d = w[0], T(g, Za.call(V, 0), d), fb = D(V, f, I, k && k.name, {nonTlbTranscludeDirective: fa})) : (V = A(Ub(d)).contents(), w.empty(), fb = D(V, f));
          if (K.template)
            if (x = !0, Na("template", ma, K, w), ma = K, V = G(K.template) ? K.template(w, e) : K.template, V = Tc(V), K.replace) {
              k = K;
              V = Sb.test(V) ? Uc(Xb(K.templateNamespace, N(V))) : [];
              d = V[0];
              if (1 != V.length || d.nodeType !== qa)
                throw la("tplrt", da, "");
              T(g, w, d);
              Q = {$attr: {}};
              V = X(d, [], Q);
              var aa = a.splice(z + 1, a.length - (z + 1));
              P && y(V);
              a = a.concat(V).concat(aa);
              R(e, Q);
              Q = a.length;
            } else
              w.html(V);
          if (K.templateUrl)
            x = !0, Na("template", ma, K, w), ma = K, K.replace && (k = K), B = of(a.splice(z, a.length - z), w, e, g, ka && fb, l, p, {
              controllerDirectives: S,
              newIsolateScopeDirective: P,
              templateDirective: ma,
              nonTlbTranscludeDirective: fa
            }), Q = a.length;
          else if (K.compile)
            try {
              za = K.compile(w, e, fb), G(za) ? s(null, za, Oa, U) : za && s(za.pre, za.post, Oa, U);
            } catch (pf) {
              c(pf, wa(w));
            }
          K.terminal && (B.terminal = !0, I = Math.max(I, K.priority));
        }
        B.scope = F && !0 === F.scope;
        B.transcludeOnThisElement = ka;
        B.elementTranscludeOnThisElement = E;
        B.templateOnThisElement = x;
        B.transclude = fb;
        m.hasElementTranscludeDirective = E;
        return B;
      }
      function y(a) {
        for (var b = 0,
            c = a.length; b < c; b++)
          a[b] = Ob(a[b], {$$isolateScope: !0});
      }
      function ka(b, e, f, g, h, k, l) {
        if (e === h)
          return null;
        h = null;
        if (d.hasOwnProperty(e)) {
          var q;
          e = a.get(e + "Directive");
          for (var m = 0,
              s = e.length; m < s; m++)
            try {
              q = e[m], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f) && (k && (q = Ob(q, {
                $$start: k,
                $$end: l
              })), b.push(q), h = q);
            } catch (M) {
              c(M);
            }
        }
        return h;
      }
      function x(b) {
        if (d.hasOwnProperty(b))
          for (var c = a.get(b + "Directive"),
              e = 0,
              f = c.length; e < f; e++)
            if (b = c[e], b.multiElement)
              return !0;
        return !1;
      }
      function R(a, b) {
        var c = b.$attr,
            d = a.$attr,
            e = a.$$element;
        r(a, function(d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
        });
        r(b, function(b, f) {
          "class" == f ? (I(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
        });
      }
      function of(a, b, c, d, e, f, g, h) {
        var k = [],
            l,
            q,
            p = b[0],
            m = a.shift(),
            M = Ob(m, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: m
            }),
            u = G(m.templateUrl) ? m.templateUrl(b, c) : m.templateUrl,
            L = m.templateNamespace;
        b.empty();
        s(Z.getTrustedResourceUrl(u)).then(function(s) {
          var B,
              v;
          s = Tc(s);
          if (m.replace) {
            s = Sb.test(s) ? Uc(Xb(L, N(s))) : [];
            B = s[0];
            if (1 != s.length || B.nodeType !== qa)
              throw la("tplrt", m.name, u);
            s = {$attr: {}};
            T(d, b, B);
            var D = X(B, [], s);
            J(m.scope) && y(D);
            a = D.concat(a);
            R(c, s);
          } else
            B = p, b.html(s);
          a.unshift(M);
          l = fa(a, B, c, e, b, m, f, g, h);
          r(d, function(a, c) {
            a == B && (d[c] = b[0]);
          });
          for (q = S(b[0].childNodes, e); k.length; ) {
            s = k.shift();
            v = k.shift();
            var F = k.shift(),
                O = k.shift(),
                D = b[0];
            if (!s.$$destroyed) {
              if (v !== p) {
                var Z = v.className;
                h.hasElementTranscludeDirective && m.replace || (D = Ub(B));
                T(F, A(v), D);
                I(A(D), Z);
              }
              v = l.transcludeOnThisElement ? P(s, l.transclude, O) : O;
              l(q, s, D, d, v);
            }
          }
          k = null;
        });
        return function(a, b, c, d, e) {
          a = e;
          b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = P(b, l.transclude, e)), l(q, b, c, d, a)));
        };
      }
      function da(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }
      function Na(a, b, c, d) {
        if (b)
          throw la("multidir", b.name, c.name, a, wa(d));
      }
      function za(a, c) {
        var d = b(c, !0);
        d && a.push({
          priority: 0,
          compile: function(a) {
            a = a.parent();
            var b = !!a.length;
            b && D.$$addBindingClass(a);
            return function(a, c) {
              var e = c.parent();
              b || D.$$addBindingClass(e);
              D.$$addBindingInfo(e, d.expressions);
              a.$watch(d, function(a) {
                c[0].nodeValue = a;
              });
            };
          }
        });
      }
      function Xb(a, b) {
        a = z(a || "html");
        switch (a) {
          case "svg":
          case "math":
            var c = W.createElement("div");
            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
            return c.childNodes[0].childNodes;
          default:
            return b;
        }
      }
      function Q(a, b) {
        if ("srcdoc" == b)
          return Z.HTML;
        var c = va(a);
        if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))
          return Z.RESOURCE_URL;
      }
      function Oa(a, c, d, e, f) {
        var h = Q(a, e);
        f = g[e] || f;
        var k = b(d, !0, h, f);
        if (k) {
          if ("multiple" === e && "select" === va(a))
            throw la("selmulti", wa(a));
          c.push({
            priority: 100,
            compile: function() {
              return {pre: function(a, c, g) {
                  c = g.$$observers || (g.$$observers = {});
                  if (l.test(e))
                    throw la("nodomevents");
                  var m = g[e];
                  m !== d && (k = m && b(m, !0, h, f), d = m);
                  k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                    "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                  }));
                }};
            }
          });
        }
      }
      function T(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;
        if (a)
          for (g = 0, h = a.length; g < h; g++)
            if (a[g] == d) {
              a[g++] = c;
              h = g + e - 1;
              for (var k = a.length; g < k; g++, h++)
                h < k ? a[g] = a[h] : delete a[g];
              a.length -= e - 1;
              a.context === d && (a.context = c);
              break;
            }
        f && f.replaceChild(c, d);
        a = W.createDocumentFragment();
        a.appendChild(d);
        A(c).data(A(d).data());
        ta ? (Qb = !0, ta.cleanData([d])) : delete A.cache[d[A.expando]];
        d = 1;
        for (e = b.length; d < e; d++)
          f = b[d], A(f).remove(), a.appendChild(f), delete b[d];
        b[0] = c;
        b.length = 1;
      }
      function Y(a, b) {
        return w(function() {
          return a.apply(null, arguments);
        }, a, b);
      }
      function $(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, wa(d));
        }
      }
      var Yb = function(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;
          d = 0;
          for (e = c.length; d < e; d++)
            f = c[d], this[f] = b[f];
        } else
          this.$attr = {};
        this.$$element = a;
      };
      Yb.prototype = {
        $normalize: xa,
        $addClass: function(a) {
          a && 0 < a.length && L.addClass(this.$$element, a);
        },
        $removeClass: function(a) {
          a && 0 < a.length && L.removeClass(this.$$element, a);
        },
        $updateClass: function(a, b) {
          var c = Vc(a, b);
          c && c.length && L.addClass(this.$$element, c);
          (c = Vc(b, a)) && c.length && L.removeClass(this.$$element, c);
        },
        $set: function(a, b, d, e) {
          var f = this.$$element[0],
              g = Nc(f, a),
              h = kf(f, a),
              f = a;
          g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
          this[a] = b;
          e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = vc(a, "-"));
          g = va(this.$$element);
          if ("a" === g && "href" === a || "img" === g && "src" === a)
            this[a] = b = B(b, "src" === a);
          else if ("img" === g && "srcset" === a) {
            for (var g = "",
                h = N(b),
                k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                k = /\s/.test(h) ? k : /(,)/,
                h = h.split(k),
                k = Math.floor(h.length / 2),
                l = 0; l < k; l++)
              var q = 2 * l,
                  g = g + B(N(h[q]), !0),
                  g = g + (" " + N(h[q + 1]));
            h = N(h[2 * l]).split(/\s/);
            g += B(N(h[0]), !0);
            2 === h.length && (g += " " + N(h[1]));
            this[a] = b = g;
          }
          !1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
          (a = this.$$observers) && r(a[f], function(a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        },
        $observe: function(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = ia()),
              e = d[a] || (d[a] = []);
          e.push(b);
          m.$evalAsync(function() {
            !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
          });
          return function() {
            Xa(e, b);
          };
        }
      };
      var V = b.startSymbol(),
          ma = b.endSymbol(),
          Tc = "{{" == V || "}}" == ma ? ra : function(a) {
            return a.replace(/\{\{/g, V).replace(/}}/g, ma);
          },
          U = /^ngAttr[A-Z]/;
      D.$$addBindingInfo = k ? function(a, b) {
        var c = a.data("$binding") || [];
        H(b) ? c = c.concat(b) : c.push(b);
        a.data("$binding", c);
      } : E;
      D.$$addBindingClass = k ? function(a) {
        I(a, "ng-binding");
      } : E;
      D.$$addScopeInfo = k ? function(a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : E;
      D.$$addScopeClass = k ? function(a, b) {
        I(a, b ? "ng-isolate-scope" : "ng-scope");
      } : E;
      return D;
    }];
  }
  function xa(b) {
    return db(b.replace(Sc, ""));
  }
  function Vc(b, a) {
    var c = "",
        d = b.split(/\s+/),
        e = a.split(/\s+/),
        f = 0;
    a: for (; f < d.length; f++) {
      for (var g = d[f],
          h = 0; h < e.length; h++)
        if (g == e[h])
          continue a;
      c += (0 < c.length ? " " : "") + g;
    }
    return c;
  }
  function Uc(b) {
    b = A(b);
    var a = b.length;
    if (1 >= a)
      return b;
    for (; a--; )
      8 === b[a].nodeType && qf.call(b, a, 1);
    return b;
  }
  function Fe() {
    var b = {},
        a = !1,
        c = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function(a, c) {
      La(a, "controller");
      J(a) ? w(b, a) : b[a] = c;
    };
    this.allowGlobals = function() {
      a = !0;
    };
    this.$get = ["$injector", "$window", function(d, e) {
      function f(a, b, c, d) {
        if (!a || !J(a.$scope))
          throw R("$controller")("noscp", d, b);
        a.$scope[b] = c;
      }
      return function(g, h, l, k) {
        var n,
            p,
            q;
        l = !0 === l;
        k && C(k) && (q = k);
        if (C(g)) {
          k = g.match(c);
          if (!k)
            throw rf("ctrlfmt", g);
          p = k[1];
          q = q || k[3];
          g = b.hasOwnProperty(p) ? b[p] : xc(h.$scope, p, !0) || (a ? xc(e, p, !0) : t);
          sb(g, p, !0);
        }
        if (l)
          return l = (H(g) ? g[g.length - 1] : g).prototype, n = Object.create(l || null), q && f(h, q, n, p || g.name), w(function() {
            d.invoke(g, n, h, p);
            return n;
          }, {
            instance: n,
            identifier: q
          });
        n = d.instantiate(g, h, p);
        q && f(h, q, n, p || g.name);
        return n;
      };
    }];
  }
  function Ge() {
    this.$get = ["$window", function(b) {
      return A(b.document);
    }];
  }
  function He() {
    this.$get = ["$log", function(b) {
      return function(a, c) {
        b.error.apply(b, arguments);
      };
    }];
  }
  function Zb(b, a) {
    if (C(b)) {
      var c = b.replace(sf, "").trim();
      if (c) {
        var d = a("Content-Type");
        (d = d && 0 === d.indexOf(Wc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
        d && (b = qc(c));
      }
    }
    return b;
  }
  function Xc(b) {
    var a = ia(),
        c,
        d,
        e;
    if (!b)
      return a;
    r(b.split("\n"), function(b) {
      e = b.indexOf(":");
      c = z(N(b.substr(0, e)));
      d = N(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + ", " + d : d);
    });
    return a;
  }
  function Yc(b) {
    var a = J(b) ? b : t;
    return function(c) {
      a || (a = Xc(b));
      return c ? (c = a[z(c)], void 0 === c && (c = null), c) : a;
    };
  }
  function Zc(b, a, c, d) {
    if (G(d))
      return d(b, a, c);
    r(d, function(d) {
      b = d(b, a, c);
    });
    return b;
  }
  function Ke() {
    var b = this.defaults = {
      transformResponse: [Zb],
      transformRequest: [function(a) {
        return J(a) && "[object File]" !== Ca.call(a) && "[object Blob]" !== Ca.call(a) && "[object FormData]" !== Ca.call(a) ? $a(a) : a;
      }],
      headers: {
        common: {Accept: "application/json, text/plain, */*"},
        post: sa($b),
        put: sa($b),
        patch: sa($b)
      },
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN"
    },
        a = !1;
    this.useApplyAsync = function(b) {
      return y(b) ? (a = !!b, this) : a;
    };
    var c = this.interceptors = [];
    this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(d, e, f, g, h, l) {
      function k(a) {
        function c(a) {
          var b = w({}, a);
          b.data = a.data ? Zc(a.data, a.headers, a.status, e.transformResponse) : a.data;
          a = a.status;
          return 200 <= a && 300 > a ? b : h.reject(b);
        }
        function d(a) {
          var b,
              c = {};
          r(a, function(a, d) {
            G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
          });
          return c;
        }
        if (!ca.isObject(a))
          throw R("$http")("badreq", a);
        var e = w({
          method: "get",
          transformRequest: b.transformRequest,
          transformResponse: b.transformResponse
        }, a);
        e.headers = function(a) {
          var c = b.headers,
              e = w({}, a.headers),
              f,
              g,
              c = w({}, c.common, c[z(a.method)]);
          a: for (f in c) {
            a = z(f);
            for (g in e)
              if (z(g) === a)
                continue a;
            e[f] = c[f];
          }
          return d(e);
        }(a);
        e.method = ub(e.method);
        var f = [function(a) {
          var d = a.headers,
              e = Zc(a.data, Yc(d), t, a.transformRequest);
          x(e) && r(d, function(a, b) {
            "content-type" === z(b) && delete d[b];
          });
          x(a.withCredentials) && !x(b.withCredentials) && (a.withCredentials = b.withCredentials);
          return n(a, e).then(c, c);
        }, t],
            g = h.when(e);
        for (r(u, function(a) {
          (a.request || a.requestError) && f.unshift(a.request, a.requestError);
          (a.response || a.responseError) && f.push(a.response, a.responseError);
        }); f.length; ) {
          a = f.shift();
          var k = f.shift(),
              g = g.then(a, k);
        }
        g.success = function(a) {
          g.then(function(b) {
            a(b.data, b.status, b.headers, e);
          });
          return g;
        };
        g.error = function(a) {
          g.then(null, function(b) {
            a(b.data, b.status, b.headers, e);
          });
          return g;
        };
        return g;
      }
      function n(c, f) {
        function l(b, c, d, e) {
          function f() {
            m(c, b, d, e);
          }
          I && (200 <= b && 300 > b ? I.put(P, [b, c, Xc(d), e]) : I.remove(P));
          a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
        }
        function m(a, b, d, e) {
          b = Math.max(b, 0);
          (200 <= b && 300 > b ? L.resolve : L.reject)({
            data: a,
            status: b,
            headers: Yc(d),
            config: c,
            statusText: e
          });
        }
        function n(a) {
          m(a.data, a.status, sa(a.headers()), a.statusText);
        }
        function u() {
          var a = k.pendingRequests.indexOf(c);
          -1 !== a && k.pendingRequests.splice(a, 1);
        }
        var L = h.defer(),
            B = L.promise,
            I,
            D,
            S = c.headers,
            P = p(c.url, c.params);
        k.pendingRequests.push(c);
        B.then(u, u);
        !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (I = J(c.cache) ? c.cache : J(b.cache) ? b.cache : q);
        I && (D = I.get(P), y(D) ? D && G(D.then) ? D.then(n, n) : H(D) ? m(D[1], D[0], sa(D[2]), D[3]) : m(D, 200, {}, "OK") : I.put(P, B));
        x(D) && ((D = $c(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (S[c.xsrfHeaderName || b.xsrfHeaderName] = D), d(c.method, P, f, l, S, c.timeout, c.withCredentials, c.responseType));
        return B;
      }
      function p(a, b) {
        if (!b)
          return a;
        var c = [];
        Ed(b, function(a, b) {
          null === a || x(a) || (H(a) || (a = [a]), r(a, function(a) {
            J(a) && (a = ga(a) ? a.toISOString() : $a(a));
            c.push(Ea(b) + "=" + Ea(a));
          }));
        });
        0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
        return a;
      }
      var q = f("$http"),
          u = [];
      r(c, function(a) {
        u.unshift(C(a) ? l.get(a) : l.invoke(a));
      });
      k.pendingRequests = [];
      (function(a) {
        r(arguments, function(a) {
          k[a] = function(b, c) {
            return k(w(c || {}, {
              method: a,
              url: b
            }));
          };
        });
      })("get", "delete", "head", "jsonp");
      (function(a) {
        r(arguments, function(a) {
          k[a] = function(b, c, d) {
            return k(w(d || {}, {
              method: a,
              url: b,
              data: c
            }));
          };
        });
      })("post", "put", "patch");
      k.defaults = b;
      return k;
    }];
  }
  function vf() {
    return new Q.XMLHttpRequest;
  }
  function Le() {
    this.$get = ["$browser", "$window", "$document", function(b, a, c) {
      return wf(b, vf, b.defer, a.angular.callbacks, c[0]);
    }];
  }
  function wf(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement("script"),
          n = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = !0;
      n = function(a) {
        f.removeEventListener("load", n, !1);
        f.removeEventListener("error", n, !1);
        e.body.removeChild(f);
        f = null;
        var g = -1,
            u = "unknown";
        a && ("load" !== a.type || d[b].called || (a = {type: "error"}), u = a.type, g = "error" === a.type ? 404 : 200);
        c && c(g, u);
      };
      f.addEventListener("load", n, !1);
      f.addEventListener("error", n, !1);
      e.body.appendChild(f);
      return n;
    }
    return function(e, h, l, k, n, p, q, u) {
      function s() {
        m && m();
        F && F.abort();
      }
      function M(a, d, e, f, g) {
        L !== t && c.cancel(L);
        m = F = null;
        a(d, e, f, g);
        b.$$completeOutstandingRequest(E);
      }
      b.$$incOutstandingRequestCount();
      h = h || b.url();
      if ("jsonp" == z(e)) {
        var v = "_" + (d.counter++).toString(36);
        d[v] = function(a) {
          d[v].data = a;
          d[v].called = !0;
        };
        var m = f(h.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function(a, b) {
          M(k, a, d[v].data, "", b);
          d[v] = E;
        });
      } else {
        var F = a();
        F.open(e, h, !0);
        r(n, function(a, b) {
          y(a) && F.setRequestHeader(b, a);
        });
        F.onload = function() {
          var a = F.statusText || "",
              b = "response" in F ? F.response : F.responseText,
              c = 1223 === F.status ? 204 : F.status;
          0 === c && (c = b ? 200 : "file" == Aa(h).protocol ? 404 : 0);
          M(k, c, b, F.getAllResponseHeaders(), a);
        };
        e = function() {
          M(k, -1, null, null, "");
        };
        F.onerror = e;
        F.onabort = e;
        q && (F.withCredentials = !0);
        if (u)
          try {
            F.responseType = u;
          } catch (Z) {
            if ("json" !== u)
              throw Z;
          }
        F.send(l || null);
      }
      if (0 < p)
        var L = c(s, p);
      else
        p && G(p.then) && p.then(s);
    };
  }
  function Ie() {
    var b = "{{",
        a = "}}";
    this.startSymbol = function(a) {
      return a ? (b = a, this) : b;
    };
    this.endSymbol = function(b) {
      return b ? (a = b, this) : a;
    };
    this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
      function f(a) {
        return "\\\\\\" + a;
      }
      function g(f, g, u, s) {
        function M(c) {
          return c.replace(k, b).replace(n, a);
        }
        function v(a) {
          try {
            var b = a;
            a = u ? e.getTrusted(u, b) : e.valueOf(b);
            var c;
            if (s && !y(a))
              c = a;
            else if (null == a)
              c = "";
            else {
              switch (typeof a) {
                case "string":
                  break;
                case "number":
                  a = "" + a;
                  break;
                default:
                  a = $a(a);
              }
              c = a;
            }
            return c;
          } catch (g) {
            c = ac("interr", f, g.toString()), d(c);
          }
        }
        s = !!s;
        for (var m,
            F,
            r = 0,
            L = [],
            B = [],
            I = f.length,
            D = [],
            S = []; r < I; )
          if (-1 != (m = f.indexOf(b, r)) && -1 != (F = f.indexOf(a, m + h)))
            r !== m && D.push(M(f.substring(r, m))), r = f.substring(m + h, F), L.push(r), B.push(c(r, v)), r = F + l, S.push(D.length), D.push("");
          else {
            r !== I && D.push(M(f.substring(r)));
            break;
          }
        if (u && 1 < D.length)
          throw ac("noconcat", f);
        if (!g || L.length) {
          var P = function(a) {
            for (var b = 0,
                c = L.length; b < c; b++) {
              if (s && x(a[b]))
                return;
              D[S[b]] = a[b];
            }
            return D.join("");
          };
          return w(function(a) {
            var b = 0,
                c = L.length,
                e = Array(c);
            try {
              for (; b < c; b++)
                e[b] = B[b](a);
              return P(e);
            } catch (g) {
              a = ac("interr", f, g.toString()), d(a);
            }
          }, {
            exp: f,
            expressions: L,
            $$watchDelegate: function(a, b, c) {
              var d;
              return a.$watchGroup(B, function(c, e) {
                var f = P(c);
                G(b) && b.call(this, f, c !== e ? d : f, a);
                d = f;
              }, c);
            }
          });
        }
      }
      var h = b.length,
          l = a.length,
          k = new RegExp(b.replace(/./g, f), "g"),
          n = new RegExp(a.replace(/./g, f), "g");
      g.startSymbol = function() {
        return b;
      };
      g.endSymbol = function() {
        return a;
      };
      return g;
    }];
  }
  function Je() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
      function e(e, h, l, k) {
        var n = a.setInterval,
            p = a.clearInterval,
            q = 0,
            u = y(k) && !k,
            s = (u ? d : c).defer(),
            M = s.promise;
        l = y(l) ? l : 0;
        M.then(null, null, e);
        M.$$intervalId = n(function() {
          s.notify(q++);
          0 < l && q >= l && (s.resolve(q), p(M.$$intervalId), delete f[M.$$intervalId]);
          u || b.$apply();
        }, h);
        f[M.$$intervalId] = s;
        return M;
      }
      var f = {};
      e.cancel = function(b) {
        return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
      };
      return e;
    }];
  }
  function Rd() {
    this.$get = function() {
      return {
        id: "en-us",
        NUMBER_FORMATS: {
          DECIMAL_SEP: ".",
          GROUP_SEP: ",",
          PATTERNS: [{
            minInt: 1,
            minFrac: 0,
            maxFrac: 3,
            posPre: "",
            posSuf: "",
            negPre: "-",
            negSuf: "",
            gSize: 3,
            lgSize: 3
          }, {
            minInt: 1,
            minFrac: 2,
            maxFrac: 2,
            posPre: "\u00a4",
            posSuf: "",
            negPre: "(\u00a4",
            negSuf: ")",
            gSize: 3,
            lgSize: 3
          }],
          CURRENCY_SYM: "$"
        },
        DATETIME_FORMATS: {
          MONTH: "January February March April May June July August September October November December".split(" "),
          SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          AMPMS: ["AM", "PM"],
          medium: "MMM d, y h:mm:ss a",
          "short": "M/d/yy h:mm a",
          fullDate: "EEEE, MMMM d, y",
          longDate: "MMMM d, y",
          mediumDate: "MMM d, y",
          shortDate: "M/d/yy",
          mediumTime: "h:mm:ss a",
          shortTime: "h:mm a",
          ERANAMES: ["Before Christ", "Anno Domini"],
          ERAS: ["BC", "AD"]
        },
        pluralCat: function(b) {
          return 1 === b ? "one" : "other";
        }
      };
    };
  }
  function bc(b) {
    b = b.split("/");
    for (var a = b.length; a--; )
      b[a] = qb(b[a]);
    return b.join("/");
  }
  function ad(b, a) {
    var c = Aa(b);
    a.$$protocol = c.protocol;
    a.$$host = c.hostname;
    a.$$port = aa(c.port) || xf[c.protocol] || null;
  }
  function bd(b, a) {
    var c = "/" !== b.charAt(0);
    c && (b = "/" + b);
    var d = Aa(b);
    a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
    a.$$search = sc(d.search);
    a.$$hash = decodeURIComponent(d.hash);
    a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
  }
  function ya(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function Ga(b) {
    var a = b.indexOf("#");
    return -1 == a ? b : b.substr(0, a);
  }
  function Fb(b) {
    return b.replace(/(#.+)|#$/, "$1");
  }
  function cc(b) {
    return b.substr(0, Ga(b).lastIndexOf("/") + 1);
  }
  function dc(b, a) {
    this.$$html5 = !0;
    a = a || "";
    var c = cc(b);
    ad(b, this);
    this.$$parse = function(a) {
      var b = ya(c, a);
      if (!C(b))
        throw Gb("ipthprfx", a, c);
      bd(b, this);
      this.$$path || (this.$$path = "/");
      this.$$compose();
    };
    this.$$compose = function() {
      var a = Pb(this.$$search),
          b = this.$$hash ? "#" + qb(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$parseLinkUrl = function(d, e) {
      if (e && "#" === e[0])
        return this.hash(e.slice(1)), !0;
      var f,
          g;
      (f = ya(b, d)) !== t ? (g = f, g = (f = ya(a, f)) !== t ? c + (ya("/", f) || f) : b + g) : (f = ya(c, d)) !== t ? g = c + f : c == d + "/" && (g = c);
      g && this.$$parse(g);
      return !!g;
    };
  }
  function ec(b, a) {
    var c = cc(b);
    ad(b, this);
    this.$$parse = function(d) {
      d = ya(b, d) || ya(c, d);
      var e;
      "#" === d.charAt(0) ? (e = ya(a, d), x(e) && (e = d)) : e = this.$$html5 ? d : "";
      bd(e, this);
      d = this.$$path;
      var f = /^\/[A-Z]:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ""));
      f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function() {
      var c = Pb(this.$$search),
          e = this.$$hash ? "#" + qb(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : "");
    };
    this.$$parseLinkUrl = function(a, c) {
      return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1;
    };
  }
  function cd(b, a) {
    this.$$html5 = !0;
    ec.apply(this, arguments);
    var c = cc(b);
    this.$$parseLinkUrl = function(d, e) {
      if (e && "#" === e[0])
        return this.hash(e.slice(1)), !0;
      var f,
          g;
      b == Ga(d) ? f = d : (g = ya(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
      f && this.$$parse(f);
      return !!f;
    };
    this.$$compose = function() {
      var c = Pb(this.$$search),
          e = this.$$hash ? "#" + qb(this.$$hash) : "";
      this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
      this.$$absUrl = b + a + this.$$url;
    };
  }
  function Hb(b) {
    return function() {
      return this[b];
    };
  }
  function dd(b, a) {
    return function(c) {
      if (x(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function Me() {
    var b = "",
        a = {
          enabled: !1,
          requireBase: !0,
          rewriteLinks: !0
        };
    this.hashPrefix = function(a) {
      return y(a) ? (b = a, this) : b;
    };
    this.html5Mode = function(b) {
      return Wa(b) ? (a.enabled = b, this) : J(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
    };
    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
      function h(a, b, c) {
        var e = k.url(),
            f = k.$$state;
        try {
          d.url(a, b, c), k.$$state = d.state();
        } catch (g) {
          throw k.url(e), k.$$state = f, g;
        }
      }
      function l(a, b) {
        c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b);
      }
      var k,
          n;
      n = d.baseHref();
      var p = d.url(),
          q;
      if (a.enabled) {
        if (!n && a.requireBase)
          throw Gb("nobase");
        q = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (n || "/");
        n = e.history ? dc : cd;
      } else
        q = Ga(p), n = ec;
      k = new n(q, "#" + b);
      k.$$parseLinkUrl(p, p);
      k.$$state = d.state();
      var u = /^\s*(javascript|mailto):/i;
      f.on("click", function(b) {
        if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
          for (var e = A(b.target); "a" !== va(e[0]); )
            if (e[0] === f[0] || !(e = e.parent())[0])
              return;
          var h = e.prop("href"),
              l = e.attr("href") || e.attr("xlink:href");
          J(h) && "[object SVGAnimatedString]" === h.toString() && (h = Aa(h.animVal).href);
          u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
        }
      });
      Fb(k.absUrl()) != Fb(p) && d.url(k.absUrl(), !0);
      var s = !0;
      d.onUrlChange(function(a, b) {
        c.$evalAsync(function() {
          var d = k.absUrl(),
              e = k.$$state,
              f;
          k.$$parse(a);
          k.$$state = b;
          f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
          k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (s = !1, l(d, e)));
        });
        c.$$phase || c.$digest();
      });
      c.$watch(function() {
        var a = Fb(d.url()),
            b = Fb(k.absUrl()),
            f = d.state(),
            g = k.$$replace,
            q = a !== b || k.$$html5 && e.history && f !== k.$$state;
        if (s || q)
          s = !1, c.$evalAsync(function() {
            var b = k.absUrl(),
                d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
            k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)));
          });
        k.$$replace = !1;
      });
      return k;
    }];
  }
  function Ne() {
    var b = !0,
        a = this;
    this.debugEnabled = function(a) {
      return y(a) ? (b = a, this) : b;
    };
    this.$get = ["$window", function(c) {
      function d(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
        return a;
      }
      function e(a) {
        var b = c.console || {},
            e = b[a] || b.log || E;
        a = !1;
        try {
          a = !!e.apply;
        } catch (l) {}
        return a ? function() {
          var a = [];
          r(arguments, function(b) {
            a.push(d(b));
          });
          return e.apply(b, a);
        } : function(a, b) {
          e(a, null == b ? "" : b);
        };
      }
      return {
        log: e("log"),
        info: e("info"),
        warn: e("warn"),
        error: e("error"),
        debug: function() {
          var c = e("debug");
          return function() {
            b && c.apply(a, arguments);
          };
        }()
      };
    }];
  }
  function ua(b, a) {
    if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)
      throw na("isecfld", a);
    return b;
  }
  function oa(b, a) {
    if (b) {
      if (b.constructor === b)
        throw na("isecfn", a);
      if (b.window === b)
        throw na("isecwindow", a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))
        throw na("isecdom", a);
      if (b === Object)
        throw na("isecobj", a);
    }
    return b;
  }
  function fc(b) {
    return b.constant;
  }
  function hb(b, a, c, d, e) {
    oa(b, e);
    oa(a, e);
    c = c.split(".");
    for (var f,
        g = 0; 1 < c.length; g++) {
      f = ua(c.shift(), e);
      var h = 0 === g && a && a[f] || b[f];
      h || (h = {}, b[f] = h);
      b = oa(h, e);
    }
    f = ua(c.shift(), e);
    oa(b[f], e);
    return b[f] = d;
  }
  function Pa(b) {
    return "constructor" == b;
  }
  function ed(b, a, c, d, e, f, g) {
    ua(b, f);
    ua(a, f);
    ua(c, f);
    ua(d, f);
    ua(e, f);
    var h = function(a) {
      return oa(a, f);
    },
        l = g || Pa(b) ? h : ra,
        k = g || Pa(a) ? h : ra,
        n = g || Pa(c) ? h : ra,
        p = g || Pa(d) ? h : ra,
        q = g || Pa(e) ? h : ra;
    return function(f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;
      if (null == h)
        return h;
      h = l(h[b]);
      if (!a)
        return h;
      if (null == h)
        return t;
      h = k(h[a]);
      if (!c)
        return h;
      if (null == h)
        return t;
      h = n(h[c]);
      if (!d)
        return h;
      if (null == h)
        return t;
      h = p(h[d]);
      return e ? null == h ? t : h = q(h[e]) : h;
    };
  }
  function yf(b, a) {
    return function(c, d) {
      return b(c, d, oa, a);
    };
  }
  function zf(b, a, c) {
    var d = a.expensiveChecks,
        e = d ? Af : Bf,
        f = e[b];
    if (f)
      return f;
    var g = b.split("."),
        h = g.length;
    if (a.csp)
      f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function(a, b) {
        var e = 0,
            f;
        do
          f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f;
 while (e < h);
        return f;
      };
    else {
      var l = "";
      d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
      var k = d;
      r(g, function(a, b) {
        ua(a, c);
        var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
        if (d || Pa(a))
          e = "eso(" + e + ", fe)", k = !0;
        l += "if(s == null) return undefined;\ns=" + e + ";\n";
      });
      l += "return s;";
      a = new Function("s", "l", "eso", "fe", l);
      a.toString = ea(l);
      k && (a = yf(a, c));
      f = a;
    }
    f.sharedGetter = !0;
    f.assign = function(a, c, d) {
      return hb(a, d, b, c, b);
    };
    return e[b] = f;
  }
  function gc(b) {
    return G(b.valueOf) ? b.valueOf() : Cf.call(b);
  }
  function Oe() {
    var b = ia(),
        a = ia();
    this.$get = ["$filter", "$sniffer", function(c, d) {
      function e(a) {
        var b = a;
        a.sharedGetter && (b = function(b, c) {
          return a(b, c);
        }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
        return b;
      }
      function f(a, b) {
        for (var c = 0,
            d = a.length; c < d; c++) {
          var e = a[c];
          e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
        }
        return b;
      }
      function g(a, b) {
        return null == a || null == b ? a === b : "object" === typeof a && (a = gc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
      }
      function h(a, b, c, d) {
        var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
            h;
        if (1 === e.length) {
          var k = g,
              e = e[0];
          return a.$watch(function(a) {
            var b = e(a);
            g(b, k) || (h = d(a), k = b && gc(b));
            return h;
          }, b, c);
        }
        for (var l = [],
            q = 0,
            p = e.length; q < p; q++)
          l[q] = g;
        return a.$watch(function(a) {
          for (var b = !1,
              c = 0,
              f = e.length; c < f; c++) {
            var k = e[c](a);
            if (b || (b = !g(k, l[c])))
              l[c] = k && gc(k);
          }
          b && (h = d(a));
          return h;
        }, b, c);
      }
      function l(a, b, c, d) {
        var e,
            f;
        return e = a.$watch(function(a) {
          return d(a);
        }, function(a, c, d) {
          f = a;
          G(b) && b.apply(this, arguments);
          y(a) && d.$$postDigest(function() {
            y(f) && e();
          });
        }, c);
      }
      function k(a, b, c, d) {
        function e(a) {
          var b = !0;
          r(a, function(a) {
            y(a) || (b = !1);
          });
          return b;
        }
        var f,
            g;
        return f = a.$watch(function(a) {
          return d(a);
        }, function(a, c, d) {
          g = a;
          G(b) && b.call(this, a, c, d);
          e(a) && d.$$postDigest(function() {
            e(g) && f();
          });
        }, c);
      }
      function n(a, b, c, d) {
        var e;
        return e = a.$watch(function(a) {
          return d(a);
        }, function(a, c, d) {
          G(b) && b.apply(this, arguments);
          e();
        }, c);
      }
      function p(a, b) {
        if (!b)
          return a;
        var c = a.$$watchDelegate,
            c = c !== k && c !== l ? function(c, d) {
              var e = a(c, d);
              return b(e, c, d);
            } : function(c, d) {
              var e = a(c, d),
                  f = b(e, c, d);
              return y(e) ? f : e;
            };
        a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
        return c;
      }
      var q = {
        csp: d.csp,
        expensiveChecks: !1
      },
          u = {
            csp: d.csp,
            expensiveChecks: !0
          };
      return function(d, f, g) {
        var m,
            r,
            t;
        switch (typeof d) {
          case "string":
            t = d = d.trim();
            var L = g ? a : b;
            m = L[t];
            m || (":" === d.charAt(0) && ":" === d.charAt(1) && (r = !0, d = d.substring(2)), g = g ? u : q, m = new hc(g), m = (new ib(m, c, g)).parse(d), m.constant ? m.$$watchDelegate = n : r ? (m = e(m), m.$$watchDelegate = m.literal ? k : l) : m.inputs && (m.$$watchDelegate = h), L[t] = m);
            return p(m, f);
          case "function":
            return p(d, f);
          default:
            return p(E, f);
        }
      };
    }];
  }
  function Qe() {
    this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
      return fd(function(a) {
        b.$evalAsync(a);
      }, a);
    }];
  }
  function Re() {
    this.$get = ["$browser", "$exceptionHandler", function(b, a) {
      return fd(function(a) {
        b.defer(a);
      }, a);
    }];
  }
  function fd(b, a) {
    function c(a, b, c) {
      function d(b) {
        return function(c) {
          e || (e = !0, b.call(a, c));
        };
      }
      var e = !1;
      return [d(b), d(c)];
    }
    function d() {
      this.$$state = {status: 0};
    }
    function e(a, b) {
      return function(c) {
        b.call(a, c);
      };
    }
    function f(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, b(function() {
        var b,
            d,
            e;
        e = c.pending;
        c.processScheduled = !1;
        c.pending = t;
        for (var f = 0,
            g = e.length; f < g; ++f) {
          d = e[f][0];
          b = e[f][c.status];
          try {
            G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), a(h);
          }
        }
      }));
    }
    function g() {
      this.promise = new d;
      this.resolve = e(this, this.resolve);
      this.reject = e(this, this.reject);
      this.notify = e(this, this.notify);
    }
    var h = R("$q", TypeError);
    d.prototype = {
      then: function(a, b, c) {
        var d = new g;
        this.$$state.pending = this.$$state.pending || [];
        this.$$state.pending.push([d, a, b, c]);
        0 < this.$$state.status && f(this.$$state);
        return d.promise;
      },
      "catch": function(a) {
        return this.then(null, a);
      },
      "finally": function(a, b) {
        return this.then(function(b) {
          return k(b, !0, a);
        }, function(b) {
          return k(b, !1, a);
        }, b);
      }
    };
    g.prototype = {
      resolve: function(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
      },
      $$resolve: function(b) {
        var d,
            e;
        e = c(this, this.$$resolve, this.$$reject);
        try {
          if (J(b) || G(b))
            d = b && b.then;
          G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
        } catch (g) {
          e[1](g), a(g);
        }
      },
      reject: function(a) {
        this.promise.$$state.status || this.$$reject(a);
      },
      $$reject: function(a) {
        this.promise.$$state.value = a;
        this.promise.$$state.status = 2;
        f(this.promise.$$state);
      },
      notify: function(c) {
        var d = this.promise.$$state.pending;
        0 >= this.promise.$$state.status && d && d.length && b(function() {
          for (var b,
              e,
              f = 0,
              g = d.length; f < g; f++) {
            e = d[f][0];
            b = d[f][3];
            try {
              e.notify(G(b) ? b(c) : c);
            } catch (h) {
              a(h);
            }
          }
        });
      }
    };
    var l = function(a, b) {
      var c = new g;
      b ? c.resolve(a) : c.reject(a);
      return c.promise;
    },
        k = function(a, b, c) {
          var d = null;
          try {
            G(c) && (d = c());
          } catch (e) {
            return l(e, !1);
          }
          return d && G(d.then) ? d.then(function() {
            return l(a, b);
          }, function(a) {
            return l(a, !1);
          }) : l(a, b);
        },
        n = function(a, b, c, d) {
          var e = new g;
          e.resolve(a);
          return e.promise.then(b, c, d);
        },
        p = function u(a) {
          if (!G(a))
            throw h("norslvr", a);
          if (!(this instanceof u))
            return new u(a);
          var b = new g;
          a(function(a) {
            b.resolve(a);
          }, function(a) {
            b.reject(a);
          });
          return b.promise;
        };
    p.defer = function() {
      return new g;
    };
    p.reject = function(a) {
      var b = new g;
      b.reject(a);
      return b.promise;
    };
    p.when = n;
    p.all = function(a) {
      var b = new g,
          c = 0,
          d = H(a) ? [] : {};
      r(a, function(a, e) {
        c++;
        n(a).then(function(a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function(a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });
      0 === c && b.resolve(d);
      return b.promise;
    };
    return p;
  }
  function $e() {
    this.$get = ["$window", "$timeout", function(b, a) {
      var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
          d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
          e = !!c,
          f = e ? function(a) {
            var b = c(a);
            return function() {
              d(b);
            };
          } : function(b) {
            var c = a(b, 16.66, !1);
            return function() {
              a.cancel(c);
            };
          };
      f.supported = e;
      return f;
    }];
  }
  function Pe() {
    function b(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$id = ++ob;
        this.$$ChildScope = null;
      }
      b.prototype = a;
      return b;
    }
    var a = 10,
        c = R("$rootScope"),
        d = null,
        e = null;
    this.digestTtl = function(b) {
      arguments.length && (a = b);
      return a;
    };
    this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(f, g, h, l) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }
      function n() {
        this.$id = ++ob;
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this.$root = this;
        this.$$destroyed = !1;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$isolateBindings = null;
      }
      function p(a) {
        if (v.$$phase)
          throw c("inprog", v.$$phase);
        v.$$phase = a;
      }
      function q(a, b, c) {
        do
          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
 while (a = a.$parent);
      }
      function u() {}
      function s() {
        for (; t.length; )
          try {
            t.shift()();
          } catch (a) {
            g(a);
          }
        e = null;
      }
      function M() {
        null === e && (e = l.defer(function() {
          v.$apply(s);
        }));
      }
      n.prototype = {
        constructor: n,
        $new: function(a, c) {
          var d;
          c = c || this;
          a ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope);
          d.$parent = c;
          d.$$prevSibling = c.$$childTail;
          c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
          (a || c != this) && d.$on("$destroy", k);
          return d;
        },
        $watch: function(a, b, c) {
          var e = h(a);
          if (e.$$watchDelegate)
            return e.$$watchDelegate(this, b, c, e);
          var f = this.$$watchers,
              g = {
                fn: b,
                last: u,
                get: e,
                exp: a,
                eq: !!c
              };
          d = null;
          G(b) || (g.fn = E);
          f || (f = this.$$watchers = []);
          f.unshift(g);
          return function() {
            Xa(f, g);
            d = null;
          };
        },
        $watchGroup: function(a, b) {
          function c() {
            h = !1;
            k ? (k = !1, b(e, e, g)) : b(e, d, g);
          }
          var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              k = !0;
          if (!a.length) {
            var l = !0;
            g.$evalAsync(function() {
              l && b(e, e, g);
            });
            return function() {
              l = !1;
            };
          }
          if (1 === a.length)
            return this.$watch(a[0], function(a, c, f) {
              e[0] = a;
              d[0] = c;
              b(e, a === c ? e : d, f);
            });
          r(a, function(a, b) {
            var k = g.$watch(a, function(a, f) {
              e[b] = a;
              d[b] = f;
              h || (h = !0, g.$evalAsync(c));
            });
            f.push(k);
          });
          return function() {
            for (; f.length; )
              f.shift()();
          };
        },
        $watchCollection: function(a, b) {
          function c(a) {
            e = a;
            var b,
                d,
                g,
                h;
            if (!x(e)) {
              if (J(e))
                if (Sa(e))
                  for (f !== p && (f = p, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++)
                    h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                else {
                  f !== n && (f = n = {}, u = 0, l++);
                  a = 0;
                  for (b in e)
                    e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                  if (u > a)
                    for (b in l++, f)
                      e.hasOwnProperty(b) || (u--, delete f[b]);
                }
              else
                f !== e && (f = e, l++);
              return l;
            }
          }
          c.$stateful = !0;
          var d = this,
              e,
              f,
              g,
              k = 1 < b.length,
              l = 0,
              q = h(a, c),
              p = [],
              n = {},
              m = !0,
              u = 0;
          return this.$watch(q, function() {
            m ? (m = !1, b(e, e, d)) : b(e, g, d);
            if (k)
              if (J(e))
                if (Sa(e)) {
                  g = Array(e.length);
                  for (var a = 0; a < e.length; a++)
                    g[a] = e[a];
                } else
                  for (a in g = {}, e)
                    tc.call(e, a) && (g[a] = e[a]);
              else
                g = e;
          });
        },
        $digest: function() {
          var b,
              f,
              h,
              k,
              q,
              n,
              r = a,
              t,
              O = [],
              M,
              y;
          p("$digest");
          l.$$checkUrlChange();
          this === v && null !== e && (l.defer.cancel(e), s());
          d = null;
          do {
            n = !1;
            for (t = this; m.length; ) {
              try {
                y = m.shift(), y.scope.$eval(y.expression, y.locals);
              } catch (w) {
                g(w);
              }
              d = null;
            }
            a: do {
              if (k = t.$$watchers)
                for (q = k.length; q--; )
                  try {
                    if (b = k[q])
                      if ((f = b.get(t)) !== (h = b.last) && !(b.eq ? ha(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h)))
                        n = !0, d = b, b.last = b.eq ? Da(f, null) : f, b.fn(f, h === u ? f : h, t), 5 > r && (M = 4 - r, O[M] || (O[M] = []), O[M].push({
                          msg: G(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp,
                          newVal: f,
                          oldVal: h
                        }));
                      else if (b === d) {
                        n = !1;
                        break a;
                      }
                  } catch (A) {
                    g(A);
                  }
              if (!(k = t.$$childHead || t !== this && t.$$nextSibling))
                for (; t !== this && !(k = t.$$nextSibling); )
                  t = t.$parent;
            } while (t = k);
            if ((n || m.length) && !r--)
              throw v.$$phase = null, c("infdig", a, O);
          } while (n || m.length);
          for (v.$$phase = null; F.length; )
            try {
              F.shift()();
            } catch (x) {
              g(x);
            }
        },
        $destroy: function() {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy");
            this.$$destroyed = !0;
            if (this !== v) {
              for (var b in this.$$listenerCount)
                q(this, this.$$listenerCount[b], b);
              a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
              a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
              this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
              this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = E;
              this.$on = this.$watch = this.$watchGroup = function() {
                return E;
              };
              this.$$listeners = {};
              this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
            }
          }
        },
        $eval: function(a, b) {
          return h(a)(this, b);
        },
        $evalAsync: function(a, b) {
          v.$$phase || m.length || l.defer(function() {
            m.length && v.$digest();
          });
          m.push({
            scope: this,
            expression: a,
            locals: b
          });
        },
        $$postDigest: function(a) {
          F.push(a);
        },
        $apply: function(a) {
          try {
            return p("$apply"), this.$eval(a);
          } catch (b) {
            g(b);
          } finally {
            v.$$phase = null;
            try {
              v.$digest();
            } catch (c) {
              throw g(c), c;
            }
          }
        },
        $applyAsync: function(a) {
          function b() {
            c.$eval(a);
          }
          var c = this;
          a && t.push(b);
          M();
        },
        $on: function(a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []);
          c.push(b);
          var d = this;
          do
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
 while (d = d.$parent);
          var e = this;
          return function() {
            var d = c.indexOf(b);
            -1 !== d && (c[d] = null, q(e, 1, a));
          };
        },
        $emit: function(a, b) {
          var c = [],
              d,
              e = this,
              f = !1,
              h = {
                name: a,
                targetScope: e,
                stopPropagation: function() {
                  f = !0;
                },
                preventDefault: function() {
                  h.defaultPrevented = !0;
                },
                defaultPrevented: !1
              },
              k = Ya([h], arguments, 1),
              l,
              q;
          do {
            d = e.$$listeners[a] || c;
            h.currentScope = e;
            l = 0;
            for (q = d.length; l < q; l++)
              if (d[l])
                try {
                  d[l].apply(null, k);
                } catch (p) {
                  g(p);
                }
              else
                d.splice(l, 1), l--, q--;
            if (f)
              return h.currentScope = null, h;
            e = e.$parent;
          } while (e);
          h.currentScope = null;
          return h;
        },
        $broadcast: function(a, b) {
          var c = this,
              d = this,
              e = {
                name: a,
                targetScope: this,
                preventDefault: function() {
                  e.defaultPrevented = !0;
                },
                defaultPrevented: !1
              };
          if (!this.$$listenerCount[a])
            return e;
          for (var f = Ya([e], arguments, 1),
              h,
              l; c = d; ) {
            e.currentScope = c;
            d = c.$$listeners[a] || [];
            h = 0;
            for (l = d.length; h < l; h++)
              if (d[h])
                try {
                  d[h].apply(null, f);
                } catch (k) {
                  g(k);
                }
              else
                d.splice(h, 1), h--, l--;
            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
              for (; c !== this && !(d = c.$$nextSibling); )
                c = c.$parent;
          }
          e.currentScope = null;
          return e;
        }
      };
      var v = new n,
          m = v.$$asyncQueue = [],
          F = v.$$postDigestQueue = [],
          t = v.$$applyAsyncQueue = [];
      return v;
    }];
  }
  function Sd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/,
        a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function(a) {
      return y(a) ? (b = a, this) : b;
    };
    this.imgSrcSanitizationWhitelist = function(b) {
      return y(b) ? (a = b, this) : a;
    };
    this.$get = function() {
      return function(c, d) {
        var e = d ? a : b,
            f;
        f = Aa(c).href;
        return "" === f || f.match(e) ? c : "unsafe:" + f;
      };
    };
  }
  function Df(b) {
    if ("self" === b)
      return b;
    if (C(b)) {
      if (-1 < b.indexOf("***"))
        throw Ba("iwcard", b);
      b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
      return new RegExp("^" + b + "$");
    }
    if (Ua(b))
      return new RegExp("^" + b.source + "$");
    throw Ba("imatcher");
  }
  function hd(b) {
    var a = [];
    y(b) && r(b, function(b) {
      a.push(Df(b));
    });
    return a;
  }
  function Te() {
    this.SCE_CONTEXTS = pa;
    var b = ["self"],
        a = [];
    this.resourceUrlWhitelist = function(a) {
      arguments.length && (b = hd(a));
      return b;
    };
    this.resourceUrlBlacklist = function(b) {
      arguments.length && (a = hd(b));
      return a;
    };
    this.$get = ["$injector", function(c) {
      function d(a, b) {
        return "self" === a ? $c(b) : !!a.exec(b.href);
      }
      function e(a) {
        var b = function(a) {
          this.$$unwrapTrustedValue = function() {
            return a;
          };
        };
        a && (b.prototype = new a);
        b.prototype.valueOf = function() {
          return this.$$unwrapTrustedValue();
        };
        b.prototype.toString = function() {
          return this.$$unwrapTrustedValue().toString();
        };
        return b;
      }
      var f = function(a) {
        throw Ba("unsafe");
      };
      c.has("$sanitize") && (f = c.get("$sanitize"));
      var g = e(),
          h = {};
      h[pa.HTML] = e(g);
      h[pa.CSS] = e(g);
      h[pa.URL] = e(g);
      h[pa.JS] = e(g);
      h[pa.RESOURCE_URL] = e(h[pa.URL]);
      return {
        trustAs: function(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;
          if (!c)
            throw Ba("icontext", a, b);
          if (null === b || b === t || "" === b)
            return b;
          if ("string" !== typeof b)
            throw Ba("itype", a);
          return new c(b);
        },
        getTrusted: function(c, e) {
          if (null === e || e === t || "" === e)
            return e;
          var g = h.hasOwnProperty(c) ? h[c] : null;
          if (g && e instanceof g)
            return e.$$unwrapTrustedValue();
          if (c === pa.RESOURCE_URL) {
            var g = Aa(e.toString()),
                p,
                q,
                u = !1;
            p = 0;
            for (q = b.length; p < q; p++)
              if (d(b[p], g)) {
                u = !0;
                break;
              }
            if (u)
              for (p = 0, q = a.length; p < q; p++)
                if (d(a[p], g)) {
                  u = !1;
                  break;
                }
            if (u)
              return e;
            throw Ba("insecurl", e.toString());
          }
          if (c === pa.HTML)
            return f(e);
          throw Ba("unsafe");
        },
        valueOf: function(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        }
      };
    }];
  }
  function Se() {
    var b = !0;
    this.enabled = function(a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = ["$parse", "$sceDelegate", function(a, c) {
      if (b && 8 > Qa)
        throw Ba("iequirks");
      var d = sa(pa);
      d.isEnabled = function() {
        return b;
      };
      d.trustAs = c.trustAs;
      d.getTrusted = c.getTrusted;
      d.valueOf = c.valueOf;
      b || (d.trustAs = d.getTrusted = function(a, b) {
        return b;
      }, d.valueOf = ra);
      d.parseAs = function(b, c) {
        var e = a(c);
        return e.literal && e.constant ? e : a(c, function(a) {
          return d.getTrusted(b, a);
        });
      };
      var e = d.parseAs,
          f = d.getTrusted,
          g = d.trustAs;
      r(pa, function(a, b) {
        var c = z(b);
        d[db("parse_as_" + c)] = function(b) {
          return e(a, b);
        };
        d[db("get_trusted_" + c)] = function(b) {
          return f(a, b);
        };
        d[db("trust_as_" + c)] = function(b) {
          return g(a, b);
        };
      });
      return d;
    }];
  }
  function Ue() {
    this.$get = ["$window", "$document", function(b, a) {
      var c = {},
          d = aa((/android (\d+)/.exec(z((b.navigator || {}).userAgent)) || [])[1]),
          e = /Boxee/i.test((b.navigator || {}).userAgent),
          f = a[0] || {},
          g,
          h = /^(Moz|webkit|ms)(?=[A-Z])/,
          l = f.body && f.body.style,
          k = !1,
          n = !1;
      if (l) {
        for (var p in l)
          if (k = h.exec(p)) {
            g = k[0];
            g = g.substr(0, 1).toUpperCase() + g.substr(1);
            break;
          }
        g || (g = "WebkitOpacity" in l && "webkit");
        k = !!("transition" in l || g + "Transition" in l);
        n = !!("animation" in l || g + "Animation" in l);
        !d || k && n || (k = C(f.body.style.webkitTransition), n = C(f.body.style.webkitAnimation));
      }
      return {
        history: !(!b.history || !b.history.pushState || 4 > d || e),
        hasEvent: function(a) {
          if ("input" === a && 11 >= Qa)
            return !1;
          if (x(c[a])) {
            var b = f.createElement("div");
            c[a] = "on" + a in b;
          }
          return c[a];
        },
        csp: bb(),
        vendorPrefix: g,
        transitions: k,
        animations: n,
        android: d
      };
    }];
  }
  function We() {
    this.$get = ["$templateCache", "$http", "$q", function(b, a, c) {
      function d(e, f) {
        d.totalPendingRequests++;
        var g = a.defaults && a.defaults.transformResponse;
        H(g) ? g = g.filter(function(a) {
          return a !== Zb;
        }) : g === Zb && (g = null);
        return a.get(e, {
          cache: b,
          transformResponse: g
        })["finally"](function() {
          d.totalPendingRequests--;
        }).then(function(a) {
          return a.data;
        }, function(a) {
          if (!f)
            throw la("tpload", e);
          return c.reject(a);
        });
      }
      d.totalPendingRequests = 0;
      return d;
    }];
  }
  function Xe() {
    this.$get = ["$rootScope", "$browser", "$location", function(b, a, c) {
      return {
        findBindings: function(a, b, c) {
          a = a.getElementsByClassName("ng-binding");
          var g = [];
          r(a, function(a) {
            var d = ca.element(a).data("$binding");
            d && r(d, function(d) {
              c ? (new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
            });
          });
          return g;
        },
        findModels: function(a, b, c) {
          for (var g = ["ng-", "data-ng-", "ng\\:"],
              h = 0; h < g.length; ++h) {
            var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
            if (l.length)
              return l;
          }
        },
        getLocation: function() {
          return c.url();
        },
        setLocation: function(a) {
          a !== c.url() && (c.url(a), b.$digest());
        },
        whenStable: function(b) {
          a.notifyWhenNoOutstandingRequests(b);
        }
      };
    }];
  }
  function Ye() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(b, a, c, d, e) {
      function f(f, l, k) {
        var n = y(k) && !k,
            p = (n ? d : c).defer(),
            q = p.promise;
        l = a.defer(function() {
          try {
            p.resolve(f());
          } catch (a) {
            p.reject(a), e(a);
          } finally {
            delete g[q.$$timeoutId];
          }
          n || b.$apply();
        }, l);
        q.$$timeoutId = l;
        g[l] = p;
        return q;
      }
      var g = {};
      f.cancel = function(b) {
        return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
      };
      return f;
    }];
  }
  function Aa(b) {
    Qa && ($.setAttribute("href", b), b = $.href);
    $.setAttribute("href", b);
    return {
      href: $.href,
      protocol: $.protocol ? $.protocol.replace(/:$/, "") : "",
      host: $.host,
      search: $.search ? $.search.replace(/^\?/, "") : "",
      hash: $.hash ? $.hash.replace(/^#/, "") : "",
      hostname: $.hostname,
      port: $.port,
      pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname
    };
  }
  function $c(b) {
    b = C(b) ? Aa(b) : b;
    return b.protocol === id.protocol && b.host === id.host;
  }
  function Ze() {
    this.$get = ea(Q);
  }
  function Fc(b) {
    function a(c, d) {
      if (J(c)) {
        var e = {};
        r(c, function(b, c) {
          e[c] = a(c, b);
        });
        return e;
      }
      return b.factory(c + "Filter", d);
    }
    this.register = a;
    this.$get = ["$injector", function(a) {
      return function(b) {
        return a.get(b + "Filter");
      };
    }];
    a("currency", jd);
    a("date", kd);
    a("filter", Ef);
    a("json", Ff);
    a("limitTo", Gf);
    a("lowercase", Hf);
    a("number", ld);
    a("orderBy", md);
    a("uppercase", If);
  }
  function Ef() {
    return function(b, a, c) {
      if (!H(b))
        return b;
      var d;
      switch (typeof a) {
        case "function":
          break;
        case "boolean":
        case "number":
        case "string":
          d = !0;
        case "object":
          a = Jf(a, c, d);
          break;
        default:
          return b;
      }
      return b.filter(a);
    };
  }
  function Jf(b, a, c) {
    var d = J(b) && "$" in b;
    !0 === a ? a = ha : G(a) || (a = function(a, b) {
      if (J(a) || J(b))
        return !1;
      a = z("" + a);
      b = z("" + b);
      return -1 !== a.indexOf(b);
    });
    return function(e) {
      return d && !J(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c);
    };
  }
  function Ha(b, a, c, d, e) {
    var f = null !== b ? typeof b : "null",
        g = null !== a ? typeof a : "null";
    if ("string" === g && "!" === a.charAt(0))
      return !Ha(b, a.substring(1), c, d);
    if (H(b))
      return b.some(function(b) {
        return Ha(b, a, c, d);
      });
    switch (f) {
      case "object":
        var h;
        if (d) {
          for (h in b)
            if ("$" !== h.charAt(0) && Ha(b[h], a, c, !0))
              return !0;
          return e ? !1 : Ha(b, a, c, !1);
        }
        if ("object" === g) {
          for (h in a)
            if (e = a[h], !G(e) && !x(e) && (f = "$" === h, !Ha(f ? b : b[h], e, c, f, f)))
              return !1;
          return !0;
        }
        return c(b, a);
      case "function":
        return !1;
      default:
        return c(b, a);
    }
  }
  function jd(b) {
    var a = b.NUMBER_FORMATS;
    return function(b, d, e) {
      x(d) && (d = a.CURRENCY_SYM);
      x(e) && (e = a.PATTERNS[1].maxFrac);
      return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
    };
  }
  function ld(b) {
    var a = b.NUMBER_FORMATS;
    return function(b, d) {
      return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function nd(b, a, c, d, e) {
    if (!isFinite(b) || J(b))
      return "";
    var f = 0 > b;
    b = Math.abs(b);
    var g = b + "",
        h = "",
        l = [],
        k = !1;
    if (-1 !== g.indexOf("e")) {
      var n = g.match(/([\d\.]+)e(-?)(\d+)/);
      n && "-" == n[2] && n[3] > e + 1 ? b = 0 : (h = g, k = !0);
    }
    if (k)
      0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
    else {
      g = (g.split(od)[1] || "").length;
      x(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
      b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
      var g = ("" + b).split(od),
          k = g[0],
          g = g[1] || "",
          p = 0,
          q = a.lgSize,
          u = a.gSize;
      if (k.length >= q + u)
        for (p = k.length - q, n = 0; n < p; n++)
          0 === (p - n) % u && 0 !== n && (h += c), h += k.charAt(n);
      for (n = p; n < k.length; n++)
        0 === (k.length - n) % q && 0 !== n && (h += c), h += k.charAt(n);
      for (; g.length < e; )
        g += "0";
      e && "0" !== e && (h += d + g.substr(0, e));
    }
    0 === b && (f = !1);
    l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
    return l.join("");
  }
  function Ib(b, a, c) {
    var d = "";
    0 > b && (d = "-", b = -b);
    for (b = "" + b; b.length < a; )
      b = "0" + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function U(b, a, c, d) {
    c = c || 0;
    return function(e) {
      e = e["get" + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return Ib(e, a, d);
    };
  }
  function Jb(b, a) {
    return function(c, d) {
      var e = c["get" + b](),
          f = ub(a ? "SHORT" + b : b);
      return d[f][e];
    };
  }
  function pd(b) {
    var a = (new Date(b, 0, 1)).getDay();
    return new Date(b, 0, (4 >= a ? 5 : 12) - a);
  }
  function qd(b) {
    return function(a) {
      var c = pd(a.getFullYear());
      a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
      a = 1 + Math.round(a / 6048E5);
      return Ib(a, b);
    };
  }
  function ic(b, a) {
    return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1];
  }
  function kd(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            l = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = aa(b[9] + b[10]), g = aa(b[9] + b[11]));
        h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3]));
        f = aa(b[4] || 0) - f;
        g = aa(b[5] || 0) - g;
        h = aa(b[6] || 0);
        b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
        l.call(a, f, g, h, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function(c, e, f) {
      var g = "",
          h = [],
          l,
          k;
      e = e || "mediumDate";
      e = b.DATETIME_FORMATS[e] || e;
      C(c) && (c = Kf.test(c) ? aa(c) : a(c));
      Y(c) && (c = new Date(c));
      if (!ga(c))
        return c;
      for (; e; )
        (k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
      f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
      r(h, function(a) {
        l = Mf[a];
        g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });
      return g;
    };
  }
  function Ff() {
    return function(b, a) {
      x(a) && (a = 2);
      return $a(b, a);
    };
  }
  function Gf() {
    return function(b, a) {
      Y(b) && (b = b.toString());
      return H(b) || C(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : aa(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : C(b) ? "" : [] : b;
    };
  }
  function md(b) {
    return function(a, c, d) {
      function e(a, b) {
        return b ? function(b, c) {
          return a(c, b);
        } : a;
      }
      function f(a) {
        switch (typeof a) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1;
        }
      }
      function g(a) {
        return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : "";
      }
      function h(a, b) {
        var c = typeof a,
            d = typeof b;
        c === d && "object" === c && (a = g(a), b = g(b));
        return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }
      if (!Sa(a))
        return a;
      c = H(c) ? c : [c];
      0 === c.length && (c = ["+"]);
      c = c.map(function(a) {
        var c = !1,
            d = a || ra;
        if (C(a)) {
          if ("+" == a.charAt(0) || "-" == a.charAt(0))
            c = "-" == a.charAt(0), a = a.substring(1);
          if ("" === a)
            return e(h, c);
          d = b(a);
          if (d.constant) {
            var f = d();
            return e(function(a, b) {
              return h(a[f], b[f]);
            }, c);
          }
        }
        return e(function(a, b) {
          return h(d(a), d(b));
        }, c);
      });
      return Za.call(a).sort(e(function(a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function Ia(b) {
    G(b) && (b = {link: b});
    b.restrict = b.restrict || "AC";
    return ea(b);
  }
  function rd(b, a, c, d, e) {
    var f = this,
        g = [],
        h = f.$$parentForm = b.parent().controller("form") || Kb;
    f.$error = {};
    f.$$success = {};
    f.$pending = t;
    f.$name = e(a.name || a.ngForm || "")(c);
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    f.$submitted = !1;
    h.$addControl(f);
    f.$rollbackViewValue = function() {
      r(g, function(a) {
        a.$rollbackViewValue();
      });
    };
    f.$commitViewValue = function() {
      r(g, function(a) {
        a.$commitViewValue();
      });
    };
    f.$addControl = function(a) {
      La(a.$name, "input");
      g.push(a);
      a.$name && (f[a.$name] = a);
    };
    f.$$renameControl = function(a, b) {
      var c = a.$name;
      f[c] === a && delete f[c];
      f[b] = a;
      a.$name = b;
    };
    f.$removeControl = function(a) {
      a.$name && f[a.$name] === a && delete f[a.$name];
      r(f.$pending, function(b, c) {
        f.$setValidity(c, null, a);
      });
      r(f.$error, function(b, c) {
        f.$setValidity(c, null, a);
      });
      r(f.$$success, function(b, c) {
        f.$setValidity(c, null, a);
      });
      Xa(g, a);
    };
    sd({
      ctrl: this,
      $element: b,
      set: function(a, b, c) {
        var d = a[b];
        d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      },
      unset: function(a, b, c) {
        var d = a[b];
        d && (Xa(d, c), 0 === d.length && delete a[b]);
      },
      parentForm: h,
      $animate: d
    });
    f.$setDirty = function() {
      d.removeClass(b, Ra);
      d.addClass(b, Lb);
      f.$dirty = !0;
      f.$pristine = !1;
      h.$setDirty();
    };
    f.$setPristine = function() {
      d.setClass(b, Ra, Lb + " ng-submitted");
      f.$dirty = !1;
      f.$pristine = !0;
      f.$submitted = !1;
      r(g, function(a) {
        a.$setPristine();
      });
    };
    f.$setUntouched = function() {
      r(g, function(a) {
        a.$setUntouched();
      });
    };
    f.$setSubmitted = function() {
      d.addClass(b, "ng-submitted");
      f.$submitted = !0;
      h.$setSubmitted();
    };
  }
  function jc(b) {
    b.$formatters.push(function(a) {
      return b.$isEmpty(a) ? a : a.toString();
    });
  }
  function jb(b, a, c, d, e, f) {
    var g = z(a[0].type);
    if (!e.android) {
      var h = !1;
      a.on("compositionstart", function(a) {
        h = !0;
      });
      a.on("compositionend", function() {
        h = !1;
        l();
      });
    }
    var l = function(b) {
      k && (f.defer.cancel(k), k = null);
      if (!h) {
        var e = a.val();
        b = b && b.type;
        "password" === g || c.ngTrim && "false" === c.ngTrim || (e = N(e));
        (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
      }
    };
    if (e.hasEvent("input"))
      a.on("input", l);
    else {
      var k,
          n = function(a, b, c) {
            k || (k = f.defer(function() {
              k = null;
              b && b.value === c || l(a);
            }));
          };
      a.on("keydown", function(a) {
        var b = a.keyCode;
        91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a, this, this.value);
      });
      if (e.hasEvent("paste"))
        a.on("paste cut", n);
    }
    a.on("change", l);
    d.$render = function() {
      a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
    };
  }
  function Mb(b, a) {
    return function(c, d) {
      var e,
          f;
      if (ga(c))
        return c;
      if (C(c)) {
        '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
        if (Nf.test(c))
          return new Date(c);
        b.lastIndex = 0;
        if (e = b.exec(c))
          return e.shift(), f = d ? {
            yyyy: d.getFullYear(),
            MM: d.getMonth() + 1,
            dd: d.getDate(),
            HH: d.getHours(),
            mm: d.getMinutes(),
            ss: d.getSeconds(),
            sss: d.getMilliseconds() / 1E3
          } : {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0,
            sss: 0
          }, r(e, function(b, c) {
            c < a.length && (f[a[c]] = +b);
          }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }
      return NaN;
    };
  }
  function kb(b, a, c, d) {
    return function(e, f, g, h, l, k, n) {
      function p(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }
      function q(a) {
        return y(a) ? ga(a) ? a : c(a) : t;
      }
      td(e, f, g, h);
      jb(e, f, g, h, l, k);
      var u = h && h.$options && h.$options.timezone,
          s;
      h.$$parserName = b;
      h.$parsers.push(function(b) {
        return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, s), "UTC" === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t;
      });
      h.$formatters.push(function(a) {
        if (a && !ga(a))
          throw Nb("datefmt", a);
        if (p(a)) {
          if ((s = a) && "UTC" === u) {
            var b = 6E4 * s.getTimezoneOffset();
            s = new Date(s.getTime() + b);
          }
          return n("date")(a, d, u);
        }
        s = null;
        return "";
      });
      if (y(g.min) || g.ngMin) {
        var r;
        h.$validators.min = function(a) {
          return !p(a) || x(r) || c(a) >= r;
        };
        g.$observe("min", function(a) {
          r = q(a);
          h.$validate();
        });
      }
      if (y(g.max) || g.ngMax) {
        var v;
        h.$validators.max = function(a) {
          return !p(a) || x(v) || c(a) <= v;
        };
        g.$observe("max", function(a) {
          v = q(a);
          h.$validate();
        });
      }
    };
  }
  function td(b, a, c, d) {
    (d.$$hasNativeValidators = J(a[0].validity)) && d.$parsers.push(function(b) {
      var c = a.prop("validity") || {};
      return c.badInput && !c.typeMismatch ? t : b;
    });
  }
  function ud(b, a, c, d, e) {
    if (y(d)) {
      b = b(d);
      if (!b.constant)
        throw R("ngModel")("constexpr", c, d);
      return b(a);
    }
    return e;
  }
  function kc(b, a) {
    b = "ngClass" + b;
    return ["$animate", function(c) {
      function d(a, b) {
        var c = [],
            d = 0;
        a: for (; d < a.length; d++) {
          for (var e = a[d],
              n = 0; n < b.length; n++)
            if (e == b[n])
              continue a;
          c.push(e);
        }
        return c;
      }
      function e(a) {
        if (!H(a)) {
          if (C(a))
            return a.split(" ");
          if (J(a)) {
            var b = [];
            r(a, function(a, c) {
              a && (b = b.concat(c.split(" ")));
            });
            return b;
          }
        }
        return a;
      }
      return {
        restrict: "AC",
        link: function(f, g, h) {
          function l(a, b) {
            var c = g.data("$classCounts") || {},
                d = [];
            r(a, function(a) {
              if (0 < b || c[a])
                c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
            });
            g.data("$classCounts", c);
            return d.join(" ");
          }
          function k(b) {
            if (!0 === a || f.$index % 2 === a) {
              var k = e(b || []);
              if (!n) {
                var u = l(k, 1);
                h.$addClass(u);
              } else if (!ha(b, n)) {
                var s = e(n),
                    u = d(k, s),
                    k = d(s, k),
                    u = l(u, 1),
                    k = l(k, -1);
                u && u.length && c.addClass(g, u);
                k && k.length && c.removeClass(g, k);
              }
            }
            n = sa(b);
          }
          var n;
          f.$watch(h[b], k, !0);
          h.$observe("class", function(a) {
            k(f.$eval(h[b]));
          });
          "ngClass" !== b && f.$watch("$index", function(c, d) {
            var g = c & 1;
            if (g !== (d & 1)) {
              var k = e(f.$eval(h[b]));
              g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
            }
          });
        }
      };
    }];
  }
  function sd(b) {
    function a(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }
    function c(b, c) {
      b = b ? "-" + vc(b, "-") : "";
      a(lb + b, !0 === c);
      a(vd + b, !1 === c);
    }
    var d = b.ctrl,
        e = b.$element,
        f = {},
        g = b.set,
        h = b.unset,
        l = b.parentForm,
        k = b.$animate;
    f[vd] = !(f[lb] = e.hasClass(lb));
    d.$setValidity = function(b, e, f) {
      e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));
      Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
      d.$pending ? (a(xd, !0), d.$valid = d.$invalid = t, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
      e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
      c(b, e);
      l.$setValidity(b, e, d);
    };
  }
  function wd(b) {
    if (b)
      for (var a in b)
        return !1;
    return !0;
  }
  var Of = /^\/(.+)\/([a-z]*)$/,
      z = function(b) {
        return C(b) ? b.toLowerCase() : b;
      },
      tc = Object.prototype.hasOwnProperty,
      ub = function(b) {
        return C(b) ? b.toUpperCase() : b;
      },
      Qa,
      A,
      ta,
      Za = [].slice,
      qf = [].splice,
      Pf = [].push,
      Ca = Object.prototype.toString,
      Ja = R("ng"),
      ca = Q.angular || (Q.angular = {}),
      cb,
      ob = 0;
  Qa = W.documentMode;
  E.$inject = [];
  ra.$inject = [];
  var H = Array.isArray,
      N = function(b) {
        return C(b) ? b.trim() : b;
      },
      gd = function(b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
      },
      bb = function() {
        if (y(bb.isActive_))
          return bb.isActive_;
        var b = !(!W.querySelector("[ng-csp]") && !W.querySelector("[data-ng-csp]"));
        if (!b)
          try {
            new Function("");
          } catch (a) {
            b = !0;
          }
        return bb.isActive_ = b;
      },
      rb = ["ng-", "data-ng-", "ng:", "x-ng-"],
      Md = /[A-Z]/g,
      wc = !1,
      Qb,
      qa = 1,
      pb = 3,
      Qd = {
        full: "1.3.15",
        major: 1,
        minor: 3,
        dot: 15,
        codeName: "locality-filtration"
      };
  T.expando = "ng339";
  var zb = T.cache = {},
      hf = 1;
  T._data = function(b) {
    return this.cache[b[this.expando]] || {};
  };
  var cf = /([\:\-\_]+(.))/g,
      df = /^moz([A-Z])/,
      Qf = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      },
      Tb = R("jqLite"),
      gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      Sb = /<|&#?\w+;/,
      ef = /<([\w:]+)/,
      ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ja = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
  ja.optgroup = ja.option;
  ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
  ja.th = ja.td;
  var Ka = T.prototype = {
    ready: function(b) {
      function a() {
        c || (c = !0, b());
      }
      var c = !1;
      "complete" === W.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), T(Q).on("load", a));
    },
    toString: function() {
      var b = [];
      r(this, function(a) {
        b.push("" + a);
      });
      return "[" + b.join(", ") + "]";
    },
    eq: function(b) {
      return 0 <= b ? A(this[b]) : A(this[this.length + b]);
    },
    length: 0,
    push: Pf,
    sort: [].sort,
    splice: [].splice
  },
      Eb = {};
  r("multiple selected checked disabled readOnly required open".split(" "), function(b) {
    Eb[z(b)] = b;
  });
  var Oc = {};
  r("input select option textarea button form details".split(" "), function(b) {
    Oc[b] = !0;
  });
  var Pc = {
    ngMinlength: "minlength",
    ngMaxlength: "maxlength",
    ngMin: "min",
    ngMax: "max",
    ngPattern: "pattern"
  };
  r({
    data: Vb,
    removeData: xb
  }, function(b, a) {
    T[a] = b;
  });
  r({
    data: Vb,
    inheritedData: Db,
    scope: function(b) {
      return A.data(b, "$scope") || Db(b.parentNode || b, ["$isolateScope", "$scope"]);
    },
    isolateScope: function(b) {
      return A.data(b, "$isolateScope") || A.data(b, "$isolateScopeNoTemplate");
    },
    controller: Kc,
    injector: function(b) {
      return Db(b, "$injector");
    },
    removeAttr: function(b, a) {
      b.removeAttribute(a);
    },
    hasClass: Ab,
    css: function(b, a, c) {
      a = db(a);
      if (y(c))
        b.style[a] = c;
      else
        return b.style[a];
    },
    attr: function(b, a, c) {
      var d = z(a);
      if (Eb[d])
        if (y(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || E).specified ? d : t;
      else if (y(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? t : b;
    },
    prop: function(b, a, c) {
      if (y(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function() {
      function b(a, b) {
        if (x(b)) {
          var d = a.nodeType;
          return d === qa || d === pb ? a.textContent : "";
        }
        a.textContent = b;
      }
      b.$dv = "";
      return b;
    }(),
    val: function(b, a) {
      if (x(a)) {
        if (b.multiple && "select" === va(b)) {
          var c = [];
          r(b.options, function(a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function(b, a) {
      if (x(a))
        return b.innerHTML;
      wb(b, !0);
      b.innerHTML = a;
    },
    empty: Lc
  }, function(b, a) {
    T.prototype[a] = function(a, d) {
      var e,
          f,
          g = this.length;
      if (b !== Lc && (2 == b.length && b !== Ab && b !== Kc ? a : d) === t) {
        if (J(a)) {
          for (e = 0; e < g; e++)
            if (b === Vb)
              b(this[e], a);
            else
              for (f in a)
                b(this[e], f, a[f]);
          return this;
        }
        e = b.$dv;
        g = e === t ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = b(this[f], a, d);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < g; e++)
        b(this[e], a, d);
      return this;
    };
  });
  r({
    removeData: xb,
    on: function a(c, d, e, f) {
      if (y(f))
        throw Tb("onargs");
      if (Gc(c)) {
        var g = yb(c, !0);
        f = g.events;
        var h = g.handle;
        h || (h = g.handle = lf(c, f));
        for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d],
            l = g.length; l--; ) {
          d = g[l];
          var k = f[d];
          k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function(a) {
            var c = a.relatedTarget;
            c && (c === this || this.contains(c)) || h(a, d);
          }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
          k.push(e);
        }
      }
    },
    off: Jc,
    one: function(a, c, d) {
      a = A(a);
      a.on(c, function f() {
        a.off(c, d);
        a.off(c, f);
      });
      a.on(c, d);
    },
    replaceWith: function(a, c) {
      var d,
          e = a.parentNode;
      wb(a);
      r(new T(c), function(c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function(a) {
      var c = [];
      r(a.childNodes, function(a) {
        a.nodeType === qa && c.push(a);
      });
      return c;
    },
    contents: function(a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function(a, c) {
      var d = a.nodeType;
      if (d === qa || 11 === d) {
        c = new T(c);
        for (var d = 0,
            e = c.length; d < e; d++)
          a.appendChild(c[d]);
      }
    },
    prepend: function(a, c) {
      if (a.nodeType === qa) {
        var d = a.firstChild;
        r(new T(c), function(c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function(a, c) {
      c = A(c).eq(0).clone()[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: Mc,
    detach: function(a) {
      Mc(a, !0);
    },
    after: function(a, c) {
      var d = a,
          e = a.parentNode;
      c = new T(c);
      for (var f = 0,
          g = c.length; f < g; f++) {
        var h = c[f];
        e.insertBefore(h, d.nextSibling);
        d = h;
      }
    },
    addClass: Cb,
    removeClass: Bb,
    toggleClass: function(a, c, d) {
      c && r(c.split(" "), function(c) {
        var f = d;
        x(f) && (f = !Ab(a, c));
        (f ? Cb : Bb)(a, c);
      });
    },
    parent: function(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function(a) {
      return a.nextElementSibling;
    },
    find: function(a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    },
    clone: Ub,
    triggerHandler: function(a, c, d) {
      var e,
          f,
          g = c.type || c,
          h = yb(a);
      if (h = (h = h && h.events) && h[g])
        e = {
          preventDefault: function() {
            this.defaultPrevented = !0;
          },
          isDefaultPrevented: function() {
            return !0 === this.defaultPrevented;
          },
          stopImmediatePropagation: function() {
            this.immediatePropagationStopped = !0;
          },
          isImmediatePropagationStopped: function() {
            return !0 === this.immediatePropagationStopped;
          },
          stopPropagation: E,
          type: g,
          target: a
        }, c.type && (e = w(e, c)), c = sa(h), f = d ? [e].concat(d) : [e], r(c, function(c) {
          e.isImmediatePropagationStopped() || c.apply(a, f);
        });
    }
  }, function(a, c) {
    T.prototype[c] = function(c, e, f) {
      for (var g,
          h = 0,
          l = this.length; h < l; h++)
        x(g) ? (g = a(this[h], c, e, f), y(g) && (g = A(g))) : Ic(g, a(this[h], c, e, f));
      return y(g) ? g : this;
    };
    T.prototype.bind = T.prototype.on;
    T.prototype.unbind = T.prototype.off;
  });
  eb.prototype = {
    put: function(a, c) {
      this[Ma(a, this.nextUid)] = c;
    },
    get: function(a) {
      return this[Ma(a, this.nextUid)];
    },
    remove: function(a) {
      var c = this[a = Ma(a, this.nextUid)];
      delete this[a];
      return c;
    }
  };
  var Rc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
      Rf = /,/,
      Sf = /^\s*(_?)(\S+?)\1\s*$/,
      Qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Fa = R("$injector");
  ab.$$annotate = function(a, c, d) {
    var e;
    if ("function" === typeof a) {
      if (!(e = a.$inject)) {
        e = [];
        if (a.length) {
          if (c)
            throw C(d) && d || (d = a.name || mf(a)), Fa("strictdi", d);
          c = a.toString().replace(Qc, "");
          c = c.match(Rc);
          r(c[1].split(Rf), function(a) {
            a.replace(Sf, function(a, c, d) {
              e.push(d);
            });
          });
        }
        a.$inject = e;
      }
    } else
      H(a) ? (c = a.length - 1, sb(a[c], "fn"), e = a.slice(0, c)) : sb(a, "fn", !0);
    return e;
  };
  var Tf = R("$animate"),
      Ce = ["$provide", function(a) {
        this.$$selectors = {};
        this.register = function(c, d) {
          var e = c + "-animation";
          if (c && "." != c.charAt(0))
            throw Tf("notcsel", c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d);
        };
        this.classNameFilter = function(a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter;
        };
        this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, d, e) {
          function f(d) {
            var f,
                g = a.defer();
            g.promise.$$cancelFn = function() {
              f && f();
            };
            e.$$postDigest(function() {
              f = d(function() {
                g.resolve();
              });
            });
            return g.promise;
          }
          function g(a, c) {
            var d = [],
                e = [],
                f = ia();
            r((a.attr("class") || "").split(/\s+/), function(a) {
              f[a] = !0;
            });
            r(c, function(a, c) {
              var g = f[c];
              !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c);
            });
            return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null];
          }
          function h(a, c, d) {
            for (var e = 0,
                f = c.length; e < f; ++e)
              a[c[e]] = d;
          }
          function l() {
            n || (n = a.defer(), d(function() {
              n.resolve();
              n = null;
            }));
            return n.promise;
          }
          function k(a, c) {
            if (ca.isObject(c)) {
              var d = w(c.from || {}, c.to || {});
              a.css(d);
            }
          }
          var n;
          return {
            animate: function(a, c, d) {
              k(a, {
                from: c,
                to: d
              });
              return l();
            },
            enter: function(a, c, d, e) {
              k(a, e);
              d ? d.after(a) : c.prepend(a);
              return l();
            },
            leave: function(a, c) {
              k(a, c);
              a.remove();
              return l();
            },
            move: function(a, c, d, e) {
              return this.enter(a, c, d, e);
            },
            addClass: function(a, c, d) {
              return this.setClass(a, c, [], d);
            },
            $$addClassImmediately: function(a, c, d) {
              a = A(a);
              c = C(c) ? c : H(c) ? c.join(" ") : "";
              r(a, function(a) {
                Cb(a, c);
              });
              k(a, d);
              return l();
            },
            removeClass: function(a, c, d) {
              return this.setClass(a, [], c, d);
            },
            $$removeClassImmediately: function(a, c, d) {
              a = A(a);
              c = C(c) ? c : H(c) ? c.join(" ") : "";
              r(a, function(a) {
                Bb(a, c);
              });
              k(a, d);
              return l();
            },
            setClass: function(a, c, d, e) {
              var k = this,
                  l = !1;
              a = A(a);
              var m = a.data("$$animateClasses");
              m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = {
                classes: {},
                options: e
              }, l = !0);
              e = m.classes;
              c = H(c) ? c : c.split(" ");
              d = H(d) ? d : d.split(" ");
              h(e, c, !0);
              h(e, d, !1);
              l && (m.promise = f(function(c) {
                var d = a.data("$$animateClasses");
                a.removeData("$$animateClasses");
                if (d) {
                  var e = g(a, d.classes);
                  e && k.$$setClassImmediately(a, e[0], e[1], d.options);
                }
                c();
              }), a.data("$$animateClasses", m));
              return m.promise;
            },
            $$setClassImmediately: function(a, c, d, e) {
              c && this.$$addClassImmediately(a, c);
              d && this.$$removeClassImmediately(a, d);
              k(a, e);
              return l();
            },
            enabled: E,
            cancel: E
          };
        }];
      }],
      la = R("$compile");
  yc.$inject = ["$provide", "$$sanitizeUriProvider"];
  var Sc = /^((?:x|data)[\:\-_])/i,
      rf = R("$controller"),
      Wc = "application/json",
      $b = {"Content-Type": Wc + ";charset=utf-8"},
      tf = /^\[|^\{(?!\{)/,
      uf = {
        "[": /]$/,
        "{": /}$/
      },
      sf = /^\)\]\}',?\n/,
      ac = R("$interpolate"),
      Uf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      xf = {
        http: 80,
        https: 443,
        ftp: 21
      },
      Gb = R("$location"),
      Vf = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Hb("$$absUrl"),
        url: function(a) {
          if (x(a))
            return this.$$url;
          var c = Uf.exec(a);
          (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
          (c[2] || c[1] || "" === a) && this.search(c[3] || "");
          this.hash(c[5] || "");
          return this;
        },
        protocol: Hb("$$protocol"),
        host: Hb("$$host"),
        port: Hb("$$port"),
        path: dd("$$path", function(a) {
          a = null !== a ? a.toString() : "";
          return "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, c) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (C(a) || Y(a))
                a = a.toString(), this.$$search = sc(a);
              else if (J(a))
                a = Da(a, {}), r(a, function(c, e) {
                  null == c && delete a[e];
                }), this.$$search = a;
              else
                throw Gb("isrcharg");
              break;
            default:
              x(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
          }
          this.$$compose();
          return this;
        },
        hash: dd("$$hash", function(a) {
          return null !== a ? a.toString() : "";
        }),
        replace: function() {
          this.$$replace = !0;
          return this;
        }
      };
  r([cd, ec, dc], function(a) {
    a.prototype = Object.create(Vf);
    a.prototype.state = function(c) {
      if (!arguments.length)
        return this.$$state;
      if (a !== dc || !this.$$html5)
        throw Gb("nostate");
      this.$$state = x(c) ? null : c;
      return this;
    };
  });
  var na = R("$parse"),
      Wf = Function.prototype.call,
      Xf = Function.prototype.apply,
      Yf = Function.prototype.bind,
      mb = ia();
  r({
    "null": function() {
      return null;
    },
    "true": function() {
      return !0;
    },
    "false": function() {
      return !1;
    },
    undefined: function() {}
  }, function(a, c) {
    a.constant = a.literal = a.sharedGetter = !0;
    mb[c] = a;
  });
  mb["this"] = function(a) {
    return a;
  };
  mb["this"].sharedGetter = !0;
  var nb = w(ia(), {
    "+": function(a, c, d, e) {
      d = d(a, c);
      e = e(a, c);
      return y(d) ? y(e) ? d + e : d : y(e) ? e : t;
    },
    "-": function(a, c, d, e) {
      d = d(a, c);
      e = e(a, c);
      return (y(d) ? d : 0) - (y(e) ? e : 0);
    },
    "*": function(a, c, d, e) {
      return d(a, c) * e(a, c);
    },
    "/": function(a, c, d, e) {
      return d(a, c) / e(a, c);
    },
    "%": function(a, c, d, e) {
      return d(a, c) % e(a, c);
    },
    "===": function(a, c, d, e) {
      return d(a, c) === e(a, c);
    },
    "!==": function(a, c, d, e) {
      return d(a, c) !== e(a, c);
    },
    "==": function(a, c, d, e) {
      return d(a, c) == e(a, c);
    },
    "!=": function(a, c, d, e) {
      return d(a, c) != e(a, c);
    },
    "<": function(a, c, d, e) {
      return d(a, c) < e(a, c);
    },
    ">": function(a, c, d, e) {
      return d(a, c) > e(a, c);
    },
    "<=": function(a, c, d, e) {
      return d(a, c) <= e(a, c);
    },
    ">=": function(a, c, d, e) {
      return d(a, c) >= e(a, c);
    },
    "&&": function(a, c, d, e) {
      return d(a, c) && e(a, c);
    },
    "||": function(a, c, d, e) {
      return d(a, c) || e(a, c);
    },
    "!": function(a, c, d) {
      return !d(a, c);
    },
    "=": !0,
    "|": !0
  }),
      Zf = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "\t",
        v: "\v",
        "'": "'",
        '"': '"'
      },
      hc = function(a) {
        this.options = a;
      };
  hc.prototype = {
    constructor: hc,
    lex: function(a) {
      this.text = a;
      this.index = 0;
      for (this.tokens = []; this.index < this.text.length; )
        if (a = this.text.charAt(this.index), '"' === a || "'" === a)
          this.readString(a);
        else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(a))
          this.readIdent();
        else if (this.is(a, "(){}[].,;:?"))
          this.tokens.push({
            index: this.index,
            text: a
          }), this.index++;
        else if (this.isWhitespace(a))
          this.index++;
        else {
          var c = a + this.peek(),
              d = c + this.peek(2),
              e = nb[c],
              f = nb[d];
          nb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
            index: this.index,
            text: a,
            operator: !0
          }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
        }
      return this.tokens;
    },
    is: function(a, c) {
      return -1 !== c.indexOf(a);
    },
    peek: function(a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    },
    isWhitespace: function(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a;
    },
    isIdent: function(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    },
    isExpOperator: function(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    },
    throwError: function(a, c, d) {
      d = d || this.index;
      c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
      throw na("lexerr", a, c, this.text);
    },
    readNumber: function() {
      for (var a = "",
          c = this.index; this.index < this.text.length; ) {
        var d = z(this.text.charAt(this.index));
        if ("." == d || this.isNumber(d))
          a += d;
        else {
          var e = this.peek();
          if ("e" == d && this.isExpOperator(e))
            a += d;
          else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))
            break;
          else
            this.throwError("Invalid exponent");
        }
        this.index++;
      }
      this.tokens.push({
        index: c,
        text: a,
        constant: !0,
        value: Number(a)
      });
    },
    readIdent: function() {
      for (var a = this.index; this.index < this.text.length; ) {
        var c = this.text.charAt(this.index);
        if (!this.isIdent(c) && !this.isNumber(c))
          break;
        this.index++;
      }
      this.tokens.push({
        index: a,
        text: this.text.slice(a, this.index),
        identifier: !0
      });
    },
    readString: function(a) {
      var c = this.index;
      this.index++;
      for (var d = "",
          e = a,
          f = !1; this.index < this.text.length; ) {
        var g = this.text.charAt(this.index),
            e = e + g;
        if (f)
          "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Zf[g] || g, f = !1;
        else if ("\\" === g)
          f = !0;
        else {
          if (g === a) {
            this.index++;
            this.tokens.push({
              index: c,
              text: e,
              constant: !0,
              value: d
            });
            return;
          }
          d += g;
        }
        this.index++;
      }
      this.throwError("Unterminated quote", c);
    }
  };
  var ib = function(a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  ib.ZERO = w(function() {
    return 0;
  }, {
    sharedGetter: !0,
    constant: !0
  });
  ib.prototype = {
    constructor: ib,
    parse: function(a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.statements();
      0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
      a.literal = !!a.literal;
      a.constant = !!a.constant;
      return a;
    },
    primary: function() {
      var a;
      this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in mb ? a = mb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
      for (var c,
          d; c = this.expect("(", "[", "."); )
        "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
      return a;
    },
    throwError: function(a, c) {
      throw na("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    },
    peekToken: function() {
      if (0 === this.tokens.length)
        throw na("ueoe", this.text);
      return this.tokens[0];
    },
    peek: function(a, c, d, e) {
      return this.peekAhead(0, a, c, d, e);
    },
    peekAhead: function(a, c, d, e, f) {
      if (this.tokens.length > a) {
        a = this.tokens[a];
        var g = a.text;
        if (g === c || g === d || g === e || g === f || !(c || d || e || f))
          return a;
      }
      return !1;
    },
    expect: function(a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
    },
    consume: function(a) {
      if (0 === this.tokens.length)
        throw na("ueoe", this.text);
      var c = this.expect(a);
      c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
      return c;
    },
    unaryFn: function(a, c) {
      var d = nb[a];
      return w(function(a, f) {
        return d(a, f, c);
      }, {
        constant: c.constant,
        inputs: [c]
      });
    },
    binaryFn: function(a, c, d, e) {
      var f = nb[c];
      return w(function(c, e) {
        return f(c, e, a, d);
      }, {
        constant: a.constant && d.constant,
        inputs: !e && [a, d]
      });
    },
    identifier: function() {
      for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "("); )
        a += this.consume().text + this.consume().text;
      return zf(a, this.options, this.text);
    },
    constant: function() {
      var a = this.consume().value;
      return w(function() {
        return a;
      }, {
        constant: !0,
        literal: !0
      });
    },
    statements: function() {
      for (var a = []; ; )
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))
          return 1 === a.length ? a[0] : function(c, d) {
            for (var e,
                f = 0,
                g = a.length; f < g; f++)
              e = a[f](c, d);
            return e;
          };
    },
    filterChain: function() {
      for (var a = this.expression(); this.expect("|"); )
        a = this.filter(a);
      return a;
    },
    filter: function(a) {
      var c = this.$filter(this.consume().text),
          d,
          e;
      if (this.peek(":"))
        for (d = [], e = []; this.expect(":"); )
          d.push(this.expression());
      var f = [a].concat(d || []);
      return w(function(f, h) {
        var l = a(f, h);
        if (e) {
          e[0] = l;
          for (l = d.length; l--; )
            e[l + 1] = d[l](f, h);
          return c.apply(t, e);
        }
        return c(l);
      }, {
        constant: !c.$stateful && f.every(fc),
        inputs: !c.$stateful && f
      });
    },
    expression: function() {
      return this.assignment();
    },
    assignment: function() {
      var a = this.ternary(),
          c,
          d;
      return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), w(function(d, f) {
        return a.assign(d, c(d, f), f);
      }, {inputs: [a, c]})) : a;
    },
    ternary: function() {
      var a = this.logicalOR(),
          c;
      if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
        var d = this.assignment();
        return w(function(e, f) {
          return a(e, f) ? c(e, f) : d(e, f);
        }, {constant: a.constant && c.constant && d.constant});
      }
      return a;
    },
    logicalOR: function() {
      for (var a = this.logicalAND(),
          c; c = this.expect("||"); )
        a = this.binaryFn(a, c.text, this.logicalAND(), !0);
      return a;
    },
    logicalAND: function() {
      for (var a = this.equality(),
          c; c = this.expect("&&"); )
        a = this.binaryFn(a, c.text, this.equality(), !0);
      return a;
    },
    equality: function() {
      for (var a = this.relational(),
          c; c = this.expect("==", "!=", "===", "!=="); )
        a = this.binaryFn(a, c.text, this.relational());
      return a;
    },
    relational: function() {
      for (var a = this.additive(),
          c; c = this.expect("<", ">", "<=", ">="); )
        a = this.binaryFn(a, c.text, this.additive());
      return a;
    },
    additive: function() {
      for (var a = this.multiplicative(),
          c; c = this.expect("+", "-"); )
        a = this.binaryFn(a, c.text, this.multiplicative());
      return a;
    },
    multiplicative: function() {
      for (var a = this.unary(),
          c; c = this.expect("*", "/", "%"); )
        a = this.binaryFn(a, c.text, this.unary());
      return a;
    },
    unary: function() {
      var a;
      return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(ib.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary();
    },
    fieldAccess: function(a) {
      var c = this.identifier();
      return w(function(d, e, f) {
        d = f || a(d, e);
        return null == d ? t : c(d);
      }, {assign: function(d, e, f) {
          var g = a(d, f);
          g || a.assign(d, g = {}, f);
          return c.assign(g, e);
        }});
    },
    objectIndex: function(a) {
      var c = this.text,
          d = this.expression();
      this.consume("]");
      return w(function(e, f) {
        var g = a(e, f),
            h = d(e, f);
        ua(h, c);
        return g ? oa(g[h], c) : t;
      }, {assign: function(e, f, g) {
          var h = ua(d(e, g), c),
              l = oa(a(e, g), c);
          l || a.assign(e, l = {}, g);
          return l[h] = f;
        }});
    },
    functionCall: function(a, c) {
      var d = [];
      if (")" !== this.peekToken().text) {
        do
          d.push(this.expression());
 while (this.expect(","));
      }
      this.consume(")");
      var e = this.text,
          f = d.length ? [] : null;
      return function(g, h) {
        var l = c ? c(g, h) : y(c) ? t : g,
            k = a(g, h, l) || E;
        if (f)
          for (var n = d.length; n--; )
            f[n] = oa(d[n](g, h), e);
        oa(l, e);
        if (k) {
          if (k.constructor === k)
            throw na("isecfn", e);
          if (k === Wf || k === Xf || k === Yf)
            throw na("isecff", e);
        }
        l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
        f && (f.length = 0);
        return oa(l, e);
      };
    },
    arrayDeclaration: function() {
      var a = [];
      if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]"))
            break;
          a.push(this.expression());
        } while (this.expect(","));
      }
      this.consume("]");
      return w(function(c, d) {
        for (var e = [],
            f = 0,
            g = a.length; f < g; f++)
          e.push(a[f](c, d));
        return e;
      }, {
        literal: !0,
        constant: a.every(fc),
        inputs: a
      });
    },
    object: function() {
      var a = [],
          c = [];
      if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}"))
            break;
          var d = this.consume();
          d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
          this.consume(":");
          c.push(this.expression());
        } while (this.expect(","));
      }
      this.consume("}");
      return w(function(d, f) {
        for (var g = {},
            h = 0,
            l = c.length; h < l; h++)
          g[a[h]] = c[h](d, f);
        return g;
      }, {
        literal: !0,
        constant: c.every(fc),
        inputs: c
      });
    }
  };
  var Bf = ia(),
      Af = ia(),
      Cf = Object.prototype.valueOf,
      Ba = R("$sce"),
      pa = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
      },
      la = R("$compile"),
      $ = W.createElement("a"),
      id = Aa(Q.location.href);
  Fc.$inject = ["$provide"];
  jd.$inject = ["$locale"];
  ld.$inject = ["$locale"];
  var od = ".",
      Mf = {
        yyyy: U("FullYear", 4),
        yy: U("FullYear", 2, 0, !0),
        y: U("FullYear", 1),
        MMMM: Jb("Month"),
        MMM: Jb("Month", !0),
        MM: U("Month", 2, 1),
        M: U("Month", 1, 1),
        dd: U("Date", 2),
        d: U("Date", 1),
        HH: U("Hours", 2),
        H: U("Hours", 1),
        hh: U("Hours", 2, -12),
        h: U("Hours", 1, -12),
        mm: U("Minutes", 2),
        m: U("Minutes", 1),
        ss: U("Seconds", 2),
        s: U("Seconds", 1),
        sss: U("Milliseconds", 3),
        EEEE: Jb("Day"),
        EEE: Jb("Day", !0),
        a: function(a, c) {
          return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
        },
        Z: function(a) {
          a = -1 * a.getTimezoneOffset();
          return a = (0 <= a ? "+" : "") + (Ib(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Ib(Math.abs(a % 60), 2));
        },
        ww: qd(2),
        w: qd(1),
        G: ic,
        GG: ic,
        GGG: ic,
        GGGG: function(a, c) {
          return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1];
        }
      },
      Lf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      Kf = /^\-?\d+$/;
  kd.$inject = ["$locale"];
  var Hf = ea(z),
      If = ea(ub);
  md.$inject = ["$parse"];
  var Td = ea({
    restrict: "E",
    compile: function(a, c) {
      if (!c.href && !c.xlinkHref && !c.name)
        return function(a, c) {
          if ("a" === c[0].nodeName.toLowerCase()) {
            var f = "[object SVGAnimatedString]" === Ca.call(c.prop("href")) ? "xlink:href" : "href";
            c.on("click", function(a) {
              c.attr(f) || a.preventDefault();
            });
          }
        };
    }
  }),
      vb = {};
  r(Eb, function(a, c) {
    if ("multiple" != a) {
      var d = xa("ng-" + c);
      vb[d] = function() {
        return {
          restrict: "A",
          priority: 100,
          link: function(a, f, g) {
            a.$watch(g[d], function(a) {
              g.$set(c, !!a);
            });
          }
        };
      };
    }
  });
  r(Pc, function(a, c) {
    vb[c] = function() {
      return {
        priority: 100,
        link: function(a, e, f) {
          if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
            f.$set("ngPattern", new RegExp(e[1], e[2]));
            return;
          }
          a.$watch(f[c], function(a) {
            f.$set(c, a);
          });
        }
      };
    };
  });
  r(["src", "srcset", "href"], function(a) {
    var c = xa("ng-" + a);
    vb[c] = function() {
      return {
        priority: 99,
        link: function(d, e, f) {
          var g = a,
              h = a;
          "href" === a && "[object SVGAnimatedString]" === Ca.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
          f.$observe(c, function(c) {
            c ? (f.$set(h, c), Qa && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null);
          });
        }
      };
    };
  });
  var Kb = {
    $addControl: E,
    $$renameControl: function(a, c) {
      a.$name = c;
    },
    $removeControl: E,
    $setValidity: E,
    $setDirty: E,
    $setPristine: E,
    $setSubmitted: E
  };
  rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var yd = function(a) {
    return ["$timeout", function(c) {
      return {
        name: "form",
        restrict: a ? "EAC" : "E",
        controller: rd,
        compile: function(d, e) {
          d.addClass(Ra).addClass(lb);
          var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
          return {pre: function(a, d, e, k) {
              if (!("action" in e)) {
                var n = function(c) {
                  a.$apply(function() {
                    k.$commitViewValue();
                    k.$setSubmitted();
                  });
                  c.preventDefault();
                };
                d[0].addEventListener("submit", n, !1);
                d.on("$destroy", function() {
                  c(function() {
                    d[0].removeEventListener("submit", n, !1);
                  }, 0, !1);
                });
              }
              var p = k.$$parentForm;
              f && (hb(a, null, k.$name, k, k.$name), e.$observe(f, function(c) {
                k.$name !== c && (hb(a, null, k.$name, t, k.$name), p.$$renameControl(k, c), hb(a, null, k.$name, k, k.$name));
              }));
              d.on("$destroy", function() {
                p.$removeControl(k);
                f && hb(a, null, e[f], t, k.$name);
                w(k, Kb);
              });
            }};
        }
      };
    }];
  },
      Ud = yd(),
      ge = yd(!0),
      Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      $f = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      ag = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      bg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
      zd = /^(\d{4})-(\d{2})-(\d{2})$/,
      Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      lc = /^(\d{4})-W(\d\d)$/,
      Bd = /^(\d{4})-(\d\d)$/,
      Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Dd = {
        text: function(a, c, d, e, f, g) {
          jb(a, c, d, e, f, g);
          jc(e);
        },
        date: kb("date", zd, Mb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": kb("datetimelocal", Ad, Mb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: kb("time", Cd, Mb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: kb("week", lc, function(a, c) {
          if (ga(a))
            return a;
          if (C(a)) {
            lc.lastIndex = 0;
            var d = lc.exec(a);
            if (d) {
              var e = +d[1],
                  f = +d[2],
                  g = d = 0,
                  h = 0,
                  l = 0,
                  k = pd(e),
                  f = 7 * (f - 1);
              c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
              return new Date(e, 0, k.getDate() + f, d, g, h, l);
            }
          }
          return NaN;
        }, "yyyy-Www"),
        month: kb("month", Bd, Mb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
        number: function(a, c, d, e, f, g) {
          td(a, c, d, e);
          jb(a, c, d, e, f, g);
          e.$$parserName = "number";
          e.$parsers.push(function(a) {
            return e.$isEmpty(a) ? null : bg.test(a) ? parseFloat(a) : t;
          });
          e.$formatters.push(function(a) {
            if (!e.$isEmpty(a)) {
              if (!Y(a))
                throw Nb("numfmt", a);
              a = a.toString();
            }
            return a;
          });
          if (y(d.min) || d.ngMin) {
            var h;
            e.$validators.min = function(a) {
              return e.$isEmpty(a) || x(h) || a >= h;
            };
            d.$observe("min", function(a) {
              y(a) && !Y(a) && (a = parseFloat(a, 10));
              h = Y(a) && !isNaN(a) ? a : t;
              e.$validate();
            });
          }
          if (y(d.max) || d.ngMax) {
            var l;
            e.$validators.max = function(a) {
              return e.$isEmpty(a) || x(l) || a <= l;
            };
            d.$observe("max", function(a) {
              y(a) && !Y(a) && (a = parseFloat(a, 10));
              l = Y(a) && !isNaN(a) ? a : t;
              e.$validate();
            });
          }
        },
        url: function(a, c, d, e, f, g) {
          jb(a, c, d, e, f, g);
          jc(e);
          e.$$parserName = "url";
          e.$validators.url = function(a, c) {
            var d = a || c;
            return e.$isEmpty(d) || $f.test(d);
          };
        },
        email: function(a, c, d, e, f, g) {
          jb(a, c, d, e, f, g);
          jc(e);
          e.$$parserName = "email";
          e.$validators.email = function(a, c) {
            var d = a || c;
            return e.$isEmpty(d) || ag.test(d);
          };
        },
        radio: function(a, c, d, e) {
          x(d.name) && c.attr("name", ++ob);
          c.on("click", function(a) {
            c[0].checked && e.$setViewValue(d.value, a && a.type);
          });
          e.$render = function() {
            c[0].checked = d.value == e.$viewValue;
          };
          d.$observe("value", e.$render);
        },
        checkbox: function(a, c, d, e, f, g, h, l) {
          var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
              n = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
          c.on("click", function(a) {
            e.$setViewValue(c[0].checked, a && a.type);
          });
          e.$render = function() {
            c[0].checked = e.$viewValue;
          };
          e.$isEmpty = function(a) {
            return !1 === a;
          };
          e.$formatters.push(function(a) {
            return ha(a, k);
          });
          e.$parsers.push(function(a) {
            return a ? k : n;
          });
        },
        hidden: E,
        button: E,
        submit: E,
        reset: E,
        file: E
      },
      zc = ["$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
        return {
          restrict: "E",
          require: ["?ngModel"],
          link: {pre: function(f, g, h, l) {
              l[0] && (Dd[z(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
            }}
        };
      }],
      cg = /^(true|false|\d+)$/,
      ye = function() {
        return {
          restrict: "A",
          priority: 100,
          compile: function(a, c) {
            return cg.test(c.ngValue) ? function(a, c, f) {
              f.$set("value", a.$eval(f.ngValue));
            } : function(a, c, f) {
              a.$watch(f.ngValue, function(a) {
                f.$set("value", a);
              });
            };
          }
        };
      },
      Zd = ["$compile", function(a) {
        return {
          restrict: "AC",
          compile: function(c) {
            a.$$addBindingClass(c);
            return function(c, e, f) {
              a.$$addBindingInfo(e, f.ngBind);
              e = e[0];
              c.$watch(f.ngBind, function(a) {
                e.textContent = a === t ? "" : a;
              });
            };
          }
        };
      }],
      ae = ["$interpolate", "$compile", function(a, c) {
        return {compile: function(d) {
            c.$$addBindingClass(d);
            return function(d, f, g) {
              d = a(f.attr(g.$attr.ngBindTemplate));
              c.$$addBindingInfo(f, d.expressions);
              f = f[0];
              g.$observe("ngBindTemplate", function(a) {
                f.textContent = a === t ? "" : a;
              });
            };
          }};
      }],
      $d = ["$sce", "$parse", "$compile", function(a, c, d) {
        return {
          restrict: "A",
          compile: function(e, f) {
            var g = c(f.ngBindHtml),
                h = c(f.ngBindHtml, function(a) {
                  return (a || "").toString();
                });
            d.$$addBindingClass(e);
            return function(c, e, f) {
              d.$$addBindingInfo(e, f.ngBindHtml);
              c.$watch(h, function() {
                e.html(a.getTrustedHtml(g(c)) || "");
              });
            };
          }
        };
      }],
      xe = ea({
        restrict: "A",
        require: "ngModel",
        link: function(a, c, d, e) {
          e.$viewChangeListeners.push(function() {
            a.$eval(d.ngChange);
          });
        }
      }),
      be = kc("", !0),
      de = kc("Odd", 0),
      ce = kc("Even", 1),
      ee = Ia({compile: function(a, c) {
          c.$set("ngCloak", t);
          a.removeClass("ng-cloak");
        }}),
      fe = [function() {
        return {
          restrict: "A",
          scope: !0,
          controller: "@",
          priority: 500
        };
      }],
      Ec = {},
      dg = {
        blur: !0,
        focus: !0
      };
  r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
    var c = xa("ng-" + a);
    Ec[c] = ["$parse", "$rootScope", function(d, e) {
      return {
        restrict: "A",
        compile: function(f, g) {
          var h = d(g[c], null, !0);
          return function(c, d) {
            d.on(a, function(d) {
              var f = function() {
                h(c, {$event: d});
              };
              dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
            });
          };
        }
      };
    }];
  });
  var ie = ["$animate", function(a) {
    return {
      multiElement: !0,
      transclude: "element",
      priority: 600,
      terminal: !0,
      restrict: "A",
      $$tlb: !0,
      link: function(c, d, e, f, g) {
        var h,
            l,
            k;
        c.$watch(e.ngIf, function(c) {
          c ? l || g(function(c, f) {
            l = f;
            c[c.length++] = W.createComment(" end ngIf: " + e.ngIf + " ");
            h = {clone: c};
            a.enter(c, d.parent(), d);
          }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = tb(h.clone), a.leave(k).then(function() {
            k = null;
          }), h = null));
        });
      }
    };
  }],
      je = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, c, d, e) {
        return {
          restrict: "ECA",
          priority: 400,
          terminal: !0,
          transclude: "element",
          controller: ca.noop,
          compile: function(f, g) {
            var h = g.ngInclude || g.src,
                l = g.onload || "",
                k = g.autoscroll;
            return function(f, g, q, r, s) {
              var t = 0,
                  v,
                  m,
                  F,
                  w = function() {
                    m && (m.remove(), m = null);
                    v && (v.$destroy(), v = null);
                    F && (d.leave(F).then(function() {
                      m = null;
                    }), m = F, F = null);
                  };
              f.$watch(e.parseAsResourceUrl(h), function(e) {
                var h = function() {
                  !y(k) || k && !f.$eval(k) || c();
                },
                    m = ++t;
                e ? (a(e, !0).then(function(a) {
                  if (m === t) {
                    var c = f.$new();
                    r.template = a;
                    a = s(c, function(a) {
                      w();
                      d.enter(a, null, g).then(h);
                    });
                    v = c;
                    F = a;
                    v.$emit("$includeContentLoaded", e);
                    f.$eval(l);
                  }
                }, function() {
                  m === t && (w(), f.$emit("$includeContentError", e));
                }), f.$emit("$includeContentRequested", e)) : (w(), r.template = null);
              });
            };
          }
        };
      }],
      Ae = ["$compile", function(a) {
        return {
          restrict: "ECA",
          priority: -400,
          require: "ngInclude",
          link: function(c, d, e, f) {
            /SVG/.test(d[0].toString()) ? (d.empty(), a(Hc(f.template, W).childNodes)(c, function(a) {
              d.append(a);
            }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c));
          }
        };
      }],
      ke = Ia({
        priority: 450,
        compile: function() {
          return {pre: function(a, c, d) {
              a.$eval(d.ngInit);
            }};
        }
      }),
      we = function() {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function(a, c, d, e) {
            var f = c.attr(d.$attr.ngList) || ", ",
                g = "false" !== d.ngTrim,
                h = g ? N(f) : f;
            e.$parsers.push(function(a) {
              if (!x(a)) {
                var c = [];
                a && r(a.split(h), function(a) {
                  a && c.push(g ? N(a) : a);
                });
                return c;
              }
            });
            e.$formatters.push(function(a) {
              return H(a) ? a.join(f) : t;
            });
            e.$isEmpty = function(a) {
              return !a || !a.length;
            };
          }
        };
      },
      lb = "ng-valid",
      vd = "ng-invalid",
      Ra = "ng-pristine",
      Lb = "ng-dirty",
      xd = "ng-pending",
      Nb = new R("ngModel"),
      eg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, n) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = t;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = t;
        this.$name = n(d.name || "", !1)(a);
        var p = f(d.ngModel),
            q = p.assign,
            u = p,
            s = q,
            M = null,
            v,
            m = this;
        this.$$setOptions = function(a) {
          if ((m.$options = a) && a.getterSetter) {
            var c = f(d.ngModel + "()"),
                g = f(d.ngModel + "($$$p)");
            u = function(a) {
              var d = p(a);
              G(d) && (d = c(a));
              return d;
            };
            s = function(a, c) {
              G(p(a)) ? g(a, {$$$p: m.$modelValue}) : q(a, m.$modelValue);
            };
          } else if (!p.assign)
            throw Nb("nonassign", d.ngModel, wa(e));
        };
        this.$render = E;
        this.$isEmpty = function(a) {
          return x(a) || "" === a || null === a || a !== a;
        };
        var F = e.inheritedData("$formController") || Kb,
            w = 0;
        sd({
          ctrl: this,
          $element: e,
          set: function(a, c) {
            a[c] = !0;
          },
          unset: function(a, c) {
            delete a[c];
          },
          parentForm: F,
          $animate: g
        });
        this.$setPristine = function() {
          m.$dirty = !1;
          m.$pristine = !0;
          g.removeClass(e, Lb);
          g.addClass(e, Ra);
        };
        this.$setDirty = function() {
          m.$dirty = !0;
          m.$pristine = !1;
          g.removeClass(e, Ra);
          g.addClass(e, Lb);
          F.$setDirty();
        };
        this.$setUntouched = function() {
          m.$touched = !1;
          m.$untouched = !0;
          g.setClass(e, "ng-untouched", "ng-touched");
        };
        this.$setTouched = function() {
          m.$touched = !0;
          m.$untouched = !1;
          g.setClass(e, "ng-touched", "ng-untouched");
        };
        this.$rollbackViewValue = function() {
          h.cancel(M);
          m.$viewValue = m.$$lastCommittedViewValue;
          m.$render();
        };
        this.$validate = function() {
          if (!Y(m.$modelValue) || !isNaN(m.$modelValue)) {
            var a = m.$$rawModelValue,
                c = m.$valid,
                d = m.$modelValue,
                e = m.$options && m.$options.allowInvalid;
            m.$$runValidators(a, m.$$lastCommittedViewValue, function(f) {
              e || c === f || (m.$modelValue = f ? a : t, m.$modelValue !== d && m.$$writeModelToScope());
            });
          }
        };
        this.$$runValidators = function(a, c, d) {
          function e() {
            var d = !0;
            r(m.$validators, function(e, f) {
              var h = e(a, c);
              d = d && h;
              g(f, h);
            });
            return d ? !0 : (r(m.$asyncValidators, function(a, c) {
              g(c, null);
            }), !1);
          }
          function f() {
            var d = [],
                e = !0;
            r(m.$asyncValidators, function(f, h) {
              var k = f(a, c);
              if (!k || !G(k.then))
                throw Nb("$asyncValidators", k);
              g(h, t);
              d.push(k.then(function() {
                g(h, !0);
              }, function(a) {
                e = !1;
                g(h, !1);
              }));
            });
            d.length ? k.all(d).then(function() {
              h(e);
            }, E) : h(!0);
          }
          function g(a, c) {
            l === w && m.$setValidity(a, c);
          }
          function h(a) {
            l === w && d(a);
          }
          w++;
          var l = w;
          (function() {
            var a = m.$$parserName || "parse";
            if (v === t)
              g(a, null);
            else
              return v || (r(m.$validators, function(a, c) {
                g(c, null);
              }), r(m.$asyncValidators, function(a, c) {
                g(c, null);
              })), g(a, v), v;
            return !0;
          })() ? e() ? f() : h(!1) : h(!1);
        };
        this.$commitViewValue = function() {
          var a = m.$viewValue;
          h.cancel(M);
          if (m.$$lastCommittedViewValue !== a || "" === a && m.$$hasNativeValidators)
            m.$$lastCommittedViewValue = a, m.$pristine && this.$setDirty(), this.$$parseAndValidate();
        };
        this.$$parseAndValidate = function() {
          var c = m.$$lastCommittedViewValue;
          if (v = x(c) ? t : !0)
            for (var d = 0; d < m.$parsers.length; d++)
              if (c = m.$parsers[d](c), x(c)) {
                v = !1;
                break;
              }
          Y(m.$modelValue) && isNaN(m.$modelValue) && (m.$modelValue = u(a));
          var e = m.$modelValue,
              f = m.$options && m.$options.allowInvalid;
          m.$$rawModelValue = c;
          f && (m.$modelValue = c, m.$modelValue !== e && m.$$writeModelToScope());
          m.$$runValidators(c, m.$$lastCommittedViewValue, function(a) {
            f || (m.$modelValue = a ? c : t, m.$modelValue !== e && m.$$writeModelToScope());
          });
        };
        this.$$writeModelToScope = function() {
          s(a, m.$modelValue);
          r(m.$viewChangeListeners, function(a) {
            try {
              a();
            } catch (d) {
              c(d);
            }
          });
        };
        this.$setViewValue = function(a, c) {
          m.$viewValue = a;
          m.$options && !m.$options.updateOnDefault || m.$$debounceViewValueCommit(c);
        };
        this.$$debounceViewValueCommit = function(c) {
          var d = 0,
              e = m.$options;
          e && y(e.debounce) && (e = e.debounce, Y(e) ? d = e : Y(e[c]) ? d = e[c] : Y(e["default"]) && (d = e["default"]));
          h.cancel(M);
          d ? M = h(function() {
            m.$commitViewValue();
          }, d) : l.$$phase ? m.$commitViewValue() : a.$apply(function() {
            m.$commitViewValue();
          });
        };
        a.$watch(function() {
          var c = u(a);
          if (c !== m.$modelValue) {
            m.$modelValue = m.$$rawModelValue = c;
            v = t;
            for (var d = m.$formatters,
                e = d.length,
                f = c; e--; )
              f = d[e](f);
            m.$viewValue !== f && (m.$viewValue = m.$$lastCommittedViewValue = f, m.$render(), m.$$runValidators(c, f, E));
          }
          return c;
        });
      }],
      ve = ["$rootScope", function(a) {
        return {
          restrict: "A",
          require: ["ngModel", "^?form", "^?ngModelOptions"],
          controller: eg,
          priority: 1,
          compile: function(c) {
            c.addClass(Ra).addClass("ng-untouched").addClass(lb);
            return {
              pre: function(a, c, f, g) {
                var h = g[0],
                    l = g[1] || Kb;
                h.$$setOptions(g[2] && g[2].$options);
                l.$addControl(h);
                f.$observe("name", function(a) {
                  h.$name !== a && l.$$renameControl(h, a);
                });
                a.$on("$destroy", function() {
                  l.$removeControl(h);
                });
              },
              post: function(c, e, f, g) {
                var h = g[0];
                if (h.$options && h.$options.updateOn)
                  e.on(h.$options.updateOn, function(a) {
                    h.$$debounceViewValueCommit(a && a.type);
                  });
                e.on("blur", function(e) {
                  h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
                });
              }
            };
          }
        };
      }],
      fg = /(\s+|^)default(\s+|$)/,
      ze = function() {
        return {
          restrict: "A",
          controller: ["$scope", "$attrs", function(a, c) {
            var d = this;
            this.$options = a.$eval(c.ngModelOptions);
            this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = N(this.$options.updateOn.replace(fg, function() {
              d.$options.updateOnDefault = !0;
              return " ";
            }))) : this.$options.updateOnDefault = !0;
          }]
        };
      },
      le = Ia({
        terminal: !0,
        priority: 1E3
      }),
      me = ["$locale", "$interpolate", function(a, c) {
        var d = /{}/g,
            e = /^when(Minus)?(.+)$/;
        return {
          restrict: "EA",
          link: function(f, g, h) {
            function l(a) {
              g.text(a || "");
            }
            var k = h.count,
                n = h.$attr.when && g.attr(h.$attr.when),
                p = h.offset || 0,
                q = f.$eval(n) || {},
                u = {},
                n = c.startSymbol(),
                s = c.endSymbol(),
                t = n + k + "-" + p + s,
                v = ca.noop,
                m;
            r(h, function(a, c) {
              var d = e.exec(c);
              d && (d = (d[1] ? "-" : "") + z(d[2]), q[d] = g.attr(h.$attr[c]));
            });
            r(q, function(a, e) {
              u[e] = c(a.replace(d, t));
            });
            f.$watch(k, function(c) {
              c = parseFloat(c);
              var d = isNaN(c);
              d || c in q || (c = a.pluralCat(c - p));
              c === m || d && isNaN(m) || (v(), v = f.$watch(u[c], l), m = c);
            });
          }
        };
      }],
      ne = ["$parse", "$animate", function(a, c) {
        var d = R("ngRepeat"),
            e = function(a, c, d, e, k, n, p) {
              a[d] = e;
              k && (a[k] = n);
              a.$index = c;
              a.$first = 0 === c;
              a.$last = c === p - 1;
              a.$middle = !(a.$first || a.$last);
              a.$odd = !(a.$even = 0 === (c & 1));
            };
        return {
          restrict: "A",
          multiElement: !0,
          transclude: "element",
          priority: 1E3,
          terminal: !0,
          $$tlb: !0,
          compile: function(f, g) {
            var h = g.ngRepeat,
                l = W.createComment(" end ngRepeat: " + h + " "),
                k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!k)
              throw d("iexp", h);
            var n = k[1],
                p = k[2],
                q = k[3],
                u = k[4],
                k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
            if (!k)
              throw d("iidexp", n);
            var s = k[3] || k[1],
                y = k[2];
            if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))
              throw d("badident", q);
            var v,
                m,
                w,
                x,
                E = {$id: Ma};
            u ? v = a(u) : (w = function(a, c) {
              return Ma(c);
            }, x = function(a) {
              return a;
            });
            return function(a, f, g, k, n) {
              v && (m = function(c, d, e) {
                y && (E[y] = c);
                E[s] = d;
                E.$index = e;
                return v(a, E);
              });
              var u = ia();
              a.$watchCollection(p, function(g) {
                var k,
                    p,
                    v = f[0],
                    D,
                    E = ia(),
                    G,
                    H,
                    L,
                    S,
                    J,
                    C,
                    z;
                q && (a[q] = g);
                if (Sa(g))
                  J = g, p = m || w;
                else {
                  p = m || x;
                  J = [];
                  for (z in g)
                    g.hasOwnProperty(z) && "$" != z.charAt(0) && J.push(z);
                  J.sort();
                }
                G = J.length;
                z = Array(G);
                for (k = 0; k < G; k++)
                  if (H = g === J ? k : J[k], L = g[H], S = p(H, L, k), u[S])
                    C = u[S], delete u[S], E[S] = C, z[k] = C;
                  else {
                    if (E[S])
                      throw r(z, function(a) {
                        a && a.scope && (u[a.id] = a);
                      }), d("dupes", h, S, L);
                    z[k] = {
                      id: S,
                      scope: t,
                      clone: t
                    };
                    E[S] = !0;
                  }
                for (D in u) {
                  C = u[D];
                  S = tb(C.clone);
                  c.leave(S);
                  if (S[0].parentNode)
                    for (k = 0, p = S.length; k < p; k++)
                      S[k].$$NG_REMOVED = !0;
                  C.scope.$destroy();
                }
                for (k = 0; k < G; k++)
                  if (H = g === J ? k : J[k], L = g[H], C = z[k], C.scope) {
                    D = v;
                    do
                      D = D.nextSibling;
 while (D && D.$$NG_REMOVED);
                    C.clone[0] != D && c.move(tb(C.clone), null, A(v));
                    v = C.clone[C.clone.length - 1];
                    e(C.scope, k, s, L, y, H, G);
                  } else
                    n(function(a, d) {
                      C.scope = d;
                      var f = l.cloneNode(!1);
                      a[a.length++] = f;
                      c.enter(a, null, A(v));
                      v = f;
                      C.clone = a;
                      E[C.id] = C;
                      e(C.scope, k, s, L, y, H, G);
                    });
                u = E;
              });
            };
          }
        };
      }],
      oe = ["$animate", function(a) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(c, d, e) {
            c.$watch(e.ngShow, function(c) {
              a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"});
            });
          }
        };
      }],
      he = ["$animate", function(a) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(c, d, e) {
            c.$watch(e.ngHide, function(c) {
              a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"});
            });
          }
        };
      }],
      pe = Ia(function(a, c, d) {
        a.$watchCollection(d.ngStyle, function(a, d) {
          d && a !== d && r(d, function(a, d) {
            c.css(d, "");
          });
          a && c.css(a);
        });
      }),
      qe = ["$animate", function(a) {
        return {
          restrict: "EA",
          require: "ngSwitch",
          controller: ["$scope", function() {
            this.cases = {};
          }],
          link: function(c, d, e, f) {
            var g = [],
                h = [],
                l = [],
                k = [],
                n = function(a, c) {
                  return function() {
                    a.splice(c, 1);
                  };
                };
            c.$watch(e.ngSwitch || e.on, function(c) {
              var d,
                  e;
              d = 0;
              for (e = l.length; d < e; ++d)
                a.cancel(l[d]);
              d = l.length = 0;
              for (e = k.length; d < e; ++d) {
                var s = tb(h[d].clone);
                k[d].$destroy();
                (l[d] = a.leave(s)).then(n(l, d));
              }
              h.length = 0;
              k.length = 0;
              (g = f.cases["!" + c] || f.cases["?"]) && r(g, function(c) {
                c.transclude(function(d, e) {
                  k.push(e);
                  var f = c.element;
                  d[d.length++] = W.createComment(" end ngSwitchWhen: ");
                  h.push({clone: d});
                  a.enter(d, f.parent(), f);
                });
              });
            });
          }
        };
      }],
      re = Ia({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, c, d, e, f) {
          e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
          e.cases["!" + d.ngSwitchWhen].push({
            transclude: f,
            element: c
          });
        }
      }),
      se = Ia({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, c, d, e, f) {
          e.cases["?"] = e.cases["?"] || [];
          e.cases["?"].push({
            transclude: f,
            element: c
          });
        }
      }),
      ue = Ia({
        restrict: "EAC",
        link: function(a, c, d, e, f) {
          if (!f)
            throw R("ngTransclude")("orphan", wa(c));
          f(function(a) {
            c.empty();
            c.append(a);
          });
        }
      }),
      Vd = ["$templateCache", function(a) {
        return {
          restrict: "E",
          terminal: !0,
          compile: function(c, d) {
            "text/ng-template" == d.type && a.put(d.id, c[0].text);
          }
        };
      }],
      gg = R("ngOptions"),
      te = ea({
        restrict: "A",
        terminal: !0
      }),
      Wd = ["$compile", "$parse", function(a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            e = {$setViewValue: E};
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: ["$element", "$scope", "$attrs", function(a, c, d) {
            var l = this,
                k = {},
                n = e,
                p;
            l.databound = d.ngModel;
            l.init = function(a, c, d) {
              n = a;
              p = d;
            };
            l.addOption = function(c, d) {
              La(c, '"option value"');
              k[c] = !0;
              n.$viewValue == c && (a.val(c), p.parent() && p.remove());
              d && d[0].hasAttribute("selected") && (d[0].selected = !0);
            };
            l.removeOption = function(a) {
              this.hasOption(a) && (delete k[a], n.$viewValue === a && this.renderUnknownOption(a));
            };
            l.renderUnknownOption = function(c) {
              c = "? " + Ma(c) + " ?";
              p.val(c);
              a.prepend(p);
              a.val(c);
              p.prop("selected", !0);
            };
            l.hasOption = function(a) {
              return k.hasOwnProperty(a);
            };
            c.$on("$destroy", function() {
              l.renderUnknownOption = E;
            });
          }],
          link: function(e, g, h, l) {
            function k(a, c, d, e) {
              d.$render = function() {
                var a = d.$viewValue;
                e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), "" === a && v.prop("selected", !0)) : x(a) && v ? c.val("") : e.renderUnknownOption(a);
              };
              c.on("change", function() {
                a.$apply(function() {
                  C.parent() && C.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function n(a, c, d) {
              var e;
              d.$render = function() {
                var a = new eb(d.$viewValue);
                r(c.find("option"), function(c) {
                  c.selected = y(a.get(c.value));
                });
              };
              a.$watch(function() {
                ha(e, d.$viewValue) || (e = sa(d.$viewValue), d.$render());
              });
              c.on("change", function() {
                a.$apply(function() {
                  var a = [];
                  r(c.find("option"), function(c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function p(e, f, g) {
              function h(a, c, d) {
                T[x] = d;
                G && (T[G] = c);
                return a(e, T);
              }
              function k(a) {
                var c;
                if (u)
                  if (I && H(a)) {
                    c = new eb([]);
                    for (var d = 0; d < a.length; d++)
                      c.put(h(I, null, a[d]), !0);
                  } else
                    c = new eb(a);
                else
                  I && (a = h(I, null, a));
                return function(d, e) {
                  var f;
                  f = I ? I : B ? B : z;
                  return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
                };
              }
              function l() {
                m || (e.$$postDigest(p), m = !0);
              }
              function n(a, c, d) {
                a[c] = a[c] || 0;
                a[c] += d ? 1 : -1;
              }
              function p() {
                m = !1;
                var a = {"": []},
                    c = [""],
                    d,
                    l,
                    s,
                    t,
                    v;
                s = g.$viewValue;
                t = L(e) || [];
                var B = G ? Object.keys(t).sort() : t,
                    x,
                    A,
                    H,
                    z,
                    O = {};
                v = k(s);
                var N = !1,
                    U,
                    W;
                Q = {};
                for (z = 0; H = B.length, z < H; z++) {
                  x = z;
                  if (G && (x = B[z], "$" === x.charAt(0)))
                    continue;
                  A = t[x];
                  d = h(J, x, A) || "";
                  (l = a[d]) || (l = a[d] = [], c.push(d));
                  d = v(x, A);
                  N = N || d;
                  A = h(C, x, A);
                  A = y(A) ? A : "";
                  W = I ? I(e, T) : G ? B[z] : z;
                  I && (Q[W] = x);
                  l.push({
                    id: W,
                    label: A,
                    selected: d
                  });
                }
                u || (w || null === s ? a[""].unshift({
                  id: "",
                  label: "",
                  selected: !N
                }) : N || a[""].unshift({
                  id: "?",
                  label: "",
                  selected: !0
                }));
                x = 0;
                for (B = c.length; x < B; x++) {
                  d = c[x];
                  l = a[d];
                  R.length <= x ? (s = {
                    element: E.clone().attr("label", d),
                    label: l.label
                  }, t = [s], R.push(t), f.append(s.element)) : (t = R[x], s = t[0], s.label != d && s.element.attr("label", s.label = d));
                  N = null;
                  z = 0;
                  for (H = l.length; z < H; z++)
                    d = l[z], (v = t[z + 1]) ? (N = v.element, v.label !== d.label && (n(O, v.label, !1), n(O, d.label, !0), N.text(v.label = d.label), N.prop("label", v.label)), v.id !== d.id && N.val(v.id = d.id), N[0].selected !== d.selected && (N.prop("selected", v.selected = d.selected), Qa && N.prop("selected", v.selected))) : ("" === d.id && w ? U = w : (U = F.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), t.push(v = {
                      element: U,
                      label: d.label,
                      id: d.id,
                      selected: d.selected
                    }), n(O, d.label, !0), N ? N.after(U) : s.element.append(U), N = U);
                  for (z++; t.length > z; )
                    d = t.pop(), n(O, d.label, !1), d.element.remove();
                }
                for (; R.length > x; ) {
                  l = R.pop();
                  for (z = 1; z < l.length; ++z)
                    n(O, l[z].label, !1);
                  l[0].element.remove();
                }
                r(O, function(a, c) {
                  0 < a ? q.addOption(c) : 0 > a && q.removeOption(c);
                });
              }
              var v;
              if (!(v = s.match(d)))
                throw gg("iexp", s, wa(f));
              var C = c(v[2] || v[1]),
                  x = v[4] || v[6],
                  A = / as /.test(v[0]) && v[1],
                  B = A ? c(A) : null,
                  G = v[5],
                  J = c(v[3] || ""),
                  z = c(v[2] ? v[1] : x),
                  L = c(v[7]),
                  I = v[8] ? c(v[8]) : null,
                  Q = {},
                  R = [[{
                    element: f,
                    label: ""
                  }]],
                  T = {};
              w && (a(w)(e), w.removeClass("ng-scope"), w.remove());
              f.empty();
              f.on("change", function() {
                e.$apply(function() {
                  var a = L(e) || [],
                      c;
                  if (u)
                    c = [], r(f.val(), function(d) {
                      d = I ? Q[d] : d;
                      c.push("?" === d ? t : "" === d ? null : h(B ? B : z, d, a[d]));
                    });
                  else {
                    var d = I ? Q[f.val()] : f.val();
                    c = "?" === d ? t : "" === d ? null : h(B ? B : z, d, a[d]);
                  }
                  g.$setViewValue(c);
                  p();
                });
              });
              g.$render = p;
              e.$watchCollection(L, l);
              e.$watchCollection(function() {
                var a = L(e),
                    c;
                if (a && H(a)) {
                  c = Array(a.length);
                  for (var d = 0,
                      f = a.length; d < f; d++)
                    c[d] = h(C, d, a[d]);
                } else if (a)
                  for (d in c = {}, a)
                    a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                return c;
              }, l);
              u && e.$watchCollection(function() {
                return g.$modelValue;
              }, l);
            }
            if (l[1]) {
              var q = l[0];
              l = l[1];
              var u = h.multiple,
                  s = h.ngOptions,
                  w = !1,
                  v,
                  m = !1,
                  F = A(W.createElement("option")),
                  E = A(W.createElement("optgroup")),
                  C = F.clone();
              h = 0;
              for (var B = g.children(),
                  G = B.length; h < G; h++)
                if ("" === B[h].value) {
                  v = w = B.eq(h);
                  break;
                }
              q.init(l, w, C);
              u && (l.$isEmpty = function(a) {
                return !a || 0 === a.length;
              });
              s ? p(e, g, l) : u ? n(e, g, l) : k(e, g, l, q);
            }
          }
        };
      }],
      Yd = ["$interpolate", function(a) {
        var c = {
          addOption: E,
          removeOption: E
        };
        return {
          restrict: "E",
          priority: 100,
          compile: function(d, e) {
            if (x(e.value)) {
              var f = a(d.text(), !0);
              f || e.$set("value", d.text());
            }
            return function(a, d, e) {
              var k = d.parent(),
                  n = k.data("$selectController") || k.parent().data("$selectController");
              n && n.databound || (n = c);
              f ? a.$watch(f, function(a, c) {
                e.$set("value", a);
                c !== a && n.removeOption(c);
                n.addOption(a, d);
              }) : n.addOption(e.value, d);
              d.on("$destroy", function() {
                n.removeOption(e.value);
              });
            };
          }
        };
      }],
      Xd = ea({
        restrict: "E",
        terminal: !1
      }),
      Bc = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, c, d, e) {
            e && (d.required = !0, e.$validators.required = function(a, c) {
              return !d.required || !e.$isEmpty(c);
            }, d.$observe("required", function() {
              e.$validate();
            }));
          }
        };
      },
      Ac = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, c, d, e) {
            if (e) {
              var f,
                  g = d.ngPattern || d.pattern;
              d.$observe("pattern", function(a) {
                C(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                if (a && !a.test)
                  throw R("ngPattern")("noregexp", g, a, wa(c));
                f = a || t;
                e.$validate();
              });
              e.$validators.pattern = function(a) {
                return e.$isEmpty(a) || x(f) || f.test(a);
              };
            }
          }
        };
      },
      Dc = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, c, d, e) {
            if (e) {
              var f = -1;
              d.$observe("maxlength", function(a) {
                a = aa(a);
                f = isNaN(a) ? -1 : a;
                e.$validate();
              });
              e.$validators.maxlength = function(a, c) {
                return 0 > f || e.$isEmpty(c) || c.length <= f;
              };
            }
          }
        };
      },
      Cc = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, c, d, e) {
            if (e) {
              var f = 0;
              d.$observe("minlength", function(a) {
                f = aa(a) || 0;
                e.$validate();
              });
              e.$validators.minlength = function(a, c) {
                return e.$isEmpty(c) || c.length >= f;
              };
            }
          }
        };
      };
  Q.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ca), A(W).ready(function() {
    Jd(W, uc);
  }));
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');


//# sourceURL=D:/thedrinkinggame/node_modules/angular/angular.min.js
},{}],3:[function(require,module,exports){
"use strict";
require('./angular.min.js');
module.exports = angular;


//# sourceURL=D:/thedrinkinggame/node_modules/angular/index.js
},{"./angular.min.js":2}],4:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":5}],5:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
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

},{}],6:[function(require,module,exports){
(function (process,global){
(function(global) {
  'use strict';
  if (global.$traceurRuntime) {
    return;
  }
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $Object.defineProperties;
  var $defineProperty = $Object.defineProperty;
  var $freeze = $Object.freeze;
  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
  var $keys = $Object.keys;
  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
  var $toString = $Object.prototype.toString;
  var $preventExtensions = Object.preventExtensions;
  var $seal = Object.seal;
  var $isExtensible = Object.isExtensible;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var method = nonEnum;
  var counter = 0;
  function newUniqueString() {
    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
  }
  var symbolInternalProperty = newUniqueString();
  var symbolDescriptionProperty = newUniqueString();
  var symbolDataProperty = newUniqueString();
  var symbolValues = $create(null);
  var privateNames = $create(null);
  function isPrivateName(s) {
    return privateNames[s];
  }
  function createPrivateName() {
    var s = newUniqueString();
    privateNames[s] = true;
    return s;
  }
  function isShimSymbol(symbol) {
    return typeof symbol === 'object' && symbol instanceof SymbolValue;
  }
  function typeOf(v) {
    if (isShimSymbol(v))
      return 'symbol';
    return typeof v;
  }
  function Symbol(description) {
    var value = new SymbolValue(description);
    if (!(this instanceof Symbol))
      return value;
    throw new TypeError('Symbol cannot be new\'ed');
  }
  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(Symbol.prototype, 'toString', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    var desc = symbolValue[symbolDescriptionProperty];
    if (desc === undefined)
      desc = '';
    return 'Symbol(' + desc + ')';
  }));
  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    return symbolValue;
  }));
  function SymbolValue(description) {
    var key = newUniqueString();
    $defineProperty(this, symbolDataProperty, {value: this});
    $defineProperty(this, symbolInternalProperty, {value: key});
    $defineProperty(this, symbolDescriptionProperty, {value: description});
    freeze(this);
    symbolValues[key] = this;
  }
  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(SymbolValue.prototype, 'toString', {
    value: Symbol.prototype.toString,
    enumerable: false
  });
  $defineProperty(SymbolValue.prototype, 'valueOf', {
    value: Symbol.prototype.valueOf,
    enumerable: false
  });
  var hashProperty = createPrivateName();
  var hashPropertyDescriptor = {value: undefined};
  var hashObjectProperties = {
    hash: {value: undefined},
    self: {value: undefined}
  };
  var hashCounter = 0;
  function getOwnHashObject(object) {
    var hashObject = object[hashProperty];
    if (hashObject && hashObject.self === object)
      return hashObject;
    if ($isExtensible(object)) {
      hashObjectProperties.hash.value = hashCounter++;
      hashObjectProperties.self.value = object;
      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
      $defineProperty(object, hashProperty, hashPropertyDescriptor);
      return hashPropertyDescriptor.value;
    }
    return undefined;
  }
  function freeze(object) {
    getOwnHashObject(object);
    return $freeze.apply(this, arguments);
  }
  function preventExtensions(object) {
    getOwnHashObject(object);
    return $preventExtensions.apply(this, arguments);
  }
  function seal(object) {
    getOwnHashObject(object);
    return $seal.apply(this, arguments);
  }
  freeze(SymbolValue.prototype);
  function isSymbolString(s) {
    return symbolValues[s] || privateNames[s];
  }
  function toProperty(name) {
    if (isShimSymbol(name))
      return name[symbolInternalProperty];
    return name;
  }
  function removeSymbolKeys(array) {
    var rv = [];
    for (var i = 0; i < array.length; i++) {
      if (!isSymbolString(array[i])) {
        rv.push(array[i]);
      }
    }
    return rv;
  }
  function getOwnPropertyNames(object) {
    return removeSymbolKeys($getOwnPropertyNames(object));
  }
  function keys(object) {
    return removeSymbolKeys($keys(object));
  }
  function getOwnPropertySymbols(object) {
    var rv = [];
    var names = $getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var symbol = symbolValues[names[i]];
      if (symbol) {
        rv.push(symbol);
      }
    }
    return rv;
  }
  function getOwnPropertyDescriptor(object, name) {
    return $getOwnPropertyDescriptor(object, toProperty(name));
  }
  function hasOwnProperty(name) {
    return $hasOwnProperty.call(this, toProperty(name));
  }
  function getOption(name) {
    return global.traceur && global.traceur.options[name];
  }
  function defineProperty(object, name, descriptor) {
    if (isShimSymbol(name)) {
      name = name[symbolInternalProperty];
    }
    $defineProperty(object, name, descriptor);
    return object;
  }
  function polyfillObject(Object) {
    $defineProperty(Object, 'defineProperty', {value: defineProperty});
    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
    $defineProperty(Object, 'freeze', {value: freeze});
    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
    $defineProperty(Object, 'seal', {value: seal});
    $defineProperty(Object, 'keys', {value: keys});
  }
  function exportStar(object) {
    for (var i = 1; i < arguments.length; i++) {
      var names = $getOwnPropertyNames(arguments[i]);
      for (var j = 0; j < names.length; j++) {
        var name = names[j];
        if (isSymbolString(name))
          continue;
        (function(mod, name) {
          $defineProperty(object, name, {
            get: function() {
              return mod[name];
            },
            enumerable: true
          });
        })(arguments[i], names[j]);
      }
    }
    return object;
  }
  function isObject(x) {
    return x != null && (typeof x === 'object' || typeof x === 'function');
  }
  function toObject(x) {
    if (x == null)
      throw $TypeError();
    return $Object(x);
  }
  function checkObjectCoercible(argument) {
    if (argument == null) {
      throw new TypeError('Value cannot be converted to an Object');
    }
    return argument;
  }
  function polyfillSymbol(global, Symbol) {
    if (!global.Symbol) {
      global.Symbol = Symbol;
      Object.getOwnPropertySymbols = getOwnPropertySymbols;
    }
    if (!global.Symbol.iterator) {
      global.Symbol.iterator = Symbol('Symbol.iterator');
    }
  }
  function setupGlobals(global) {
    polyfillSymbol(global, Symbol);
    global.Reflect = global.Reflect || {};
    global.Reflect.global = global.Reflect.global || global;
    polyfillObject(global.Object);
  }
  setupGlobals(global);
  global.$traceurRuntime = {
    checkObjectCoercible: checkObjectCoercible,
    createPrivateName: createPrivateName,
    defineProperties: $defineProperties,
    defineProperty: $defineProperty,
    exportStar: exportStar,
    getOwnHashObject: getOwnHashObject,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    isObject: isObject,
    isPrivateName: isPrivateName,
    isSymbolString: isSymbolString,
    keys: $keys,
    setupGlobals: setupGlobals,
    toObject: toObject,
    toProperty: toProperty,
    typeof: typeOf
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
(function() {
  'use strict';
  var path;
  function relativeRequire(callerPath, requiredPath) {
    path = path || typeof require !== 'undefined' && require('path');
    function isDirectory(path) {
      return path.slice(-1) === '/';
    }
    function isAbsolute(path) {
      return path[0] === '/';
    }
    function isRelative(path) {
      return path[0] === '.';
    }
    if (isDirectory(requiredPath) || isAbsolute(requiredPath))
      return;
    return isRelative(requiredPath) ? require(path.resolve(path.dirname(callerPath), requiredPath)) : require(requiredPath);
  }
  $traceurRuntime.require = relativeRequire;
})();
(function() {
  'use strict';
  function spread() {
    var rv = [],
        j = 0,
        iterResult;
    for (var i = 0; i < arguments.length; i++) {
      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
        throw new TypeError('Cannot spread non-iterable object.');
      }
      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
      while (!(iterResult = iter.next()).done) {
        rv[j++] = iterResult.value;
      }
    }
    return rv;
  }
  $traceurRuntime.spread = spread;
})();
(function() {
  'use strict';
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
  var $getPrototypeOf = Object.getPrototypeOf;
  var $__0 = Object,
      getOwnPropertyNames = $__0.getOwnPropertyNames,
      getOwnPropertySymbols = $__0.getOwnPropertySymbols;
  function superDescriptor(homeObject, name) {
    var proto = $getPrototypeOf(homeObject);
    do {
      var result = $getOwnPropertyDescriptor(proto, name);
      if (result)
        return result;
      proto = $getPrototypeOf(proto);
    } while (proto);
    return undefined;
  }
  function superConstructor(ctor) {
    return ctor.__proto__;
  }
  function superCall(self, homeObject, name, args) {
    return superGet(self, homeObject, name).apply(self, args);
  }
  function superGet(self, homeObject, name) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor) {
      if (!descriptor.get)
        return descriptor.value;
      return descriptor.get.call(self);
    }
    return undefined;
  }
  function superSet(self, homeObject, name, value) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor && descriptor.set) {
      descriptor.set.call(self, value);
      return value;
    }
    throw $TypeError(("super has no setter '" + name + "'."));
  }
  function getDescriptors(object) {
    var descriptors = {};
    var names = getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      descriptors[name] = $getOwnPropertyDescriptor(object, name);
    }
    var symbols = getOwnPropertySymbols(object);
    for (var i = 0; i < symbols.length; i++) {
      var symbol = symbols[i];
      descriptors[$traceurRuntime.toProperty(symbol)] = $getOwnPropertyDescriptor(object, $traceurRuntime.toProperty(symbol));
    }
    return descriptors;
  }
  function createClass(ctor, object, staticObject, superClass) {
    $defineProperty(object, 'constructor', {
      value: ctor,
      configurable: true,
      enumerable: false,
      writable: true
    });
    if (arguments.length > 3) {
      if (typeof superClass === 'function')
        ctor.__proto__ = superClass;
      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
    } else {
      ctor.prototype = object;
    }
    $defineProperty(ctor, 'prototype', {
      configurable: false,
      writable: false
    });
    return $defineProperties(ctor, getDescriptors(staticObject));
  }
  function getProtoParent(superClass) {
    if (typeof superClass === 'function') {
      var prototype = superClass.prototype;
      if ($Object(prototype) === prototype || prototype === null)
        return superClass.prototype;
      throw new $TypeError('super prototype must be an Object or null');
    }
    if (superClass === null)
      return null;
    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
  }
  function defaultSuperCall(self, homeObject, args) {
    if ($getPrototypeOf(homeObject) !== null)
      superCall(self, homeObject, 'constructor', args);
  }
  $traceurRuntime.createClass = createClass;
  $traceurRuntime.defaultSuperCall = defaultSuperCall;
  $traceurRuntime.superCall = superCall;
  $traceurRuntime.superConstructor = superConstructor;
  $traceurRuntime.superGet = superGet;
  $traceurRuntime.superSet = superSet;
})();
(function() {
  'use strict';
  if (typeof $traceurRuntime !== 'object') {
    throw new Error('traceur runtime not found.');
  }
  var createPrivateName = $traceurRuntime.createPrivateName;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $create = Object.create;
  var $TypeError = TypeError;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var ST_NEWBORN = 0;
  var ST_EXECUTING = 1;
  var ST_SUSPENDED = 2;
  var ST_CLOSED = 3;
  var END_STATE = -2;
  var RETHROW_STATE = -3;
  function getInternalError(state) {
    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
  }
  function GeneratorContext() {
    this.state = 0;
    this.GState = ST_NEWBORN;
    this.storedException = undefined;
    this.finallyFallThrough = undefined;
    this.sent_ = undefined;
    this.returnValue = undefined;
    this.tryStack_ = [];
  }
  GeneratorContext.prototype = {
    pushTry: function(catchState, finallyState) {
      if (finallyState !== null) {
        var finallyFallThrough = null;
        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
          if (this.tryStack_[i].catch !== undefined) {
            finallyFallThrough = this.tryStack_[i].catch;
            break;
          }
        }
        if (finallyFallThrough === null)
          finallyFallThrough = RETHROW_STATE;
        this.tryStack_.push({
          finally: finallyState,
          finallyFallThrough: finallyFallThrough
        });
      }
      if (catchState !== null) {
        this.tryStack_.push({catch: catchState});
      }
    },
    popTry: function() {
      this.tryStack_.pop();
    },
    get sent() {
      this.maybeThrow();
      return this.sent_;
    },
    set sent(v) {
      this.sent_ = v;
    },
    get sentIgnoreThrow() {
      return this.sent_;
    },
    maybeThrow: function() {
      if (this.action === 'throw') {
        this.action = 'next';
        throw this.sent_;
      }
    },
    end: function() {
      switch (this.state) {
        case END_STATE:
          return this;
        case RETHROW_STATE:
          throw this.storedException;
        default:
          throw getInternalError(this.state);
      }
    },
    handleException: function(ex) {
      this.GState = ST_CLOSED;
      this.state = END_STATE;
      throw ex;
    }
  };
  function nextOrThrow(ctx, moveNext, action, x) {
    switch (ctx.GState) {
      case ST_EXECUTING:
        throw new Error(("\"" + action + "\" on executing generator"));
      case ST_CLOSED:
        if (action == 'next') {
          return {
            value: undefined,
            done: true
          };
        }
        throw x;
      case ST_NEWBORN:
        if (action === 'throw') {
          ctx.GState = ST_CLOSED;
          throw x;
        }
        if (x !== undefined)
          throw $TypeError('Sent value to newborn generator');
      case ST_SUSPENDED:
        ctx.GState = ST_EXECUTING;
        ctx.action = action;
        ctx.sent = x;
        var value = moveNext(ctx);
        var done = value === ctx;
        if (done)
          value = ctx.returnValue;
        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
        return {
          value: value,
          done: done
        };
    }
  }
  var ctxName = createPrivateName();
  var moveNextName = createPrivateName();
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
  GeneratorFunctionPrototype.prototype = {
    constructor: GeneratorFunctionPrototype,
    next: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
    },
    throw: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
    }
  };
  $defineProperties(GeneratorFunctionPrototype.prototype, {
    constructor: {enumerable: false},
    next: {enumerable: false},
    throw: {enumerable: false}
  });
  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
    return this;
  }));
  function createGeneratorInstance(innerFunction, functionObject, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new GeneratorContext();
    var object = $create(functionObject.prototype);
    object[ctxName] = ctx;
    object[moveNextName] = moveNext;
    return object;
  }
  function initGeneratorFunction(functionObject) {
    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
    functionObject.__proto__ = GeneratorFunctionPrototype;
    return functionObject;
  }
  function AsyncFunctionContext() {
    GeneratorContext.call(this);
    this.err = undefined;
    var ctx = this;
    ctx.result = new Promise(function(resolve, reject) {
      ctx.resolve = resolve;
      ctx.reject = reject;
    });
  }
  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
  AsyncFunctionContext.prototype.end = function() {
    switch (this.state) {
      case END_STATE:
        this.resolve(this.returnValue);
        break;
      case RETHROW_STATE:
        this.reject(this.storedException);
        break;
      default:
        this.reject(getInternalError(this.state));
    }
  };
  AsyncFunctionContext.prototype.handleException = function() {
    this.state = RETHROW_STATE;
  };
  function asyncWrap(innerFunction, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new AsyncFunctionContext();
    ctx.createCallback = function(newState) {
      return function(value) {
        ctx.state = newState;
        ctx.value = value;
        moveNext(ctx);
      };
    };
    ctx.errback = function(err) {
      handleCatch(ctx, err);
      moveNext(ctx);
    };
    moveNext(ctx);
    return ctx.result;
  }
  function getMoveNext(innerFunction, self) {
    return function(ctx) {
      while (true) {
        try {
          return innerFunction.call(self, ctx);
        } catch (ex) {
          handleCatch(ctx, ex);
        }
      }
    };
  }
  function handleCatch(ctx, ex) {
    ctx.storedException = ex;
    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
    if (!last) {
      ctx.handleException(ex);
      return;
    }
    ctx.state = last.catch !== undefined ? last.catch : last.finally;
    if (last.finallyFallThrough !== undefined)
      ctx.finallyFallThrough = last.finallyFallThrough;
  }
  $traceurRuntime.asyncWrap = asyncWrap;
  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
})();
(function() {
  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
    var out = [];
    if (opt_scheme) {
      out.push(opt_scheme, ':');
    }
    if (opt_domain) {
      out.push('//');
      if (opt_userInfo) {
        out.push(opt_userInfo, '@');
      }
      out.push(opt_domain);
      if (opt_port) {
        out.push(':', opt_port);
      }
    }
    if (opt_path) {
      out.push(opt_path);
    }
    if (opt_queryData) {
      out.push('?', opt_queryData);
    }
    if (opt_fragment) {
      out.push('#', opt_fragment);
    }
    return out.join('');
  }
  ;
  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
  var ComponentIndex = {
    SCHEME: 1,
    USER_INFO: 2,
    DOMAIN: 3,
    PORT: 4,
    PATH: 5,
    QUERY_DATA: 6,
    FRAGMENT: 7
  };
  function split(uri) {
    return (uri.match(splitRe));
  }
  function removeDotSegments(path) {
    if (path === '/')
      return '/';
    var leadingSlash = path[0] === '/' ? '/' : '';
    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
    var segments = path.split('/');
    var out = [];
    var up = 0;
    for (var pos = 0; pos < segments.length; pos++) {
      var segment = segments[pos];
      switch (segment) {
        case '':
        case '.':
          break;
        case '..':
          if (out.length)
            out.pop();
          else
            up++;
          break;
        default:
          out.push(segment);
      }
    }
    if (!leadingSlash) {
      while (up-- > 0) {
        out.unshift('..');
      }
      if (out.length === 0)
        out.push('.');
    }
    return leadingSlash + out.join('/') + trailingSlash;
  }
  function joinAndCanonicalizePath(parts) {
    var path = parts[ComponentIndex.PATH] || '';
    path = removeDotSegments(path);
    parts[ComponentIndex.PATH] = path;
    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
  }
  function canonicalizeUrl(url) {
    var parts = split(url);
    return joinAndCanonicalizePath(parts);
  }
  function resolveUrl(base, url) {
    var parts = split(url);
    var baseParts = split(base);
    if (parts[ComponentIndex.SCHEME]) {
      return joinAndCanonicalizePath(parts);
    } else {
      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
    }
    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
      if (!parts[i]) {
        parts[i] = baseParts[i];
      }
    }
    if (parts[ComponentIndex.PATH][0] == '/') {
      return joinAndCanonicalizePath(parts);
    }
    var path = baseParts[ComponentIndex.PATH];
    var index = path.lastIndexOf('/');
    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
    parts[ComponentIndex.PATH] = path;
    return joinAndCanonicalizePath(parts);
  }
  function isAbsolute(name) {
    if (!name)
      return false;
    if (name[0] === '/')
      return true;
    var parts = split(name);
    if (parts[ComponentIndex.SCHEME])
      return true;
    return false;
  }
  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
  $traceurRuntime.isAbsolute = isAbsolute;
  $traceurRuntime.removeDotSegments = removeDotSegments;
  $traceurRuntime.resolveUrl = resolveUrl;
})();
(function() {
  'use strict';
  var types = {
    any: {name: 'any'},
    boolean: {name: 'boolean'},
    number: {name: 'number'},
    string: {name: 'string'},
    symbol: {name: 'symbol'},
    void: {name: 'void'}
  };
  var GenericType = function GenericType(type, argumentTypes) {
    this.type = type;
    this.argumentTypes = argumentTypes;
  };
  ($traceurRuntime.createClass)(GenericType, {}, {});
  var typeRegister = Object.create(null);
  function genericType(type) {
    for (var argumentTypes = [],
        $__1 = 1; $__1 < arguments.length; $__1++)
      argumentTypes[$__1 - 1] = arguments[$__1];
    var typeMap = typeRegister;
    var key = $traceurRuntime.getOwnHashObject(type).hash;
    if (!typeMap[key]) {
      typeMap[key] = Object.create(null);
    }
    typeMap = typeMap[key];
    for (var i = 0; i < argumentTypes.length - 1; i++) {
      key = $traceurRuntime.getOwnHashObject(argumentTypes[i]).hash;
      if (!typeMap[key]) {
        typeMap[key] = Object.create(null);
      }
      typeMap = typeMap[key];
    }
    var tail = argumentTypes[argumentTypes.length - 1];
    key = $traceurRuntime.getOwnHashObject(tail).hash;
    if (!typeMap[key]) {
      typeMap[key] = new GenericType(type, argumentTypes);
    }
    return typeMap[key];
  }
  $traceurRuntime.GenericType = GenericType;
  $traceurRuntime.genericType = genericType;
  $traceurRuntime.type = types;
})();
(function(global) {
  'use strict';
  var $__2 = $traceurRuntime,
      canonicalizeUrl = $__2.canonicalizeUrl,
      resolveUrl = $__2.resolveUrl,
      isAbsolute = $__2.isAbsolute;
  var moduleInstantiators = Object.create(null);
  var baseURL;
  if (global.location && global.location.href)
    baseURL = resolveUrl(global.location.href, './');
  else
    baseURL = '';
  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
    this.url = url;
    this.value_ = uncoatedModule;
  };
  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
    this.message = this.constructor.name + ': ' + this.stripCause(cause) + ' in ' + erroneousModuleName;
    if (!(cause instanceof $ModuleEvaluationError) && cause.stack)
      this.stack = this.stripStack(cause.stack);
    else
      this.stack = '';
  };
  var $ModuleEvaluationError = ModuleEvaluationError;
  ($traceurRuntime.createClass)(ModuleEvaluationError, {
    stripError: function(message) {
      return message.replace(/.*Error:/, this.constructor.name + ':');
    },
    stripCause: function(cause) {
      if (!cause)
        return '';
      if (!cause.message)
        return cause + '';
      return this.stripError(cause.message);
    },
    loadedBy: function(moduleName) {
      this.stack += '\n loaded by ' + moduleName;
    },
    stripStack: function(causeStack) {
      var stack = [];
      causeStack.split('\n').some((function(frame) {
        if (/UncoatedModuleInstantiator/.test(frame))
          return true;
        stack.push(frame);
      }));
      stack[0] = this.stripError(stack[0]);
      return stack.join('\n');
    }
  }, {}, Error);
  function beforeLines(lines, number) {
    var result = [];
    var first = number - 3;
    if (first < 0)
      first = 0;
    for (var i = first; i < number; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function afterLines(lines, number) {
    var last = number + 1;
    if (last > lines.length - 1)
      last = lines.length - 1;
    var result = [];
    for (var i = number; i <= last; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function columnSpacing(columns) {
    var result = '';
    for (var i = 0; i < columns - 1; i++) {
      result += '-';
    }
    return result;
  }
  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
    $traceurRuntime.superConstructor($UncoatedModuleInstantiator).call(this, url, null);
    this.func = func;
  };
  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
      if (this.value_)
        return this.value_;
      try {
        var relativeRequire;
        if (typeof $traceurRuntime !== undefined) {
          relativeRequire = $traceurRuntime.require.bind(null, this.url);
        }
        return this.value_ = this.func.call(global, relativeRequire);
      } catch (ex) {
        if (ex instanceof ModuleEvaluationError) {
          ex.loadedBy(this.url);
          throw ex;
        }
        if (ex.stack) {
          var lines = this.func.toString().split('\n');
          var evaled = [];
          ex.stack.split('\n').some(function(frame) {
            if (frame.indexOf('UncoatedModuleInstantiator.getUncoatedModule') > 0)
              return true;
            var m = /(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(frame);
            if (m) {
              var line = parseInt(m[2], 10);
              evaled = evaled.concat(beforeLines(lines, line));
              evaled.push(columnSpacing(m[3]) + '^');
              evaled = evaled.concat(afterLines(lines, line));
              evaled.push('= = = = = = = = =');
            } else {
              evaled.push(frame);
            }
          });
          ex.stack = evaled.join('\n');
        }
        throw new ModuleEvaluationError(this.url, ex);
      }
    }}, {}, UncoatedModuleEntry);
  function getUncoatedModuleInstantiator(name) {
    if (!name)
      return;
    var url = ModuleStore.normalize(name);
    return moduleInstantiators[url];
  }
  ;
  var moduleInstances = Object.create(null);
  var liveModuleSentinel = {};
  function Module(uncoatedModule) {
    var isLive = arguments[1];
    var coatedModule = Object.create(null);
    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
      var getter,
          value;
      if (isLive === liveModuleSentinel) {
        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
        if (descr.get)
          getter = descr.get;
      }
      if (!getter) {
        value = uncoatedModule[name];
        getter = function() {
          return value;
        };
      }
      Object.defineProperty(coatedModule, name, {
        get: getter,
        enumerable: true
      });
    }));
    Object.preventExtensions(coatedModule);
    return coatedModule;
  }
  var ModuleStore = {
    normalize: function(name, refererName, refererAddress) {
      if (typeof name !== 'string')
        throw new TypeError('module name must be a string, not ' + typeof name);
      if (isAbsolute(name))
        return canonicalizeUrl(name);
      if (/[^\.]\/\.\.\//.test(name)) {
        throw new Error('module name embeds /../: ' + name);
      }
      if (name[0] === '.' && refererName)
        return resolveUrl(refererName, name);
      return canonicalizeUrl(name);
    },
    get: function(normalizedName) {
      var m = getUncoatedModuleInstantiator(normalizedName);
      if (!m)
        return undefined;
      var moduleInstance = moduleInstances[m.url];
      if (moduleInstance)
        return moduleInstance;
      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
      return moduleInstances[m.url] = moduleInstance;
    },
    set: function(normalizedName, module) {
      normalizedName = String(normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
        return module;
      }));
      moduleInstances[normalizedName] = module;
    },
    get baseURL() {
      return baseURL;
    },
    set baseURL(v) {
      baseURL = String(v);
    },
    registerModule: function(name, deps, func) {
      var normalizedName = ModuleStore.normalize(name);
      if (moduleInstantiators[normalizedName])
        throw new Error('duplicate module named ' + normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
    },
    bundleStore: Object.create(null),
    register: function(name, deps, func) {
      if (!deps || !deps.length && !func.length) {
        this.registerModule(name, deps, func);
      } else {
        this.bundleStore[name] = {
          deps: deps,
          execute: function() {
            var $__0 = arguments;
            var depMap = {};
            deps.forEach((function(dep, index) {
              return depMap[dep] = $__0[index];
            }));
            var registryEntry = func.call(this, depMap);
            registryEntry.execute.call(this);
            return registryEntry.exports;
          }
        };
      }
    },
    getAnonymousModule: function(func) {
      return new Module(func.call(global), liveModuleSentinel);
    },
    getForTesting: function(name) {
      var $__0 = this;
      if (!this.testingPrefix_) {
        Object.keys(moduleInstances).some((function(key) {
          var m = /(traceur@[^\/]*\/)/.exec(key);
          if (m) {
            $__0.testingPrefix_ = m[1];
            return true;
          }
        }));
      }
      return this.get(this.testingPrefix_ + name);
    }
  };
  var moduleStoreModule = new Module({ModuleStore: ModuleStore});
  ModuleStore.set('@traceur/src/runtime/ModuleStore', moduleStoreModule);
  ModuleStore.set('@traceur/src/runtime/ModuleStore.js', moduleStoreModule);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
  };
  $traceurRuntime.ModuleStore = ModuleStore;
  global.System = {
    register: ModuleStore.register.bind(ModuleStore),
    registerModule: ModuleStore.registerModule.bind(ModuleStore),
    get: ModuleStore.get,
    set: ModuleStore.set,
    normalize: ModuleStore.normalize
  };
  $traceurRuntime.getModuleImpl = function(name) {
    var instantiator = getUncoatedModuleInstantiator(name);
    return instantiator && instantiator.getUncoatedModule();
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/utils.js";
  var $ceil = Math.ceil;
  var $floor = Math.floor;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var $pow = Math.pow;
  var $min = Math.min;
  var toObject = $traceurRuntime.toObject;
  function toUint32(x) {
    return x >>> 0;
  }
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function isCallable(x) {
    return typeof x === 'function';
  }
  function isNumber(x) {
    return typeof x === 'number';
  }
  function toInteger(x) {
    x = +x;
    if ($isNaN(x))
      return 0;
    if (x === 0 || !$isFinite(x))
      return x;
    return x > 0 ? $floor(x) : $ceil(x);
  }
  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
  function toLength(x) {
    var len = toInteger(x);
    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
  }
  function checkIterable(x) {
    return !isObject(x) ? undefined : x[Symbol.iterator];
  }
  function isConstructor(x) {
    return isCallable(x);
  }
  function createIteratorResultObject(value, done) {
    return {
      value: value,
      done: done
    };
  }
  function maybeDefine(object, name, descr) {
    if (!(name in object)) {
      Object.defineProperty(object, name, descr);
    }
  }
  function maybeDefineMethod(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  function maybeDefineConst(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: false,
      enumerable: false,
      writable: false
    });
  }
  function maybeAddFunctions(object, functions) {
    for (var i = 0; i < functions.length; i += 2) {
      var name = functions[i];
      var value = functions[i + 1];
      maybeDefineMethod(object, name, value);
    }
  }
  function maybeAddConsts(object, consts) {
    for (var i = 0; i < consts.length; i += 2) {
      var name = consts[i];
      var value = consts[i + 1];
      maybeDefineConst(object, name, value);
    }
  }
  function maybeAddIterator(object, func, Symbol) {
    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
      return;
    if (object['@@iterator'])
      func = object['@@iterator'];
    Object.defineProperty(object, Symbol.iterator, {
      value: func,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  var polyfills = [];
  function registerPolyfill(func) {
    polyfills.push(func);
  }
  function polyfillAll(global) {
    polyfills.forEach((function(f) {
      return f(global);
    }));
  }
  return {
    get toObject() {
      return toObject;
    },
    get toUint32() {
      return toUint32;
    },
    get isObject() {
      return isObject;
    },
    get isCallable() {
      return isCallable;
    },
    get isNumber() {
      return isNumber;
    },
    get toInteger() {
      return toInteger;
    },
    get toLength() {
      return toLength;
    },
    get checkIterable() {
      return checkIterable;
    },
    get isConstructor() {
      return isConstructor;
    },
    get createIteratorResultObject() {
      return createIteratorResultObject;
    },
    get maybeDefine() {
      return maybeDefine;
    },
    get maybeDefineMethod() {
      return maybeDefineMethod;
    },
    get maybeDefineConst() {
      return maybeDefineConst;
    },
    get maybeAddFunctions() {
      return maybeAddFunctions;
    },
    get maybeAddConsts() {
      return maybeAddConsts;
    },
    get maybeAddIterator() {
      return maybeAddIterator;
    },
    get registerPolyfill() {
      return registerPolyfill;
    },
    get polyfillAll() {
      return polyfillAll;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Map.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  var deletedSentinel = {};
  function lookupIndex(map, key) {
    if (isObject(key)) {
      var hashObject = getOwnHashObject(key);
      return hashObject && map.objectIndex_[hashObject.hash];
    }
    if (typeof key === 'string')
      return map.stringIndex_[key];
    return map.primitiveIndex_[key];
  }
  function initMap(map) {
    map.entries_ = [];
    map.objectIndex_ = Object.create(null);
    map.stringIndex_ = Object.create(null);
    map.primitiveIndex_ = Object.create(null);
    map.deletedCount_ = 0;
  }
  var Map = function Map() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Map called on incompatible type');
    if ($hasOwnProperty.call(this, 'entries_')) {
      throw new TypeError('Map can not be reentrantly initialised');
    }
    initMap(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__2 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var $__4 = $__3.value,
            key = $__4[0],
            value = $__4[1];
        {
          this.set(key, value);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Map, {
    get size() {
      return this.entries_.length / 2 - this.deletedCount_;
    },
    get: function(key) {
      var index = lookupIndex(this, key);
      if (index !== undefined)
        return this.entries_[index + 1];
    },
    set: function(key, value) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index = lookupIndex(this, key);
      if (index !== undefined) {
        this.entries_[index + 1] = value;
      } else {
        index = this.entries_.length;
        this.entries_[index] = key;
        this.entries_[index + 1] = value;
        if (objectMode) {
          var hashObject = getOwnHashObject(key);
          var hash = hashObject.hash;
          this.objectIndex_[hash] = index;
        } else if (stringMode) {
          this.stringIndex_[key] = index;
        } else {
          this.primitiveIndex_[key] = index;
        }
      }
      return this;
    },
    has: function(key) {
      return lookupIndex(this, key) !== undefined;
    },
    delete: function(key) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index;
      var hash;
      if (objectMode) {
        var hashObject = getOwnHashObject(key);
        if (hashObject) {
          index = this.objectIndex_[hash = hashObject.hash];
          delete this.objectIndex_[hash];
        }
      } else if (stringMode) {
        index = this.stringIndex_[key];
        delete this.stringIndex_[key];
      } else {
        index = this.primitiveIndex_[key];
        delete this.primitiveIndex_[key];
      }
      if (index !== undefined) {
        this.entries_[index] = deletedSentinel;
        this.entries_[index + 1] = undefined;
        this.deletedCount_++;
        return true;
      }
      return false;
    },
    clear: function() {
      initMap(this);
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      for (var i = 0; i < this.entries_.length; i += 2) {
        var key = this.entries_[i];
        var value = this.entries_[i + 1];
        if (key === deletedSentinel)
          continue;
        callbackFn.call(thisArg, value, key, this);
      }
    },
    entries: $traceurRuntime.initGeneratorFunction(function $__5() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return [key, value];
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    }),
    keys: $traceurRuntime.initGeneratorFunction(function $__6() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return key;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    }),
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return value;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    })
  }, {});
  Object.defineProperty(Map.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Map.prototype.entries
  });
  function polyfillMap(global) {
    var $__4 = global,
        Object = $__4.Object,
        Symbol = $__4.Symbol;
    if (!global.Map)
      global.Map = Map;
    var mapPrototype = global.Map.prototype;
    if (mapPrototype.entries === undefined)
      global.Map = Map;
    if (mapPrototype.entries) {
      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillMap);
  return {
    get Map() {
      return Map;
    },
    get polyfillMap() {
      return polyfillMap;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Set.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var Map = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js").Map;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  function initSet(set) {
    set.map_ = new Map();
  }
  var Set = function Set() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Set called on incompatible type');
    if ($hasOwnProperty.call(this, 'map_')) {
      throw new TypeError('Set can not be reentrantly initialised');
    }
    initSet(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__4 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__5; !($__5 = $__4.next()).done; ) {
        var item = $__5.value;
        {
          this.add(item);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Set, {
    get size() {
      return this.map_.size;
    },
    has: function(key) {
      return this.map_.has(key);
    },
    add: function(key) {
      this.map_.set(key, key);
      return this;
    },
    delete: function(key) {
      return this.map_.delete(key);
    },
    clear: function() {
      return this.map_.clear();
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      var $__2 = this;
      return this.map_.forEach((function(value, key) {
        callbackFn.call(thisArg, key, key, $__2);
      }));
    },
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var $__8,
          $__9;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__8 = this.map_.keys()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__9 = $__8[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__9.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__9.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__9.value;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    }),
    entries: $traceurRuntime.initGeneratorFunction(function $__10() {
      var $__11,
          $__12;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__11 = this.map_.entries()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__12 = $__11[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__12.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__12.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__12.value;
            default:
              return $ctx.end();
          }
      }, $__10, this);
    })
  }, {});
  Object.defineProperty(Set.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  Object.defineProperty(Set.prototype, 'keys', {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  function polyfillSet(global) {
    var $__6 = global,
        Object = $__6.Object,
        Symbol = $__6.Symbol;
    if (!global.Set)
      global.Set = Set;
    var setPrototype = global.Set.prototype;
    if (setPrototype.values) {
      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillSet);
  return {
    get Set() {
      return Set;
    },
    get polyfillSet() {
      return polyfillSet;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js" + '');
System.registerModule("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js";
  var len = 0;
  function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      scheduleFlush();
    }
  }
  var $__default = asap;
  var browserGlobal = (typeof window !== 'undefined') ? window : {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
  function useNextTick() {
    return function() {
      process.nextTick(flush);
    };
  }
  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, {characterData: true});
    return function() {
      node.data = (iterations = ++iterations % 2);
    };
  }
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function() {
      channel.port2.postMessage(0);
    };
  }
  function useSetTimeout() {
    return function() {
      setTimeout(flush, 1);
    };
  }
  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];
      callback(arg);
      queue[i] = undefined;
      queue[i + 1] = undefined;
    }
    len = 0;
  }
  var scheduleFlush;
  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else {
    scheduleFlush = useSetTimeout();
  }
  return {get default() {
      return $__default;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js";
  var async = System.get("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js").default;
  var registerPolyfill = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").registerPolyfill;
  var promiseRaw = {};
  function isPromise(x) {
    return x && typeof x === 'object' && x.status_ !== undefined;
  }
  function idResolveHandler(x) {
    return x;
  }
  function idRejectHandler(x) {
    throw x;
  }
  function chain(promise) {
    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
    var deferred = getDeferred(promise.constructor);
    switch (promise.status_) {
      case undefined:
        throw TypeError;
      case 0:
        promise.onResolve_.push(onResolve, deferred);
        promise.onReject_.push(onReject, deferred);
        break;
      case +1:
        promiseEnqueue(promise.value_, [onResolve, deferred]);
        break;
      case -1:
        promiseEnqueue(promise.value_, [onReject, deferred]);
        break;
    }
    return deferred.promise;
  }
  function getDeferred(C) {
    if (this === $Promise) {
      var promise = promiseInit(new $Promise(promiseRaw));
      return {
        promise: promise,
        resolve: (function(x) {
          promiseResolve(promise, x);
        }),
        reject: (function(r) {
          promiseReject(promise, r);
        })
      };
    } else {
      var result = {};
      result.promise = new C((function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
      }));
      return result;
    }
  }
  function promiseSet(promise, status, value, onResolve, onReject) {
    promise.status_ = status;
    promise.value_ = value;
    promise.onResolve_ = onResolve;
    promise.onReject_ = onReject;
    return promise;
  }
  function promiseInit(promise) {
    return promiseSet(promise, 0, undefined, [], []);
  }
  var Promise = function Promise(resolver) {
    if (resolver === promiseRaw)
      return;
    if (typeof resolver !== 'function')
      throw new TypeError;
    var promise = promiseInit(this);
    try {
      resolver((function(x) {
        promiseResolve(promise, x);
      }), (function(r) {
        promiseReject(promise, r);
      }));
    } catch (e) {
      promiseReject(promise, e);
    }
  };
  ($traceurRuntime.createClass)(Promise, {
    catch: function(onReject) {
      return this.then(undefined, onReject);
    },
    then: function(onResolve, onReject) {
      if (typeof onResolve !== 'function')
        onResolve = idResolveHandler;
      if (typeof onReject !== 'function')
        onReject = idRejectHandler;
      var that = this;
      var constructor = this.constructor;
      return chain(this, function(x) {
        x = promiseCoerce(constructor, x);
        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
      }, onReject);
    }
  }, {
    resolve: function(x) {
      if (this === $Promise) {
        if (isPromise(x)) {
          return x;
        }
        return promiseSet(new $Promise(promiseRaw), +1, x);
      } else {
        return new this(function(resolve, reject) {
          resolve(x);
        });
      }
    },
    reject: function(r) {
      if (this === $Promise) {
        return promiseSet(new $Promise(promiseRaw), -1, r);
      } else {
        return new this((function(resolve, reject) {
          reject(r);
        }));
      }
    },
    all: function(values) {
      var deferred = getDeferred(this);
      var resolutions = [];
      try {
        var count = values.length;
        if (count === 0) {
          deferred.resolve(resolutions);
        } else {
          for (var i = 0; i < values.length; i++) {
            this.resolve(values[i]).then(function(i, x) {
              resolutions[i] = x;
              if (--count === 0)
                deferred.resolve(resolutions);
            }.bind(undefined, i), (function(r) {
              deferred.reject(r);
            }));
          }
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    },
    race: function(values) {
      var deferred = getDeferred(this);
      try {
        for (var i = 0; i < values.length; i++) {
          this.resolve(values[i]).then((function(x) {
            deferred.resolve(x);
          }), (function(r) {
            deferred.reject(r);
          }));
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    }
  });
  var $Promise = Promise;
  var $PromiseReject = $Promise.reject;
  function promiseResolve(promise, x) {
    promiseDone(promise, +1, x, promise.onResolve_);
  }
  function promiseReject(promise, r) {
    promiseDone(promise, -1, r, promise.onReject_);
  }
  function promiseDone(promise, status, value, reactions) {
    if (promise.status_ !== 0)
      return;
    promiseEnqueue(value, reactions);
    promiseSet(promise, status, value);
  }
  function promiseEnqueue(value, tasks) {
    async((function() {
      for (var i = 0; i < tasks.length; i += 2) {
        promiseHandle(value, tasks[i], tasks[i + 1]);
      }
    }));
  }
  function promiseHandle(value, handler, deferred) {
    try {
      var result = handler(value);
      if (result === deferred.promise)
        throw new TypeError;
      else if (isPromise(result))
        chain(result, deferred.resolve, deferred.reject);
      else
        deferred.resolve(result);
    } catch (e) {
      try {
        deferred.reject(e);
      } catch (e) {}
    }
  }
  var thenableSymbol = '@@thenable';
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function promiseCoerce(constructor, x) {
    if (!isPromise(x) && isObject(x)) {
      var then;
      try {
        then = x.then;
      } catch (r) {
        var promise = $PromiseReject.call(constructor, r);
        x[thenableSymbol] = promise;
        return promise;
      }
      if (typeof then === 'function') {
        var p = x[thenableSymbol];
        if (p) {
          return p;
        } else {
          var deferred = getDeferred(constructor);
          x[thenableSymbol] = deferred.promise;
          try {
            then.call(x, deferred.resolve, deferred.reject);
          } catch (r) {
            deferred.reject(r);
          }
          return deferred.promise;
        }
      }
    }
    return x;
  }
  function polyfillPromise(global) {
    if (!global.Promise)
      global.Promise = Promise;
  }
  registerPolyfill(polyfillPromise);
  return {
    get Promise() {
      return Promise;
    },
    get polyfillPromise() {
      return polyfillPromise;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      createIteratorResultObject = $__0.createIteratorResultObject,
      isObject = $__0.isObject;
  var toProperty = $traceurRuntime.toProperty;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var iteratedString = Symbol('iteratedString');
  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
  var StringIterator = function StringIterator() {};
  ($traceurRuntime.createClass)(StringIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var o = this;
      if (!isObject(o) || !hasOwnProperty.call(o, iteratedString)) {
        throw new TypeError('this must be a StringIterator object');
      }
      var s = o[toProperty(iteratedString)];
      if (s === undefined) {
        return createIteratorResultObject(undefined, true);
      }
      var position = o[toProperty(stringIteratorNextIndex)];
      var len = s.length;
      if (position >= len) {
        o[toProperty(iteratedString)] = undefined;
        return createIteratorResultObject(undefined, true);
      }
      var first = s.charCodeAt(position);
      var resultString;
      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
        resultString = String.fromCharCode(first);
      } else {
        var second = s.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          resultString = String.fromCharCode(first);
        } else {
          resultString = String.fromCharCode(first) + String.fromCharCode(second);
        }
      }
      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
      return createIteratorResultObject(resultString, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createStringIterator(string) {
    var s = String(string);
    var iterator = Object.create(StringIterator.prototype);
    iterator[toProperty(iteratedString)] = s;
    iterator[toProperty(stringIteratorNextIndex)] = 0;
    return iterator;
  }
  return {get createStringIterator() {
      return createStringIterator;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/String.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/String.js";
  var createStringIterator = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js").createStringIterator;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill;
  var $toString = Object.prototype.toString;
  var $indexOf = String.prototype.indexOf;
  var $lastIndexOf = String.prototype.lastIndexOf;
  function startsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (isNaN(pos)) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    return $indexOf.call(string, searchString, pos) == start;
  }
  function endsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var pos = stringLength;
    if (arguments.length > 1) {
      var position = arguments[1];
      if (position !== undefined) {
        pos = position ? Number(position) : 0;
        if (isNaN(pos)) {
          pos = 0;
        }
      }
    }
    var end = Math.min(Math.max(pos, 0), stringLength);
    var start = end - searchLength;
    if (start < 0) {
      return false;
    }
    return $lastIndexOf.call(string, searchString, start) == start;
  }
  function includes(search) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    if (search && $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (pos != pos) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    if (searchLength + start > stringLength) {
      return false;
    }
    return $indexOf.call(string, searchString, pos) != -1;
  }
  function repeat(count) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var n = count ? Number(count) : 0;
    if (isNaN(n)) {
      n = 0;
    }
    if (n < 0 || n == Infinity) {
      throw RangeError();
    }
    if (n == 0) {
      return '';
    }
    var result = '';
    while (n--) {
      result += string;
    }
    return result;
  }
  function codePointAt(position) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var size = string.length;
    var index = position ? Number(position) : 0;
    if (isNaN(index)) {
      index = 0;
    }
    if (index < 0 || index >= size) {
      return undefined;
    }
    var first = string.charCodeAt(index);
    var second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }
    return first;
  }
  function raw(callsite) {
    var raw = callsite.raw;
    var len = raw.length >>> 0;
    if (len === 0)
      return '';
    var s = '';
    var i = 0;
    while (true) {
      s += raw[i];
      if (i + 1 === len)
        return s;
      s += arguments[++i];
    }
  }
  function fromCodePoint() {
    var codeUnits = [];
    var floor = Math.floor;
    var highSurrogate;
    var lowSurrogate;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return '';
    }
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
      if (codePoint <= 0xFFFF) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        highSurrogate = (codePoint >> 10) + 0xD800;
        lowSurrogate = (codePoint % 0x400) + 0xDC00;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
    }
    return String.fromCharCode.apply(null, codeUnits);
  }
  function stringPrototypeIterator() {
    var o = $traceurRuntime.checkObjectCoercible(this);
    var s = String(o);
    return createStringIterator(s);
  }
  function polyfillString(global) {
    var String = global.String;
    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'endsWith', endsWith, 'includes', includes, 'repeat', repeat, 'startsWith', startsWith]);
    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
  }
  registerPolyfill(polyfillString);
  return {
    get startsWith() {
      return startsWith;
    },
    get endsWith() {
      return endsWith;
    },
    get includes() {
      return includes;
    },
    get repeat() {
      return repeat;
    },
    get codePointAt() {
      return codePointAt;
    },
    get raw() {
      return raw;
    },
    get fromCodePoint() {
      return fromCodePoint;
    },
    get stringPrototypeIterator() {
      return stringPrototypeIterator;
    },
    get polyfillString() {
      return polyfillString;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/String.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      toObject = $__0.toObject,
      toUint32 = $__0.toUint32,
      createIteratorResultObject = $__0.createIteratorResultObject;
  var ARRAY_ITERATOR_KIND_KEYS = 1;
  var ARRAY_ITERATOR_KIND_VALUES = 2;
  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
  var ArrayIterator = function ArrayIterator() {};
  ($traceurRuntime.createClass)(ArrayIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var iterator = toObject(this);
      var array = iterator.iteratorObject_;
      if (!array) {
        throw new TypeError('Object is not an ArrayIterator');
      }
      var index = iterator.arrayIteratorNextIndex_;
      var itemKind = iterator.arrayIterationKind_;
      var length = toUint32(array.length);
      if (index >= length) {
        iterator.arrayIteratorNextIndex_ = Infinity;
        return createIteratorResultObject(undefined, true);
      }
      iterator.arrayIteratorNextIndex_ = index + 1;
      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
        return createIteratorResultObject(array[index], false);
      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
        return createIteratorResultObject([index, array[index]], false);
      return createIteratorResultObject(index, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createArrayIterator(array, kind) {
    var object = toObject(array);
    var iterator = new ArrayIterator;
    iterator.iteratorObject_ = object;
    iterator.arrayIteratorNextIndex_ = 0;
    iterator.arrayIterationKind_ = kind;
    return iterator;
  }
  function entries() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
  }
  function keys() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
  }
  function values() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
  }
  return {
    get entries() {
      return entries;
    },
    get keys() {
      return keys;
    },
    get values() {
      return values;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Array.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js"),
      entries = $__0.entries,
      keys = $__0.keys,
      values = $__0.values;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      checkIterable = $__1.checkIterable,
      isCallable = $__1.isCallable,
      isConstructor = $__1.isConstructor,
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill,
      toInteger = $__1.toInteger,
      toLength = $__1.toLength,
      toObject = $__1.toObject;
  function from(arrLike) {
    var mapFn = arguments[1];
    var thisArg = arguments[2];
    var C = this;
    var items = toObject(arrLike);
    var mapping = mapFn !== undefined;
    var k = 0;
    var arr,
        len;
    if (mapping && !isCallable(mapFn)) {
      throw TypeError();
    }
    if (checkIterable(items)) {
      arr = isConstructor(C) ? new C() : [];
      for (var $__2 = items[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var item = $__3.value;
        {
          if (mapping) {
            arr[k] = mapFn.call(thisArg, item, k);
          } else {
            arr[k] = item;
          }
          k++;
        }
      }
      arr.length = k;
      return arr;
    }
    len = toLength(items.length);
    arr = isConstructor(C) ? new C(len) : new Array(len);
    for (; k < len; k++) {
      if (mapping) {
        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
      } else {
        arr[k] = items[k];
      }
    }
    arr.length = len;
    return arr;
  }
  function of() {
    for (var items = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      items[$__4] = arguments[$__4];
    var C = this;
    var len = items.length;
    var arr = isConstructor(C) ? new C(len) : new Array(len);
    for (var k = 0; k < len; k++) {
      arr[k] = items[k];
    }
    arr.length = len;
    return arr;
  }
  function fill(value) {
    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
    var end = arguments[2];
    var object = toObject(this);
    var len = toLength(object.length);
    var fillStart = toInteger(start);
    var fillEnd = end !== undefined ? toInteger(end) : len;
    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
    while (fillStart < fillEnd) {
      object[fillStart] = value;
      fillStart++;
    }
    return object;
  }
  function find(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg);
  }
  function findIndex(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg, true);
  }
  function findHelper(self, predicate) {
    var thisArg = arguments[2];
    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
    var object = toObject(self);
    var len = toLength(object.length);
    if (!isCallable(predicate)) {
      throw TypeError();
    }
    for (var i = 0; i < len; i++) {
      var value = object[i];
      if (predicate.call(thisArg, value, i, object)) {
        return returnIndex ? i : value;
      }
    }
    return returnIndex ? -1 : undefined;
  }
  function polyfillArray(global) {
    var $__5 = global,
        Array = $__5.Array,
        Object = $__5.Object,
        Symbol = $__5.Symbol;
    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
    maybeAddFunctions(Array, ['from', from, 'of', of]);
    maybeAddIterator(Array.prototype, values, Symbol);
    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
      return this;
    }, Symbol);
  }
  registerPolyfill(polyfillArray);
  return {
    get from() {
      return from;
    },
    get of() {
      return of;
    },
    get fill() {
      return fill;
    },
    get find() {
      return find;
    },
    get findIndex() {
      return findIndex;
    },
    get polyfillArray() {
      return polyfillArray;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Object.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill;
  var $__1 = $traceurRuntime,
      defineProperty = $__1.defineProperty,
      getOwnPropertyDescriptor = $__1.getOwnPropertyDescriptor,
      getOwnPropertyNames = $__1.getOwnPropertyNames,
      isPrivateName = $__1.isPrivateName,
      keys = $__1.keys;
  function is(left, right) {
    if (left === right)
      return left !== 0 || 1 / left === 1 / right;
    return left !== left && right !== right;
  }
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      var props = source == null ? [] : keys(source);
      var p,
          length = props.length;
      for (p = 0; p < length; p++) {
        var name = props[p];
        if (isPrivateName(name))
          continue;
        target[name] = source[name];
      }
    }
    return target;
  }
  function mixin(target, source) {
    var props = getOwnPropertyNames(source);
    var p,
        descriptor,
        length = props.length;
    for (p = 0; p < length; p++) {
      var name = props[p];
      if (isPrivateName(name))
        continue;
      descriptor = getOwnPropertyDescriptor(source, props[p]);
      defineProperty(target, props[p], descriptor);
    }
    return target;
  }
  function polyfillObject(global) {
    var Object = global.Object;
    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
  }
  registerPolyfill(polyfillObject);
  return {
    get is() {
      return is;
    },
    get assign() {
      return assign;
    },
    get mixin() {
      return mixin;
    },
    get polyfillObject() {
      return polyfillObject;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Number.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isNumber = $__0.isNumber,
      maybeAddConsts = $__0.maybeAddConsts,
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill,
      toInteger = $__0.toInteger;
  var $abs = Math.abs;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
  var EPSILON = Math.pow(2, -52);
  function NumberIsFinite(number) {
    return isNumber(number) && $isFinite(number);
  }
  ;
  function isInteger(number) {
    return NumberIsFinite(number) && toInteger(number) === number;
  }
  function NumberIsNaN(number) {
    return isNumber(number) && $isNaN(number);
  }
  ;
  function isSafeInteger(number) {
    if (NumberIsFinite(number)) {
      var integral = toInteger(number);
      if (integral === number)
        return $abs(integral) <= MAX_SAFE_INTEGER;
    }
    return false;
  }
  function polyfillNumber(global) {
    var Number = global.Number;
    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
  }
  registerPolyfill(polyfillNumber);
  return {
    get MAX_SAFE_INTEGER() {
      return MAX_SAFE_INTEGER;
    },
    get MIN_SAFE_INTEGER() {
      return MIN_SAFE_INTEGER;
    },
    get EPSILON() {
      return EPSILON;
    },
    get isFinite() {
      return NumberIsFinite;
    },
    get isInteger() {
      return isInteger;
    },
    get isNaN() {
      return NumberIsNaN;
    },
    get isSafeInteger() {
      return isSafeInteger;
    },
    get polyfillNumber() {
      return polyfillNumber;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js";
  var polyfillAll = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").polyfillAll;
  polyfillAll(Reflect.global);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
    polyfillAll(global);
  };
  return {};
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js" + '');

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":5,"path":4}],7:[function(require,module,exports){
"use strict";
"use strict";
var angular = require("angular");
angular.module("actors", []).factory("actors", function() {
  var actors = [{
    name: "GaRRy",
    image: "img/garry.png"
  }, {
    name: "Paige",
    image: "img/paige.png"
  }, {
    name: "Lindsay",
    image: "img/lindsay.png"
  }, {
    name: "Ethan",
    image: "img/ethan.png"
  }, {
    name: "Beyata",
    image: "img/beyata.png"
  }, {
    name: "Cathie",
    image: "img/cathie.png"
  }, {
    name: "Spencer",
    image: "img/spencer.png"
  }, {
    name: "Nadja",
    image: "img/nadja.png"
  }, {
    name: "No one",
    image: "img/noone.png"
  }];
  var noOne = actors[actors.length - 1];
  return {
    actors: actors,
    setCurrentActorByImage: function(url) {
      actors.some(function(item) {
        if (url.includes(item.image)) {
          this.currentActor = item;
          return true;
        }
      }, this);
    },
    setCurrentActorByIndex: function(index) {
      this.currentActor = actors[index];
    },
    currentActor: actors[actors.length - 1],
    pickNoOne: function() {
      this.currentActor = noOne;
    },
    get noOne() {
      return noOne;
    }
  };
}).directive("appActors", function(actors) {
  return {
    restrict: "E",
    controller: "actorController",
    templateUrl: "actors.html"
  };
}).directive("actorImage", ["actors", function(actors) {
  return {
    restrict: "A",
    link: function(scope, element) {
      element.on("click", function(e) {
        var $__0 = this;
        e.preventDefault();
        scope.$apply((function() {
          actors.setCurrentActorByImage($__0.src);
        }));
      });
    }
  };
}]).controller("actorController", ["$scope", "actors", function($scope, actors) {
  $scope.actors = actors.actors;
  $scope.isActorSelected = function(actor) {
    return actors.currentActor === actor;
  };
}]);


//# sourceURL=D:/thedrinkinggame/src/angular-modules/actors.js
},{"angular":3}],8:[function(require,module,exports){
"use strict";
"use strict";
require("./home");
require("./templateCache");
require("angular").module("app", ["home", "templateCache"]);


//# sourceURL=D:/thedrinkinggame/src/angular-modules/app.js
},{"./home":10,"./templateCache":12,"angular":3}],9:[function(require,module,exports){
"use strict";
"use strict";
require("./submiter");
require("angular").module("banners", ["submiter"]).directive("appBanners", function() {
  return {
    restrict: "E",
    controller: "bannersController",
    templateUrl: "banners.html",
    link: function(scope, element) {}
  };
}).controller("bannersController", ["$scope", function($scope) {
  $scope.bannerButtons = [{
    title: "The Drinking Game",
    image: "img/banners/thedrinkinggame.png"
  }, {
    title: "Hemingway",
    image: "img/banners/hemingway.png"
  }, {
    title: "Watergate",
    image: "img/banners/watergate.png"
  }, {
    title: "Something",
    image: "img/banners/something.png"
  }];
}]).factory("customBanner", function() {
  var inputElement = null,
      inputActive = false,
      buttonThatCalled = null;
  function toggleButton(element) {
    element[0].textContent = (element[0].textContent === "Cancel") ? "Custom" : "Cancel";
    if (element[0].textContent === "Cancel") {
      element.addClass("cancel-button");
    } else {
      element.removeClass("cancel-button");
    }
  }
  return {
    registerInputElement: function(element) {
      inputElement = element;
    },
    toggleInputActivationStatus: function(ele) {
      buttonThatCalled = ele || buttonThatCalled;
      toggleButton(buttonThatCalled);
      inputActive = !inputActive;
      inputElement.attr("placeholder", (inputElement.attr("placeholder")) ? "" : "Please enter a direct link to an image");
    },
    get inputActive() {
      return inputActive;
    }
  };
}).directive("bannerButton", ["submiter", function(submiter) {
  return {
    restrict: "A",
    link: function(scope, element) {
      element.on("click", function() {
        submiter.submitBanner(scope.bannerButton);
      });
    }
  };
}]).directive("customBannerButton", ["customBanner", function(customBanner) {
  return {
    restrict: "A",
    link: function(scope, element) {
      element.on("click", function() {
        customBanner.toggleInputActivationStatus(element);
      });
    }
  };
}]);


//# sourceURL=D:/thedrinkinggame/src/angular-modules/banners.js
},{"./submiter":11,"angular":3}],10:[function(require,module,exports){
"use strict";
"use strict";
require("./submiter");
require("./actors");
require("./banners");
require("angular").module("home", ["submiter", "actors", "banners"]).directive("appHome", function() {
  return {
    restrict: "E",
    templateUrl: "home.html"
  };
}).directive("alwaysFocused", ["submiter", "actors", "customBanner", function(submiter, actors, customBanner) {
  return {
    restrict: "A",
    link: function(scope, element) {
      element[0].focus();
      element.on("blur", function() {
        element[0].focus();
      });
      element.on("keypress", function(e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          if (customBanner.inputActive) {
            scope.$apply(function() {
              submiter.submitCustomBannerUrl(element[0]);
            });
          } else {
            scope.$apply(function() {
              submiter.submitText(element[0]);
            });
          }
        } else if (e.keyCode >= 48 && e.keyCode <= 57) {
          e.preventDefault();
          scope.$apply(function() {
            if (e.keyCode === 48) {
              actors.setCurrentActorByIndex(8);
            } else {
              actors.setCurrentActorByIndex(e.keyCode - 49);
            }
          });
        }
      });
      customBanner.registerInputElement(element);
    }
  };
}]);


//# sourceURL=D:/thedrinkinggame/src/angular-modules/home.js
},{"./actors":7,"./banners":9,"./submiter":11,"angular":3}],11:[function(require,module,exports){
"use strict";
"use strict";
require("./actors");
require("angular").module("submiter", ["actors"]).factory("submiter", ["actors", "customBanner", function(actors, customBanner) {
  var socket = io();
  return {
    submitText: function(element) {
      if (!element.textContent) {
        element.textContent = "";
        return false;
      }
      if (actors.currentActor && actors.currentActor !== actors.noOne) {
        socket.emit('quote', {
          actor: actors.currentActor,
          quote: element.textContent
        });
      } else {
        socket.emit('quote', {quote: element.textContent});
      }
      element.textContent = "";
      actors.pickNoOne();
    },
    submitBanner: function(banner) {
      socket.emit('banner', banner);
    },
    submitCustomBannerUrl: function(element) {
      socket.emit('banner', {image: element.textContent});
      customBanner.toggleInputActivationStatus();
      element.textContent = "";
    }
  };
}]);


//# sourceURL=D:/thedrinkinggame/src/angular-modules/submiter.js
},{"./actors":7,"angular":3}],12:[function(require,module,exports){
"use strict";
var angular = require("angular");
angular.module("templateCache", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("actors.html", "<div class=\"actors-block\">\r\n    <div class=\"actor-image-wrapper\" ng-repeat=\"actor in actors track by $index\">\r\n        {{($index+1)}}\r\n        <img actor-image ng-src=\"{{actor.image}}\" ng-class=\"{\'actor-image-not-selected\':!isActorSelected(actor)}\" />\r\n    </div>\r\n</div>\r\n");
  $templateCache.put("banners.html", "<button ng-repeat=\"bannerButton in bannerButtons track by $index\" banner-button class=\"banner-button\">{{bannerButton.title}}</button>\r\n<button custom-banner-button class=\"banner-button\">Custom</button>\r\n");
  $templateCache.put("home.html", "<app-banners></app-banners>\r\n<app-actors></app-actors>\r\n<div class=\"type-transcribe\" placeholder=\"\" always-focused contentEditable=\"true\"></div>\r\n");
}]);


//# sourceURL=D:/thedrinkinggame/src/angular-modules/templateCache.js
},{"angular":3}]},{},[1,6]);

//# sourceMappingURL=../src/main.js.map