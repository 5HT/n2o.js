module.exports = {reg:reg,send:send,insert_bottom};

function send(sid,room,message) {
    $conn.send(enc(tuple(atom('pub'),atom(room),bin(message)))); }

function reg(sid,room) {
    $conn.send(enc(tuple(atom('sub'),atom(room)))); }

function session(sid,key,value) {
    $conn.send(enc(tuple(atom('put'),atom('session'),bin(key),bin(value)))); }

function state(sid,key,value) {
    $conn.send(enc(tuple(atom('put'),atom('state'),bin(key),bin(value)))); }

function cache(sid,key,value) {
    $conn.send(enc(tuple(atom('put'),atom('cache'),bin(key),bin(value)))); }

function insert_bottom(sid,element,htm) {
    js = function() { var div = qn('div'); div.innerHTML = htm;
                      qi(element).appendChild(div.firstChild); };
    $conn.send(enc(tuple(atom('io'),bin(js.toString()),bin('')))); }
