export const robotoHref =
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap';

export const robotoMonoHref =
  'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap';

export const robotoHtml = `
<link rel="preload" href="${robotoHref}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="${robotoHref}"></noscript>
`.trim();

export const robotoMonoHtml = `
<link rel="preload" href="${robotoMonoHref}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="${robotoMonoHref}"></noscript>
`.trim();
