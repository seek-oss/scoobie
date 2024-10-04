/*! For license information please see components-Table-stories.ddd92cee.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkscoobie=self.webpackChunkscoobie||[]).push([[552],{"./src/components/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaults:()=>Defaults,Stripe:()=>Stripe,Subtle:()=>Subtle,default:()=>Table_stories});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Text=(__webpack_require__("./node_modules/loki/configure-react.js"),__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs")),react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),ScrollableInline=__webpack_require__("./src/private/ScrollableInline.tsx"),fullWidth="_49uqxl0",table="_49uqxl1",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseTable=_ref=>{let{children,overflowX,whiteSpace,width}=_ref;const Wrapper="scroll"===overflowX?ScrollableInline.V:react.Fragment;return(0,jsx_runtime.jsx)(Wrapper,{..."scroll"===overflowX?{whiteSpace}:{},children:(0,jsx.A)(Box.l,{component:"table",className:{[table]:!0,[fullWidth]:"full"===width}},void 0,children)})};var private_size=__webpack_require__("./src/private/size.ts");const DEFAULT_TABLE_TYPE="stripe",TableContext=(0,react.createContext)({component:"td",size:private_size._7,type:DEFAULT_TABLE_TYPE});var react_is=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js");function flattenChildren(children,depth=0,keys=[]){return react.Children.toArray(children).reduce(((acc,node,nodeIndex)=>((0,react_is.isFragment)(node)?acc.push.apply(acc,flattenChildren(node.props.children,depth+1,keys.concat(node.key||nodeIndex))):(0,react.isValidElement)(node)?acc.push((0,react.cloneElement)(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc)),[])}var Stack=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),tableCell={stripe:"_1ae57l00",subtle:"_1ae57l01"},td={large:{stripe:"_1ae57l02",subtle:"_1ae57l03"},standard:{stripe:"_1ae57l04",subtle:"_1ae57l05"}},th={stripe:"_1ae57l06",subtle:"_1ae57l07"};const TableCell=_ref=>{let{align,children,component}=_ref;const{size,type}=(0,react.useContext)(TableContext),padding=private_size.Dd[size],space=private_size.he[size];return(0,jsx.A)(Box.l,{className:[tableCell[type],"td"===component?td[size][type]:th[type]],component,padding,textAlign:null!=align?align:"td"===component?"left":"center"},void 0,(0,jsx.A)(Stack.B,{space},void 0,children))};var tableRow={stripe:"_14a46f10",subtle:"_14a46f11"},tableRowSelection="_14a46f12";const BaseTableRow=_ref=>{let{children,selected}=_ref;const{type}=(0,react.useContext)(TableContext);return(0,jsx.A)(Box.l,{className:{[tableRow[type]]:!0,[tableRowSelection]:selected},component:"tr"},void 0,children)},TableRow=_ref=>{let{children,selected}=_ref;const{align,component}=(0,react.useContext)(TableContext);return(0,jsx.A)(BaseTableRow,{selected},void 0,react.Children.map(flattenChildren(children),((child,index)=>(0,jsx.A)(TableCell,{align:null==align?void 0:align[index],component},void 0,"number"==typeof child||"string"==typeof child?(0,jsx.A)(Text.E,{weight:"td"===component?void 0:"strong"},void 0,child):child))))},Table_stories={title:"Standalone/Table",component:_ref=>{let{align,children,header,overflowX,size=private_size._7,type=DEFAULT_TABLE_TYPE,whiteSpace,width}=_ref;return(0,jsx.A)(BaseTable,{overflowX,whiteSpace,width},void 0,(0,jsx.A)(TableContext.Provider,{value:{align,component:"th",size,type}},void 0,(0,jsx.A)(Box.l,{component:"thead"},void 0,(0,jsx.A)(TableRow,{},void 0,header))),(0,jsx.A)(TableContext.Provider,{value:{align,component:"td",size,type}},void 0,(0,jsx.A)(Box.l,{component:"tbody"},void 0,children)))},args:{size:"standard"},argTypes:{overflowX:{control:{type:"radio"},options:[void 0,"scroll"]},size:{control:{type:"radio"},options:["standard","large"]},whiteSpace:{control:{type:"radio"},options:[void 0,"nowrap"]},width:{control:{type:"radio"},options:[void 0,"full"]}}},Defaults={args:{header:["Column A","Column B"],children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx.A)(TableRow,{},void 0,(0,jsx.A)(react.Fragment,{},void 0,"This is body cell A1."),(0,jsx.A)(react.Fragment,{},void 0,"B1")),(0,jsx.A)(TableRow,{},void 0,(0,jsx.A)(react.Fragment,{},void 0,"A2"),(0,jsx.A)(react.Fragment,{},void 0,"This is body cell B2."))]})}},Stripe={args:{align:["left","right"],header:(0,jsx.A)(react.Fragment,{},void 0,(0,jsx.A)(react.Fragment,{},void 0,"Column A"),(0,jsx.A)(Text.E,{weight:"regular"},void 0,"Column B")),type:"stripe",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx.A)(TableRow,{},void 0,(0,jsx.A)(Text.E,{},void 0,"This is body cell A1."),(0,jsx.A)(Text.E,{weight:"strong"},void 0,"B1")),(0,jsx.A)(TableRow,{},void 0,(0,jsx.A)(react.Fragment,{},void 0,"A2"),(0,jsx.A)(react.Fragment,{},void 0,"This is body cell B2."))]})}},Subtle={args:{header:["Column A","Column B"],type:"subtle",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx.A)(TableRow,{},void 0,(0,jsx.A)(react.Fragment,{},void 0,"This is body cell A1."),(0,jsx.A)(react.Fragment,{},void 0,"B1")),(0,jsx.A)(TableRow,{},void 0,(0,jsx.A)(react.Fragment,{},void 0,"A2"),(0,jsx.A)(react.Fragment,{},void 0,"This is body cell B2."))]})}};Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  args: {\n    header: ['Column A', 'Column B'],\n    children: <>\n        <TableRow>\n          <Fragment>This is body cell A1.</Fragment>\n          <Fragment>B1</Fragment>\n        </TableRow>\n        <TableRow>\n          <Fragment>A2</Fragment>\n          <Fragment>This is body cell B2.</Fragment>\n        </TableRow>\n      </>\n  }\n}",...Defaults.parameters?.docs?.source}}},Stripe.parameters={...Stripe.parameters,docs:{...Stripe.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: ['left', 'right'],\n    header: <Fragment>\n        <Fragment>Column A</Fragment>\n        <Text weight=\"regular\">Column B</Text>\n      </Fragment>,\n    type: 'stripe',\n    children: <>\n        <TableRow>\n          <Text>This is body cell A1.</Text>\n          <Text weight=\"strong\">B1</Text>\n        </TableRow>\n\n        <TableRow>\n          <Fragment>A2</Fragment>\n          <Fragment>This is body cell B2.</Fragment>\n        </TableRow>\n      </>\n  }\n}",...Stripe.parameters?.docs?.source}}},Subtle.parameters={...Subtle.parameters,docs:{...Subtle.parameters?.docs,source:{originalSource:"{\n  args: {\n    header: ['Column A', 'Column B'],\n    type: 'subtle',\n    children: <>\n        <TableRow>\n          <Fragment>This is body cell A1.</Fragment>\n          <Fragment>B1</Fragment>\n        </TableRow>\n\n        <TableRow>\n          <Fragment>A2</Fragment>\n          <Fragment>This is body cell B2.</Fragment>\n        </TableRow>\n      </>\n  }\n}",...Subtle.parameters?.docs?.source}}}},"./src/private/ScrollableInline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>ScrollableInline});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Bleed=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Bleed/Bleed.mjs"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),ScrollableInline_css_whiteSpace=(__webpack_require__("./node_modules/react/index.js"),{undefined:"_1ctb8tl2",nowrap:"_1ctb8tl3"});const ScrollableInline=_ref=>{let{children,whiteSpace}=_ref;return(0,jsx.A)(Bleed.V,{vertical:"small"},void 0,(0,jsx.A)(Box.l,{className:["_1ctb8tl1",ScrollableInline_css_whiteSpace[null!=whiteSpace?whiteSpace:"undefined"]],paddingY:"small",width:"full"},void 0,children))}},"./src/private/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dd:()=>SIZE_TO_TABLE_PADDING,_7:()=>DEFAULT_SIZE,he:()=>SIZE_TO_SPACE,xp:()=>SIZE_TO_SMALLER});const DEFAULT_SIZE="standard",SIZE_TO_SMALLER={standard:"small",large:"standard"},SIZE_TO_TABLE_PADDING={standard:"small",large:"medium"},SIZE_TO_SPACE={standard:"medium",large:"large"}},"./node_modules/braid-design-system/dist/lib/components/Bleed/Bleed.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Bleed});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.mjs"),_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs");const Bleed=_ref=>{let{space,horizontal,vertical,top,bottom,left,right,children,component="div",data,...restProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__.a,{component,display:"span"===component?"block":void 0,className:[(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_2__.c)("top",top||vertical||space),(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_2__.c)("bottom",bottom||vertical||space),(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_2__.c)("left",left||horizontal||space),(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_2__.c)("right",right||horizontal||space)],...(0,_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_3__.a)({data,validateRestProps:restProps}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_1__.a,{component,display:"span"===component?"block":void 0,position:"relative",children})})}},'node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css","source":"Ll8xNXhmZG5oMCB7CiAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkeSk7Cn0KLl8xNXhmZG5oMyB7CiAgYmFja2dyb3VuZDogdmFyKC0tXzE1eGZkbmgxKTsKfQouXzE1eGZkbmg0IHsKICBiYWNrZ3JvdW5kOiB2YXIoLS1fMTV4ZmRuaDIpOwp9Cmh0bWw6bm90KC5fMXQ0NmtzZ3opIC5fMTV4ZmRuaDUgewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkdCk7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGRyKTsKfQpodG1sOm5vdCguXzF0NDZrc2d6KSAuXzE1eGZkbmg2IHsKICAtLV8xNXhmZG5oMTogdmFyKC0tXzZlMnd4ZHIpOwogIC0tXzE1eGZkbmgyOiB2YXIoLS1fNmUyd3hkdCk7Cn0KaHRtbC5fMXQ0NmtzZ3ogLl8xNXhmZG5oNyB7CiAgLS1fMTV4ZmRuaDE6IHZhcigtLV82ZTJ3eGR0KTsKICAtLV8xNXhmZG5oMjogdmFyKC0tXzZlMnd4ZHIpOwp9Cmh0bWwuXzF0NDZrc2d6IC5fMTV4ZmRuaDggewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkcik7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGR0KTsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css","source":"QG1lZGlhIHByaW50IHsKICAuaXZxNm9wMCB7CiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7CiAgfQp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css","source":"Ll8xaTFxam5hMCB7CiAgbWFyZ2luLWJvdHRvbTogLTAuMWVtOwp9Ci5fMWkxcWpuYTIgewogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLl8xaTFxam5hMCAuXzFpMXFqbmEyIHsKICBwYWRkaW5nLWJvdHRvbTogMC4xZW07Cn0KQHN1cHBvcnRzIChkaXNwbGF5OiAtd2Via2l0LWJveCkgYW5kICgtd2Via2l0LWxpbmUtY2xhbXA6IDEpIHsKICAuXzFpMXFqbmE0IHsKICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOwogICAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHZhcigtLV8xaTFxam5hMyk7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62Yy27iQBBF93yFlVUyEpGrusFANvMnkfEDDMYYY56j/PtIUWaEoSqpkmvf91hqHclH/foOcDzVizqczeZZvm2y4M8gCJJt1WZVOwuent4GQZAW+7qML7Ogjedl9jb4GLz+28FsFudt1ihn2PncJm4WRTWcb9t2u5kFSVwmz8e4eR4O38cZns5p+BL8Cobw0mE4HQMohtcxkGKMdAxHMcY6hqcYkY4xohgTHWNMMaY6RkQxYh1jQjHm3zHCrsXjW42/jrbbWuwiRHIAKSJM5ADSQpjKAaSCEMsBpH8wlwNI+SCRA0jzIJUDSO0gkwNI5yDnAF3hML49UGZ5K1YN55IpKRkmkimpF6aSKSkWZpIpqRTmkikpEy4kU1IjXEqmpEBYSKakOrh6nHalcZ2LbIrFUm6Ny0VbUhu3EG1Jb9xStCXFcYVoS5rjVqItqY5bi7akO64UbUl53Ea0Je1xFbH91Of3JkuLONgnTZZVQVylwfOmqIanIm2XsyDyYX1++dz+ZyWdH6cqz4Lg45aUaknAkTItCTlSriU5jrTQkjxHWmpJI45UaEljjrTSkiKOtNaSJhyp/J4UPgxgcfs/lqfdPWapwbASQ6HBsAbDSoNh9YW1BsO6C6UGw4oLGw2GtRYqDYZVFrYaDOsr1DzmUVZcd4/9nIX3gFIGYAXFjQzAqomVDMBKiVsZgNURaxmAFRF3MgCrIDYyACsf7mUAVjtsKcCjcO7usgVJeU+ohQRWObcTEljnXCMksNK5vZDAWudaIYHVzh2EBNY7dxQSWPHcSUhgzXNnkvCl3k8xOp3iQ4xuzGK0MovRrVmM1mYxujOL0cYsRvdmMdqaxejBLEaP6hjd2cRoYxOje5sYbW1i9GATo0ebGD3ZxOjZJkYvNjF6VcXogWoITYweZQA+Rk8yAB+jZxmAj9FL3xi99oxRF/aMUQc9Y9Rhzxh1ThijFzIdNDF6FRJY5XwoJLDOeRASWOk8Cgmsdd4JCax23veNUT/qG6N+3DdGfdQnRgHDx6fRk1mNns1q9GJWo1ezGoXQLEcBzHoU0CxIwZkVKXizJIWRtkkxNGlSBJMmRTRpUnQmTYrepElxZNKkODZpUoxMmhQnJk2KU02TOk+lhKYQRjIA/1o1lgH4x6pIBuDfqiY9m9RN+zZp3LdJ532bNOnbpKmsSf2ELAiFcX4qJPBNGgsJfJPOhQS+SRMhgW/SVEjgmzQTEvgmzXs36aJ3ky6/bdK/J43eXJApAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},"./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference"),exports.isFragment=function(a){return v(a)===d}},"./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js")}}]);