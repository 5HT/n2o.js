module.exports = {events:index};

var match = require("matches").pattern,
    bert  = require("../bert"),
    tuple = bert.tuple,
    atom  = bert.atom,
    bin   = bert.bin,
    wf    = require("../wf");

var index = match({

    'init' : function () {
        wf.reg('room'); },

    '["client",[sid,msg]]' : function (sid,msg) {
        wf.insert_bottom("history","<span>"+sid+": "+msg+"</span>"); },

    '["chat",msg]' : function (msg) {
        wf.send('room',tuple(atom('client'),tuple(bin(this.sid),bin(msg))))); }

});
