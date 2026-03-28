goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__15630__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15632__i = 0, G__15632__a = new Array(arguments.length -  0);
while (G__15632__i < G__15632__a.length) {G__15632__a[G__15632__i] = arguments[G__15632__i + 0]; ++G__15632__i;}
  args = new cljs.core.IndexedSeq(G__15632__a,0,null);
} 
return G__15630__delegate.call(this,args);};
G__15630.cljs$lang$maxFixedArity = 0;
G__15630.cljs$lang$applyTo = (function (arglist__15633){
var args = cljs.core.seq(arglist__15633);
return G__15630__delegate(args);
});
G__15630.cljs$core$IFn$_invoke$arity$variadic = G__15630__delegate;
return G__15630;
})()
);

(o.error = (function() { 
var G__15634__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15635__i = 0, G__15635__a = new Array(arguments.length -  0);
while (G__15635__i < G__15635__a.length) {G__15635__a[G__15635__i] = arguments[G__15635__i + 0]; ++G__15635__i;}
  args = new cljs.core.IndexedSeq(G__15635__a,0,null);
} 
return G__15634__delegate.call(this,args);};
G__15634.cljs$lang$maxFixedArity = 0;
G__15634.cljs$lang$applyTo = (function (arglist__15636){
var args = cljs.core.seq(arglist__15636);
return G__15634__delegate(args);
});
G__15634.cljs$core$IFn$_invoke$arity$variadic = G__15634__delegate;
return G__15634;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
