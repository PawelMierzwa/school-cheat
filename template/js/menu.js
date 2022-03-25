

const html = document.getElementsByTagName('html')[0];
const toggleTheme = (theme) => {
    html.dataset.theme = theme;
}

if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="template/css/dark.css" onload="document.documentElement.style.display = \'\'">'
    );
}