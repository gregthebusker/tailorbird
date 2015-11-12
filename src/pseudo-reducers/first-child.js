module.exports = (style, child, index, length) => {
    var firstChildStyles = style[':first-child'];
    if (index == 0 && firstChildStyles) {
        return {
            ...style,
            firstChildStyles,
        };
    } else {
        return style;
    }
};