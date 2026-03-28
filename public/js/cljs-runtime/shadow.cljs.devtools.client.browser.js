goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21928 = arguments.length;
var i__5877__auto___21929 = (0);
while(true){
if((i__5877__auto___21929 < len__5876__auto___21928)){
args__5882__auto__.push((arguments[i__5877__auto___21929]));

var G__21930 = (i__5877__auto___21929 + (1));
i__5877__auto___21929 = G__21930;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21611){
var G__21612 = cljs.core.first(seq21611);
var seq21611__$1 = cljs.core.next(seq21611);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21612,seq21611__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21630 = cljs.core.seq(sources);
var chunk__21631 = null;
var count__21632 = (0);
var i__21633 = (0);
while(true){
if((i__21633 < count__21632)){
var map__21652 = chunk__21631.cljs$core$IIndexed$_nth$arity$2(null,i__21633);
var map__21652__$1 = cljs.core.__destructure_map(map__21652);
var src = map__21652__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21652__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21655){var e_21931 = e21655;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21931);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21931.message))));
}

var G__21932 = seq__21630;
var G__21933 = chunk__21631;
var G__21934 = count__21632;
var G__21935 = (i__21633 + (1));
seq__21630 = G__21932;
chunk__21631 = G__21933;
count__21632 = G__21934;
i__21633 = G__21935;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21630);
if(temp__5823__auto__){
var seq__21630__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21630__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21630__$1);
var G__21936 = cljs.core.chunk_rest(seq__21630__$1);
var G__21937 = c__5673__auto__;
var G__21938 = cljs.core.count(c__5673__auto__);
var G__21939 = (0);
seq__21630 = G__21936;
chunk__21631 = G__21937;
count__21632 = G__21938;
i__21633 = G__21939;
continue;
} else {
var map__21656 = cljs.core.first(seq__21630__$1);
var map__21656__$1 = cljs.core.__destructure_map(map__21656);
var src = map__21656__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21656__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21657){var e_21940 = e21657;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21940);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21940.message))));
}

var G__21941 = cljs.core.next(seq__21630__$1);
var G__21942 = null;
var G__21943 = (0);
var G__21944 = (0);
seq__21630 = G__21941;
chunk__21631 = G__21942;
count__21632 = G__21943;
i__21633 = G__21944;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21658 = cljs.core.seq(js_requires);
var chunk__21659 = null;
var count__21660 = (0);
var i__21661 = (0);
while(true){
if((i__21661 < count__21660)){
var js_ns = chunk__21659.cljs$core$IIndexed$_nth$arity$2(null,i__21661);
var require_str_21945 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21945);


var G__21946 = seq__21658;
var G__21947 = chunk__21659;
var G__21948 = count__21660;
var G__21949 = (i__21661 + (1));
seq__21658 = G__21946;
chunk__21659 = G__21947;
count__21660 = G__21948;
i__21661 = G__21949;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21658);
if(temp__5823__auto__){
var seq__21658__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21658__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21658__$1);
var G__21950 = cljs.core.chunk_rest(seq__21658__$1);
var G__21951 = c__5673__auto__;
var G__21952 = cljs.core.count(c__5673__auto__);
var G__21953 = (0);
seq__21658 = G__21950;
chunk__21659 = G__21951;
count__21660 = G__21952;
i__21661 = G__21953;
continue;
} else {
var js_ns = cljs.core.first(seq__21658__$1);
var require_str_21954 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21954);


