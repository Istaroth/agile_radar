(function(bg,ae){var EMOS_VERSION="p52.8",at="emos3",ak=bg[at],aN={};if(!ak){bg[at]=ak={}}if(!ak.defaults){ak.defaults={}}var DFLTS={};var D=aS("JUNK_SIZE",1600),al=aS("CLIENT_COOKIE_LIFETIME",30),ai=aS("COOKIENAME_SESSION_ID","emos_jcsid"),ad=aS("COOKIENAME_VISITOR_ID","emos_jcvid"),T=aS("COOKIENAME_CAMPAIGN","emos_jckamp"),bc=aS("COOKIENAME_POSTVIEWCAMPAIGN","emos_postview"),be=aS("COOKIENAME_POSTVIEW",null),aA=aS("COOKIE_DNT","emos_optout"),S=aS("COOKIE_DOMAIN",null),K=aS("TRACK_FIRSTPARTY",true),az=aS("TRACK_POSTCONVERSION",true),aJ=aS("CLIENT_KEY",'0000292e-e8dec9e3-5368-3997-97e2-25cc88bc22cf'),aL=aS("TRACK_THIRD_PARTY",true),aE=aS("SAMPLING_RATE",1),ba=aS("BEST_PRODUCTS_COOKIE",false),br=aS("PRODUCT_ID_IN_EC_EVENT",1),aY=aS("COOKIENAME_BEST_PRODUCTS","emos_best_products"),p=aS("BEST_PRODUCTS_COOKIE_LIFETIME",2592000),aU=aS("PMAP",{}),d=aS("P_MAP",{}),ar=aS("PARAM_TO_PROP",{'emosmarker':'marker', 'ecmUid':'newsuid'}),aq=aS("MC_COOKIE",{kw:30,cp:30,nl:30}),a8=aS("ADD_COOKIE_PARAMS",{all:["empid","empcode","empcode2"]}),q=aS("ADD_COOKIE_PROPS",{}),b=aS("TIMEOUT",6000),bq=aS("DO_NOT_TRACK",false),t=aS("JSID",false),g=aS("SEO_BLACK",[]),a5=aS("GCLID",true),h=aS("VCL",730),an=aS("URL",'www.econda-monitor.de'),u=aS("SM","c"),a1=0,C=null,aW=0,L=0,r,aK=[],O=false,a=null,bo=[],x=[],n=false;try{if(bg.sessionStorage&&bg.sessionStorage.length>=0){n=true}}catch(ag){}function aH(e){return parseInt(e,10)}function aS(e,bx){var bw=ak[e];var i=ac(bw)?bx:bw;aN[e]=i;return i}var A=bg.encodeURIComponent;function aZ(i){try{return bg.decodeURIComponent(i.replace(/\+/g,"%20"))}catch(bw){try{return bg.unescape(i)}catch(bx){return i}}}function aO(bD,bC,bx){var bw=bC.cookie;var e=null;var bE=null;if(bw){if(bC.emcl){e=aH(bC.emcl)}if(!e){e=al}e=e*86400;bE=av(bw)}a0(bD);var bA=ay(ab(F(v(bD))));var bB=Math.floor(bA.length/D)+1;var by=[];for(var bz=0;bz<bB;bz++){by[bz]={};by[bz].v="4";by[bz].emrid=bx;if(K){by[bz].emsid=aW;by[bz].emvid=L}if(bz===0&&aL&&az){if(bw){by[bz].emcl=e;by[bz].emcc=bE}}by[bz].emnc=bB;by[bz].emtn=bz+1;by[bz].emhost=location.hostname;if(aL){by[bz].tpct=1;if(!az){by[bz].tpcv=0}if(h!==730){by[bz].vclt=h}}by[bz].d=bA.substr(bz*D,D)}return by}function j(){if(ak.doNotTrack){return true}if(bq){return true}if(aA){var e=ax(aA);if(e==="1"){return true}}return false}function k(bB){if(!ba){return}var bz=bB.ec_Event;if(!f(bz)||bz.length===0){return}var by=[];for(var bA=0;bA<bz.length&&by.length<5;bA++){var bC=bz[bA];if(bp(bC)){var bx=(G(bC))?bC[br]:bC.pid;if(bx){by.push(A(bx))}}}if(by.length===0){return}if(by.length<5){var e=aB();if(e){for(var bw=0;bw<e.length&&by.length<5;bw++){by.push(e[bw])}}}a9(aY,by.join(":"),p)}function aB(){var e=ax(aY);if(e&&e.length>0){return e.split(":")}return null}function bu(e,i){var bw=e[i];return ac(bw)?ak[i]:bw}function bv(i){var bw=bu(i,"customReferrer");if(!ac(bw)){return bw}try{return top.document.referrer}catch(bx){return ae.referrer}}var a3=null;try{a3=top.location.search}catch(ag){a3=location.search}function bi(bx){var bB=bu(bx,"customParam");if(bB){return bB}var e=m(a3,true);for(var bC in aU){var bw=aU[bC];var bA=e[bw];if(bA){e[bC]=bA;delete e[bw]}else{delete e[bC]}}for(var by in d){var i=d[by];if(i){var bz=e[by];if(bz){e[i]=bz}}else{if(i===null){delete e[by]}}}return e}function aV(bw){var by=screen.width+"x"+screen.height;var e=bg.devicePixelRatio;if(X(e)&&e>1){by=by+"|"+Math.round(e*100)/100}var bx=bg.orientation;if(X(bx)&&bx!==0){by=by+"o"+bx}bw.swsh=by;bw.tz=new Date().getTimezoneOffset()/60;var i=bg.performance;if(bp(i)){var bz=i.navigation;if(bp(bz)){if(X(bz.type)&&bz.type<255){bw.nt=bz.type}}}bw.emosV=EMOS_VERSION}function l(bz,bw){try{if(bz===null||bz.length===0){return""}if(bw>=0){var i=W(bz,"/",bw,0);if(i>=0){bz=bz.substring(0,i)}}var bA=bz.indexOf("?");if(bA>=0){bz=bz.substring(0,bA)}var by=bz.indexOf("#");if(by>=0){bz=bz.substring(0,by)}}catch(bx){}return bz.substring(0,127)}function W(by,bx,bw,i){var e=by.indexOf(bx,i);if(bw===1){return e}else{return W(by,bx,bw-1,e+bx.length)}}function aj(i,e){if(e.cookie){bf(q,i,e.cookie.source,e.cookie)}r=new Date().getTime();C=o();delete i.pageId;delete i.pageid;a4(i,e);if(!O){return}k(i);if(a){i.jsid=a}s(i,e,C)}function s(bA,e,bB){if(bg.console&&bg.console.log&&location.search.indexOf("emosdebug=yxcvbnm")>=0){bg.console.log(bA)}var bz=aO(bA,e,bB);for(var by=0;by<bz.length;by++){a1=a1+1;c(bz[by],e,a1)}if(e.delay){var bw=aH(e.delay);if(isFinite(bw)&&bw>0&&bw<1000){var bx=new Date().getTime()+bw;while(new Date().getTime()<bx){}}}}function y(){var i=aJ.indexOf("-");var e;var bw;if(i===8){e=aJ.substring(0,8);bw=aJ.substring(9)}else{e="00000000";bw=aJ}return((location.protocol=="http:")?"http://":"https://")+an+"/l/"+e+"/t/"+bw+"?"}var bs="emosTransmit",a7="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function c(bA,by,bx){var i=av(bA);var bC=bs+bx;if(n){try{var bD=bg.sessionStorage;bD.setItem(bC,i)}catch(bz){}}else{ap(bC,i)}if(!by.noimg){var bw=new Image();var bB=bg.setTimeout(function(){bw.src=a7},b);aK[bx]=bw;bw.onload=function(){aR(bC,bx,bB)};bw.src=y()+i}}function aR(by,bx,i){try{if(n){bg.sessionStorage.removeItem(by)}else{R(by)}}catch(bw){}aK[bx]=null;bg.clearTimeout(i)}function av(i){var bw="";for(var bx in i){var e=typeof i[bx];if(e==="string"||e==="boolean"||e==="number"){if(bw!==""){bw+="&"}bw+=bx+"="+A(i[bx])}}return bw}function a2(bx){var by=bx.split("&");var i={};for(var e=0;e<by.length;e++){var bw=by[e].split("=");i[bw[0]]=aZ(bw[1])}return i}function G(e){return Object.prototype.toString.apply(e)==="[object Array]"}function f(e){return bp(e)&&G(e)}function bp(e){return e!==null&&typeof e==="object"}function ac(e){return typeof e==="undefined"}function bm(e){return typeof e==="string"}function X(e){return typeof e==="number"}function a0(e){for(var bw in e){var i=e[bw];if(f(i)&&i.length>1){z(i,bw,e)}}}function z(bA,bB,bD){var bC={};var bE=false;for(var bz=0;bz<bA.length;bz++){var bF=bA[bz];if(typeof bF==="object"&&Object.prototype.toString.apply(bF)!="[object Array]"){aG(bF,bC);bE=true}else{if(bF===null){}else{return}}}if(!bE){return}for(var by=0;by<bA.length;by++){var e=bA[by];if(e!==null){bt(e,bC)}}var bw=v(bA).length;var bx=v(bC).length;if(bx<bw){bD[bB]=bC}}function aG(e,i){for(var bw in e){if(!i[bw]){i[bw]=[]}}}function bt(i,bw){for(var by in bw){var bx=i[by];var e=bw[by];if(bx===undefined){e.push(null)}else{e.push(bx)}}}function v(bA){switch(typeof bA){case"string":return aI(bA);case"number":return isFinite(bA)?String(bA):"null";case"boolean":case"null":return String(bA);case"object":if(!bA){return"null"}var bx=[];if(G(bA)){var bz=bA.length;for(var by=0;by<bz;by++){bx[by]=v(bA[by])||"null"}return bx.length===0?"[]":"["+bx.join(",")+"]"}for(var bw in bA){if(Object.prototype.hasOwnProperty.call(bA,bw)){var e=v(bA[bw]);if(e){bx.push(aI(bw)+":"+e)}}}return bx.length===0?"{}":"{"+bx.join(",")+"}"}return undefined}var M=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,J={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function aI(e){if(M.test(e)){return'"'+e.replace(M,function(i){var bw=J[i];return typeof bw==="string"?bw:"\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4)})+'"'}else{return'"'+e+'"'}}function B(){var bA=bs.length;var bJ=[];if(n){try{var bI=bg.sessionStorage;for(var bC=0;bC<bI.length;bC++){var bG=bI.key(bC);if(bG.substr(0,bA)==bs){var bw=Number(bG.substr(bA));var bx=bI.getItem(bG);if(bx){if(bw>=a1){a1=bw+1}bJ.push([bw,bx])}bI.removeItem(bG)}}}catch(bE){}}else{var bH=ae.cookie.split(";");for(var bB=0;bB<bH.length;bB++){var bz=bH[bB];if(bz.charAt(0)==" "){bz=bz.substr(1)}if(bz.substr(0,bA)==bs){var bF=bz.indexOf("=");if(bF<0){continue}var bD=Number(bz.substring(bA,bF));var by=bz.substring(bF+1);R(bs+bD);if(by){if(bD>=a1){a1=bD+1}bJ.push([bD,by])}}}}aT(bJ)}function aT(bx){if(bx.length>0){var bw=bx.pop();var e=bw[0];var i=new Image();var by=bg.setTimeout(function(){i.onload=function(){};i.src=a7},b);aK[e]=i;i.onload=function(){E(e,bx,by)};i.src=y()+bw[1]}}function E(bw,e,i){aK[bw]=null;bg.clearTimeout(i);aT(e)}function a4(bF,bC){if(!K){O=true;return}aW=null;if(bm(ak.emos_sid)){aW=ak.emos_sid}else{var bB=ax(ai);if(bB&&bB.length>0){var bx=bB.split(":");if(bx.length>0){aW=bx[0]}}}if(!aW){aW=o()}var bD=aW+":1:0:0";ap(ai,bD);var e=ax(ai);if(bD!==e){aW="NULL"}ak.emos_sid=aW;L=null;var bE=null;var bG=ax(ad);if(bG&&bG.length>0){var bw=bG.split(":");var bA=bw.length;if(bA>=3){L=bw[0];if(L==="undefined"){L=null}if(bA===3||bA===7){bE=("true"==bw[bA-2]);var i=aH(bw[bA-1]);if(i!=aE){bE=null}}}}if(bm(ak.emos_vid)){L=ak.emos_vid}if(!L){L=aW}if(bE==null){bE=aE>1?(Math.random()*aE<=1):true}bn(bE);var by=L+":1:0:0:0:"+bE+":"+aE;a9(ad,by,h*86400);var bz=ax(ad);if(by!==bz){L="NULL"}ak.emos_vid=L}function bn(e){if(u!=="p"){O=true}else{O=e}}function ax(bz){if(!bz){return null}var bw=ae.cookie.split(";");for(var by=0;by<bw.length;by++){var bx=bw[by];if(bx.charAt(0)==" "){bx=bx.substr(1)}var e=bz+"=";if(bx.substr(0,e.length)==e){return bx.substring(e.length)}}return null}function ap(e,i){a9(e,i,null)}function a9(i,bx,e){var bw=i+"="+bx+";path=/;";if(S){bw=bw+"domain="+S+";"}if(e){bw=bw+"max-age="+e+";expires="+new Date(new Date().getTime()+e*1000).toGMTString()+";"}ae.cookie=bw}function R(e){var i=e+"=;path=/;max-age=0;";if(S){i=i+"domain="+S+";"}ae.cookie=i}function o(){var bx=new Date().getTime();var bD=bx&4294967295;var bC=(bx/4294967296)&4294967295;var bB=[];bB.push(bC>>>8&255);bB.push(bC&255);bB.push(bD>>>24);bB.push(bD>>>16&255);bB.push(bD>>>8&255);bB.push(bD&255);for(var bz=0;bz<9;bz++){var e=65536*Math.random();bB.push(e>>>8&255);bB.push(e&255)}var bw=navigator.userAgent;if(bw){for(var by=0;by<bw.length;by++){var bA=6+(by%18);bB[bA]=(bB[bA]^bw.charCodeAt(by))&255}}return ay(bB)}function ab(by){var bx=0;var e=by.length;for(var bw=0;bw<e;bw++){bx+=by[bw]}by.push((bx&65280)>>8);by.push(bx&255);return by}function F(e){var i=[];for(var bx=0;bx<e.length;bx++){var bw=e.charCodeAt(bx);if(bw<128){if(bw>=32||bw==9){i.push(bw)}}else{if((bw>127)&&(bw<2048)){i.push((bw>>6)|192);i.push((bw&63)|128)}else{i.push((bw>>12)|224);i.push(((bw>>6)&63)|128);i.push((bw&63)|128)}}}return i}var bl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*_";function ay(bA){var bx=bl,by=[],bw=0,e=bA.length;if((e%3)==1){bA.push(0);bA.push(0)}else{if((e%3)==2){bA.push(0)}}var bz=bA.length;while(bw<bz){by.push(bx.charAt(bA[bw]>>2));by.push(bx.charAt(((bA[bw]&3)<<4)|(bA[bw+1]>>4)));by.push(bx.charAt(((bA[bw+1]&15)<<2)|(bA[bw+2]>>6)));by.push(bx.charAt(bA[bw+2]&63));bw+=3}if((e%3)==1){by[by.length-1]=by[by.length-2]=""}if((e%3)==2){by[by.length-1]=""}return by.join("")}function a6(bE,bC,bz){var bG=bv(bC);var bx=l(bG,3);var i=m(bG,false);if(bx){bE.ref=bx}for(var bA in ar){if(bz[bA]){bE[ar[bA]]=bz[bA]}}if(bC.cookie||bE.source){return}if(!bu(bC,"customMktDetect")){var bH=bu(bC,"customCampaign");var bF=bu(bC,"customSource");if(bz.refID){bH=bz.refID;if(bz.emsrc){bF=bz.emsrc}}if(bH){if(bF){if(bF=="kw"){bz.adword=bH}else{if(bF=="nl"){bz.newsletter=bH}else{bz.campaign=bH}}}else{bF="cp";bz.campaign=bH}}if(bz.campaign){var e=bF?bF:"cp";if(bF&&!aq[bF]){aq[bF]=aq.cp}var bw=aC(bE,bC,bz,e);bw.campaign=bz.campaign;if(bx){bw.ref=bx}aQ(i,bw);return}if(bz.newsletter||bz.ecmId){var bD=aC(bE,bC,bz,"nl");if(bz.newsletter){bD.news=bz.newsletter}if(bz.ecmId){bD.newsmid=bz.ecmId}return}if(bz.adword||(a5&&bz.gclid)){var bB=aC(bE,bC,bz,"kw");var by=bz.adword;if(bz.gclid){if(!by){by="google auto tagging"}bB.gclid=bz.gclid}if(by){bB.adword=by}if(bx){bB.ref=bx}aQ(i,bB);aa(bB,null,true,bx,bz,i);return}}if(bG===null||bG.length===0){if(au(bE)){return}aC(bE,bC,bz,"direct");return}if(P(bx)){if(au(bE)){return}bE.ref=l(bG,-1);bE.source="intern";return}if(aa(bE,bC,false,bx,bz,i)){return}aC(bE,bC,bz,"ref").ref=bx}function aQ(bw,i){var e=bw.url?aZ(bw.url).substring(0,127):null;if(e){i.refUrl=e}}function aC(bw,e,by,bx){if(aq[bx]){if(!e.cookie){e.cookie={}}var i=e.cookie;e.emcl=aq[bx];bf(a8,by,bx,i);i.source=bx;return i}else{bw.source=bx;return bw}}function bf(e,bw,bx,i){if(e.all){V(e.all,bw,i)}if(e[bx]){V(e[bx],bw,i)}}function V(bz,by,bx){for(var bw=0;bw<bz.length;bw++){var e=by[bz[bw]];if(e){bx[bz[bw]]=e}}}function au(i){var e=ax(bc);if(e&&e.length>0){i.source="cp";i.campaign=aZ(e);return true}return false}function H(bw,i){if(i.cookie&&!(aL&&az)){ao(bw,i.cookie);bw.postconv="0"}if(K&&az){if(i.cookie){var by=null;if(i.emcl){by=aH(i.emcl)}if(!by){by=al}by=by*86400;a9(T,av(i.cookie)+"&ccbt="+Math.floor(new Date().getTime()/1000),by)}else{var bx=ax(T);if(bx&&bx.length>0){var e=a2(bx);bw.postconv="1";e.ccbtd=Math.floor(new Date().getTime()/1000)-aH(e.ccbt);delete e.ccbt;ao(bw,e)}}}}function Z(){var bB=ax(be);if(bB&&bB.length>0){var bz=new Date().getTime();bB=aZ(bB);var bw=[];var e=bB.split("@");for(var bx=0;bx<e.length;bx++){if(e[bx]){var by=a2(e[bx]);var bA=aH(by.t);if(isFinite(bA)){by.td=bz-bA;delete by.t}bw.push(av(by))}}return bw.join("@")}return null}function P(e){return(e.split("/")[2]==location.host)}var aw=[["q",null,"ie","start",1],["p",null,null,"b",1],["su",null,null,"pageIndex",10],["query",null,null],["qry_str",null,null],["begriff",null,null],["words",null,null],["encquery",null,null],["qt",null,null],["terms",null,null],["text",/yandex\./g,null],["wd",/\.baidu\./g,null],["w",/\.soso\./g,null],["searchfor",/\.ask\./g,null],["searchfor",/\.ask-tb\./g,null],[null,/www\.google\./g,null],[null,/images\.google\./g,null],[null,/duckduckgo\./g,null],[null,/ixquick\./g,null],[null,/startpage\./g,null],[null,/search\.yahoo\.com/g,null],[null,/www\.ecosia\.org/g,null],[null,/googlequicksearchbox/g,null]];function aa(bE,bC,bB,bx,bI,e){if(g){for(var bz=0;bz<g.length;bz++){if(bx.indexOf(g[bz])>=0){return false}}}for(var bA=0;bA<aw.length;bA++){var by=aw[bA];var bw=by[1];if(bw===null||bx.search(bw)>=0){var bF=(by[0])?e[by[0]]:null;if(!bF&&bw!==null){bF="not provided"}if(bF){var bD=bB?bE:aC(bE,bC,bI,"suma");var bH=by[2];if(bH&&e[bH]){bD.smqpe=e[bH];bD.smqp=bF}else{bD.smqp=aZ(bF)}if(by.length==5&&e[by[3]]){var bG=aH(e[by[3]]);if(!isNaN(bG)){bD.smstart=bG*by[4]}}if(!bB&&bx){bD.ref=bx}return true}}}return false}function aM(bx,bz,e){var bw=aD(bz,e);if(bw){if(!bw[3]){var i=bx.ec_Event;if(f(i)&&i.length>0){var by=i[0];if(bp(by)){bw[3]=(G(by))?by[br]:by.pid}}}bx.crossData=[bw]}}function aD(bx,e){var i=bu(e,"crossData");if(f(i)&&typeof i[0]=="string"){return i}var bw=bu(e,"emcs0");if(bw){return[bw,bu(e,"emcs1"),bu(e,"emcs2"),bu(e,"emcs3")]}if(bx.emcs0){return[bx.emcs0,bx.emcs1,bx.emcs2,bx.emcs3]}return null}var I=["uk","tr","br"];var bj={at:["co"],jp:["co","ac","go","ne","or"],au:["com","org","net","info"]};function bh(i,bw){if(bk(I,i)){return 3}var e=bj[i];if(e&&bk(e,bw)){return 3}return 2}function bk(bx,bw){for(var e=0;e<bx.length;e++){if(bx[e]==bw){return true}}return false}function aP(){if(S===null){S=af(bg.location.hostname)}}function af(by){var e=by.split(".");var bA=e[e.length-1];var bB=e[e.length-2];var bx=bh(bA,bB);if(isNaN(aH(bA))&&e.length>=bx){var bz="";for(var bw=e.length-bx;bw<e.length;bw++){bz+=("."+e[bw])}return bz}else{return by}}function ao(bw,i){for(var e in i){bw[e]=i[e]}}function w(i,e){if(!C){bo.push([i,e]);return}i.emosV=EMOS_VERSION;i.plReqId=C;s(i,e,o())}function bb(){var e={};ao(e,DFLTS);if(ak.defaults){ao(e,ak.defaults)}return e}function U(bw){if(!aJ){return true}if(j()){return true}var bB=bw.config;if(bB){delete bw.config}else{bB={}}if(f(ak.plugins)){var bF=ak.plugins;for(var bz=0;bz<bF.length;bz++){try{bF[bz](bw,aN,bB)}catch(bD){}}}if((bw.type&&bw.type=="event")||(bB.type&&bB.type=="event")){if(bw.type){delete bw.type}w(bw,bB);return true}var bE=bb();ao(bE,bw);var bx=bi(bB);a6(bE,bB,bx);H(bE,bB);var bA=Z();if(bA){bE.pvdata=bA}aM(bE,bx,bB);ao(bE,bw);if(!bE.content){bE.content="HTML-Title/"+ae.title}aV(bE);aj(bE,bB);if(f(bB.cb)){var bC=bB.cb;for(var by=0;by<bC.length;by++){try{bC[by](L,aW,C)}catch(bD){}}}Q();return true}function Q(){for(var e=0;e<bo.length;e++){var i=bo[e];w(i[0],i[1])}}var N=function(e){x.push(e)};ak.send=function(e){return N(e)};if(f(ak.stored)){for(var Y=0;Y<ak.stored.length;Y++){N(ak.stored[Y])}delete ak.stored}function am(){if(t&&!a){if(j()){bd();return}var e=ae.getElementsByTagName("script");var bx=e[e.length-1];var bw=("async" in bx);if(bw){var i=ae.createElement("script");i.type="text/javascript";i.async=true;i.crossorigin="anonymous";var by=bg.setTimeout(function(){var bz=i.parentNode;if(bz){bz.removeChild(i)}i.src=""},b);ak.initWithVid=function(bz){a=bz;bg.clearTimeout(by);bd();var bA=i.parentNode;if(bA){bA.removeChild(i)}};i.onerror=function(){ak.initWithVid(null)};i.src="https://"+an+"/jsid/"+at;bx.parentNode.insertBefore(i,bx)}else{bd()}}else{bd()}}function aX(){return ae.visibilityState}function bd(){if(aX()==="prerender"){ae.addEventListener("visibilitychange",function(){var e=aX();if(e!=="prerender"&&e!=="unloaded"){ah()}},false)}else{ah()}}function ah(){N=U;for(var e=0;e<x.length;e++){N(x[e])}}function m(bC,bx){var bB={};if(!bC){return bB}var bA=bC.indexOf("?");if(bA>=0){bC=bC.substr(bA+1)}var by=bC.split("&");for(var bw=0;bw<by.length;bw++){var bz=by[bw].split("=");var e=bz[0];if(e){if(bz[1]){if(bx){bB[e]=aZ(bz[1])}else{bB[e]=bz[1]}}else{bB[e]=""}}}return bB}function aF(){aP();B();am()}aF()})(window,document);

