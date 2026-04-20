goog.provide('rpg.core');
rpg.core.app = (function rpg$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"(blank)"], null);
});
rpg.core.init = (function rpg$core$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.root], null),document.getElementById("app"));
});
goog.exportSymbol('rpg.core.init', rpg.core.init);

//# sourceMappingURL=rpg.core.js.map
