var UUID,
    SEQUENCE = 'xxxxyxxxxyxxxxyxxxxy',
    CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    CHAR_N = 16;

function generateUUID(sequence, charN) {
    sequence = typeof sequence === 'string' ? sequence : SEQUENCE;

    charN = typeof charN === 'number' ? charN : CHAR_N;

    var chars = CHARS.slice(0, charN);

    function UUID() {
        var d = new Date().getTime();
        var L = chars.length;
        return sequence.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*L)%L | 0;
            d = Math.floor(d/L);
            return chars[(c === 'x' ? r : (r&0x3|0x8))];
        });
    }

    return UUID;
}

UUID = generateUUID();

UUID.generateUUID = generateUUID;

module.exports = UUID;
