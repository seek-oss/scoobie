export const robotoHref =
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap';

export const robotoMonoHref =
  'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap';

// Content Security Policy script hashes
// 'sha256-8fG3vVy4SKf2xd79rQ5AKI0uBpwM9Wc8SMYCcGNyuPw='
// 'sha384-moCT7/5f3Yr4vo0n3BZCjn7j0gT8qzKn7rpQqBnle0R2oLW/RqGTJ4jldVCTbOjx'
// 'sha512-4v+nFnUdafQ6pPIO42k6ziIvnqW4c8l+hYir10XE6SuIm3jfcQTK7tmqQttfYbFXZdk1X7QzPEMtshyX53o6Ug=='
export const robotoHtml = `
<link rel="preload" href="${robotoHref}" id="robotoStyle" as="style">
<noscript><link rel="stylesheet" href="${robotoHref}"></noscript>
<script>robotoStyle.addEventListener('load',function(){this.rel='stylesheet'})</script>
`.trim();

// Content Security Policy script hashes
// 'sha256-bMQhmqqj8Sjmn6rk/siu6CPHm54TL349InovHDPXATw='
// 'sha384-03NpwxMolxf0FN4adYZfdpBY0sEYXM5vOh+mE++L9pSIoEiVLSYQfaZo1pTNuiRN'
// 'sha512-lbwBboh2OwaD10JAkMLuD8OHBlmBpOgeyMssLlb2nZUBpWqrjJKBMtAkt9rlAS/tXxpmCeBz71oTkYBoLRZBsA=='
export const robotoMonoHtml = `
<link rel="preload" href="${robotoMonoHref}" id="robotoMonoStyle" as="style">
<noscript><link rel="stylesheet" href="${robotoMonoHref}"></noscript>
<script>robotoMonoStyle.addEventListener('load',function(){this.rel='stylesheet'})</script>
`.trim();
