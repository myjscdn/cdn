(window.MIP=window.MIP||[]).push({name:"mip-lightbox",func:function(){define("mip-lightbox/mip-lightbox",["require","customElement","fixed-element","util"],function(t){function e(){var t=this;t.open=!1,t.id=this.element.id,t.scroll=this.element.hasAttribute("content-scroll"),u.css(t.element,{position:"fixed","z-index":10001,top:0,right:0,left:0,transition:"opacity 0.1s ease-in"}),n.call(t),t.addEventAction("close",function(e){a.call(t,e)}),t.addEventAction("open",function(e){r.call(t,e)}),t.addEventAction("toggle",function(e){o.call(t,e)})}function i(){var t=this,e=t.element.getAttribute("autoclosetime"),i=t.element.querySelector(".mip-lightbox-seconds");if(Number(e)&&i){var n=Math.abs(Math.ceil(e));i.innerHTML=n,this.interval=setInterval(function(){if(n-=1,i.innerHTML=n,n<=0)a.call(t)},1e3)}}function n(){var t=this,e=[],i=0,n=t.element.childNodes;for(i=0;i<n.length;i++)if(1===n[i].nodeType)e.push(n[i]);for(t.container=document.createElement("div"),t.applyFillContent(t.container),t.element.appendChild(t.container),i=0;i<e.length;i++)t.container.appendChild(e[i])}function o(t){l.call(this)?a.call(this,t):r.call(this,t)}function r(t){var e=this;if(!e.open){if(d.hideFixedLayer(d._fixedLayer),t.preventDefault(),!e.scroll)new f(e.element,{preventY:!0});e.open=!0,u.css(e.element,{display:"block"}),h.body=document.body.scrollTop,h.documentElement=document.documentElement.scrollTop,h.offset=window.pageYOffset,document.documentElement.classList.add("mip-no-scroll"),s.call(e),i.call(e)}}function a(t){var e=this;if(e.open){if(d.showFixedLayer(d._fixedLayer),t)t.preventDefault();if(e.open=!1,c.call(e),u.css(e.element,{display:"none"}),document.documentElement.classList.remove("mip-no-scroll"),"function"==typeof document.body.scrollTo)document.body.scrollTo(0,h.body);if("function"==typeof document.documentElement.scrollTo)document.documentElement.scrollTo(0,h.documentElement);window.scrollTo(0,h.offset)}}function l(){return this.open}function s(){var t=this;if(!t.maskElement){var e=document.createElement("div");if(e.id="MIP-LLIGTBOX-MASK",e.setAttribute("on","tap:"+t.id+".close"),e.style.display="block",t.element.parentNode.appendChild(e),!t.scroll)e.addEventListener("touchmove",function(t){t.preventDefault()},!1);t.maskElement=e}u.css(t.maskElement,{display:"block"})}function c(){if(this.maskElement)u.css(this.maskElement,{display:"none"}),clearInterval(this.interval)}var p=t("customElement").create(),d=t("fixed-element"),u=t("util"),f=u.Gesture,h={body:0,documentElement:0,offset:0};return p.prototype.build=e,p.prototype.detachedCallback=function(){clearInterval(this.interval),document.documentElement.classList.remove("mip-no-scroll")},p}),define("mip-lightbox",["mip-lightbox/mip-lightbox"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-lightbox",e,"mip-lightbox{max-height:100%;overflow:auto;box-sizing:border-box}mip-lightbox a{color:#fff}mip-lightbox .mip-lightbox-countdown{position:absolute;top:5px;right:5px}#MIP-LLIGTBOX-MASK{position:fixed !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;background-image:none !important;background:rgba(0,0,0,0.8);z-index:10000 !important;display:none}")}if(window.MIP)require(["mip-lightbox"],function(e){t(window.MIP,e)});else require(["mip","mip-lightbox"],t)}()}});