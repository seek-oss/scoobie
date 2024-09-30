"use strict";(self.webpackChunkscoobie=self.webpackChunkscoobie||[]).push([[783],{"./src/components/InternalLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InternalLink:()=>InternalLink_stories_InternalLink,default:()=>InternalLink_stories});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),jsx_runtime=(__webpack_require__("./node_modules/loki/configure-react.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),assert=__webpack_require__("./node_modules/assert/build/assert.js"),assert_default=__webpack_require__.n(assert),negativeMargin=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.mjs"),react=__webpack_require__("./node_modules/react/index.js"),sprinkles_css=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/atoms/sprinkles.css.mjs"),resolveResponsiveRangeProps=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/resolveResponsiveRangeProps.mjs"),optimizeResponsiveArray=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/optimizeResponsiveArray.mjs"),utils_align=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/align.mjs");function invertAlignment(alignment){return"flexStart"===alignment?"flexEnd":"flexEnd"===alignment?"flexStart":alignment}var buildDataAttributes=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs");const validColumnsComponents=["div","span"],ColumnsContext=(0,react.createContext)({collapseMobile:!1,collapseTablet:!1,collapseDesktop:!1,mobileSpace:"none",tabletSpace:"none",desktopSpace:"none",wideSpace:"none",collapsibleAlignmentChildProps:null,component:"div"}),Columns=_ref=>{let{children,collapseBelow,reverse=!1,space="none",align,alignY,component="div",data,...restProps}=_ref;assert_default()(validColumnsComponents.includes(component),`Invalid Columns component: '${component}'. Should be one of [${validColumnsComponents.map((c=>`'${c}'`)).join(", ")}]`);const normalizedSpace=(0,sprinkles_css.tj)(space),{mobile:mobileSpace="none",tablet:tabletSpace=mobileSpace,desktop:desktopSpace=tabletSpace,wide:wideSpace=desktopSpace}=normalizedSpace,{collapsibleAlignmentProps,collapsibleAlignmentChildProps,collapseMobile,collapseTablet,collapseDesktop,orderChildren}=function resolveCollapsibleAlignmentProps(_ref){let{align,alignY,collapseBelow,reverse}=_ref;const[collapseMobile,collapseTablet,collapseDesktop]=(0,resolveResponsiveRangeProps.W)({below:collapseBelow}),rowReverseTablet=collapseMobile&&reverse,rowReverseDesktop=(collapseMobile||collapseTablet)&&reverse,rowReverseWide=(collapseMobile||collapseTablet||collapseDesktop)&&reverse,normalizedAlign=(0,sprinkles_css.tj)((0,utils_align.F)(align)||"flexStart"),{mobile:justifyContentMobile="flexStart",tablet:justifyContentTablet=justifyContentMobile,desktop:justifyContentDesktop=justifyContentTablet,wide:justifyContentWide=justifyContentDesktop}=normalizedAlign;return{collapseMobile,collapseTablet,collapseDesktop,orderChildren:children=>{const childrenArray=react.Children.toArray(children);return collapseMobile||collapseTablet||!reverse?childrenArray:childrenArray.reverse()},collapsibleAlignmentProps:{display:(0,optimizeResponsiveArray.N)([collapseMobile?"block":"flex",collapseTablet?"block":"flex",collapseDesktop?"block":"flex","flex"]),flexDirection:(0,optimizeResponsiveArray.N)([collapseMobile?"column":"row",collapseTablet?"column":rowReverseTablet?"rowReverse":"row",collapseDesktop?"column":rowReverseDesktop?"rowReverse":"row",rowReverseWide?"rowReverse":"row"]),justifyContent:align?(0,optimizeResponsiveArray.N)([justifyContentMobile,rowReverseTablet?invertAlignment(justifyContentTablet):justifyContentTablet,rowReverseDesktop?invertAlignment(justifyContentDesktop):justifyContentDesktop,rowReverseWide?invertAlignment(justifyContentWide):justifyContentWide]):void 0,alignItems:alignY?(0,utils_align.g)(alignY):void 0},collapsibleAlignmentChildProps:{display:(0,optimizeResponsiveArray.N)([collapseMobile&&"flexStart"!==justifyContentMobile?"flex":"block",collapseTablet&&"flexStart"!==justifyContentTablet?"flex":"block",collapseDesktop&&"flexStart"!==justifyContentDesktop?"flex":"block","block"]),justifyContent:(0,optimizeResponsiveArray.N)([justifyContentMobile,justifyContentTablet,justifyContentDesktop,justifyContentWide])}}}({collapseBelow,align,alignY,reverse});return(0,jsx_runtime.jsx)(Box.a,{component,...collapsibleAlignmentProps,className:(0,negativeMargin.c)("left",{mobile:collapseMobile?"none":mobileSpace,tablet:collapseTablet?"none":tabletSpace,desktop:collapseDesktop?"none":desktopSpace,wide:wideSpace}),...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),children:(0,jsx_runtime.jsx)(ColumnsContext.Provider,{value:{collapseMobile,collapseTablet,collapseDesktop,mobileSpace,tabletSpace,desktopSpace,wideSpace,collapsibleAlignmentChildProps,component},children:orderChildren(children)})})};var width={"1/2":"_1tle0s32","1/3":"_1tle0s33","2/3":"_1tle0s34","1/4":"_1tle0s35","3/4":"_1tle0s36","1/5":"_1tle0s37","2/5":"_1tle0s38","3/5":"_1tle0s39","4/5":"_1tle0s3a"};const Column=_ref=>{let{children,data,width:width$1,hideBelow,hideAbove,...restProps}=_ref;const{collapseMobile,collapseTablet,collapseDesktop,mobileSpace,tabletSpace,desktopSpace,wideSpace,collapsibleAlignmentChildProps,component}=(0,react.useContext)(ColumnsContext),[hideOnMobile,hideOnTablet,hideOnDesktop,hideOnWide]=(0,resolveResponsiveRangeProps.W)({below:hideBelow,above:hideAbove});return(0,jsx_runtime.jsx)(Box.a,{component,display:(0,optimizeResponsiveArray.N)([hideOnMobile?"none":"block",hideOnTablet?"none":"block",hideOnDesktop?"none":"block",hideOnWide?"none":"block"]),minWidth:0,width:"content"!==width$1?"full":void 0,flexShrink:"content"===width$1?0:void 0,flexGrow:1,className:["_1tle0s30","content"!==width$1?width[width$1]:null],...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),children:(0,jsx_runtime.jsx)(Box.a,{component,paddingLeft:(0,optimizeResponsiveArray.N)([collapseMobile?"none":mobileSpace,collapseTablet?"none":tabletSpace,collapseDesktop?"none":desktopSpace,wideSpace]),paddingTop:collapseMobile||collapseTablet||collapseDesktop?(0,optimizeResponsiveArray.N)([collapseMobile?mobileSpace:"none",collapseTablet?tabletSpace:"none",collapseDesktop?desktopSpace:"none","none"]):void 0,height:"full",...collapsibleAlignmentChildProps,className:"_1tle0s31",children})})};const Overlay=_ref=>{let{component,zIndex,background,borderRadius,boxShadow,transition,visible=!1,onlyVisibleForKeyboardNavigation=!1,className,children}=_ref;return(0,jsx_runtime.jsx)(Box.a,{component,position:"absolute",zIndex,pointerEvents:"none",background,borderRadius,boxShadow,transition,inset:0,opacity:visible?void 0:0,className:[onlyVisibleForKeyboardNavigation?"jqxje10":null,className],children})};var BackgroundContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/BackgroundContext.mjs"),textAlignedToIcon_standard="_36hmit0",useIcon=__webpack_require__("./node_modules/braid-design-system/dist/lib/hooks/useIcon/index.mjs"),BraidThemeContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/BraidProvider/BraidThemeContext.mjs"),IconContainer=(__webpack_require__('node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css","source":"LnEwdGFrZDAgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoucTB0YWtkMDo6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBtaW4taGVpZ2h0OiA0NHB4OwogIG1pbi13aWR0aDogNDRweDsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgdG9wOiA1MCU7CiAgbGVmdDogNTAlOwp9CltkYXRhLWJyYWlkLWRlYnVnXSAucTB0YWtkMDo6YWZ0ZXIgewogIGJhY2tncm91bmQ6IHJlZDsKICBvcGFjaXR5OiAwLjI7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'),__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs"));const IconClearSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"m13.4 12 5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"})]})},IconClear=props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconClearSvg,...svgProps})}),IconPositiveSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"}),(0,jsx_runtime.jsx)("path",{d:"M15.3 9.3 11 13.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"})]})},IconInfoSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"}),(0,jsx_runtime.jsx)("path",{d:"M12 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm.9-3.4c0-.1-.1-.1-.1-.2s-.1-.1-.1-.1c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2l-.1.1c0 .1-.1.1-.1.2s0 .1-.1.2V8c0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1h.2c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1l.1-.1c.2-.2.3-.4.3-.7v-.2c0-.1-.1-.1-.1-.2z"})]})},IconPromoteSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M15.525 3.15a.998.998 0 0 0-.972-.045L10.763 5H7c-2.757 0-5 2.243-5 5 0 1.283.5 2.476 1.352 3.384l1.527 5.392a2.976 2.976 0 0 0 1.398 1.82 2.984 2.984 0 0 0 2.276.301 2.976 2.976 0 0 0 1.82-1.398c.401-.695.508-1.504.315-2.22L10.213 15h.55l3.79 1.895a1.003 1.003 0 0 0 .972-.044A1 1 0 0 0 16 16V4a1 1 0 0 0-.475-.85ZM7 7h3v6H7a2.94 2.94 0 0 1-1.327-.331 3.083 3.083 0 0 1-.74-.527c-.004-.005-.01-.007-.016-.011A2.949 2.949 0 0 1 4 10c0-1.654 1.346-3 3-3Zm1.742 10.741a.996.996 0 0 1-.101.758.994.994 0 0 1-1.364.365 1.004 1.004 0 0 1-.47-.619l-.96-3.388.015.003c.118.03.237.046.356.066.07.012.14.03.21.039.19.023.38.035.572.035h1.17l.572 2.741ZM14 14.381l-2-1V6.619l2-1v8.764ZM21 9h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Zm-.974 4.634-1.732-1a1.001 1.001 0 0 0-1 1.732l1.732 1a1.001 1.001 0 0 0 1-1.732ZM17.795 7.5c.17 0 .342-.043.499-.134l1.732-1a1 1 0 1 0-1-1.732l-1.732 1a1 1 0 0 0 .5 1.866Z"})]})},IconCautionSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",focusable:"false",fill:"currentColor","aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M22.71 17.262 14.738 3.71A3.183 3.183 0 0 0 12 2.013 3.183 3.183 0 0 0 9.262 3.71L1.29 17.262a3.152 3.152 0 0 0-.14 3.225A3.152 3.152 0 0 0 4 22h16a3.023 3.023 0 0 0 2.71-4.738ZM20 20H4c-1.1 0-1.544-.776-.986-1.724l7.972-13.552A1.232 1.232 0 0 1 12 4.013a1.232 1.232 0 0 1 1.014.71l7.972 13.553C21.544 19.224 21.1 20 20 20Z"}),(0,jsx_runtime.jsx)("circle",{cx:12,cy:17,r:1}),(0,jsx_runtime.jsx)("path",{d:"M11.978 14a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z"})]})},IconCriticalSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",focusable:"false",fill:"currentColor","aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M12 22.997a2.977 2.977 0 0 1-2.121-.877h-.001L1.88 14.121c-.566-.564-.877-1.317-.877-2.121s.311-1.557.877-2.122L9.879 1.88c1.129-1.131 3.112-1.131 4.243 0l7.998 7.999c.566.564.877 1.317.877 2.121s-.311 1.557-.877 2.122l-7.999 7.998a2.975 2.975 0 0 1-2.121.877Zm0-19.994a.988.988 0 0 0-.706.29l-8 8c-.188.187-.291.438-.291.707s.103.52.291.706l7.999 8h.001c.373.375 1.039.375 1.412 0l8-7.999c.188-.187.291-.438.291-.707s-.103-.52-.29-.706l-8-8A.992.992 0 0 0 12 3.003Z"}),(0,jsx_runtime.jsx)("circle",{cx:12,cy:16,r:1}),(0,jsx_runtime.jsx)("path",{d:"M11.978 13a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z"})]})},backgroundForTone={promote:"promoteLight",info:"infoLight",positive:"positiveLight",caution:"cautionLight",critical:"criticalLight"},borderForTone={promote:"borderPromoteLight",info:"borderInfoLight",positive:"borderPositiveLight",caution:"borderCautionLight",critical:"borderCriticalLight"},icons={positive:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconPositiveSvg,...svgProps})}),info:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconInfoSvg,...svgProps})}),promote:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconPromoteSvg,...svgProps})}),caution:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconCautionSvg,...svgProps})}),critical:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconCriticalSvg,...svgProps})})},Alert=_ref=>{let{tone="info",children,id,closeLabel="Close",data,onClose,...restProps}=_ref;const isLegacyTheme=(0,BraidThemeContext.j)().legacy,parentBackground=(0,BackgroundContext.Wi)(),Icon=icons[tone];return(0,jsx_runtime.jsxs)(Box.a,{id,background:backgroundForTone[tone],paddingY:"medium",paddingX:"gutter",borderRadius:"large",position:"relative",overflow:"hidden",role:"alert","aria-live":"polite",...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),children:[(0,jsx_runtime.jsxs)(Columns,{space:"small",children:[(0,jsx_runtime.jsx)(Column,{width:"content",children:(0,jsx_runtime.jsx)(Icon,{tone})}),(0,jsx_runtime.jsx)(Column,{children:(0,jsx_runtime.jsx)(Box.a,{className:textAlignedToIcon_standard,children})}),onClose?(0,jsx_runtime.jsx)(Column,{width:"content",children:(0,jsx_runtime.jsxs)(Box.a,{component:"button","aria-label":closeLabel,borderRadius:"full",cursor:"pointer",position:"relative",onClick:onClose,outline:"none",transition:"touchable",transform:{active:"touchable"},display:"flex",alignItems:"center",justifyContent:"center",className:["_1ujmxgu0 q0takd0",(0,useIcon.M_)()],children:[(0,jsx_runtime.jsx)(Overlay,{component:"span",boxShadow:"outlineFocus",transition:"fast",onlyVisibleForKeyboardNavigation:!0,borderRadius:"full",className:"_1ujmxgu1"}),(0,jsx_runtime.jsx)(Overlay,{component:"span",background:"surface",transition:"fast",borderRadius:"full",className:"_1ujmxgu2"}),(0,jsx_runtime.jsx)(Box.a,{component:"span",display:"block",zIndex:1,position:"relative",children:(0,jsx_runtime.jsx)(IconClear,{size:"fill",tone})})]})}):null]}),isLegacyTheme&&"surface"!==parentBackground.lightMode&&(0,jsx_runtime.jsx)(Overlay,{borderRadius:"large",boxShadow:{lightMode:borderForTone[tone]},visible:!0})]})};var Stack=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),Text=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),InternalLink=__webpack_require__("./src/components/InternalLink.tsx");const InternalLink_stories={title:"Standalone/InternalLink",component:_ref=>{let{line1,line2,...args}=_ref;return(0,jsx_runtime.jsx)(InternalLink.E,{...args,children:(0,jsx.A)(Alert,{tone:"caution"},void 0,(0,jsx.A)(Stack.B,{space:"gutter"},void 0,(0,jsx.A)(Text.E,{},void 0,line1),(0,jsx.A)(Text.E,{size:"small"},void 0,line2)))})}},InternalLink_stories_InternalLink={args:{href:"page#id",reset:!0,line1:"InternalLink supports complex components.",line2:"For example, this whole Alert is a link!"}};InternalLink_stories_InternalLink.parameters={...InternalLink_stories_InternalLink.parameters,docs:{...InternalLink_stories_InternalLink.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'page#id',\n    reset: true,\n    line1: 'InternalLink supports complex components.',\n    line2: 'For example, this whole Alert is a link!'\n  }\n}",...InternalLink_stories_InternalLink.parameters?.docs?.source}}}},"./node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>lineHeightContainer});__webpack_require__('node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css","source":"Ll8zdWx3bXkwIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzMyk7Cn0KLl8zdWx3bXkxIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzZCk7Cn0KLl8zdWx3bXkyIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzbik7Cn0KLl8zdWx3bXkzIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzeCk7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHsKICAuXzN1bHdteTAgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkMzgpOwogIH0KICAuXzN1bHdteTEgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM2kpOwogIH0KICAuXzN1bHdteTIgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM3MpOwogIH0KICAuXzN1bHdteTMgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkNDIpOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js');var lineHeightContainer={xsmall:"_3ulwmy0",small:"_3ulwmy1",standard:"_3ulwmy2",large:"_3ulwmy3"}},"./node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>IconContainer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_hooks_useIcon_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/braid-design-system/dist/lib/hooks/useIcon/index.mjs"),_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs");const IconContainer=_ref=>{let{children,verticalCorrection,...props}=_ref;const{isInline,svgProps}=(0,_hooks_useIcon_index_mjs__WEBPACK_IMPORTED_MODULE_1__.bD)(props,{verticalCorrection});return isInline?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__.a,{component:"span",display:"inlineBlock",children:children(svgProps)}):children(svgProps)}},"./node_modules/braid-design-system/dist/lib/hooks/useIcon/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M_:()=>iconContainerSize,bD:()=>useIcon});var react=__webpack_require__("./node_modules/react/index.js"),build_assert=__webpack_require__("./node_modules/assert/build/assert.js"),assert_default=__webpack_require__.n(build_assert),dist_clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),Text_TextContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/TextContext.mjs"),Heading_HeadingContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Heading/HeadingContext.mjs"),lineHeightContainer_css=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs"),buildDataAttributes=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs"),atoms=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/atoms/atoms.mjs"),alignY=(__webpack_require__('node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css","source":"Ll8xeW9qcXRtMCB7CiAgd2lkdGg6IDEuMmVtOwogIGhlaWdodDogMS4yZW07Cn0KLl8xeW9qcXRtMSB7CiAgbWFyZ2luOiAtMC4xZW07Cn0KLl8xeW9qcXRtMiB7CiAgbWFyZ2luLXRvcDogLTAuMmVtOwogIG1hcmdpbi1ib3R0b206IC0wLjJlbTsKfQouXzF5b2pxdG0zIHsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5fMXlvanF0bTQgewogIHRvcDogLTAuMTA1ZW07Cn0KLl8xeW9qcXRtNSB7CiAgdG9wOiAtMC4xNjQ5OTk5OTk5OTk5OTk5OGVtOwp9Ci5fMXlvanF0bTYgewogIHRvcDogLTAuMDQ1ZW07Cn0KLl8xeW9qcXRtNyB7CiAgdG9wOiAtMC4wNjVlbTsKfQouXzF5b2pxdG04IHsKICB0b3A6IC0wLjEyNWVtOwp9Ci5fMXlvanF0bTkgewogIHRvcDogLTAuMDA1MDAwMDAwMDAwMDAwMDA0NGVtOwp9Ci5fMXlvanF0bWEgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkMzMpOwp9Ci5fMXlvanF0bWIgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM2QpOwp9Ci5fMXlvanF0bWMgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM24pOwp9Ci5fMXlvanF0bWQgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM3gpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSB7CiAgLl8xeW9qcXRtYSB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDM4KTsKICB9CiAgLl8xeW9qcXRtYiB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNpKTsKICB9CiAgLl8xeW9qcXRtYyB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNzKTsKICB9CiAgLl8xeW9qcXRtZCB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDQyKTsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'),{uppercase:{none:"_1yojqtm4",up:"_1yojqtm5",down:"_1yojqtm6"},lowercase:{none:"_1yojqtm7",up:"_1yojqtm8",down:"_1yojqtm9"}}),blockWidths={xsmall:"_1yojqtma",small:"_1yojqtmb",standard:"_1yojqtmc",large:"_1yojqtmd"};const iconInlineSize=function(){let{alignY:alignY$1="uppercase",verticalCorrection="none"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,dist_clsx.A)((0,atoms.F)({display:"inlineBlock",position:"relative"}),"_1yojqtm0","_1yojqtm2","_1yojqtm3",alignY[alignY$1][verticalCorrection])};var typography_css=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/typography.css.mjs");const iconContainerSize=function(){let size2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"standard";return(0,dist_clsx.A)(blockWidths[size2],lineHeightContainer_css.x[size2])},defaultVerticalCorrection={uppercase:"none",lowercase:"none"},useIcon=function(_ref){let{size:size2,tone:tone$1,alignY,data,title,titleId,...restProps}=_ref,{verticalCorrection=defaultVerticalCorrection}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const textContext=(0,react.useContext)(Text_TextContext.h),headingContext=(0,react.useContext)(Heading_HeadingContext.A),resolvedTone=typography_css.rR[tone$1||(null==textContext?void 0:textContext.tone)||"neutral"],toneClass=tone$1||!headingContext&&!(null==textContext?void 0:textContext.tone)?resolvedTone:void 0,isInline=Boolean(textContext||headingContext),a11yProps=title?{title,titleId,role:"img"}:{"aria-hidden":!0};return assert_default()(!(size2&&isInline),`Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${textContext?"Text":"Heading"}>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/${textContext?"Text":"Heading"}`),assert_default()(!(alignY&&!isInline),"Specifying `alignY` for an `Icon` outside of a text component is invalid."),"fill"===size2?{isInline:!1,svgProps:{width:"full",height:"full",display:"block",className:toneClass,...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),...a11yProps}}:{isInline,svgProps:{className:[toneClass,isInline?[iconInlineSize({alignY:alignY||"uppercase",verticalCorrection:verticalCorrection[alignY||"uppercase"]})]:[(0,atoms.F)({display:"block"}),iconContainerSize(size2)]],...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),...a11yProps}}}},'node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css","source":"Ll8xNXhmZG5oMCB7CiAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkeSk7Cn0KLl8xNXhmZG5oMyB7CiAgYmFja2dyb3VuZDogdmFyKC0tXzE1eGZkbmgxKTsKfQouXzE1eGZkbmg0IHsKICBiYWNrZ3JvdW5kOiB2YXIoLS1fMTV4ZmRuaDIpOwp9Cmh0bWw6bm90KC5fMXQ0NmtzZ3opIC5fMTV4ZmRuaDUgewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkdCk7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGRyKTsKfQpodG1sOm5vdCguXzF0NDZrc2d6KSAuXzE1eGZkbmg2IHsKICAtLV8xNXhmZG5oMTogdmFyKC0tXzZlMnd4ZHIpOwogIC0tXzE1eGZkbmgyOiB2YXIoLS1fNmUyd3hkdCk7Cn0KaHRtbC5fMXQ0NmtzZ3ogLl8xNXhmZG5oNyB7CiAgLS1fMTV4ZmRuaDE6IHZhcigtLV82ZTJ3eGR0KTsKICAtLV8xNXhmZG5oMjogdmFyKC0tXzZlMnd4ZHIpOwp9Cmh0bWwuXzF0NDZrc2d6IC5fMTV4ZmRuaDggewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkcik7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGR0KTsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css","source":"QG1lZGlhIHByaW50IHsKICAuaXZxNm9wMCB7CiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7CiAgfQp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css","source":"Ll8xaTFxam5hMCB7CiAgbWFyZ2luLWJvdHRvbTogLTAuMWVtOwp9Ci5fMWkxcWpuYTIgewogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLl8xaTFxam5hMCAuXzFpMXFqbmEyIHsKICBwYWRkaW5nLWJvdHRvbTogMC4xZW07Cn0KQHN1cHBvcnRzIChkaXNwbGF5OiAtd2Via2l0LWJveCkgYW5kICgtd2Via2l0LWxpbmUtY2xhbXA6IDEpIHsKICAuXzFpMXFqbmE0IHsKICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOwogICAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHZhcigtLV8xaTFxam5hMyk7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css","source":"LnEwdGFrZDAgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoucTB0YWtkMDo6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBtaW4taGVpZ2h0OiA0NHB4OwogIG1pbi13aWR0aDogNDRweDsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgdG9wOiA1MCU7CiAgbGVmdDogNTAlOwp9CltkYXRhLWJyYWlkLWRlYnVnXSAucTB0YWtkMDo6YWZ0ZXIgewogIGJhY2tncm91bmQ6IHJlZDsKICBvcGFjaXR5OiAwLjI7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css","source":"Ll8zdWx3bXkwIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzMyk7Cn0KLl8zdWx3bXkxIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzZCk7Cn0KLl8zdWx3bXkyIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzbik7Cn0KLl8zdWx3bXkzIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzeCk7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHsKICAuXzN1bHdteTAgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkMzgpOwogIH0KICAuXzN1bHdteTEgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM2kpOwogIH0KICAuXzN1bHdteTIgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM3MpOwogIH0KICAuXzN1bHdteTMgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkNDIpOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62Yy27iQBBF93yFlVUyEpGrusFANvMnkfEDDMYYY56j/PtIUWaEoSqpkmvf91hqHclH/foOcDzVizqczeZZvm2y4M8gCJJt1WZVOwuent4GQZAW+7qML7Ogjedl9jb4GLz+28FsFudt1ihn2PncJm4WRTWcb9t2u5kFSVwmz8e4eR4O38cZns5p+BL8Cobw0mE4HQMohtcxkGKMdAxHMcY6hqcYkY4xohgTHWNMMaY6RkQxYh1jQjHm3zHCrsXjW42/jrbbWuwiRHIAKSJM5ADSQpjKAaSCEMsBpH8wlwNI+SCRA0jzIJUDSO0gkwNI5yDnAF3hML49UGZ5K1YN55IpKRkmkimpF6aSKSkWZpIpqRTmkikpEy4kU1IjXEqmpEBYSKakOrh6nHalcZ2LbIrFUm6Ny0VbUhu3EG1Jb9xStCXFcYVoS5rjVqItqY5bi7akO64UbUl53Ea0Je1xFbH91Of3JkuLONgnTZZVQVylwfOmqIanIm2XsyDyYX1++dz+ZyWdH6cqz4Lg45aUaknAkTItCTlSriU5jrTQkjxHWmpJI45UaEljjrTSkiKOtNaSJhyp/J4UPgxgcfs/lqfdPWapwbASQ6HBsAbDSoNh9YW1BsO6C6UGw4oLGw2GtRYqDYZVFrYaDOsr1DzmUVZcd4/9nIX3gFIGYAXFjQzAqomVDMBKiVsZgNURaxmAFRF3MgCrIDYyACsf7mUAVjtsKcCjcO7usgVJeU+ohQRWObcTEljnXCMksNK5vZDAWudaIYHVzh2EBNY7dxQSWPHcSUhgzXNnkvCl3k8xOp3iQ4xuzGK0MovRrVmM1mYxujOL0cYsRvdmMdqaxejBLEaP6hjd2cRoYxOje5sYbW1i9GATo0ebGD3ZxOjZJkYvNjF6VcXogWoITYweZQA+Rk8yAB+jZxmAj9FL3xi99oxRF/aMUQc9Y9Rhzxh1ThijFzIdNDF6FRJY5XwoJLDOeRASWOk8Cgmsdd4JCax23veNUT/qG6N+3DdGfdQnRgHDx6fRk1mNns1q9GJWo1ezGoXQLEcBzHoU0CxIwZkVKXizJIWRtkkxNGlSBJMmRTRpUnQmTYrepElxZNKkODZpUoxMmhQnJk2KU02TOk+lhKYQRjIA/1o1lgH4x6pIBuDfqiY9m9RN+zZp3LdJ532bNOnbpKmsSf2ELAiFcX4qJPBNGgsJfJPOhQS+SRMhgW/SVEjgmzQTEvgmzXs36aJ3ky6/bdK/J43eXJApAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css","source":"Ll8xeW9qcXRtMCB7CiAgd2lkdGg6IDEuMmVtOwogIGhlaWdodDogMS4yZW07Cn0KLl8xeW9qcXRtMSB7CiAgbWFyZ2luOiAtMC4xZW07Cn0KLl8xeW9qcXRtMiB7CiAgbWFyZ2luLXRvcDogLTAuMmVtOwogIG1hcmdpbi1ib3R0b206IC0wLjJlbTsKfQouXzF5b2pxdG0zIHsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5fMXlvanF0bTQgewogIHRvcDogLTAuMTA1ZW07Cn0KLl8xeW9qcXRtNSB7CiAgdG9wOiAtMC4xNjQ5OTk5OTk5OTk5OTk5OGVtOwp9Ci5fMXlvanF0bTYgewogIHRvcDogLTAuMDQ1ZW07Cn0KLl8xeW9qcXRtNyB7CiAgdG9wOiAtMC4wNjVlbTsKfQouXzF5b2pxdG04IHsKICB0b3A6IC0wLjEyNWVtOwp9Ci5fMXlvanF0bTkgewogIHRvcDogLTAuMDA1MDAwMDAwMDAwMDAwMDA0NGVtOwp9Ci5fMXlvanF0bWEgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkMzMpOwp9Ci5fMXlvanF0bWIgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM2QpOwp9Ci5fMXlvanF0bWMgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM24pOwp9Ci5fMXlvanF0bWQgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM3gpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSB7CiAgLl8xeW9qcXRtYSB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDM4KTsKICB9CiAgLl8xeW9qcXRtYiB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNpKTsKICB9CiAgLl8xeW9qcXRtYyB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNzKTsKICB9CiAgLl8xeW9qcXRtZCB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDQyKTsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{}}]);