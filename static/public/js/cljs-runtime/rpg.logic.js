goog.provide('rpg.logic');
rpg.logic.player_damage = (3);
rpg.logic.last_enemy_id = (2);
rpg.logic.add_log = (function rpg$logic$add_log(s,entry){
var previous_log = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004)], null));
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004)], null),cljs.core.cons(entry,previous_log));
});
rpg.logic.player_alive_QMARK_ = (function rpg$logic$player_alive_QMARK_(s){
var player_hp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null));
return ((0) < player_hp);
});
rpg.logic.enemy_alive_QMARK_ = (function rpg$logic$enemy_alive_QMARK_(s){
var enemy_hp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null));
return ((0) < enemy_hp);
});
rpg.logic.enemy_last_QMARK_ = (function rpg$logic$enemy_last_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpg.logic.last_enemy_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));
});
rpg.logic.player_is_block_QMARK_ = (function rpg$logic$player_is_block_QMARK_(s){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"block","block",664686210)], null)),(0));
});
rpg.logic.enemy_is_block_QMARK_ = (function rpg$logic$enemy_is_block_QMARK_(s){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"block","block",664686210)], null)),(0));
});
rpg.logic.is_game_over_QMARK_ = (function rpg$logic$is_game_over_QMARK_(s){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null)),new cljs.core.Keyword(null,"playing","playing",70013335));
});
rpg.logic.check_game_over = (function rpg$logic$check_game_over(s){
if((!(rpg.logic.player_alive_QMARK_(s)))){
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"lost","lost",-744692984));
} else {
if((((!(rpg.logic.enemy_alive_QMARK_(s)))) && (rpg.logic.enemy_last_QMARK_(s)))){
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"won","won",910394405));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335));

}
}
});
rpg.logic.make_turn = (function rpg$logic$make_turn(var_args){
var args__5882__auto__ = [];
var len__5876__auto___12060 = arguments.length;
var i__5877__auto___12061 = (0);
while(true){
if((i__5877__auto___12061 < len__5876__auto___12060)){
args__5882__auto__.push((arguments[i__5877__auto___12061]));

var G__12062 = (i__5877__auto___12061 + (1));
i__5877__auto___12061 = G__12062;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return rpg.logic.make_turn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(rpg.logic.make_turn.cljs$core$IFn$_invoke$arity$variadic = (function (s,turn,args){
if((!(rpg.logic.is_game_over_QMARK_(s)))){
return rpg.logic.check_game_over(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(turn,s,args));
} else {
return s;

}
}));

(rpg.logic.make_turn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rpg.logic.make_turn.cljs$lang$applyTo = (function (seq12053){
var G__12054 = cljs.core.first(seq12053);
var seq12053__$1 = cljs.core.next(seq12053);
var G__12055 = cljs.core.first(seq12053__$1);
var seq12053__$2 = cljs.core.next(seq12053__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12054,G__12055,seq12053__$2);
}));

rpg.logic.player_attack = (function rpg$logic$player_attack(s){
var enemy_hp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null));
var new_hp = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(enemy_hp - rpg.logic.player_damage));
var diff_enemy_hp = (new_hp - enemy_hp);
var player_atb = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb","atb",299104222)], null));
var player_atb_max = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb-max","atb-max",1191497293)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_atb,player_atb_max)){
if((!(rpg.logic.enemy_is_block_QMARK_(s)))){
return rpg.logic.check_game_over(rpg.logic.add_log(cljs.core.assoc_in(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),new_hp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb","atb",299104222)], null),(0)),rpg.text.player_attack_message_generate(diff_enemy_hp)));
} else {
return rpg.logic.check_game_over(rpg.logic.add_log(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb","atb",299104222)], null),(0)),rpg.text.player_attack_block()));
}
} else {
return rpg.logic.check_game_over(rpg.logic.add_log(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core.dec),rpg.text.player_attack_false_attack((-1))));
}
});
rpg.logic.player_heal = (function rpg$logic$player_heal(s){
var number_of_potions = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"healing-potions","healing-potions",-852523347)], null));
var new_number_of_potions = (number_of_potions - (1));
var player_hp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null));
var max_player_hp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696)], null));
var new_player_hp = cljs.core.min.cljs$core$IFn$_invoke$arity$2(((5) + player_hp),max_player_hp);
var diff_player_hp = (new_player_hp - player_hp);
if(((0) < number_of_potions)){
return rpg.logic.check_game_over(rpg.logic.add_log(cljs.core.assoc_in(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"healing-potions","healing-potions",-852523347)], null),new_number_of_potions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),new_player_hp),rpg.text.player_heal_message_generate(diff_player_hp)));
} else {
return s;

}
});
rpg.logic.player_block = (function rpg$logic$player_block(s){
var player_atb = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb","atb",299104222)], null));
var player_atb_max = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb-max","atb-max",1191497293)], null));
var player_block_max = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"block-max","block-max",704388708)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player_atb,player_atb_max)){
return rpg.logic.check_game_over(rpg.logic.add_log(cljs.core.assoc_in(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"block","block",664686210)], null),player_block_max),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb","atb",299104222)], null),(0)),rpg.text.player_block_set()));
} else {
return s;
}
});
rpg.logic.enemy_attack = (function rpg$logic$enemy_attack(s){
var player_hp = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null));
var enemy_damage = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"damage","damage",970520018)], null));
var new_hp = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(player_hp - enemy_damage));
var diff_player_hp = (new_hp - player_hp);
if((!(rpg.logic.player_is_block_QMARK_(s)))){
return rpg.logic.check_game_over(rpg.logic.add_log(cljs.core.assoc_in(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),new_hp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"atb","atb",299104222)], null),(0)),rpg.text.enemy_attack_message_generate(diff_player_hp)));
} else {
return rpg.logic.check_game_over(rpg.logic.add_log(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"atb","atb",299104222)], null),(0)),rpg.text.enemy_attack_block()));
}
});
rpg.logic.update_enemy = (function rpg$logic$update_enemy(s){
if((((!(rpg.logic.enemy_alive_QMARK_(s)))) && ((!(rpg.logic.enemy_last_QMARK_(s)))))){
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047)], null),(function (){var G__12056 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
switch (G__12056) {
case (0):
return rpg.state.bear;

break;
case (1):
return rpg.state.butterfly;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12056))));

}
})());
} else {
return s;
}
});
rpg.logic.tick = (function rpg$logic$tick(s){
if((!(rpg.logic.is_game_over_QMARK_(s)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((function (p1__12057_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__12057_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"atb-max","atb-max",1191497293)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__12057_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"atb","atb",299104222)], null)))){
return rpg.logic.enemy_attack(p1__12057_SHARP_);
} else {
return p1__12057_SHARP_;
}
})(rpg.logic.update_enemy(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ticks","ticks",-406190313)], null),cljs.core.inc))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb","atb",299104222)], null),(function (p1__12058_SHARP_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb-max","atb-max",1191497293)], null)),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"atb-speed","atb-speed",1113033743)], null)) + p1__12058_SHARP_));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"atb","atb",299104222)], null),(function (p1__12059_SHARP_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"atb-max","atb-max",1191497293)], null)),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.Keyword(null,"atb-speed","atb-speed",1113033743)], null)) + p1__12059_SHARP_));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"block","block",664686210)], null),(function (){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"block","block",664686210)], null)) - (1)));
}));
} else {
return s;
}
});

//# sourceMappingURL=rpg.logic.js.map