var G__21955 = cljs.core.next(seq__21658__$1);
var G__21956 = null;
var G__21957 = (0);
var G__21958 = (0);
seq__21658 = G__21955;
chunk__21659 = G__21956;
count__21660 = G__21957;
i__21661 = G__21958;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21663){
var map__21664 = p__21663;
var map__21664__$1 = cljs.core.__destructure_map(map__21664);
var msg = map__21664__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21664__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21665(s__21666){
return (new cljs.core.LazySeq(null,(function (){
var s__21666__$1 = s__21666;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21666__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21671 = cljs.core.first(xs__6383__auto__);
var map__21671__$1 = cljs.core.__destructure_map(map__21671);
var src = map__21671__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21671__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21666__$1,map__21671,map__21671__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21664,map__21664__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21665_$_iter__21667(s__21668){
return (new cljs.core.LazySeq(null,((function (s__21666__$1,map__21671,map__21671__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21664,map__21664__$1,msg,info,reload_info){
return (function (){
var s__21668__$1 = s__21668;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21668__$1);
if(temp__5823__auto____$1){
var s__21668__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21668__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21668__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21670 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21669 = (0);
while(true){
if((i__21669 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21669);
cljs.core.chunk_append(b__21670,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21959 = (i__21669 + (1));
i__21669 = G__21959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21670),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21665_$_iter__21667(cljs.core.chunk_rest(s__21668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21670),null);
}
} else {
var warning = cljs.core.first(s__21668__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21665_$_iter__21667(cljs.core.rest(s__21668__$2)));
}
} else {
return null;
}
break;
}
});})(s__21666__$1,map__21671,map__21671__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21664,map__21664__$1,msg,info,reload_info))
,null,null));
});})(s__21666__$1,map__21671,map__21671__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21664,map__21664__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21665(cljs.core.rest(s__21666__$1)));
} else {
var G__21960 = cljs.core.rest(s__21666__$1);
s__21666__$1 = G__21960;
continue;
}
} else {
var G__21961 = cljs.core.rest(s__21666__$1);
s__21666__$1 = G__21961;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21672_21962 = cljs.core.seq(warnings);
var chunk__21673_21963 = null;
var count__21674_21964 = (0);
var i__21675_21965 = (0);
while(true){
if((i__21675_21965 < count__21674_21964)){
var map__21678_21966 = chunk__21673_21963.cljs$core$IIndexed$_nth$arity$2(null,i__21675_21965);
var map__21678_21967__$1 = cljs.core.__destructure_map(map__21678_21966);
var w_21968 = map__21678_21967__$1;
var msg_21969__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678_21967__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678_21967__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678_21967__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678_21967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21972)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21970)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21971)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21969__$1)));


var G__21973 = seq__21672_21962;
var G__21974 = chunk__21673_21963;
var G__21975 = count__21674_21964;
var G__21976 = (i__21675_21965 + (1));
seq__21672_21962 = G__21973;
chunk__21673_21963 = G__21974;
count__21674_21964 = G__21975;
i__21675_21965 = G__21976;
continue;
} else {
var temp__5823__auto___21977 = cljs.core.seq(seq__21672_21962);
if(temp__5823__auto___21977){
var seq__21672_21978__$1 = temp__5823__auto___21977;
if(cljs.core.chunked_seq_QMARK_(seq__21672_21978__$1)){
var c__5673__auto___21979 = cljs.core.chunk_first(seq__21672_21978__$1);
var G__21980 = cljs.core.chunk_rest(seq__21672_21978__$1);
var G__21981 = c__5673__auto___21979;
var G__21982 = cljs.core.count(c__5673__auto___21979);
var G__21983 = (0);
seq__21672_21962 = G__21980;
chunk__21673_21963 = G__21981;
count__21674_21964 = G__21982;
i__21675_21965 = G__21983;
continue;
} else {
var map__21679_21984 = cljs.core.first(seq__21672_21978__$1);
var map__21679_21985__$1 = cljs.core.__destructure_map(map__21679_21984);
var w_21986 = map__21679_21985__$1;
var msg_21987__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21679_21985__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21679_21985__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21679_21985__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21679_21985__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21990)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21988)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21989)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21987__$1)));


var G__21991 = cljs.core.next(seq__21672_21978__$1);
var G__21992 = null;
var G__21993 = (0);
var G__21994 = (0);
seq__21672_21962 = G__21991;
chunk__21673_21963 = G__21992;
count__21674_21964 = G__21993;
i__21675_21965 = G__21994;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21662_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21662_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21681 = node_uri;
G__21681.setQuery(null);

G__21681.setPath(new$);

