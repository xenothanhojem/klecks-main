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
})({"9Q2Cs":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d0284af88c8bd043";
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

},{}],"itgWX":[function(require,module,exports) {
module.exports = JSON.parse('{"switch-ui-left-right":"Меню влево/вправо","toggle-show-tools":"Показать/скрыть инструменты","scroll":"Прокрутка","donate":"Пожертвовать","home":"Главная страница","modal-new-tab":"Открыть в новой вкладке","tab-edit":"Изменить","tab-file":"Файл","tool-brush":"Кисть","tool-paint-bucket":"Заливка","tool-gradient":"Градиент","tool-shape":"Форма","tool-text":"Текст","tool-hand":"Инструмент \xabРука\xbb","tool-zoom":"Приблизить/отдалить","undo":"Отмена","redo":"Повторить действие","brush-pen":"Ручка","brush-blend":"Переход","brush-sketchy":"Эскиз","brush-pixel":"Пиксели","brush-chemy":"Графика особой формы","brush-smudge":"Палец","brush-size":"Размер","brush-blending":"Наложение","brush-toggle-pressure":"Переключение чувствительности давления","brush-pen-circle":"Круг","brush-pen-chalk":"Мел","brush-pen-calligraphy":"Каллиграфия","brush-pen-square":"Квадрат","brush-sketchy-scale":"Масштабирование","brush-pixel-dither":"Дизеринг","brush-chemy-fill":"Заливка","brush-chemy-stroke":"Обводка","brush-chemy-mirror-x":"Горизонтальная симметрия","brush-chemy-mirror-y":"Вертикальная симметрия","brush-chemy-gradient":"Градиент","brush-eraser-transparent-bg":"Прозрачный фон","stabilizer":"Стабилизатор","stabilizer-title":"Стабилизатор обводки","eyedropper":"Пипетка","secondary-color":"Вторичный цвет","manual-color-input":"Ввод цвета вручную","mci-hex":"Шестнадцатеричный","mci-copy":"Скопировать","modal-ok":"OK","modal-cancel":"Отмена","modal-close":"Закрыть","layers-active-layer":"Активный слой","layers-layer":"Слой","layers-copy":"копия","layers-blending":"Наложение","layers-new":"Новый слой","layers-remove":"Удалить слой","layers-duplicate":"Копировать слой","layers-merge":"Объединить со слоём ниже","layers-merge-all":"Объединить все","layers-rename":"Переименовать","layers-active-layer-visible":"Активный слой видимый","layers-active-layer-hidden":"Активный слой скрыт","layers-visibility-toggle":"Видимость слоя","layers-blend-normal":"обычный","layers-blend-darken":"затемнение","layers-blend-multiply":"умножение","layers-blend-color-burn":"затемнение основы","layers-blend-lighten":"осветление","layers-blend-screen":"экранирование","layers-blend-color-dodge":"осветление основы","layers-blend-overlay":"перекрытие","layers-blend-soft-light":"мягкий свет","layers-blend-hard-light":"жёсткий свет","layers-blend-difference":"разница","layers-blend-exclusion":"исключение","layers-blend-hue":"цветовой тон","layers-blend-saturation":"насыщенность","layers-blend-color":"цветность","layers-blend-luminosity":"светимость","layers-rename-title":"Переименовать слой","layers-rename-name":"Имя","layers-rename-clear":"Очистить имя","layers-rename-sketch":"Эскиз","layers-rename-colors":"Цвета","layers-rename-shading":"Затенение","layers-rename-lines":"Линии","layers-rename-effects":"Эффекты","layers-rename-foreground":"Передний план","layers-merge-modal-title":"Объединение/смешивание слоёв","layers-merge-description":"Объединяет выбранный слой с тем, который находится под ним. Выберите режим смешивания:","file-no-autosave":"Нет автосохранения, нет облачного хранилища","file-new":"Новый","file-import":"Импорт","file-save":"Сохранить","file-format":"Формат файла","file-copy":"Скопировать","file-copy-title":"Скопировать в буфер обмена","file-share":"Поделиться","file-storage":"Хранилище браузера","file-storage-thumb-title":"Восстанавливается при повторном открытии страницы","file-storage-about":"О хранилище браузера","file-storage-cant-access":"Не удаётся получить доступ","file-storage-empty":"Пусто","file-storage-store":"Сохранить","file-storage-clear":"Очистить","file-storage-storing":"Сохранение","file-storage-overwrite":"Перезаписать","file-storage-min-ago":"{x} мин. назад","file-storage-hours-ago":"{x} ч. назад","file-storage-days-ago":"{x} дн. назад","file-storage-month-ago":"> 1 месяц назад","file-storage-restored":"Восстановлено из хранилища браузера","file-storage-stored":"Сохранено в хранилище браузера","file-storage-failed":"Не удалось сохранить в хранилище браузера","file-storage-failed-1":"Не удалось сохранить. Возможные причины:","file-storage-failed-2":"Не хватает дискового пространства","file-storage-failed-3":"Хранилище отключено во вкладке инкогнито","file-storage-failed-4":"Браузер не поддерживает хранилище","file-storage-failed-clear":"Не удалось очистить.","file-upload":"Загрузить","cleared-layer":"Очищенный слой","filled":"Заполненный","new-title":"Новое изображение","new-current":"Текущее","new-fit":"Подгонка","new-oversize":"Огромная","new-square":"Квадрат","new-landscape":"Альбомная","new-portrait":"Книжная","new-screen":"Экран","new-video":"Видео","new-din-paper":"Формат бумаги","new-px":"пикс.","new-ratio":"Соотношение","upload-title":"Загрузить на Imgur","upload-link-notice":"Любой, у кого есть ссылка на загруженное вами изображение, сможет его просмотреть.","upload-name":"Название","upload-title-untitled":"Безымянный","upload-caption":"Подпись","upload-submit":"Загрузить","upload-uploading":"Загрузка...","upload-success":"Загрузка удалась","upload-failed":"Загрузка не удалась.","upload-delete":"Чтобы удалить своё изображение с Imgur, посетите сайт:","cropcopy-title-copy":"Скопировать в буфер обмена","cropcopy-title-crop":"Рамка","cropcopy-click-hold":"Нажмите правую кнопку мыши или нажмите и удерживайте, чтобы скопировать.","cropcopy-btn-copy":"В буфер обмена","cropcopy-copied":"Скопировано.","cropcopy-btn-crop":"Применение обрезки","crop-drag-to-crop":"Перетащите для кадрирования","filter-crop-extend":"Кадрир./растягив.","filter-flip":"Перевернуть","filter-perspective":"Перспектива","filter-resize":"Изм. размера","filter-rotate":"Поворот","filter-transform":"Трансформ.","filter-bright-contrast":"Ярк./Контраст.","filter-curves":"Кривые","filter-hue-sat":"Цв. тон/Насыщ.","filter-invert":"Инверсия","filter-tilt-shift":"Глуб. резкости","filter-to-alpha":"Прозрачность","filter-triangle-blur":"Треуг. размытие","filter-unsharp-mask":"Нерезкая маска","filter-crop-title":"Кадрирование / растягивание","filter-crop-description":"Обрезка или растягивание изображения.","filter-crop-left":"Влево","filter-crop-right":"Вправо","filter-crop-top":"Вверх","filter-crop-bottom":"Вниз","filter-crop-rule-thirds":"Правило третей","filter-crop-fill":"Заполнение","filter-flip-title":"Перевернуть","filter-flip-description":"Переворачивание слоя или всего изображения.","filter-flip-horizontal":"По горизонтали","filter-flip-vertical":"По вертикали","filter-flip-image":"Перевернуть изображение","filter-flip-layer":"Перевернуть слой","filter-perspective-title":"Перспектива","filter-perspective-description":"Трансформирование выбранного слоя.","filter-resize-title":"Изменение размера","filter-resize-description":"Изменение размера изображения.","filter-rotate-title":"Поворот","filter-rotate-description":"Поворачивание изображения.","filter-transform-empty":"Слой пустой.","filter-transform-title":"Трансформация","filter-transform-description":"Трансформация выбранного слоя. Удерживайте Shift для дополнительного поведения.","filter-transform-rotation":"Поворот","filter-transform-flip":"Перевернуть","filter-transform-center":"Центрировать","filter-transform-constrain":"Сохранить","filter-transform-snap":"Привязать","filter-transform-snap-title":"Привязать вращение и положение","filter-bright-contrast-title":"Яркость / Контрастность","filter-bright-contrast-description":"Изменение яркости и контрастности для выбранного слоя.","filter-bright-contrast-brightness":"Яркость","filter-bright-contrast-contrast":"Контраст","filter-curves-title":"Кривые","filter-curves-description":"Применение кривые к выбранному слою.","filter-curves-all":"Все","filter-hue-sat-title":"Цветовой тон / Насыщенность","filter-hue-sat-description":"Изменение оттенка и насыщенность для выбранного слоя.","filter-hue-sat-hue":"Цветовой тон","filter-hue-sat-saturation":"Насыщенность","filter-applied":"- применено","filter-tilt-shift-title":"Глубина резкости","filter-tilt-shift-description":"Применение глубины резкости к выбранному слою.","filter-tilt-shift-blur":"Радиус размытия","filter-tilt-shift-gradient":"Радиус градиента","filter-to-alpha-title":"Прозрачность","filter-to-alpha-description":"Создание альфа-канала для выбранного слоя:","filter-to-alpha-inverted-lum":"Инвертированная яркость","filter-to-alpha-lum":"Яркость","filter-to-alpha-replace":"Замена RGB","filter-triangle-blur-title":"Треугольное размытие","filter-triangle-blur-description":"Применение треугольного размытия к выбранному слою.","filter-unsharp-mask-title":"Нерезкая маска","filter-unsharp-mask-description":"Повышение резкости выбранного слоя, масштабируя пиксели от среднего значения их соседей.","filter-unsharp-mask-strength":"Интенсивность","filter-grid":"Сетка","filter-grid-description":"Отображение сетки на выбранном слое.","filter-noise":"Шум","filter-noise-description":"Добавление шума к выбранному слою.","filter-noise-scale":"Масштаб","filter-noise-alpha":"Прозрачность","filter-pattern":"Шаблон","filter-pattern-description":"Создание шаблона на выбранном слое. Перетащите предпросмотр для дополнительных элементов управления.","filter-distort":"Искажение","filter-distort-description":"Искажение выбранного слоя.","filter-distort-phase":"Фаза","filter-distort-stepsize":"Размер шага","filter-distort-sync-xy":"Синхронизация XY","filter-vanish-point":"Испр. перспективы","filter-vanish-point-title":"Исправление перспективы","filter-vanish-point-description":"Добавление исправления перспективы к выбранному слою. Перетащите предпросмотр, чтобы переместить.","filter-vanish-point-lines":"Линии","import-opening":"Открытие файла...","import-title":"Импорт изображения","import-too-large":"Изображение слишком большое, оно будет уменьшено.","import-btn-as-layer":"Как слой","import-btn-as-image":"Как изображение","import-as-layer-title":"Импорт изображения как нового слоя","import-as-layer-description":"Регулировка положения импортированного изображения.","import-as-layer-limit-reached":"Достигнуто ограничение слоёв. Изображение будет помещено на существующий слой.","import-as-layer-fit":"Подгонка","import-flatten":"Выполнить сведение","import-unsupported-file":"Неподдерживаемый тип файла. Поддерживаемые типы см. во вкладке \xabПомощь\xbb.","import-broken-file":"Не удалось загрузить изображение. Возможно, файл повреждён.","import-psd-unsupported":"Неподдерживаемые функции. PSD необходимо было сведить.","import-psd-limited-support":"Поддержка PSD ограничена. Сведённый вариант, скорее всего, будет выглядеть правильно.","import-psd-too-large":"Изображение превышает максимальные размеры {x} x {x} пикселей. Невозможно импортировать.","import-psd-size":"Размер изображения","hand-reset":"Сброс","hand-fit":"Подгонка","bucket-tolerance":"Допуск","bucket-sample":"Образец","bucket-sample-title":"Из каких слоёв брать образцы цвета","bucket-sample-all":"Всех","bucket-sample-active":"Активный","bucket-sample-above":"Выше","bucket-grow":"Расш. заполн.","bucket-grow-title":"Расширить заполненную область (в пикселях)","bucket-contiguous":"Смеж. пикс","bucket-contiguous-title":"Заполнить только соединённые области","gradient-linear":"Линейный","gradient-linear-mirror":"Линейно-зеркальный","gradient-radial":"Лучевой","shape-stroke":"Обводка","shape-fill":"Заполнение","shape-rect":"Прямоугольник","shape-ellipse":"Эллипс","shape-line":"Линия","shape-line-width":"Ширина линии","shape-outwards":"Внешне","shape-fixed":"Фиксированная 1:1","text-instruction":"Нажмите на холст, чтобы разместить текст","text-title":"Добавить текст","text-text":"Текст","text-font":"Шрифт","text-placeholder":"Ваш текст","text-color":"Цвет","text-size":"Размер","text-line-height":"Высота линии","text-letter-spacing":"Расстояние между буквами","text-left":"Слева","text-center":"По центру","text-right":"Справа","text-italic":"Курсив","text-bold":"Жирный","save-reminder-title":"Несохранённая работа","save-reminder-text":"Изображение не было сохранено в течение {a} мин{b}. Сохраните сейчас, чтобы предотвратить возможную потерю.","save-reminder-save-psd":"Сохранить как PSD","save-reminder-psd-layers":"PSD запомнит все слои.","backup-drawing":"Вы можете создать резервную копию своего рисунка.","submit":"Отправить","submit-title":"Отправка рисунка","submit-prompt":"Отправить рисунок?","submit-submitting":"Отправка","embed-init-loading":"Загрузка приложения","embed-init-waiting":"Ожидание изображения","unsaved":"Не сохранено","help":"Помощь","tab-settings":"Настройки","settings-language":"Язык","settings-language-reload":"Обновится после перезагрузки.","settings-theme":"Тема","settings-save-reminder-label":"Напоминание сохр.","settings-save-reminder-disabled":"отключено","settings-save-reminder-confirm-title":"Отключить напоминание о сохранении?","settings-save-reminder-confirm-a":"Здесь нет автосохранения, а вкладки браузера не хранятся вечно. Если вы не будете периодически сохранять, то, скорее всего, потеряете рисунок.","settings-save-reminder-confirm-b":"Отключить на свой страх и риск?","settings-save-reminder-confirm-disable":"Отключить","theme-dark":"Тёмная","theme-light":"Светлая","terms-of-service":"Условия обслуживания","licenses":"Лицензии","source-code":"Исходный код","auto":"авто","zoom-in":"Приближение","zoom-out":"Отдаление","radius":"Радиус","constrain-proportions":"Сохранение пропорций","width":"Ширина","height":"Высота","opacity":"Прозрач.","red":"Красный","green":"Зелёный","blue":"Синий","eraser":"Ластик","center":"По центру","layers":"Слои","background":"Фон","scaling-algorithm":"Алгоритм масштабирования","algorithm-smooth":"Гладкий","algorithm-pixelated":"Пиксельный","preview":"Предпросмотр","angle-snap":"Привязка","angle-snap-title":"Угловая привязка 45\xb0","lock-alpha":"Альфа-блокировка","lock-alpha-title":"Блокирует альфа-канал слоя","reverse":"Реверсивный","compare-before":"До","compare-after":"После","loading":"Загрузка","more":"Ещё","x-minutes":"{x} мин."}');

},{}]},["9Q2Cs"], null, "parcelRequire94c2")

//# sourceMappingURL=ru.8c8bd043.js.map
