"use strict";(self.webpackChunkscoobie=self.webpackChunkscoobie||[]).push([[783],{"./src/components/InternalLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InternalLink:()=>InternalLink_stories_InternalLink,default:()=>InternalLink_stories});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),jsx_runtime=(__webpack_require__("./node_modules/loki/configure-react.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),assert=__webpack_require__("./node_modules/assert/build/assert.js"),assert_default=__webpack_require__.n(assert),negativeMargin=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.mjs"),sprinkles_css=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/atoms/sprinkles.css.mjs"),resolveResponsiveRangeProps=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/resolveResponsiveRangeProps.mjs"),optimizeResponsiveArray=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/optimizeResponsiveArray.mjs"),utils_align=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/align.mjs");function invertAlignment(alignment){return"flexStart"===alignment?"flexEnd":"flexEnd"===alignment?"flexStart":alignment}var buildDataAttributes=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs"),react=__webpack_require__("./node_modules/react/index.js");const ColumnsContext=(0,react.createContext)({collapseMobile:!1,collapseTablet:!1,collapseDesktop:!1,mobileSpace:"none",tabletSpace:"none",desktopSpace:"none",wideSpace:"none",align:"left",component:"div"}),Columns=_ref=>{let{children,collapseBelow,reverse=!1,space="none",align="left",alignY,component="div",data,...restProps}=_ref;assert_default()(!reverse||reverse&&collapseBelow,"The `reverse` prop should only be applied in combination with the `collapseBelow` prop.\nIf you do not want to collapse responsively, it is recommended to reorder the content directly.\n\nSee documentation for details: https://seek-oss.github.io/braid-design-system/components/Columns#reversing-the-column-order");const normalizedSpace=(0,sprinkles_css.tj)(space),{mobile:mobileSpace="none",tablet:tabletSpace=mobileSpace,desktop:desktopSpace=tabletSpace,wide:wideSpace=desktopSpace}=normalizedSpace,{collapsibleAlignmentProps,collapseMobile,collapseTablet,collapseDesktop}=function resolveCollapsibleAlignmentProps(_ref){let{align,alignY,collapseBelow,reverse,inlineItems=!1}=_ref;const[collapseMobile,collapseTablet,collapseDesktop]=(0,resolveResponsiveRangeProps.W)({below:collapseBelow}),defaultAlignItems=inlineItems?"flexStart":void 0,rowDirection=collapseBelow&&reverse?"rowReverse":"row",flexDirection=[collapseMobile?"column":"row",collapseTablet?"column":rowDirection,collapseDesktop?"column":rowDirection,rowDirection],nonCollapsedAlignItems=(0,utils_align.g)(alignY)||defaultAlignItems,normalizedAlignY=(0,sprinkles_css.tj)(nonCollapsedAlignItems||{}),{mobile:alignYMobile=defaultAlignItems||null,tablet:alignYTablet=alignYMobile,desktop:alignYDesktop=alignYTablet,wide:alignYWide=alignYDesktop}=normalizedAlignY,normalizedAlign=(0,sprinkles_css.tj)((0,utils_align.F)(align)||"flexStart"),{mobile:alignMobile="flexStart",tablet:alignTablet=alignMobile,desktop:alignDesktop=alignTablet,wide:alignWide=alignDesktop}=normalizedAlign,collapsedAlignItems=[collapseMobile&&"flexStart"===alignMobile?null:alignMobile,collapseTablet&&"flexStart"===alignTablet?null:alignTablet,collapseDesktop&&"flexStart"===alignDesktop?null:alignDesktop];return{collapseMobile,collapseTablet,collapseDesktop,collapsibleAlignmentProps:{display:"flex",flexDirection:(0,optimizeResponsiveArray.N)(flexDirection),justifyContent:align?(0,optimizeResponsiveArray.N)([alignMobile,reverse?invertAlignment(alignTablet):alignTablet,reverse?invertAlignment(alignDesktop):alignDesktop,reverse?invertAlignment(alignWide):alignWide]):void 0,alignItems:collapseBelow?(0,optimizeResponsiveArray.N)([collapseMobile?collapsedAlignItems[0]:alignYMobile,collapseTablet?collapsedAlignItems[1]:alignYTablet,collapseDesktop?collapsedAlignItems[2]:alignYDesktop,alignYWide]):nonCollapsedAlignItems}}}({collapseBelow,align,alignY,reverse,inlineItems:!1});return(0,jsx_runtime.jsx)(Box.a,{component,...collapsibleAlignmentProps,className:(0,negativeMargin.c)("left",{mobile:collapseMobile?"none":mobileSpace,tablet:collapseTablet?"none":tabletSpace,desktop:collapseDesktop?"none":desktopSpace,wide:wideSpace}),...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),children:(0,jsx_runtime.jsx)(ColumnsContext.Provider,{value:{collapseMobile,collapseTablet,collapseDesktop,mobileSpace,tabletSpace,desktopSpace,wideSpace,align,component},children})})};var width={"1/2":"_1tle0s31","1/3":"_1tle0s32","2/3":"_1tle0s33","1/4":"_1tle0s34","3/4":"_1tle0s35","1/5":"_1tle0s36","2/5":"_1tle0s37","3/5":"_1tle0s38","4/5":"_1tle0s39"};const Column=_ref=>{let{component,children,data,width:width$1,hideBelow,hideAbove,...restProps}=_ref;const{collapseMobile,collapseTablet,collapseDesktop,mobileSpace,tabletSpace,desktopSpace,wideSpace,align,component:columnsComponent}=(0,react.useContext)(ColumnsContext),[hideOnMobile,hideOnTablet,hideOnDesktop,hideOnWide]=(0,resolveResponsiveRangeProps.W)({below:hideBelow,above:hideAbove}),collapsible=collapseMobile||collapseTablet||collapseDesktop,normalizedAlign=(0,sprinkles_css.tj)((0,utils_align.F)(align)||"flexStart"),{mobile:justifyContentMobile="flexStart",tablet:justifyContentTablet=justifyContentMobile,desktop:justifyContentDesktop=justifyContentTablet}=normalizedAlign,collapseToFlexContainer_mobile=collapseMobile&&"flexStart"!==justifyContentMobile,collapseToFlexContainer_tablet=collapseTablet&&"flexStart"!==justifyContentTablet,collapseToFlexContainer_desktop=collapseDesktop&&"flexStart"!==justifyContentDesktop,display={mobile:collapseToFlexContainer_mobile?"flex":"block",tablet:collapseToFlexContainer_tablet?"flex":"block",desktop:collapseToFlexContainer_desktop?"flex":"block",wide:"block"};return(0,jsx_runtime.jsx)(Box.a,{component:component||(columnComponent=columnsComponent,"span"===columnComponent?"span":"ol"===columnComponent||"ul"===columnComponent?"li":"div"),display:(0,optimizeResponsiveArray.N)([hideOnMobile?"none":display.mobile,hideOnTablet?"none":display.tablet,hideOnDesktop?"none":display.desktop,hideOnWide?"none":display.wide]),minWidth:0,width:"content"!==width$1?"full":void 0,flexShrink:width$1?0:void 0,flexGrow:width$1?0:1,className:[collapsible?"_1tle0s30":null,"content"!==width$1?width[width$1]:null],paddingLeft:(0,optimizeResponsiveArray.N)([collapseMobile?"none":mobileSpace,collapseTablet?"none":tabletSpace,collapseDesktop?"none":desktopSpace,wideSpace]),paddingTop:collapsible?(0,optimizeResponsiveArray.N)([collapseMobile?mobileSpace:"none",collapseTablet?tabletSpace:"none",collapseDesktop?desktopSpace:"none","none"]):void 0,justifyContent:collapsible?(0,optimizeResponsiveArray.N)([collapseToFlexContainer_mobile?justifyContentMobile:null,collapseToFlexContainer_tablet?justifyContentTablet:null,collapseToFlexContainer_desktop?justifyContentDesktop:null,null]):void 0,...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),children});var columnComponent};const Overlay=_ref=>{let{component,zIndex,background,borderRadius,boxShadow,transition,visible=!1,onlyVisibleForKeyboardNavigation=!1,className,children}=_ref;return(0,jsx_runtime.jsx)(Box.a,{component,position:"absolute",zIndex,pointerEvents:"none",background,borderRadius,boxShadow,transition,inset:0,opacity:visible?void 0:0,className:[onlyVisibleForKeyboardNavigation?"jqxje10":null,className],children})};var BackgroundContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/BackgroundContext.mjs"),textAlignedToIcon_standard="_36hmit0",useIcon=__webpack_require__("./node_modules/braid-design-system/dist/lib/hooks/useIcon/index.mjs"),BraidThemeContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/BraidProvider/BraidThemeContext.mjs"),IconContainer=(__webpack_require__('node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css","source":"LnEwdGFrZDAgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoucTB0YWtkMDo6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBtaW4taGVpZ2h0OiA0NHB4OwogIG1pbi13aWR0aDogNDRweDsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgdG9wOiA1MCU7CiAgbGVmdDogNTAlOwp9CltkYXRhLWJyYWlkLWRlYnVnXSAucTB0YWtkMDo6YWZ0ZXIgewogIGJhY2tncm91bmQ6IHJlZDsKICBvcGFjaXR5OiAwLjI7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'),__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs"));const IconClearSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"m13.4 12 5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"})]})},IconClear=props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconClearSvg,...svgProps})}),IconPositiveSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"}),(0,jsx_runtime.jsx)("path",{d:"M15.3 9.3 11 13.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"})]})},IconInfoSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",xmlSpace:"preserve",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"}),(0,jsx_runtime.jsx)("path",{d:"M12 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm.9-3.4c0-.1-.1-.1-.1-.2s-.1-.1-.1-.1c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2l-.1.1c0 .1-.1.1-.1.2s0 .1-.1.2V8c0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1h.2c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1l.1-.1c.2-.2.3-.4.3-.7v-.2c0-.1-.1-.1-.1-.2z"})]})},IconPromoteSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",focusable:"false",fill:"currentColor",width:16,height:16,"aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M15.525 3.15a.998.998 0 0 0-.972-.045L10.763 5H7c-2.757 0-5 2.243-5 5 0 1.283.5 2.476 1.352 3.384l1.527 5.392a2.976 2.976 0 0 0 1.398 1.82 2.984 2.984 0 0 0 2.276.301 2.976 2.976 0 0 0 1.82-1.398c.401-.695.508-1.504.315-2.22L10.213 15h.55l3.79 1.895a1.003 1.003 0 0 0 .972-.044A1 1 0 0 0 16 16V4a1 1 0 0 0-.475-.85ZM7 7h3v6H7a2.94 2.94 0 0 1-1.327-.331 3.083 3.083 0 0 1-.74-.527c-.004-.005-.01-.007-.016-.011A2.949 2.949 0 0 1 4 10c0-1.654 1.346-3 3-3Zm1.742 10.741a.996.996 0 0 1-.101.758.994.994 0 0 1-1.364.365 1.004 1.004 0 0 1-.47-.619l-.96-3.388.015.003c.118.03.237.046.356.066.07.012.14.03.21.039.19.023.38.035.572.035h1.17l.572 2.741ZM14 14.381l-2-1V6.619l2-1v8.764ZM21 9h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Zm-.974 4.634-1.732-1a1.001 1.001 0 0 0-1 1.732l1.732 1a1.001 1.001 0 0 0 1-1.732ZM17.795 7.5c.17 0 .342-.043.499-.134l1.732-1a1 1 0 1 0-1-1.732l-1.732 1a1 1 0 0 0 .5 1.866Z"})]})},IconCautionSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",focusable:"false",fill:"currentColor","aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M22.71 17.262 14.738 3.71A3.183 3.183 0 0 0 12 2.013 3.183 3.183 0 0 0 9.262 3.71L1.29 17.262a3.152 3.152 0 0 0-.14 3.225A3.152 3.152 0 0 0 4 22h16a3.023 3.023 0 0 0 2.71-4.738ZM20 20H4c-1.1 0-1.544-.776-.986-1.724l7.972-13.552A1.232 1.232 0 0 1 12 4.013a1.232 1.232 0 0 1 1.014.71l7.972 13.553C21.544 19.224 21.1 20 20 20Z"}),(0,jsx_runtime.jsx)("circle",{cx:12,cy:17,r:1}),(0,jsx_runtime.jsx)("path",{d:"M11.978 14a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z"})]})},IconCriticalSvg=_ref=>{let{title,titleId,...props}=_ref;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 24 24",focusable:"false",fill:"currentColor","aria-labelledby":titleId,...props,children:[title?(0,jsx_runtime.jsx)("title",{id:titleId,children:title}):null,(0,jsx_runtime.jsx)("path",{d:"M12 22.997a2.977 2.977 0 0 1-2.121-.877h-.001L1.88 14.121c-.566-.564-.877-1.317-.877-2.121s.311-1.557.877-2.122L9.879 1.88c1.129-1.131 3.112-1.131 4.243 0l7.998 7.999c.566.564.877 1.317.877 2.121s-.311 1.557-.877 2.122l-7.999 7.998a2.975 2.975 0 0 1-2.121.877Zm0-19.994a.988.988 0 0 0-.706.29l-8 8c-.188.187-.291.438-.291.707s.103.52.291.706l7.999 8h.001c.373.375 1.039.375 1.412 0l8-7.999c.188-.187.291-.438.291-.707s-.103-.52-.29-.706l-8-8A.992.992 0 0 0 12 3.003Z"}),(0,jsx_runtime.jsx)("circle",{cx:12,cy:16,r:1}),(0,jsx_runtime.jsx)("path",{d:"M11.978 13a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z"})]})},backgroundForTone={promote:"promoteLight",info:"infoLight",positive:"positiveLight",caution:"cautionLight",critical:"criticalLight"},borderForTone={promote:"borderPromoteLight",info:"borderInfoLight",positive:"borderPositiveLight",caution:"borderCautionLight",critical:"borderCriticalLight"},icons={positive:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconPositiveSvg,...svgProps})}),info:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconInfoSvg,...svgProps})}),promote:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconPromoteSvg,...svgProps})}),caution:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconCautionSvg,...svgProps})}),critical:props=>(0,jsx_runtime.jsx)(IconContainer.T,{...props,children:svgProps=>(0,jsx_runtime.jsx)(Box.a,{component:IconCriticalSvg,...svgProps})})},Alert=_ref=>{let{tone="info",children,id,closeLabel="Close",data,onClose,...restProps}=_ref;const isLegacyTheme=(0,BraidThemeContext.j)().legacy,parentBackground=(0,BackgroundContext.Wi)(),Icon=icons[tone];return(0,jsx_runtime.jsxs)(Box.a,{id,background:backgroundForTone[tone],paddingY:"medium",paddingX:"gutter",borderRadius:"large",position:"relative",overflow:"hidden",role:"alert","aria-live":"polite",textAlign:"left",...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),children:[(0,jsx_runtime.jsxs)(Columns,{space:"small",children:[(0,jsx_runtime.jsx)(Column,{width:"content",children:(0,jsx_runtime.jsx)(Icon,{tone})}),(0,jsx_runtime.jsx)(Column,{children:(0,jsx_runtime.jsx)(Box.a,{className:textAlignedToIcon_standard,children})}),onClose?(0,jsx_runtime.jsx)(Column,{width:"content",children:(0,jsx_runtime.jsxs)(Box.a,{component:"button","aria-label":closeLabel,borderRadius:"full",cursor:"pointer",position:"relative",onClick:onClose,outline:"none",transition:"touchable",transform:{active:"touchable"},display:"flex",alignItems:"center",justifyContent:"center",className:["_1ujmxgu0 q0takd0",(0,useIcon.M_)()],children:[(0,jsx_runtime.jsx)(Overlay,{component:"span",boxShadow:"outlineFocus",transition:"fast",onlyVisibleForKeyboardNavigation:!0,borderRadius:"full",className:"_1ujmxgu1"}),(0,jsx_runtime.jsx)(Overlay,{component:"span",background:"surface",transition:"fast",borderRadius:"full",className:"_1ujmxgu2"}),(0,jsx_runtime.jsx)(Box.a,{component:"span",display:"block",zIndex:1,position:"relative",children:(0,jsx_runtime.jsx)(IconClear,{size:"fill",tone})})]})}):null]}),isLegacyTheme&&"surface"!==parentBackground.lightMode&&(0,jsx_runtime.jsx)(Overlay,{borderRadius:"large",boxShadow:{lightMode:borderForTone[tone]},visible:!0})]})};var Stack=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),Text=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),InternalLink=__webpack_require__("./src/components/InternalLink.tsx");const InternalLink_stories={title:"Standalone/InternalLink",component:_ref=>{let{line1,line2,...args}=_ref;return(0,jsx_runtime.jsx)(InternalLink.E,{...args,children:(0,jsx.A)(Alert,{tone:"caution"},void 0,(0,jsx.A)(Stack.B,{space:"gutter"},void 0,(0,jsx.A)(Text.E,{},void 0,line1),(0,jsx.A)(Text.E,{size:"small"},void 0,line2)))})}},InternalLink_stories_InternalLink={args:{href:"page#id",reset:!0,line1:"InternalLink supports complex components.",line2:"For example, this whole Alert is a link!"}};InternalLink_stories_InternalLink.parameters={...InternalLink_stories_InternalLink.parameters,docs:{...InternalLink_stories_InternalLink.parameters?.docs,source:{originalSource:"{\n  args: {\n    href: 'page#id',\n    reset: true,\n    line1: 'InternalLink supports complex components.',\n    line2: 'For example, this whole Alert is a link!'\n  }\n}",...InternalLink_stories_InternalLink.parameters?.docs?.source}}}},"./node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>lineHeightContainer});__webpack_require__('node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css","source":"Ll8zdWx3bXkwIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzMyk7Cn0KLl8zdWx3bXkxIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzZCk7Cn0KLl8zdWx3bXkyIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzbik7Cn0KLl8zdWx3bXkzIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzeCk7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHsKICAuXzN1bHdteTAgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkMzgpOwogIH0KICAuXzN1bHdteTEgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM2kpOwogIH0KICAuXzN1bHdteTIgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM3MpOwogIH0KICAuXzN1bHdteTMgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkNDIpOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js');var lineHeightContainer={xsmall:"_3ulwmy0",small:"_3ulwmy1",standard:"_3ulwmy2",large:"_3ulwmy3"}},"./node_modules/braid-design-system/dist/lib/components/Heading/HeadingContext.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HeadingContext});const HeadingContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(!1)},"./node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),_utils_align_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/align.mjs"),_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs");const Stack=_ref=>{let{component="div",children,space="none",align:alignProp,data,...restProps}=_ref;const align=alignProp||"left";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__.a,{component,display:"flex",flexDirection:"column",gap:space,alignItems:"left"!==align?(0,_utils_align_mjs__WEBPACK_IMPORTED_MODULE_2__.F)(align):void 0,textAlign:alignProp,...(0,_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_3__.a)({data,validateRestProps:restProps}),children})}},"./node_modules/braid-design-system/dist/lib/components/icons/IconContainer.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>IconContainer});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_hooks_useIcon_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/braid-design-system/dist/lib/hooks/useIcon/index.mjs"),_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs");const IconContainer=_ref=>{let{children,verticalCorrection,...props}=_ref;const{isInline,svgProps}=(0,_hooks_useIcon_index_mjs__WEBPACK_IMPORTED_MODULE_1__.bD)(props,{verticalCorrection});return isInline?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__.a,{component:"span",display:"inlineBlock",children:children(svgProps)}):children(svgProps)}},"./node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>negativeMargin});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),sprinkles_css=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/atoms/sprinkles.css.mjs"),optimizeResponsiveArray=__webpack_require__("./node_modules/braid-design-system/dist/lib/utils/optimizeResponsiveArray.mjs");const resolveResponsiveProp=(value,mobileAtoms,tabletAtoms,desktopAtoms,wideAtoms)=>{var _normalized$mobile,_normalized$tablet,_normalized$desktop,_normalized$wide;if("string"==typeof value||"number"==typeof value)return mobileAtoms[value];const normalized=(0,sprinkles_css.tj)(value),[mobile,tablet,desktop,wide]=(0,optimizeResponsiveArray.N)([null!==(_normalized$mobile=normalized.mobile)&&void 0!==_normalized$mobile?_normalized$mobile:null,null!==(_normalized$tablet=normalized.tablet)&&void 0!==_normalized$tablet?_normalized$tablet:null,null!==(_normalized$desktop=normalized.desktop)&&void 0!==_normalized$desktop?_normalized$desktop:null,null!==(_normalized$wide=normalized.wide)&&void 0!==_normalized$wide?_normalized$wide:null]),mobileAtom=mobileAtoms[mobile],tabletAtom=tabletAtoms[tablet],desktopAtom=desktopAtoms[desktop],wideAtom=wideAtoms[wide];return(0,clsx.A)(mobileAtom,tabletAtom,desktopAtom,wideAtom)};__webpack_require__('node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62Yy27iQBBF93yFlVUyEpGrusFANvMnkfEDDMYYY56j/PtIUWaEoSqpkmvf91hqHclH/foOcDzVizqczeZZvm2y4M8gCJJt1WZVOwuent4GQZAW+7qML7Ogjedl9jb4GLz+28FsFudt1ihn2PncJm4WRTWcb9t2u5kFSVwmz8e4eR4O38cZns5p+BL8Cobw0mE4HQMohtcxkGKMdAxHMcY6hqcYkY4xohgTHWNMMaY6RkQxYh1jQjHm3zHCrsXjW42/jrbbWuwiRHIAKSJM5ADSQpjKAaSCEMsBpH8wlwNI+SCRA0jzIJUDSO0gkwNI5yDnAF3hML49UGZ5K1YN55IpKRkmkimpF6aSKSkWZpIpqRTmkikpEy4kU1IjXEqmpEBYSKakOrh6nHalcZ2LbIrFUm6Ny0VbUhu3EG1Jb9xStCXFcYVoS5rjVqItqY5bi7akO64UbUl53Ea0Je1xFbH91Of3JkuLONgnTZZVQVylwfOmqIanIm2XsyDyYX1++dz+ZyWdH6cqz4Lg45aUaknAkTItCTlSriU5jrTQkjxHWmpJI45UaEljjrTSkiKOtNaSJhyp/J4UPgxgcfs/lqfdPWapwbASQ6HBsAbDSoNh9YW1BsO6C6UGw4oLGw2GtRYqDYZVFrYaDOsr1DzmUVZcd4/9nIX3gFIGYAXFjQzAqomVDMBKiVsZgNURaxmAFRF3MgCrIDYyACsf7mUAVjtsKcCjcO7usgVJeU+ohQRWObcTEljnXCMksNK5vZDAWudaIYHVzh2EBNY7dxQSWPHcSUhgzXNnkvCl3k8xOp3iQ4xuzGK0MovRrVmM1mYxujOL0cYsRvdmMdqaxejBLEaP6hjd2cRoYxOje5sYbW1i9GATo0ebGD3ZxOjZJkYvNjF6VcXogWoITYweZQA+Rk8yAB+jZxmAj9FL3xi99oxRF/aMUQc9Y9Rhzxh1ThijFzIdNDF6FRJY5XwoJLDOeRASWOk8Cgmsdd4JCax23veNUT/qG6N+3DdGfdQnRgHDx6fRk1mNns1q9GJWo1ezGoXQLEcBzHoU0CxIwZkVKXizJIWRtkkxNGlSBJMmRTRpUnQmTYrepElxZNKkODZpUoxMmhQnJk2KU02TOk+lhKYQRjIA/1o1lgH4x6pIBuDfqiY9m9RN+zZp3LdJ532bNOnbpKmsSf2ELAiFcX4qJPBNGgsJfJPOhQS+SRMhgW/SVEjgmzQTEvgmzXs36aJ3ky6/bdK/J43eXJApAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js');var preventCollapsePseudo={top:"_11vwpgp0",bottom:"_11vwpgp1"};const directionStyles={top:{mobile:{gutter:"_11vwpgp2",xxsmall:"_11vwpgp3",xsmall:"_11vwpgp4",small:"_11vwpgp5",medium:"_11vwpgp6",large:"_11vwpgp7",xlarge:"_11vwpgp8",xxlarge:"_11vwpgp9",xxxlarge:"_11vwpgpa",none:"_11vwpgpb"},tablet:{gutter:"_11vwpgpc",xxsmall:"_11vwpgpd",xsmall:"_11vwpgpe",small:"_11vwpgpf",medium:"_11vwpgpg",large:"_11vwpgph",xlarge:"_11vwpgpi",xxlarge:"_11vwpgpj",xxxlarge:"_11vwpgpk",none:"_11vwpgpl"},desktop:{gutter:"_11vwpgpm",xxsmall:"_11vwpgpn",xsmall:"_11vwpgpo",small:"_11vwpgpp",medium:"_11vwpgpq",large:"_11vwpgpr",xlarge:"_11vwpgps",xxlarge:"_11vwpgpt",xxxlarge:"_11vwpgpu",none:"_11vwpgpv"},wide:{gutter:"_11vwpgpw",xxsmall:"_11vwpgpx",xsmall:"_11vwpgpy",small:"_11vwpgpz",medium:"_11vwpgp10",large:"_11vwpgp11",xlarge:"_11vwpgp12",xxlarge:"_11vwpgp13",xxxlarge:"_11vwpgp14",none:"_11vwpgp15"}},right:{mobile:{gutter:"_11vwpgp3e",xxsmall:"_11vwpgp3f",xsmall:"_11vwpgp3g",small:"_11vwpgp3h",medium:"_11vwpgp3i",large:"_11vwpgp3j",xlarge:"_11vwpgp3k",xxlarge:"_11vwpgp3l",xxxlarge:"_11vwpgp3m",none:"_11vwpgp3n"},tablet:{gutter:"_11vwpgp3o",xxsmall:"_11vwpgp3p",xsmall:"_11vwpgp3q",small:"_11vwpgp3r",medium:"_11vwpgp3s",large:"_11vwpgp3t",xlarge:"_11vwpgp3u",xxlarge:"_11vwpgp3v",xxxlarge:"_11vwpgp3w",none:"_11vwpgp3x"},desktop:{gutter:"_11vwpgp3y",xxsmall:"_11vwpgp3z",xsmall:"_11vwpgp40",small:"_11vwpgp41",medium:"_11vwpgp42",large:"_11vwpgp43",xlarge:"_11vwpgp44",xxlarge:"_11vwpgp45",xxxlarge:"_11vwpgp46",none:"_11vwpgp47"},wide:{gutter:"_11vwpgp48",xxsmall:"_11vwpgp49",xsmall:"_11vwpgp4a",small:"_11vwpgp4b",medium:"_11vwpgp4c",large:"_11vwpgp4d",xlarge:"_11vwpgp4e",xxlarge:"_11vwpgp4f",xxxlarge:"_11vwpgp4g",none:"_11vwpgp4h"}},bottom:{mobile:{gutter:"_11vwpgp16",xxsmall:"_11vwpgp17",xsmall:"_11vwpgp18",small:"_11vwpgp19",medium:"_11vwpgp1a",large:"_11vwpgp1b",xlarge:"_11vwpgp1c",xxlarge:"_11vwpgp1d",xxxlarge:"_11vwpgp1e",none:"_11vwpgp1f"},tablet:{gutter:"_11vwpgp1g",xxsmall:"_11vwpgp1h",xsmall:"_11vwpgp1i",small:"_11vwpgp1j",medium:"_11vwpgp1k",large:"_11vwpgp1l",xlarge:"_11vwpgp1m",xxlarge:"_11vwpgp1n",xxxlarge:"_11vwpgp1o",none:"_11vwpgp1p"},desktop:{gutter:"_11vwpgp1q",xxsmall:"_11vwpgp1r",xsmall:"_11vwpgp1s",small:"_11vwpgp1t",medium:"_11vwpgp1u",large:"_11vwpgp1v",xlarge:"_11vwpgp1w",xxlarge:"_11vwpgp1x",xxxlarge:"_11vwpgp1y",none:"_11vwpgp1z"},wide:{gutter:"_11vwpgp20",xxsmall:"_11vwpgp21",xsmall:"_11vwpgp22",small:"_11vwpgp23",medium:"_11vwpgp24",large:"_11vwpgp25",xlarge:"_11vwpgp26",xxlarge:"_11vwpgp27",xxxlarge:"_11vwpgp28",none:"_11vwpgp29"}},left:{mobile:{gutter:"_11vwpgp2a",xxsmall:"_11vwpgp2b",xsmall:"_11vwpgp2c",small:"_11vwpgp2d",medium:"_11vwpgp2e",large:"_11vwpgp2f",xlarge:"_11vwpgp2g",xxlarge:"_11vwpgp2h",xxxlarge:"_11vwpgp2i",none:"_11vwpgp2j"},tablet:{gutter:"_11vwpgp2k",xxsmall:"_11vwpgp2l",xsmall:"_11vwpgp2m",small:"_11vwpgp2n",medium:"_11vwpgp2o",large:"_11vwpgp2p",xlarge:"_11vwpgp2q",xxlarge:"_11vwpgp2r",xxxlarge:"_11vwpgp2s",none:"_11vwpgp2t"},desktop:{gutter:"_11vwpgp2u",xxsmall:"_11vwpgp2v",xsmall:"_11vwpgp2w",small:"_11vwpgp2x",medium:"_11vwpgp2y",large:"_11vwpgp2z",xlarge:"_11vwpgp30",xxlarge:"_11vwpgp31",xxxlarge:"_11vwpgp32",none:"_11vwpgp33"},wide:{gutter:"_11vwpgp34",xxsmall:"_11vwpgp35",xsmall:"_11vwpgp36",small:"_11vwpgp37",medium:"_11vwpgp38",large:"_11vwpgp39",xlarge:"_11vwpgp3a",xxlarge:"_11vwpgp3b",xxxlarge:"_11vwpgp3c",none:"_11vwpgp3d"}}},negativeMargin=(direction,space)=>space?(0,clsx.A)(["top"===direction||"bottom"===direction?preventCollapsePseudo[direction]:void 0,resolveResponsiveProp(space,directionStyles[direction].mobile,directionStyles[direction].tablet,directionStyles[direction].desktop,directionStyles[direction].wide)]):null},"./node_modules/braid-design-system/dist/lib/hooks/useIcon/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M_:()=>iconContainerSize,bD:()=>useIcon});var react=__webpack_require__("./node_modules/react/index.js"),build_assert=__webpack_require__("./node_modules/assert/build/assert.js"),assert_default=__webpack_require__.n(build_assert),dist_clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),Text_TextContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/TextContext.mjs"),Heading_HeadingContext=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Heading/HeadingContext.mjs"),lineHeightContainer_css=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs"),buildDataAttributes=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs"),atoms=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/atoms/atoms.mjs"),alignY=(__webpack_require__('node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css","source":"Ll8xeW9qcXRtMCB7CiAgd2lkdGg6IDEuMmVtOwogIGhlaWdodDogMS4yZW07Cn0KLl8xeW9qcXRtMSB7CiAgbWFyZ2luOiAtMC4xZW07Cn0KLl8xeW9qcXRtMiB7CiAgbWFyZ2luLXRvcDogLTAuMmVtOwogIG1hcmdpbi1ib3R0b206IC0wLjJlbTsKfQouXzF5b2pxdG0zIHsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5fMXlvanF0bTQgewogIHRvcDogLTAuMTA1ZW07Cn0KLl8xeW9qcXRtNSB7CiAgdG9wOiAtMC4xNjQ5OTk5OTk5OTk5OTk5OGVtOwp9Ci5fMXlvanF0bTYgewogIHRvcDogLTAuMDQ1ZW07Cn0KLl8xeW9qcXRtNyB7CiAgdG9wOiAtMC4wNjVlbTsKfQouXzF5b2pxdG04IHsKICB0b3A6IC0wLjEyNWVtOwp9Ci5fMXlvanF0bTkgewogIHRvcDogLTAuMDA1MDAwMDAwMDAwMDAwMDA0NGVtOwp9Ci5fMXlvanF0bWEgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkMzMpOwp9Ci5fMXlvanF0bWIgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM2QpOwp9Ci5fMXlvanF0bWMgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM24pOwp9Ci5fMXlvanF0bWQgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM3gpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSB7CiAgLl8xeW9qcXRtYSB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDM4KTsKICB9CiAgLl8xeW9qcXRtYiB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNpKTsKICB9CiAgLl8xeW9qcXRtYyB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNzKTsKICB9CiAgLl8xeW9qcXRtZCB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDQyKTsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'),{uppercase:{none:"_1yojqtm4",up:"_1yojqtm5",down:"_1yojqtm6"},lowercase:{none:"_1yojqtm7",up:"_1yojqtm8",down:"_1yojqtm9"}}),blockWidths={xsmall:"_1yojqtma",small:"_1yojqtmb",standard:"_1yojqtmc",large:"_1yojqtmd"};const iconInlineSize=function(){let{alignY:alignY$1="uppercase",verticalCorrection="none"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,dist_clsx.A)((0,atoms.F)({display:"inlineBlock",position:"relative"}),"_1yojqtm0","_1yojqtm2","_1yojqtm3",alignY[alignY$1][verticalCorrection])};var typography_css=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/typography.css.mjs");const iconContainerSize=function(){let size2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"standard";return(0,dist_clsx.A)(blockWidths[size2],lineHeightContainer_css.x[size2])},defaultVerticalCorrection={uppercase:"none",lowercase:"none"},useIcon=function(_ref){let{size:size2,tone:tone$1,alignY,data,title,titleId,...restProps}=_ref,{verticalCorrection=defaultVerticalCorrection}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const textContext=(0,react.useContext)(Text_TextContext.h),headingContext=(0,react.useContext)(Heading_HeadingContext.A),resolvedTone=typography_css.rR[tone$1||(null==textContext?void 0:textContext.tone)||"neutral"],toneClass=tone$1||!headingContext&&!(null==textContext?void 0:textContext.tone)?resolvedTone:void 0,isInline=Boolean(textContext||headingContext),a11yProps=title?{title,titleId,role:"img"}:{"aria-hidden":!0};return assert_default()(!(size2&&isInline),`Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${textContext?"Text":"Heading"}>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/${textContext?"Text":"Heading"}`),assert_default()(!(alignY&&!isInline),"Specifying `alignY` for an `Icon` outside of a text component is invalid."),"fill"===size2?{isInline:!1,svgProps:{width:"full",height:"full",display:"block",className:toneClass,...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),...a11yProps}}:{isInline,svgProps:{className:[toneClass,isInline?[iconInlineSize({alignY:alignY||"uppercase",verticalCorrection:verticalCorrection[alignY||"uppercase"]})]:[(0,atoms.F)({display:"block"}),iconContainerSize(size2)]],...(0,buildDataAttributes.a)({data,validateRestProps:restProps}),...a11yProps}}}},'node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css","source":"Ll8xaTFxam5hMCB7CiAgbWFyZ2luLWJvdHRvbTogLTAuMWVtOwp9Ci5fMWkxcWpuYTIgewogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLl8xaTFxam5hMCAuXzFpMXFqbmEyIHsKICBwYWRkaW5nLWJvdHRvbTogMC4xZW07Cn0KQHN1cHBvcnRzIChkaXNwbGF5OiAtd2Via2l0LWJveCkgYW5kICgtd2Via2l0LWxpbmUtY2xhbXA6IDEpIHsKICAuXzFpMXFqbmE0IHsKICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOwogICAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHZhcigtLV8xaTFxam5hMyk7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css","source":"LnEwdGFrZDAgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoucTB0YWtkMDo6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBtaW4taGVpZ2h0OiA0NHB4OwogIG1pbi13aWR0aDogNDRweDsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7CiAgdG9wOiA1MCU7CiAgbGVmdDogNTAlOwp9CltkYXRhLWJyYWlkLWRlYnVnXSAucTB0YWtkMDo6YWZ0ZXIgewogIGJhY2tncm91bmQ6IHJlZDsKICBvcGFjaXR5OiAwLjI7Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css","source":"Ll8zdWx3bXkwIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzMyk7Cn0KLl8zdWx3bXkxIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzZCk7Cn0KLl8zdWx3bXkyIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzbik7Cn0KLl8zdWx3bXkzIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzeCk7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHsKICAuXzN1bHdteTAgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkMzgpOwogIH0KICAuXzN1bHdteTEgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM2kpOwogIH0KICAuXzN1bHdteTIgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM3MpOwogIH0KICAuXzN1bHdteTMgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkNDIpOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62Yy27iQBBF93yFlVUyEpGrusFANvMnkfEDDMYYY56j/PtIUWaEoSqpkmvf91hqHclH/foOcDzVizqczeZZvm2y4M8gCJJt1WZVOwuent4GQZAW+7qML7Ogjedl9jb4GLz+28FsFudt1ihn2PncJm4WRTWcb9t2u5kFSVwmz8e4eR4O38cZns5p+BL8Cobw0mE4HQMohtcxkGKMdAxHMcY6hqcYkY4xohgTHWNMMaY6RkQxYh1jQjHm3zHCrsXjW42/jrbbWuwiRHIAKSJM5ADSQpjKAaSCEMsBpH8wlwNI+SCRA0jzIJUDSO0gkwNI5yDnAF3hML49UGZ5K1YN55IpKRkmkimpF6aSKSkWZpIpqRTmkikpEy4kU1IjXEqmpEBYSKakOrh6nHalcZ2LbIrFUm6Ny0VbUhu3EG1Jb9xStCXFcYVoS5rjVqItqY5bi7akO64UbUl53Ea0Je1xFbH91Of3JkuLONgnTZZVQVylwfOmqIanIm2XsyDyYX1++dz+ZyWdH6cqz4Lg45aUaknAkTItCTlSriU5jrTQkjxHWmpJI45UaEljjrTSkiKOtNaSJhyp/J4UPgxgcfs/lqfdPWapwbASQ6HBsAbDSoNh9YW1BsO6C6UGw4oLGw2GtRYqDYZVFrYaDOsr1DzmUVZcd4/9nIX3gFIGYAXFjQzAqomVDMBKiVsZgNURaxmAFRF3MgCrIDYyACsf7mUAVjtsKcCjcO7usgVJeU+ohQRWObcTEljnXCMksNK5vZDAWudaIYHVzh2EBNY7dxQSWPHcSUhgzXNnkvCl3k8xOp3iQ4xuzGK0MovRrVmM1mYxujOL0cYsRvdmMdqaxejBLEaP6hjd2cRoYxOje5sYbW1i9GATo0ebGD3ZxOjZJkYvNjF6VcXogWoITYweZQA+Rk8yAB+jZxmAj9FL3xi99oxRF/aMUQc9Y9Rhzxh1ThijFzIdNDF6FRJY5XwoJLDOeRASWOk8Cgmsdd4JCax23veNUT/qG6N+3DdGfdQnRgHDx6fRk1mNns1q9GJWo1ezGoXQLEcBzHoU0CxIwZkVKXizJIWRtkkxNGlSBJMmRTRpUnQmTYrepElxZNKkODZpUoxMmhQnJk2KU02TOk+lhKYQRjIA/1o1lgH4x6pIBuDfqiY9m9RN+zZp3LdJ532bNOnbpKmsSf2ELAiFcX4qJPBNGgsJfJPOhQS+SRMhgW/SVEjgmzQTEvgmzXs36aJ3ky6/bdK/J43eXJApAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css","source":"Ll8xeW9qcXRtMCB7CiAgd2lkdGg6IDEuMmVtOwogIGhlaWdodDogMS4yZW07Cn0KLl8xeW9qcXRtMSB7CiAgbWFyZ2luOiAtMC4xZW07Cn0KLl8xeW9qcXRtMiB7CiAgbWFyZ2luLXRvcDogLTAuMmVtOwogIG1hcmdpbi1ib3R0b206IC0wLjJlbTsKfQouXzF5b2pxdG0zIHsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5fMXlvanF0bTQgewogIHRvcDogLTAuMTA1ZW07Cn0KLl8xeW9qcXRtNSB7CiAgdG9wOiAtMC4xNjQ5OTk5OTk5OTk5OTk5OGVtOwp9Ci5fMXlvanF0bTYgewogIHRvcDogLTAuMDQ1ZW07Cn0KLl8xeW9qcXRtNyB7CiAgdG9wOiAtMC4wNjVlbTsKfQouXzF5b2pxdG04IHsKICB0b3A6IC0wLjEyNWVtOwp9Ci5fMXlvanF0bTkgewogIHRvcDogLTAuMDA1MDAwMDAwMDAwMDAwMDA0NGVtOwp9Ci5fMXlvanF0bWEgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkMzMpOwp9Ci5fMXlvanF0bWIgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM2QpOwp9Ci5fMXlvanF0bWMgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM24pOwp9Ci5fMXlvanF0bWQgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM3gpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSB7CiAgLl8xeW9qcXRtYSB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDM4KTsKICB9CiAgLl8xeW9qcXRtYiB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNpKTsKICB9CiAgLl8xeW9qcXRtYyB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNzKTsKICB9CiAgLl8xeW9qcXRtZCB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDQyKTsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{}}]);