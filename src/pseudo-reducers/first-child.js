module.exports = {
    hasTag: (args) => {
        return args.style[':first-child'];
    },

    shouldApplyStyle: (args) => {
        return args.index == 0;
    },

    applyStyle: (args) => {
        return {
            ...args.style,
            ...args.style[':first-child'],
        };
    },

    cleanUp: (args) => {
        var newStyle = {
            ...args.style,
        };
        delete newStyle[':first-child'];
        return newStyle;
    },
};