(function(){var PPF_VERSION="4",f=e("PPF_SR",20),d=e("PPF_CUTOFF",60);function e(n,m){var k=window.emos3;if(c(k)){return m}var l=k[n];return c(l)?m:l}function c(k){return typeof k==="undefined"}function i(){if(Math.random()*f>1){return null}if(!window.performance){return null}var v=window.performance.timing;if(!v){return null}if(typeof window.performance.getEntries!=="function"){return null}if(!v.domComplete){return null}if(!v.loadEventStart){return null}var q=v.responseEnd-v.responseStart;if(q==2147483647){return null}var C=v.loadEventStart-v.navigationStart;if(C>d*1000){return null}var n={};var l=n.perf=[];l.push(v.redirectEnd-v.redirectStart);l.push(v.domainLookupEnd-v.domainLookupStart);l.push(v.connectEnd-v.connectStart);l.push(v.responseStart-v.requestStart);l.push(q);l.push(v.responseEnd-v.navigationStart);l.push(v.domComplete-v.domLoading);l.push(C);var u=window.performance.getEntries();var s={};for(var y=0;y<u.length;y++){var m=u[y];var w=m.startTime;var z=m.responseEnd;var t=m.duration;if(!isNaN(w)&&!isNaN(z)&&!isNaN(t)){var o;var p=m.initiatorType;if(p=="img"){o=p}else{if(p=="script"){o=p}else{if(p=="subdocument"){o="iframe"}else{if(p=="iframe"){o=p}else{if(p=="xmlhttprequest"){o=p}else{o=j(m.name)}}}}}var k=s[o];if(!k){k={};k.duration=t;k.count=1;k.ptime=[[w,z]];s[o]=k}else{k.duration=k.duration+t;k.count=k.count+1;b(k.ptime,w,z)}}}var r=n.perfr=[];for(var A in s){var x=[];r.push(x);var B=s[A];x.push(A);x.push(B.count);x.push(Math.round(B.duration));x.push(Math.round(h(B.ptime)))}return n}function h(n){var m=0;for(var l=0;l<n.length;l++){var k=n[l];m=m+(k[1]-k[0])}return m}function b(r,o,l){for(var n=0;n<r.length;n++){var q=r[n];var k=q[0];var p=q[1];if(o<=p&&l>=k){q[0]=Math.min(o,k);q[1]=Math.max(l,p);var m=r.slice(n+1);r.length=n+1;a(r,m);return}}r.push([o,l])}function a(n,k){for(var l=0;l<k.length;l++){var m=k[l];b(n,m[0],m[1])}}function j(m){var k=m.lastIndexOf("?");if(k<0){k=m.lastIndexOf("#")}if(k>=0){m=m.substring(0,k)}var l=m.lastIndexOf(".");if(l>=0){var n=m.substr(l+1);if(n==="js"){return"script"}else{if(n==="css"){return"css"}else{if(["ico","jpg","jp2","jps","bmp","tiff","mng","png","gif","webp","jxr","hdp","wdp","svg"].indexOf(n)>0){return"img"}}}}return"unknown"}function g(){var k=i();if(k==null){return}k.type="event";k.perfv=PPF_VERSION;if(!window.emos3){window.emos3={stored:[],send:function(l){this.stored.push(l)}}}emos3.send(k)}if(window.addEventListener){if(document.readyState==="complete"){g()}else{window.addEventListener("load",g)}}})();