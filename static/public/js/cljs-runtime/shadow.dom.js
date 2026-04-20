goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15583 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15583(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15604 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15604(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13561 = coll;
var G__13562 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13561,G__13562) : shadow.dom.lazy_native_coll_seq.call(null,G__13561,G__13562));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13617 = arguments.length;
switch (G__13617) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13631 = arguments.length;
switch (G__13631) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13670 = arguments.length;
switch (G__13670) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13676 = arguments.length;
switch (G__13676) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13693 = arguments.length;
switch (G__13693) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13716 = arguments.length;
switch (G__13716) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13726){if((e13726 instanceof Object)){
var e = e13726;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13726;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13740 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13743 = null;
var count__13745 = (0);
var i__13746 = (0);
while(true){
if((i__13746 < count__13745)){
var el = chunk__13743.cljs$core$IIndexed$_nth$arity$2(null,i__13746);
var handler_15677__$1 = ((function (seq__13740,chunk__13743,count__13745,i__13746,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13740,chunk__13743,count__13745,i__13746,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15677__$1);


var G__15678 = seq__13740;
var G__15679 = chunk__13743;
var G__15680 = count__13745;
var G__15681 = (i__13746 + (1));
seq__13740 = G__15678;
chunk__13743 = G__15679;
count__13745 = G__15680;
i__13746 = G__15681;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13740);
if(temp__5823__auto__){
var seq__13740__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13740__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13740__$1);
var G__15686 = cljs.core.chunk_rest(seq__13740__$1);
var G__15687 = c__5673__auto__;
var G__15688 = cljs.core.count(c__5673__auto__);
var G__15689 = (0);
seq__13740 = G__15686;
chunk__13743 = G__15687;
count__13745 = G__15688;
i__13746 = G__15689;
continue;
} else {
var el = cljs.core.first(seq__13740__$1);
var handler_15690__$1 = ((function (seq__13740,chunk__13743,count__13745,i__13746,el,seq__13740__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13740,chunk__13743,count__13745,i__13746,el,seq__13740__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15690__$1);


var G__15692 = cljs.core.next(seq__13740__$1);
var G__15693 = null;
var G__15694 = (0);
var G__15695 = (0);
seq__13740 = G__15692;
chunk__13743 = G__15693;
count__13745 = G__15694;
i__13746 = G__15695;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13804 = arguments.length;
switch (G__13804) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13840 = cljs.core.seq(events);
var chunk__13841 = null;
var count__13842 = (0);
var i__13843 = (0);
while(true){
if((i__13843 < count__13842)){
var vec__13866 = chunk__13841.cljs$core$IIndexed$_nth$arity$2(null,i__13843);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13866,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15703 = seq__13840;
var G__15704 = chunk__13841;
var G__15705 = count__13842;
var G__15706 = (i__13843 + (1));
seq__13840 = G__15703;
chunk__13841 = G__15704;
count__13842 = G__15705;
i__13843 = G__15706;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13840);
if(temp__5823__auto__){
var seq__13840__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13840__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13840__$1);
var G__15710 = cljs.core.chunk_rest(seq__13840__$1);
var G__15711 = c__5673__auto__;
var G__15712 = cljs.core.count(c__5673__auto__);
var G__15713 = (0);
seq__13840 = G__15710;
chunk__13841 = G__15711;
count__13842 = G__15712;
i__13843 = G__15713;
continue;
} else {
var vec__13888 = cljs.core.first(seq__13840__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13888,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15714 = cljs.core.next(seq__13840__$1);
var G__15716 = null;
var G__15717 = (0);
var G__15718 = (0);
seq__13840 = G__15714;
chunk__13841 = G__15716;
count__13842 = G__15717;
i__13843 = G__15718;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13909 = cljs.core.seq(styles);
var chunk__13910 = null;
var count__13911 = (0);
var i__13912 = (0);
while(true){
if((i__13912 < count__13911)){
var vec__13975 = chunk__13910.cljs$core$IIndexed$_nth$arity$2(null,i__13912);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13975,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15731 = seq__13909;
var G__15732 = chunk__13910;
var G__15733 = count__13911;
var G__15734 = (i__13912 + (1));
seq__13909 = G__15731;
chunk__13910 = G__15732;
count__13911 = G__15733;
i__13912 = G__15734;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13909);
if(temp__5823__auto__){
var seq__13909__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13909__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13909__$1);
var G__15738 = cljs.core.chunk_rest(seq__13909__$1);
var G__15739 = c__5673__auto__;
var G__15740 = cljs.core.count(c__5673__auto__);
var G__15741 = (0);
seq__13909 = G__15738;
chunk__13910 = G__15739;
count__13911 = G__15740;
i__13912 = G__15741;
continue;
} else {
var vec__13987 = cljs.core.first(seq__13909__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13987,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13987,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15749 = cljs.core.next(seq__13909__$1);
var G__15750 = null;
var G__15751 = (0);
var G__15752 = (0);
seq__13909 = G__15749;
chunk__13910 = G__15750;
count__13911 = G__15751;
i__13912 = G__15752;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14015_15761 = key;
var G__14015_15762__$1 = (((G__14015_15761 instanceof cljs.core.Keyword))?G__14015_15761.fqn:null);
switch (G__14015_15762__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15768 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15768,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15768,"aria-");
}
})())){
el.setAttribute(ks_15768,value);
} else {
(el[ks_15768] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14099){
var map__14101 = p__14099;
var map__14101__$1 = cljs.core.__destructure_map(map__14101);
var props = map__14101__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14101__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14102 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14105 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14105,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14105;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14113 = arguments.length;
switch (G__14113) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14130){
var vec__14135 = p__14130;
var seq__14136 = cljs.core.seq(vec__14135);
var first__14137 = cljs.core.first(seq__14136);
var seq__14136__$1 = cljs.core.next(seq__14136);
var nn = first__14137;
var first__14137__$1 = cljs.core.first(seq__14136__$1);
var seq__14136__$2 = cljs.core.next(seq__14136__$1);
var np = first__14137__$1;
var nc = seq__14136__$2;
var node = vec__14135;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14160 = nn;
var G__14161 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14160,G__14161) : create_fn.call(null,G__14160,G__14161));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14167 = nn;
var G__14168 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14167,G__14168) : create_fn.call(null,G__14167,G__14168));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14174 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14174,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14174,(1),null);
var seq__14178_15794 = cljs.core.seq(node_children);
var chunk__14179_15795 = null;
var count__14180_15796 = (0);
var i__14181_15797 = (0);
while(true){
if((i__14181_15797 < count__14180_15796)){
var child_struct_15798 = chunk__14179_15795.cljs$core$IIndexed$_nth$arity$2(null,i__14181_15797);
var children_15800 = shadow.dom.dom_node(child_struct_15798);
if(cljs.core.seq_QMARK_(children_15800)){
var seq__14304_15801 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15800));
var chunk__14306_15802 = null;
var count__14307_15803 = (0);
var i__14308_15804 = (0);
while(true){
if((i__14308_15804 < count__14307_15803)){
var child_15809 = chunk__14306_15802.cljs$core$IIndexed$_nth$arity$2(null,i__14308_15804);
if(cljs.core.truth_(child_15809)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15809);


var G__15810 = seq__14304_15801;
var G__15811 = chunk__14306_15802;
var G__15812 = count__14307_15803;
var G__15813 = (i__14308_15804 + (1));
seq__14304_15801 = G__15810;
chunk__14306_15802 = G__15811;
count__14307_15803 = G__15812;
i__14308_15804 = G__15813;
continue;
} else {
var G__15816 = seq__14304_15801;
var G__15817 = chunk__14306_15802;
var G__15818 = count__14307_15803;
var G__15819 = (i__14308_15804 + (1));
seq__14304_15801 = G__15816;
chunk__14306_15802 = G__15817;
count__14307_15803 = G__15818;
i__14308_15804 = G__15819;
continue;
}
} else {
var temp__5823__auto___15820 = cljs.core.seq(seq__14304_15801);
if(temp__5823__auto___15820){
var seq__14304_15821__$1 = temp__5823__auto___15820;
if(cljs.core.chunked_seq_QMARK_(seq__14304_15821__$1)){
var c__5673__auto___15822 = cljs.core.chunk_first(seq__14304_15821__$1);
var G__15823 = cljs.core.chunk_rest(seq__14304_15821__$1);
var G__15824 = c__5673__auto___15822;
var G__15825 = cljs.core.count(c__5673__auto___15822);
var G__15826 = (0);
seq__14304_15801 = G__15823;
chunk__14306_15802 = G__15824;
count__14307_15803 = G__15825;
i__14308_15804 = G__15826;
continue;
} else {
var child_15827 = cljs.core.first(seq__14304_15821__$1);
if(cljs.core.truth_(child_15827)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15827);


var G__15828 = cljs.core.next(seq__14304_15821__$1);
var G__15829 = null;
var G__15830 = (0);
var G__15831 = (0);
seq__14304_15801 = G__15828;
chunk__14306_15802 = G__15829;
count__14307_15803 = G__15830;
i__14308_15804 = G__15831;
continue;
} else {
var G__15832 = cljs.core.next(seq__14304_15821__$1);
var G__15833 = null;
var G__15834 = (0);
var G__15835 = (0);
seq__14304_15801 = G__15832;
chunk__14306_15802 = G__15833;
count__14307_15803 = G__15834;
i__14308_15804 = G__15835;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15800);
}


var G__15838 = seq__14178_15794;
var G__15839 = chunk__14179_15795;
var G__15840 = count__14180_15796;
var G__15841 = (i__14181_15797 + (1));
seq__14178_15794 = G__15838;
chunk__14179_15795 = G__15839;
count__14180_15796 = G__15840;
i__14181_15797 = G__15841;
continue;
} else {
var temp__5823__auto___15843 = cljs.core.seq(seq__14178_15794);
if(temp__5823__auto___15843){
var seq__14178_15844__$1 = temp__5823__auto___15843;
if(cljs.core.chunked_seq_QMARK_(seq__14178_15844__$1)){
var c__5673__auto___15846 = cljs.core.chunk_first(seq__14178_15844__$1);
var G__15847 = cljs.core.chunk_rest(seq__14178_15844__$1);
var G__15848 = c__5673__auto___15846;
var G__15849 = cljs.core.count(c__5673__auto___15846);
var G__15850 = (0);
seq__14178_15794 = G__15847;
chunk__14179_15795 = G__15848;
count__14180_15796 = G__15849;
i__14181_15797 = G__15850;
continue;
} else {
var child_struct_15851 = cljs.core.first(seq__14178_15844__$1);
var children_15852 = shadow.dom.dom_node(child_struct_15851);
if(cljs.core.seq_QMARK_(children_15852)){
var seq__14340_15854 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15852));
var chunk__14342_15855 = null;
var count__14343_15856 = (0);
var i__14344_15857 = (0);
while(true){
if((i__14344_15857 < count__14343_15856)){
var child_15860 = chunk__14342_15855.cljs$core$IIndexed$_nth$arity$2(null,i__14344_15857);
if(cljs.core.truth_(child_15860)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15860);


var G__15864 = seq__14340_15854;
var G__15865 = chunk__14342_15855;
var G__15866 = count__14343_15856;
var G__15867 = (i__14344_15857 + (1));
seq__14340_15854 = G__15864;
chunk__14342_15855 = G__15865;
count__14343_15856 = G__15866;
i__14344_15857 = G__15867;
continue;
} else {
var G__15869 = seq__14340_15854;
var G__15870 = chunk__14342_15855;
var G__15871 = count__14343_15856;
var G__15872 = (i__14344_15857 + (1));
seq__14340_15854 = G__15869;
chunk__14342_15855 = G__15870;
count__14343_15856 = G__15871;
i__14344_15857 = G__15872;
continue;
}
} else {
var temp__5823__auto___15876__$1 = cljs.core.seq(seq__14340_15854);
if(temp__5823__auto___15876__$1){
var seq__14340_15879__$1 = temp__5823__auto___15876__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14340_15879__$1)){
var c__5673__auto___15880 = cljs.core.chunk_first(seq__14340_15879__$1);
var G__15883 = cljs.core.chunk_rest(seq__14340_15879__$1);
var G__15884 = c__5673__auto___15880;
var G__15885 = cljs.core.count(c__5673__auto___15880);
var G__15886 = (0);
seq__14340_15854 = G__15883;
chunk__14342_15855 = G__15884;
count__14343_15856 = G__15885;
i__14344_15857 = G__15886;
continue;
} else {
var child_15888 = cljs.core.first(seq__14340_15879__$1);
if(cljs.core.truth_(child_15888)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15888);


var G__15889 = cljs.core.next(seq__14340_15879__$1);
var G__15890 = null;
var G__15891 = (0);
var G__15892 = (0);
seq__14340_15854 = G__15889;
chunk__14342_15855 = G__15890;
count__14343_15856 = G__15891;
i__14344_15857 = G__15892;
continue;
} else {
var G__15895 = cljs.core.next(seq__14340_15879__$1);
var G__15896 = null;
var G__15897 = (0);
var G__15898 = (0);
seq__14340_15854 = G__15895;
chunk__14342_15855 = G__15896;
count__14343_15856 = G__15897;
i__14344_15857 = G__15898;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15852);
}


var G__15899 = cljs.core.next(seq__14178_15844__$1);
var G__15900 = null;
var G__15901 = (0);
var G__15902 = (0);
seq__14178_15794 = G__15899;
chunk__14179_15795 = G__15900;
count__14180_15796 = G__15901;
i__14181_15797 = G__15902;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14374 = cljs.core.seq(node);
var chunk__14375 = null;
var count__14376 = (0);
var i__14377 = (0);
while(true){
if((i__14377 < count__14376)){
var n = chunk__14375.cljs$core$IIndexed$_nth$arity$2(null,i__14377);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15935 = seq__14374;
var G__15936 = chunk__14375;
var G__15937 = count__14376;
var G__15938 = (i__14377 + (1));
seq__14374 = G__15935;
chunk__14375 = G__15936;
count__14376 = G__15937;
i__14377 = G__15938;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14374);
if(temp__5823__auto__){
var seq__14374__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14374__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14374__$1);
var G__15941 = cljs.core.chunk_rest(seq__14374__$1);
var G__15942 = c__5673__auto__;
var G__15943 = cljs.core.count(c__5673__auto__);
var G__15944 = (0);
seq__14374 = G__15941;
chunk__14375 = G__15942;
count__14376 = G__15943;
i__14377 = G__15944;
continue;
} else {
var n = cljs.core.first(seq__14374__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15949 = cljs.core.next(seq__14374__$1);
var G__15950 = null;
var G__15951 = (0);
var G__15952 = (0);
seq__14374 = G__15949;
chunk__14375 = G__15950;
count__14376 = G__15951;
i__14377 = G__15952;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14460 = arguments.length;
switch (G__14460) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14472 = arguments.length;
switch (G__14472) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14496 = arguments.length;
switch (G__14496) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15971 = arguments.length;
var i__5877__auto___15972 = (0);
while(true){
if((i__5877__auto___15972 < len__5876__auto___15971)){
args__5882__auto__.push((arguments[i__5877__auto___15972]));

var G__15974 = (i__5877__auto___15972 + (1));
i__5877__auto___15972 = G__15974;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14567_15981 = cljs.core.seq(nodes);
var chunk__14568_15982 = null;
var count__14569_15983 = (0);
var i__14570_15984 = (0);
while(true){
if((i__14570_15984 < count__14569_15983)){
var node_15985 = chunk__14568_15982.cljs$core$IIndexed$_nth$arity$2(null,i__14570_15984);
fragment.appendChild(shadow.dom._to_dom(node_15985));


var G__15987 = seq__14567_15981;
var G__15988 = chunk__14568_15982;
var G__15989 = count__14569_15983;
var G__15990 = (i__14570_15984 + (1));
seq__14567_15981 = G__15987;
chunk__14568_15982 = G__15988;
count__14569_15983 = G__15989;
i__14570_15984 = G__15990;
continue;
} else {
var temp__5823__auto___15992 = cljs.core.seq(seq__14567_15981);
if(temp__5823__auto___15992){
var seq__14567_15993__$1 = temp__5823__auto___15992;
if(cljs.core.chunked_seq_QMARK_(seq__14567_15993__$1)){
var c__5673__auto___15995 = cljs.core.chunk_first(seq__14567_15993__$1);
var G__15996 = cljs.core.chunk_rest(seq__14567_15993__$1);
var G__15997 = c__5673__auto___15995;
var G__15998 = cljs.core.count(c__5673__auto___15995);
var G__15999 = (0);
seq__14567_15981 = G__15996;
chunk__14568_15982 = G__15997;
count__14569_15983 = G__15998;
i__14570_15984 = G__15999;
continue;
} else {
var node_16000 = cljs.core.first(seq__14567_15993__$1);
fragment.appendChild(shadow.dom._to_dom(node_16000));


var G__16003 = cljs.core.next(seq__14567_15993__$1);
var G__16004 = null;
var G__16005 = (0);
var G__16006 = (0);
seq__14567_15981 = G__16003;
chunk__14568_15982 = G__16004;
count__14569_15983 = G__16005;
i__14570_15984 = G__16006;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14560){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14560));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14580_16015 = cljs.core.seq(scripts);
var chunk__14581_16016 = null;
var count__14582_16017 = (0);
var i__14583_16018 = (0);
while(true){
if((i__14583_16018 < count__14582_16017)){
var vec__14604_16020 = chunk__14581_16016.cljs$core$IIndexed$_nth$arity$2(null,i__14583_16018);
var script_tag_16021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14604_16020,(0),null);
var script_body_16022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14604_16020,(1),null);
eval(script_body_16022);


var G__16025 = seq__14580_16015;
var G__16026 = chunk__14581_16016;
var G__16027 = count__14582_16017;
var G__16028 = (i__14583_16018 + (1));
seq__14580_16015 = G__16025;
chunk__14581_16016 = G__16026;
count__14582_16017 = G__16027;
i__14583_16018 = G__16028;
continue;
} else {
var temp__5823__auto___16029 = cljs.core.seq(seq__14580_16015);
if(temp__5823__auto___16029){
var seq__14580_16030__$1 = temp__5823__auto___16029;
if(cljs.core.chunked_seq_QMARK_(seq__14580_16030__$1)){
var c__5673__auto___16031 = cljs.core.chunk_first(seq__14580_16030__$1);
var G__16032 = cljs.core.chunk_rest(seq__14580_16030__$1);
var G__16033 = c__5673__auto___16031;
var G__16034 = cljs.core.count(c__5673__auto___16031);
var G__16035 = (0);
seq__14580_16015 = G__16032;
chunk__14581_16016 = G__16033;
count__14582_16017 = G__16034;
i__14583_16018 = G__16035;
continue;
} else {
var vec__14614_16037 = cljs.core.first(seq__14580_16030__$1);
var script_tag_16038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14614_16037,(0),null);
var script_body_16039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14614_16037,(1),null);
eval(script_body_16039);


var G__16042 = cljs.core.next(seq__14580_16030__$1);
var G__16043 = null;
var G__16044 = (0);
var G__16045 = (0);
seq__14580_16015 = G__16042;
chunk__14581_16016 = G__16043;
count__14582_16017 = G__16044;
i__14583_16018 = G__16045;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14621){
var vec__14622 = p__14621;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14622,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14622,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14645 = arguments.length;
switch (G__14645) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14706 = cljs.core.seq(style_keys);
var chunk__14707 = null;
var count__14708 = (0);
var i__14709 = (0);
while(true){
if((i__14709 < count__14708)){
var it = chunk__14707.cljs$core$IIndexed$_nth$arity$2(null,i__14709);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16061 = seq__14706;
var G__16062 = chunk__14707;
var G__16063 = count__14708;
var G__16064 = (i__14709 + (1));
seq__14706 = G__16061;
chunk__14707 = G__16062;
count__14708 = G__16063;
i__14709 = G__16064;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14706);
if(temp__5823__auto__){
var seq__14706__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14706__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14706__$1);
var G__16068 = cljs.core.chunk_rest(seq__14706__$1);
var G__16069 = c__5673__auto__;
var G__16070 = cljs.core.count(c__5673__auto__);
var G__16071 = (0);
seq__14706 = G__16068;
chunk__14707 = G__16069;
count__14708 = G__16070;
i__14709 = G__16071;
continue;
} else {
var it = cljs.core.first(seq__14706__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16072 = cljs.core.next(seq__14706__$1);
var G__16073 = null;
var G__16074 = (0);
var G__16075 = (0);
seq__14706 = G__16072;
chunk__14707 = G__16073;
count__14708 = G__16074;
i__14709 = G__16075;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14746,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14764 = k14746;
var G__14764__$1 = (((G__14764 instanceof cljs.core.Keyword))?G__14764.fqn:null);
switch (G__14764__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14746,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14774){
var vec__14777 = p__14774;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14777,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14777,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14745){
var self__ = this;
var G__14745__$1 = this;
return (new cljs.core.RecordIter((0),G__14745__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14747,other14748){
var self__ = this;
var this14747__$1 = this;
return (((!((other14748 == null)))) && ((((this14747__$1.constructor === other14748.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14747__$1.x,other14748.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14747__$1.y,other14748.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14747__$1.__extmap,other14748.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14746){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14843 = k14746;
var G__14843__$1 = (((G__14843 instanceof cljs.core.Keyword))?G__14843.fqn:null);
switch (G__14843__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14746);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14745){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14856 = cljs.core.keyword_identical_QMARK_;
var expr__14857 = k__5457__auto__;
if(cljs.core.truth_((pred__14856.cljs$core$IFn$_invoke$arity$2 ? pred__14856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14857) : pred__14856.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14857)))){
return (new shadow.dom.Coordinate(G__14745,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14856.cljs$core$IFn$_invoke$arity$2 ? pred__14856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14857) : pred__14856.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14857)))){
return (new shadow.dom.Coordinate(self__.x,G__14745,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14745),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14745){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14745,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14751){
var extmap__5490__auto__ = (function (){var G__14909 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14751,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14751)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14909);
} else {
return G__14909;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14751),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14751),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14949,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14990 = k14949;
var G__14990__$1 = (((G__14990 instanceof cljs.core.Keyword))?G__14990.fqn:null);
switch (G__14990__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14949,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__15002){
var vec__15009 = p__15002;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14948){
var self__ = this;
var G__14948__$1 = this;
return (new cljs.core.RecordIter((0),G__14948__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14950,other14951){
var self__ = this;
var this14950__$1 = this;
return (((!((other14951 == null)))) && ((((this14950__$1.constructor === other14951.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14950__$1.w,other14951.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14950__$1.h,other14951.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14950__$1.__extmap,other14951.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14949){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15091 = k14949;
var G__15091__$1 = (((G__15091 instanceof cljs.core.Keyword))?G__15091.fqn:null);
switch (G__15091__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14949);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14948){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15106 = cljs.core.keyword_identical_QMARK_;
var expr__15107 = k__5457__auto__;
if(cljs.core.truth_((pred__15106.cljs$core$IFn$_invoke$arity$2 ? pred__15106.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15107) : pred__15106.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15107)))){
return (new shadow.dom.Size(G__14948,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15106.cljs$core$IFn$_invoke$arity$2 ? pred__15106.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15107) : pred__15106.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15107)))){
return (new shadow.dom.Size(self__.w,G__14948,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14948),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14948){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14948,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14962){
var extmap__5490__auto__ = (function (){var G__15128 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14962,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14962)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15128);
} else {
return G__15128;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14962),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14962),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__16230 = (i + (1));
var G__16231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16230;
ret = G__16231;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15169){
var vec__15170 = p__15169;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15170,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15182 = arguments.length;
switch (G__15182) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16249 = ps;
var G__16250 = (i + (1));
el__$1 = G__16249;
i = G__16250;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15210 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15210,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15210,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15210,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15218_16266 = cljs.core.seq(props);
var chunk__15219_16267 = null;
var count__15220_16268 = (0);
var i__15221_16269 = (0);
while(true){
if((i__15221_16269 < count__15220_16268)){
var vec__15247_16271 = chunk__15219_16267.cljs$core$IIndexed$_nth$arity$2(null,i__15221_16269);
var k_16272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15247_16271,(0),null);
var v_16273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15247_16271,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_16272);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16272),v_16273);


var G__16276 = seq__15218_16266;
var G__16277 = chunk__15219_16267;
var G__16278 = count__15220_16268;
var G__16279 = (i__15221_16269 + (1));
seq__15218_16266 = G__16276;
chunk__15219_16267 = G__16277;
count__15220_16268 = G__16278;
i__15221_16269 = G__16279;
continue;
} else {
var temp__5823__auto___16280 = cljs.core.seq(seq__15218_16266);
if(temp__5823__auto___16280){
var seq__15218_16282__$1 = temp__5823__auto___16280;
if(cljs.core.chunked_seq_QMARK_(seq__15218_16282__$1)){
var c__5673__auto___16283 = cljs.core.chunk_first(seq__15218_16282__$1);
var G__16284 = cljs.core.chunk_rest(seq__15218_16282__$1);
var G__16285 = c__5673__auto___16283;
var G__16286 = cljs.core.count(c__5673__auto___16283);
var G__16287 = (0);
seq__15218_16266 = G__16284;
chunk__15219_16267 = G__16285;
count__15220_16268 = G__16286;
i__15221_16269 = G__16287;
continue;
} else {
var vec__15260_16288 = cljs.core.first(seq__15218_16282__$1);
var k_16289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15260_16288,(0),null);
var v_16290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15260_16288,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_16289);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16289),v_16290);


var G__16291 = cljs.core.next(seq__15218_16282__$1);
var G__16292 = null;
var G__16293 = (0);
var G__16294 = (0);
seq__15218_16266 = G__16291;
chunk__15219_16267 = G__16292;
count__15220_16268 = G__16293;
i__15221_16269 = G__16294;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15277 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15277,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15277,(1),null);
var seq__15282_16296 = cljs.core.seq(node_children);
var chunk__15285_16297 = null;
var count__15286_16298 = (0);
var i__15287_16299 = (0);
while(true){
if((i__15287_16299 < count__15286_16298)){
var child_struct_16300 = chunk__15285_16297.cljs$core$IIndexed$_nth$arity$2(null,i__15287_16299);
if((!((child_struct_16300 == null)))){
if(typeof child_struct_16300 === 'string'){
var text_16301 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16301)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16300)));
} else {
var children_16302 = shadow.dom.svg_node(child_struct_16300);
if(cljs.core.seq_QMARK_(children_16302)){
var seq__15379_16303 = cljs.core.seq(children_16302);
var chunk__15381_16304 = null;
var count__15382_16305 = (0);
var i__15383_16306 = (0);
while(true){
if((i__15383_16306 < count__15382_16305)){
var child_16307 = chunk__15381_16304.cljs$core$IIndexed$_nth$arity$2(null,i__15383_16306);
if(cljs.core.truth_(child_16307)){
node.appendChild(child_16307);


var G__16308 = seq__15379_16303;
var G__16309 = chunk__15381_16304;
var G__16310 = count__15382_16305;
var G__16311 = (i__15383_16306 + (1));
seq__15379_16303 = G__16308;
chunk__15381_16304 = G__16309;
count__15382_16305 = G__16310;
i__15383_16306 = G__16311;
continue;
} else {
var G__16312 = seq__15379_16303;
var G__16313 = chunk__15381_16304;
var G__16314 = count__15382_16305;
var G__16315 = (i__15383_16306 + (1));
seq__15379_16303 = G__16312;
chunk__15381_16304 = G__16313;
count__15382_16305 = G__16314;
i__15383_16306 = G__16315;
continue;
}
} else {
var temp__5823__auto___16317 = cljs.core.seq(seq__15379_16303);
if(temp__5823__auto___16317){
var seq__15379_16319__$1 = temp__5823__auto___16317;
if(cljs.core.chunked_seq_QMARK_(seq__15379_16319__$1)){
var c__5673__auto___16321 = cljs.core.chunk_first(seq__15379_16319__$1);
var G__16326 = cljs.core.chunk_rest(seq__15379_16319__$1);
var G__16327 = c__5673__auto___16321;
var G__16328 = cljs.core.count(c__5673__auto___16321);
var G__16329 = (0);
seq__15379_16303 = G__16326;
chunk__15381_16304 = G__16327;
count__15382_16305 = G__16328;
i__15383_16306 = G__16329;
continue;
} else {
var child_16332 = cljs.core.first(seq__15379_16319__$1);
if(cljs.core.truth_(child_16332)){
node.appendChild(child_16332);


var G__16336 = cljs.core.next(seq__15379_16319__$1);
var G__16337 = null;
var G__16338 = (0);
var G__16339 = (0);
seq__15379_16303 = G__16336;
chunk__15381_16304 = G__16337;
count__15382_16305 = G__16338;
i__15383_16306 = G__16339;
continue;
} else {
var G__16340 = cljs.core.next(seq__15379_16319__$1);
var G__16341 = null;
var G__16342 = (0);
var G__16343 = (0);
seq__15379_16303 = G__16340;
chunk__15381_16304 = G__16341;
count__15382_16305 = G__16342;
i__15383_16306 = G__16343;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16302);
}
}


var G__16347 = seq__15282_16296;
var G__16348 = chunk__15285_16297;
var G__16349 = count__15286_16298;
var G__16350 = (i__15287_16299 + (1));
seq__15282_16296 = G__16347;
chunk__15285_16297 = G__16348;
count__15286_16298 = G__16349;
i__15287_16299 = G__16350;
continue;
} else {
var G__16351 = seq__15282_16296;
var G__16352 = chunk__15285_16297;
var G__16353 = count__15286_16298;
var G__16355 = (i__15287_16299 + (1));
seq__15282_16296 = G__16351;
chunk__15285_16297 = G__16352;
count__15286_16298 = G__16353;
i__15287_16299 = G__16355;
continue;
}
} else {
var temp__5823__auto___16365 = cljs.core.seq(seq__15282_16296);
if(temp__5823__auto___16365){
var seq__15282_16370__$1 = temp__5823__auto___16365;
if(cljs.core.chunked_seq_QMARK_(seq__15282_16370__$1)){
var c__5673__auto___16375 = cljs.core.chunk_first(seq__15282_16370__$1);
var G__16376 = cljs.core.chunk_rest(seq__15282_16370__$1);
var G__16377 = c__5673__auto___16375;
var G__16378 = cljs.core.count(c__5673__auto___16375);
var G__16379 = (0);
seq__15282_16296 = G__16376;
chunk__15285_16297 = G__16377;
count__15286_16298 = G__16378;
i__15287_16299 = G__16379;
continue;
} else {
var child_struct_16380 = cljs.core.first(seq__15282_16370__$1);
if((!((child_struct_16380 == null)))){
if(typeof child_struct_16380 === 'string'){
var text_16382 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16382)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16380)));
} else {
var children_16383 = shadow.dom.svg_node(child_struct_16380);
if(cljs.core.seq_QMARK_(children_16383)){
var seq__15437_16384 = cljs.core.seq(children_16383);
var chunk__15439_16385 = null;
var count__15440_16386 = (0);
var i__15441_16387 = (0);
while(true){
if((i__15441_16387 < count__15440_16386)){
var child_16388 = chunk__15439_16385.cljs$core$IIndexed$_nth$arity$2(null,i__15441_16387);
if(cljs.core.truth_(child_16388)){
node.appendChild(child_16388);


var G__16389 = seq__15437_16384;
var G__16390 = chunk__15439_16385;
var G__16391 = count__15440_16386;
var G__16392 = (i__15441_16387 + (1));
seq__15437_16384 = G__16389;
chunk__15439_16385 = G__16390;
count__15440_16386 = G__16391;
i__15441_16387 = G__16392;
continue;
} else {
var G__16394 = seq__15437_16384;
var G__16395 = chunk__15439_16385;
var G__16396 = count__15440_16386;
var G__16397 = (i__15441_16387 + (1));
seq__15437_16384 = G__16394;
chunk__15439_16385 = G__16395;
count__15440_16386 = G__16396;
i__15441_16387 = G__16397;
continue;
}
} else {
var temp__5823__auto___16398__$1 = cljs.core.seq(seq__15437_16384);
if(temp__5823__auto___16398__$1){
var seq__15437_16399__$1 = temp__5823__auto___16398__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15437_16399__$1)){
var c__5673__auto___16400 = cljs.core.chunk_first(seq__15437_16399__$1);
var G__16402 = cljs.core.chunk_rest(seq__15437_16399__$1);
var G__16403 = c__5673__auto___16400;
var G__16404 = cljs.core.count(c__5673__auto___16400);
var G__16405 = (0);
seq__15437_16384 = G__16402;
chunk__15439_16385 = G__16403;
count__15440_16386 = G__16404;
i__15441_16387 = G__16405;
continue;
} else {
var child_16407 = cljs.core.first(seq__15437_16399__$1);
if(cljs.core.truth_(child_16407)){
node.appendChild(child_16407);


var G__16408 = cljs.core.next(seq__15437_16399__$1);
var G__16409 = null;
var G__16410 = (0);
var G__16411 = (0);
seq__15437_16384 = G__16408;
chunk__15439_16385 = G__16409;
count__15440_16386 = G__16410;
i__15441_16387 = G__16411;
continue;
} else {
var G__16412 = cljs.core.next(seq__15437_16399__$1);
var G__16413 = null;
var G__16414 = (0);
var G__16415 = (0);
seq__15437_16384 = G__16412;
chunk__15439_16385 = G__16413;
count__15440_16386 = G__16414;
i__15441_16387 = G__16415;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16383);
}
}


var G__16420 = cljs.core.next(seq__15282_16370__$1);
var G__16421 = null;
var G__16422 = (0);
var G__16423 = (0);
seq__15282_16296 = G__16420;
chunk__15285_16297 = G__16421;
count__15286_16298 = G__16422;
i__15287_16299 = G__16423;
continue;
} else {
var G__16425 = cljs.core.next(seq__15282_16370__$1);
var G__16426 = null;
var G__16427 = (0);
var G__16428 = (0);
seq__15282_16296 = G__16425;
chunk__15285_16297 = G__16426;
count__15286_16298 = G__16427;
i__15287_16299 = G__16428;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16437 = arguments.length;
var i__5877__auto___16439 = (0);
while(true){
if((i__5877__auto___16439 < len__5876__auto___16437)){
args__5882__auto__.push((arguments[i__5877__auto___16439]));

var G__16446 = (i__5877__auto___16439 + (1));
i__5877__auto___16439 = G__16446;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15520){
var G__15521 = cljs.core.first(seq15520);
var seq15520__$1 = cljs.core.next(seq15520);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15521,seq15520__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
