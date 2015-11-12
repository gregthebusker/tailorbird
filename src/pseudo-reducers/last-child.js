module.exports = {
    shouldApplyStyle: (style, child, index, length) => {
        return index == length - 1 && style[':last-child'];
    },

    applyStyle: (style, child, index, length) => {
        return {
            ...style,
            ...style[':last-child'],
        };
    },

    cleanUp: (style, child, index, length) => {
        var newStyle = {
            ...style,
        };
        delete newStyle[':last-child'];
        return newStyle;
    },
};