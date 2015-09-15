try { module.exports = {protos:$protos}; } catch (e) { }

$protos = [$io,$file,$bin,$heart];

var $io = {}; $io.on = function onio(x, cb) { if (is(x,3,'io')) {
    try { eval(x.v[1].v); if (typeof cb == 'function') cb(x); }
    catch (e) { console.log(e); return { status: '' }; }
    return { status: "ok" }; } else return { status: '' }; }

var $file = {}; $file.on = function onfile(x, cb) { if (is(x,12,'ftp')) {
    if (typeof cb == 'function') cb(x); return { status: "ok" }; } else return { status: ''}; }

var $bin = {}; $bin.on = function onbin(x, cb) { if (is(x,2,'bin')) {
    if (typeof cb == 'function') cb(x); return { status: "ok" }; } else return { status: '' }; }

var $heart = {}; $heart.on = function onheart(x, cb) {
    if (heart == 'PING') return {status: 'ok', data: 'PONG'} else return {status: ''}; }
