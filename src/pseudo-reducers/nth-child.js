module.exports = (token, args={}) => {
    if (!token.indexOf(':nth-child') == 0) {
        return false;
    }

    var match = token.match(/:nth-child\((.*?)\)/);
    if (match.length < 2 || !match[1]) {
        return false;
    }

    var pattern = match[1];
    if (pattern == 'odd') {
        return args.index % 2 == 1;
    } else if (pattern == 'even') {
        return args.index % 2 == 0;
    } else {
        var patternMatch = pattern.match(/(.*)n\+(.*)/);

        if (patternMatch.length < 3) {
            return false;
        }

        var a = patternMatch[1] ? parseInt(patternMatch[1]) : 1;
        var b = parseInt(patternMatch[2]);

        var n = (args.index - b) / a;
        return n >= 0 && n == parseInt(n);
    }
};