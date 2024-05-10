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
})({"ceD9W":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ee4f038b07bd633b";
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

},{}],"jTga9":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"Switch left/right UI","toggle-show-tools":"Show/Hide Tools","scroll":"Scroll","donate":"Donate","home":"Home","modal-new-tab":"Open in new tab","tab-edit":"Edit","tab-file":"File","tool-brush":"Brush","tool-paint-bucket":"Paint Bucket","tool-gradient":"Gradient","tool-shape":"Shape","tool-text":"Text","tool-hand":"Hand Tool","tool-zoom":"Zoom","undo":"Undo","redo":"Redo","brush-pen":"Pen","brush-blend":"Blend","brush-sketchy":"Sketchy","brush-pixel":"Pixel","brush-chemy":"Chemy","brush-smudge":"Smudge","brush-size":"Size","brush-blending":"Blending","brush-toggle-pressure":"Toggle Pressure Sensitivity","brush-pen-circle":"Circle","brush-pen-chalk":"Chalk","brush-pen-calligraphy":"Calligraphy","brush-pen-square":"Square","brush-sketchy-scale":"Scale","brush-pixel-dither":"Dither","brush-chemy-fill":"Fill","brush-chemy-stroke":"Stroke","brush-chemy-mirror-x":"Horizontal Symmetry","brush-chemy-mirror-y":"Vertical Symmetry","brush-chemy-gradient":"Gradient","brush-eraser-transparent-bg":"Transparent Background","stabilizer":"Stabilizer","stabilizer-title":"Stroke Stabilizer","eyedropper":"Eyedropper","secondary-color":"Secondary Color","manual-color-input":"Manual Color Input","mci-hex":"Hex","mci-copy":"Copy","modal-ok":"Ok","modal-cancel":"Cancel","modal-close":"Close","layers-active-layer":"Active Layer","layers-layer":"Layer","layers-copy":"copy","layers-blending":"Blending","layers-new":"New Layer","layers-remove":"Remove Layer","layers-duplicate":"Duplicate Layer","layers-merge":"Merge with layer below","layers-merge-all":"Merge all","layers-rename":"Rename","layers-active-layer-visible":"Active layer is visible","layers-active-layer-hidden":"Active layer is hidden","layers-visibility-toggle":"Layer Visibility","layers-blend-normal":"normal","layers-blend-darken":"darken","layers-blend-multiply":"multiply","layers-blend-color-burn":"color burn","layers-blend-lighten":"lighten","layers-blend-screen":"screen","layers-blend-color-dodge":"color dodge","layers-blend-overlay":"overlay","layers-blend-soft-light":"soft light","layers-blend-hard-light":"hard light","layers-blend-difference":"difference","layers-blend-exclusion":"exclusion","layers-blend-hue":"hue","layers-blend-saturation":"saturation","layers-blend-color":"color","layers-blend-luminosity":"luminosity","layers-rename-title":"Rename Layer","layers-rename-name":"Name","layers-rename-clear":"Clear Name","layers-rename-sketch":"Sketch","layers-rename-colors":"Colors","layers-rename-shading":"Shading","layers-rename-lines":"Lines","layers-rename-effects":"Effects","layers-rename-foreground":"Foreground","layers-merge-modal-title":"Merge/Mix Layers","layers-merge-description":"Merges the selected layer with the one underneath. Select the mix mode:","file-no-autosave":"No autosave, no cloud storage","file-new":"New","file-import":"Import","file-save":"Save","file-format":"File Format","file-copy":"Copy","file-copy-title":"Copy To Clipboard","file-share":"Share","file-storage":"Browser Storage","file-storage-thumb-title":"Restores when reopening page","file-storage-about":"About Browser Storage","file-storage-cant-access":"Can\'t access","file-storage-empty":"Empty","file-storage-store":"Store","file-storage-clear":"Clear","file-storage-storing":"Storing","file-storage-overwrite":"Overwrite","file-storage-min-ago":"{x}min ago","file-storage-hours-ago":"{x}h ago","file-storage-days-ago":"{x}d ago","file-storage-month-ago":"> 1month ago","file-storage-restored":"Restored from Browser Storage","file-storage-stored":"Stored to Browser Storage","file-storage-failed":"Failed to store to Browser Storage","file-storage-failed-1":"Failed to store. Possible causes:","file-storage-failed-2":"Out of disk space","file-storage-failed-3":"Storage disabled in incognito tab","file-storage-failed-4":"Browser doesn\'t support storage","file-storage-failed-clear":"Failed to clear.","file-upload":"Upload","cleared-layer":"Cleared layer","filled":"Filled","new-title":"New Image","new-current":"Current","new-fit":"Fit","new-oversize":"Oversize","new-square":"Square","new-landscape":"Landscape","new-portrait":"Portrait","new-screen":"Screen","new-video":"Video","new-din-paper":"DIN Paper","new-px":"px","new-ratio":"Ratio","upload-title":"Upload to Imgur","upload-link-notice":"Anyone with the link to your uploaded image will be able to view it.","upload-name":"Title","upload-title-untitled":"Untitled","upload-caption":"Caption","upload-submit":"Upload","upload-uploading":"Uploading...","upload-success":"Upload Successful","upload-failed":"Upload failed.","upload-delete":"To delete your image from Imgur visit:","cropcopy-title-copy":"Copy To Clipboard","cropcopy-title-crop":"Crop","cropcopy-click-hold":"Right-click or press hold to copy.","cropcopy-btn-copy":"To Clipboard","cropcopy-copied":"Copied.","cropcopy-btn-crop":"Apply Crop","crop-drag-to-crop":"Drag to crop","filter-crop-extend":"Crop/Extend","filter-flip":"Flip","filter-perspective":"Perspective","filter-resize":"Resize","filter-rotate":"Rotate","filter-transform":"Transform","filter-bright-contrast":"Bright/Contrast","filter-curves":"Curves","filter-hue-sat":"Hue/Saturation","filter-invert":"Invert","filter-tilt-shift":"Tilt Shift","filter-to-alpha":"To Alpha","filter-triangle-blur":"Triangle Blur","filter-unsharp-mask":"Unsharp Mask","filter-crop-title":"Crop / Extend","filter-crop-description":"Crop or extend the image.","filter-crop-left":"Left","filter-crop-right":"Right","filter-crop-top":"Top","filter-crop-bottom":"Bottom","filter-crop-rule-thirds":"Rule of Thirds","filter-crop-fill":"Fill","filter-flip-title":"Flip","filter-flip-description":"Flips layer or whole image.","filter-flip-horizontal":"Horizontal","filter-flip-vertical":"Vertical","filter-flip-image":"Flip Image","filter-flip-layer":"Flip Layer","filter-perspective-title":"Perspective","filter-perspective-description":"Transforms the selected layer.","filter-resize-title":"Resize","filter-resize-description":"Resizes the image.","filter-rotate-title":"Rotate","filter-rotate-description":"Rotates the image.","filter-transform-empty":"Layer is empty.","filter-transform-title":"Transform","filter-transform-description":"Transforms selected layer. Hold Shift for additional behavior.","filter-transform-rotation":"Rotation","filter-transform-flip":"Flip","filter-transform-center":"Center","filter-transform-constrain":"Constrain","filter-transform-snap":"Snap","filter-transform-snap-title":"Snap Rotation And Position","filter-bright-contrast-title":"Brightness / Contrast","filter-bright-contrast-description":"Change brightness and contrast for the selected layer.","filter-bright-contrast-brightness":"Brightness","filter-bright-contrast-contrast":"Contrast","filter-curves-title":"Curves","filter-curves-description":"Apply curves on the selected layer.","filter-curves-all":"All","filter-hue-sat-title":"Hue / Saturation","filter-hue-sat-description":"Change hue and saturation for the selected layer.","filter-hue-sat-hue":"Hue","filter-hue-sat-saturation":"Saturation","filter-applied":"applied","filter-tilt-shift-title":"Tilt Shift","filter-tilt-shift-description":"Applies tilt shift on the selected layer.","filter-tilt-shift-blur":"Blur Radius","filter-tilt-shift-gradient":"Gradient Radius","filter-to-alpha-title":"To Alpha","filter-to-alpha-description":"Generates alpha channel for selected layer from:","filter-to-alpha-inverted-lum":"Inverted Luminance","filter-to-alpha-lum":"Luminance","filter-to-alpha-replace":"Replace RGB","filter-triangle-blur-title":"Triangle Blur","filter-triangle-blur-description":"Applies triangle blur on the selected layer.","filter-unsharp-mask-title":"Unsharp Mask","filter-unsharp-mask-description":"Sharpens the selected layer by scaling pixels away from the average of their neighbors.","filter-unsharp-mask-strength":"Strength","filter-grid":"Grid","filter-grid-description":"Draws grid on selected layer.","filter-noise":"Noise","filter-noise-description":"Adds noise to selected layer.","filter-noise-scale":"Scale","filter-noise-alpha":"Alpha","filter-pattern":"Pattern","filter-pattern-description":"Generates pattern on selected layer. Drag the preview for further controls.","filter-distort":"Distort","filter-distort-description":"Distorts the selected layer.","filter-distort-phase":"Phase","filter-distort-stepsize":"Step Size","filter-distort-sync-xy":"Sync XY","filter-vanish-point":"Vanish Point","filter-vanish-point-title":"Vanishing Point","filter-vanish-point-description":"Adds vanishing point to selected layer. Drag preview to move.","filter-vanish-point-lines":"Lines","import-opening":"Opening file...","import-title":"Import Image","import-too-large":"Image too large, will be downscaled.","import-btn-as-layer":"As Layer","import-btn-as-image":"As Image","import-as-layer-title":"Import Image as New Layer","import-as-layer-description":"Adjust the position of the imported image.","import-as-layer-limit-reached":"Layer limit reached. Image will be placed on existing layer.","import-as-layer-fit":"Fit","import-flatten":"Flatten image","import-unsupported-file":"Unsupported file type. See Help for supported types.","import-broken-file":"Couldn\'t load image. File might be corrupted.","import-psd-unsupported":"Unsupported features. PSD had to be flattened.","import-psd-limited-support":"PSD support is limited. Flattened will more likely look correct.","import-psd-too-large":"Image exceeds maximum dimensions of {x} x {x} pixels. Unable to import.","import-psd-size":"Image size","hand-reset":"Reset","hand-fit":"Fit","bucket-tolerance":"Tolerance","bucket-sample":"Sample","bucket-sample-title":"Which layers to sample color from","bucket-sample-all":"All","bucket-sample-active":"Active","bucket-sample-above":"Above","bucket-grow":"Grow","bucket-grow-title":"Grow filled area (in pixels)","bucket-contiguous":"Contiguous","bucket-contiguous-title":"Only fill connected areas","gradient-linear":"Linear","gradient-linear-mirror":"Linear-Mirror","gradient-radial":"Radial","shape-stroke":"Stroke","shape-fill":"Fill","shape-rect":"Rectangle","shape-ellipse":"Ellipse","shape-line":"Line","shape-line-width":"Line Width","shape-outwards":"Outwards","shape-fixed":"Fixed 1:1","text-instruction":"Click canvas to place text","text-title":"Add Text","text-text":"Text","text-font":"Font","text-placeholder":"Your text","text-color":"Color","text-size":"Size","text-line-height":"Line Height","text-letter-spacing":"Letter Spacing","text-left":"Left","text-center":"Center","text-right":"Right","text-italic":"Italic","text-bold":"Bold","save-reminder-title":"Unsaved Work","save-reminder-text":"Image was not saved in {a} minutes{b}. Save now to prevent eventual loss.","save-reminder-save-psd":"Save As PSD","save-reminder-psd-layers":"PSD will remember all layers.","backup-drawing":"You can backup your drawing.","submit":"Submit","submit-title":"Submit Drawing","submit-prompt":"Submit drawing?","submit-submitting":"Submitting","embed-init-loading":"Loading app","embed-init-waiting":"Waiting for image","unsaved":"Unsaved","help":"Help","tab-settings":"Settings","settings-language":"Language","settings-language-reload":"Will update after reloading.","settings-theme":"Theme","settings-save-reminder-label":"Save Reminder","settings-save-reminder-disabled":"disabled","settings-save-reminder-confirm-title":"Turn off Save Reminder?","settings-save-reminder-confirm-a":"There is no autosave and browser tabs don\'t last forever. If you don\'t periodically save you will likely lose work.","settings-save-reminder-confirm-b":"Disable at your own risk?","settings-save-reminder-confirm-disable":"Disable","theme-dark":"Dark","theme-light":"Light","terms-of-service":"Terms of Service","licenses":"Licenses","source-code":"Source Code","auto":"auto","zoom-in":"Zoom In","zoom-out":"Zoom Out","radius":"Radius","constrain-proportions":"Constrain Proportions","width":"Width","height":"Height","opacity":"Opacity","red":"Red","green":"Green","blue":"Blue","eraser":"Eraser","center":"Center","layers":"Layers","background":"Background","scaling-algorithm":"Scaling Algorithm","algorithm-smooth":"Smooth","algorithm-pixelated":"Pixelated","preview":"Preview","angle-snap":"Snap","angle-snap-title":"45\xb0 Angle Snapping","lock-alpha":"Lock Alpha","lock-alpha-title":"Locks layer\'s alpha channel","reverse":"Reverse","compare-before":"Before","compare-after":"After","loading":"Loading","more":"More","x-minutes":"{x}min"}');

},{}]},["ceD9W"], null, "parcelRequire94c2")

//# sourceMappingURL=en-US.07bd633b.js.map
