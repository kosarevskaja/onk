!function(){var e;e=function(e){var n,t,i;if("none"!==e.style.display&&(t=e.parentNode.clientWidth,n=null!=(i=e.contentWindow.document.body)?i.scrollHeight:void 0))return e.width=""+t+"px",e.height=""+n+"px",console.log("RESIZED")},$(window).resize(function(){return $("iframe[iframe-autosize]").each(function(){return e(this)})}),jQuery(function(n){return n("iframe[iframe-autosize]").each(function(){var t,i;return t=n(this),t.hide(),i=n("<p>...</p>").insertBefore(t),t.load(function(){var n,r,o,u,a;for(i.remove(),t.show(),e(t[0]),u=[0,100,1e3,3e3,5e3,2e4,3e4,6e4],a=[],r=0,o=u.length;o>r;r++)n=u[r],a.push(setTimeout(function(){return e(t[0])},n));return a})})})}.call(this);