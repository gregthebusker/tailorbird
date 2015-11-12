module.exports = (style, child, index, length) => {
    var lastChildStyles = style[':last-child'];
    var newStyle = {
        ...style,
    };
    delete newStyle[':last-child'];

    if (index == length - 1 && lastChildStyles) {
        newStyle = {
            ...newStyle,
            ...lastChildStyles,
        };
    }
    return newStyle;
};