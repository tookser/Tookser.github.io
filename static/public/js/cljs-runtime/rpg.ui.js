goog.provide('rpg.ui');
rpg.ticker.restart_game();
rpg.ui.enemy_name = (function rpg$ui$enemy_name(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"name","name",1843675177)], null)))+":")], null)], null);
});
rpg.ui.log_view = (function rpg$ui$log_view(log){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.log","div.log",518813601),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Log"], null),(function (){var iter__5628__auto__ = (function rpg$ui$log_view_$_iter__12066(s__12067){
return (new cljs.core.LazySeq(null,(function (){
var s__12067__$1 = s__12067;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12067__$1);
if(temp__5823__auto__){
var s__12067__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12067__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__12067__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__12069 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__12068 = (0);
while(true){
if((i__12068 < size__5627__auto__)){
var vec__12070 = cljs.core._nth(c__5626__auto__,i__12068);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12070,(0),null);
var vec__12073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12070,(1),null);
var creature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12073,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12073,(1),null);
cljs.core.chunk_append(b__12069,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.log-entry","div.log-entry",-436334720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),entry], null));

var G__12090 = (i__12068 + (1));
i__12068 = G__12090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12069),rpg$ui$log_view_$_iter__12066(cljs.core.chunk_rest(s__12067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12069),null);
}
} else {
var vec__12076 = cljs.core.first(s__12067__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12076,(0),null);
var vec__12079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12076,(1),null);
var creature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12079,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.log-entry","div.log-entry",-436334720),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),entry], null),rpg$ui$log_view_$_iter__12066(cljs.core.rest(s__12067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,log));
})()], null);
});
rpg.ui.end_screen = (function rpg$ui$end_screen(s,on_restart){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(function (){var G__12082 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
var G__12082__$1 = (((G__12082 instanceof cljs.core.Keyword))?G__12082.fqn:null);
switch (G__12082__$1) {
case "won":
return "\uD83C\uDF89 Victory!";

break;
case "lost":
return "\uD83D\uDE2D You lose...";

break;
default:
return "";

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_restart], null),"Back to fight! (play again)"], null)], null);
});
rpg.ui.block_bar = (function rpg$ui$block_bar(p__12083){
var map__12084 = p__12083;
var map__12084__$1 = cljs.core.__destructure_map(map__12084);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12084__$1,new cljs.core.Keyword(null,"block","block",664686210));
var block_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12084__$1,new cljs.core.Keyword(null,"block-max","block-max",704388708));
var pct = ((100) * (block / block_max));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-container","div.block-container",1334645108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-fill","div.block-fill",-1495250110),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct)+"%")], null)], null)], null)], null);
});
rpg.ui.atb_bar = (function rpg$ui$atb_bar(p__12085){
var map__12086 = p__12085;
var map__12086__$1 = cljs.core.__destructure_map(map__12086);
var atb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12086__$1,new cljs.core.Keyword(null,"atb","atb",299104222));
var atb_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12086__$1,new cljs.core.Keyword(null,"atb-max","atb-max",1191497293));
var pct = ((100) * (atb / atb_max));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.atb-container","div.atb-container",1964173423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.atb-fill","div.atb-fill",-1482609603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct)+"%")], null)], null)], null)], null);
});
rpg.ui.hp_bar = (function rpg$ui$hp_bar(p__12087){
var map__12088 = p__12087;
var map__12088__$1 = cljs.core.__destructure_map(map__12088);
var hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12088__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
var max_hp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12088__$1,new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696));
var pct = ((100) * (hp / max_hp));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hp-container","div.hp-container",1256455230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hp-fill","div.hp-fill",-43329729),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct)+"%")], null)], null)], null)], null);
});
rpg.ui.root = (function rpg$ui$root(){
var s = cljs.core.deref(rpg.state.app_state);
var G__12089 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
var G__12089__$1 = (((G__12089 instanceof cljs.core.Keyword))?G__12089.fqn:null);
switch (G__12089__$1) {
case "playing":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.play-screen","div.play-screen",1448655392),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-part","div.left-part",648749777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Arena"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Player:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.atb_bar,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.hp_bar,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.block_bar,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Healing Potions: ",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"healing-potions","healing-potions",-852523347)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.enemy_name,s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.atb_bar,new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.hp_bar,new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Status: ",cljs.core.name(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rpg.state.app_state,(function (st){
return rpg.logic.make_turn(st,rpg.logic.player_attack);
}));
})], null),"Attack"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rpg.state.app_state,(function (st){
return rpg.logic.make_turn(st,rpg.logic.player_heal);
}));
})], null),"Heal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rpg.state.app_state,(function (st){
return rpg.logic.make_turn(st,rpg.logic.player_block);
}));
})], null),"Block\uD83D\uDEE1\uFE0F"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.log_view,new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(s)], null)], null);

break;
case "won":
case "lost":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.play-screen","div.play-screen",1448655392),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Roboto",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg.ui.end_screen,s,rpg.ticker.restart_game], null)], null)], null);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12089__$1))));

}
});

//# sourceMappingURL=rpg.ui.js.map
