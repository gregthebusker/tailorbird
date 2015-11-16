module.exports = (token, args={}) => {
    console.log(token)
    console.log(args)
    return token == ':first-child' && args.index == 0;
};