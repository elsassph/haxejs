// Generated by Haxe 3.4.2
(function () { "use strict";
var Main = function() {
	this.document = window.document;
	var _gthis = this;
	console.log("Example VanillaJS");
	this.document.addEventListener("DOMContentLoaded",function(event) {
		console.log("VanillaJs DOM ready");
		var div = _gthis.document.getElementById("container-1");
		div.style.opacity = Std.string(0.5);
		var request = new XMLHttpRequest();
		request.open("GET","https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=DEMO_KEY",true);
		request.onload = function() {
			if(request.status >= 200 && request.status < 400) {
				var json = request.responseText;
				console.log("json: " + json);
			} else {
				console.log("oeps: status: " + request.status + " // json: " + request.responseText);
			}
		};
		request.onerror = function() {
			console.log("error");
		};
		request.send();
		var _el = _gthis.document.getElementsByClassName("image-container")[0];
		var _btnShow = _gthis.document.getElementById("fade-in");
		var _btnHide = _gthis.document.getElementById("fade-out");
		_gthis.fadeIn(_el);
		_btnShow.addEventListener("click",function() {
			_gthis.fadeIn(_el);
		},false);
		_btnHide.addEventListener("click",function() {
			_gthis.fadeOut(_el);
		},false);
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Main.prototype = {
	fadeIn: function(pElement,pOpacity) {
		var _gthis = this;
		if(pOpacity == null) {
			pOpacity = 0;
		} else {
			pOpacity += 0.1;
		}
		pElement.style.opacity = pOpacity == null ? "null" : "" + pOpacity;
		if(pOpacity < 1) {
			haxe_Timer.delay(function() {
				_gthis.fadeIn(pElement,pOpacity);
			},100);
		} else {
			console.log("Stop fadein");
		}
	}
	,fadeOut: function(pElement,pOpacity) {
		var _gthis = this;
		if(pOpacity == null) {
			pOpacity = 1;
		} else {
			pOpacity -= 0.1;
		}
		pElement.style.opacity = pOpacity == null ? "null" : "" + pOpacity;
		if(pOpacity > 0) {
			haxe_Timer.delay(function() {
				_gthis.fadeOut(pElement,pOpacity);
			},100);
		} else {
			console.log("Stop fadeOut");
		}
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
String.__name__ = true;
Array.__name__ = true;
Main.main();
})();