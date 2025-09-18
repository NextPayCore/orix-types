export const getIconPath = (name: string, ext: 'svg' | 'png' | 'jpg' = 'svg') => {
  return new URL(`../assets/icons/${name}.${ext}`, import.meta.url).href;
};

export const getGif = (gifName: string): string => {
  return new URL(`../assets/gif/${gifName}.gif`, import.meta.url).href;
};

export const copyToClipboard = async (text: string) => {
  return await navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Error copying text: ', err);
    });
};
