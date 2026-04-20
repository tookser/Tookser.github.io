goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17576){
var map__17579 = p__17576;
var map__17579__$1 = cljs.core.__destructure_map(map__17579);
var m = map__17579__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17579__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17589_18060 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17590_18061 = null;
var count__17591_18062 = (0);
var i__17592_18063 = (0);
while(true){
if((i__17592_18063 < count__17591_18062)){
var f_18064 = chunk__17590_18061.cljs$core$IIndexed$_nth$arity$2(null,i__17592_18063);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18064], 0));


var G__18065 = seq__17589_18060;
var G__18066 = chunk__17590_18061;
var G__18067 = count__17591_18062;
var G__18068 = (i__17592_18063 + (1));
seq__17589_18060 = G__18065;
chunk__17590_18061 = G__18066;
count__17591_18062 = G__18067;
i__17592_18063 = G__18068;
continue;
} else {
var temp__5823__auto___18071 = cljs.core.seq(seq__17589_18060);
if(temp__5823__auto___18071){
var seq__17589_18074__$1 = temp__5823__auto___18071;
if(cljs.core.chunked_seq_QMARK_(seq__17589_18074__$1)){
var c__5673__auto___18077 = cljs.core.chunk_first(seq__17589_18074__$1);
var G__18078 = cljs.core.chunk_rest(seq__17589_18074__$1);
var G__18079 = c__5673__auto___18077;
var G__18080 = cljs.core.count(c__5673__auto___18077);
var G__18081 = (0);
seq__17589_18060 = G__18078;
chunk__17590_18061 = G__18079;
count__17591_18062 = G__18080;
i__17592_18063 = G__18081;
continue;
} else {
var f_18084 = cljs.core.first(seq__17589_18074__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18084], 0));


var G__18085 = cljs.core.next(seq__17589_18074__$1);
var G__18086 = null;
var G__18087 = (0);
var G__18088 = (0);
seq__17589_18060 = G__18085;
chunk__17590_18061 = G__18086;
count__17591_18062 = G__18087;
i__17592_18063 = G__18088;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18089 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18089], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18089)))?cljs.core.second(arglists_18089):arglists_18089)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17687_18094 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17688_18095 = null;
var count__17689_18096 = (0);
var i__17690_18097 = (0);
while(true){
if((i__17690_18097 < count__17689_18096)){
var vec__17731_18101 = chunk__17688_18095.cljs$core$IIndexed$_nth$arity$2(null,i__17690_18097);
var name_18102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17731_18101,(0),null);
var map__17734_18103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17731_18101,(1),null);
var map__17734_18104__$1 = cljs.core.__destructure_map(map__17734_18103);
var doc_18105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17734_18104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17734_18104__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18102], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18106], 0));

if(cljs.core.truth_(doc_18105)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18105], 0));
} else {
}


var G__18127 = seq__17687_18094;
var G__18128 = chunk__17688_18095;
var G__18129 = count__17689_18096;
var G__18130 = (i__17690_18097 + (1));
seq__17687_18094 = G__18127;
chunk__17688_18095 = G__18128;
count__17689_18096 = G__18129;
i__17690_18097 = G__18130;
continue;
} else {
var temp__5823__auto___18131 = cljs.core.seq(seq__17687_18094);
if(temp__5823__auto___18131){
var seq__17687_18132__$1 = temp__5823__auto___18131;
if(cljs.core.chunked_seq_QMARK_(seq__17687_18132__$1)){
var c__5673__auto___18133 = cljs.core.chunk_first(seq__17687_18132__$1);
var G__18134 = cljs.core.chunk_rest(seq__17687_18132__$1);
var G__18135 = c__5673__auto___18133;
var G__18136 = cljs.core.count(c__5673__auto___18133);
var G__18137 = (0);
seq__17687_18094 = G__18134;
chunk__17688_18095 = G__18135;
count__17689_18096 = G__18136;
i__17690_18097 = G__18137;
continue;
} else {
var vec__17744_18140 = cljs.core.first(seq__17687_18132__$1);
var name_18141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17744_18140,(0),null);
var map__17747_18142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17744_18140,(1),null);
var map__17747_18143__$1 = cljs.core.__destructure_map(map__17747_18142);
var doc_18144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747_18143__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747_18143__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18141], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18145], 0));

if(cljs.core.truth_(doc_18144)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18144], 0));
} else {
}


var G__18153 = cljs.core.next(seq__17687_18132__$1);
var G__18154 = null;
var G__18155 = (0);
var G__18156 = (0);
seq__17687_18094 = G__18153;
chunk__17688_18095 = G__18154;
count__17689_18096 = G__18155;
i__17690_18097 = G__18156;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17757 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17758 = null;
var count__17759 = (0);
var i__17760 = (0);
while(true){
if((i__17760 < count__17759)){
var role = chunk__17758.cljs$core$IIndexed$_nth$arity$2(null,i__17760);
var temp__5823__auto___18177__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___18177__$1)){
var spec_18181 = temp__5823__auto___18177__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_18181)], 0));
} else {
}


