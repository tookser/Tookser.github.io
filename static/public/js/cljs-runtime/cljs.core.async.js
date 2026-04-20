goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14809 = (function (f,blockable,meta14810){
this.f = f;
this.blockable = blockable;
this.meta14810 = meta14810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14811,meta14810__$1){
var self__ = this;
var _14811__$1 = this;
return (new cljs.core.async.t_cljs$core$async14809(self__.f,self__.blockable,meta14810__$1));
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14811){
var self__ = this;
var _14811__$1 = this;
return self__.meta14810;
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14810","meta14810",-263022611,null)], null);
}));

(cljs.core.async.t_cljs$core$async14809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14809");

(cljs.core.async.t_cljs$core$async14809.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14809.
 */
cljs.core.async.__GT_t_cljs$core$async14809 = (function cljs$core$async$__GT_t_cljs$core$async14809(f,blockable,meta14810){
return (new cljs.core.async.t_cljs$core$async14809(f,blockable,meta14810));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14794 = arguments.length;
switch (G__14794) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14809(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14923 = arguments.length;
switch (G__14923) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14987 = arguments.length;
switch (G__14987) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15044 = arguments.length;
switch (G__15044) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19203 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19203) : fn1.call(null,val_19203));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19203) : fn1.call(null,val_19203));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15104 = arguments.length;
switch (G__15104) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___19205 = n;
var x_19206 = (0);
while(true){
if((x_19206 < n__5741__auto___19205)){
(a[x_19206] = x_19206);

var G__19207 = (x_19206 + (1));
x_19206 = G__19207;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15138 = (function (flag,meta15139){
this.flag = flag;
this.meta15139 = meta15139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15140,meta15139__$1){
var self__ = this;
var _15140__$1 = this;
return (new cljs.core.async.t_cljs$core$async15138(self__.flag,meta15139__$1));
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15140){
var self__ = this;
var _15140__$1 = this;
return self__.meta15139;
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15139","meta15139",1500871687,null)], null);
}));

(cljs.core.async.t_cljs$core$async15138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15138");

(cljs.core.async.t_cljs$core$async15138.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15138.
 */
cljs.core.async.__GT_t_cljs$core$async15138 = (function cljs$core$async$__GT_t_cljs$core$async15138(flag,meta15139){
return (new cljs.core.async.t_cljs$core$async15138(flag,meta15139));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15138(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15178 = (function (flag,cb,meta15179){
this.flag = flag;
this.cb = cb;
this.meta15179 = meta15179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15180,meta15179__$1){
var self__ = this;
var _15180__$1 = this;
return (new cljs.core.async.t_cljs$core$async15178(self__.flag,self__.cb,meta15179__$1));
}));

(cljs.core.async.t_cljs$core$async15178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15180){
var self__ = this;
var _15180__$1 = this;
return self__.meta15179;
}));

(cljs.core.async.t_cljs$core$async15178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15179","meta15179",1860424189,null)], null);
}));

(cljs.core.async.t_cljs$core$async15178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15178");

(cljs.core.async.t_cljs$core$async15178.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15178.
 */
cljs.core.async.__GT_t_cljs$core$async15178 = (function cljs$core$async$__GT_t_cljs$core$async15178(flag,cb,meta15179){
return (new cljs.core.async.t_cljs$core$async15178(flag,cb,meta15179));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15178(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_19218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19218)){
if((!(((port_19218.cljs$core$IFn$_invoke$arity$1 ? port_19218.cljs$core$IFn$_invoke$arity$1((1)) : port_19218.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19219 = (i + (1));
i = G__19219;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15192_SHARP_){
var G__15194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15192_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15194) : fret.call(null,G__15194));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15193_SHARP_){
var G__15195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15193_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15195) : fret.call(null,G__15195));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19220 = (i + (1));
i = G__19220;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19221 = arguments.length;
var i__5877__auto___19222 = (0);
while(true){
if((i__5877__auto___19222 < len__5876__auto___19221)){
args__5882__auto__.push((arguments[i__5877__auto___19222]));

var G__19223 = (i__5877__auto___19222 + (1));
i__5877__auto___19222 = G__19223;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15232){
var map__15233 = p__15232;
var map__15233__$1 = cljs.core.__destructure_map(map__15233);
var opts = map__15233__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15208){
var G__15209 = cljs.core.first(seq15208);
var seq15208__$1 = cljs.core.next(seq15208);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15209,seq15208__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15257 = arguments.length;
switch (G__15257) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14658__auto___19225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_15337){
var state_val_15340 = (state_15337[(1)]);
if((state_val_15340 === (7))){
var inst_15322 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
var statearr_15360_19226 = state_15337__$1;
(statearr_15360_19226[(2)] = inst_15322);

(statearr_15360_19226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (1))){
var state_15337__$1 = state_15337;
var statearr_15362_19227 = state_15337__$1;
(statearr_15362_19227[(2)] = null);

(statearr_15362_19227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (4))){
var inst_15299 = (state_15337[(7)]);
var inst_15299__$1 = (state_15337[(2)]);
var inst_15302 = (inst_15299__$1 == null);
var state_15337__$1 = (function (){var statearr_15371 = state_15337;
(statearr_15371[(7)] = inst_15299__$1);

return statearr_15371;
})();
if(cljs.core.truth_(inst_15302)){
var statearr_15372_19228 = state_15337__$1;
(statearr_15372_19228[(1)] = (5));

} else {
var statearr_15374_19229 = state_15337__$1;
(statearr_15374_19229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (13))){
var state_15337__$1 = state_15337;
var statearr_15375_19230 = state_15337__$1;
(statearr_15375_19230[(2)] = null);

(statearr_15375_19230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (6))){
var inst_15299 = (state_15337[(7)]);
var state_15337__$1 = state_15337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15337__$1,(11),to,inst_15299);
} else {
if((state_val_15340 === (3))){
var inst_15325 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15337__$1,inst_15325);
} else {
if((state_val_15340 === (12))){
var state_15337__$1 = state_15337;
var statearr_15389_19231 = state_15337__$1;
(statearr_15389_19231[(2)] = null);

(statearr_15389_19231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (2))){
var state_15337__$1 = state_15337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15337__$1,(4),from);
} else {
if((state_val_15340 === (11))){
var inst_15315 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
if(cljs.core.truth_(inst_15315)){
var statearr_15390_19232 = state_15337__$1;
(statearr_15390_19232[(1)] = (12));

} else {
var statearr_15391_19233 = state_15337__$1;
(statearr_15391_19233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (9))){
var state_15337__$1 = state_15337;
var statearr_15402_19234 = state_15337__$1;
(statearr_15402_19234[(2)] = null);

(statearr_15402_19234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (5))){
var state_15337__$1 = state_15337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15406_19235 = state_15337__$1;
(statearr_15406_19235[(1)] = (8));

} else {
var statearr_15410_19236 = state_15337__$1;
(statearr_15410_19236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (14))){
var inst_15320 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
var statearr_15413_19237 = state_15337__$1;
(statearr_15413_19237[(2)] = inst_15320);

(statearr_15413_19237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (10))){
var inst_15312 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
var statearr_15416_19238 = state_15337__$1;
(statearr_15416_19238[(2)] = inst_15312);

(statearr_15416_19238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (8))){
var inst_15309 = cljs.core.async.close_BANG_(to);
var state_15337__$1 = state_15337;
var statearr_15422_19239 = state_15337__$1;
(statearr_15422_19239[(2)] = inst_15309);

(statearr_15422_19239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_15434 = [null,null,null,null,null,null,null,null];
(statearr_15434[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_15434[(1)] = (1));

return statearr_15434;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_15337){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15337);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15444){var ex__13477__auto__ = e15444;
var statearr_15445_19240 = state_15337;
(statearr_15445_19240[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15337[(4)]))){
var statearr_15452_19241 = state_15337;
(statearr_15452_19241[(1)] = cljs.core.first((state_15337[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19242 = state_15337;
state_15337 = G__19242;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_15337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_15337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_15457 = f__14659__auto__();
(statearr_15457[(6)] = c__14658__auto___19225);

return statearr_15457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15483){
var vec__15486 = p__15483;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15486,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15486,(1),null);
var job = vec__15486;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14658__auto___19244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_15499){
var state_val_15500 = (state_15499[(1)]);
if((state_val_15500 === (1))){
var state_15499__$1 = state_15499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15499__$1,(2),res,v);
} else {
if((state_val_15500 === (2))){
var inst_15496 = (state_15499[(2)]);
var inst_15497 = cljs.core.async.close_BANG_(res);
var state_15499__$1 = (function (){var statearr_15517 = state_15499;
(statearr_15517[(7)] = inst_15496);

return statearr_15517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15499__$1,inst_15497);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_15525 = [null,null,null,null,null,null,null,null];
(statearr_15525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_15525[(1)] = (1));

return statearr_15525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_15499){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15499);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15535){var ex__13477__auto__ = e15535;
var statearr_15537_19245 = state_15499;
(statearr_15537_19245[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15499[(4)]))){
var statearr_15540_19246 = state_15499;
(statearr_15540_19246[(1)] = cljs.core.first((state_15499[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19247 = state_15499;
state_15499 = G__19247;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_15499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_15499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_15549 = f__14659__auto__();
(statearr_15549[(6)] = c__14658__auto___19244);

return statearr_15549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15559){
var vec__15560 = p__15559;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560,(1),null);
var job = vec__15560;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___19250 = n;
var __19251 = (0);
while(true){
if((__19251 < n__5741__auto___19250)){
var G__15576_19252 = type;
var G__15576_19253__$1 = (((G__15576_19252 instanceof cljs.core.Keyword))?G__15576_19252.fqn:null);
switch (G__15576_19253__$1) {
case "compute":
var c__14658__auto___19255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19251,c__14658__auto___19255,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = ((function (__19251,c__14658__auto___19255,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async){
return (function (state_15598){
var state_val_15599 = (state_15598[(1)]);
if((state_val_15599 === (1))){
var state_15598__$1 = state_15598;
var statearr_15616_19259 = state_15598__$1;
(statearr_15616_19259[(2)] = null);

(statearr_15616_19259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (2))){
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15598__$1,(4),jobs);
} else {
if((state_val_15599 === (3))){
var inst_15596 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15598__$1,inst_15596);
} else {
if((state_val_15599 === (4))){
var inst_15586 = (state_15598[(2)]);
var inst_15587 = process__$1(inst_15586);
var state_15598__$1 = state_15598;
if(cljs.core.truth_(inst_15587)){
var statearr_15621_19260 = state_15598__$1;
(statearr_15621_19260[(1)] = (5));

} else {
var statearr_15624_19261 = state_15598__$1;
(statearr_15624_19261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (5))){
var state_15598__$1 = state_15598;
var statearr_15625_19262 = state_15598__$1;
(statearr_15625_19262[(2)] = null);

(statearr_15625_19262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (6))){
var state_15598__$1 = state_15598;
var statearr_15628_19263 = state_15598__$1;
(statearr_15628_19263[(2)] = null);

(statearr_15628_19263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15599 === (7))){
var inst_15592 = (state_15598[(2)]);
var state_15598__$1 = state_15598;
var statearr_15631_19264 = state_15598__$1;
(statearr_15631_19264[(2)] = inst_15592);

(statearr_15631_19264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19251,c__14658__auto___19255,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async))
;
return ((function (__19251,switch__13473__auto__,c__14658__auto___19255,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_15638 = [null,null,null,null,null,null,null];
(statearr_15638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_15638[(1)] = (1));

return statearr_15638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_15598){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15598);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15639){var ex__13477__auto__ = e15639;
var statearr_15641_19269 = state_15598;
(statearr_15641_19269[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15598[(4)]))){
var statearr_15642_19270 = state_15598;
(statearr_15642_19270[(1)] = cljs.core.first((state_15598[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19271 = state_15598;
state_15598 = G__19271;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_15598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_15598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
;})(__19251,switch__13473__auto__,c__14658__auto___19255,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async))
})();
var state__14660__auto__ = (function (){var statearr_15645 = f__14659__auto__();
(statearr_15645[(6)] = c__14658__auto___19255);

return statearr_15645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(__19251,c__14658__auto___19255,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async))
);


break;
case "async":
var c__14658__auto___19272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19251,c__14658__auto___19272,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = ((function (__19251,c__14658__auto___19272,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async){
return (function (state_15661){
var state_val_15662 = (state_15661[(1)]);
if((state_val_15662 === (1))){
var state_15661__$1 = state_15661;
var statearr_15667_19274 = state_15661__$1;
(statearr_15667_19274[(2)] = null);

(statearr_15667_19274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (2))){
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15661__$1,(4),jobs);
} else {
if((state_val_15662 === (3))){
var inst_15659 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15661__$1,inst_15659);
} else {
if((state_val_15662 === (4))){
var inst_15650 = (state_15661[(2)]);
var inst_15651 = async(inst_15650);
var state_15661__$1 = state_15661;
if(cljs.core.truth_(inst_15651)){
var statearr_15673_19275 = state_15661__$1;
(statearr_15673_19275[(1)] = (5));

} else {
var statearr_15674_19276 = state_15661__$1;
(statearr_15674_19276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (5))){
var state_15661__$1 = state_15661;
var statearr_15675_19277 = state_15661__$1;
(statearr_15675_19277[(2)] = null);

(statearr_15675_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (6))){
var state_15661__$1 = state_15661;
var statearr_15676_19278 = state_15661__$1;
(statearr_15676_19278[(2)] = null);

(statearr_15676_19278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15662 === (7))){
var inst_15656 = (state_15661[(2)]);
var state_15661__$1 = state_15661;
var statearr_15682_19279 = state_15661__$1;
(statearr_15682_19279[(2)] = inst_15656);

(statearr_15682_19279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19251,c__14658__auto___19272,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async))
;
return ((function (__19251,switch__13473__auto__,c__14658__auto___19272,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_15696 = [null,null,null,null,null,null,null];
(statearr_15696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_15696[(1)] = (1));

return statearr_15696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_15661){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15661);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15698){var ex__13477__auto__ = e15698;
var statearr_15699_19280 = state_15661;
(statearr_15699_19280[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15661[(4)]))){
var statearr_15700_19281 = state_15661;
(statearr_15700_19281[(1)] = cljs.core.first((state_15661[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19282 = state_15661;
state_15661 = G__19282;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_15661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_15661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
;})(__19251,switch__13473__auto__,c__14658__auto___19272,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async))
})();
var state__14660__auto__ = (function (){var statearr_15702 = f__14659__auto__();
(statearr_15702[(6)] = c__14658__auto___19272);

return statearr_15702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(__19251,c__14658__auto___19272,G__15576_19252,G__15576_19253__$1,n__5741__auto___19250,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15576_19253__$1))));

}

var G__19283 = (__19251 + (1));
__19251 = G__19283;
continue;
} else {
}
break;
}

var c__14658__auto___19285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_15764){
var state_val_15765 = (state_15764[(1)]);
if((state_val_15765 === (7))){
var inst_15757 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
var statearr_15773_19286 = state_15764__$1;
(statearr_15773_19286[(2)] = inst_15757);

(statearr_15773_19286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (1))){
var state_15764__$1 = state_15764;
var statearr_15775_19287 = state_15764__$1;
(statearr_15775_19287[(2)] = null);

(statearr_15775_19287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (4))){
var inst_15720 = (state_15764[(7)]);
var inst_15720__$1 = (state_15764[(2)]);
var inst_15724 = (inst_15720__$1 == null);
var state_15764__$1 = (function (){var statearr_15776 = state_15764;
(statearr_15776[(7)] = inst_15720__$1);

return statearr_15776;
})();
if(cljs.core.truth_(inst_15724)){
var statearr_15777_19288 = state_15764__$1;
(statearr_15777_19288[(1)] = (5));

} else {
var statearr_15778_19289 = state_15764__$1;
(statearr_15778_19289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (6))){
var inst_15720 = (state_15764[(7)]);
var inst_15730 = (state_15764[(8)]);
var inst_15730__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15745 = [inst_15720,inst_15730__$1];
var inst_15746 = (new cljs.core.PersistentVector(null,2,(5),inst_15744,inst_15745,null));
var state_15764__$1 = (function (){var statearr_15782 = state_15764;
(statearr_15782[(8)] = inst_15730__$1);

return statearr_15782;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15764__$1,(8),jobs,inst_15746);
} else {
if((state_val_15765 === (3))){
var inst_15759 = (state_15764[(2)]);
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15764__$1,inst_15759);
} else {
if((state_val_15765 === (2))){
var state_15764__$1 = state_15764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15764__$1,(4),from);
} else {
if((state_val_15765 === (9))){
var inst_15754 = (state_15764[(2)]);
var state_15764__$1 = (function (){var statearr_15785 = state_15764;
(statearr_15785[(9)] = inst_15754);

return statearr_15785;
})();
var statearr_15786_19290 = state_15764__$1;
(statearr_15786_19290[(2)] = null);

(statearr_15786_19290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (5))){
var inst_15726 = cljs.core.async.close_BANG_(jobs);
var state_15764__$1 = state_15764;
var statearr_15788_19291 = state_15764__$1;
(statearr_15788_19291[(2)] = inst_15726);

(statearr_15788_19291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15765 === (8))){
var inst_15730 = (state_15764[(8)]);
var inst_15748 = (state_15764[(2)]);
var state_15764__$1 = (function (){var statearr_15792 = state_15764;
(statearr_15792[(10)] = inst_15748);

return statearr_15792;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15764__$1,(9),results,inst_15730);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_15793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_15793[(1)] = (1));

return statearr_15793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_15764){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15764);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e15806){var ex__13477__auto__ = e15806;
var statearr_15807_19292 = state_15764;
(statearr_15807_19292[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15764[(4)]))){
var statearr_15814_19293 = state_15764;
(statearr_15814_19293[(1)] = cljs.core.first((state_15764[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19294 = state_15764;
state_15764 = G__19294;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_15764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_15764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_15842 = f__14659__auto__();
(statearr_15842[(6)] = c__14658__auto___19285);

return statearr_15842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_15927){
var state_val_15928 = (state_15927[(1)]);
if((state_val_15928 === (7))){
var inst_15922 = (state_15927[(2)]);
var state_15927__$1 = state_15927;
var statearr_15930_19295 = state_15927__$1;
(statearr_15930_19295[(2)] = inst_15922);

(statearr_15930_19295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (20))){
var state_15927__$1 = state_15927;
var statearr_15931_19296 = state_15927__$1;
(statearr_15931_19296[(2)] = null);

(statearr_15931_19296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (1))){
var state_15927__$1 = state_15927;
var statearr_15940_19297 = state_15927__$1;
(statearr_15940_19297[(2)] = null);

(statearr_15940_19297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (4))){
var inst_15859 = (state_15927[(7)]);
var inst_15859__$1 = (state_15927[(2)]);
var inst_15861 = (inst_15859__$1 == null);
var state_15927__$1 = (function (){var statearr_15956 = state_15927;
(statearr_15956[(7)] = inst_15859__$1);

return statearr_15956;
})();
if(cljs.core.truth_(inst_15861)){
var statearr_15958_19299 = state_15927__$1;
(statearr_15958_19299[(1)] = (5));

} else {
var statearr_15960_19300 = state_15927__$1;
(statearr_15960_19300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (15))){
var inst_15894 = (state_15927[(8)]);
var state_15927__$1 = state_15927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15927__$1,(18),to,inst_15894);
} else {
if((state_val_15928 === (21))){
var inst_15917 = (state_15927[(2)]);
var state_15927__$1 = state_15927;
var statearr_15962_19301 = state_15927__$1;
(statearr_15962_19301[(2)] = inst_15917);

(statearr_15962_19301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (13))){
var inst_15919 = (state_15927[(2)]);
var state_15927__$1 = (function (){var statearr_15963 = state_15927;
(statearr_15963[(9)] = inst_15919);

return statearr_15963;
})();
var statearr_15964_19302 = state_15927__$1;
(statearr_15964_19302[(2)] = null);

(statearr_15964_19302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (6))){
var inst_15859 = (state_15927[(7)]);
var state_15927__$1 = state_15927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15927__$1,(11),inst_15859);
} else {
if((state_val_15928 === (17))){
var inst_15911 = (state_15927[(2)]);
var state_15927__$1 = state_15927;
if(cljs.core.truth_(inst_15911)){
var statearr_15967_19303 = state_15927__$1;
(statearr_15967_19303[(1)] = (19));

} else {
var statearr_15968_19304 = state_15927__$1;
(statearr_15968_19304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (3))){
var inst_15925 = (state_15927[(2)]);
var state_15927__$1 = state_15927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15927__$1,inst_15925);
} else {
if((state_val_15928 === (12))){
var inst_15882 = (state_15927[(10)]);
var state_15927__$1 = state_15927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15927__$1,(14),inst_15882);
} else {
if((state_val_15928 === (2))){
var state_15927__$1 = state_15927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15927__$1,(4),results);
} else {
if((state_val_15928 === (19))){
var state_15927__$1 = state_15927;
var statearr_15980_19306 = state_15927__$1;
(statearr_15980_19306[(2)] = null);

(statearr_15980_19306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (11))){
var inst_15882 = (state_15927[(2)]);
var state_15927__$1 = (function (){var statearr_15991 = state_15927;
(statearr_15991[(10)] = inst_15882);

return statearr_15991;
})();
var statearr_15994_19307 = state_15927__$1;
(statearr_15994_19307[(2)] = null);

(statearr_15994_19307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (9))){
var state_15927__$1 = state_15927;
var statearr_16008_19308 = state_15927__$1;
(statearr_16008_19308[(2)] = null);

(statearr_16008_19308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (5))){
var state_15927__$1 = state_15927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16019_19309 = state_15927__$1;
(statearr_16019_19309[(1)] = (8));

} else {
var statearr_16023_19311 = state_15927__$1;
(statearr_16023_19311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (14))){
var inst_15894 = (state_15927[(8)]);
var inst_15905 = (state_15927[(11)]);
var inst_15894__$1 = (state_15927[(2)]);
var inst_15904 = (inst_15894__$1 == null);
var inst_15905__$1 = cljs.core.not(inst_15904);
var state_15927__$1 = (function (){var statearr_16036 = state_15927;
(statearr_16036[(8)] = inst_15894__$1);

(statearr_16036[(11)] = inst_15905__$1);

return statearr_16036;
})();
if(inst_15905__$1){
var statearr_16041_19313 = state_15927__$1;
(statearr_16041_19313[(1)] = (15));

} else {
var statearr_16046_19314 = state_15927__$1;
(statearr_16046_19314[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (16))){
var inst_15905 = (state_15927[(11)]);
var state_15927__$1 = state_15927;
var statearr_16050_19316 = state_15927__$1;
(statearr_16050_19316[(2)] = inst_15905);

(statearr_16050_19316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (10))){
var inst_15877 = (state_15927[(2)]);
var state_15927__$1 = state_15927;
var statearr_16054_19317 = state_15927__$1;
(statearr_16054_19317[(2)] = inst_15877);

(statearr_16054_19317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (18))){
var inst_15908 = (state_15927[(2)]);
var state_15927__$1 = state_15927;
var statearr_16056_19318 = state_15927__$1;
(statearr_16056_19318[(2)] = inst_15908);

(statearr_16056_19318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15928 === (8))){
var inst_15873 = cljs.core.async.close_BANG_(to);
var state_15927__$1 = state_15927;
var statearr_16057_19319 = state_15927__$1;
(statearr_16057_19319[(2)] = inst_15873);

(statearr_16057_19319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_16060 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__);

(statearr_16060[(1)] = (1));

return statearr_16060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1 = (function (state_15927){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_15927);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16066){var ex__13477__auto__ = e16066;
var statearr_16067_19321 = state_15927;
(statearr_16067_19321[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_15927[(4)]))){
var statearr_16076_19322 = state_15927;
(statearr_16076_19322[(1)] = cljs.core.first((state_15927[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19323 = state_15927;
state_15927 = G__19323;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__ = function(state_15927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1.call(this,state_15927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_16084 = f__14659__auto__();
(statearr_16084[(6)] = c__14658__auto__);

return statearr_16084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));

return c__14658__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16089 = arguments.length;
switch (G__16089) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16142 = arguments.length;
switch (G__16142) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16163 = arguments.length;
switch (G__16163) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14658__auto___19329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_16203){
var state_val_16204 = (state_16203[(1)]);
if((state_val_16204 === (7))){
var inst_16197 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16210_19330 = state_16203__$1;
(statearr_16210_19330[(2)] = inst_16197);

(statearr_16210_19330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (1))){
var state_16203__$1 = state_16203;
var statearr_16212_19331 = state_16203__$1;
(statearr_16212_19331[(2)] = null);

(statearr_16212_19331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (4))){
var inst_16176 = (state_16203[(7)]);
var inst_16176__$1 = (state_16203[(2)]);
var inst_16177 = (inst_16176__$1 == null);
var state_16203__$1 = (function (){var statearr_16217 = state_16203;
(statearr_16217[(7)] = inst_16176__$1);

return statearr_16217;
})();
if(cljs.core.truth_(inst_16177)){
var statearr_16218_19333 = state_16203__$1;
(statearr_16218_19333[(1)] = (5));

} else {
var statearr_16219_19334 = state_16203__$1;
(statearr_16219_19334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (13))){
var state_16203__$1 = state_16203;
var statearr_16223_19335 = state_16203__$1;
(statearr_16223_19335[(2)] = null);

(statearr_16223_19335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (6))){
var inst_16176 = (state_16203[(7)]);
var inst_16184 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16176) : p.call(null,inst_16176));
var state_16203__$1 = state_16203;
if(cljs.core.truth_(inst_16184)){
var statearr_16228_19336 = state_16203__$1;
(statearr_16228_19336[(1)] = (9));

} else {
var statearr_16229_19339 = state_16203__$1;
(statearr_16229_19339[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (3))){
var inst_16199 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16203__$1,inst_16199);
} else {
if((state_val_16204 === (12))){
var state_16203__$1 = state_16203;
var statearr_16235_19342 = state_16203__$1;
(statearr_16235_19342[(2)] = null);

(statearr_16235_19342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (2))){
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16203__$1,(4),ch);
} else {
if((state_val_16204 === (11))){
var inst_16176 = (state_16203[(7)]);
var inst_16188 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16203__$1,(8),inst_16188,inst_16176);
} else {
if((state_val_16204 === (9))){
var state_16203__$1 = state_16203;
var statearr_16246_19343 = state_16203__$1;
(statearr_16246_19343[(2)] = tc);

(statearr_16246_19343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (5))){
var inst_16179 = cljs.core.async.close_BANG_(tc);
var inst_16182 = cljs.core.async.close_BANG_(fc);
var state_16203__$1 = (function (){var statearr_16247 = state_16203;
(statearr_16247[(8)] = inst_16179);

return statearr_16247;
})();
var statearr_16248_19345 = state_16203__$1;
(statearr_16248_19345[(2)] = inst_16182);

(statearr_16248_19345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (14))){
var inst_16195 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
var statearr_16255_19346 = state_16203__$1;
(statearr_16255_19346[(2)] = inst_16195);

(statearr_16255_19346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (10))){
var state_16203__$1 = state_16203;
var statearr_16261_19347 = state_16203__$1;
(statearr_16261_19347[(2)] = fc);

(statearr_16261_19347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16204 === (8))){
var inst_16190 = (state_16203[(2)]);
var state_16203__$1 = state_16203;
if(cljs.core.truth_(inst_16190)){
var statearr_16262_19348 = state_16203__$1;
(statearr_16262_19348[(1)] = (12));

} else {
var statearr_16263_19349 = state_16203__$1;
(statearr_16263_19349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16265 = [null,null,null,null,null,null,null,null,null];
(statearr_16265[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16265[(1)] = (1));

return statearr_16265;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_16203){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16203);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16274){var ex__13477__auto__ = e16274;
var statearr_16275_19351 = state_16203;
(statearr_16275_19351[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16203[(4)]))){
var statearr_16281_19352 = state_16203;
(statearr_16281_19352[(1)] = cljs.core.first((state_16203[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19353 = state_16203;
state_16203 = G__19353;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_16203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_16203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_16295 = f__14659__auto__();
(statearr_16295[(6)] = c__14658__auto___19329);

return statearr_16295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_16371){
var state_val_16374 = (state_16371[(1)]);
if((state_val_16374 === (7))){
var inst_16364 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
var statearr_16393_19355 = state_16371__$1;
(statearr_16393_19355[(2)] = inst_16364);

(statearr_16393_19355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16374 === (1))){
var inst_16316 = init;
var inst_16318 = inst_16316;
var state_16371__$1 = (function (){var statearr_16401 = state_16371;
(statearr_16401[(7)] = inst_16318);

return statearr_16401;
})();
var statearr_16406_19356 = state_16371__$1;
(statearr_16406_19356[(2)] = null);

(statearr_16406_19356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16374 === (4))){
var inst_16331 = (state_16371[(8)]);
var inst_16331__$1 = (state_16371[(2)]);
var inst_16333 = (inst_16331__$1 == null);
var state_16371__$1 = (function (){var statearr_16419 = state_16371;
(statearr_16419[(8)] = inst_16331__$1);

return statearr_16419;
})();
if(cljs.core.truth_(inst_16333)){
var statearr_16429_19357 = state_16371__$1;
(statearr_16429_19357[(1)] = (5));

} else {
var statearr_16430_19358 = state_16371__$1;
(statearr_16430_19358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16374 === (6))){
var inst_16318 = (state_16371[(7)]);
var inst_16331 = (state_16371[(8)]);
var inst_16344 = (state_16371[(9)]);
var inst_16344__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16318,inst_16331) : f.call(null,inst_16318,inst_16331));
var inst_16345 = cljs.core.reduced_QMARK_(inst_16344__$1);
var state_16371__$1 = (function (){var statearr_16432 = state_16371;
(statearr_16432[(9)] = inst_16344__$1);

return statearr_16432;
})();
if(inst_16345){
var statearr_16433_19359 = state_16371__$1;
(statearr_16433_19359[(1)] = (8));

} else {
var statearr_16434_19360 = state_16371__$1;
(statearr_16434_19360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16374 === (3))){
var inst_16367 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16371__$1,inst_16367);
} else {
if((state_val_16374 === (2))){
var state_16371__$1 = state_16371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16371__$1,(4),ch);
} else {
if((state_val_16374 === (9))){
var inst_16344 = (state_16371[(9)]);
var inst_16318 = inst_16344;
var state_16371__$1 = (function (){var statearr_16447 = state_16371;
(statearr_16447[(7)] = inst_16318);

return statearr_16447;
})();
var statearr_16448_19368 = state_16371__$1;
(statearr_16448_19368[(2)] = null);

(statearr_16448_19368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16374 === (5))){
var inst_16318 = (state_16371[(7)]);
var state_16371__$1 = state_16371;
var statearr_16449_19369 = state_16371__$1;
(statearr_16449_19369[(2)] = inst_16318);

(statearr_16449_19369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16374 === (10))){
var inst_16360 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
var statearr_16452_19370 = state_16371__$1;
(statearr_16452_19370[(2)] = inst_16360);

(statearr_16452_19370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16374 === (8))){
var inst_16344 = (state_16371[(9)]);
var inst_16354 = cljs.core.deref(inst_16344);
var state_16371__$1 = state_16371;
var statearr_16453_19371 = state_16371__$1;
(statearr_16453_19371[(2)] = inst_16354);

(statearr_16453_19371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13474__auto____0 = (function (){
var statearr_16457 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16457[(0)] = cljs$core$async$reduce_$_state_machine__13474__auto__);

(statearr_16457[(1)] = (1));

return statearr_16457;
});
var cljs$core$async$reduce_$_state_machine__13474__auto____1 = (function (state_16371){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16371);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16458){var ex__13477__auto__ = e16458;
var statearr_16459_19372 = state_16371;
(statearr_16459_19372[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16371[(4)]))){
var statearr_16460_19373 = state_16371;
(statearr_16460_19373[(1)] = cljs.core.first((state_16371[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19374 = state_16371;
state_16371 = G__19374;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13474__auto__ = function(state_16371){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13474__auto____1.call(this,state_16371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13474__auto____0;
cljs$core$async$reduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13474__auto____1;
return cljs$core$async$reduce_$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_16463 = f__14659__auto__();
(statearr_16463[(6)] = c__14658__auto__);

return statearr_16463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));

return c__14658__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_16469){
var state_val_16470 = (state_16469[(1)]);
if((state_val_16470 === (1))){
var inst_16464 = cljs.core.async.reduce(f__$1,init,ch);
var state_16469__$1 = state_16469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16469__$1,(2),inst_16464);
} else {
if((state_val_16470 === (2))){
var inst_16466 = (state_16469[(2)]);
var inst_16467 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16466) : f__$1.call(null,inst_16466));
var state_16469__$1 = state_16469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16469__$1,inst_16467);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13474__auto____0 = (function (){
var statearr_16476 = [null,null,null,null,null,null,null];
(statearr_16476[(0)] = cljs$core$async$transduce_$_state_machine__13474__auto__);

(statearr_16476[(1)] = (1));

return statearr_16476;
});
var cljs$core$async$transduce_$_state_machine__13474__auto____1 = (function (state_16469){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16469);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16478){var ex__13477__auto__ = e16478;
var statearr_16482_19378 = state_16469;
(statearr_16482_19378[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16469[(4)]))){
var statearr_16483_19379 = state_16469;
(statearr_16483_19379[(1)] = cljs.core.first((state_16469[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19380 = state_16469;
state_16469 = G__19380;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13474__auto__ = function(state_16469){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13474__auto____1.call(this,state_16469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13474__auto____0;
cljs$core$async$transduce_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13474__auto____1;
return cljs$core$async$transduce_$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_16486 = f__14659__auto__();
(statearr_16486[(6)] = c__14658__auto__);

return statearr_16486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));

return c__14658__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16489 = arguments.length;
switch (G__16489) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_16526){
var state_val_16527 = (state_16526[(1)]);
if((state_val_16527 === (7))){
var inst_16503 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16528_19382 = state_16526__$1;
(statearr_16528_19382[(2)] = inst_16503);

(statearr_16528_19382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (1))){
var inst_16497 = cljs.core.seq(coll);
var inst_16498 = inst_16497;
var state_16526__$1 = (function (){var statearr_16533 = state_16526;
(statearr_16533[(7)] = inst_16498);

return statearr_16533;
})();
var statearr_16534_19383 = state_16526__$1;
(statearr_16534_19383[(2)] = null);

(statearr_16534_19383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (4))){
var inst_16498 = (state_16526[(7)]);
var inst_16501 = cljs.core.first(inst_16498);
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16526__$1,(7),ch,inst_16501);
} else {
if((state_val_16527 === (13))){
var inst_16516 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16540_19384 = state_16526__$1;
(statearr_16540_19384[(2)] = inst_16516);

(statearr_16540_19384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (6))){
var inst_16506 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
if(cljs.core.truth_(inst_16506)){
var statearr_16541_19385 = state_16526__$1;
(statearr_16541_19385[(1)] = (8));

} else {
var statearr_16542_19386 = state_16526__$1;
(statearr_16542_19386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (3))){
var inst_16520 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16526__$1,inst_16520);
} else {
if((state_val_16527 === (12))){
var state_16526__$1 = state_16526;
var statearr_16543_19387 = state_16526__$1;
(statearr_16543_19387[(2)] = null);

(statearr_16543_19387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (2))){
var inst_16498 = (state_16526[(7)]);
var state_16526__$1 = state_16526;
if(cljs.core.truth_(inst_16498)){
var statearr_16547_19388 = state_16526__$1;
(statearr_16547_19388[(1)] = (4));

} else {
var statearr_16548_19389 = state_16526__$1;
(statearr_16548_19389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (11))){
var inst_16513 = cljs.core.async.close_BANG_(ch);
var state_16526__$1 = state_16526;
var statearr_16551_19390 = state_16526__$1;
(statearr_16551_19390[(2)] = inst_16513);

(statearr_16551_19390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (9))){
var state_16526__$1 = state_16526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16552_19391 = state_16526__$1;
(statearr_16552_19391[(1)] = (11));

} else {
var statearr_16553_19392 = state_16526__$1;
(statearr_16553_19392[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (5))){
var inst_16498 = (state_16526[(7)]);
var state_16526__$1 = state_16526;
var statearr_16560_19393 = state_16526__$1;
(statearr_16560_19393[(2)] = inst_16498);

(statearr_16560_19393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (10))){
var inst_16518 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16561_19394 = state_16526__$1;
(statearr_16561_19394[(2)] = inst_16518);

(statearr_16561_19394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16527 === (8))){
var inst_16498 = (state_16526[(7)]);
var inst_16508 = cljs.core.next(inst_16498);
var inst_16498__$1 = inst_16508;
var state_16526__$1 = (function (){var statearr_16562 = state_16526;
(statearr_16562[(7)] = inst_16498__$1);

return statearr_16562;
})();
var statearr_16563_19395 = state_16526__$1;
(statearr_16563_19395[(2)] = null);

(statearr_16563_19395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_16569 = [null,null,null,null,null,null,null,null];
(statearr_16569[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_16569[(1)] = (1));

return statearr_16569;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_16526){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16526);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e16575){var ex__13477__auto__ = e16575;
var statearr_16576_19397 = state_16526;
(statearr_16576_19397[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16526[(4)]))){
var statearr_16578_19398 = state_16526;
(statearr_16578_19398[(1)] = cljs.core.first((state_16526[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19399 = state_16526;
state_16526 = G__19399;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_16526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_16526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_16583 = f__14659__auto__();
(statearr_16583[(6)] = c__14658__auto__);

return statearr_16583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));

return c__14658__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16587 = arguments.length;
switch (G__16587) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19407 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19407(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19411 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19411(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19412 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19412(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19413 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19413(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16652 = (function (ch,cs,meta16653){
this.ch = ch;
this.cs = cs;
this.meta16653 = meta16653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16654,meta16653__$1){
var self__ = this;
var _16654__$1 = this;
return (new cljs.core.async.t_cljs$core$async16652(self__.ch,self__.cs,meta16653__$1));
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16654){
var self__ = this;
var _16654__$1 = this;
return self__.meta16653;
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16652.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16653","meta16653",1309379015,null)], null);
}));

(cljs.core.async.t_cljs$core$async16652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16652");

(cljs.core.async.t_cljs$core$async16652.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16652.
 */
cljs.core.async.__GT_t_cljs$core$async16652 = (function cljs$core$async$__GT_t_cljs$core$async16652(ch,cs,meta16653){
return (new cljs.core.async.t_cljs$core$async16652(ch,cs,meta16653));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16652(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14658__auto___19420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_16842){
var state_val_16843 = (state_16842[(1)]);
if((state_val_16843 === (7))){
var inst_16831 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16847_19422 = state_16842__$1;
(statearr_16847_19422[(2)] = inst_16831);

(statearr_16847_19422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (20))){
var inst_16718 = (state_16842[(7)]);
var inst_16734 = cljs.core.first(inst_16718);
var inst_16736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16734,(0),null);
var inst_16737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16734,(1),null);
var state_16842__$1 = (function (){var statearr_16849 = state_16842;
(statearr_16849[(8)] = inst_16736);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16737)){
var statearr_16850_19423 = state_16842__$1;
(statearr_16850_19423[(1)] = (22));

} else {
var statearr_16852_19424 = state_16842__$1;
(statearr_16852_19424[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (27))){
var inst_16771 = (state_16842[(9)]);
var inst_16773 = (state_16842[(10)]);
var inst_16778 = (state_16842[(11)]);
var inst_16679 = (state_16842[(12)]);
var inst_16778__$1 = cljs.core._nth(inst_16771,inst_16773);
var inst_16780 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16778__$1,inst_16679,done);
var state_16842__$1 = (function (){var statearr_16853 = state_16842;
(statearr_16853[(11)] = inst_16778__$1);

return statearr_16853;
})();
if(cljs.core.truth_(inst_16780)){
var statearr_16857_19427 = state_16842__$1;
(statearr_16857_19427[(1)] = (30));

} else {
var statearr_16858_19428 = state_16842__$1;
(statearr_16858_19428[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (1))){
var state_16842__$1 = state_16842;
var statearr_16860_19429 = state_16842__$1;
(statearr_16860_19429[(2)] = null);

(statearr_16860_19429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (24))){
var inst_16718 = (state_16842[(7)]);
var inst_16742 = (state_16842[(2)]);
var inst_16743 = cljs.core.next(inst_16718);
var inst_16688 = inst_16743;
var inst_16689 = null;
var inst_16690 = (0);
var inst_16691 = (0);
var state_16842__$1 = (function (){var statearr_16863 = state_16842;
(statearr_16863[(13)] = inst_16742);

(statearr_16863[(14)] = inst_16688);

(statearr_16863[(15)] = inst_16689);

(statearr_16863[(16)] = inst_16690);

(statearr_16863[(17)] = inst_16691);

return statearr_16863;
})();
var statearr_16867_19430 = state_16842__$1;
(statearr_16867_19430[(2)] = null);

(statearr_16867_19430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (39))){
var state_16842__$1 = state_16842;
var statearr_16884_19431 = state_16842__$1;
(statearr_16884_19431[(2)] = null);

(statearr_16884_19431[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (4))){
var inst_16679 = (state_16842[(12)]);
var inst_16679__$1 = (state_16842[(2)]);
var inst_16680 = (inst_16679__$1 == null);
var state_16842__$1 = (function (){var statearr_16895 = state_16842;
(statearr_16895[(12)] = inst_16679__$1);

return statearr_16895;
})();
if(cljs.core.truth_(inst_16680)){
var statearr_16896_19432 = state_16842__$1;
(statearr_16896_19432[(1)] = (5));

} else {
var statearr_16897_19433 = state_16842__$1;
(statearr_16897_19433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (15))){
var inst_16691 = (state_16842[(17)]);
var inst_16688 = (state_16842[(14)]);
var inst_16689 = (state_16842[(15)]);
var inst_16690 = (state_16842[(16)]);
var inst_16706 = (state_16842[(2)]);
var inst_16707 = (inst_16691 + (1));
var tmp16881 = inst_16688;
var tmp16882 = inst_16690;
var tmp16883 = inst_16689;
var inst_16688__$1 = tmp16881;
var inst_16689__$1 = tmp16883;
var inst_16690__$1 = tmp16882;
var inst_16691__$1 = inst_16707;
var state_16842__$1 = (function (){var statearr_16908 = state_16842;
(statearr_16908[(18)] = inst_16706);

(statearr_16908[(14)] = inst_16688__$1);

(statearr_16908[(15)] = inst_16689__$1);

(statearr_16908[(16)] = inst_16690__$1);

(statearr_16908[(17)] = inst_16691__$1);

return statearr_16908;
})();
var statearr_16916_19435 = state_16842__$1;
(statearr_16916_19435[(2)] = null);

(statearr_16916_19435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (21))){
var inst_16747 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16922_19436 = state_16842__$1;
(statearr_16922_19436[(2)] = inst_16747);

(statearr_16922_19436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (31))){
var inst_16778 = (state_16842[(11)]);
var inst_16784 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16778);
var state_16842__$1 = state_16842;
var statearr_16923_19437 = state_16842__$1;
(statearr_16923_19437[(2)] = inst_16784);

(statearr_16923_19437[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (32))){
var inst_16773 = (state_16842[(10)]);
var inst_16770 = (state_16842[(19)]);
var inst_16771 = (state_16842[(9)]);
var inst_16772 = (state_16842[(20)]);
var inst_16786 = (state_16842[(2)]);
var inst_16787 = (inst_16773 + (1));
var tmp16917 = inst_16772;
var tmp16918 = inst_16771;
var tmp16919 = inst_16770;
var inst_16770__$1 = tmp16919;
var inst_16771__$1 = tmp16918;
var inst_16772__$1 = tmp16917;
var inst_16773__$1 = inst_16787;
var state_16842__$1 = (function (){var statearr_16926 = state_16842;
(statearr_16926[(21)] = inst_16786);

(statearr_16926[(19)] = inst_16770__$1);

(statearr_16926[(9)] = inst_16771__$1);

(statearr_16926[(20)] = inst_16772__$1);

(statearr_16926[(10)] = inst_16773__$1);

return statearr_16926;
})();
var statearr_16927_19438 = state_16842__$1;
(statearr_16927_19438[(2)] = null);

(statearr_16927_19438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (40))){
var inst_16802 = (state_16842[(22)]);
var inst_16806 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16802);
var state_16842__$1 = state_16842;
var statearr_16938_19439 = state_16842__$1;
(statearr_16938_19439[(2)] = inst_16806);

(statearr_16938_19439[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (33))){
var inst_16790 = (state_16842[(23)]);
var inst_16792 = cljs.core.chunked_seq_QMARK_(inst_16790);
var state_16842__$1 = state_16842;
if(inst_16792){
var statearr_16945_19440 = state_16842__$1;
(statearr_16945_19440[(1)] = (36));

} else {
var statearr_16946_19441 = state_16842__$1;
(statearr_16946_19441[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (13))){
var inst_16700 = (state_16842[(24)]);
var inst_16703 = cljs.core.async.close_BANG_(inst_16700);
var state_16842__$1 = state_16842;
var statearr_16949_19442 = state_16842__$1;
(statearr_16949_19442[(2)] = inst_16703);

(statearr_16949_19442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (22))){
var inst_16736 = (state_16842[(8)]);
var inst_16739 = cljs.core.async.close_BANG_(inst_16736);
var state_16842__$1 = state_16842;
var statearr_16950_19443 = state_16842__$1;
(statearr_16950_19443[(2)] = inst_16739);

(statearr_16950_19443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (36))){
var inst_16790 = (state_16842[(23)]);
var inst_16796 = cljs.core.chunk_first(inst_16790);
var inst_16797 = cljs.core.chunk_rest(inst_16790);
var inst_16798 = cljs.core.count(inst_16796);
var inst_16770 = inst_16797;
var inst_16771 = inst_16796;
var inst_16772 = inst_16798;
var inst_16773 = (0);
var state_16842__$1 = (function (){var statearr_16953 = state_16842;
(statearr_16953[(19)] = inst_16770);

(statearr_16953[(9)] = inst_16771);

(statearr_16953[(20)] = inst_16772);

(statearr_16953[(10)] = inst_16773);

return statearr_16953;
})();
var statearr_16957_19447 = state_16842__$1;
(statearr_16957_19447[(2)] = null);

(statearr_16957_19447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (41))){
var inst_16790 = (state_16842[(23)]);
var inst_16808 = (state_16842[(2)]);
var inst_16810 = cljs.core.next(inst_16790);
var inst_16770 = inst_16810;
var inst_16771 = null;
var inst_16772 = (0);
var inst_16773 = (0);
var state_16842__$1 = (function (){var statearr_16961 = state_16842;
(statearr_16961[(25)] = inst_16808);

(statearr_16961[(19)] = inst_16770);

(statearr_16961[(9)] = inst_16771);

(statearr_16961[(20)] = inst_16772);

(statearr_16961[(10)] = inst_16773);

return statearr_16961;
})();
var statearr_16964_19448 = state_16842__$1;
(statearr_16964_19448[(2)] = null);

(statearr_16964_19448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (43))){
var state_16842__$1 = state_16842;
var statearr_16977_19449 = state_16842__$1;
(statearr_16977_19449[(2)] = null);

(statearr_16977_19449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (29))){
var inst_16819 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_16981_19450 = state_16842__$1;
(statearr_16981_19450[(2)] = inst_16819);

(statearr_16981_19450[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (44))){
var inst_16828 = (state_16842[(2)]);
var state_16842__$1 = (function (){var statearr_16983 = state_16842;
(statearr_16983[(26)] = inst_16828);

return statearr_16983;
})();
var statearr_16987_19451 = state_16842__$1;
(statearr_16987_19451[(2)] = null);

(statearr_16987_19451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (6))){
var inst_16761 = (state_16842[(27)]);
var inst_16760 = cljs.core.deref(cs);
var inst_16761__$1 = cljs.core.keys(inst_16760);
var inst_16762 = cljs.core.count(inst_16761__$1);
var inst_16763 = cljs.core.reset_BANG_(dctr,inst_16762);
var inst_16769 = cljs.core.seq(inst_16761__$1);
var inst_16770 = inst_16769;
var inst_16771 = null;
var inst_16772 = (0);
var inst_16773 = (0);
var state_16842__$1 = (function (){var statearr_16989 = state_16842;
(statearr_16989[(27)] = inst_16761__$1);

(statearr_16989[(28)] = inst_16763);

(statearr_16989[(19)] = inst_16770);

(statearr_16989[(9)] = inst_16771);

(statearr_16989[(20)] = inst_16772);

(statearr_16989[(10)] = inst_16773);

return statearr_16989;
})();
var statearr_16992_19460 = state_16842__$1;
(statearr_16992_19460[(2)] = null);

(statearr_16992_19460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (28))){
var inst_16770 = (state_16842[(19)]);
var inst_16790 = (state_16842[(23)]);
var inst_16790__$1 = cljs.core.seq(inst_16770);
var state_16842__$1 = (function (){var statearr_16994 = state_16842;
(statearr_16994[(23)] = inst_16790__$1);

return statearr_16994;
})();
if(inst_16790__$1){
var statearr_16995_19461 = state_16842__$1;
(statearr_16995_19461[(1)] = (33));

} else {
var statearr_16996_19465 = state_16842__$1;
(statearr_16996_19465[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (25))){
var inst_16773 = (state_16842[(10)]);
var inst_16772 = (state_16842[(20)]);
var inst_16775 = (inst_16773 < inst_16772);
var inst_16776 = inst_16775;
var state_16842__$1 = state_16842;
if(cljs.core.truth_(inst_16776)){
var statearr_16998_19466 = state_16842__$1;
(statearr_16998_19466[(1)] = (27));

} else {
var statearr_16999_19467 = state_16842__$1;
(statearr_16999_19467[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (34))){
var state_16842__$1 = state_16842;
var statearr_17002_19468 = state_16842__$1;
(statearr_17002_19468[(2)] = null);

(statearr_17002_19468[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (17))){
var state_16842__$1 = state_16842;
var statearr_17006_19473 = state_16842__$1;
(statearr_17006_19473[(2)] = null);

(statearr_17006_19473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (3))){
var inst_16834 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16842__$1,inst_16834);
} else {
if((state_val_16843 === (12))){
var inst_16752 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_17014_19476 = state_16842__$1;
(statearr_17014_19476[(2)] = inst_16752);

(statearr_17014_19476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (2))){
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16842__$1,(4),ch);
} else {
if((state_val_16843 === (23))){
var state_16842__$1 = state_16842;
var statearr_17022_19480 = state_16842__$1;
(statearr_17022_19480[(2)] = null);

(statearr_17022_19480[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (35))){
var inst_16816 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_17023_19485 = state_16842__$1;
(statearr_17023_19485[(2)] = inst_16816);

(statearr_17023_19485[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (19))){
var inst_16718 = (state_16842[(7)]);
var inst_16725 = cljs.core.chunk_first(inst_16718);
var inst_16726 = cljs.core.chunk_rest(inst_16718);
var inst_16728 = cljs.core.count(inst_16725);
var inst_16688 = inst_16726;
var inst_16689 = inst_16725;
var inst_16690 = inst_16728;
var inst_16691 = (0);
var state_16842__$1 = (function (){var statearr_17038 = state_16842;
(statearr_17038[(14)] = inst_16688);

(statearr_17038[(15)] = inst_16689);

(statearr_17038[(16)] = inst_16690);

(statearr_17038[(17)] = inst_16691);

return statearr_17038;
})();
var statearr_17043_19489 = state_16842__$1;
(statearr_17043_19489[(2)] = null);

(statearr_17043_19489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (11))){
var inst_16688 = (state_16842[(14)]);
var inst_16718 = (state_16842[(7)]);
var inst_16718__$1 = cljs.core.seq(inst_16688);
var state_16842__$1 = (function (){var statearr_17048 = state_16842;
(statearr_17048[(7)] = inst_16718__$1);

return statearr_17048;
})();
if(inst_16718__$1){
var statearr_17052_19494 = state_16842__$1;
(statearr_17052_19494[(1)] = (16));

} else {
var statearr_17053_19495 = state_16842__$1;
(statearr_17053_19495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (9))){
var inst_16754 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_17054_19496 = state_16842__$1;
(statearr_17054_19496[(2)] = inst_16754);

(statearr_17054_19496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (5))){
var inst_16686 = cljs.core.deref(cs);
var inst_16687 = cljs.core.seq(inst_16686);
var inst_16688 = inst_16687;
var inst_16689 = null;
var inst_16690 = (0);
var inst_16691 = (0);
var state_16842__$1 = (function (){var statearr_17058 = state_16842;
(statearr_17058[(14)] = inst_16688);

(statearr_17058[(15)] = inst_16689);

(statearr_17058[(16)] = inst_16690);

(statearr_17058[(17)] = inst_16691);

return statearr_17058;
})();
var statearr_17061_19501 = state_16842__$1;
(statearr_17061_19501[(2)] = null);

(statearr_17061_19501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (14))){
var state_16842__$1 = state_16842;
var statearr_17066_19503 = state_16842__$1;
(statearr_17066_19503[(2)] = null);

(statearr_17066_19503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (45))){
var inst_16825 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_17073_19508 = state_16842__$1;
(statearr_17073_19508[(2)] = inst_16825);

(statearr_17073_19508[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (26))){
var inst_16761 = (state_16842[(27)]);
var inst_16821 = (state_16842[(2)]);
var inst_16822 = cljs.core.seq(inst_16761);
var state_16842__$1 = (function (){var statearr_17080 = state_16842;
(statearr_17080[(29)] = inst_16821);

return statearr_17080;
})();
if(inst_16822){
var statearr_17081_19510 = state_16842__$1;
(statearr_17081_19510[(1)] = (42));

} else {
var statearr_17082_19512 = state_16842__$1;
(statearr_17082_19512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (16))){
var inst_16718 = (state_16842[(7)]);
var inst_16720 = cljs.core.chunked_seq_QMARK_(inst_16718);
var state_16842__$1 = state_16842;
if(inst_16720){
var statearr_17085_19514 = state_16842__$1;
(statearr_17085_19514[(1)] = (19));

} else {
var statearr_17086_19515 = state_16842__$1;
(statearr_17086_19515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (38))){
var inst_16813 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_17092_19520 = state_16842__$1;
(statearr_17092_19520[(2)] = inst_16813);

(statearr_17092_19520[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (30))){
var state_16842__$1 = state_16842;
var statearr_17095_19521 = state_16842__$1;
(statearr_17095_19521[(2)] = null);

(statearr_17095_19521[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (10))){
var inst_16689 = (state_16842[(15)]);
var inst_16691 = (state_16842[(17)]);
var inst_16699 = cljs.core._nth(inst_16689,inst_16691);
var inst_16700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16699,(0),null);
var inst_16701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16699,(1),null);
var state_16842__$1 = (function (){var statearr_17098 = state_16842;
(statearr_17098[(24)] = inst_16700);

return statearr_17098;
})();
if(cljs.core.truth_(inst_16701)){
var statearr_17106_19528 = state_16842__$1;
(statearr_17106_19528[(1)] = (13));

} else {
var statearr_17107_19529 = state_16842__$1;
(statearr_17107_19529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (18))){
var inst_16750 = (state_16842[(2)]);
var state_16842__$1 = state_16842;
var statearr_17113_19530 = state_16842__$1;
(statearr_17113_19530[(2)] = inst_16750);

(statearr_17113_19530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (42))){
var state_16842__$1 = state_16842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16842__$1,(45),dchan);
} else {
if((state_val_16843 === (37))){
var inst_16790 = (state_16842[(23)]);
var inst_16802 = (state_16842[(22)]);
var inst_16679 = (state_16842[(12)]);
var inst_16802__$1 = cljs.core.first(inst_16790);
var inst_16803 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16802__$1,inst_16679,done);
var state_16842__$1 = (function (){var statearr_17126 = state_16842;
(statearr_17126[(22)] = inst_16802__$1);

return statearr_17126;
})();
if(cljs.core.truth_(inst_16803)){
var statearr_17131_19532 = state_16842__$1;
(statearr_17131_19532[(1)] = (39));

} else {
var statearr_17132_19533 = state_16842__$1;
(statearr_17132_19533[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16843 === (8))){
var inst_16691 = (state_16842[(17)]);
var inst_16690 = (state_16842[(16)]);
var inst_16693 = (inst_16691 < inst_16690);
var inst_16694 = inst_16693;
var state_16842__$1 = state_16842;
if(cljs.core.truth_(inst_16694)){
var statearr_17140_19534 = state_16842__$1;
(statearr_17140_19534[(1)] = (10));

} else {
var statearr_17141_19535 = state_16842__$1;
(statearr_17141_19535[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13474__auto__ = null;
var cljs$core$async$mult_$_state_machine__13474__auto____0 = (function (){
var statearr_17148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17148[(0)] = cljs$core$async$mult_$_state_machine__13474__auto__);

(statearr_17148[(1)] = (1));

return statearr_17148;
});
var cljs$core$async$mult_$_state_machine__13474__auto____1 = (function (state_16842){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_16842);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e17151){var ex__13477__auto__ = e17151;
var statearr_17155_19537 = state_16842;
(statearr_17155_19537[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_16842[(4)]))){
var statearr_17158_19538 = state_16842;
(statearr_17158_19538[(1)] = cljs.core.first((state_16842[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19539 = state_16842;
state_16842 = G__19539;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13474__auto__ = function(state_16842){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13474__auto____1.call(this,state_16842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13474__auto____0;
cljs$core$async$mult_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13474__auto____1;
return cljs$core$async$mult_$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_17162 = f__14659__auto__();
(statearr_17162[(6)] = c__14658__auto___19420);

return statearr_17162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17171 = arguments.length;
switch (G__17171) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19541 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19541(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19545 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19545(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19551 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19551(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19552 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19552(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19553 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19553(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19554 = arguments.length;
var i__5877__auto___19555 = (0);
while(true){
if((i__5877__auto___19555 < len__5876__auto___19554)){
args__5882__auto__.push((arguments[i__5877__auto___19555]));

var G__19556 = (i__5877__auto___19555 + (1));
i__5877__auto___19555 = G__19556;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17269){
var map__17270 = p__17269;
var map__17270__$1 = cljs.core.__destructure_map(map__17270);
var opts = map__17270__$1;
var statearr_17276_19557 = state;
(statearr_17276_19557[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17286_19558 = state;
(statearr_17286_19558[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_17291_19559 = state;
(statearr_17291_19559[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17258){
var G__17259 = cljs.core.first(seq17258);
var seq17258__$1 = cljs.core.next(seq17258);
var G__17260 = cljs.core.first(seq17258__$1);
var seq17258__$2 = cljs.core.next(seq17258__$1);
var G__17262 = cljs.core.first(seq17258__$2);
var seq17258__$3 = cljs.core.next(seq17258__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17259,G__17260,G__17262,seq17258__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17322 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17323){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17323 = meta17323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17324,meta17323__$1){
var self__ = this;
var _17324__$1 = this;
return (new cljs.core.async.t_cljs$core$async17322(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17323__$1));
}));

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17324){
var self__ = this;
var _17324__$1 = this;
return self__.meta17323;
}));

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17322.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17323","meta17323",141400491,null)], null);
}));

(cljs.core.async.t_cljs$core$async17322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17322");

(cljs.core.async.t_cljs$core$async17322.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17322.
 */
cljs.core.async.__GT_t_cljs$core$async17322 = (function cljs$core$async$__GT_t_cljs$core$async17322(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17323){
return (new cljs.core.async.t_cljs$core$async17322(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17323));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17322(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14658__auto___19579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_17418){
var state_val_17419 = (state_17418[(1)]);
if((state_val_17419 === (7))){
var inst_17369 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17369)){
var statearr_17426_19580 = state_17418__$1;
(statearr_17426_19580[(1)] = (8));

} else {
var statearr_17427_19581 = state_17418__$1;
(statearr_17427_19581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (20))){
var inst_17361 = (state_17418[(7)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17418__$1,(23),out,inst_17361);
} else {
if((state_val_17419 === (1))){
var inst_17339 = calc_state();
var inst_17340 = cljs.core.__destructure_map(inst_17339);
var inst_17341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17340,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17340,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17340,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17345 = inst_17339;
var state_17418__$1 = (function (){var statearr_17428 = state_17418;
(statearr_17428[(8)] = inst_17341);

(statearr_17428[(9)] = inst_17342);

(statearr_17428[(10)] = inst_17343);

(statearr_17428[(11)] = inst_17345);

return statearr_17428;
})();
var statearr_17434_19587 = state_17418__$1;
(statearr_17434_19587[(2)] = null);

(statearr_17434_19587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (24))){
var inst_17350 = (state_17418[(12)]);
var inst_17345 = inst_17350;
var state_17418__$1 = (function (){var statearr_17438 = state_17418;
(statearr_17438[(11)] = inst_17345);

return statearr_17438;
})();
var statearr_17439_19588 = state_17418__$1;
(statearr_17439_19588[(2)] = null);

(statearr_17439_19588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (4))){
var inst_17361 = (state_17418[(7)]);
var inst_17363 = (state_17418[(13)]);
var inst_17360 = (state_17418[(2)]);
var inst_17361__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17360,(0),null);
var inst_17362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17360,(1),null);
var inst_17363__$1 = (inst_17361__$1 == null);
var state_17418__$1 = (function (){var statearr_17440 = state_17418;
(statearr_17440[(7)] = inst_17361__$1);

(statearr_17440[(14)] = inst_17362);

(statearr_17440[(13)] = inst_17363__$1);

return statearr_17440;
})();
if(cljs.core.truth_(inst_17363__$1)){
var statearr_17441_19590 = state_17418__$1;
(statearr_17441_19590[(1)] = (5));

} else {
var statearr_17443_19591 = state_17418__$1;
(statearr_17443_19591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (15))){
var inst_17352 = (state_17418[(15)]);
var inst_17386 = (state_17418[(16)]);
var inst_17386__$1 = cljs.core.empty_QMARK_(inst_17352);
var state_17418__$1 = (function (){var statearr_17444 = state_17418;
(statearr_17444[(16)] = inst_17386__$1);

return statearr_17444;
})();
if(inst_17386__$1){
var statearr_17445_19592 = state_17418__$1;
(statearr_17445_19592[(1)] = (17));

} else {
var statearr_17446_19593 = state_17418__$1;
(statearr_17446_19593[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (21))){
var inst_17350 = (state_17418[(12)]);
var inst_17345 = inst_17350;
var state_17418__$1 = (function (){var statearr_17449 = state_17418;
(statearr_17449[(11)] = inst_17345);

return statearr_17449;
})();
var statearr_17450_19594 = state_17418__$1;
(statearr_17450_19594[(2)] = null);

(statearr_17450_19594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (13))){
var inst_17376 = (state_17418[(2)]);
var inst_17377 = calc_state();
var inst_17345 = inst_17377;
var state_17418__$1 = (function (){var statearr_17453 = state_17418;
(statearr_17453[(17)] = inst_17376);

(statearr_17453[(11)] = inst_17345);

return statearr_17453;
})();
var statearr_17454_19595 = state_17418__$1;
(statearr_17454_19595[(2)] = null);

(statearr_17454_19595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (22))){
var inst_17406 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17459_19596 = state_17418__$1;
(statearr_17459_19596[(2)] = inst_17406);

(statearr_17459_19596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (6))){
var inst_17362 = (state_17418[(14)]);
var inst_17367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17362,change);
var state_17418__$1 = state_17418;
var statearr_17460_19597 = state_17418__$1;
(statearr_17460_19597[(2)] = inst_17367);

(statearr_17460_19597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (25))){
var state_17418__$1 = state_17418;
var statearr_17464_19598 = state_17418__$1;
(statearr_17464_19598[(2)] = null);

(statearr_17464_19598[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (17))){
var inst_17354 = (state_17418[(18)]);
var inst_17362 = (state_17418[(14)]);
var inst_17388 = (inst_17354.cljs$core$IFn$_invoke$arity$1 ? inst_17354.cljs$core$IFn$_invoke$arity$1(inst_17362) : inst_17354.call(null,inst_17362));
var inst_17389 = cljs.core.not(inst_17388);
var state_17418__$1 = state_17418;
var statearr_17465_19599 = state_17418__$1;
(statearr_17465_19599[(2)] = inst_17389);

(statearr_17465_19599[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (3))){
var inst_17410 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17418__$1,inst_17410);
} else {
if((state_val_17419 === (12))){
var state_17418__$1 = state_17418;
var statearr_17466_19600 = state_17418__$1;
(statearr_17466_19600[(2)] = null);

(statearr_17466_19600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (2))){
var inst_17345 = (state_17418[(11)]);
var inst_17350 = (state_17418[(12)]);
var inst_17350__$1 = cljs.core.__destructure_map(inst_17345);
var inst_17352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17350__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17350__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17350__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17418__$1 = (function (){var statearr_17481 = state_17418;
(statearr_17481[(12)] = inst_17350__$1);

(statearr_17481[(15)] = inst_17352);

(statearr_17481[(18)] = inst_17354);

return statearr_17481;
})();
return cljs.core.async.ioc_alts_BANG_(state_17418__$1,(4),inst_17355);
} else {
if((state_val_17419 === (23))){
var inst_17397 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17397)){
var statearr_17484_19601 = state_17418__$1;
(statearr_17484_19601[(1)] = (24));

} else {
var statearr_17485_19602 = state_17418__$1;
(statearr_17485_19602[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (19))){
var inst_17392 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17489_19603 = state_17418__$1;
(statearr_17489_19603[(2)] = inst_17392);

(statearr_17489_19603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (11))){
var inst_17362 = (state_17418[(14)]);
var inst_17373 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17362);
var state_17418__$1 = state_17418;
var statearr_17494_19604 = state_17418__$1;
(statearr_17494_19604[(2)] = inst_17373);

(statearr_17494_19604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (9))){
var inst_17352 = (state_17418[(15)]);
var inst_17362 = (state_17418[(14)]);
var inst_17380 = (state_17418[(19)]);
var inst_17380__$1 = (inst_17352.cljs$core$IFn$_invoke$arity$1 ? inst_17352.cljs$core$IFn$_invoke$arity$1(inst_17362) : inst_17352.call(null,inst_17362));
var state_17418__$1 = (function (){var statearr_17496 = state_17418;
(statearr_17496[(19)] = inst_17380__$1);

return statearr_17496;
})();
if(cljs.core.truth_(inst_17380__$1)){
var statearr_17497_19605 = state_17418__$1;
(statearr_17497_19605[(1)] = (14));

} else {
var statearr_17498_19606 = state_17418__$1;
(statearr_17498_19606[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (5))){
var inst_17363 = (state_17418[(13)]);
var state_17418__$1 = state_17418;
var statearr_17503_19607 = state_17418__$1;
(statearr_17503_19607[(2)] = inst_17363);

(statearr_17503_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (14))){
var inst_17380 = (state_17418[(19)]);
var state_17418__$1 = state_17418;
var statearr_17508_19608 = state_17418__$1;
(statearr_17508_19608[(2)] = inst_17380);

(statearr_17508_19608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (26))){
var inst_17402 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17513_19609 = state_17418__$1;
(statearr_17513_19609[(2)] = inst_17402);

(statearr_17513_19609[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (16))){
var inst_17394 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17394)){
var statearr_17514_19610 = state_17418__$1;
(statearr_17514_19610[(1)] = (20));

} else {
var statearr_17515_19611 = state_17418__$1;
(statearr_17515_19611[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (10))){
var inst_17408 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17518_19612 = state_17418__$1;
(statearr_17518_19612[(2)] = inst_17408);

(statearr_17518_19612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (18))){
var inst_17386 = (state_17418[(16)]);
var state_17418__$1 = state_17418;
var statearr_17519_19615 = state_17418__$1;
(statearr_17519_19615[(2)] = inst_17386);

(statearr_17519_19615[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (8))){
var inst_17361 = (state_17418[(7)]);
var inst_17371 = (inst_17361 == null);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17371)){
var statearr_17520_19617 = state_17418__$1;
(statearr_17520_19617[(1)] = (11));

} else {
var statearr_17521_19618 = state_17418__$1;
(statearr_17521_19618[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13474__auto__ = null;
var cljs$core$async$mix_$_state_machine__13474__auto____0 = (function (){
var statearr_17525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17525[(0)] = cljs$core$async$mix_$_state_machine__13474__auto__);

(statearr_17525[(1)] = (1));

return statearr_17525;
});
var cljs$core$async$mix_$_state_machine__13474__auto____1 = (function (state_17418){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_17418);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e17526){var ex__13477__auto__ = e17526;
var statearr_17527_19622 = state_17418;
(statearr_17527_19622[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_17418[(4)]))){
var statearr_17528_19623 = state_17418;
(statearr_17528_19623[(1)] = cljs.core.first((state_17418[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19627 = state_17418;
state_17418 = G__19627;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13474__auto__ = function(state_17418){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13474__auto____1.call(this,state_17418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13474__auto____0;
cljs$core$async$mix_$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13474__auto____1;
return cljs$core$async$mix_$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_17535 = f__14659__auto__();
(statearr_17535[(6)] = c__14658__auto___19579);

return statearr_17535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19628 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19628(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19629 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19629(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19632 = (function() {
var G__19633 = null;
var G__19633__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19633__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19633 = function(p,v){
switch(arguments.length){
case 1:
return G__19633__1.call(this,p);
case 2:
return G__19633__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19633.cljs$core$IFn$_invoke$arity$1 = G__19633__1;
G__19633.cljs$core$IFn$_invoke$arity$2 = G__19633__2;
return G__19633;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17588 = arguments.length;
switch (G__17588) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19632(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19632(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17705 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17707){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17707 = meta17707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17708,meta17707__$1){
var self__ = this;
var _17708__$1 = this;
return (new cljs.core.async.t_cljs$core$async17705(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17707__$1));
}));

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17708){
var self__ = this;
var _17708__$1 = this;
return self__.meta17707;
}));

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17707","meta17707",937126516,null)], null);
}));

(cljs.core.async.t_cljs$core$async17705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17705");

(cljs.core.async.t_cljs$core$async17705.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17705.
 */
cljs.core.async.__GT_t_cljs$core$async17705 = (function cljs$core$async$__GT_t_cljs$core$async17705(ch,topic_fn,buf_fn,mults,ensure_mult,meta17707){
return (new cljs.core.async.t_cljs$core$async17705(ch,topic_fn,buf_fn,mults,ensure_mult,meta17707));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17625 = arguments.length;
switch (G__17625) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17606_SHARP_){
if(cljs.core.truth_((p1__17606_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17606_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17606_SHARP_.call(null,topic)))){
return p1__17606_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17606_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17705(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14658__auto___19642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_17845){
var state_val_17846 = (state_17845[(1)]);
if((state_val_17846 === (7))){
var inst_17841 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17849_19643 = state_17845__$1;
(statearr_17849_19643[(2)] = inst_17841);

(statearr_17849_19643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (20))){
var state_17845__$1 = state_17845;
var statearr_17851_19650 = state_17845__$1;
(statearr_17851_19650[(2)] = null);

(statearr_17851_19650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (1))){
var state_17845__$1 = state_17845;
var statearr_17853_19651 = state_17845__$1;
(statearr_17853_19651[(2)] = null);

(statearr_17853_19651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (24))){
var inst_17823 = (state_17845[(7)]);
var inst_17833 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17823);
var state_17845__$1 = state_17845;
var statearr_17854_19652 = state_17845__$1;
(statearr_17854_19652[(2)] = inst_17833);

(statearr_17854_19652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (4))){
var inst_17762 = (state_17845[(8)]);
var inst_17762__$1 = (state_17845[(2)]);
var inst_17763 = (inst_17762__$1 == null);
var state_17845__$1 = (function (){var statearr_17857 = state_17845;
(statearr_17857[(8)] = inst_17762__$1);

return statearr_17857;
})();
if(cljs.core.truth_(inst_17763)){
var statearr_17859_19653 = state_17845__$1;
(statearr_17859_19653[(1)] = (5));

} else {
var statearr_17860_19654 = state_17845__$1;
(statearr_17860_19654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (15))){
var inst_17817 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17865_19656 = state_17845__$1;
(statearr_17865_19656[(2)] = inst_17817);

(statearr_17865_19656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (21))){
var inst_17838 = (state_17845[(2)]);
var state_17845__$1 = (function (){var statearr_17868 = state_17845;
(statearr_17868[(9)] = inst_17838);

return statearr_17868;
})();
var statearr_17869_19657 = state_17845__$1;
(statearr_17869_19657[(2)] = null);

(statearr_17869_19657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (13))){
var inst_17793 = (state_17845[(10)]);
var inst_17795 = cljs.core.chunked_seq_QMARK_(inst_17793);
var state_17845__$1 = state_17845;
if(inst_17795){
var statearr_17880_19658 = state_17845__$1;
(statearr_17880_19658[(1)] = (16));

} else {
var statearr_17881_19659 = state_17845__$1;
(statearr_17881_19659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (22))){
var inst_17829 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
if(cljs.core.truth_(inst_17829)){
var statearr_17883_19660 = state_17845__$1;
(statearr_17883_19660[(1)] = (23));

} else {
var statearr_17885_19661 = state_17845__$1;
(statearr_17885_19661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (6))){
var inst_17762 = (state_17845[(8)]);
var inst_17823 = (state_17845[(7)]);
var inst_17825 = (state_17845[(11)]);
var inst_17823__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17762) : topic_fn.call(null,inst_17762));
var inst_17824 = cljs.core.deref(mults);
var inst_17825__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17824,inst_17823__$1);
var state_17845__$1 = (function (){var statearr_17888 = state_17845;
(statearr_17888[(7)] = inst_17823__$1);

(statearr_17888[(11)] = inst_17825__$1);

return statearr_17888;
})();
if(cljs.core.truth_(inst_17825__$1)){
var statearr_17890_19663 = state_17845__$1;
(statearr_17890_19663[(1)] = (19));

} else {
var statearr_17891_19664 = state_17845__$1;
(statearr_17891_19664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (25))){
var inst_17835 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17897_19665 = state_17845__$1;
(statearr_17897_19665[(2)] = inst_17835);

(statearr_17897_19665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (17))){
var inst_17793 = (state_17845[(10)]);
var inst_17805 = cljs.core.first(inst_17793);
var inst_17809 = cljs.core.async.muxch_STAR_(inst_17805);
var inst_17810 = cljs.core.async.close_BANG_(inst_17809);
var inst_17811 = cljs.core.next(inst_17793);
var inst_17779 = inst_17811;
var inst_17780 = null;
var inst_17781 = (0);
var inst_17782 = (0);
var state_17845__$1 = (function (){var statearr_17900 = state_17845;
(statearr_17900[(12)] = inst_17810);

(statearr_17900[(13)] = inst_17779);

(statearr_17900[(14)] = inst_17780);

(statearr_17900[(15)] = inst_17781);

(statearr_17900[(16)] = inst_17782);

return statearr_17900;
})();
var statearr_17904_19666 = state_17845__$1;
(statearr_17904_19666[(2)] = null);

(statearr_17904_19666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (3))){
var inst_17843 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17845__$1,inst_17843);
} else {
if((state_val_17846 === (12))){
var inst_17819 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17911_19668 = state_17845__$1;
(statearr_17911_19668[(2)] = inst_17819);

(statearr_17911_19668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (2))){
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17845__$1,(4),ch);
} else {
if((state_val_17846 === (23))){
var state_17845__$1 = state_17845;
var statearr_17915_19669 = state_17845__$1;
(statearr_17915_19669[(2)] = null);

(statearr_17915_19669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (19))){
var inst_17825 = (state_17845[(11)]);
var inst_17762 = (state_17845[(8)]);
var inst_17827 = cljs.core.async.muxch_STAR_(inst_17825);
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17845__$1,(22),inst_17827,inst_17762);
} else {
if((state_val_17846 === (11))){
var inst_17779 = (state_17845[(13)]);
var inst_17793 = (state_17845[(10)]);
var inst_17793__$1 = cljs.core.seq(inst_17779);
var state_17845__$1 = (function (){var statearr_17927 = state_17845;
(statearr_17927[(10)] = inst_17793__$1);

return statearr_17927;
})();
if(inst_17793__$1){
var statearr_17929_19670 = state_17845__$1;
(statearr_17929_19670[(1)] = (13));

} else {
var statearr_17930_19671 = state_17845__$1;
(statearr_17930_19671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (9))){
var inst_17821 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17933_19672 = state_17845__$1;
(statearr_17933_19672[(2)] = inst_17821);

(statearr_17933_19672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (5))){
var inst_17776 = cljs.core.deref(mults);
var inst_17777 = cljs.core.vals(inst_17776);
var inst_17778 = cljs.core.seq(inst_17777);
var inst_17779 = inst_17778;
var inst_17780 = null;
var inst_17781 = (0);
var inst_17782 = (0);
var state_17845__$1 = (function (){var statearr_17935 = state_17845;
(statearr_17935[(13)] = inst_17779);

(statearr_17935[(14)] = inst_17780);

(statearr_17935[(15)] = inst_17781);

(statearr_17935[(16)] = inst_17782);

return statearr_17935;
})();
var statearr_17936_19673 = state_17845__$1;
(statearr_17936_19673[(2)] = null);

(statearr_17936_19673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (14))){
var state_17845__$1 = state_17845;
var statearr_17940_19674 = state_17845__$1;
(statearr_17940_19674[(2)] = null);

(statearr_17940_19674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (16))){
var inst_17793 = (state_17845[(10)]);
var inst_17797 = cljs.core.chunk_first(inst_17793);
var inst_17798 = cljs.core.chunk_rest(inst_17793);
var inst_17799 = cljs.core.count(inst_17797);
var inst_17779 = inst_17798;
var inst_17780 = inst_17797;
var inst_17781 = inst_17799;
var inst_17782 = (0);
var state_17845__$1 = (function (){var statearr_17941 = state_17845;
(statearr_17941[(13)] = inst_17779);

(statearr_17941[(14)] = inst_17780);

(statearr_17941[(15)] = inst_17781);

(statearr_17941[(16)] = inst_17782);

return statearr_17941;
})();
var statearr_17942_19675 = state_17845__$1;
(statearr_17942_19675[(2)] = null);

(statearr_17942_19675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (10))){
var inst_17780 = (state_17845[(14)]);
var inst_17782 = (state_17845[(16)]);
var inst_17779 = (state_17845[(13)]);
var inst_17781 = (state_17845[(15)]);
var inst_17787 = cljs.core._nth(inst_17780,inst_17782);
var inst_17788 = cljs.core.async.muxch_STAR_(inst_17787);
var inst_17789 = cljs.core.async.close_BANG_(inst_17788);
var inst_17790 = (inst_17782 + (1));
var tmp17937 = inst_17780;
var tmp17938 = inst_17781;
var tmp17939 = inst_17779;
var inst_17779__$1 = tmp17939;
var inst_17780__$1 = tmp17937;
var inst_17781__$1 = tmp17938;
var inst_17782__$1 = inst_17790;
var state_17845__$1 = (function (){var statearr_17946 = state_17845;
(statearr_17946[(17)] = inst_17789);

(statearr_17946[(13)] = inst_17779__$1);

(statearr_17946[(14)] = inst_17780__$1);

(statearr_17946[(15)] = inst_17781__$1);

(statearr_17946[(16)] = inst_17782__$1);

return statearr_17946;
})();
var statearr_17952_19677 = state_17845__$1;
(statearr_17952_19677[(2)] = null);

(statearr_17952_19677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (18))){
var inst_17814 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17956_19678 = state_17845__$1;
(statearr_17956_19678[(2)] = inst_17814);

(statearr_17956_19678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (8))){
var inst_17782 = (state_17845[(16)]);
var inst_17781 = (state_17845[(15)]);
var inst_17784 = (inst_17782 < inst_17781);
var inst_17785 = inst_17784;
var state_17845__$1 = state_17845;
if(cljs.core.truth_(inst_17785)){
var statearr_17960_19679 = state_17845__$1;
(statearr_17960_19679[(1)] = (10));

} else {
var statearr_17961_19680 = state_17845__$1;
(statearr_17961_19680[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_17965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17965[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_17965[(1)] = (1));

return statearr_17965;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_17845){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_17845);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e17972){var ex__13477__auto__ = e17972;
var statearr_17974_19681 = state_17845;
(statearr_17974_19681[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_17845[(4)]))){
var statearr_17979_19682 = state_17845;
(statearr_17979_19682[(1)] = cljs.core.first((state_17845[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19683 = state_17845;
state_17845 = G__19683;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_17845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_17845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_17996 = f__14659__auto__();
(statearr_17996[(6)] = c__14658__auto___19642);

return statearr_17996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18000 = arguments.length;
switch (G__18000) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18035 = arguments.length;
switch (G__18035) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18053 = arguments.length;
switch (G__18053) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14658__auto___19694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_18200){
var state_val_18202 = (state_18200[(1)]);
if((state_val_18202 === (7))){
var state_18200__$1 = state_18200;
var statearr_18213_19695 = state_18200__$1;
(statearr_18213_19695[(2)] = null);

(statearr_18213_19695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (1))){
var state_18200__$1 = state_18200;
var statearr_18216_19696 = state_18200__$1;
(statearr_18216_19696[(2)] = null);

(statearr_18216_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (4))){
var inst_18107 = (state_18200[(7)]);
var inst_18100 = (state_18200[(8)]);
var inst_18109 = (inst_18107 < inst_18100);
var state_18200__$1 = state_18200;
if(cljs.core.truth_(inst_18109)){
var statearr_18220_19697 = state_18200__$1;
(statearr_18220_19697[(1)] = (6));

} else {
var statearr_18221_19698 = state_18200__$1;
(statearr_18221_19698[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (15))){
var inst_18175 = (state_18200[(9)]);
var inst_18182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18175);
var state_18200__$1 = state_18200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18200__$1,(17),out,inst_18182);
} else {
if((state_val_18202 === (13))){
var inst_18175 = (state_18200[(9)]);
var inst_18175__$1 = (state_18200[(2)]);
var inst_18176 = cljs.core.some(cljs.core.nil_QMARK_,inst_18175__$1);
var state_18200__$1 = (function (){var statearr_18224 = state_18200;
(statearr_18224[(9)] = inst_18175__$1);

return statearr_18224;
})();
if(cljs.core.truth_(inst_18176)){
var statearr_18225_19699 = state_18200__$1;
(statearr_18225_19699[(1)] = (14));

} else {
var statearr_18226_19700 = state_18200__$1;
(statearr_18226_19700[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (6))){
var state_18200__$1 = state_18200;
var statearr_18227_19701 = state_18200__$1;
(statearr_18227_19701[(2)] = null);

(statearr_18227_19701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (17))){
var inst_18184 = (state_18200[(2)]);
var state_18200__$1 = (function (){var statearr_18229 = state_18200;
(statearr_18229[(10)] = inst_18184);

return statearr_18229;
})();
var statearr_18230_19702 = state_18200__$1;
(statearr_18230_19702[(2)] = null);

(statearr_18230_19702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (3))){
var inst_18189 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18200__$1,inst_18189);
} else {
if((state_val_18202 === (12))){
var _ = (function (){var statearr_18233 = state_18200;
(statearr_18233[(4)] = cljs.core.rest((state_18200[(4)])));

return statearr_18233;
})();
var state_18200__$1 = state_18200;
var ex18228 = (state_18200__$1[(2)]);
var statearr_18237_19703 = state_18200__$1;
(statearr_18237_19703[(5)] = ex18228);


if((ex18228 instanceof Object)){
var statearr_18239_19704 = state_18200__$1;
(statearr_18239_19704[(1)] = (11));

(statearr_18239_19704[(5)] = null);

} else {
throw ex18228;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (2))){
var inst_18099 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18100 = cnt;
var inst_18107 = (0);
var state_18200__$1 = (function (){var statearr_18248 = state_18200;
(statearr_18248[(11)] = inst_18099);

(statearr_18248[(8)] = inst_18100);

(statearr_18248[(7)] = inst_18107);

return statearr_18248;
})();
var statearr_18252_19705 = state_18200__$1;
(statearr_18252_19705[(2)] = null);

(statearr_18252_19705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (11))){
var inst_18150 = (state_18200[(2)]);
var inst_18151 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18200__$1 = (function (){var statearr_18253 = state_18200;
(statearr_18253[(12)] = inst_18150);

return statearr_18253;
})();
var statearr_18255_19706 = state_18200__$1;
(statearr_18255_19706[(2)] = inst_18151);

(statearr_18255_19706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (9))){
var inst_18107 = (state_18200[(7)]);
var _ = (function (){var statearr_18257 = state_18200;
(statearr_18257[(4)] = cljs.core.cons((12),(state_18200[(4)])));

return statearr_18257;
})();
var inst_18161 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18107) : chs__$1.call(null,inst_18107));
var inst_18162 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18107) : done.call(null,inst_18107));
var inst_18163 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18161,inst_18162);
var ___$1 = (function (){var statearr_18258 = state_18200;
(statearr_18258[(4)] = cljs.core.rest((state_18200[(4)])));

return statearr_18258;
})();
var state_18200__$1 = state_18200;
var statearr_18263_19707 = state_18200__$1;
(statearr_18263_19707[(2)] = inst_18163);

(statearr_18263_19707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (5))){
var inst_18173 = (state_18200[(2)]);
var state_18200__$1 = (function (){var statearr_18267 = state_18200;
(statearr_18267[(13)] = inst_18173);

return statearr_18267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18200__$1,(13),dchan);
} else {
if((state_val_18202 === (14))){
var inst_18179 = cljs.core.async.close_BANG_(out);
var state_18200__$1 = state_18200;
var statearr_18273_19709 = state_18200__$1;
(statearr_18273_19709[(2)] = inst_18179);

(statearr_18273_19709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (16))){
var inst_18187 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18279_19710 = state_18200__$1;
(statearr_18279_19710[(2)] = inst_18187);

(statearr_18279_19710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (10))){
var inst_18107 = (state_18200[(7)]);
var inst_18166 = (state_18200[(2)]);
var inst_18167 = (inst_18107 + (1));
var inst_18107__$1 = inst_18167;
var state_18200__$1 = (function (){var statearr_18280 = state_18200;
(statearr_18280[(14)] = inst_18166);

(statearr_18280[(7)] = inst_18107__$1);

return statearr_18280;
})();
var statearr_18281_19711 = state_18200__$1;
(statearr_18281_19711[(2)] = null);

(statearr_18281_19711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18202 === (8))){
var inst_18171 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18284_19712 = state_18200__$1;
(statearr_18284_19712[(2)] = inst_18171);

(statearr_18284_19712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_18288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18288[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_18288[(1)] = (1));

return statearr_18288;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_18200){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_18200);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e18289){var ex__13477__auto__ = e18289;
var statearr_18290_19713 = state_18200;
(statearr_18290_19713[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_18200[(4)]))){
var statearr_18294_19714 = state_18200;
(statearr_18294_19714[(1)] = cljs.core.first((state_18200[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19715 = state_18200;
state_18200 = G__19715;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_18200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_18200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_18297 = f__14659__auto__();
(statearr_18297[(6)] = c__14658__auto___19694);

return statearr_18297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18301 = arguments.length;
switch (G__18301) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___19721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_18352){
var state_val_18353 = (state_18352[(1)]);
if((state_val_18353 === (7))){
var inst_18331 = (state_18352[(7)]);
var inst_18332 = (state_18352[(8)]);
var inst_18331__$1 = (state_18352[(2)]);
var inst_18332__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18331__$1,(0),null);
var inst_18333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18331__$1,(1),null);
var inst_18334 = (inst_18332__$1 == null);
var state_18352__$1 = (function (){var statearr_18354 = state_18352;
(statearr_18354[(7)] = inst_18331__$1);

(statearr_18354[(8)] = inst_18332__$1);

(statearr_18354[(9)] = inst_18333);

return statearr_18354;
})();
if(cljs.core.truth_(inst_18334)){
var statearr_18355_19722 = state_18352__$1;
(statearr_18355_19722[(1)] = (8));

} else {
var statearr_18356_19723 = state_18352__$1;
(statearr_18356_19723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (1))){
var inst_18317 = cljs.core.vec(chs);
var inst_18318 = inst_18317;
var state_18352__$1 = (function (){var statearr_18358 = state_18352;
(statearr_18358[(10)] = inst_18318);

return statearr_18358;
})();
var statearr_18359_19724 = state_18352__$1;
(statearr_18359_19724[(2)] = null);

(statearr_18359_19724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (4))){
var inst_18318 = (state_18352[(10)]);
var state_18352__$1 = state_18352;
return cljs.core.async.ioc_alts_BANG_(state_18352__$1,(7),inst_18318);
} else {
if((state_val_18353 === (6))){
var inst_18348 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18360_19726 = state_18352__$1;
(statearr_18360_19726[(2)] = inst_18348);

(statearr_18360_19726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (3))){
var inst_18350 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18352__$1,inst_18350);
} else {
if((state_val_18353 === (2))){
var inst_18318 = (state_18352[(10)]);
var inst_18324 = cljs.core.count(inst_18318);
var inst_18325 = (inst_18324 > (0));
var state_18352__$1 = state_18352;
if(cljs.core.truth_(inst_18325)){
var statearr_18369_19730 = state_18352__$1;
(statearr_18369_19730[(1)] = (4));

} else {
var statearr_18372_19731 = state_18352__$1;
(statearr_18372_19731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (11))){
var inst_18318 = (state_18352[(10)]);
var inst_18341 = (state_18352[(2)]);
var tmp18361 = inst_18318;
var inst_18318__$1 = tmp18361;
var state_18352__$1 = (function (){var statearr_18374 = state_18352;
(statearr_18374[(11)] = inst_18341);

(statearr_18374[(10)] = inst_18318__$1);

return statearr_18374;
})();
var statearr_18377_19732 = state_18352__$1;
(statearr_18377_19732[(2)] = null);

(statearr_18377_19732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (9))){
var inst_18332 = (state_18352[(8)]);
var state_18352__$1 = state_18352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18352__$1,(11),out,inst_18332);
} else {
if((state_val_18353 === (5))){
var inst_18346 = cljs.core.async.close_BANG_(out);
var state_18352__$1 = state_18352;
var statearr_18382_19733 = state_18352__$1;
(statearr_18382_19733[(2)] = inst_18346);

(statearr_18382_19733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (10))){
var inst_18344 = (state_18352[(2)]);
var state_18352__$1 = state_18352;
var statearr_18384_19734 = state_18352__$1;
(statearr_18384_19734[(2)] = inst_18344);

(statearr_18384_19734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18353 === (8))){
var inst_18318 = (state_18352[(10)]);
var inst_18331 = (state_18352[(7)]);
var inst_18332 = (state_18352[(8)]);
var inst_18333 = (state_18352[(9)]);
var inst_18336 = (function (){var cs = inst_18318;
var vec__18327 = inst_18331;
var v = inst_18332;
var c = inst_18333;
return (function (p1__18298_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18298_SHARP_);
});
})();
var inst_18337 = cljs.core.filterv(inst_18336,inst_18318);
var inst_18318__$1 = inst_18337;
var state_18352__$1 = (function (){var statearr_18385 = state_18352;
(statearr_18385[(10)] = inst_18318__$1);

return statearr_18385;
})();
var statearr_18386_19735 = state_18352__$1;
(statearr_18386_19735[(2)] = null);

(statearr_18386_19735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_18387 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18387[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_18387[(1)] = (1));

return statearr_18387;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_18352){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_18352);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e18388){var ex__13477__auto__ = e18388;
var statearr_18390_19736 = state_18352;
(statearr_18390_19736[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_18352[(4)]))){
var statearr_18395_19737 = state_18352;
(statearr_18395_19737[(1)] = cljs.core.first((state_18352[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19738 = state_18352;
state_18352 = G__19738;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_18352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_18352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_18404 = f__14659__auto__();
(statearr_18404[(6)] = c__14658__auto___19721);

return statearr_18404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18412 = arguments.length;
switch (G__18412) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___19740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_18440){
var state_val_18441 = (state_18440[(1)]);
if((state_val_18441 === (7))){
var inst_18422 = (state_18440[(7)]);
var inst_18422__$1 = (state_18440[(2)]);
var inst_18423 = (inst_18422__$1 == null);
var inst_18424 = cljs.core.not(inst_18423);
var state_18440__$1 = (function (){var statearr_18446 = state_18440;
(statearr_18446[(7)] = inst_18422__$1);

return statearr_18446;
})();
if(inst_18424){
var statearr_18449_19741 = state_18440__$1;
(statearr_18449_19741[(1)] = (8));

} else {
var statearr_18453_19742 = state_18440__$1;
(statearr_18453_19742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (1))){
var inst_18417 = (0);
var state_18440__$1 = (function (){var statearr_18458 = state_18440;
(statearr_18458[(8)] = inst_18417);

return statearr_18458;
})();
var statearr_18459_19743 = state_18440__$1;
(statearr_18459_19743[(2)] = null);

(statearr_18459_19743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (4))){
var state_18440__$1 = state_18440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18440__$1,(7),ch);
} else {
if((state_val_18441 === (6))){
var inst_18435 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18463_19744 = state_18440__$1;
(statearr_18463_19744[(2)] = inst_18435);

(statearr_18463_19744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (3))){
var inst_18437 = (state_18440[(2)]);
var inst_18438 = cljs.core.async.close_BANG_(out);
var state_18440__$1 = (function (){var statearr_18468 = state_18440;
(statearr_18468[(9)] = inst_18437);

return statearr_18468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18440__$1,inst_18438);
} else {
if((state_val_18441 === (2))){
var inst_18417 = (state_18440[(8)]);
var inst_18419 = (inst_18417 < n);
var state_18440__$1 = state_18440;
if(cljs.core.truth_(inst_18419)){
var statearr_18472_19746 = state_18440__$1;
(statearr_18472_19746[(1)] = (4));

} else {
var statearr_18474_19748 = state_18440__$1;
(statearr_18474_19748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (11))){
var inst_18417 = (state_18440[(8)]);
var inst_18427 = (state_18440[(2)]);
var inst_18428 = (inst_18417 + (1));
var inst_18417__$1 = inst_18428;
var state_18440__$1 = (function (){var statearr_18476 = state_18440;
(statearr_18476[(10)] = inst_18427);

(statearr_18476[(8)] = inst_18417__$1);

return statearr_18476;
})();
var statearr_18477_19751 = state_18440__$1;
(statearr_18477_19751[(2)] = null);

(statearr_18477_19751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (9))){
var state_18440__$1 = state_18440;
var statearr_18478_19752 = state_18440__$1;
(statearr_18478_19752[(2)] = null);

(statearr_18478_19752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (5))){
var state_18440__$1 = state_18440;
var statearr_18480_19753 = state_18440__$1;
(statearr_18480_19753[(2)] = null);

(statearr_18480_19753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (10))){
var inst_18432 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18483_19754 = state_18440__$1;
(statearr_18483_19754[(2)] = inst_18432);

(statearr_18483_19754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (8))){
var inst_18422 = (state_18440[(7)]);
var state_18440__$1 = state_18440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18440__$1,(11),out,inst_18422);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_18487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18487[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_18487[(1)] = (1));

return statearr_18487;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_18440){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_18440);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e18490){var ex__13477__auto__ = e18490;
var statearr_18491_19762 = state_18440;
(statearr_18491_19762[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_18440[(4)]))){
var statearr_18496_19763 = state_18440;
(statearr_18496_19763[(1)] = cljs.core.first((state_18440[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19764 = state_18440;
state_18440 = G__19764;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_18440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_18440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_18501 = f__14659__auto__();
(statearr_18501[(6)] = c__14658__auto___19740);

return statearr_18501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18520 = (function (f,ch,meta18509,_,fn1,meta18521){
this.f = f;
this.ch = ch;
this.meta18509 = meta18509;
this._ = _;
this.fn1 = fn1;
this.meta18521 = meta18521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18522,meta18521__$1){
var self__ = this;
var _18522__$1 = this;
return (new cljs.core.async.t_cljs$core$async18520(self__.f,self__.ch,self__.meta18509,self__._,self__.fn1,meta18521__$1));
}));

(cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18522){
var self__ = this;
var _18522__$1 = this;
return self__.meta18521;
}));

(cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18507_SHARP_){
var G__18531 = (((p1__18507_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18507_SHARP_) : self__.f.call(null,p1__18507_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18531) : f1.call(null,G__18531));
});
}));

(cljs.core.async.t_cljs$core$async18520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18509","meta18509",1573129845,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18508","cljs.core.async/t_cljs$core$async18508",-2093138890,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18521","meta18521",585646638,null)], null);
}));

(cljs.core.async.t_cljs$core$async18520.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18520");

(cljs.core.async.t_cljs$core$async18520.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18520");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18520.
 */
cljs.core.async.__GT_t_cljs$core$async18520 = (function cljs$core$async$__GT_t_cljs$core$async18520(f,ch,meta18509,_,fn1,meta18521){
return (new cljs.core.async.t_cljs$core$async18520(f,ch,meta18509,_,fn1,meta18521));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18508 = (function (f,ch,meta18509){
this.f = f;
this.ch = ch;
this.meta18509 = meta18509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18510,meta18509__$1){
var self__ = this;
var _18510__$1 = this;
return (new cljs.core.async.t_cljs$core$async18508(self__.f,self__.ch,meta18509__$1));
}));

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18510){
var self__ = this;
var _18510__$1 = this;
return self__.meta18509;
}));

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18520(self__.f,self__.ch,self__.meta18509,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18538 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18538) : self__.f.call(null,G__18538));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18509","meta18509",1573129845,null)], null);
}));

(cljs.core.async.t_cljs$core$async18508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18508");

(cljs.core.async.t_cljs$core$async18508.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18508.
 */
cljs.core.async.__GT_t_cljs$core$async18508 = (function cljs$core$async$__GT_t_cljs$core$async18508(f,ch,meta18509){
return (new cljs.core.async.t_cljs$core$async18508(f,ch,meta18509));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18508(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18615 = (function (f,ch,meta18616){
this.f = f;
this.ch = ch;
this.meta18616 = meta18616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18617,meta18616__$1){
var self__ = this;
var _18617__$1 = this;
return (new cljs.core.async.t_cljs$core$async18615(self__.f,self__.ch,meta18616__$1));
}));

(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18617){
var self__ = this;
var _18617__$1 = this;
return self__.meta18616;
}));

(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18616","meta18616",-70754041,null)], null);
}));

(cljs.core.async.t_cljs$core$async18615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18615");

(cljs.core.async.t_cljs$core$async18615.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18615.
 */
cljs.core.async.__GT_t_cljs$core$async18615 = (function cljs$core$async$__GT_t_cljs$core$async18615(f,ch,meta18616){
return (new cljs.core.async.t_cljs$core$async18615(f,ch,meta18616));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18615(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18646 = (function (p,ch,meta18647){
this.p = p;
this.ch = ch;
this.meta18647 = meta18647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18648,meta18647__$1){
var self__ = this;
var _18648__$1 = this;
return (new cljs.core.async.t_cljs$core$async18646(self__.p,self__.ch,meta18647__$1));
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18648){
var self__ = this;
var _18648__$1 = this;
return self__.meta18647;
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18647","meta18647",1212723054,null)], null);
}));

(cljs.core.async.t_cljs$core$async18646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18646");

(cljs.core.async.t_cljs$core$async18646.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18646.
 */
cljs.core.async.__GT_t_cljs$core$async18646 = (function cljs$core$async$__GT_t_cljs$core$async18646(p,ch,meta18647){
return (new cljs.core.async.t_cljs$core$async18646(p,ch,meta18647));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18646(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18665 = arguments.length;
switch (G__18665) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___19772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_18691){
var state_val_18692 = (state_18691[(1)]);
if((state_val_18692 === (7))){
var inst_18687 = (state_18691[(2)]);
var state_18691__$1 = state_18691;
var statearr_18695_19773 = state_18691__$1;
(statearr_18695_19773[(2)] = inst_18687);

(statearr_18695_19773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (1))){
var state_18691__$1 = state_18691;
var statearr_18696_19774 = state_18691__$1;
(statearr_18696_19774[(2)] = null);

(statearr_18696_19774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (4))){
var inst_18672 = (state_18691[(7)]);
var inst_18672__$1 = (state_18691[(2)]);
var inst_18673 = (inst_18672__$1 == null);
var state_18691__$1 = (function (){var statearr_18697 = state_18691;
(statearr_18697[(7)] = inst_18672__$1);

return statearr_18697;
})();
if(cljs.core.truth_(inst_18673)){
var statearr_18698_19781 = state_18691__$1;
(statearr_18698_19781[(1)] = (5));

} else {
var statearr_18699_19782 = state_18691__$1;
(statearr_18699_19782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (6))){
var inst_18672 = (state_18691[(7)]);
var inst_18677 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18672) : p.call(null,inst_18672));
var state_18691__$1 = state_18691;
if(cljs.core.truth_(inst_18677)){
var statearr_18700_19783 = state_18691__$1;
(statearr_18700_19783[(1)] = (8));

} else {
var statearr_18701_19784 = state_18691__$1;
(statearr_18701_19784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (3))){
var inst_18689 = (state_18691[(2)]);
var state_18691__$1 = state_18691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18691__$1,inst_18689);
} else {
if((state_val_18692 === (2))){
var state_18691__$1 = state_18691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18691__$1,(4),ch);
} else {
if((state_val_18692 === (11))){
var inst_18680 = (state_18691[(2)]);
var state_18691__$1 = state_18691;
var statearr_18704_19785 = state_18691__$1;
(statearr_18704_19785[(2)] = inst_18680);

(statearr_18704_19785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (9))){
var state_18691__$1 = state_18691;
var statearr_18705_19787 = state_18691__$1;
(statearr_18705_19787[(2)] = null);

(statearr_18705_19787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (5))){
var inst_18675 = cljs.core.async.close_BANG_(out);
var state_18691__$1 = state_18691;
var statearr_18706_19792 = state_18691__$1;
(statearr_18706_19792[(2)] = inst_18675);

(statearr_18706_19792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (10))){
var inst_18683 = (state_18691[(2)]);
var state_18691__$1 = (function (){var statearr_18707 = state_18691;
(statearr_18707[(8)] = inst_18683);

return statearr_18707;
})();
var statearr_18708_19793 = state_18691__$1;
(statearr_18708_19793[(2)] = null);

(statearr_18708_19793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18692 === (8))){
var inst_18672 = (state_18691[(7)]);
var state_18691__$1 = state_18691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18691__$1,(11),out,inst_18672);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_18711 = [null,null,null,null,null,null,null,null,null];
(statearr_18711[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_18711[(1)] = (1));

return statearr_18711;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_18691){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_18691);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e18712){var ex__13477__auto__ = e18712;
var statearr_18713_19794 = state_18691;
(statearr_18713_19794[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_18691[(4)]))){
var statearr_18714_19795 = state_18691;
(statearr_18714_19795[(1)] = cljs.core.first((state_18691[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19796 = state_18691;
state_18691 = G__19796;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_18691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_18691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_18715 = f__14659__auto__();
(statearr_18715[(6)] = c__14658__auto___19772);

return statearr_18715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18719 = arguments.length;
switch (G__18719) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_18793){
var state_val_18794 = (state_18793[(1)]);
if((state_val_18794 === (7))){
var inst_18789 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18800_19802 = state_18793__$1;
(statearr_18800_19802[(2)] = inst_18789);

(statearr_18800_19802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (20))){
var inst_18758 = (state_18793[(7)]);
var inst_18770 = (state_18793[(2)]);
var inst_18771 = cljs.core.next(inst_18758);
var inst_18738 = inst_18771;
var inst_18739 = null;
var inst_18740 = (0);
var inst_18741 = (0);
var state_18793__$1 = (function (){var statearr_18801 = state_18793;
(statearr_18801[(8)] = inst_18770);

(statearr_18801[(9)] = inst_18738);

(statearr_18801[(10)] = inst_18739);

(statearr_18801[(11)] = inst_18740);

(statearr_18801[(12)] = inst_18741);

return statearr_18801;
})();
var statearr_18803_19803 = state_18793__$1;
(statearr_18803_19803[(2)] = null);

(statearr_18803_19803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (1))){
var state_18793__$1 = state_18793;
var statearr_18806_19804 = state_18793__$1;
(statearr_18806_19804[(2)] = null);

(statearr_18806_19804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (4))){
var inst_18727 = (state_18793[(13)]);
var inst_18727__$1 = (state_18793[(2)]);
var inst_18728 = (inst_18727__$1 == null);
var state_18793__$1 = (function (){var statearr_18809 = state_18793;
(statearr_18809[(13)] = inst_18727__$1);

return statearr_18809;
})();
if(cljs.core.truth_(inst_18728)){
var statearr_18811_19806 = state_18793__$1;
(statearr_18811_19806[(1)] = (5));

} else {
var statearr_18812_19807 = state_18793__$1;
(statearr_18812_19807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (15))){
var state_18793__$1 = state_18793;
var statearr_18816_19808 = state_18793__$1;
(statearr_18816_19808[(2)] = null);

(statearr_18816_19808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (21))){
var state_18793__$1 = state_18793;
var statearr_18818_19809 = state_18793__$1;
(statearr_18818_19809[(2)] = null);

(statearr_18818_19809[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (13))){
var inst_18741 = (state_18793[(12)]);
var inst_18738 = (state_18793[(9)]);
var inst_18739 = (state_18793[(10)]);
var inst_18740 = (state_18793[(11)]);
var inst_18754 = (state_18793[(2)]);
var inst_18755 = (inst_18741 + (1));
var tmp18813 = inst_18739;
var tmp18814 = inst_18738;
var tmp18815 = inst_18740;
var inst_18738__$1 = tmp18814;
var inst_18739__$1 = tmp18813;
var inst_18740__$1 = tmp18815;
var inst_18741__$1 = inst_18755;
var state_18793__$1 = (function (){var statearr_18823 = state_18793;
(statearr_18823[(14)] = inst_18754);

(statearr_18823[(9)] = inst_18738__$1);

(statearr_18823[(10)] = inst_18739__$1);

(statearr_18823[(11)] = inst_18740__$1);

(statearr_18823[(12)] = inst_18741__$1);

return statearr_18823;
})();
var statearr_18824_19810 = state_18793__$1;
(statearr_18824_19810[(2)] = null);

(statearr_18824_19810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (22))){
var state_18793__$1 = state_18793;
var statearr_18826_19811 = state_18793__$1;
(statearr_18826_19811[(2)] = null);

(statearr_18826_19811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (6))){
var inst_18727 = (state_18793[(13)]);
var inst_18736 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18727) : f.call(null,inst_18727));
var inst_18737 = cljs.core.seq(inst_18736);
var inst_18738 = inst_18737;
var inst_18739 = null;
var inst_18740 = (0);
var inst_18741 = (0);
var state_18793__$1 = (function (){var statearr_18827 = state_18793;
(statearr_18827[(9)] = inst_18738);

(statearr_18827[(10)] = inst_18739);

(statearr_18827[(11)] = inst_18740);

(statearr_18827[(12)] = inst_18741);

return statearr_18827;
})();
var statearr_18829_19813 = state_18793__$1;
(statearr_18829_19813[(2)] = null);

(statearr_18829_19813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (17))){
var inst_18758 = (state_18793[(7)]);
var inst_18763 = cljs.core.chunk_first(inst_18758);
var inst_18764 = cljs.core.chunk_rest(inst_18758);
var inst_18765 = cljs.core.count(inst_18763);
var inst_18738 = inst_18764;
var inst_18739 = inst_18763;
var inst_18740 = inst_18765;
var inst_18741 = (0);
var state_18793__$1 = (function (){var statearr_18835 = state_18793;
(statearr_18835[(9)] = inst_18738);

(statearr_18835[(10)] = inst_18739);

(statearr_18835[(11)] = inst_18740);

(statearr_18835[(12)] = inst_18741);

return statearr_18835;
})();
var statearr_18836_19814 = state_18793__$1;
(statearr_18836_19814[(2)] = null);

(statearr_18836_19814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (3))){
var inst_18791 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18793__$1,inst_18791);
} else {
if((state_val_18794 === (12))){
var inst_18779 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18842_19815 = state_18793__$1;
(statearr_18842_19815[(2)] = inst_18779);

(statearr_18842_19815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (2))){
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18793__$1,(4),in$);
} else {
if((state_val_18794 === (23))){
var inst_18787 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18851_19816 = state_18793__$1;
(statearr_18851_19816[(2)] = inst_18787);

(statearr_18851_19816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (19))){
var inst_18774 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18853_19817 = state_18793__$1;
(statearr_18853_19817[(2)] = inst_18774);

(statearr_18853_19817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (11))){
var inst_18738 = (state_18793[(9)]);
var inst_18758 = (state_18793[(7)]);
var inst_18758__$1 = cljs.core.seq(inst_18738);
var state_18793__$1 = (function (){var statearr_18857 = state_18793;
(statearr_18857[(7)] = inst_18758__$1);

return statearr_18857;
})();
if(inst_18758__$1){
var statearr_18858_19820 = state_18793__$1;
(statearr_18858_19820[(1)] = (14));

} else {
var statearr_18860_19821 = state_18793__$1;
(statearr_18860_19821[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (9))){
var inst_18781 = (state_18793[(2)]);
var inst_18782 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18793__$1 = (function (){var statearr_18861 = state_18793;
(statearr_18861[(15)] = inst_18781);

return statearr_18861;
})();
if(cljs.core.truth_(inst_18782)){
var statearr_18865_19824 = state_18793__$1;
(statearr_18865_19824[(1)] = (21));

} else {
var statearr_18866_19825 = state_18793__$1;
(statearr_18866_19825[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (5))){
var inst_18730 = cljs.core.async.close_BANG_(out);
var state_18793__$1 = state_18793;
var statearr_18867_19826 = state_18793__$1;
(statearr_18867_19826[(2)] = inst_18730);

(statearr_18867_19826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (14))){
var inst_18758 = (state_18793[(7)]);
var inst_18760 = cljs.core.chunked_seq_QMARK_(inst_18758);
var state_18793__$1 = state_18793;
if(inst_18760){
var statearr_18868_19827 = state_18793__$1;
(statearr_18868_19827[(1)] = (17));

} else {
var statearr_18870_19829 = state_18793__$1;
(statearr_18870_19829[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (16))){
var inst_18777 = (state_18793[(2)]);
var state_18793__$1 = state_18793;
var statearr_18874_19830 = state_18793__$1;
(statearr_18874_19830[(2)] = inst_18777);

(statearr_18874_19830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18794 === (10))){
var inst_18739 = (state_18793[(10)]);
var inst_18741 = (state_18793[(12)]);
var inst_18752 = cljs.core._nth(inst_18739,inst_18741);
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18793__$1,(13),out,inst_18752);
} else {
if((state_val_18794 === (18))){
var inst_18758 = (state_18793[(7)]);
var inst_18768 = cljs.core.first(inst_18758);
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18793__$1,(20),out,inst_18768);
} else {
if((state_val_18794 === (8))){
var inst_18741 = (state_18793[(12)]);
var inst_18740 = (state_18793[(11)]);
var inst_18743 = (inst_18741 < inst_18740);
var inst_18744 = inst_18743;
var state_18793__$1 = state_18793;
if(cljs.core.truth_(inst_18744)){
var statearr_18875_19831 = state_18793__$1;
(statearr_18875_19831[(1)] = (10));

} else {
var statearr_18876_19832 = state_18793__$1;
(statearr_18876_19832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____0 = (function (){
var statearr_18877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18877[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__);

(statearr_18877[(1)] = (1));

return statearr_18877;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____1 = (function (state_18793){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_18793);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e18878){var ex__13477__auto__ = e18878;
var statearr_18879_19836 = state_18793;
(statearr_18879_19836[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_18793[(4)]))){
var statearr_18880_19837 = state_18793;
(statearr_18880_19837[(1)] = cljs.core.first((state_18793[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19841 = state_18793;
state_18793 = G__19841;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__ = function(state_18793){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____1.call(this,state_18793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_18886 = f__14659__auto__();
(statearr_18886[(6)] = c__14658__auto__);

return statearr_18886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));

return c__14658__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18894 = arguments.length;
switch (G__18894) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18904 = arguments.length;
switch (G__18904) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18906 = arguments.length;
switch (G__18906) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___19848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_18933){
var state_val_18934 = (state_18933[(1)]);
if((state_val_18934 === (7))){
var inst_18928 = (state_18933[(2)]);
var state_18933__$1 = state_18933;
var statearr_18936_19849 = state_18933__$1;
(statearr_18936_19849[(2)] = inst_18928);

(statearr_18936_19849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18934 === (1))){
var inst_18910 = null;
var state_18933__$1 = (function (){var statearr_18940 = state_18933;
(statearr_18940[(7)] = inst_18910);

return statearr_18940;
})();
var statearr_18941_19851 = state_18933__$1;
(statearr_18941_19851[(2)] = null);

(statearr_18941_19851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18934 === (4))){
var inst_18913 = (state_18933[(8)]);
var inst_18913__$1 = (state_18933[(2)]);
var inst_18914 = (inst_18913__$1 == null);
var inst_18915 = cljs.core.not(inst_18914);
var state_18933__$1 = (function (){var statearr_18942 = state_18933;
(statearr_18942[(8)] = inst_18913__$1);

return statearr_18942;
})();
if(inst_18915){
var statearr_18943_19855 = state_18933__$1;
(statearr_18943_19855[(1)] = (5));

} else {
var statearr_18944_19856 = state_18933__$1;
(statearr_18944_19856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18934 === (6))){
var state_18933__$1 = state_18933;
var statearr_18945_19857 = state_18933__$1;
(statearr_18945_19857[(2)] = null);

(statearr_18945_19857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18934 === (3))){
var inst_18930 = (state_18933[(2)]);
var inst_18931 = cljs.core.async.close_BANG_(out);
var state_18933__$1 = (function (){var statearr_18947 = state_18933;
(statearr_18947[(9)] = inst_18930);

return statearr_18947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18933__$1,inst_18931);
} else {
if((state_val_18934 === (2))){
var state_18933__$1 = state_18933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18933__$1,(4),ch);
} else {
if((state_val_18934 === (11))){
var inst_18913 = (state_18933[(8)]);
var inst_18922 = (state_18933[(2)]);
var inst_18910 = inst_18913;
var state_18933__$1 = (function (){var statearr_18948 = state_18933;
(statearr_18948[(10)] = inst_18922);

(statearr_18948[(7)] = inst_18910);

return statearr_18948;
})();
var statearr_18949_19861 = state_18933__$1;
(statearr_18949_19861[(2)] = null);

(statearr_18949_19861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18934 === (9))){
var inst_18913 = (state_18933[(8)]);
var state_18933__$1 = state_18933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18933__$1,(11),out,inst_18913);
} else {
if((state_val_18934 === (5))){
var inst_18913 = (state_18933[(8)]);
var inst_18910 = (state_18933[(7)]);
var inst_18917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18913,inst_18910);
var state_18933__$1 = state_18933;
if(inst_18917){
var statearr_18951_19862 = state_18933__$1;
(statearr_18951_19862[(1)] = (8));

} else {
var statearr_18952_19863 = state_18933__$1;
(statearr_18952_19863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18934 === (10))){
var inst_18925 = (state_18933[(2)]);
var state_18933__$1 = state_18933;
var statearr_18953_19864 = state_18933__$1;
(statearr_18953_19864[(2)] = inst_18925);

(statearr_18953_19864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18934 === (8))){
var inst_18910 = (state_18933[(7)]);
var tmp18950 = inst_18910;
var inst_18910__$1 = tmp18950;
var state_18933__$1 = (function (){var statearr_18954 = state_18933;
(statearr_18954[(7)] = inst_18910__$1);

return statearr_18954;
})();
var statearr_18955_19867 = state_18933__$1;
(statearr_18955_19867[(2)] = null);

(statearr_18955_19867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_18956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18956[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_18956[(1)] = (1));

return statearr_18956;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_18933){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_18933);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e18957){var ex__13477__auto__ = e18957;
var statearr_18958_19870 = state_18933;
(statearr_18958_19870[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_18933[(4)]))){
var statearr_18959_19871 = state_18933;
(statearr_18959_19871[(1)] = cljs.core.first((state_18933[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19872 = state_18933;
state_18933 = G__19872;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_18933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_18933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_18960 = f__14659__auto__();
(statearr_18960[(6)] = c__14658__auto___19848);

return statearr_18960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18964 = arguments.length;
switch (G__18964) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___19875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_19013){
var state_val_19014 = (state_19013[(1)]);
if((state_val_19014 === (7))){
var inst_19009 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
var statearr_19021_19885 = state_19013__$1;
(statearr_19021_19885[(2)] = inst_19009);

(statearr_19021_19885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (1))){
var inst_18969 = (new Array(n));
var inst_18970 = inst_18969;
var inst_18971 = (0);
var state_19013__$1 = (function (){var statearr_19024 = state_19013;
(statearr_19024[(7)] = inst_18970);

(statearr_19024[(8)] = inst_18971);

return statearr_19024;
})();
var statearr_19025_19887 = state_19013__$1;
(statearr_19025_19887[(2)] = null);

(statearr_19025_19887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (4))){
var inst_18976 = (state_19013[(9)]);
var inst_18976__$1 = (state_19013[(2)]);
var inst_18977 = (inst_18976__$1 == null);
var inst_18978 = cljs.core.not(inst_18977);
var state_19013__$1 = (function (){var statearr_19026 = state_19013;
(statearr_19026[(9)] = inst_18976__$1);

return statearr_19026;
})();
if(inst_18978){
var statearr_19027_19889 = state_19013__$1;
(statearr_19027_19889[(1)] = (5));

} else {
var statearr_19028_19890 = state_19013__$1;
(statearr_19028_19890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (15))){
var inst_19001 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
var statearr_19031_19892 = state_19013__$1;
(statearr_19031_19892[(2)] = inst_19001);

(statearr_19031_19892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (13))){
var state_19013__$1 = state_19013;
var statearr_19034_19893 = state_19013__$1;
(statearr_19034_19893[(2)] = null);

(statearr_19034_19893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (6))){
var inst_18971 = (state_19013[(8)]);
var inst_18996 = (inst_18971 > (0));
var state_19013__$1 = state_19013;
if(cljs.core.truth_(inst_18996)){
var statearr_19035_19895 = state_19013__$1;
(statearr_19035_19895[(1)] = (12));

} else {
var statearr_19036_19896 = state_19013__$1;
(statearr_19036_19896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (3))){
var inst_19011 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19013__$1,inst_19011);
} else {
if((state_val_19014 === (12))){
var inst_18970 = (state_19013[(7)]);
var inst_18999 = cljs.core.vec(inst_18970);
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19013__$1,(15),out,inst_18999);
} else {
if((state_val_19014 === (2))){
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19013__$1,(4),ch);
} else {
if((state_val_19014 === (11))){
var inst_18989 = (state_19013[(2)]);
var inst_18990 = (new Array(n));
var inst_18970 = inst_18990;
var inst_18971 = (0);
var state_19013__$1 = (function (){var statearr_19039 = state_19013;
(statearr_19039[(10)] = inst_18989);

(statearr_19039[(7)] = inst_18970);

(statearr_19039[(8)] = inst_18971);

return statearr_19039;
})();
var statearr_19042_19898 = state_19013__$1;
(statearr_19042_19898[(2)] = null);

(statearr_19042_19898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (9))){
var inst_18970 = (state_19013[(7)]);
var inst_18987 = cljs.core.vec(inst_18970);
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19013__$1,(11),out,inst_18987);
} else {
if((state_val_19014 === (5))){
var inst_18970 = (state_19013[(7)]);
var inst_18971 = (state_19013[(8)]);
var inst_18976 = (state_19013[(9)]);
var inst_18981 = (state_19013[(11)]);
var inst_18980 = (inst_18970[inst_18971] = inst_18976);
var inst_18981__$1 = (inst_18971 + (1));
var inst_18982 = (inst_18981__$1 < n);
var state_19013__$1 = (function (){var statearr_19046 = state_19013;
(statearr_19046[(12)] = inst_18980);

(statearr_19046[(11)] = inst_18981__$1);

return statearr_19046;
})();
if(cljs.core.truth_(inst_18982)){
var statearr_19047_19903 = state_19013__$1;
(statearr_19047_19903[(1)] = (8));

} else {
var statearr_19048_19904 = state_19013__$1;
(statearr_19048_19904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (14))){
var inst_19004 = (state_19013[(2)]);
var inst_19007 = cljs.core.async.close_BANG_(out);
var state_19013__$1 = (function (){var statearr_19050 = state_19013;
(statearr_19050[(13)] = inst_19004);

return statearr_19050;
})();
var statearr_19052_19905 = state_19013__$1;
(statearr_19052_19905[(2)] = inst_19007);

(statearr_19052_19905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (10))){
var inst_18994 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
var statearr_19059_19912 = state_19013__$1;
(statearr_19059_19912[(2)] = inst_18994);

(statearr_19059_19912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19014 === (8))){
var inst_18970 = (state_19013[(7)]);
var inst_18981 = (state_19013[(11)]);
var tmp19049 = inst_18970;
var inst_18970__$1 = tmp19049;
var inst_18971 = inst_18981;
var state_19013__$1 = (function (){var statearr_19060 = state_19013;
(statearr_19060[(7)] = inst_18970__$1);

(statearr_19060[(8)] = inst_18971);

return statearr_19060;
})();
var statearr_19061_19915 = state_19013__$1;
(statearr_19061_19915[(2)] = null);

(statearr_19061_19915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_19064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19064[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_19064[(1)] = (1));

return statearr_19064;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_19013){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_19013);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e19065){var ex__13477__auto__ = e19065;
var statearr_19066_19918 = state_19013;
(statearr_19066_19918[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_19013[(4)]))){
var statearr_19069_19919 = state_19013;
(statearr_19069_19919[(1)] = cljs.core.first((state_19013[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19920 = state_19013;
state_19013 = G__19920;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_19013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_19013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_19071 = f__14659__auto__();
(statearr_19071[(6)] = c__14658__auto___19875);

return statearr_19071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19082 = arguments.length;
switch (G__19082) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___19924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14659__auto__ = (function (){var switch__13473__auto__ = (function (state_19136){
var state_val_19137 = (state_19136[(1)]);
if((state_val_19137 === (7))){
var inst_19131 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
var statearr_19142_19925 = state_19136__$1;
(statearr_19142_19925[(2)] = inst_19131);

(statearr_19142_19925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (1))){
var inst_19091 = [];
var inst_19092 = inst_19091;
var inst_19093 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19136__$1 = (function (){var statearr_19146 = state_19136;
(statearr_19146[(7)] = inst_19092);

(statearr_19146[(8)] = inst_19093);

return statearr_19146;
})();
var statearr_19147_19930 = state_19136__$1;
(statearr_19147_19930[(2)] = null);

(statearr_19147_19930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (4))){
var inst_19096 = (state_19136[(9)]);
var inst_19096__$1 = (state_19136[(2)]);
var inst_19097 = (inst_19096__$1 == null);
var inst_19098 = cljs.core.not(inst_19097);
var state_19136__$1 = (function (){var statearr_19148 = state_19136;
(statearr_19148[(9)] = inst_19096__$1);

return statearr_19148;
})();
if(inst_19098){
var statearr_19161_19931 = state_19136__$1;
(statearr_19161_19931[(1)] = (5));

} else {
var statearr_19162_19932 = state_19136__$1;
(statearr_19162_19932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (15))){
var inst_19092 = (state_19136[(7)]);
var inst_19123 = cljs.core.vec(inst_19092);
var state_19136__$1 = state_19136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19136__$1,(18),out,inst_19123);
} else {
if((state_val_19137 === (13))){
var inst_19118 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
var statearr_19163_19934 = state_19136__$1;
(statearr_19163_19934[(2)] = inst_19118);

(statearr_19163_19934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (6))){
var inst_19092 = (state_19136[(7)]);
var inst_19120 = inst_19092.length;
var inst_19121 = (inst_19120 > (0));
var state_19136__$1 = state_19136;
if(cljs.core.truth_(inst_19121)){
var statearr_19164_19935 = state_19136__$1;
(statearr_19164_19935[(1)] = (15));

} else {
var statearr_19165_19939 = state_19136__$1;
(statearr_19165_19939[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (17))){
var inst_19128 = (state_19136[(2)]);
var inst_19129 = cljs.core.async.close_BANG_(out);
var state_19136__$1 = (function (){var statearr_19166 = state_19136;
(statearr_19166[(10)] = inst_19128);

return statearr_19166;
})();
var statearr_19167_19941 = state_19136__$1;
(statearr_19167_19941[(2)] = inst_19129);

(statearr_19167_19941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (3))){
var inst_19133 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19136__$1,inst_19133);
} else {
if((state_val_19137 === (12))){
var inst_19092 = (state_19136[(7)]);
var inst_19111 = cljs.core.vec(inst_19092);
var state_19136__$1 = state_19136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19136__$1,(14),out,inst_19111);
} else {
if((state_val_19137 === (2))){
var state_19136__$1 = state_19136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19136__$1,(4),ch);
} else {
if((state_val_19137 === (11))){
var inst_19092 = (state_19136[(7)]);
var inst_19096 = (state_19136[(9)]);
var inst_19100 = (state_19136[(11)]);
var inst_19108 = inst_19092.push(inst_19096);
var tmp19168 = inst_19092;
var inst_19092__$1 = tmp19168;
var inst_19093 = inst_19100;
var state_19136__$1 = (function (){var statearr_19170 = state_19136;
(statearr_19170[(12)] = inst_19108);

(statearr_19170[(7)] = inst_19092__$1);

(statearr_19170[(8)] = inst_19093);

return statearr_19170;
})();
var statearr_19171_19947 = state_19136__$1;
(statearr_19171_19947[(2)] = null);

(statearr_19171_19947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (9))){
var inst_19093 = (state_19136[(8)]);
var inst_19104 = cljs.core.keyword_identical_QMARK_(inst_19093,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19136__$1 = state_19136;
var statearr_19172_19948 = state_19136__$1;
(statearr_19172_19948[(2)] = inst_19104);

(statearr_19172_19948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (5))){
var inst_19096 = (state_19136[(9)]);
var inst_19100 = (state_19136[(11)]);
var inst_19093 = (state_19136[(8)]);
var inst_19101 = (state_19136[(13)]);
var inst_19100__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19096) : f.call(null,inst_19096));
var inst_19101__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19100__$1,inst_19093);
var state_19136__$1 = (function (){var statearr_19173 = state_19136;
(statearr_19173[(11)] = inst_19100__$1);

(statearr_19173[(13)] = inst_19101__$1);

return statearr_19173;
})();
if(inst_19101__$1){
var statearr_19174_19949 = state_19136__$1;
(statearr_19174_19949[(1)] = (8));

} else {
var statearr_19175_19950 = state_19136__$1;
(statearr_19175_19950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (14))){
var inst_19096 = (state_19136[(9)]);
var inst_19100 = (state_19136[(11)]);
var inst_19113 = (state_19136[(2)]);
var inst_19114 = [];
var inst_19115 = inst_19114.push(inst_19096);
var inst_19092 = inst_19114;
var inst_19093 = inst_19100;
var state_19136__$1 = (function (){var statearr_19176 = state_19136;
(statearr_19176[(14)] = inst_19113);

(statearr_19176[(15)] = inst_19115);

(statearr_19176[(7)] = inst_19092);

(statearr_19176[(8)] = inst_19093);

return statearr_19176;
})();
var statearr_19177_19951 = state_19136__$1;
(statearr_19177_19951[(2)] = null);

(statearr_19177_19951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (16))){
var state_19136__$1 = state_19136;
var statearr_19178_19952 = state_19136__$1;
(statearr_19178_19952[(2)] = null);

(statearr_19178_19952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (10))){
var inst_19106 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
if(cljs.core.truth_(inst_19106)){
var statearr_19179_19954 = state_19136__$1;
(statearr_19179_19954[(1)] = (11));

} else {
var statearr_19181_19955 = state_19136__$1;
(statearr_19181_19955[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (18))){
var inst_19125 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
var statearr_19182_19957 = state_19136__$1;
(statearr_19182_19957[(2)] = inst_19125);

(statearr_19182_19957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (8))){
var inst_19101 = (state_19136[(13)]);
var state_19136__$1 = state_19136;
var statearr_19183_19958 = state_19136__$1;
(statearr_19183_19958[(2)] = inst_19101);

(statearr_19183_19958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13474__auto__ = null;
var cljs$core$async$state_machine__13474__auto____0 = (function (){
var statearr_19184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19184[(0)] = cljs$core$async$state_machine__13474__auto__);

(statearr_19184[(1)] = (1));

return statearr_19184;
});
var cljs$core$async$state_machine__13474__auto____1 = (function (state_19136){
while(true){
var ret_value__13475__auto__ = (function (){try{while(true){
var result__13476__auto__ = switch__13473__auto__(state_19136);
if(cljs.core.keyword_identical_QMARK_(result__13476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13476__auto__;
}
break;
}
}catch (e19185){var ex__13477__auto__ = e19185;
var statearr_19186_19960 = state_19136;
(statearr_19186_19960[(2)] = ex__13477__auto__);


if(cljs.core.seq((state_19136[(4)]))){
var statearr_19187_19961 = state_19136;
(statearr_19187_19961[(1)] = cljs.core.first((state_19136[(4)])));

} else {
throw ex__13477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19963 = state_19136;
state_19136 = G__19963;
continue;
} else {
return ret_value__13475__auto__;
}
break;
}
});
cljs$core$async$state_machine__13474__auto__ = function(state_19136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13474__auto____1.call(this,state_19136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13474__auto____0;
cljs$core$async$state_machine__13474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13474__auto____1;
return cljs$core$async$state_machine__13474__auto__;
})()
})();
var state__14660__auto__ = (function (){var statearr_19188 = f__14659__auto__();
(statearr_19188[(6)] = c__14658__auto___19924);

return statearr_19188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
