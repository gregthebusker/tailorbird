module.exports = {
    shouldApplyStyle: (style, child, index, length) => {
        return index == 0 && style[':first-child'];
    },

    applyStyle: (style, child, index, length) => {
        return {
            ...style,
            ...style[':first-child'],
        };
    },

    cleanUp: (style, child, index, length) => {
        var newStyle = {
            ...style,
        };
        delete newStyle[':first-child'];
        return newStyle;
    },
};