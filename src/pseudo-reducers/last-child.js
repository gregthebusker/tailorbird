module.exports = {
    hasTag: (args) => {
        return args.style[':last-child'];
    },

    shouldApplyStyle: (args) => {
        return args.index == args.children.length - 1;
    },

    applyStyle: (args) => {
        return {
            ...args.style,
            ...args.style[':last-child'],
        };
    },

    cleanUp: (args) => {
        var newStyle = {
            ...args.style,
        };
        delete newStyle[':last-child'];
        return newStyle;
    },
};