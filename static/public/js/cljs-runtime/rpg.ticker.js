goog.provide('rpg.ticker');
rpg.ticker.tick_milliseconds = (5);
rpg.ticker.initial_ticker = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ticker","ticker",214613162),null], null);
if((typeof rpg !== 'undefined') && (typeof rpg.ticker !== 'undefined') && (typeof rpg.ticker.ticker !== 'undefined')){
} else {
rpg.ticker.ticker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(rpg.ticker.initial_ticker);
}
rpg.ticker.start_ticker = (function rpg$ticker$start_ticker(){
var temp__5823__auto___12064 = new cljs.core.Keyword(null,"ticker","ticker",214613162).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rpg.ticker.ticker));
if(cljs.core.truth_(temp__5823__auto___12064)){
var ticker_id_12065 = temp__5823__auto___12064;
clearInterval(ticker_id_12065);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rpg.ticker.ticker,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ticker","ticker",214613162)], null),setInterval((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rpg.state.app_state,rpg.logic.tick);
}),rpg.ticker.tick_milliseconds));
});
rpg.ticker.stop_ticker = (function rpg$ticker$stop_ticker(){
var temp__5823__auto__ = new cljs.core.Keyword(null,"ticker","ticker",214613162).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rpg.ticker.ticker));
if(cljs.core.truth_(temp__5823__auto__)){
var ticker_id = temp__5823__auto__;
clearInterval(ticker_id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rpg.ticker.ticker,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ticker","ticker",214613162)], null),null);
} else {
return null;
}
});
rpg.ticker.restart_game = (function rpg$ticker$restart_game(){
cljs.core.reset_BANG_(rpg.state.app_state,rpg.state.initial_state);

return rpg.ticker.start_ticker();
});

//# sourceMappingURL=rpg.ticker.js.map
