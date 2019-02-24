export default async (text = '111234 🎉🎉🎉') => {
    const element = document.createElement('div');

    const result = await import('./lazyLoadedText');

    element.innerHTML = text;

    return element;
};
