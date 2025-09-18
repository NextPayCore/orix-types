export const getIconPath = (name, ext = 'svg') => {
    return new URL(`../assets/icons/${name}.${ext}`, import.meta.url).href;
};
export const getGif = (gifName) => {
    return new URL(`../assets/gif/${gifName}.gif`, import.meta.url).href;
};
export const copyToClipboard = async (text) => {
    return await navigator.clipboard
        .writeText(text)
        .then(() => {
        console.log('Text copied to clipboard');
    })
        .catch((err) => {
        console.error('Error copying text: ', err);
    });
};
//# sourceMappingURL=index.js.map