"use strict";(self.webpackChunkscoobie=self.webpackChunkscoobie||[]).push([[822],{"./src/components/CopyableText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CopyableText:()=>CopyableText,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/loki/configure-react.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Standalone/CopyableText",component:__webpack_require__("./src/components/CopyableText.tsx").x,argTypes:{children:{control:{type:"text"}},copiedIcon:{control:{type:"radio"},options:[void 0,!1]},copiedLabel:{control:{type:"radio"},options:[void 0,"Custom copied label"]},copyIcon:{control:{type:"radio"},options:[void 0,!1]},copyLabel:{control:{type:"radio"},options:[void 0,"Custom copy label"]}}},CopyableText={args:{children:"copy me",copiedIcon:void 0,copiedLabel:void 0,copyIcon:void 0,copyLabel:void 0,size:"standard"}};CopyableText.parameters={...CopyableText.parameters,docs:{...CopyableText.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'copy me',\n    copiedIcon: undefined,\n    copiedLabel: undefined,\n    copyIcon: undefined,\n    copyLabel: undefined,\n    size: 'standard'\n  }\n}",...CopyableText.parameters?.docs?.source}}}},"./src/components/CopyableText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>CopyableText});var _IconTick,_IconCopy,braid_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconTick/IconTick.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconCopy/IconCopy.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/TextLinkButton/TextLinkButton.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CopyableText=_ref=>{let{children,copiedIcon=_IconTick||(_IconTick=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_2__.d,{alignY:"lowercase"})),copiedLabel="Copied",copyIcon=_IconCopy||(_IconCopy=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_3__.b,{alignY:"lowercase"})),copyLabel="Copy",size}=_ref;const[copied,setCopied]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),copyText=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((async()=>{copied||(setCopied(!0),await navigator.clipboard.writeText(children),setTimeout((()=>setCopied(!1)),2e3))}),[children,copied]);return copied?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.E,{icon:copiedIcon||void 0,size,tone:"positive",weight:"medium",children:copiedLabel}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.E,{size,weight:"medium",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(braid_design_system__WEBPACK_IMPORTED_MODULE_5__.W,{icon:copyIcon||void 0,onClick:copyText,children:copyLabel})})}},"./node_modules/braid-design-system/dist/lib/components/TextLinkButton/TextLinkButton.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>TextLinkButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs"),_TextLink_TextLink_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.mjs");const noop=()=>{},TextLinkButton=_ref=>{let{weight,hitArea,id,onClick=noop,data,children,"aria-controls":ariaControls,"aria-expanded":ariaExpanded,"aria-describedby":ariaDescribedBy,"aria-label":ariaLabel,tabIndex,icon,iconPosition,...restProps}=_ref;const buttonRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),classes=(0,_TextLink_TextLink_mjs__WEBPACK_IMPORTED_MODULE_2__.m1)({reset:!1,weight,hitArea}),handleKeyboard=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event=>{var _a;"Enter"!==event.key&&" "!==event.key||(event.preventDefault(),null==(_a=buttonRef.current)||_a.click())}),[buttonRef]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__.a,{ref:buttonRef,role:"button",tabIndex:tabIndex??0,component:"span",onClick,onKeyDown:handleKeyboard,"aria-controls":ariaControls,"aria-expanded":ariaExpanded,"aria-describedby":ariaDescribedBy,"aria-label":ariaLabel,id,className:classes,...(0,_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_4__.a)({data,validateRestProps:restProps}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextLink_TextLink_mjs__WEBPACK_IMPORTED_MODULE_2__.VX,{icon,iconPosition,children})})}},"./node_modules/braid-design-system/dist/lib/components/icons/IconCopy/IconCopy.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>IconCopy});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),IconContainer=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs");const IconCopySvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M14 7H6c-1.7 0-3 1.3-3 3v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3v-8c0-1.7-1.3-3-3-3zm1 11c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8z"}),(0,jsx_runtime.jsx)("path",{d:"M19 2h-8C9.3 2 8 3.3 8 5h2c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1v2c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z"})]})},IconCopy=props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconCopySvg,...svgProps})})},"./node_modules/braid-design-system/dist/lib/components/icons/IconTick/IconTick.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>IconTick});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),IconContainer=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs");const IconTickSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M19.7 6.3c-.4-.4-1-.4-1.4 0L9 15.6l-3.3-3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4 4c.2.2.4.3.7.3s.5-.1.7-.3l10-10c.4-.4.4-1 0-1.4z"})]})},IconTick=props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconTickSvg,...svgProps})})},'node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62SwW6DMBBE73yFj+FgBCRQYj4mArzELmBXtqFIVf+9omldnNJAJa7LeubNsMElOpdxkyUxevMQqmQrFUFDoQ4Yf38K/dxDyMBoMIVKqsJwKexSCvHrSJN6aQkbxqtGgNYEhUGYQWeXekFBtVwAlnWtwRB0fBlz790LLBFhcgD1N1e0zGWVNwI5lrWseo0HrnnZwpq17M3kc1dFFPpIy5ZTd9zNn9jQYRDfSimloqCwKijv9Z1i6TuUx0+u2f8hiAsGipvcmUfOfIeemOlaIqQ5BJfInNJGX6esluv0m8st5nYjDqC7cPU32CRrNmzNhlmbmcOPQbpjjkWDpx0TPCgqI9MdG6ALd/ylw7fonNd1nh8HLv5DsqhQbmT4AMwIBDnQBAAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/AvoidWidowIcon/AvoidWidowIcon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/AvoidWidowIcon/AvoidWidowIcon.css.mjs.vanilla.css","source":"Ll8xbXdobzJzMCB7CiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css","source":"Ll8xaTFxam5hMCB7CiAgbWFyZ2luLWJvdHRvbTogLTAuMWVtOwp9Ci5fMWkxcWpuYTIgewogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLl8xaTFxam5hMCAuXzFpMXFqbmEyIHsKICBwYWRkaW5nLWJvdHRvbTogMC4xZW07Cn0KQHN1cHBvcnRzIChkaXNwbGF5OiAtd2Via2l0LWJveCkgYW5kICgtd2Via2l0LWxpbmUtY2xhbXA6IDEpIHsKICAuXzFpMXFqbmE0IHsKICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOwogICAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHZhcigtLV8xaTFxam5hMyk7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css","source":"LnEwdGFrZDAgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoucTB0YWtkMDo6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBtaW4taGVpZ2h0OiA0NHB4OwogIG1pbi13aWR0aDogNDRweDsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgdG9wOiA1MCU7CiAgbGVmdDogNTAlOwp9CltkYXRhLWJyYWlkLWRlYnVnXSAucTB0YWtkMDo6YWZ0ZXIgewogIGJhY2tncm91bmQ6IHJlZDsKICBvcGFjaXR5OiAwLjI7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css","source":"Ll8zdWx3bXkwIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzMyk7Cn0KLl8zdWx3bXkxIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzZCk7Cn0KLl8zdWx3bXkyIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzbik7Cn0KLl8zdWx3bXkzIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzeCk7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHsKICAuXzN1bHdteTAgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkMzgpOwogIH0KICAuXzN1bHdteTEgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM2kpOwogIH0KICAuXzN1bHdteTIgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM3MpOwogIH0KICAuXzN1bHdteTMgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkNDIpOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css","source":"Ll8xeW9qcXRtMCB7CiAgd2lkdGg6IDEuMmVtOwogIGhlaWdodDogMS4yZW07Cn0KLl8xeW9qcXRtMSB7CiAgbWFyZ2luOiAtMC4xZW07Cn0KLl8xeW9qcXRtMiB7CiAgbWFyZ2luLXRvcDogLTAuMmVtOwogIG1hcmdpbi1ib3R0b206IC0wLjJlbTsKfQouXzF5b2pxdG0zIHsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5fMXlvanF0bTQgewogIHRvcDogLTAuMTA1ZW07Cn0KLl8xeW9qcXRtNSB7CiAgdG9wOiAtMC4xNjQ5OTk5OTk5OTk5OTk5OGVtOwp9Ci5fMXlvanF0bTYgewogIHRvcDogLTAuMDQ1ZW07Cn0KLl8xeW9qcXRtNyB7CiAgdG9wOiAtMC4wNjVlbTsKfQouXzF5b2pxdG04IHsKICB0b3A6IC0wLjEyNWVtOwp9Ci5fMXlvanF0bTkgewogIHRvcDogLTAuMDA1MDAwMDAwMDAwMDAwMDA0NGVtOwp9Ci5fMXlvanF0bWEgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkMzMpOwp9Ci5fMXlvanF0bWIgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM2QpOwp9Ci5fMXlvanF0bWMgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM24pOwp9Ci5fMXlvanF0bWQgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM3gpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSB7CiAgLl8xeW9qcXRtYSB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDM4KTsKICB9CiAgLl8xeW9qcXRtYiB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNpKTsKICB9CiAgLl8xeW9qcXRtYyB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNzKTsKICB9CiAgLl8xeW9qcXRtZCB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDQyKTsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{}}]);