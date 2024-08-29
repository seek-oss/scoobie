"use strict";(self.webpackChunkscoobie=self.webpackChunkscoobie||[]).push([[822],{"./src/components/CopyableText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CopyableText:()=>CopyableText,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/loki/configure-react.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Standalone/CopyableText",component:__webpack_require__("./src/components/CopyableText.tsx").x,argTypes:{children:{control:{type:"text"}},copiedIcon:{control:{type:"radio"},options:[void 0,!1]},copiedLabel:{control:{type:"radio"},options:[void 0,"Custom copied label"]},copyIcon:{control:{type:"radio"},options:[void 0,!1]},copyLabel:{control:{type:"radio"},options:[void 0,"Custom copy label"]}}},CopyableText={args:{children:"copy me",copiedIcon:void 0,copiedLabel:void 0,copyIcon:void 0,copyLabel:void 0,size:"standard"}};CopyableText.parameters={...CopyableText.parameters,docs:{...CopyableText.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'copy me',\n    copiedIcon: undefined,\n    copiedLabel: undefined,\n    copyIcon: undefined,\n    copyLabel: undefined,\n    size: 'standard'\n  }\n}",...CopyableText.parameters?.docs?.source}}}},"./src/components/CopyableText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>CopyableText});var _IconTick,_IconCopy,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),braid_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconTick/IconTick.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconCopy/IconCopy.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/TextLinkButton/TextLinkButton.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const CopyableText=_ref=>{let{children,copiedIcon=_IconTick||(_IconTick=(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__.A)(braid_design_system__WEBPACK_IMPORTED_MODULE_2__.d,{alignY:"lowercase"})),copiedLabel="Copied",copyIcon=_IconCopy||(_IconCopy=(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__.A)(braid_design_system__WEBPACK_IMPORTED_MODULE_3__.b,{alignY:"lowercase"})),copyLabel="Copy",size}=_ref;const[copied,setCopied]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),copyText=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((async()=>{copied||(setCopied(!0),await navigator.clipboard.writeText(children),setTimeout((()=>setCopied(!1)),2e3))}),[children,copied]);return copied?(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__.A)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.E,{icon:copiedIcon||void 0,size,tone:"positive",weight:"medium"},void 0,copiedLabel):(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__.A)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.E,{size,weight:"medium"},void 0,(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_1__.A)(braid_design_system__WEBPACK_IMPORTED_MODULE_5__.W,{icon:copyIcon||void 0,onClick:copyText},void 0,copyLabel))}},"./node_modules/braid-design-system/dist/lib/components/Heading/HeadingContext.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HeadingContext});const HeadingContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(!1)},'node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62SwW6DMBBE73yFj+FgBCRQYj4mArzELmBXtqEoUf+9StM6cUoKlbgu45m3wwaHaF/GTZbE6OwhVMlWKoKGQm0w/vkU+rmHkIHRYAqVVIXhUlhRCvH7SJN6SoQN41UjQGuCwiDMoLOiXlBQLReAZV1rMARt38bc+/ACS0SYHEA954qmuazzQiAnspZVr/HANS9bmIuWvbnkPFQRhT7SsuXUHXf3T+zSYRBfSymloqCwKijv9YNj6TuU2y+uu/9DEBcMFDe5M4+c+Qo9MdO1REizCQ6R2aWNPp58ZLF2v7HcXq4n4vC5gqM/n5LMpbC5FGZTbgE3/3TFLab8X1bkf95SRi4nbIBOnPC3DV9gs5+3ef1z2+I/HFMG5UKCT8PJTaTIBAAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/AvoidWidowIcon/AvoidWidowIcon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/AvoidWidowIcon/AvoidWidowIcon.css.mjs.vanilla.css","source":"Ll8xbXdobzJzMCB7CiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css","source":"Ll8xaTFxam5hMCB7CiAgbWFyZ2luLWJvdHRvbTogLTAuMWVtOwp9Ci5fMWkxcWpuYTIgewogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLl8xaTFxam5hMCAuXzFpMXFqbmEyIHsKICBwYWRkaW5nLWJvdHRvbTogMC4xZW07Cn0KQHN1cHBvcnRzIChkaXNwbGF5OiAtd2Via2l0LWJveCkgYW5kICgtd2Via2l0LWxpbmUtY2xhbXA6IDEpIHsKICAuXzFpMXFqbmE0IHsKICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOwogICAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHZhcigtLV8xaTFxam5hMyk7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css","source":"LnEwdGFrZDAgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoucTB0YWtkMDo6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBtaW4taGVpZ2h0OiA0NHB4OwogIG1pbi13aWR0aDogNDRweDsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgdG9wOiA1MCU7CiAgbGVmdDogNTAlOwp9CltkYXRhLWJyYWlkLWRlYnVnXSAucTB0YWtkMDo6YWZ0ZXIgewogIGJhY2tncm91bmQ6IHJlZDsKICBvcGFjaXR5OiAwLjI7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css","source":"Ll8zdWx3bXkwIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzMyk7Cn0KLl8zdWx3bXkxIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzZCk7Cn0KLl8zdWx3bXkyIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzbik7Cn0KLl8zdWx3bXkzIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzeCk7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHsKICAuXzN1bHdteTAgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkMzgpOwogIH0KICAuXzN1bHdteTEgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM2kpOwogIH0KICAuXzN1bHdteTIgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM3MpOwogIH0KICAuXzN1bHdteTMgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkNDIpOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css","source":"Ll8xeW9qcXRtMCB7CiAgd2lkdGg6IDEuMmVtOwogIGhlaWdodDogMS4yZW07Cn0KLl8xeW9qcXRtMSB7CiAgbWFyZ2luOiAtMC4xZW07Cn0KLl8xeW9qcXRtMiB7CiAgbWFyZ2luLXRvcDogLTAuMmVtOwogIG1hcmdpbi1ib3R0b206IC0wLjJlbTsKfQouXzF5b2pxdG0zIHsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5fMXlvanF0bTQgewogIHRvcDogLTAuMTA1ZW07Cn0KLl8xeW9qcXRtNSB7CiAgdG9wOiAtMC4xNjQ5OTk5OTk5OTk5OTk5OGVtOwp9Ci5fMXlvanF0bTYgewogIHRvcDogLTAuMDQ1ZW07Cn0KLl8xeW9qcXRtNyB7CiAgdG9wOiAtMC4wNjVlbTsKfQouXzF5b2pxdG04IHsKICB0b3A6IC0wLjEyNWVtOwp9Ci5fMXlvanF0bTkgewogIHRvcDogLTAuMDA1MDAwMDAwMDAwMDAwMDA0NGVtOwp9Ci5fMXlvanF0bWEgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkMzMpOwp9Ci5fMXlvanF0bWIgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM2QpOwp9Ci5fMXlvanF0bWMgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM24pOwp9Ci5fMXlvanF0bWQgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM3gpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSB7CiAgLl8xeW9qcXRtYSB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDM4KTsKICB9CiAgLl8xeW9qcXRtYiB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNpKTsKICB9CiAgLl8xeW9qcXRtYyB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNzKTsKICB9CiAgLl8xeW9qcXRtZCB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDQyKTsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{}}]);