/*! Buttons for DataTables 2.3.5
 * ©2016-2023 SpryMedia Ltd - datatables.net/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],(function(n){return t(n,window,document)})):"object"==typeof exports?module.exports=function(n,e){return n=n||window,(e=e||("undefined"!=typeof window?require("jquery"):require("jquery")(n))).fn.dataTable||require("datatables.net")(n,e),t(e,n,n.document)}:t(jQuery,window,document)}((function(t,n,e,o){"use strict";var i=t.fn.dataTable,s=0,r=0,a=i.ext.buttons;function l(n,e,o){t.fn.animate?n.stop().fadeIn(e,o):(n.css("display","block"),o&&o.call(n))}function c(n,e,o){t.fn.animate?n.stop().fadeOut(e,o):(n.css("display","none"),o&&o.call(n))}function u(n,e){if(!(this instanceof u))return function(t){return new u(t,n).container()};!0===(e=void 0===e?{}:e)&&(e={}),Array.isArray(e)&&(e={buttons:e}),this.c=t.extend(!0,{},u.defaults,e),e.buttons&&(this.c.buttons=e.buttons),this.s={dt:new i.Api(n),buttons:[],listenKeys:"",namespace:"dtb"+s++},this.dom={container:t("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()}t.extend(u.prototype,{action:function(t,n){return t=this._nodeToButton(t),n===o?t.conf.action:(t.conf.action=n,this)},active:function(n,e){n=this._nodeToButton(n);var i=this.c.dom.button.active;n=t(n.node);return e===o?n.hasClass(i):(n.toggleClass(i,e===o||e),this)},add:function(t,n,e){var i=this.s.buttons;if("string"==typeof n){for(var s=n.split("-"),r=this.s,a=0,l=s.length-1;a<l;a++)r=r.buttons[+s[a]];i=r.buttons,n=+s[s.length-1]}return this._expandButton(i,t,t!==o?t.split:o,(t===o||t.split===o||0===t.split.length)&&r!==o,!1,n),e!==o&&!0!==e||this._draw(),this},collectionRebuild:function(t,n){var e=this._nodeToButton(t);if(n!==o){for(var i=e.buttons.length-1;0<=i;i--)this.remove(e.buttons[i].node);for(e.conf.prefixButtons&&n.unshift.apply(n,e.conf.prefixButtons),e.conf.postfixButtons&&n.push.apply(n,e.conf.postfixButtons),i=0;i<n.length;i++){var s=n[i];this._expandButton(e.buttons,s,s!==o&&s.config!==o&&s.config.split!==o,!0,s.parentConf!==o&&s.parentConf.split!==o,null,s.parentConf)}}this._draw(e.collection,e.buttons)},container:function(){return this.dom.container},disable:function(n){return n=this._nodeToButton(n),t(n.node).addClass(this.c.dom.button.disabled).prop("disabled",!0),this},destroy:function(){t("body").off("keyup."+this.s.namespace);for(var n=this.s.buttons.slice(),e=0,o=n.length;e<o;e++)this.remove(n[e].node);this.dom.container.remove();var i=this.s.dt.settings()[0];for(e=0,o=i.length;e<o;e++)if(i.inst===this){i.splice(e,1);break}return this},enable:function(n,e){return!1===e?this.disable(n):(e=this._nodeToButton(n),t(e.node).removeClass(this.c.dom.button.disabled).prop("disabled",!1),this)},index:function(t,n,e){n||(n="",e=this.s.buttons);for(var o=0,i=e.length;o<i;o++){var s=e[o].buttons;if(e[o].node===t)return n+o;if(s&&s.length&&null!==(s=this.index(t,o+"-",s)))return s}return null},name:function(){return this.c.name},node:function(n){return n?(n=this._nodeToButton(n),t(n.node)):this.dom.container},processing:function(n,e){var i=this.s.dt,s=this._nodeToButton(n);return e===o?t(s.node).hasClass("processing"):(t(s.node).toggleClass("processing",e),t(i.table().node()).triggerHandler("buttons-processing.dt",[e,i.button(n),i,t(n),s.conf]),this)},remove:function(n){var e=this._nodeToButton(n),o=this._nodeToHost(n),i=this.s.dt;if(e.buttons.length)for(var s=e.buttons.length-1;0<=s;s--)this.remove(e.buttons[s].node);return e.conf.destroying=!0,e.conf.destroy&&e.conf.destroy.call(i.button(n),i,t(n),e.conf),this._removeKey(e.conf),t(e.node).remove(),i=t.inArray(e,o),o.splice(i,1),this},text:function(n,e){function i(t){return"function"==typeof t?t(r,a,s.conf):t}var s=this._nodeToButton(n),r=(n=this.c.dom.collection.buttonLiner,n=(s.inCollection&&n&&n.tag?n:this.c.dom.buttonLiner).tag,this.s.dt),a=t(s.node);return e===o?i(s.conf.text):(s.conf.text=e,(n?a.children(n).eq(0).filter(":not(.dt-down-arrow)"):a).html(i(e)),this)},_constructor:function(){var n=this,o=this.s.dt,i=o.settings()[0],s=this.c.buttons;i._buttons||(i._buttons=[]),i._buttons.push({inst:this,name:this.c.name});for(var r=0,a=s.length;r<a;r++)this.add(s[r]);o.on("destroy",(function(t,e){e===i&&n.destroy()})),t("body").on("keyup."+this.s.namespace,(function(t){var o;e.activeElement&&e.activeElement!==e.body||(o=String.fromCharCode(t.keyCode).toLowerCase(),-1!==n.s.listenKeys.toLowerCase().indexOf(o)&&n._keypress(o,t))}))},_addKey:function(n){n.key&&(this.s.listenKeys+=(t.isPlainObject(n.key)?n.key:n).key)},_draw:function(t,n){t||(t=this.dom.container,n=this.s.buttons),t.children().detach();for(var e=0,o=n.length;e<o;e++)t.append(n[e].inserter),t.append(" "),n[e].buttons&&n[e].buttons.length&&this._draw(n[e].collection,n[e].buttons)},_expandButton:function(n,e,i,s,r,a,l){var c=this.s.dt,u=!1,d=Array.isArray(e)?e:[e];e===o&&(d=Array.isArray(i)?i:[i]),e!==o&&e.split!==o&&(u=!0);for(var f=0,p=d.length;f<p;f++){var h=this._resolveExtends(d[f]);if(h)if(u=!(h.config===o||!h.config.split),Array.isArray(h))this._expandButton(n,h,b!==o&&b.conf!==o?b.conf.split:o,s,l!==o&&l.split!==o,a,l);else{var b=this._buildButton(h,s,h.split!==o||h.config!==o&&h.config.split!==o,r);if(b){if(a!==o&&null!==a?(n.splice(a,0,b),a++):n.push(b),b.conf.buttons||b.conf.split){if(b.collection=t("<"+(u?this.c.dom.splitCollection:this.c.dom.collection).tag+"/>"),b.conf._collection=b.collection,b.conf.split)for(var g=0;g<b.conf.split.length;g++)"object"==typeof b.conf.split[g]&&(b.conf.split[g].parent=l,b.conf.split[g].collectionLayout===o&&(b.conf.split[g].collectionLayout=b.conf.collectionLayout),b.conf.split[g].dropup===o&&(b.conf.split[g].dropup=b.conf.dropup),b.conf.split[g].fade===o)&&(b.conf.split[g].fade=b.conf.fade);else t(b.node).append(t('<span class="dt-down-arrow">'+this.c.dom.splitDropdown.text+"</span>"));this._expandButton(b.buttons,b.conf.buttons,b.conf.split,!u,u,a,b.conf)}b.conf.parent=l,h.init&&h.init.call(c.button(b.node),c,t(b.node),h)}}}},_buildButton:function(n,e,i,s){function l(t){return"function"==typeof t?t(y,f,n):t}var c,u,d,f,p=this.c.dom.button,h=this.c.dom.buttonLiner,b=this.c.dom.collection,g=(this.c.dom.split,this.c.dom.splitCollection),m=this.c.dom.splitDropdownButton,y=this.s.dt;if(n.spacer)return u=t("<span></span>").addClass("dt-button-spacer "+n.style+" "+p.spacerClass).html(l(n.text)),{conf:n,node:u,inserter:u,buttons:[],inCollection:e,isSplit:i,inSplit:s,collection:null};if(!i&&s&&g?p=m:!i&&e&&b.button&&(p=b.button),!i&&s&&g.buttonLiner?h=g.buttonLiner:!i&&e&&b.buttonLiner&&(h=b.buttonLiner),n.available&&!n.available(y,n)&&!n.hasOwnProperty("html"))return!1;n.hasOwnProperty("html")?f=t(n.html):(c=function(n,e,o,i){i.action.call(e.button(o),n,e,o,i),t(e.table().node()).triggerHandler("buttons-action.dt",[e.button(o),e,o,i])},u=n.tag||p.tag,d=n.clickBlurs===o||n.clickBlurs,f=t("<"+u+"/>").addClass(p.className).addClass(s?this.c.dom.splitDropdownButton.className:"").attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",(function(t){t.preventDefault(),!f.hasClass(p.disabled)&&n.action&&c(t,y,f,n),d&&f.trigger("blur")})).on("keypress.dtb",(function(t){13===t.keyCode&&(t.preventDefault(),!f.hasClass(p.disabled))&&n.action&&c(t,y,f,n)})),"a"===u.toLowerCase()&&f.attr("href","#"),"button"===u.toLowerCase()&&f.attr("type","button"),h.tag?(m=t("<"+h.tag+"/>").html(l(n.text)).addClass(h.className),"a"===h.tag.toLowerCase()&&m.attr("href","#"),f.append(m)):f.html(l(n.text)),!1===n.enabled&&f.addClass(p.disabled),n.className&&f.addClass(n.className),n.titleAttr&&f.attr("title",l(n.titleAttr)),n.attr&&f.attr(n.attr),n.namespace||(n.namespace=".dt-button-"+r++),n.config!==o&&n.config.split&&(n.split=n.config.split));var v,x,C,w;b=(g=this.c.dom.buttonContainer)&&g.tag?t("<"+g.tag+"/>").addClass(g.className).append(f):f;return this._addKey(n),this.c.buttonCreated&&(b=this.c.buttonCreated(n,b)),i&&((v=t("<div/>").addClass(this.c.dom.splitWrapper.className)).append(f),x=t.extend(n,{text:this.c.dom.splitDropdown.text,className:this.c.dom.splitDropdown.className,closeButton:!1,attr:{"aria-haspopup":"dialog","aria-expanded":!1},align:this.c.dom.splitDropdown.align,splitAlignClass:this.c.dom.splitDropdown.splitAlignClass}),this._addKey(x),C=function(n,e,o,i){a.split.action.call(e.button(v),n,e,o,i),t(e.table().node()).triggerHandler("buttons-action.dt",[e.button(o),e,o,i]),o.attr("aria-expanded",!0)},w=t('<button class="'+this.c.dom.splitDropdown.className+' dt-button"><span class="dt-btn-split-drop-arrow">'+this.c.dom.splitDropdown.text+"</span></button>").on("click.dtb",(function(t){t.preventDefault(),t.stopPropagation(),w.hasClass(p.disabled)||C(t,y,w,x),d&&w.trigger("blur")})).on("keypress.dtb",(function(t){13===t.keyCode&&(t.preventDefault(),w.hasClass(p.disabled)||C(t,y,w,x))})),0===n.split.length&&w.addClass("dtb-hide-drop"),v.append(w).attr(x.attr)),{conf:n,node:(i?v:f).get(0),inserter:i?v:b,buttons:[],inCollection:e,isSplit:i,inSplit:s,collection:null}},_nodeToButton:function(t,n){for(var e=0,o=(n=n||this.s.buttons).length;e<o;e++){if(n[e].node===t)return n[e];if(n[e].buttons.length){var i=this._nodeToButton(t,n[e].buttons);if(i)return i}}},_nodeToHost:function(t,n){for(var e=0,o=(n=n||this.s.buttons).length;e<o;e++){if(n[e].node===t)return n;if(n[e].buttons.length){var i=this._nodeToHost(t,n[e].buttons);if(i)return i}}},_keypress:function(n,e){var o;e._buttonsHandled||(o=function(i){for(var s,r,a=0,l=i.length;a<l;a++)s=i[a].conf,r=i[a].node,!s.key||s.key!==n&&(!t.isPlainObject(s.key)||s.key.key!==n||s.key.shiftKey&&!e.shiftKey||s.key.altKey&&!e.altKey||s.key.ctrlKey&&!e.ctrlKey||s.key.metaKey&&!e.metaKey)||(e._buttonsHandled=!0,t(r).click()),i[a].buttons.length&&o(i[a].buttons)})(this.s.buttons)},_removeKey:function(n){var e;n.key&&(n=(t.isPlainObject(n.key)?n.key:n).key,e=this.s.listenKeys.split(""),n=t.inArray(n,e),e.splice(n,1),this.s.listenKeys=e.join(""))},_resolveExtends:function(n){function e(e){for(var i=0;!t.isPlainObject(e)&&!Array.isArray(e);){if(e===o)return;if("function"==typeof e){if(!(e=e.call(r,l,n)))return!1}else if("string"==typeof e){if(!a[e])return{html:e};e=a[e]}if(30<++i)throw"Buttons: Too many iterations"}return Array.isArray(e)?e:t.extend({},e)}var i,s,r=this,l=this.s.dt;for(n=e(n);n&&n.extend;){if(!a[n.extend])throw"Cannot extend unknown button type: "+n.extend;var c=e(a[n.extend]);if(Array.isArray(c))return c;if(!c)return!1;var u=c.className;n.config!==o&&c.config!==o&&(n.config=t.extend({},c.config,n.config)),n=t.extend({},c,n),u&&n.className!==u&&(n.className=u+" "+n.className),n.extend=c.extend}var d=n.postfixButtons;if(d)for(n.buttons||(n.buttons=[]),i=0,s=d.length;i<s;i++)n.buttons.push(d[i]);var f=n.prefixButtons;if(f)for(n.buttons||(n.buttons=[]),i=0,s=f.length;i<s;i++)n.buttons.splice(i,0,f[i]);return n},_popover:function(o,i,s,r){function a(){x=!0,c(t(".dt-button-collection"),C.fade,(function(){t(this).detach()})),t(y.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()).attr("aria-expanded","false"),t("div.dt-button-background").off("click.dtb-collection"),u.background(!1,C.backgroundClassName,C.fade,w),t(n).off("resize.resize.dtb-collection"),t("body").off(".dtb-collection"),y.off("buttons-action.b-internal"),y.off("destroy")}var d,f,p,h,b,g,m,y=i,v=this.c,x=!1,C=t.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",closeButton:!0,contentClassName:v.dom.collection.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,popoverTitle:"",rightAlignClassName:"dt-button-right",tag:v.dom.collection.tag},s),w=i.node();!1===o?a():((v=t(y.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes())).length&&(w.closest("div.dt-button-collection").length&&(w=v.eq(0)),a()),v="",3===(s=t(".dt-button",o).length)?v="dtb-b3":2===s?v="dtb-b2":1===s&&(v="dtb-b1"),d=t("<div/>").addClass("dt-button-collection").addClass(C.collectionLayout).addClass(C.splitAlignClass).addClass(v).css("display","none").attr({"aria-modal":!0,role:"dialog"}),o=t(o).addClass(C.contentClassName).attr("role","menu").appendTo(d),w.attr("aria-expanded","true"),w.parents("body")[0]!==e.body&&(w=e.body.lastChild),C.popoverTitle?d.prepend('<div class="dt-button-collection-title">'+C.popoverTitle+"</div>"):C.collectionTitle&&d.prepend('<div class="dt-button-collection-title">'+C.collectionTitle+"</div>"),C.closeButton&&d.prepend('<div class="dtb-popover-close">x</div>').addClass("dtb-collection-closeable"),l(d.insertAfter(w),C.fade),s=t(i.table().container()),m=d.css("position"),"container"!==C.span&&"dt-container"!==C.align||(w=w.parent(),d.css("width",s.width())),"absolute"===m?(v=t(w[0].offsetParent),i=w.position(),s=w.offset(),f=v.offset(),p=v.position(),h=n.getComputedStyle(v[0]),f.height=v.outerHeight(),f.width=v.width()+parseFloat(h.paddingLeft),f.right=f.left+f.width,f.bottom=f.top+f.height,v=i.top+w.outerHeight(),b=i.left,d.css({top:v,left:b}),h=n.getComputedStyle(d[0]),(g=d.offset()).height=d.outerHeight(),g.width=d.outerWidth(),g.right=g.left+g.width,g.bottom=g.top+g.height,g.marginTop=parseFloat(h.marginTop),g.marginBottom=parseFloat(h.marginBottom),C.dropup&&(v=i.top-g.height-g.marginTop-g.marginBottom),"button-right"!==C.align&&!d.hasClass(C.rightAlignClassName)||(b=i.left-g.width+w.outerWidth()),"dt-container"!==C.align&&"container"!==C.align||(b=b<i.left?-i.left:b)+g.width>f.width&&(b=f.width-g.width),p.left+b+g.width>t(n).width()&&(b=t(n).width()-g.width-p.left),s.left+b<0&&(b=-s.left),p.top+v+g.height>t(n).height()+t(n).scrollTop()&&(v=i.top-g.height-g.marginTop-g.marginBottom),p.top+v<t(n).scrollTop()&&(v=i.top+w.outerHeight()),d.css({top:v,left:b})):((m=function(){var e=t(n).height()/2,o=d.height()/2;d.css("marginTop",-1*(o=e<o?e:o))})(),t(n).on("resize.dtb-collection",(function(){m()}))),C.background&&u.background(!0,C.backgroundClassName,C.fade,C.backgroundHost||w),t("div.dt-button-background").on("click.dtb-collection",(function(){})),C.autoClose&&setTimeout((function(){y.on("buttons-action.b-internal",(function(t,n,e,o){o[0]!==w[0]&&a()}))}),0),t(d).trigger("buttons-popover.dt"),y.on("destroy",a),setTimeout((function(){x=!1,t("body").on("click.dtb-collection",(function(n){var e,i;!x&&(e=t.fn.addBack?"addBack":"andSelf",i=t(n.target).parent()[0],!t(n.target).parents()[e]().filter(o).length&&!t(i).hasClass("dt-buttons")||t(n.target).hasClass("dt-button-background"))&&a()})).on("keyup.dtb-collection",(function(t){27===t.keyCode&&a()})).on("keydown.dtb-collection",(function(n){var i=t("a, button",o),s=e.activeElement;9===n.keyCode&&(-1===i.index(s)?(i.first().focus(),n.preventDefault()):n.shiftKey?s===i[0]&&(i.last().focus(),n.preventDefault()):s===i.last()[0]&&(i.first().focus(),n.preventDefault()))}))}),0))}}),u.background=function(n,i,s,r){s===o&&(s=400),r=r||e.body,n?l(t("<div/>").addClass(i).css("display","none").insertAfter(r),s):c(t("div."+i),s,(function(){t(this).removeClass(i).remove()}))},u.instanceSelector=function(n,e){var i,s,r;return n===o||null===n?t.map(e,(function(t){return t.inst})):(i=[],s=t.map(e,(function(t){return t.name})),(r=function(n){var o;if(Array.isArray(n))for(var a=0,l=n.length;a<l;a++)r(n[a]);else"string"==typeof n?-1!==n.indexOf(",")?r(n.split(",")):-1!==(o=t.inArray(n.trim(),s))&&i.push(e[o].inst):"number"==typeof n?i.push(e[n].inst):"object"==typeof n&&i.push(n)})(n),i)},u.buttonSelector=function(n,e){for(var i=[],s=function(t,n,e){for(var i,r,a=0,l=n.length;a<l;a++)(i=n[a])&&(t.push({node:i.node,name:i.conf.name,idx:r=e!==o?e+a:a+""}),i.buttons)&&s(t,i.buttons,r+"-")},r=function(n,e){var a=[],l=(s(a,e.s.buttons),t.map(a,(function(t){return t.node})));if(Array.isArray(n)||n instanceof t)for(u=0,d=n.length;u<d;u++)r(n[u],e);else if(null===n||n===o||"*"===n)for(u=0,d=a.length;u<d;u++)i.push({inst:e,node:a[u].node});else if("number"==typeof n)e.s.buttons[n]&&i.push({inst:e,node:e.s.buttons[n].node});else if("string"==typeof n)if(-1!==n.indexOf(","))for(var c=n.split(","),u=0,d=c.length;u<d;u++)r(c[u].trim(),e);else if(n.match(/^\d+(\-\d+)*$/)){var f=t.map(a,(function(t){return t.idx}));i.push({inst:e,node:a[t.inArray(n,f)].node})}else if(-1!==n.indexOf(":name")){var p=n.replace(":name","");for(u=0,d=a.length;u<d;u++)a[u].name===p&&i.push({inst:e,node:a[u].node})}else t(l).filter(n).each((function(){i.push({inst:e,node:this})}));else"object"==typeof n&&n.nodeName&&-1!==(f=t.inArray(n,l))&&i.push({inst:e,node:l[f]})},a=0,l=n.length;a<l;a++){var c=n[a];r(e,c)}return i},u.stripData=function(t,n){return"string"==typeof t&&(t=(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")).replace(/<!\-\-.*?\-\->/g,""),n&&!n.stripHtml||(t=t.replace(/<[^>]*>/g,"")),n&&!n.trim||(t=t.replace(/^\s+|\s+$/g,"")),n&&!n.stripNewlines||(t=t.replace(/\n/g," ")),!n||n.decodeEntities)&&(g.innerHTML=t,t=g.value),t},u.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:""},button:{tag:"button",className:"dt-button",active:"active",disabled:"disabled",spacerClass:""},buttonLiner:{tag:"span",className:""},split:{tag:"div",className:"dt-button-split"},splitWrapper:{tag:"div",className:"dt-btn-split-wrapper"},splitDropdown:{tag:"button",text:"&#x25BC;",className:"dt-btn-split-drop",align:"split-right",splitAlignClass:"dt-button-split-left"},splitDropdownButton:{tag:"button",className:"dt-btn-split-drop-button dt-button"},splitCollection:{tag:"div",className:"dt-button-split-collection"}}},t.extend(a,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",closeButton:!(u.version="2.3.5"),init:function(t,n,e){n.attr("aria-expanded",!1)},action:function(n,e,o,i){i._collection.parents("body").length?this.popover(!1,i):this.popover(i._collection,i),"keypress"===n.type&&t("a, button",i._collection).eq(0).focus()},attr:{"aria-haspopup":"dialog"}},split:{text:function(t){return t.i18n("buttons.split","Split")},className:"buttons-split",closeButton:!1,init:function(t,n,e){return n.attr("aria-expanded",!1)},action:function(t,n,e,o){this.popover(o._collection,o)},attr:{"aria-haspopup":"dialog"}},copy:function(t,n){if(a.copyHtml5)return"copyHtml5"},csv:function(t,n){if(a.csvHtml5&&a.csvHtml5.available(t,n))return"csvHtml5"},excel:function(t,n){if(a.excelHtml5&&a.excelHtml5.available(t,n))return"excelHtml5"},pdf:function(t,n){if(a.pdfHtml5&&a.pdfHtml5.available(t,n))return"pdfHtml5"},pageLength:function(n){var e=n.settings()[0].aLengthMenu,o=[],i=[];if(Array.isArray(e[0]))o=e[0],i=e[1];else for(var s=0;s<e.length;s++){var r=e[s];t.isPlainObject(r)?(o.push(r.value),i.push(r.label)):(o.push(r),i.push(r))}return{extend:"collection",text:function(t){return t.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},t.page.len())},className:"buttons-page-length",autoClose:!0,buttons:t.map(o,(function(t,n){return{text:i[n],className:"button-page-length",action:function(n,e){e.page.len(t).draw()},init:function(n,e,o){function i(){s.active(n.page.len()===t)}var s=this;n.on("length.dt"+o.namespace,i),i()},destroy:function(t,n,e){t.off("length.dt"+e.namespace)}}})),init:function(t,n,e){var o=this;t.on("length.dt"+e.namespace,(function(){o.text(e.text)}))},destroy:function(t,n,e){t.off("length.dt"+e.namespace)}}},spacer:{style:"empty",spacer:!0,text:function(t){return t.i18n("buttons.spacer","")}}}),i.Api.register("buttons()",(function(t,n){n===o&&(n=t,t=o),this.selector.buttonGroup=t;var e=this.iterator(!0,"table",(function(e){if(e._buttons)return u.buttonSelector(u.instanceSelector(t,e._buttons),n)}),!0);return e._groupSelector=t,e})),i.Api.register("button()",(function(t,n){return 1<(t=this.buttons(t,n)).length&&t.splice(1,t.length),t})),i.Api.registerPlural("buttons().active()","button().active()",(function(t){return t===o?this.map((function(t){return t.inst.active(t.node)})):this.each((function(n){n.inst.active(n.node,t)}))})),i.Api.registerPlural("buttons().action()","button().action()",(function(t){return t===o?this.map((function(t){return t.inst.action(t.node)})):this.each((function(n){n.inst.action(n.node,t)}))})),i.Api.registerPlural("buttons().collectionRebuild()","button().collectionRebuild()",(function(t){return this.each((function(n){for(var e=0;e<t.length;e++)"object"==typeof t[e]&&(t[e].parentConf=n);n.inst.collectionRebuild(n.node,t)}))})),i.Api.register(["buttons().enable()","button().enable()"],(function(t){return this.each((function(n){n.inst.enable(n.node,t)}))})),i.Api.register(["buttons().disable()","button().disable()"],(function(){return this.each((function(t){t.inst.disable(t.node)}))})),i.Api.register("button().index()",(function(){var t=null;return this.each((function(n){null!==(n=n.inst.index(n.node))&&(t=n)})),t})),i.Api.registerPlural("buttons().nodes()","button().node()",(function(){var n=t();return t(this.each((function(t){n=n.add(t.inst.node(t.node))}))),n})),i.Api.registerPlural("buttons().processing()","button().processing()",(function(t){return t===o?this.map((function(t){return t.inst.processing(t.node)})):this.each((function(n){n.inst.processing(n.node,t)}))})),i.Api.registerPlural("buttons().text()","button().text()",(function(t){return t===o?this.map((function(t){return t.inst.text(t.node)})):this.each((function(n){n.inst.text(n.node,t)}))})),i.Api.registerPlural("buttons().trigger()","button().trigger()",(function(){return this.each((function(t){t.inst.node(t.node).trigger("click")}))})),i.Api.register("button().popover()",(function(t,n){return this.map((function(e){return e.inst._popover(t,this.button(this[0].node),n)}))})),i.Api.register("buttons().containers()",(function(){var n=t(),e=this._groupSelector;return this.iterator(!0,"table",(function(t){if(t._buttons)for(var o=u.instanceSelector(e,t._buttons),i=0,s=o.length;i<s;i++)n=n.add(o[i].container())})),n})),i.Api.register("buttons().container()",(function(){return this.containers().eq(0)})),i.Api.register("button().add()",(function(t,n,e){var o=this.context;return o.length&&(o=u.instanceSelector(this._groupSelector,o[0]._buttons)).length&&o[0].add(n,t,e),this.button(this._groupSelector,t)})),i.Api.register("buttons().destroy()",(function(){return this.pluck("inst").unique().each((function(t){t.destroy()})),this})),i.Api.registerPlural("buttons().remove()","buttons().remove()",(function(){return this.each((function(t){t.inst.remove(t.node)})),this})),i.Api.register("buttons.info()",(function(n,e,i){var s=this;return!1===n?(this.off("destroy.btn-info"),c(t("#datatables_buttons_info"),400,(function(){t(this).remove()})),clearTimeout(d),d=null):(d&&clearTimeout(d),t("#datatables_buttons_info").length&&t("#datatables_buttons_info").remove(),n=n?"<h2>"+n+"</h2>":"",l(t('<div id="datatables_buttons_info" class="dt-button-info"/>').html(n).append(t("<div/>")["string"==typeof e?"html":"append"](e)).css("display","none").appendTo("body")),i!==o&&0!==i&&(d=setTimeout((function(){s.buttons.info(!1)}),i)),this.on("destroy.btn-info",(function(){s.buttons.info(!1)}))),this})),i.Api.register("buttons.exportData()",(function(t){if(this.context.length)return m(new i.Api(this.context[0]),t)})),i.Api.register("buttons.exportInfo()",(function(t){return{filename:f(t=t||{}),title:h(t),messageTop:b(this,t.message||t.messageTop,"top"),messageBottom:b(this,t.messageBottom,"bottom")}}));var d,f=function(n){var e;return(e="function"==typeof(e="*"===n.filename&&"*"!==n.title&&n.title!==o&&null!==n.title&&""!==n.title?n.title:n.filename)?e():e)===o||null===e?null:(e=(e=-1!==e.indexOf("*")?e.replace("*",t("head > title").text()).trim():e).replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""))+(p(n.extension)||"")},p=function(t){return null===t||t===o?null:"function"==typeof t?t():t},h=function(n){return null===(n=p(n.title))?null:-1!==n.indexOf("*")?n.replace("*",t("head > title").text()||"Exported data"):n},b=function(n,e,o){return null===(e=p(e))?null:(n=t("caption",n.table().container()).eq(0),"*"===e?n.css("caption-side")!==o?null:n.length?n.text():"":e)},g=t("<textarea/>")[0],m=function(n,e){for(var i=t.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return u.stripData(t,i)},footer:function(t){return u.stripData(t,i)},body:function(t){return u.stripData(t,i)}},customizeData:null},e),s=(e=n.columns(i.columns).indexes().map((function(t){var e=n.column(t).header();return i.format.header(e.innerHTML,t,e)})).toArray(),n.table().footer()?n.columns(i.columns).indexes().map((function(t){var e=n.column(t).footer();return i.format.footer(e?e.innerHTML:"",t,e)})).toArray():null),r=t.extend({},i.modifier),a=(r=(n.select&&"function"==typeof n.select.info&&r.selected===o&&n.rows(i.rows,t.extend({selected:!0},r)).any()&&t.extend(r,{selected:!0}),n.rows(i.rows,r).indexes().toArray()),(r=n.cells(r,i.columns)).render(i.orthogonal).toArray()),l=r.nodes().toArray(),c=e.length,d=[],f=0,p=0,h=0<c?a.length/c:0;p<h;p++){for(var b=[c],g=0;g<c;g++)b[g]=i.format.body(a[f],p,g,l[f]),f++;d[p]=b}return r={header:e,footer:s,body:d},i.customizeData&&i.customizeData(r),r};function y(t,n){return t=new i.Api(t),n=n||t.init().buttons||i.defaults.buttons,new u(t,n).container()}return t.fn.dataTable.Buttons=u,t.fn.DataTable.Buttons=u,t(e).on("init.dt plugin-init.dt",(function(t,n){"dt"===t.namespace&&(t=n.oInit.buttons||i.defaults.buttons)&&!n._buttons&&new u(n,t).container()})),i.ext.feature.push({fnInit:y,cFeature:"B"}),i.ext.features&&i.ext.features.register("buttons",y),i}));