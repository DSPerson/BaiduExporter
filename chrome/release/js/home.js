!function(){return function e(t,n,a){function r(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(i)return i(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return r(n||e)},c,c.exports,e,t,n,a)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}}()({1:[function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(e("./lib/core")),i=s(e("./lib/ui")),o=s(e("./lib/downloader"));function s(e){return e&&e.__esModule?e:{default:e}}(new(function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e={search:{dir:"",channel:"chunlei",clienttype:0,web:1},url:"/api/list?",options:{credentials:"include",method:"GET"}},n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.default.init(),i.default.addMenu(document.querySelectorAll(".g-dropdown-button")[3],"afterend"),r.default.requestCookies([{url:"https://pan.baidu.com/",name:"BDUSS"},{url:"https://pcs.baidu.com/",name:"pcsett"}]),r.default.showToast("初始化成功!","success"),n.mode="RPC",n.rpcURL="http://localhost:6800/jsonrpc",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),a(t,[{key:"startListen",value:function(){var e=this;window.addEventListener("message",function(t){if(t.source===window&&t.data.type&&"selected"===t.data.type){e.reset();var n=t.data.data;if(0===n.length)return void r.default.showToast("请选择一下你要保存的文件哦","failure");n.forEach(function(t){t.isdir?e.addFolder(t.path):e.addFile(t)}),e.start(r.default.getConfigData("interval"),function(t){"RPC"===e.mode&&r.default.aria2RPCMode(e.rpcURL,t),"TXT"===e.mode&&(r.default.aria2TXTMode(t),document.querySelector("#textMenu").classList.add("open-o"))})}}),document.querySelector("#aria2List").addEventListener("click",function(t){var n=t.target.dataset.url;n&&(e.rpcURL=n,e.getSelected(),e.mode="RPC"),"aria2Text"===t.target.id&&(e.getSelected(),e.mode="TXT")})}},{key:"getSelected",value:function(){window.postMessage({type:"getSelected"},location.origin)}},{key:"getPrefixLength",value:function(){var e=r.default.getHashParameter("/all?path")||r.default.getHashParameter("path"),t=r.default.getConfigData("fold");if(-1===t||"/"===e)return 1;for(var n=e.split("/"),a=0,i=0;i<n.length-t;i++)a=a+n[i].length+1;return a}},{key:"getFiles",value:function(e){var t=this.getPrefixLength();for(var n in e)this.fileDownloadInfo.push({name:e[n].path.substr(t),link:location.protocol+"//pcs.baidu.com/rest/2.0/pcs/file?method=download&app_id=250528&path="+encodeURIComponent(e[n].path),md5:e[n].md5});return Promise.resolve()}}]),t}())).startListen()},{"./lib/core":3,"./lib/downloader":4,"./lib/ui":6}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners={}}return a(e,[{key:"on",value:function(e,t){(this._listeners[e]=this._listeners[e]||[]).push(t)}},{key:"trigger",value:function(e,t){(this._listeners[e]||[]).forEach(function(e){return e(t)})}},{key:"off",value:function(e){delete this._listeners[e]}}]),e}();n.default=r},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=e("./store"),s=(a=o)&&a.__esModule?a:{default:a};var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cookies={}}return i(e,[{key:"httpSend",value:function(e,t,n){var a=e.url,r=e.options;fetch(a,r).then(function(e){e.ok?e.json().then(function(e){t(e)}):n(e)}).catch(function(e){n(e)})}},{key:"getConfigData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return s.default.getConfigData(e)}},{key:"objectToQueryString",value:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},{key:"sendToBackground",value:function(e,t,n){chrome.runtime.sendMessage({method:e,data:t},n)}},{key:"showToast",value:function(e,t){window.postMessage({type:"showToast",data:{message:e,type:t}},location.origin)}},{key:"getHashParameter",value:function(e){var t=window.location.hash.substr(1);return this.parseSearchParams(t).get(e)}},{key:"formatCookies",value:function(){var e=[];for(var t in this.cookies)e.push(t+"="+this.cookies[t]);return e.join("; ")}},{key:"getHeader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RPC",t=[];t.push("User-Agent: "+this.getConfigData("userAgent")),t.push("Referer: "+this.getConfigData("referer")),Object.keys(this.cookies).length>0&&t.push("Cookie: "+this.formatCookies());var n=this.getConfigData("headers");return n&&n.split("\n").forEach(function(e){t.push(e)}),"RPC"===e?t:"aria2Cmd"===e?t.map(function(e){return"--header "+JSON.stringify(e)}).join(" "):"aria2c"===e?t.map(function(e){return" header="+e}).join("\n"):"idm"===e?t.map(function(e){var t=e.split(": ");return t[0].toLowerCase()+": "+t[1]}).join("\r\n"):void 0}},{key:"parseSearchParams",value:function(e){var t=new Map;return e.length>0&&e.split("&").forEach(function(e){var n=e.split("=").map(decodeURIComponent),a=r(n,2),i=a[0],o=a[1];t.set(i,o)}),t}},{key:"parseURLPolyfill",value:function(e){var t=/(\w+:)\/\/((.*?)(:(.*?))?@)?([\w.]*)(:(\d+))?((\/[^?#]*)(\?[^#]*)?(#.*)?)?/.exec(e);if(!t)throw new Error("Invalid URL: "+e);return{hash:t[12]||"",host:t[6]+(t[7]||""),hostname:t[6],href:e,origin:t[1]+"//"+t[6]+(t[7]||""),password:t[5]||"",pathname:t[10]||"/",port:t[8]||"",protocol:t[1],search:t[11]||"",searchParams:this.parseSearchParams(t[11]||""),username:t[3]||""}}},{key:"parseURL",value:function(e){var t=this.parseURLPolyfill(e),n=t.username?t.username+":"+decodeURI(t.password):null;n&&(n.includes("token:")||(n="Basic "+btoa(n)));var a=t.hash.substr(1),r={},i=this.parseSearchParams(a),o=!0,s=!1,l=void 0;try{for(var u,c=i[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var d=u.value;r[d[0]]=2===d.length?d[1]:"enabled"}}catch(e){s=!0,l=e}finally{try{!o&&c.return&&c.return()}finally{if(s)throw l}}return{authStr:n,path:t.origin+t.pathname,options:r}}},{key:"generateParameter",value:function(e,t,n){e&&e.startsWith("token")&&n.params.unshift(e);var a={url:t,options:{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:JSON.stringify(n)}};return e&&e.startsWith("Basic")&&(a.options.headers.Authorization=e),a}},{key:"getVersion",value:function(e,t){var n=this.parseURL(e),a=n.authStr,r=n.path;this.sendToBackground("rpcVersion",this.generateParameter(a,r,{jsonrpc:"2.0",method:"aria2.getVersion",id:1,params:[]}),function(e){t.innerText=e?"Aria2版本为: "+e:"错误,请查看是否开启Aria2"})}},{key:"copyText",value:function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.focus(),t.select();var n=document.execCommand("copy");t.remove(),n?this.showToast("拷贝成功~","success"):this.showToast("拷贝失败 QAQ","failure")}},{key:"requestCookies",value:function(e){var t=this;this.sendToBackground("getCookies",e,function(e){t.cookies=e})}},{key:"aria2RPCMode",value:function(e,t){var n=this,a=this.parseURL(e),r=a.authStr,i=a.path,o=a.options;t.forEach(function(e){var t={jsonrpc:"2.0",method:"aria2.addUri",id:(new Date).getTime(),params:[[e.link],{out:e.name,header:n.getHeader()}]},a=n.getConfigData("md5Check"),s=t.params[1],l=n.getConfigData("downloadPath");if(l&&(s.dir=l),a&&(s.checksum="md5="+e.md5),o)for(var u in o)s[u]=o[u];n.sendToBackground("rpcData",n.generateParameter(r,i,t),function(e){e?n.showToast("下载成功!赶紧去看看吧~","success"):n.showToast("下载失败!是不是没有开启Aria2?","failure")})})}},{key:"aria2TXTMode",value:function(e){var t=this,n=[],a=[],r=[],i=[],o="data:text/plain;charset=utf-8,";e.forEach(function(e){var o="aria2c -c -s10 -k1M -x16 --enable-rpc=false -o "+JSON.stringify(e.name)+" "+t.getHeader("aria2Cmd")+" "+JSON.stringify(e.link),s=[e.link,t.getHeader("aria2c")," out="+e.name].join("\n");t.getConfigData("md5Check")&&(o+=" --checksum=md5="+e.md5,s+=" checksum=md5="+e.md5),n.push(o),a.push(s);var l=["<",e.link,t.getHeader("idm"),">"].join("\r\n");r.push(l),i.push(e.link)}),document.querySelector("#aria2CmdTxt").value=""+n.join("\n"),document.querySelector("#aria2Txt").href=""+o+encodeURIComponent(a.join("\n")),document.querySelector("#idmTxt").href=""+o+encodeURIComponent(r.join("\r\n")+"\r\n"),document.querySelector("#downloadLinkTxt").href=""+o+encodeURIComponent(i.join("\n")),document.querySelector("#copyDownloadLinkTxt").dataset.link=i.join("\n")}}]),e}();n.default=new l},{"./store":5}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=e("./core"),o=(a=i)&&a.__esModule?a:{default:a};var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listParameter=t,this.fileDownloadInfo=[],this.currentTaskId=0,this.completedCount=0,this.folders=[],this.files={}}return r(e,[{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,t=arguments[1];this.interval=e,this.done=t,this.currentTaskId=(new Date).getTime(),this.getNextFile(this.currentTaskId)}},{key:"reset",value:function(){this.fileDownloadInfo=[],this.currentTaskId=0,this.folders=[],this.files={},this.completedCount=0}},{key:"addFolder",value:function(e){this.folders.push(e)}},{key:"addFile",value:function(e){this.files[e.fs_id]=e}},{key:"getNextFile",value:function(e){var t=this;if(e===this.currentTaskId)if(0!==this.folders.length){this.completedCount++,o.default.showToast("正在获取文件列表... "+this.completedCount+"/"+(this.completedCount+this.folders.length-1),"success");var n=this.folders.pop();this.listParameter.search.dir=n,fetch(""+window.location.origin+this.listParameter.url+o.default.objectToQueryString(this.listParameter.search),this.listParameter.options).then(function(n){n.ok?n.json().then(function(n){if(setTimeout(function(){return t.getNextFile(e)},t.interval),0!==n.errno)return o.default.showToast("未知错误","failure"),void console.log(n);n.list.forEach(function(e){e.isdir?t.folders.push(e.path):t.files[e.fs_id]=e})}):console.log(n)}).catch(function(n){o.default.showToast("网络请求失败","failure"),console.log(n),setTimeout(function(){return t.getNextFile(e)},t.interval)})}else 0!==this.files.length?(o.default.showToast("正在获取下载地址...","success"),this.getFiles(this.files).then(function(){t.done(t.fileDownloadInfo)})):(o.default.showToast("一个文件都没有哦...","caution"),this.reset())}},{key:"getFiles",value:function(e){throw new Error("subclass should implement this method!")}}]),e}();n.default=s},{"./core":3}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=e("./EventEmitter"),o=(a=i)&&a.__esModule?a:{default:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.defaultRPC=[{name:"ARIA2 RPC",url:"http://localhost:6800/jsonrpc"}],e.defaultUserAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",e.defaultReferer="https://pan.baidu.com/disk/home",e.defaultConfigData={rpcList:e.defaultRPC,configSync:!1,md5Check:!1,fold:0,interval:300,downloadPath:"",userAgent:e.defaultUserAgent,referer:e.defaultReferer,headers:""},e.configData={},e.on("initConfigData",e.init.bind(e)),e.on("setConfigData",e.set.bind(e)),e.on("clearConfigData",e.clear.bind(e)),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"init",value:function(){var e=this;chrome.storage.sync.get(null,function(e){var t=function(t){chrome.storage.local.set({key:e[t]},function(){console.log("chrome first local set: %s, %s",t,e[t])})};for(var n in e)t(n)}),chrome.storage.local.get(null,function(t){e.configData=Object.assign({},e.defaultConfigData,t),e.trigger("updateView",e.configData)})}},{key:"getConfigData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?this.configData[e]:this.configData}},{key:"set",value:function(e){this.configData=e,this.save(e),this.trigger("updateView",e)}},{key:"save",value:function(e){var t=function(t){chrome.storage.local.set(s({},t,e[t]),function(){console.log("chrome local set: %s, %s",t,e[t])}),!0===e.configSync&&chrome.storage.sync.set(s({},t,e[t]),function(){console.log("chrome sync set: %s, %s",t,e[t])})};for(var n in e)t(n)}},{key:"clear",value:function(){chrome.storage.sync.clear(),chrome.storage.local.clear(),this.configData=this.defaultConfigData,this.trigger("updateView",this.configData)}}]),t}();n.default=new l},{"./EventEmitter":2}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=o(e("./core")),i=o(e("./store"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.version="1.0.2",this.updateDate="2017/12/30",i.default.on("updateView",function(e){t.updateSetting(e),t.updateMenu(e)})}return a(e,[{key:"init",value:function(){this.addSettingUI(),this.addTextExport(),i.default.trigger("initConfigData")}},{key:"addMenu",value:function(e,t){e.insertAdjacentHTML(t,'\n      <div id="exportMenu" class="g-dropdown-button">\n        <a class="g-button">\n          <span class="g-button-right">\n            <em class="icon icon-download"></em>\n            <span class="text">导出下载</span>\n          </span>\n        </a>\n        <div id="aria2List" class="menu" style="z-index:50;">\n          <a class="g-button-menu" id="aria2Text" href="javascript:void(0);">文本导出</a>\n          <a class="g-button-menu" id="settingButton" href="javascript:void(0);">设置</a>\n        </div>\n      </div>');var n=document.querySelector("#exportMenu");n.addEventListener("mouseenter",function(){n.classList.add("button-open")}),n.addEventListener("mouseleave",function(){n.classList.remove("button-open")});var a=document.querySelector("#settingButton"),r=document.querySelector("#settingMenu");a.addEventListener("click",function(){r.classList.add("open-o")})}},{key:"resetMenu",value:function(){Array.from(document.querySelectorAll(".rpc-button")).forEach(function(e){e.remove()})}},{key:"updateMenu",value:function(e){this.resetMenu();var t=e.rpcList,n="";t.forEach(function(e){var t='<a class="g-button-menu rpc-button" href="javascript:void(0);" data-url='+e.url+">"+e.name+"</a>";n+=t}),document.querySelector("#aria2List").insertAdjacentHTML("afterbegin",n)}},{key:"addTextExport",value:function(){var e=this;document.body.insertAdjacentHTML("beforeend",'\n      <div id="textMenu" class="modal export-menu">\n        <div class="modal-inner">\n          <div class="modal-header">\n            <div class="modal-title">文本导出</div>\n            <div class="modal-close">×</div>\n          </div>\n          <div class="modal-body">\n            <div class="export-menu-row">\n              <a class="export-menu-button" href="javascript:void(0);" id="aria2Txt" download="aria2c.down">存为Aria2文件</a>\n              <a class="export-menu-button" href="javascript:void(0);" id="idmTxt" download="idm.ef2">存为IDM文件</a>\n              <a class="export-menu-button" href="javascript:void(0);" id="downloadLinkTxt" download="link.txt">保存下载链接</a>\n              <a class="export-menu-button" href="javascript:void(0);" id="copyDownloadLinkTxt">拷贝下载链接</a>\n            </div>\n            <div class="export-menu-row">\n              <textarea class="export-menu-textarea" type="textarea" wrap="off" spellcheck="false" id="aria2CmdTxt"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>');var t=document.querySelector("#textMenu"),n=t.querySelector(".modal-close"),a=t.querySelector("#copyDownloadLinkTxt");a.addEventListener("click",function(){r.default.copyText(a.dataset.link)}),n.addEventListener("click",function(){t.classList.remove("open-o"),e.resetTextExport()})}},{key:"resetTextExport",value:function(){var e=document.querySelector("#textMenu");e.querySelector("#aria2Txt").href="",e.querySelector("#idmTxt").href="",e.querySelector("#downloadLinkTxt").href="",e.querySelector("#aria2CmdTxt").value="",e.querySelector("#copyDownloadLinkTxt").dataset.link=""}},{key:"addSettingUI",value:function(){var e=this,t='\n      <div id="settingMenu" class="modal setting-menu">\n        <div class="modal-inner">\n          <div class="modal-header">\n            <div class="modal-title">导出设置</div>\n            <div class="modal-close">×</div>\n          </div>\n          <div class="modal-body">\n            <div class="setting-menu-message">\n              <label class="setting-menu-label orange-o" id="message"></label>\n            </div>\n            <div class="setting-menu-row rpc-s">\n              <div class="setting-menu-name">\n                <input class="setting-menu-input name-s" spellcheck="false">\n              </div>\n              <div class="setting-menu-value">\n                <input class="setting-menu-input url-s" spellcheck="false">\n                <a class="setting-menu-button" id="addRPC" href="javascript:void(0);">添加RPC地址</a>\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n              <div class="setting-menu-name">\n                <label class="setting-menu-label">配置同步</label>\n              </div>\n              <div class="setting-menu-value">\n                <input type="checkbox" class="setting-menu-checkbox configSync-s">\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n              <div class="setting-menu-name">\n                <label class="setting-menu-label">MD5校验</label>\n              </div>\n              <div class="setting-menu-value">\n                <input type="checkbox" class="setting-menu-checkbox md5Check-s">\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n               <div class="setting-menu-name">\n                 <label class="setting-menu-label">文件夹层数</label>\n               </div>\n               <div class="setting-menu-value">\n                 <input class="setting-menu-input small-o fold-s" type="number" spellcheck="false">\n                 <label class="setting-menu-label">(默认0表示不保留,-1表示保留完整路径)</label>\n               </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n              <div class="setting-menu-name">\n                <label class="setting-menu-label">递归下载间隔</label>\n              </div>\n              <div class="setting-menu-value">\n                <input class="setting-menu-input small-o interval-s" type="number" spellcheck="false">\n                <label class="setting-menu-label">(单位:毫秒)</label>\n                <a class="setting-menu-button version-s" id="testAria2" href="javascript:void(0);">测试连接，成功显示版本号</a>\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n              <div class="setting-menu-name">\n                <label class="setting-menu-label">下载路径</label>\n              </div>\n              <div class="setting-menu-value">\n                <input class="setting-menu-input downloadPath-s" placeholder="只能设置为绝对路径" spellcheck="false">\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n              <div class="setting-menu-name">\n                <label class="setting-menu-label">User-Agent</label>\n              </div>\n              <div class="setting-menu-value">\n                <input class="setting-menu-input userAgent-s" spellcheck="false">\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n              <div class="setting-menu-name">\n                <label class="setting-menu-label">Referer</label>\n              </div>\n              <div class="setting-menu-value">\n                <input class="setting-menu-input referer-s" spellcheck="false">\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n            <div class="setting-menu-row">\n              <div class="setting-menu-name">\n                <label class="setting-menu-label">Headers</label>\n              </div>\n              <div class="setting-menu-value">\n                <textarea class="setting-menu-input textarea-o headers-s" type="textarea" spellcheck="false"></textarea>\n              </div>\n            </div>\x3c!-- /.setting-menu-row --\x3e\n          </div>\x3c!-- /.setting-menu-body --\x3e\n          <div class="modal-footer">\n            <div class="setting-menu-copyright">\n              <div class="setting-menu-item">\n                <label class="setting-menu-label">&copy; Copyright</label>\n                <a class="setting-menu-link" href="https://github.com/acgotaku/BaiduExporter" target="_blank">雪月秋水</a>\n              </div>\n              <div class="setting-menu-item">\n                <label class="setting-menu-label">Version: '+this.version+'</label>\n                <label class="setting-menu-label">Update date: '+this.updateDate+'</label>\n              </div>\n            </div>\x3c!-- /.setting-menu-copyright --\x3e\n            <div class="setting-menu-operate">\n              <a class="setting-menu-button large-o blue-o" id="apply" href="javascript:void(0);">应用</a>\n              <a class="setting-menu-button large-o" id="reset" href="javascript:void(0);">重置</a>\n            </div>\n          </div>\n        </div>\n      </div>';document.body.insertAdjacentHTML("beforeend",t);var n=document.querySelector("#settingMenu");n.querySelector(".modal-close").addEventListener("click",function(){n.classList.remove("open-o"),e.resetSetting()}),document.querySelector("#addRPC").addEventListener("click",function(){var e=document.querySelectorAll(".rpc-s");Array.from(e).pop().insertAdjacentHTML("afterend",'\n        <div class="setting-menu-row rpc-s">\n          <div class="setting-menu-name">\n            <input class="setting-menu-input name-s" spellcheck="false">\n          </div>\n          <div class="setting-menu-value">\n            <input class="setting-menu-input url-s" spellcheck="false">\n          </div>\n        </div>\x3c!-- /.setting-menu-row --\x3e')});var a=document.querySelector("#apply"),o=document.querySelector("#message");a.addEventListener("click",function(){e.saveSetting(),o.innerText="设置已保存"}),document.querySelector("#reset").addEventListener("click",function(){i.default.trigger("clearConfigData"),o.innerText="设置已重置"});var s=document.querySelector("#testAria2");s.addEventListener("click",function(){r.default.getVersion(i.default.getConfigData("rpcList")[0].url,s)})}},{key:"resetSetting",value:function(){document.querySelector("#message").innerText="",document.querySelector("#testAria2").innerText="测试连接，成功显示版本号"}},{key:"updateSetting",value:function(e){var t=e.rpcList,n=e.configSync,a=e.md5Check,r=e.fold,i=e.interval,o=e.downloadPath,s=e.userAgent,l=e.referer,u=e.headers;Array.from(document.querySelectorAll(".rpc-s")).forEach(function(e,t){0!==t&&e.remove()}),t.forEach(function(e,t){var n=document.querySelectorAll(".rpc-s");if(0===t)n[t].querySelector(".name-s").value=e.name,n[t].querySelector(".url-s").value=e.url;else{var a='\n          <div class="setting-menu-row rpc-s">\n            <div class="setting-menu-name">\n              <input class="setting-menu-input name-s" value="'+e.name+'" spellcheck="false">\n            </div>\n            <div class="setting-menu-value">\n              <input class="setting-menu-input url-s" value="'+e.url+'" spellcheck="false">\n            </div>\n          </div>\x3c!-- /.setting-menu-row --\x3e';Array.from(n).pop().insertAdjacentHTML("afterend",a)}}),document.querySelector(".configSync-s").checked=n,document.querySelector(".md5Check-s").checked=a,document.querySelector(".fold-s").value=r,document.querySelector(".interval-s").value=i,document.querySelector(".downloadPath-s").value=o,document.querySelector(".userAgent-s").value=s,document.querySelector(".referer-s").value=l,document.querySelector(".headers-s").value=u}},{key:"saveSetting",value:function(){var e=document.querySelectorAll(".rpc-s"),t={rpcList:Array.from(e).map(function(e){var t=e.querySelector(".name-s").value,n=e.querySelector(".url-s").value;if(t&&n)return{name:t,url:n}}).filter(function(e){return e}),configSync:document.querySelector(".configSync-s").checked,md5Check:document.querySelector(".md5Check-s").checked,fold:Number.parseInt(document.querySelector(".fold-s").value),interval:document.querySelector(".interval-s").value,downloadPath:document.querySelector(".downloadPath-s").value,userAgent:document.querySelector(".userAgent-s").value,referer:document.querySelector(".referer-s").value,headers:document.querySelector(".headers-s").value};i.default.trigger("setConfigData",t)}}]),e}();n.default=new s},{"./core":3,"./store":5}]},{},[1]);