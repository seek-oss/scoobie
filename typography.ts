export const robotoHref =
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap';

export const robotoMonoHref =
  'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap';

// Content Security Policy script hashes
// 'sha256-xZQ6pwwd2GWa3icDLOt5nh+tXjQPdjMLv6ZNWDWGcH0='
// 'sha384-3EhosVPtUfrfIWEpg1sEGnUhKJXR7dr2HfaU1syY25LJOOeK5waQtjxPoOGYtAy9'
// 'sha512-XNOxoMO6sHUvl6sCmk7UPzBFZNvA3ycexDoWbq0meIxuX1PjpyNL69MiKi9K0Og/MjDb/89tghBUpQdGC00TLA=='
export const robotoHtml = `
<link rel="preload" href="${robotoHref}" id="robotoStyle" as="style">
<noscript><link rel="stylesheet" href="${robotoHref}"></noscript>
<script>robotoStyle.addEventListener('load',function(){this.onload=null;this.rel='stylesheet'})</script>
`.trim();

// Content Security Policy script hashes
// 'sha256-LY7AsjE2wZqtABYpGF6u5JYWitcvsIGVwaUQrpAV9po='
// 'sha384-lFeB5k6Sxq+nTLGZnhogBBqKof3b5S0HlMUhaf5UIuuqCa8to/735sihb4wZttsQ'
// 'sha512-K9sHDQUFVjkgsr3NLac9DrNgS8qE+rCf+zCT8NxN0uVWoTeDqmfCaVLpRSoNYydPMhnKEcZjCWDwWTxquc/qVA=='
export const robotoMonoHtml = `
<link rel="preload" href="${robotoMonoHref}" id="robotoMonoStyle" as="style">
<noscript><link rel="stylesheet" href="${robotoMonoHref}"></noscript>
<script>robotoMonoStyle.addEventListener('load',function(){this.onload=null;this.rel='stylesheet'})</script>
`.trim();
