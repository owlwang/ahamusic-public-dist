(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{304:function(e,t,n){e.exports={}},313:function(e,t,n){"use strict";n(304)},319:function(e,t,n){"use strict";n.r(t);n(92),n(52);var r=n(301),o=n.n(r),l={sampleBits:16,sampleRate:8e3,numChannels:1,compiling:!1},c={noResult:"Couldn’t quite catch that.",permissionDenied:"Ooops, permission error.",incompatible:"Browser incompatibility.",unknown:"Unknown Error"},d={noResult:"Make sure your device can clearly hear the song and try again",permissionDenied:"Please make sure your browser gives us recording permission",incompatible:"Your browser does not support online recording, Please change to a modern browser, we recommend Chrome",unknown:""},m={data:function(){return{isFpActive:!0,recorder:null,timerEnabled:!1,timerCount:10,isResultShow:!1,result:null,errorMsgTitle:c.noResult,errorMsg:d.noResult}},watch:{timerEnabled:function(e){var t=this;e&&setTimeout((function(){t.timerCount--}),1e3)},timerCount:{handler:function(e){var t=this;e>0&&this.timerEnabled?setTimeout((function(){t.timerCount--}),1e3):(this.recorder&&(this.recorder.stop(),this.recognize()),this.reset())},immediate:!0}},methods:{startRecord:function(){var e=this;this.timerEnabled?(console.log("stop"),this.recorder.stop(),this.recognize(),this.reset()):(console.log("start"),o.a.getPermission().then((function(){console.log("permission grant"),e.recorder=new o.a(l),e.timerEnabled=!0,e.recorder.start().then((function(){}),(function(t){e.errorMsgTitle=t.name,e.errorMsg=t.message}))}),(function(t){console.log(t),"Permission denied"===t.message?(e.errorMsgTitle=c.permissionDenied,e.errorMsg=d.permissionDenied):"浏览器不支持 getUserMedia !"===t.message?(e.errorMsgTitle=c.incompatible,e.errorMsg=d.incompatible):(e.errorMsgTitle=c.unknown,e.errorMsg=t.message),e.isResultShow=!0})))},reset:function(){this.errorMsgTitle=c.noResult,this.errorMsg=d.noResult,this.timerEnabled=!1,this.timerCount=10,this.recorder&&(this.recorder.destroy(),this.recorder=null)},recognize:function(){var e=this,t="";t=this.isFpActive?"https://api.doreso.com/identify":"https://api.doreso.com/humming";var n=new FormData;n.append("file",this.recorder.getWAVBlob()),n.append("sample_size",this.recorder.fileSize),this.$axios.$post(t,n).then((function(t){e.result=t.data,e.isResultShow=!0,console.log(t)})).catch((function(e){console.log(e)}))},uploadFile:function(){this.$refs.upload.click()},openDetailPage:function(){var e="/".concat(this.result.acrid);window.open(e,"_blank")}}},h=(n(313),n(64)),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-50 h-screen"},[n("div",{staticClass:"w-3/4 flex flex-col mx-auto h-screen "},[n("div",{staticClass:"flex flex-row justify-between mt-6",attrs:{id:"header"}},[n("div",{staticClass:"h-28"},[n("Logo"),e._v(" "),n("span",{staticClass:"doreso-text"},[e._v("Song Finder for Browser")])],1),e._v(" "),n("div",{staticClass:"hidden md:flex md:h-28 inline-flex"},[n("a",{attrs:{target:"_blank",href:"https://microsoftedge.microsoft.com/addons/detail/ejfccgmelcclnoadalcepdmnpgcnglfc"}},[n("InstallEdge")],1),e._v(" "),n("a",{attrs:{target:"_blank",href:"https://chrome.google.com/webstore/detail/dpacanjfikmhoddligfbehkpomnbgblf"}},[n("InstallChrome")],1)])]),e._v(" "),n("div",{staticClass:"h-1/2 md:h-4/6 container flex flex-col mt-6 ",attrs:{id:"container"}},[e.isResultShow&&e.result?n("div",{staticClass:" absolute self-center flex mt-28",staticStyle:{"z-index":"10000"}},[n("div",{staticClass:" md:w-80 bg-white p-6 rounded-md tracking-wide shadow-lg"},[n("strong",{staticClass:"text-xl align-center cursor-pointer absolute top-2 right-4",on:{click:function(t){e.isResultShow=!1}}},[e._v("×")]),e._v(" "),n("div",{staticClass:"flex items-center mb-4"},[n("div",{staticClass:"sm"},[n("h4",{staticClass:"text-xl font-semibold"},[e._v("\n                "+e._s(e.result.title)+"\n              ")]),e._v(" "),n("h5",{staticClass:"font-semibold text-blue-600"},[e._v("\n                "+e._s(e.result.artists)+"\n              ")])])]),e._v(" "),n("div",[n("button",{staticClass:"detail-btn mt-4 mb-4",on:{click:function(t){return e.openDetailPage()}}},[n("span",{staticClass:"text-blue-400"},[e._v("View detail")])])])])]):e._e(),e._v(" "),e.isResultShow&&!e.result?n("div",{staticClass:" absolute self-center flex mt-20 md:mt-28",staticStyle:{"z-index":"10000"}},[n("div",{staticClass:"w-60 md:w-80 bg-white p-6 rounded-md tracking-wide shadow-lg"},[n("strong",{staticClass:"text-xl align-center cursor-pointer absolute top-2 right-4",on:{click:function(t){e.isResultShow=!1}}},[e._v("×")]),e._v(" "),n("div",{staticClass:"flex items-center mb-4"},[n("div",{staticClass:"sm"},[n("div",{staticClass:"mb-2"},[n("ICON",{attrs:{type:"error"}})],1),e._v(" "),n("h4",{staticClass:"text-xl font-semibold"},[e._v("\n                "+e._s(e.errorMsgTitle)+"\n                ")]),e._v(" "),n("h5",[e._v("\n                "+e._s(e.errorMsg)+"\n                ")])])])])]):e._e(),e._v(" "),n("div",{staticClass:"flex flex-row justify-center space-x-4 md:space-x-8 pt-8"},[n("div",[n("a",{staticClass:"underline",class:[{"active-record-text":e.isFpActive},"record-text"],attrs:{href:"#"},on:{click:function(t){e.isFpActive=!e.isFpActive}}},[n("ICON",{staticClass:"inline-block",attrs:{type:"record"}}),e._v(" "),n("span",[e._v("RECORD")])],1)]),e._v(" "),n("div",[n("a",{staticClass:"underline ",class:[{"active-record-text":!e.isFpActive},"record-text"],attrs:{href:"#"},on:{click:function(t){e.isFpActive=!e.isFpActive}}},[n("ICON",{staticClass:"inline-block",attrs:{type:"hum"}}),e._v(" "),n("span",[e._v("HUM/SING")])],1)])]),e._v(" "),n("div",{staticClass:"self-center py-6"},[n("button",{class:{"scale-down-center":e.timerEnabled},on:{click:function(t){return e.startRecord()}}},[n("RecordingButton")],1)]),e._v(" "),n("div",{staticClass:"block md:hidden self-center text-white text-xl font-semibold",class:{hidden:e.timerEnabled}},[e._v("\n        Click to recognize\n      ")]),e._v(" "),n("div",{staticClass:"self-center text-white text-2xl font-semibold",class:[e.timerEnabled?"md:block":"hidden",""]},[e._v("\n        Recognizing...\n      ")]),e._v(" "),n("div",{staticClass:"hidden self-center text-white text-2xl font-semibold",class:[e.timerEnabled?"hidden":"md:block",""]},[n("p",[e._v("\n          Play some music and click the\n        ")]),e._v(" "),n("p",[e._v("\n          button to recognize songs now.\n        ")])])]),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row justify-between footer mt-6",attrs:{id:"footer"}},[n("div",{staticClass:"text-gray-500"},[n("div",[e._v("contact@aha-music.com")]),e._v(" "),n("div",{staticClass:"underline"},[n("a",{attrs:{href:"/privacy-policy"}},[e._v("Privacy Policy")])])])])}],!1,null,"68d5e229",null);t.default=component.exports;installComponents(component,{Logo:n(298).default,InstallEdge:n(306).default,InstallChrome:n(299).default,ICON:n(295).default,RecordingButton:n(300).default})}}]);