// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"81e4s":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4f1526def5088a9d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6hVnH":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"UI 좌우 배치 전환","toggle-show-tools":"도구 보이기/숨기기","scroll":"스크롤","donate":"기부","home":"홈","modal-new-tab":"새 탭에서 열기","tab-edit":"편집","tab-file":"파일","tool-brush":"붓","tool-paint-bucket":"페인트통","tool-gradient":"그라데이션","tool-shape":"도형","tool-text":"텍스트","tool-hand":"손 도구","tool-zoom":"줌","undo":"실행 취소","redo":"다시 실행","brush-pen":"펜","brush-blend":"수채 블렌드","brush-sketchy":"스케치","brush-pixel":"픽셀","brush-chemy":"Chemy","brush-smudge":"번지기","brush-size":"크기","brush-blending":"혼합도","brush-toggle-pressure":"필압 감지 전환","brush-pen-circle":"원형","brush-pen-chalk":"분필","brush-pen-calligraphy":"서예","brush-pen-square":"사각형","brush-sketchy-scale":"스케치 도달 거리","brush-pixel-dither":"디더링","brush-chemy-fill":"채우기","brush-chemy-stroke":"획","brush-chemy-mirror-x":"수평 대칭","brush-chemy-mirror-y":"수직 대칭","brush-chemy-gradient":"그라데이션","brush-eraser-transparent-bg":"투명 배경","stabilizer":"안정화","stabilizer-title":"획 안정화","eyedropper":"스포이드","secondary-color":"보조 색상","manual-color-input":"직접 색상 입력","mci-hex":"16진법 값","mci-copy":"복사","modal-ok":"확인","modal-cancel":"취소","modal-close":"닫기","layers-active-layer":"활성 레이어","layers-layer":"레이어","layers-copy":"복사본","layers-blending":"혼합 모드","layers-new":"새 레이어","layers-remove":"레이어 제거","layers-duplicate":"레이어 복제","layers-merge":"아래 레이어와 병합","layers-merge-all":"모두 병합","layers-rename":"이름 변경","layers-active-layer-visible":"활성 레이어가 보입니다","layers-active-layer-hidden":"활성된 레이어가 숨겨져 있습니다","layers-visibility-toggle":"레이어 보이기/숨기기","layers-blend-normal":"보통","layers-blend-darken":"어둡게","layers-blend-multiply":"곱하기","layers-blend-color-burn":"색상 번","layers-blend-lighten":"밝게","layers-blend-screen":"스크린","layers-blend-color-dodge":"색상 닷지","layers-blend-overlay":"오버레이","layers-blend-soft-light":"소프트 라이트","layers-blend-hard-light":"하드 라이트","layers-blend-difference":"차이","layers-blend-exclusion":"제외","layers-blend-hue":"색조","layers-blend-saturation":"채도","layers-blend-color":"색상","layers-blend-luminosity":"광도","layers-rename-title":"레이어 이름 변경","layers-rename-name":"이름","layers-rename-clear":"이름 지우기","layers-rename-sketch":"스케치","layers-rename-colors":"색상","layers-rename-shading":"음영","layers-rename-lines":"선","layers-rename-effects":"효과","layers-rename-foreground":"전경","layers-merge-modal-title":"레이어 병합/혼합","layers-merge-description":"선택한 레이어를 아래 레이어와 병합합니다. 혼합 모드를 선택하세요:","file-no-autosave":"자동저장/클라우드 저장소 없음","file-new":"새로 만들기","file-import":"가져오기","file-save":"저장","file-format":"파일 형식","file-copy":"복사","file-copy-title":"클립보드에 복사","file-share":"공유","file-storage":"브라우저 저장소","file-storage-thumb-title":"페이지를 다시 열 때 복원","file-storage-about":"브라우저 저장소에 대하여","file-storage-cant-access":"접근할 수 없음","file-storage-empty":"비어 있음","file-storage-store":"저장","file-storage-clear":"지우기","file-storage-storing":"저장 중","file-storage-overwrite":"덮어쓰기","file-storage-min-ago":"{x}분 전","file-storage-hours-ago":"{x}시간 전","file-storage-days-ago":"{x}일 전","file-storage-month-ago":"1개월 이상 전","file-storage-restored":"브라우저 저장소에서 복원되었습니다","file-storage-stored":"브라우저 저장소에 저장되었습니다","file-storage-failed":"브라우저 저장소에 저장할 수 없습니다","file-storage-failed-1":"저장에 실패하였습니다. 추정 원인:","file-storage-failed-2":"디스크 공간 부족","file-storage-failed-3":"사생활 보호 창에서 저장소 사용 불가","file-storage-failed-4":"브라우저가 저장소를 지원하지 않습니다","file-storage-failed-clear":"삭제할 수 없습니다.","file-upload":"업로드","cleared-layer":"레이어 비움","filled":"채워짐","new-title":"새 이미지","new-current":"현재","new-fit":"맞춤","new-oversize":"큰 사이즈","new-square":"정사각형","new-landscape":"가로","new-portrait":"세로","new-screen":"화면","new-video":"영상","new-din-paper":"DIN 종이","new-px":"px","new-ratio":"비율","upload-title":"Imgur에 업로드","upload-link-notice":"주소를 가지고 있는 모든 사람들은 업로드된 이미지를 볼 수 있습니다.","upload-name":"제목","upload-title-untitled":"무제","upload-caption":"설명","upload-submit":"업로드","upload-uploading":"업로드 중...","upload-success":"업로드 성공","upload-failed":"업로드 실패","upload-delete":"Imgur에서 이미지를 삭제하려면 이곳에 방문하세요:","cropcopy-title-copy":"클립보드에 복사","cropcopy-title-crop":"자르기","cropcopy-click-hold":"복사하려면 마우스 오른쪽 버튼을 클릭하거나 길게 누르세요.","cropcopy-btn-copy":"클립보드로","cropcopy-copied":"복사되었습니다.","cropcopy-btn-crop":"자르기 적용","crop-drag-to-crop":"드래그하여 잘라낼 영역을 조정하세요","filter-crop-extend":"자르기/확장하기","filter-flip":"뒤집기","filter-perspective":"원근법","filter-resize":"크기 조정","filter-rotate":"회전","filter-transform":"변형","filter-bright-contrast":"밝기/대비","filter-curves":"커브","filter-hue-sat":"색조/채도","filter-invert":"색상 반전","filter-tilt-shift":"틸트 시프트","filter-to-alpha":"알파로 변환","filter-triangle-blur":"삼각형 블러","filter-unsharp-mask":"언샤프 마스크","filter-crop-title":"자르기 / 확장하기","filter-crop-description":"이미지를 자르거나 확장합니다.","filter-crop-left":"왼쪽","filter-crop-right":"오른쪽","filter-crop-top":"위쪽","filter-crop-bottom":"아래쪽","filter-crop-rule-thirds":"삼등분 법칙","filter-crop-fill":"채우기","filter-flip-title":"뒤집기","filter-flip-description":"레이어 또는 전체 이미지를 뒤집습니다.","filter-flip-horizontal":"수평","filter-flip-vertical":"수직","filter-flip-image":"이미지 뒤집기","filter-flip-layer":"레이어 뒤집기","filter-perspective-title":"원근법","filter-perspective-description":"선택된 레이어를 변형합니다.","filter-resize-title":"크기 조정","filter-resize-description":"이미지의 크기를 조정합니다.","filter-rotate-title":"회전","filter-rotate-description":"이미지를 회전합니다.","filter-transform-empty":"레이어가 비어있습니다.","filter-transform-title":"변형","filter-transform-description":"선택된 레이어를 변형합니다. 추가적인 동작을 위해 Shift를 누르세요.","filter-transform-rotation":"회전","filter-transform-flip":"뒤집기","filter-transform-center":"중앙","filter-transform-constrain":"비율 유지","filter-transform-snap":"맞춤","filter-transform-snap-title":"회전 및 위치 자동 맞춤","filter-bright-contrast-title":"밝기 / 대비","filter-bright-contrast-description":"선택된 레이어의 밝기와 대비를 변경합니다.","filter-bright-contrast-brightness":"밝기","filter-bright-contrast-contrast":"대비","filter-curves-title":"곡선","filter-curves-description":"선택된 레이어에 곡선을 적용합니다.","filter-curves-all":"전체","filter-hue-sat-title":"색조 / 채도","filter-hue-sat-description":"선택된 레이어의 색조와 채도를 변경합니다.","filter-hue-sat-hue":"색조","filter-hue-sat-saturation":"채도","filter-applied":"적용됨","filter-tilt-shift-title":"틸트 시프트","filter-tilt-shift-description":"선택된 레이어에 틸트 시프트를 적용합니다.","filter-tilt-shift-blur":"블러 반경","filter-tilt-shift-gradient":"그라디언트 반경","filter-to-alpha-title":"알파로","filter-to-alpha-description":"선택된 레이어에 대해 다음에서 알파 채널을 생성합니다:","filter-to-alpha-inverted-lum":"반전된 밝기","filter-to-alpha-lum":"밝기","filter-to-alpha-replace":"RGB 교체","filter-triangle-blur-title":"삼각형 블러","filter-triangle-blur-description":"선택된 레이어에 삼각형 블러를 적용합니다.","filter-unsharp-mask-title":"언샤프 마스크","filter-unsharp-mask-description":"주변 픽셀의 평균으로부터 픽셀을 조절하여 선택된 레이어를 선명하게 합니다.","filter-unsharp-mask-strength":"강도","filter-grid":"격자","filter-grid-description":"선택된 레이어에 격자를 표시합니다.","filter-noise":"잡음","filter-noise-description":"선택된 레이어에 잡음을 추가합니다.","filter-noise-scale":"규모","filter-noise-alpha":"알파","filter-pattern":"패턴","filter-pattern-description":"선택된 레이어에 패턴을 생성합니다. 미리보기를 드래그하여 추가 조작이 가능합니다.","filter-distort":"왜곡","filter-distort-description":"선택된 레이어를 왜곡합니다.","filter-distort-phase":"위상","filter-distort-stepsize":"왜곡 단계 크기","filter-distort-sync-xy":"XY 동기화","filter-vanish-point":"소실점","filter-vanish-point-title":"소실점","filter-vanish-point-description":"선택된 레이어에 소실점을 추가합니다. 미리보기를 드래그하여 이동합니다.","filter-vanish-point-lines":"선 개수","import-opening":"파일을 여는 중...","import-title":"이미지 가져오기","import-too-large":"이미지가 너무 커서 축소합니다.","import-btn-as-layer":"레이어로","import-btn-as-image":"이미지로","import-as-layer-title":"새 레이어로 이미지 가져오기","import-as-layer-description":"가져온 이미지의 위치를 조정하세요.","import-as-layer-limit-reached":"레이어 개수 한도에 도달했습니다. 이미지는 기존 레이어에 배치됩니다.","import-as-layer-fit":"맞춤","import-flatten":"이미지 평탄화","import-unsupported-file":"지원되지 않는 파일 유형입니다. 지원되는 유형에 대해서는 도움말을 참조하세요.","import-broken-file":"이미지를 불러올 수 없습니다. 파일이 손상된 것 같습니다.","import-psd-unsupported":"지원되지 않는 기능입니다. PSD는 평탄화해야 합니다.","import-psd-limited-support":"PSD 지원이 제한적입니다. 평탄화를 할 경우 더 정확하게 보일 수 있습니다.","import-psd-too-large":"이미지가 최대 크기인 {x} x {x} 픽셀을 초과합니다. 가져올 수 없습니다.","import-psd-size":"이미지 크기","hand-reset":"초기화","hand-fit":"맞춤","bucket-tolerance":"허용 오차","bucket-sample":"샘플","bucket-sample-title":"색상을 샘플링할 레이어 선택","bucket-sample-all":"모두","bucket-sample-active":"활성됨","bucket-sample-above":"위","bucket-grow":"확장","bucket-grow-title":"채워진 영역 확장 (픽셀 단위)","bucket-contiguous":"주변 채우기","bucket-contiguous-title":"연결된 영역만 채우기","gradient-linear":"선형","gradient-linear-mirror":"선형-대칭","gradient-radial":"방사형","shape-stroke":"획","shape-fill":"채우기","shape-rect":"사각형","shape-ellipse":"타원형","shape-line":"선","shape-line-width":"선 두께","shape-outwards":"바깥쪽으로","shape-fixed":"고정 1:1","text-instruction":"텍스트를 배치하려면 캔버스를 클릭하세요","text-title":"텍스트 추가","text-text":"텍스트","text-font":"폰트","text-placeholder":"여기에 텍스트를 입력하세요","text-color":"색상","text-size":"크기","text-line-height":"줄 높이","text-letter-spacing":"자간","text-left":"왼쪽","text-center":"가운데","text-right":"오른쪽","text-italic":"이탤릭","text-bold":"굵게","save-reminder-title":"저장되지 않은 작업","save-reminder-text":"이미지가 {a}분 동안{b} 저장되지 않았습니다. 손실을 방지하기 위해 지금 저장하세요.","save-reminder-save-psd":"PSD로 저장","save-reminder-psd-layers":"PSD는 모든 레이어를 기억합니다.","backup-drawing":"그림을 백업할 수 있습니다.","submit":"제출","submit-title":"그림 제출","submit-prompt":"그림을 제출하시겠습니까?","submit-submitting":"제출 중","embed-init-loading":"앱 로딩 중","embed-init-waiting":"이미지를 기다리는 중","unsaved":"저장되지 않음","help":"도움말","tab-settings":"설정","settings-language":"언어","settings-language-reload":"페이지를 새로고침하면 변경 사항이 적용됩니다.","settings-theme":"테마","settings-save-reminder-label":"저장 알림","settings-save-reminder-disabled":"비활성화","settings-save-reminder-confirm-title":"저장 알림을 끄시겠습니까?","settings-save-reminder-confirm-a":"자동 저장이 제공되지 않으며, 브라우저 탭은 영구적으로 유지되지 않습니다. 주기적으로 저장하지 않으면 작업 내용이 유실될 수 있습니다.","settings-save-reminder-confirm-b":"위험을 감수하고 비활성화하시겠습니까?","settings-save-reminder-confirm-disable":"비활성화","theme-dark":"어두운 테마","theme-light":"밝은 테마","terms-of-service":"서비스 이용 약관","licenses":"라이선스","source-code":"소스 코드","auto":"자동","zoom-in":"확대","zoom-out":"축소","radius":"반경","constrain-proportions":"비율 유지","width":"너비","height":"높이","opacity":"투명도","red":"빨강","green":"초록","blue":"파랑","eraser":"지우개","center":"중앙","layers":"레이어","background":"배경","scaling-algorithm":"스케일링 알고리즘","algorithm-smooth":"부드러운","algorithm-pixelated":"픽셀화된","preview":"미리보기","angle-snap":"스냅","angle-snap-title":"45\xb0 각도 스냅","lock-alpha":"알파 잠금","lock-alpha-title":"레이어의 알파 채널 잠금","reverse":"방향 뒤집기","compare-before":"적용 전","compare-after":"적용 후","loading":"로딩 중","more":"더 보기","x-minutes":"{x}분"}');

},{}]},["81e4s"], null, "parcelRequire94c2")

//# sourceMappingURL=ko.f5088a9d.js.map
