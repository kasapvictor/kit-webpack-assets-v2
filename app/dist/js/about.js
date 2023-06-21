!(function () {
  'use strict';
  var e,
    n,
    t,
    r,
    o,
    i,
    a,
    c,
    s,
    u,
    p,
    f,
    l,
    d,
    v = {
      816: function (e, n, t) {
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          c = t(667),
          s = t.n(c),
          u = new URL(t(151), t.b),
          p = a()(o()),
          f = s()(u);
        p.push([
          e.id,
          '.box2 {\n  width: 200px;\n  height: 200px;\n  display: -ms-grid;\n  display: grid;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: url(' +
            f +
            ');\n  background-size: contain;\n  border: 0.5rem solid red;\n  -webkit-box-shadow: 40px 20px 40px -10px rgba(0, 0, 0, 0.5);\n          box-shadow: 40px 20px 40px -10px rgba(0, 0, 0, 0.5);\n  border-radius: 0.5rem;\n}\n\n.box2:hover {\n  border-radius: 2rem;\n}\n',
          '',
        ]),
          (n.Z = p);
      },
      645: function (e) {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = '',
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += '@supports ('.concat(n[4], ') {')),
                  n[2] && (t += '@media '.concat(n[2], ' {')),
                  r && (t += '@layer'.concat(n[5].length > 0 ? ' '.concat(n[5]) : '', ' {')),
                  (t += e(n)),
                  r && (t += '}'),
                  n[2] && (t += '}'),
                  n[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (n.i = function (e, t, r, o, i) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var p = [].concat(e[u]);
                (r && a[p[0]]) ||
                  (void 0 !== i &&
                    (void 0 === p[5] ||
                      (p[1] = '@layer'.concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {').concat(p[1], '}')),
                    (p[5] = i)),
                  t && (p[2] ? ((p[1] = '@media '.concat(p[2], ' {').concat(p[1], '}')), (p[2] = t)) : (p[2] = t)),
                  o &&
                    (p[4]
                      ? ((p[1] = '@supports ('.concat(p[4], ') {').concat(p[1], '}')), (p[4] = o))
                      : (p[4] = ''.concat(o))),
                  n.push(p));
              }
            }),
            n
          );
        };
      },
      667: function (e) {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                  : e)
              : e
          );
        };
      },
      81: function (e) {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: function (e) {
        var n = [];

        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }

        function r(e, r) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = r.base ? s[0] + r.base : s[0],
              p = i[u] || 0,
              f = ''.concat(u, ' ').concat(p);
            i[u] = p + 1;
            var l = t(f),
              d = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
            if (-1 !== l) n[l].references++, n[l].updater(d);
            else {
              var v = o(d, r);
              (r.byIndex = c), n.splice(c, 0, { identifier: f, updater: v, references: 1 });
            }
            a.push(f);
          }
          return a;
        }

        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }

        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              n[c].references--;
            }
            for (var s = r(e, o), u = 0; u < i.length; u++) {
              var p = t(i[u]);
              0 === n[p].references && (n[p].updater(), n.splice(p, 1));
            }
            i = s;
          };
        };
      },
      569: function (e) {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      216: function (e) {
        e.exports = function (e) {
          var n = document.createElement('style');
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: function (e, n, t) {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute('nonce', n);
        };
      },
      795: function (e) {
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return {
              update: function () {},
              remove: function () {},
            };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o && (r += '@layer'.concat(t.layer.length > 0 ? ' '.concat(t.layer) : '', ' {')),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var i = t.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    ' */',
                  )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: function (e) {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      151: function (e, n, t) {
        e.exports = t.p + 'img/img.png';
      },
    },
    h = {};

  function m(e) {
    var n = h[e];
    if (void 0 !== n) return n.exports;
    var t = (h[e] = { id: e, exports: {} });
    return v[e](t, t.exports, m), t.exports;
  }

  (m.m = v),
    (m.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return m.d(n, { a: n }), n;
    }),
    (m.d = function (e, n) {
      for (var t in n) m.o(n, t) && !m.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (m.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (m.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (function () {
      var e;
      m.g.importScripts && (e = m.g.location + '');
      var n = m.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var t = n.getElementsByTagName('script');
        if (t.length) for (var r = t.length - 1; r > -1 && !e; ) e = t[r--].src;
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (m.p = e + '../');
    })(),
    (m.b = document.baseURI || self.location.href),
    (m.nc = void 0),
    (e = m(379)),
    (n = m.n(e)),
    (t = m(795)),
    (r = m.n(t)),
    (o = m(569)),
    (i = m.n(o)),
    (a = m(565)),
    (c = m.n(a)),
    (s = m(216)),
    (u = m.n(s)),
    (p = m(589)),
    (f = m.n(p)),
    (l = m(816)),
    ((d = {}).styleTagTransform = f()),
    (d.setAttributes = c()),
    (d.insert = i().bind(null, 'head')),
    (d.domAPI = r()),
    (d.insertStyleElement = u()),
    n()(l.Z, d),
    l.Z && l.Z.locals && l.Z.locals,
    (() => {
      const e = document.querySelector('body');
      if (!e) return;
      const n = ((e) => {
        let n = 0,
          t = 0;
        for (; n < 15; ) (t += n), (n += 1);
        return t;
      })();
      e.append(`[---ololo---]${n}`);
    })();
})();