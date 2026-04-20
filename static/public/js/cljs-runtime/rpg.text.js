goog.provide('rpg.text');
rpg.text.now_time_str = (function rpg$text$now_time_str(){
var d = (new Date());
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getHours())).padStart((2),"0"))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getMinutes())).padStart((2),"0"))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getSeconds())).padStart((2),"0")));
});
rpg.text.player_heal_message_generate = (function rpg$text$player_heal_message_generate(hp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Player heals... +"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hp))], null);
});
rpg.text.player_attack_message_generate = (function rpg$text$player_attack_message_generate(hp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Player attacks enemy, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hp))], null);
});
rpg.text.enemy_attack_message_generate = (function rpg$text$enemy_attack_message_generate(hp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Enemy attacks player, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hp))], null);
});
rpg.text.enemy_defeated = (function rpg$text$enemy_defeated(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Enemy was defeated!")], null);
});
rpg.text.player_defeated = (function rpg$text$player_defeated(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Player was defeated! It is the end...")], null);
});
rpg.text.player_attack_false_attack = (function rpg$text$player_attack_false_attack(hp){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" False start! Player hurts himself... "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hp))], null);
});
rpg.text.player_block_set = (function rpg$text$player_block_set(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Player set block! \uD83D\uDEE1\uFE0F")], null);
});
rpg.text.enemy_attack_block = (function rpg$text$enemy_attack_block(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemy","enemy",-956472047),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Enemy attack in block! \u2694\uFE0F\uD83D\uDEE1\uFE0F")], null);
});
rpg.text.player_attack_block = (function rpg$text$player_attack_block(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rpg.text.now_time_str())+" Player attack in block! \u2694\uFE0F\uD83D\uDEE1\uFE0F")], null);
});

//# sourceMappingURL=rpg.text.js.map
