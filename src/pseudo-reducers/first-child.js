module.exports = (token, args={}) => {
    return token == ':first-child' && args.index == 0;
};