(function(){var C={931060:function(r){function u(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}r.exports=u,r.exports.default=r.exports,r.exports.__esModule=!0},546321:function(r,u,t){"use strict";t.r(u),t.d(u,{CodeBuilder:function(){return e._},Decimal:function(){return e.tA},DecimalConstants:function(){return e.Fw},DefaultMessageArgConverter:function(){return e.jN},DigitsArrowImpl:function(){return e.s4},FieldArrowImpl:function(){return e.D9},KeyIndexImpl:function(){return e.Tl},LanguageResolver:function(){return e.Vn},LanguageTag:function(){return e.mK},Locale:function(){return e.go},LocaleMatcher:function(){return e.NP},MessageEngine:function(){return e.Xg},MessageFormatter:function(){return e.vl},NumberOperands:function(){return e.Vz},PartsDecimalFormatter:function(){return e.fv},PluralRules:function(){return e.wR},Plurals:function(){return e.jd},Rational:function(){return e.uG},ScopeArrowImpl:function(){return e.Yu},StringDecimalFormatter:function(){return e.Np},VectorArrowImpl:function(){return e.rw},buildMessageMatcher:function(){return e.G8},coerceDecimal:function(){return e.fN},digits:function(){return e.nz},field:function(){return e.EP},origin:function(){return e.hW},parseLanguageTag:function(){return e.g9},parseMessagePattern:function(){return e.m0},pluralRules:function(){return e.dJ},scope:function(){return e.eI},scopemap:function(){return e.ut},vector:function(){return e.xr},CalendarsImpl:function(){return c.Yb},GeneralImpl:function(){return c.QO},NumberParamsCache:function(){return c.ZR},NumbersImpl:function(){return c.Tu},PrivateApiImpl:function(){return c.x3},UnitsImpl:function(){return c.$k},CURRENCY_SPACING_MATCHERS:function(){return a.J2},CalendarInternalsImpl:function(){return a.fg},DateFieldInternalsImpl:function(){return a.TA},GeneralInternalsImpl:function(){return a.nJ},InternalsImpl:function(){return a.Gg},NumberFormatter:function(){return a.eO},NumberInternalsImpl:function(){return a.xN},PartsNumberFormatter:function(){return a.Z5},RE_DIGIT:function(){return a.Oo},RE_SYMBOL:function(){return a.tH},StringNumberFormatter:function(){return a.ZD},UnitsInternalImpl:function(){return a.L7},getCurrencyForRegion:function(){return a.gn},getCurrencyFractions:function(){return a.Wj},availableLocales:function(){return v.Z},Pack:function(){return m.Qi},PackScript:function(){return m.l4},StringBundle:function(){return m.RS},BuddhistDate:function(){return n.Em},CalendarDate:function(){return n.aw},DecimalNumberingSystem:function(){return n.V1},GregorianDate:function(){return n.qt},INTERNAL_NUMBERING:function(){return n.Po},ISO8601Date:function(){return n.bi},JapaneseDate:function(){return n.wx},PersianDate:function(){return n.QA},TIME_FLAGS:function(){return n.KD},TIME_PERIOD_FIELDS:function(){return n.uU},fastFormatDecimal:function(){return n.YQ},timePeriodFieldFlags:function(){return n.wG},CLDRFramework:function(){return s.R},checksumIndices:function(){return o.d}});var e=t(966050),c=t(294063),a=t(395622),v=t(355967),m=t(507213),n=t(423614),s=t(727568),o=t(231268)},235463:function(r,u,t){"use strict";var e=t(24362),c=t(692576),a=t.n(c),v=t(322838),m=t(727325);YUI.add("squarespace-simple-liking",function(n){var s=n.config.win.Static;n.Squarespace.SimpleLike={TEXT_LIKE_VERB_NONE:(0,e.t)("No Likes"),TEXT_LIKE_VERB_SINGULAR:(0,e.t)("Like"),TEXT_LIKE_VERB_PLURAL:(0,e.t)("Likes"),TEXT_LIKE_ACTIVATED:(0,e.t)("You like this"),TEXT_LIKE_SUGGEST:(0,e.t)("Click to like"),attached:!1,attach:function(){if(!this.attached){this.attached=!0;var o;try{localStorage&&(o=n.JSON.parse(localStorage.getItem("squarespace-likes")),o||(o={}),localStorage.setItem("squarespace-likes",n.JSON.stringify(o)))}catch(i){o={}}this.eventHandlers=[];var f=n.delegate("click",function(d){var l=d.currentTarget,p=l.getAttribute("data-item-id");if(!!p){for(var E=0;E<5;++E)n.Squarespace.SimpleLike.burst(l);l.hasClass("clicked")||l.hasClass("float")||a().like(p).then(function(h){if(h.commited===!0){if(l&&l.getDOMNode()){var T=parseInt(l.getAttribute("data-like-count"),10);l.setAttribute("data-like-count",T+1),n.Squarespace.SimpleLike.renderLikeCount(l),l.addClass("clicked")}try{localStorage&&(o[p]=!0,localStorage.setItem("squarespace-likes",n.JSON.stringify(o)))}catch(I){console.warn("Unable to save like to local storage: ",I)}}h.error&&(n.Squarespace.Utils.areCookiesEnabled()||n.config.win.alert((0,e.t)("You need to enable cookies to be able to like something.")))}).catch(function(h){})}},"body",".sqs-simple-like");this.eventHandlers.push(f),n.all(".sqs-simple-like").each(function(i){var d=i.getAttribute("data-item-id");!d||(s.SQUARESPACE_CONTEXT.websiteSettings.simpleLikingEnabled||i.remove(),o[d]&&i.addClass("clicked"),a().getLikeCount(d).then(function(p){i.setAttribute("data-like-count",p),n.Squarespace.SimpleLike.renderLikeCount(i)}).catch(function(){n.Squarespace.SimpleLike.renderLikeCount(i)}))})}},detach:function(){this.attached=!1,this.eventHandlers.forEach(function(o){o.detach()})},renderLikeCount:function(f){var i=f&&f.getDOMNode?f.getDOMNode():f;if(!(!i||!i.ownerDocument||!i.ownerDocument.defaultView)){var d=f.getAttribute("data-item-id"),l=f.getAttribute("data-like-count"),p=f.one(".like-count");!d||!p||p.setContent(this.formatLikeText(l))}},formatLikeText:function(o){return o===0?n.Squarespace.SimpleLike.TEXT_LIKE_VERB_NONE:o===1?"1 "+n.Squarespace.SimpleLike.TEXT_LIKE_VERB_SINGULAR:o+" "+n.Squarespace.SimpleLike.TEXT_LIKE_VERB_PLURAL},burst:function(o){var f=o.cloneNode(!0);f.one(".like-count")&&f.one(".like-count").remove();var i=o.one(".like-icon");(!i||i.getStyle("display")==="none")&&(i=o),f.setStyles({position:"absolute",left:i.getX()+"px",top:i.getY()+"px"}),n.one(n.config.doc.body).append(f);var d=new n.Anim({node:f,duration:2,easing:n.Easing.easeOut});d.set("to",{curve:n.Squarespace.SimpleLike.randomCurve(f)}),d.on("end",function(){this.get("node").remove()}),d.run(),f.removeClass("clicked"),f.addClass("float")},randomCurve:function(o){for(var f=[],i=3,d=30,l=Math.floor(Math.random()*2)?1:-1,p=Math.floor(Math.random()*2)?1:-1,E=o.getX(),h=o.getY(),T=0;T<i;++T)E+=Math.floor(Math.random()*d)*l,h+=Math.floor(Math.random()*d)*p,f.push([E,h]);return f}},n.config.win.Squarespace.onInitialize(n,function(){s.SQUARESPACE_CONTEXT.websiteSettings.simpleLikingEnabled&&n.Squarespace.SimpleLike.attach()}),n.config.win.Squarespace.onDestroy(n,function(){n.Squarespace.SimpleLike.attached===!0&&n.Squarespace.SimpleLike.detach()})},"1.0",{requires:["anim","json","node","squarespace-util"]})},770667:function(r,u,t){"use strict";var e=t(545563),c=t(132816);Object.defineProperty(u,"__esModule",{value:!0}),Object.defineProperty(u,"customInstance",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(u,"default",{enumerable:!0,get:function(){return s.default}}),u.errors=u.interceptors=u.crumb=void 0;var a=c(t(839772));u.crumb=a;var v=c(t(481556));u.interceptors=v;var m=c(t(940619));u.errors=m;var n=e(t(596082)),s=e(t(854005))},465895:function(r,u,t){"use strict";t.d(u,{StaticPraetorClient:function(){return n}});var e="true",c="default",a;(function(s){s.FEATURE_TOGGLE="FEATURE_TOGGLE",s.AB_TEST="AB_TEST"})(a||(a={}));var v=function(){function s(o){var f=this;this.experiments={},this.isConfigurationLoaded=Boolean(o.isConfigurationLoaded),Array.isArray(o.experimentContextList)&&o.experimentContextList.forEach(function(i){i!==null&&typeof i=="object"&&i.hasOwnProperty("name")&&(f.experiments[i.name]=i)})}return s.prototype.isValid=function(){return this.isConfigurationLoaded},s.prototype.getContext=function(o){return this.experiments[o]},s}(),m=function(){function s(o){this.configuration=new v(o)}return s.prototype.getFeatureToggle=function(o,f){var i=this.getContextValidity(o,a.FEATURE_TOGGLE),d=i.context,l=i.error;return l||d===null?{enabled:f,error:l}:d.containsError?{enabled:this.isFeatureToggleEnabled(d),error:"The specified feature has an invalid server-side definition"}:{enabled:this.isFeatureToggleEnabled(d)}},s.prototype.getABTestVariant=function(o,f){var i=this.getContextValidity(o,a.AB_TEST),d=i.context,l=i.error;return l||d===null?{error:l,segment:c,variant:f}:d.containsError?{error:"The specified feature has an invalid server-side definition",segment:d.segmentName,variant:d.variant}:{segment:d.segmentName,variant:d.variant}},s.prototype.getAllExperiments=function(){return this.configuration},s.prototype.getContextValidity=function(o,f){if(!this.configuration.isValid())return{context:null,error:"The underlying Praetor configuration is not loaded"};var i=this.configuration.getContext(o);return i===void 0?{context:null,error:"The specified feature does not exist"}:i.experimentType!==f?{context:null,error:"The specified feature is not a "+f}:{context:i}},s.prototype.isFeatureToggleEnabled=function(o){return o.variant===e},s}(),n=m},430446:function(r,u,t){var e=t(768606),c=t(835455),a=t(444056),v=t(632649);for(var m in c){var n=e[m],s=n&&n.prototype;if(s&&s.forEach!==a)try{v(s,"forEach",a)}catch(o){s.forEach=a}}},267342:function(r,u,t){var e=t(1689);function c(a,v,m){var n=a==null?void 0:e(a,v);return n===void 0?m:n}r.exports=c},727325:function(r){r.exports={}},322838:function(r){r.exports={}},24362:function(r,u,t){"use strict";var e,c=t(545563);e={value:!0},e=e=e=e=e=e=e=e=e=e=e=e=void 0,e={enumerable:!0,get:function(){return m.getResolvedMemberLanguage}},e={enumerable:!0,get:function(){return m.getResolvedWebsiteLanguage}},e=d,e=u.t=e=e=void 0;var a=t(567584),v=t(774194),m=t(468198),n=c(t(315929)),s=c(t(15966)),o=t(613382);function f(){var S=new URLSearchParams(window.location.search),L=S.get("i18nLang");return L==="true"||L==="on"?!0:o.legacyV6Flags.isFeatureEnabled(s.default.ENABLE_I18N_LANGUAGE)}var i=new a.I18nUI({formattingLocale:(0,m.getResolvedWebsiteLocale)(),isDebugMode:(0,v.checkCookie)("i18nShowLocalizedComponents"),translationDictionary:{},translationLocale:"en-US",cldrOptions:{loader:n.default},isPseudoLocalized:f()});function d(S,L,U,w){return L=parseInt(L.toString(),10),isNaN(L)&&(L=0),i.pluralize(S,L,U,w)}var l=i.getCountries,p=i.getLanguageName,E=i.getOfacCountries,h=i.weekdays,T=i.formatNumber,I=i.formatCurrency,_=i.formatCurrencyToParts,y=i.formatMoney,P=i.getCurrencySymbol,O=i.formatQuantity,R=i.translate,D=i.formatDateTime,A=i.formatRelativeTime,M=i.setLocale,N=i.setDebugMode;e=N,e=M,e=A,e=D,u.t=R,e=O,e=P,e=y,e=_,e=I,e=T,e=h,e=E,e=p,e=l;var x=i;e=x},692576:function(r,u,t){"use strict";var e=t(545563);Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var c=e(t(770667)),a=",",v=function(l){return c.default.post("/api/content-items/"+l+"/sentiment/like").then(function(p){var E=p.data;return E})},m=[],n=null,s=function(){var l=m.map(function(p){return p.itemId}).join(a);c.default.get("/api/blog-like-count/".concat(l)).then(function(p){var E=p.data;m.forEach(function(h){if(E.hasOwnProperty(h.itemId)){h.resolve(E[h.itemId]);return}h.reject()}),m=[],n=null})},o=function(l){return new Promise(function(p,E){m.push({itemId:l,resolve:p,reject:E}),n!==null&&clearTimeout(n),n=setTimeout(s,100)})},f=function(l){return o(l)},i={like:v,getLikeCount:f};u.default=i,r.exports=u.default},392338:function(r){"use strict";r.exports=void 0}},b={};function g(r){var u=b[r];if(u!==void 0)return u.exports;var t=b[r]={id:r,loaded:!1,exports:{}};return C[r].call(t.exports,t,t.exports,g),t.loaded=!0,t.exports}g.m=C,function(){var r=[];g.O=function(u,t,e,c){if(t){c=c||0;for(var a=r.length;a>0&&r[a-1][2]>c;a--)r[a]=r[a-1];r[a]=[t,e,c];return}for(var v=1/0,a=0;a<r.length;a++){for(var t=r[a][0],e=r[a][1],c=r[a][2],m=!0,n=0;n<t.length;n++)(c&!1||v>=c)&&Object.keys(g.O).every(function(l){return g.O[l](t[n])})?t.splice(n--,1):(m=!1,c<v&&(v=c));if(m){r.splice(a--,1);var s=e();s!==void 0&&(u=s)}}return u}}(),function(){g.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return g.d(u,{a:u}),u}}(),function(){g.d=function(r,u){for(var t in u)g.o(u,t)&&!g.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:u[t]})}}(),function(){g.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(r){if(typeof window=="object")return window}}()}(),function(){g.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)}}(),function(){g.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){g.nmd=function(r){return r.paths=[],r.children||(r.children=[]),r}}(),function(){g.j=77751}(),function(){var r={77751:0};g.O.j=function(e){return r[e]===0};var u=function(e,c){var a=c[0],v=c[1],m=c[2],n,s,o=0;if(a.some(function(i){return r[i]!==0})){for(n in v)g.o(v,n)&&(g.m[n]=v[n]);if(m)var f=m(g)}for(e&&e(c);o<a.length;o++)s=a[o],g.o(r,s)&&r[s]&&r[s][0](),r[a[o]]=0;return g.O(f)},t=self.webpackChunkextract_css=self.webpackChunkextract_css||[];t.forEach(u.bind(null,0)),t.push=u.bind(null,t.push.bind(t))}();var k=g.O(void 0,[80276,46001],function(){return g(235463)});k=g.O(k)})();
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/simple-liking-3f8f711742e0e76a2141c-min.en-US.js.map
