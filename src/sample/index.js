module.exports = {events:index};

var match = require("matches").pattern,
    bert  = require("../bert"),
    tuple = bert.tuple,
    atom  = bert.atom,
    bin   = bert.bin,
    wf    = require("../wf");

var index = match({

    'init' : function () {
        wf.reg(this,sid,'room'); },

    '["client",[sid,msg]]' : function (sid,msg) {
        wf.insert_bottom(this.sid,"history","<span>"+sid+": "+msg+"</span>"); },

    '["chat",msg]' : function (msg) {
        wf.send(this.sid,'room',tuple(atom('client'),tuple(bin(this.sid),bin(msg))))); }

});