return G__21681;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21682){
var map__21683 = p__21682;
var map__21683__$1 = cljs.core.__destructure_map(map__21683);
var msg = map__21683__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21684 = cljs.core.seq(updates);
var chunk__21686 = null;
var count__21687 = (0);
var i__21688 = (0);
while(true){
if((i__21688 < count__21687)){
var path = chunk__21686.cljs$core$IIndexed$_nth$arity$2(null,i__21688);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21798_21995 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21802_21996 = null;
var count__21803_21997 = (0);
var i__21804_21998 = (0);
while(true){
if((i__21804_21998 < count__21803_21997)){
var node_21999 = chunk__21802_21996.cljs$core$IIndexed$_nth$arity$2(null,i__21804_21998);
if(cljs.core.not(node_21999.shadow$old)){
var path_match_22000 = shadow.cljs.devtools.client.browser.match_paths(node_21999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22000)){
var new_link_22001 = (function (){var G__21830 = node_21999.cloneNode(true);
G__21830.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22000)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21830;
})();
(node_21999.shadow$old = true);

(new_link_22001.onload = ((function (seq__21798_21995,chunk__21802_21996,count__21803_21997,i__21804_21998,seq__21684,chunk__21686,count__21687,i__21688,new_link_22001,path_match_22000,node_21999,path,map__21683,map__21683__$1,msg,updates,reload_info){
return (function (e){
var seq__21831_22002 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21833_22003 = null;
var count__21834_22004 = (0);
var i__21835_22005 = (0);
while(true){
if((i__21835_22005 < count__21834_22004)){
var map__21839_22006 = chunk__21833_22003.cljs$core$IIndexed$_nth$arity$2(null,i__21835_22005);
var map__21839_22007__$1 = cljs.core.__destructure_map(map__21839_22006);
var task_22008 = map__21839_22007__$1;
var fn_str_22009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839_22007__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839_22007__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22011 = goog.getObjectByName(fn_str_22009,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22010)));

(fn_obj_22011.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22011.cljs$core$IFn$_invoke$arity$2(path,new_link_22001) : fn_obj_22011.call(null,path,new_link_22001));


var G__22012 = seq__21831_22002;
var G__22013 = chunk__21833_22003;
var G__22014 = count__21834_22004;
var G__22015 = (i__21835_22005 + (1));
seq__21831_22002 = G__22012;
chunk__21833_22003 = G__22013;
count__21834_22004 = G__22014;
i__21835_22005 = G__22015;
continue;
} else {
var temp__5823__auto___22016 = cljs.core.seq(seq__21831_22002);
if(temp__5823__auto___22016){
var seq__21831_22017__$1 = temp__5823__auto___22016;
if(cljs.core.chunked_seq_QMARK_(seq__21831_22017__$1)){
var c__5673__auto___22018 = cljs.core.chunk_first(seq__21831_22017__$1);
var G__22019 = cljs.core.chunk_rest(seq__21831_22017__$1);
var G__22020 = c__5673__auto___22018;
var G__22021 = cljs.core.count(c__5673__auto___22018);
var G__22022 = (0);
seq__21831_22002 = G__22019;
chunk__21833_22003 = G__22020;
count__21834_22004 = G__22021;
i__21835_22005 = G__22022;
continue;
} else {
var map__21840_22023 = cljs.core.first(seq__21831_22017__$1);
var map__21840_22024__$1 = cljs.core.__destructure_map(map__21840_22023);
var task_22025 = map__21840_22024__$1;
var fn_str_22026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840_22024__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840_22024__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22028 = goog.getObjectByName(fn_str_22026,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22027)));

(fn_obj_22028.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22028.cljs$core$IFn$_invoke$arity$2(path,new_link_22001) : fn_obj_22028.call(null,path,new_link_22001));


var G__22029 = cljs.core.next(seq__21831_22017__$1);
var G__22030 = null;
var G__22031 = (0);
var G__22032 = (0);
seq__21831_22002 = G__22029;
chunk__21833_22003 = G__22030;
count__21834_22004 = G__22031;
i__21835_22005 = G__22032;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21999);
});})(seq__21798_21995,chunk__21802_21996,count__21803_21997,i__21804_21998,seq__21684,chunk__21686,count__21687,i__21688,new_link_22001,path_match_22000,node_21999,path,map__21683,map__21683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22000], 0));

goog.dom.insertSiblingAfter(new_link_22001,node_21999);


var G__22033 = seq__21798_21995;
var G__22034 = chunk__21802_21996;
var G__22035 = count__21803_21997;
var G__22036 = (i__21804_21998 + (1));
seq__21798_21995 = G__22033;
chunk__21802_21996 = G__22034;
count__21803_21997 = G__22035;
i__21804_21998 = G__22036;
continue;
} else {
var G__22037 = seq__21798_21995;
var G__22038 = chunk__21802_21996;
var G__22039 = count__21803_21997;
var G__22040 = (i__21804_21998 + (1));
seq__21798_21995 = G__22037;
chunk__21802_21996 = G__22038;
count__21803_21997 = G__22039;
i__21804_21998 = G__22040;
continue;
}
} else {
var G__22041 = seq__21798_21995;
var G__22042 = chunk__21802_21996;
var G__22043 = count__21803_21997;
var G__22044 = (i__21804_21998 + (1));
seq__21798_21995 = G__22041;
chunk__21802_21996 = G__22042;
count__21803_21997 = G__22043;
i__21804_21998 = G__22044;
continue;
}
} else {
var temp__5823__auto___22045 = cljs.core.seq(seq__21798_21995);
if(temp__5823__auto___22045){
var seq__21798_22046__$1 = temp__5823__auto___22045;
if(cljs.core.chunked_seq_QMARK_(seq__21798_22046__$1)){
var c__5673__auto___22047 = cljs.core.chunk_first(seq__21798_22046__$1);
var G__22048 = cljs.core.chunk_rest(seq__21798_22046__$1);
var G__22049 = c__5673__auto___22047;
var G__22050 = cljs.core.count(c__5673__auto___22047);
var G__22051 = (0);
seq__21798_21995 = G__22048;
chunk__21802_21996 = G__22049;
count__21803_21997 = G__22050;
i__21804_21998 = G__22051;
continue;
} else {
var node_22052 = cljs.core.first(seq__21798_22046__$1);
if(cljs.core.not(node_22052.shadow$old)){
var path_match_22053 = shadow.cljs.devtools.client.browser.match_paths(node_22052.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22053)){
var new_link_22054 = (function (){var G__21841 = node_22052.cloneNode(true);
G__21841.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22053)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21841;
})();
(node_22052.shadow$old = true);

(new_link_22054.onload = ((function (seq__21798_21995,chunk__21802_21996,count__21803_21997,i__21804_21998,seq__21684,chunk__21686,count__21687,i__21688,new_link_22054,path_match_22053,node_22052,seq__21798_22046__$1,temp__5823__auto___22045,path,map__21683,map__21683__$1,msg,updates,reload_info){
return (function (e){
var seq__21842_22055 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21844_22056 = null;
var count__21845_22057 = (0);
var i__21846_22058 = (0);
while(true){
if((i__21846_22058 < count__21845_22057)){
var map__21850_22059 = chunk__21844_22056.cljs$core$IIndexed$_nth$arity$2(null,i__21846_22058);
var map__21850_22060__$1 = cljs.core.__destructure_map(map__21850_22059);
var task_22061 = map__21850_22060__$1;
var fn_str_22062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21850_22060__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21850_22060__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22064 = goog.getObjectByName(fn_str_22062,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22063)));

(fn_obj_22064.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22064.cljs$core$IFn$_invoke$arity$2(path,new_link_22054) : fn_obj_22064.call(null,path,new_link_22054));


var G__22065 = seq__21842_22055;
var G__22066 = chunk__21844_22056;
var G__22067 = count__21845_22057;
var G__22068 = (i__21846_22058 + (1));
seq__21842_22055 = G__22065;
chunk__21844_22056 = G__22066;
count__21845_22057 = G__22067;
i__21846_22058 = G__22068;
continue;
} else {
var temp__5823__auto___22069__$1 = cljs.core.seq(seq__21842_22055);
if(temp__5823__auto___22069__$1){
var seq__21842_22070__$1 = temp__5823__auto___22069__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21842_22070__$1)){
var c__5673__auto___22071 = cljs.core.chunk_first(seq__21842_22070__$1);
var G__22072 = cljs.core.chunk_rest(seq__21842_22070__$1);
var G__22073 = c__5673__auto___22071;
var G__22074 = cljs.core.count(c__5673__auto___22071);
var G__22075 = (0);
seq__21842_22055 = G__22072;
chunk__21844_22056 = G__22073;
count__21845_22057 = G__22074;
i__21846_22058 = G__22075;
continue;
} else {
var map__21851_22076 = cljs.core.first(seq__21842_22070__$1);
var map__21851_22077__$1 = cljs.core.__destructure_map(map__21851_22076);
var task_22078 = map__21851_22077__$1;
var fn_str_22079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21851_22077__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21851_22077__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22081 = goog.getObjectByName(fn_str_22079,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22080)));

(fn_obj_22081.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22081.cljs$core$IFn$_invoke$arity$2(path,new_link_22054) : fn_obj_22081.call(null,path,new_link_22054));


var G__22082 = cljs.core.next(seq__21842_22070__$1);
var G__22083 = null;
var G__22084 = (0);
var G__22085 = (0);
seq__21842_22055 = G__22082;
chunk__21844_22056 = G__22083;
count__21845_22057 = G__22084;
i__21846_22058 = G__22085;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22052);
});})(seq__21798_21995,chunk__21802_21996,count__21803_21997,i__21804_21998,seq__21684,chunk__21686,count__21687,i__21688,new_link_22054,path_match_22053,node_22052,seq__21798_22046__$1,temp__5823__auto___22045,path,map__21683,map__21683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22053], 0));

goog.dom.insertSiblingAfter(new_link_22054,node_22052);


var G__22086 = cljs.core.next(seq__21798_22046__$1);
var G__22087 = null;
var G__22088 = (0);
var G__22089 = (0);
seq__21798_21995 = G__22086;
chunk__21802_21996 = G__22087;
count__21803_21997 = G__22088;
i__21804_21998 = G__22089;
continue;
} else {
var G__22090 = cljs.core.next(seq__21798_22046__$1);
var G__22091 = null;
var G__22092 = (0);
var G__22093 = (0);
seq__21798_21995 = G__22090;
chunk__21802_21996 = G__22091;
count__21803_21997 = G__22092;
i__21804_21998 = G__22093;
continue;
}
} else {
var G__22094 = cljs.core.next(seq__21798_22046__$1);
var G__22095 = null;
var G__22096 = (0);
var G__22097 = (0);
seq__21798_21995 = G__22094;
chunk__21802_21996 = G__22095;
count__21803_21997 = G__22096;
i__21804_21998 = G__22097;
continue;
}
}
} else {
}
}
break;
}


