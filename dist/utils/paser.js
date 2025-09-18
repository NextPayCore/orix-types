export const toJson = (value) => {
    try {
        return JSON.parse(value);
    }
    catch {
        return null;
    }
};
export const toInt = (value) => {
    try {
        switch (typeof value) {
            case 'number':
                return value;
            case 'string':
                return parseInt(value);
            default:
                return undefined;
        }
    }
    catch {
        return undefined;
    }
};
export const decodeHtmlEntities = (text) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
    return textarea.value;
};
//# sourceMappingURL=paser.js.map