module.exports = (style, child, index, length) => {
    var firstChildStyles = style[':first-child'];
    var newStyle = {
        ...style,
    };
    delete newStyle[':first-child'];

    if (index == 0 && firstChildStyles) {
        newStyle = {
            ...newStyle,
            ...firstChildStyles,
        };
    }
    return newStyle;
};