var G__22098 = seq__21684;
var G__22099 = chunk__21686;
var G__22100 = count__21687;
var G__22101 = (i__21688 + (1));
seq__21684 = G__22098;
chunk__21686 = G__22099;
count__21687 = G__22100;
i__21688 = G__22101;
continue;
} else {
var G__22102 = seq__21684;
var G__22103 = chunk__21686;
var G__22104 = count__21687;
var G__22105 = (i__21688 + (1));
seq__21684 = G__22102;
chunk__21686 = G__22103;
count__21687 = G__22104;
i__21688 = G__22105;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21684);
if(temp__5823__auto__){
var seq__21684__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21684__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21684__$1);
var G__22106 = cljs.core.chunk_rest(seq__21684__$1);
var G__22107 = c__5673__auto__;
var G__22108 = cljs.core.count(c__5673__auto__);
var G__22109 = (0);
seq__21684 = G__22106;
chunk__21686 = G__22107;
count__21687 = G__22108;
i__21688 = G__22109;
continue;
} else {
var path = cljs.core.first(seq__21684__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21852_22110 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21856_22111 = null;
var count__21857_22112 = (0);
var i__21858_22113 = (0);
while(true){
if((i__21858_22113 < count__21857_22112)){
var node_22114 = chunk__21856_22111.cljs$core$IIndexed$_nth$arity$2(null,i__21858_22113);
if(cljs.core.not(node_22114.shadow$old)){
var path_match_22115 = shadow.cljs.devtools.client.browser.match_paths(node_22114.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22115)){
var new_link_22116 = (function (){var G__21884 = node_22114.cloneNode(true);
G__21884.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22115)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21884;
})();
(node_22114.shadow$old = true);

(new_link_22116.onload = ((function (seq__21852_22110,chunk__21856_22111,count__21857_22112,i__21858_22113,seq__21684,chunk__21686,count__21687,i__21688,new_link_22116,path_match_22115,node_22114,path,seq__21684__$1,temp__5823__auto__,map__21683,map__21683__$1,msg,updates,reload_info){
return (function (e){
var seq__21885_22117 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21887_22118 = null;
var count__21888_22119 = (0);
var i__21889_22120 = (0);
while(true){
if((i__21889_22120 < count__21888_22119)){
var map__21893_22121 = chunk__21887_22118.cljs$core$IIndexed$_nth$arity$2(null,i__21889_22120);
var map__21893_22122__$1 = cljs.core.__destructure_map(map__21893_22121);
var task_22123 = map__21893_22122__$1;
var fn_str_22124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21893_22122__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21893_22122__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22126 = goog.getObjectByName(fn_str_22124,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22125)));

(fn_obj_22126.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22126.cljs$core$IFn$_invoke$arity$2(path,new_link_22116) : fn_obj_22126.call(null,path,new_link_22116));


var G__22127 = seq__21885_22117;
var G__22128 = chunk__21887_22118;
var G__22129 = count__21888_22119;
var G__22130 = (i__21889_22120 + (1));
seq__21885_22117 = G__22127;
chunk__21887_22118 = G__22128;
count__21888_22119 = G__22129;
i__21889_22120 = G__22130;
continue;
} else {
var temp__5823__auto___22131__$1 = cljs.core.seq(seq__21885_22117);
if(temp__5823__auto___22131__$1){
var seq__21885_22132__$1 = temp__5823__auto___22131__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21885_22132__$1)){
var c__5673__auto___22133 = cljs.core.chunk_first(seq__21885_22132__$1);
var G__22134 = cljs.core.chunk_rest(seq__21885_22132__$1);
var G__22135 = c__5673__auto___22133;
var G__22136 = cljs.core.count(c__5673__auto___22133);
var G__22137 = (0);
seq__21885_22117 = G__22134;
chunk__21887_22118 = G__22135;
count__21888_22119 = G__22136;
i__21889_22120 = G__22137;
continue;
} else {
var map__21894_22138 = cljs.core.first(seq__21885_22132__$1);
var map__21894_22139__$1 = cljs.core.__destructure_map(map__21894_22138);
var task_22140 = map__21894_22139__$1;
var fn_str_22141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21894_22139__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21894_22139__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22143 = goog.getObjectByName(fn_str_22141,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22142)));

(fn_obj_22143.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22143.cljs$core$IFn$_invoke$arity$2(path,new_link_22116) : fn_obj_22143.call(null,path,new_link_22116));


var G__22144 = cljs.core.next(seq__21885_22132__$1);
var G__22145 = null;
var G__22146 = (0);
var G__22147 = (0);
seq__21885_22117 = G__22144;
chunk__21887_22118 = G__22145;
count__21888_22119 = G__22146;
i__21889_22120 = G__22147;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22114);
});})(seq__21852_22110,chunk__21856_22111,count__21857_22112,i__21858_22113,seq__21684,chunk__21686,count__21687,i__21688,new_link_22116,path_match_22115,node_22114,path,seq__21684__$1,temp__5823__auto__,map__21683,map__21683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22115], 0));

goog.dom.insertSiblingAfter(new_link_22116,node_22114);


var G__22148 = seq__21852_22110;
var G__22149 = chunk__21856_22111;
var G__22150 = count__21857_22112;
var G__22151 = (i__21858_22113 + (1));
seq__21852_22110 = G__22148;
chunk__21856_22111 = G__22149;
count__21857_22112 = G__22150;
i__21858_22113 = G__22151;
continue;
} else {
var G__22152 = seq__21852_22110;
var G__22153 = chunk__21856_22111;
var G__22154 = count__21857_22112;
var G__22155 = (i__21858_22113 + (1));
seq__21852_22110 = G__22152;
chunk__21856_22111 = G__22153;
count__21857_22112 = G__22154;
i__21858_22113 = G__22155;
continue;
}
} else {
var G__22156 = seq__21852_22110;
var G__22157 = chunk__21856_22111;
var G__22158 = count__21857_22112;
var G__22159 = (i__21858_22113 + (1));
seq__21852_22110 = G__22156;
chunk__21856_22111 = G__22157;
count__21857_22112 = G__22158;
i__21858_22113 = G__22159;
continue;
}
} else {
var temp__5823__auto___22160__$1 = cljs.core.seq(seq__21852_22110);
if(temp__5823__auto___22160__$1){
var seq__21852_22161__$1 = temp__5823__auto___22160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21852_22161__$1)){
var c__5673__auto___22162 = cljs.core.chunk_first(seq__21852_22161__$1);
var G__22163 = cljs.core.chunk_rest(seq__21852_22161__$1);
var G__22164 = c__5673__auto___22162;
var G__22165 = cljs.core.count(c__5673__auto___22162);
var G__22166 = (0);
seq__21852_22110 = G__22163;
chunk__21856_22111 = G__22164;
count__21857_22112 = G__22165;
i__21858_22113 = G__22166;
continue;
} else {
var node_22167 = cljs.core.first(seq__21852_22161__$1);
if(cljs.core.not(node_22167.shadow$old)){
var path_match_22168 = shadow.cljs.devtools.client.browser.match_paths(node_22167.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22168)){
var new_link_22169 = (function (){var G__21895 = node_22167.cloneNode(true);
G__21895.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22168)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21895;
})();
(node_22167.shadow$old = true);

(new_link_22169.onload = ((function (seq__21852_22110,chunk__21856_22111,count__21857_22112,i__21858_22113,seq__21684,chunk__21686,count__21687,i__21688,new_link_22169,path_match_22168,node_22167,seq__21852_22161__$1,temp__5823__auto___22160__$1,path,seq__21684__$1,temp__5823__auto__,map__21683,map__21683__$1,msg,updates,reload_info){
return (function (e){
var seq__21896_22170 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21898_22171 = null;
var count__21899_22172 = (0);
var i__21900_22173 = (0);
while(true){
if((i__21900_22173 < count__21899_22172)){
var map__21904_22174 = chunk__21898_22171.cljs$core$IIndexed$_nth$arity$2(null,i__21900_22173);
var map__21904_22175__$1 = cljs.core.__destructure_map(map__21904_22174);
var task_22176 = map__21904_22175__$1;
var fn_str_22177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904_22175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904_22175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22179 = goog.getObjectByName(fn_str_22177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22178)));

(fn_obj_22179.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22179.cljs$core$IFn$_invoke$arity$2(path,new_link_22169) : fn_obj_22179.call(null,path,new_link_22169));


var G__22180 = seq__21896_22170;
var G__22181 = chunk__21898_22171;
var G__22182 = count__21899_22172;
var G__22183 = (i__21900_22173 + (1));
seq__21896_22170 = G__22180;
chunk__21898_22171 = G__22181;
count__21899_22172 = G__22182;
i__21900_22173 = G__22183;
continue;
} else {
var temp__5823__auto___22184__$2 = cljs.core.seq(seq__21896_22170);
if(temp__5823__auto___22184__$2){
var seq__21896_22185__$1 = temp__5823__auto___22184__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21896_22185__$1)){
var c__5673__auto___22186 = cljs.core.chunk_first(seq__21896_22185__$1);
var G__22187 = cljs.core.chunk_rest(seq__21896_22185__$1);
var G__22188 = c__5673__auto___22186;
var G__22189 = cljs.core.count(c__5673__auto___22186);
var G__22190 = (0);
seq__21896_22170 = G__22187;
chunk__21898_22171 = G__22188;
count__21899_22172 = G__22189;
i__21900_22173 = G__22190;
continue;
} else {
var map__21905_22191 = cljs.core.first(seq__21896_22185__$1);
var map__21905_22192__$1 = cljs.core.__destructure_map(map__21905_22191);
var task_22193 = map__21905_22192__$1;
var fn_str_22194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905_22192__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905_22192__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22196 = goog.getObjectByName(fn_str_22194,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22195)));

(fn_obj_22196.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22196.cljs$core$IFn$_invoke$arity$2(path,new_link_22169) : fn_obj_22196.call(null,path,new_link_22169));


var G__22197 = cljs.core.next(seq__21896_22185__$1);
var G__22198 = null;
var G__22199 = (0);
var G__22200 = (0);
seq__21896_22170 = G__22197;
chunk__21898_22171 = G__22198;
count__21899_22172 = G__22199;
i__21900_22173 = G__22200;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22167);
});})(seq__21852_22110,chunk__21856_22111,count__21857_22112,i__21858_22113,seq__21684,chunk__21686,count__21687,i__21688,new_link_22169,path_match_22168,node_22167,seq__21852_22161__$1,temp__5823__auto___22160__$1,path,seq__21684__$1,temp__5823__auto__,map__21683,map__21683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22168], 0));