var G__18191 = seq__17757;
var G__18192 = chunk__17758;
var G__18193 = count__17759;
var G__18194 = (i__17760 + (1));
seq__17757 = G__18191;
chunk__17758 = G__18192;
count__17759 = G__18193;
i__17760 = G__18194;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__17757);
if(temp__5823__auto____$1){
var seq__17757__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17757__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__17757__$1);
var G__18195 = cljs.core.chunk_rest(seq__17757__$1);
var G__18196 = c__5673__auto__;
var G__18197 = cljs.core.count(c__5673__auto__);
var G__18198 = (0);
seq__17757 = G__18195;
chunk__17758 = G__18196;
count__17759 = G__18197;
i__17760 = G__18198;
continue;
} else {
var role = cljs.core.first(seq__17757__$1);
var temp__5823__auto___18203__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___18203__$2)){
var spec_18205 = temp__5823__auto___18203__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_18205)], 0));
} else {
}


var G__18206 = cljs.core.next(seq__17757__$1);
var G__18207 = null;
var G__18208 = (0);
var G__18209 = (0);
seq__17757 = G__18206;
chunk__17758 = G__18207;
count__17759 = G__18208;
i__17760 = G__18209;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17861 = datafied_throwable;
var map__17861__$1 = cljs.core.__destructure_map(map__17861);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17861__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17862 = cljs.core.last(via);
var map__17862__$1 = cljs.core.__destructure_map(map__17862);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17862__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17862__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17862__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17863 = data;
var map__17863__$1 = cljs.core.__destructure_map(map__17863);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17864 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17864__$1 = cljs.core.__destructure_map(map__17864);
var top_data = map__17864__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17882 = phase;
var G__17882__$1 = (((G__17882 instanceof cljs.core.Keyword))?G__17882.fqn:null);
switch (G__17882__$1) {
case "read-source":
var map__17884 = data;
var map__17884__$1 = cljs.core.__destructure_map(map__17884);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17884__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17884__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17887 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17887__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17887,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17887);
var G__17887__$2 = (cljs.core.truth_((function (){var fexpr__17889 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17889.cljs$core$IFn$_invoke$arity$1 ? fexpr__17889.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17889.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17887__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17887__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17887__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17887__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17892 = top_data;
var G__17892__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17892,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17892);
var G__17892__$2 = (cljs.core.truth_((function (){var fexpr__17898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17898.cljs$core$IFn$_invoke$arity$1 ? fexpr__17898.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17898.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17892__$1);
var G__17892__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17892__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17892__$2);
var G__17892__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17892__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17892__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17892__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17892__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17901 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17901,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17901,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17901,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17901,(3),null);
var G__17907 = top_data;
var G__17907__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17907,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17907);
var G__17907__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17907__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17907__$1);
var G__17907__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17907__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17907__$2);
var G__17907__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17907__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17907__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17907__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17907__$4;
}

break;
case "execution":
var vec__17916 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17916,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17856_SHARP_){
var or__5142__auto__ = (p1__17856_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__17928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17928.cljs$core$IFn$_invoke$arity$1 ? fexpr__17928.cljs$core$IFn$_invoke$arity$1(p1__17856_SHARP_) : fexpr__17928.call(null,p1__17856_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__17934 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17934__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17934,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17934);
var G__17934__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17934__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17934__$1);
var G__17934__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17934__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17934__$2);
var G__17934__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17934__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17934__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17934__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17934__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17882__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17945){
var map__17950 = p__17945;
var map__17950__$1 = cljs.core.__destructure_map(map__17950);
var triage_data = map__17950__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__17973 = phase;
var G__17973__$1 = (((G__17973 instanceof cljs.core.Keyword))?G__17973.fqn:null);
switch (G__17973__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17980 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17981 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__17982 = loc;
var G__17983 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17991_18244 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17992_18245 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17993_18246 = true;
var _STAR_print_fn_STAR__temp_val__17994_18247 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17993_18246);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17994_18247);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17943_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17943_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17992_18245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17991_18244);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17980,G__17981,G__17982,G__17983) : format.call(null,G__17980,G__17981,G__17982,G__17983));

break;
case "macroexpansion":
var G__18001 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18002 = cause_type;
var G__18003 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18004 = loc;
var G__18005 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18001,G__18002,G__18003,G__18004,G__18005) : format.call(null,G__18001,G__18002,G__18003,G__18004,G__18005));

break;
case "compile-syntax-check":
var G__18009 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18010 = cause_type;
var G__18011 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18012 = loc;
var G__18013 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18009,G__18010,G__18011,G__18012,G__18013) : format.call(null,G__18009,G__18010,G__18011,G__18012,G__18013));

break;
case "compilation":
var G__18014 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18015 = cause_type;
var G__18016 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18017 = loc;
var G__18018 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18014,G__18015,G__18016,G__18017,G__18018) : format.call(null,G__18014,G__18015,G__18016,G__18017,G__18018));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18020 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18022 = symbol;
var G__18024 = loc;
var G__18026 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18030_18259 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18031_18260 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18032_18261 = true;
var _STAR_print_fn_STAR__temp_val__18033_18262 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18032_18261);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18033_18262);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17944_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17944_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18031_18260);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18030_18259);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18020,G__18022,G__18024,G__18026) : format.call(null,G__18020,G__18022,G__18024,G__18026));
} else {
var G__18036 = "Execution error%s at %s(%s).\n%s\n";
var G__18037 = cause_type;
var G__18038 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18039 = loc;
var G__18040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18036,G__18037,G__18038,G__18039,G__18040) : format.call(null,G__18036,G__18037,G__18038,G__18039,G__18040));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17973__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
