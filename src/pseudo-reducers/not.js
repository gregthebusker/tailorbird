module.exports = {
    hasTag: (args) => {
        return args.style[':not'];
    },

    shouldApplyStyle: (args) => {
        return true;
    },

    applyStyle: (parentArgs) => {
        var style = parentArgs.style[':not'];

        var newStyle = parentArgs.reducers.reduce((previousStyle, reducer) => {
            var args = {
                style: previousStyle,
                children: parentArgs.children,
                index: parentArgs.index,
            };
            if (reducer.hasTag(args) && !reducer.shouldApplyStyle(args)) {
                args = {
                    ...args,
                    style: reducer.applyStyle(args),
                };
            }
            return reducer.cleanUp(args);
        }, style);

        return {
            ...parentArgs.style,
            ...newStyle,
        };
    },

    cleanUp: (args) => {
        var newStyle = {
            ...args.style,
        };
        delete newStyle[':not'];
        return newStyle;
    },
};