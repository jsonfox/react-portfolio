const linkRegex = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i;

const titleToId = (title) => title.toLowerCase().replace(' ', '-');
const isValidLink = (link) => typeof link === 'string' && linkRegex.test(link)
const properCaseVarName = (obj) => Object.keys(obj)[0].charAt(0).toUpperCase + Object.keys(obj)[0].slice(1)

export { titleToId, isValidLink, properCaseVarName };