goog.dom.insertSiblingAfter(new_link_22169,node_22167);


var G__22201 = cljs.core.next(seq__21852_22161__$1);
var G__22202 = null;
var G__22203 = (0);
var G__22204 = (0);
seq__21852_22110 = G__22201;
chunk__21856_22111 = G__22202;
count__21857_22112 = G__22203;
i__21858_22113 = G__22204;
continue;
} else {
var G__22205 = cljs.core.next(seq__21852_22161__$1);
var G__22206 = null;
var G__22207 = (0);
var G__22208 = (0);
seq__21852_22110 = G__22205;
chunk__21856_22111 = G__22206;
count__21857_22112 = G__22207;
i__21858_22113 = G__22208;
continue;
}
} else {
var G__22209 = cljs.core.next(seq__21852_22161__$1);
var G__22210 = null;
var G__22211 = (0);
var G__22212 = (0);
seq__21852_22110 = G__22209;
chunk__21856_22111 = G__22210;
count__21857_22112 = G__22211;
i__21858_22113 = G__22212;
continue;
}
}
} else {
}
}
break;
}


var G__22213 = cljs.core.next(seq__21684__$1);
var G__22214 = null;
var G__22215 = (0);
var G__22216 = (0);
seq__21684 = G__22213;
chunk__21686 = G__22214;
count__21687 = G__22215;
i__21688 = G__22216;
continue;
} else {
var G__22217 = cljs.core.next(seq__21684__$1);
var G__22218 = null;
var G__22219 = (0);
var G__22220 = (0);
seq__21684 = G__22217;
chunk__21686 = G__22218;
count__21687 = G__22219;
i__21688 = G__22220;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21907 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21907) : success.call(null,G__21907));
}catch (e21906){var e = e21906;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21908,success,fail){
var map__21909 = p__21908;
var map__21909__$1 = cljs.core.__destructure_map(map__21909);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21911 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21911) : success.call(null,G__21911));
}catch (e21910){var e = e21910;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21912,done,error){
var map__21913 = p__21912;
var map__21913__$1 = cljs.core.__destructure_map(map__21913);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21913__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21914,done,error){
var map__21915 = p__21914;
var map__21915__$1 = cljs.core.__destructure_map(map__21915);
var msg = map__21915__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21916){
var map__21917 = p__21916;
var map__21917__$1 = cljs.core.__destructure_map(map__21917);
var src = map__21917__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21917__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21918 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21918) : done.call(null,G__21918));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21919){
var map__21920 = p__21919;
var map__21920__$1 = cljs.core.__destructure_map(map__21920);
var msg__$1 = map__21920__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21921){var ex = e21921;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21922){
var map__21923 = p__21922;
var map__21923__$1 = cljs.core.__destructure_map(map__21923);
var env = map__21923__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21924){
var map__21925 = p__21924;
var map__21925__$1 = cljs.core.__destructure_map(map__21925);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21926){
var map__21927 = p__21926;
var map__21927__$1 = cljs.core.__destructure_map(map__21927);
var svc = map__21927__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21927__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
