/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8784, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14356, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_prev}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35594, function(sym, e) {
         // insert code here
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43816, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         var v = $("<video/>");
         	v.attr('width', '392');
         	v.attr('height', '294');
         	v.attr('right', 'auto');
         	v.attr('bottom', 'auto');
         	v.attr('margin', '0');
         	v.attr('display', 'block');
         	v.attr('controls', 'controls');
         	v.attr('preload', 'metadata');
         	v.attr('poster', 'ani/v2/images/concert.png');
         	//v.attr('autoplay', 'autoplay');
         	v.append("<source src='http://s3.amazonaws.com/wevue-production/vues/published/000/173/568/530/640x480/vue.webm?1398882392' type='video/webm'>");
         	v.append("<source src='http://s3.amazonaws.com/wevue-production/vues/published/000/173/568/530/640x480/vue.mp4?1398882392' type='video/mp4'>");
         	v.append("<source src='http://s3.amazonaws.com/wevue-production/vues/published/000/173/568/530/640x480/vue.ogv?1398882392' type='video/ogg'>");
         	sym.$("mainVideo").append(v);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vue-thumb1}", "click", function(sym, e) {
         
         sym.$("video").remove();
         var vid = 'http://s3.amazonaws.com/wevue-production/vues/published/002/094/866/780/640x480/vue.';
         var stamp = '?1408982878';
         var v = $("<video/>");
         	v.attr('width', '392');
         	v.attr('height', '294');
         	//v.attr('right', 'auto');
         	//v.attr('bottom', 'auto');
         	//v.attr('margin', '0');
         	//v.attr('display', 'block');
         	v.attr('controls', 'controls');
         	v.attr('preload', 'metadata');
         	v.attr('autoplay', 'autoplay');
         	v.append("<source src='"+ vid + "webm"+ stamp+"' type='video/webm'>");
         	v.append("<source src='"+ vid + "mp4"+ stamp+"' type='video/mp4'>");
         	v.append("<source src='"+ vid + "ogv"+ stamp+"' type='video/ogv'>");
         	sym.$("mainVideo").append(v);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vue-thumb1}", "touchstart", function(sym, e) {
         sym.$("video").remove();
         var vid = 'http://s3.amazonaws.com/wevue-production/vues/published/002/094/866/780/640x480/vue.';
         var stamp = '?1408982878';
         var v = $("<video/>");
         	v.attr('width', '392');
         	v.attr('height', '294');
         	//v.attr('right', 'auto');
         	//v.attr('bottom', 'auto');
         	//v.attr('margin', '0');
         	//v.attr('display', 'block');
         	v.attr('controls', 'controls');
         	v.attr('preload', 'metadata');
         	v.attr('autoplay', 'autoplay');
         	v.append("<source src='"+ vid + "webm"+ stamp+"' type='video/webm'>");
         	v.append("<source src='"+ vid + "mp4"+ stamp+"' type='video/mp4'>");
         	v.append("<source src='"+ vid + "ogv"+ stamp+"' type='video/ogv'>");
         	sym.$("mainVideo").append(v);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vue-thumb2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("video").remove();
         var vid = 'http://s3.amazonaws.com/wevue-production/vues/published/001/705/279/382/640x480/vue.';
         var stamp = '?1408649337';
         var v = $("<video/>");
         	v.attr('width', '392');
         	v.attr('height', '294');
         	//v.attr('right', 'auto');
         	//v.attr('bottom', 'auto');
         	//v.attr('margin', '0');
         	//v.attr('display', 'block');
         	v.attr('controls', 'controls');
         	v.attr('preload', 'metadata');
         	v.attr('autoplay', 'autoplay');
         	v.append("<source src='"+ vid + "webm"+ stamp+"' type='video/webm'>");
         	v.append("<source src='"+ vid + "mp4"+ stamp+"' type='video/mp4'>");
         	v.append("<source src='"+ vid + "ogv"+ stamp+"' type='video/ogv'>");
         	sym.$("mainVideo").append(v);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vue-thumb2}", "touchstart", function(sym, e) {
         sym.$("video").remove();
         var vid = 'http://s3.amazonaws.com/wevue-production/vues/published/001/705/279/382/640x480/vue.';
         var stamp = '?1408649337';
         var v = $("<video/>");
         	v.attr('width', '392');
         	v.attr('height', '294');
         	//v.attr('right', 'auto');
         	//v.attr('bottom', 'auto');
         	//v.attr('margin', '0');
         	//v.attr('display', 'block');
         	v.attr('controls', 'controls');
         	v.attr('preload', 'metadata');
         	v.attr('autoplay', 'autoplay');
         	v.append("<source src='"+ vid + "webm"+ stamp+"' type='video/webm'>");
         	v.append("<source src='"+ vid + "mp4"+ stamp+"' type='video/mp4'>");
         	v.append("<source src='"+ vid + "ogv"+ stamp+"' type='video/ogv'>");
         	sym.$("mainVideo").append(v);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vue-thumb3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("video").remove();
         var vid = 'http://s3.amazonaws.com/wevue-production/vues/published/001/781/825/416/640x480/vue.';
         var stamp = '?1401927043';
         var v = $("<video/>");
         	v.attr('width', '392');
         	v.attr('height', '294');
         	//v.attr('right', 'auto');
         	//v.attr('bottom', 'auto');
         	//v.attr('margin', '0');
         	//v.attr('display', 'block');
         	v.attr('controls', 'controls');
         	v.attr('preload', 'metadata');
         	v.attr('autoplay', 'autoplay');
         	v.append("<source src='"+ vid + "webm"+ stamp+"' type='video/webm'>");
         	v.append("<source src='"+ vid + "mp4"+ stamp+"' type='video/mp4'>");
         	v.append("<source src='"+ vid + "ogv"+ stamp+"' type='video/ogv'>");
         	sym.$("mainVideo").append(v);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vue-thumb3}", "touchstart", function(sym, e) {
         sym.$("video").remove();
         var vid = 'http://s3.amazonaws.com/wevue-production/vues/published/001/781/825/416/640x480/vue.';
         var stamp = '?1401927043';
         var v = $("<video/>");
         	v.attr('width', '392');
         	v.attr('height', '294');
         	//v.attr('right', 'auto');
         	//v.attr('bottom', 'auto');
         	//v.attr('margin', '0');
         	//v.attr('display', 'block');
         	v.attr('controls', 'controls');
         	v.attr('preload', 'metadata');
         	v.attr('autoplay', 'autoplay');
         	v.append("<source src='"+ vid + "webm"+ stamp+"' type='video/webm'>");
         	v.append("<source src='"+ vid + "mp4"+ stamp+"' type='video/mp4'>");
         	v.append("<source src='"+ vid + "ogv"+ stamp+"' type='video/ogv'>");
         	sym.$("mainVideo").append(v);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_region-swipe-left}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_region-swipe-both}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_region-swipe-right}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_region-swipe-both}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txt_scene1-2a}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("Header2").play(150);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_download'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         //alert('should be stopping');
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_download}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_download}", "touchstart", function(sym, e) {
         //sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_download}", "touchend", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("widget_download");
   //Edge symbol end:'widget_download'

   //=========================================================
   
   //Edge symbol: 'Header'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("site.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("site.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("site.html#section-examples", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         window.open("site.html#section-examples", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy2}", "click", function(sym, e) {
         window.open("site.html#section-team", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy2}", "touchstart", function(sym, e) {
         window.open("site.html#section-team", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy3}", "click", function(sym, e) {
         window.open("site.html#section-contact", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy3}", "touchstart", function(sym, e) {
         window.open("site.html#section-contact", "_self");
         

      });
      //Edge binding end

   })("Header");
   //Edge symbol end:'Header'

   //=========================================================
   
   //Edge symbol: 'btn_play'
   (function(symbolName) {   
   
   })("btn_play");
   //Edge symbol end:'btn_play'

   //=========================================================
   
   //Edge symbol: 'phone-scene1'
   (function(symbolName) {   
   
   })("phone-scene1");
   //Edge symbol end:'phone-scene1'

   //=========================================================
   
   //Edge symbol: 'bouncing-down-arrow'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("bouncing-down-arrow");
   //Edge symbol end:'bouncing-down-arrow'

   //=========================================================
   
   //Edge symbol: 'grass-hill'
   (function(symbolName) {   
   
   })("grass-hill");
   //Edge symbol end:'grass-hill'

   //=========================================================
   
   //Edge symbol: 'crowd-concert'
   (function(symbolName) {   
   
   })("crowd-concert");
   //Edge symbol end:'crowd-concert'

   //=========================================================
   
   //Edge symbol: 'concert'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("concert");
   //Edge symbol end:'concert'

   //=========================================================
   
   //Edge symbol: 'btn_next'
   (function(symbolName) {   
   
   })("btn_next");
   //Edge symbol end:'btn_next'

   //=========================================================
   
   //Edge symbol: 'btn_prev'
   (function(symbolName) {   
   
   })("btn_prev");
   //Edge symbol end:'btn_prev'

   //=========================================================
   
   //Edge symbol: 'user-circled'
   (function(symbolName) {   
   
   })("user-circled");
   //Edge symbol end:'user-circled'

   //=========================================================
   
   //Edge symbol: 'user-bruno'
   (function(symbolName) {   
   
   })("user-bruno");
   //Edge symbol end:'user-bruno'

   //=========================================================
   
   //Edge symbol: 'user-bonnie'
   (function(symbolName) {   
   
   })("user-bonnie");
   //Edge symbol end:'user-bonnie'

   //=========================================================
   
   //Edge symbol: 'user-anderson'
   (function(symbolName) {   
   
   })("user-anderson");
   //Edge symbol end:'user-anderson'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'mainVideo'
   (function(symbolName) {   
   
   })("mainVideo");
   //Edge symbol end:'mainVideo'

   //=========================================================
   
   //Edge symbol: 'vue-thumb1'
   (function(symbolName) {   
   
   })("vue-thumb1");
   //Edge symbol end:'vue-thumb1'

   //=========================================================
   
   //Edge symbol: 'vue-thumb2'
   (function(symbolName) {   
   
   })("vue-thumb2");
   //Edge symbol end:'vue-thumb2'

   //=========================================================
   
   //Edge symbol: 'vue-thumb3'
   (function(symbolName) {   
   
   })("vue-thumb3");
   //Edge symbol end:'vue-thumb3'

   //=========================================================
   
   //Edge symbol: 'finger-swipe-left'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("finger-swipe-left");
   //Edge symbol end:'finger-swipe-left'

   //=========================================================
   
   //Edge symbol: 'badge-drawer'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_appStoreBadge_200x62}", "click", function(sym, e) {
         
         // WeVue app link in iTunes
         //window.open("https://itunes.apple.com/us/app/wevue-gather-pictures-videos./id686649376?mt=8", "_blank");
         window.open("https://itunes.apple.com/us/app/wevue/id686649376?ls=1&mt=8");
         
         // close the window
         sym.getComposition().getStage().getSymbol("Header2").getSymbol("widget_download").play('close');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_appStoreBadge_200x62}", "touchstart", function(sym, e) {
         
         // WeVue app link in iTunes
         //window.open("https://itunes.apple.com/us/app/wevue-gather-pictures-videos./id686649376?mt=8");
         window.open("https://itunes.apple.com/us/app/wevue/id686649376?ls=1&mt=8");
         
         // close the window
         sym.getComposition().getStage().getSymbol("Header2").getSymbol("widget_download").play('close');

      });
      //Edge binding end

   })("badge-drawer");
   //Edge symbol end:'badge-drawer'

   //=========================================================
   
   //Edge symbol: 'btn_download'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button}", "touchstart", function(sym, e) {
         sym.play();
         
         
         

      });
      //Edge binding end

   })("btn_download");
   //Edge symbol end:'btn_download'

})(jQuery, AdobeEdge, "WevueSPA");