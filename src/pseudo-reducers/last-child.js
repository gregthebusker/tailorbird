module.exports = (token, args={}) => {
    return token == ':last-child' && args.index == args.children.length -1;
};