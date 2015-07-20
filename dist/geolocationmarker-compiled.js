(function(){'use strict';var c,e=this;function g(a,b,d){return a.call.apply(a.bind,arguments)}function k(a,b,d){if(!a)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,f);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}function n(a,b,d){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:k;return n.apply(null,arguments)}
function p(a,b){var d=a.split("."),f=e;d[0]in f||!f.execScript||f.execScript("var "+d[0]);for(var h;d.length&&(h=d.shift());)d.length||void 0===b?f[h]?f=f[h]:f=f[h]={}:f[h]=b};function q(a,b,d){var f={clickable:!1,cursor:"pointer",draggable:!1,flat:!0,icon:{url:"http://chadkillingsworth.github.io/geolocation-marker/images/gpsloc.png",size:new google.maps.Size(34,34),scaledSize:new google.maps.Size(17,17),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(8,8)},optimized:!1,position:new google.maps.LatLng(0,0),title:"Current location",zIndex:2};b&&(f=this.c(f,b));b={clickable:!1,radius:0,strokeColor:"1bb6ff",strokeOpacity:.4,fillColor:"61a0bf",fillOpacity:.4,
strokeWeight:1,zIndex:1};d&&(b=this.c(b,d));this.b=new google.maps.Marker(f);this.a=new google.maps.Circle(b);google.maps.MVCObject.prototype.set.call(this,"accuracy",null);google.maps.MVCObject.prototype.set.call(this,"position",null);google.maps.MVCObject.prototype.set.call(this,"map",null);this.set("minimum_accuracy",null);this.set("position_options",{enableHighAccuracy:!0,maximumAge:1E3});this.a.bindTo("map",this.b);a&&this.g(a)}var r={map:!0,position:!0,radius:!0},t=/^(?:position|accuracy)$/i;(function(){var a=google.maps.MVCObject;function b(){}b.prototype=a.prototype;q.G=a.prototype;q.prototype=new b;q.prototype.constructor=q;q.F=function(b,f,h){for(var m=Array(arguments.length-2),l=2;l<arguments.length;l++)m[l-2]=arguments[l];return a.prototype[f].apply(b,m)}})();c=q.prototype;c.set=function(a,b){if(t.test(a))throw"'"+a+"' is a read-only property.";"map"===a?this.g(b):google.maps.MVCObject.prototype.set.apply(this,arguments)};c.b=null;c.a=null;c.j=function(){return this.get("map")};
c.m=function(){return this.get("position_options")};c.C=function(a){this.set("position_options",a)};c.f=function(){return this.get("position")};c.u=function(){return this.get("position")?this.a.getBounds():null};c.l=function(){return this.get("accuracy")};c.h=function(){return this.get("minimum_accuracy")};c.B=function(a){this.set("minimum_accuracy",a)};c.i=-1;
c.g=function(a){google.maps.MVCObject.prototype.set.call(this,"map",a);a?this.o():(this.s(),this.b.unbind("position"),this.a.unbind("center"),this.a.unbind("radius"),google.maps.MVCObject.prototype.set.call(this,"accuracy",null),google.maps.MVCObject.prototype.set.call(this,"position",null),this.b.setMap(a))};c.A=function(a){this.b.setOptions(this.c({},a))};c.w=function(a){this.a.setOptions(this.c({},a))};
c.D=function(a){var b=new google.maps.LatLng(a.coords.latitude,a.coords.longitude),d=null==this.b.getMap();if(d){if(null!=this.h()&&a.coords.accuracy>this.h())return;this.b.setMap(this.j());this.b.bindTo("position",this);this.a.bindTo("center",this,"position");this.a.bindTo("radius",this,"accuracy")}this.l()!=a.coords.accuracy&&google.maps.MVCObject.prototype.set.call(this,"accuracy",a.coords.accuracy);if(d||null==this.f()||!this.f().equals(b))google.maps.MVCObject.prototype.set.call(this,"position",
b),google.maps.event.trigger(this,"geolocation_position",b)};c.s=function(){navigator.geolocation&&(navigator.geolocation.clearWatch(this.i),this.i=-1)};c.o=function(){navigator.geolocation&&(this.i=navigator.geolocation.watchPosition(n(this.D,this),n(this.v,this),this.m()))};c.v=function(a){google.maps.event.trigger(this,"geolocation_error",a)};c.c=function(a,b){for(var d in b)!0!==r[d]&&(a[d]=b[d]);return a};p("GeolocationMarker",q);p("GeolocationMarker.prototype.getAccuracy",q.prototype.l);
p("GeolocationMarker.prototype.getBounds",q.prototype.u);p("GeolocationMarker.prototype.getMap",q.prototype.j);p("GeolocationMarker.prototype.getMinimumAccuracy",q.prototype.h);p("GeolocationMarker.prototype.getPosition",q.prototype.f);p("GeolocationMarker.prototype.getPositionOptions",q.prototype.m);p("GeolocationMarker.prototype.setCircleOptions",q.prototype.w);p("GeolocationMarker.prototype.setMap",q.prototype.g);p("GeolocationMarker.prototype.setMarkerOptions",q.prototype.A);
p("GeolocationMarker.prototype.setMinimumAccuracy",q.prototype.B);p("GeolocationMarker.prototype.setPositionOptions",q.prototype.C);p("GeolocationMarker.prototype.stopWatch",q.prototype.s);p("GeolocationMarker.prototype.startWatch",q.prototype.o);
}).call(window)
//# sourceMappingURL=geolocationmarker-compiled.js.map
