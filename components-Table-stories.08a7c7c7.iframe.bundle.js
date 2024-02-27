/*! For license information please see components-Table-stories.08a7c7c7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkscoobie=self.webpackChunkscoobie||[]).push([[212],{"./src/private/ScrollableInline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>ScrollableInline});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Bleed=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Bleed/Bleed.mjs"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),ScrollableInline_css_whiteSpace=(__webpack_require__("./node_modules/react/index.js"),{undefined:"_1ctb8tl2",nowrap:"_1ctb8tl3"}),ScrollableInline=function ScrollableInline(_ref){var children=_ref.children,whiteSpace=_ref.whiteSpace;return(0,jsx.c)(Bleed.U,{vertical:"small"},void 0,(0,jsx.c)(Box.s,{className:["_1ctb8tl1",ScrollableInline_css_whiteSpace[null!=whiteSpace?whiteSpace:"undefined"]],paddingY:"small",width:"full"},void 0,children))};try{ScrollableInline.displayName="ScrollableInline",ScrollableInline.__docgenInfo={description:"",displayName:"ScrollableInline",props:{whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/private/ScrollableInline.tsx#ScrollableInline"]={docgenInfo:ScrollableInline.__docgenInfo,name:"ScrollableInline",path:"src/private/ScrollableInline.tsx#ScrollableInline"})}catch(__react_docgen_typescript_loader_error){}},"./src/private/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>BaseTable,S:()=>MdxTable});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),react=__webpack_require__("./node_modules/react/index.js"),ScrollableInline=__webpack_require__("./src/private/ScrollableInline.tsx"),TableContext=__webpack_require__("./src/private/TableContext.ts"),private_size=__webpack_require__("./src/private/size.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var BaseTable=function BaseTable(_ref){var children=_ref.children,overflowX=_ref.overflowX,whiteSpace=_ref.whiteSpace,width=_ref.width,Wrapper="scroll"===overflowX?ScrollableInline._:react.Fragment;return(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},"scroll"===overflowX?{whiteSpace}:{}),{},{children:(0,jsx.c)(Box.s,{component:"table",className:{_49uqxl1:!0,_49uqxl0:"full"===width}},void 0,children)}))},MdxTable=function MdxTable(_ref2){var children=_ref2.children,_ref2$size=_ref2.size,size=void 0===_ref2$size?private_size.QD:_ref2$size,_ref2$type=_ref2.type,type=void 0===_ref2$type?TableContext.Pw:_ref2$type;return(0,jsx.c)(TableContext.qY.Provider,{value:{component:TableContext.mw,size,type}},void 0,(0,jsx.c)(BaseTable,{overflowX:"scroll",width:"full"},void 0,children))};try{BaseTable.displayName="BaseTable",BaseTable.__docgenInfo={description:"",displayName:"BaseTable",props:{overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:"enum",value:[{value:'"scroll"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"full"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/private/Table.tsx#BaseTable"]={docgenInfo:BaseTable.__docgenInfo,name:"BaseTable",path:"src/private/Table.tsx#BaseTable"})}catch(__react_docgen_typescript_loader_error){}try{MdxTable.displayName="MdxTable",MdxTable.__docgenInfo={description:"",displayName:"MdxTable",props:{size:{defaultValue:{value:"standard"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"large"'}]}},type:{defaultValue:{value:"stripe"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"stripe"'},{value:'"subtle"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/private/Table.tsx#MdxTable"]={docgenInfo:MdxTable.__docgenInfo,name:"MdxTable",path:"src/private/Table.tsx#MdxTable"})}catch(__react_docgen_typescript_loader_error){}},"./src/private/TableCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>TableCell});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),Stack=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),react=__webpack_require__("./node_modules/react/index.js"),TableContext=__webpack_require__("./src/private/TableContext.ts"),private_size=__webpack_require__("./src/private/size.ts"),tableCell=(__webpack_require__('src/private/TableRow.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/private/TableRow.css.ts.vanilla.css","source":"dGJvZHkgLl8xNGE0NmYxMDpudGgtY2hpbGQob2RkKSB7CiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQjsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'),{stripe:"_1ae57l00",subtle:"_1ae57l01"}),td={large:{stripe:"_1ae57l02",subtle:"_1ae57l03"},standard:{stripe:"_1ae57l04",subtle:"_1ae57l05"}},th={stripe:"_1ae57l06",subtle:"_1ae57l07"},TableCell=function TableCell(_ref){var align=_ref.align,children=_ref.children,component=_ref.component,_useContext=(0,react.useContext)(TableContext.qY),size=_useContext.size,type=_useContext.type,padding=private_size.y2[size],space=private_size.wn[size];return(0,jsx.c)(Box.s,{className:[tableCell[type],"td"===component?td[size][type]:th[type]],component,padding,textAlign:null!=align?align:"td"===component?"left":"center"},void 0,(0,jsx.c)(Stack.y,{space},void 0,children))};try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"TableAlign | null"}},component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/private/TableCell.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/private/TableCell.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/private/TableContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pw:()=>DEFAULT_TABLE_TYPE,mw:()=>DEFAULT_TABLE_CELL_COMPONENT,qY:()=>TableContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_size__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/private/size.ts"),DEFAULT_TABLE_CELL_COMPONENT="td",DEFAULT_TABLE_TYPE="stripe",TableContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({component:DEFAULT_TABLE_CELL_COMPONENT,size:_size__WEBPACK_IMPORTED_MODULE_1__.QD,type:DEFAULT_TABLE_TYPE})},"./src/private/TableRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>BaseTableRow});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),react=__webpack_require__("./node_modules/react/index.js"),TableContext=__webpack_require__("./src/private/TableContext.ts"),tableRow=(__webpack_require__('src/private/TableRow.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/private/TableRow.css.ts.vanilla.css","source":"dGJvZHkgLl8xNGE0NmYxMDpudGgtY2hpbGQob2RkKSB7CiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQjsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js'),{stripe:"_14a46f10",subtle:"_14a46f11"}),BaseTableRow=function BaseTableRow(_ref){var children=_ref.children,selected=_ref.selected,type=(0,react.useContext)(TableContext.qY).type;return(0,jsx.c)(Box.s,{className:{[tableRow[type]]:!0,_14a46f12:selected},component:"tr"},void 0,children)};try{BaseTableRow.displayName="BaseTableRow",BaseTableRow.__docgenInfo={description:"",displayName:"BaseTableRow",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/private/TableRow.tsx#BaseTableRow"]={docgenInfo:BaseTableRow.__docgenInfo,name:"BaseTableRow",path:"src/private/TableRow.tsx#BaseTableRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/private/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K6:()=>SIZE_TO_SMALLER,QD:()=>DEFAULT_SIZE,w5:()=>SIZES,wn:()=>SIZE_TO_SPACE,y2:()=>SIZE_TO_TABLE_PADDING});var DEFAULT_SIZE="standard",SIZES=["standard","large"],SIZE_TO_SMALLER={standard:"small",large:"standard"},SIZE_TO_TABLE_PADDING={standard:"small",large:"medium"},SIZE_TO_SPACE={standard:"medium",large:"large"}},"./node_modules/braid-design-system/dist/lib/components/Bleed/Bleed.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Bleed});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.mjs"),_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/private/buildDataAttributes.mjs"),_excluded=["space","horizontal","vertical","top","bottom","left","right","children","component","data"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Bleed=function Bleed(_ref){var space=_ref.space,horizontal=_ref.horizontal,vertical=_ref.vertical,top=_ref.top,bottom=_ref.bottom,left=_ref.left,right=_ref.right,children=_ref.children,_ref$component=_ref.component,component=void 0===_ref$component?"div":_ref$component,data=_ref.data,restProps=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.c)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__.k,_objectSpread(_objectSpread({component,display:"span"===component?"block":void 0,className:[(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_4__.e)("top",top||vertical||space),(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_4__.e)("bottom",bottom||vertical||space),(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_4__.e)("left",left||horizontal||space),(0,_css_negativeMargin_negativeMargin_mjs__WEBPACK_IMPORTED_MODULE_4__.e)("right",right||horizontal||space)]},(0,_private_buildDataAttributes_mjs__WEBPACK_IMPORTED_MODULE_5__.e)({data,validateRestProps:restProps})),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__.k,{component,display:"span"===component?"block":void 0,position:"relative",children})}))}},'node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css","source":"Ll8xNXhmZG5oMCB7CiAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkeSk7Cn0KLl8xNXhmZG5oMyB7CiAgYmFja2dyb3VuZDogdmFyKC0tXzE1eGZkbmgxKTsKfQouXzE1eGZkbmg0IHsKICBiYWNrZ3JvdW5kOiB2YXIoLS1fMTV4ZmRuaDIpOwp9Cmh0bWw6bm90KC5fMXQ0NmtzZ3opIC5fMTV4ZmRuaDUgewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkdCk7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGRyKTsKfQpodG1sOm5vdCguXzF0NDZrc2d6KSAuXzE1eGZkbmg2IHsKICAtLV8xNXhmZG5oMTogdmFyKC0tXzZlMnd4ZHIpOwogIC0tXzE1eGZkbmgyOiB2YXIoLS1fNmUyd3hkdCk7Cn0KaHRtbC5fMXQ0NmtzZ3ogLl8xNXhmZG5oNyB7CiAgLS1fMTV4ZmRuaDE6IHZhcigtLV82ZTJ3eGR0KTsKICAtLV8xNXhmZG5oMjogdmFyKC0tXzZlMnd4ZHIpOwp9Cmh0bWwuXzF0NDZrc2d6IC5fMTV4ZmRuaDggewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkcik7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGR0KTsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css","source":"QG1lZGlhIHByaW50IHsKICAuaXZxNm9wMCB7CiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7CiAgfQp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css","source":"Ll8xaTFxam5hMCB7CiAgbWFyZ2luLWJvdHRvbTogLTAuMWVtOwp9Ci5fMWkxcWpuYTIgewogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLl8xaTFxam5hMCAuXzFpMXFqbmEyIHsKICBwYWRkaW5nLWJvdHRvbTogMC4xZW07Cn0KQHN1cHBvcnRzIChkaXNwbGF5OiAtd2Via2l0LWJveCkgYW5kICgtd2Via2l0LWxpbmUtY2xhbXA6IDEpIHsKICAuXzFpMXFqbmE0IHsKICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOwogICAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHZhcigtLV8xaTFxam5hMyk7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62Yy27iQBBF93yFlVUyEpGrusFANvMnkfEDDMYYY56j/PtIUWaEoSqpkmvf91hqHclH/foOcDzVizqczeZZvm2y4M8gCJJt1WZVOwuent4GQZAW+7qML7Ogjedl9jb4GLz+28FsFudt1ihn2PncJm4WRTWcb9t2u5kFSVwmz8e4eR4O38cZns5p+BL8Cobw0mE4HQMohtcxkGKMdAxHMcY6hqcYkY4xohgTHWNMMaY6RkQxYh1jQjHm3zHCrsXjW42/jrbbWuwiRHIAKSJM5ADSQpjKAaSCEMsBpH8wlwNI+SCRA0jzIJUDSO0gkwNI5yDnAF3hML49UGZ5K1YN55IpKRkmkimpF6aSKSkWZpIpqRTmkikpEy4kU1IjXEqmpEBYSKakOrh6nHalcZ2LbIrFUm6Ny0VbUhu3EG1Jb9xStCXFcYVoS5rjVqItqY5bi7akO64UbUl53Ea0Je1xFbH91Of3JkuLONgnTZZVQVylwfOmqIanIm2XsyDyYX1++dz+ZyWdH6cqz4Lg45aUaknAkTItCTlSriU5jrTQkjxHWmpJI45UaEljjrTSkiKOtNaSJhyp/J4UPgxgcfs/lqfdPWapwbASQ6HBsAbDSoNh9YW1BsO6C6UGw4oLGw2GtRYqDYZVFrYaDOsr1DzmUVZcd4/9nIX3gFIGYAXFjQzAqomVDMBKiVsZgNURaxmAFRF3MgCrIDYyACsf7mUAVjtsKcCjcO7usgVJeU+ohQRWObcTEljnXCMksNK5vZDAWudaIYHVzh2EBNY7dxQSWPHcSUhgzXNnkvCl3k8xOp3iQ4xuzGK0MovRrVmM1mYxujOL0cYsRvdmMdqaxejBLEaP6hjd2cRoYxOje5sYbW1i9GATo0ebGD3ZxOjZJkYvNjF6VcXogWoITYweZQA+Rk8yAB+jZxmAj9FL3xi99oxRF/aMUQc9Y9Rhzxh1ThijFzIdNDF6FRJY5XwoJLDOeRASWOk8Cgmsdd4JCax23veNUT/qG6N+3DdGfdQnRgHDx6fRk1mNns1q9GJWo1ezGoXQLEcBzHoU0CxIwZkVKXizJIWRtkkxNGlSBJMmRTRpUnQmTYrepElxZNKkODZpUoxMmhQnJk2KU02TOk+lhKYQRjIA/1o1lgH4x6pIBuDfqiY9m9RN+zZp3LdJ532bNOnbpKmsSf2ELAiFcX4qJPBNGgsJfJPOhQS+SRMhgW/SVEjgmzQTEvgmzXs36aJ3ky6/bdK/J43eXJApAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'src/private/TableRow.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/private/TableRow.css.ts.vanilla.css","source":"dGJvZHkgLl8xNGE0NmYxMDpudGgtY2hpbGQob2RkKSB7CiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGQjsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},"./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference"),exports.isFragment=function(a){return v(a)===d}},"./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/cjs/react-is.production.min.js")},"./src/components/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defaults:()=>Defaults,Stripe:()=>Stripe,Subtle:()=>Subtle,default:()=>Table_stories});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Text=(__webpack_require__("./node_modules/loki/configure-react.js"),__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs")),react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),private_Table=__webpack_require__("./src/private/Table.tsx"),TableContext=__webpack_require__("./src/private/TableContext.ts"),private_size=__webpack_require__("./src/private/size.ts"),react_is=__webpack_require__("./node_modules/react-keyed-flatten-children/node_modules/react-is/index.js");function flattenChildren(children,depth=0,keys=[]){return react.Children.toArray(children).reduce(((acc,node,nodeIndex)=>((0,react_is.isFragment)(node)?acc.push.apply(acc,flattenChildren(node.props.children,depth+1,keys.concat(node.key||nodeIndex))):(0,react.isValidElement)(node)?acc.push((0,react.cloneElement)(node,{key:keys.concat(String(node.key)).join(".")})):"string"!=typeof node&&"number"!=typeof node||acc.push(node),acc)),[])}var TableCell=__webpack_require__("./src/private/TableCell.tsx"),private_TableRow=__webpack_require__("./src/private/TableRow.tsx"),TableRow=function TableRow(_ref){var children=_ref.children,selected=_ref.selected,_useContext=(0,react.useContext)(TableContext.qY),align=_useContext.align,component=_useContext.component;return(0,jsx.c)(private_TableRow.c,{selected},void 0,react.Children.map(flattenChildren(children),(function(child,index){return(0,jsx.c)(TableCell.y,{align:null==align?void 0:align[index],component},void 0,"number"==typeof child||"string"==typeof child?(0,jsx.c)(Text.a,{weight:"td"===component?void 0:"strong"},void 0,child):child)})))};try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TableRow.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/TableRow.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}var Table=function Table(_ref){var align=_ref.align,children=_ref.children,header=_ref.header,overflowX=_ref.overflowX,_ref$size=_ref.size,size=void 0===_ref$size?private_size.QD:_ref$size,_ref$type=_ref.type,type=void 0===_ref$type?TableContext.Pw:_ref$type,whiteSpace=_ref.whiteSpace,width=_ref.width;return(0,jsx.c)(private_Table.Q,{overflowX,whiteSpace,width},void 0,(0,jsx.c)(TableContext.qY.Provider,{value:{align,component:"th",size,type}},void 0,(0,jsx.c)(Box.s,{component:"thead"},void 0,(0,jsx.c)(TableRow,{},void 0,header))),(0,jsx.c)(TableContext.qY.Provider,{value:{align,component:"td",size,type}},void 0,(0,jsx.c)(Box.s,{component:"tbody"},void 0,children)))};try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"readonly TableAlign[]"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNodeNoStrings | readonly string[]"}},size:{defaultValue:{value:"standard"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"large"'}]}},type:{defaultValue:{value:"stripe"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"stripe"'},{value:'"subtle"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},overflowX:{defaultValue:null,description:"",name:"overflowX",required:!1,type:{name:"enum",value:[{value:'"scroll"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Table_stories={title:"Standalone/Table",component:Table,args:{size:"standard"},argTypes:{overflowX:{control:{type:"radio"},options:[void 0,"scroll"]},size:{control:{type:"radio"},options:["standard","large"]},whiteSpace:{control:{type:"radio"},options:[void 0,"nowrap"]},width:{control:{type:"radio"},options:[void 0,"full"]}}};var Defaults={args:{header:["Column A","Column B"],children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx.c)(TableRow,{},void 0,(0,jsx.c)(react.Fragment,{},void 0,"This is body cell A1."),(0,jsx.c)(react.Fragment,{},void 0,"B1")),(0,jsx.c)(TableRow,{},void 0,(0,jsx.c)(react.Fragment,{},void 0,"A2"),(0,jsx.c)(react.Fragment,{},void 0,"This is body cell B2."))]})}},Stripe={args:{align:["left","right"],header:(0,jsx.c)(react.Fragment,{},void 0,(0,jsx.c)(react.Fragment,{},void 0,"Column A"),(0,jsx.c)(Text.a,{weight:"regular"},void 0,"Column B")),type:"stripe",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx.c)(TableRow,{},void 0,(0,jsx.c)(Text.a,{},void 0,"This is body cell A1."),(0,jsx.c)(Text.a,{weight:"strong"},void 0,"B1")),(0,jsx.c)(TableRow,{},void 0,(0,jsx.c)(react.Fragment,{},void 0,"A2"),(0,jsx.c)(react.Fragment,{},void 0,"This is body cell B2."))]})}},Subtle={args:{header:["Column A","Column B"],type:"subtle",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx.c)(TableRow,{},void 0,(0,jsx.c)(react.Fragment,{},void 0,"This is body cell A1."),(0,jsx.c)(react.Fragment,{},void 0,"B1")),(0,jsx.c)(TableRow,{},void 0,(0,jsx.c)(react.Fragment,{},void 0,"A2"),(0,jsx.c)(react.Fragment,{},void 0,"This is body cell B2."))]})}};Defaults.parameters={...Defaults.parameters,docs:{...Defaults.parameters?.docs,source:{originalSource:"{\n  args: {\n    header: ['Column A', 'Column B'],\n    children: <>\n        <TableRow>\n          <Fragment>This is body cell A1.</Fragment>\n          <Fragment>B1</Fragment>\n        </TableRow>\n        <TableRow>\n          <Fragment>A2</Fragment>\n          <Fragment>This is body cell B2.</Fragment>\n        </TableRow>\n      </>\n  }\n}",...Defaults.parameters?.docs?.source}}},Stripe.parameters={...Stripe.parameters,docs:{...Stripe.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: ['left', 'right'],\n    header: <Fragment>\n        <Fragment>Column A</Fragment>\n        <Text weight=\"regular\">Column B</Text>\n      </Fragment>,\n    type: 'stripe',\n    children: <>\n        <TableRow>\n          <Text>This is body cell A1.</Text>\n          <Text weight=\"strong\">B1</Text>\n        </TableRow>\n\n        <TableRow>\n          <Fragment>A2</Fragment>\n          <Fragment>This is body cell B2.</Fragment>\n        </TableRow>\n      </>\n  }\n}",...Stripe.parameters?.docs?.source}}},Subtle.parameters={...Subtle.parameters,docs:{...Subtle.parameters?.docs,source:{originalSource:"{\n  args: {\n    header: ['Column A', 'Column B'],\n    type: 'subtle',\n    children: <>\n        <TableRow>\n          <Fragment>This is body cell A1.</Fragment>\n          <Fragment>B1</Fragment>\n        </TableRow>\n\n        <TableRow>\n          <Fragment>A2</Fragment>\n          <Fragment>This is body cell B2.</Fragment>\n        </TableRow>\n      </>\n  }\n}",...Subtle.parameters?.docs?.source}}}}}]);