(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{303:function(e,r,t){e.exports={}},312:function(e,r,t){"use strict";t(303)},316:function(e,r,t){"use strict";t.r(r);var n={name:"File",data:function(){return{wavesurfer:null,options:{barWidth:4,barHeight:1,plugins:[]},file:"https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"}},created:function(){var e=this,r=t(310),n=t(311);this.wavesurfer=r.create({container:"#waveform",cursorColor:"#000",cursorWidth:1,waveColor:"#FFFFFF",progressColor:"#FFFFFF",hideScrollbar:!1,responsive:!0,scrollParent:!0,barWidth:7,barHeight:1,barRadius:10,plugins:[n.create({regions:[{start:0,end:10,color:"hsla(180,3%,30%,0.16)",minLength:3,maxLength:12,scrollSpeed:4}]})]}),this.wavesurfer.disableDragSelection(),this.wavesurfer.load(this.file),this.wavesurfer.on("seek",(function(r){var t=e.wavesurfer.getDuration(),n=r*t;n+3>t&&(n=t-3);var o=n+10;o>t&&(o=t),e.wavesurfer.clearRegions(),e.wavesurfer.addRegion({start:n,end:o,color:"hsla(180,3%,30%,0.16)",minLength:3,maxLength:12,scrollSpeed:4}),console.log("this.wavesurfer",e.wavesurfer),e.wavesurfer.drawer.recenter(r),console.log("after region",e.wavesurfer.regions.list),console.log("crt",n,o,r)}))},methods:{click:function(){}}},o=(t(312),t(64)),component=Object(o.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"bg-blue-300",staticStyle:{height:"100vh"}},[e._m(0),e._v(" "),t("div",{ref:"waveform",staticClass:"display",attrs:{id:"waveform"},on:{click:function(r){return e.click()}}}),e._v(" "),t("div",{attrs:{id:"wave-timeline"}}),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("button",{on:{click:function(r){return e.click()}}},[e._v("\n    BUtton\n  ")])])}),[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"wavesurfer-label",attrs:{id:"stanza1-label"}},[r("input",{attrs:{type:"text",value:"Stanza 1"}})])}],!1,null,"10f4e792",null);r.default=component.exports}}]);