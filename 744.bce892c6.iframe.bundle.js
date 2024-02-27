"use strict";(self.webpackChunkscoobie=self.webpackChunkscoobie||[]).push([[744],{"./src/components/CodeBlock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>CodeBlock});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),Stack=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Stack/Stack.mjs"),Text=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),TextLinkButton=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/TextLinkButton/TextLinkButton.mjs"),main=__webpack_require__("./node_modules/jsonc-parser/lib/esm/main.js"),dist=__webpack_require__("./node_modules/prism-react-renderer/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),ScrollableInline=__webpack_require__("./src/private/ScrollableInline.tsx"),private_size=__webpack_require__("./src/private/size.ts"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),bash=__webpack_require__("./node_modules/refractor/lang/bash.js"),bash_default=__webpack_require__.n(bash),csharp=__webpack_require__("./node_modules/refractor/lang/csharp.js"),csharp_default=__webpack_require__.n(csharp),diff=__webpack_require__("./node_modules/refractor/lang/diff.js"),diff_default=__webpack_require__.n(diff),http=__webpack_require__("./node_modules/refractor/lang/http.js"),http_default=__webpack_require__.n(http),json=__webpack_require__("./node_modules/refractor/lang/json.js"),json_default=__webpack_require__.n(json),splunk_spl=__webpack_require__("./node_modules/refractor/lang/splunk-spl.js"),splunk_spl_default=__webpack_require__.n(splunk_spl);bash_default()(dist.sp),csharp_default()(dist.sp),diff_default()(dist.sp),http_default()(dist.sp),splunk_spl_default()(dist.sp),json_default()(dist.sp);var DISPLAY_LANGUAGE_REPLACEMENTS={"splunk-spl":"Splunk SPL",csharp:"C#",fsharp:"C#",graphql:"GraphQL",html:"HTML",http:"HTTP",javascript:"JavaScript",json:"JSON",jsx:"JSX",php:"PHP",sql:"SQL",toml:"TOML",tsx:"TSX",typescript:"TypeScript",yaml:"YAML"},PRISM_LANGUAGE_REPLACEMENTS={"c#":"csharp",cs:"csharp",dotnet:"csharp",gql:"graphql",js:"javascript",jsonc:"json",md:"markdown",sh:"bash",shell:"bash",splunk:"splunk-spl",ts:"typescript",vb:"visual-basic",vba:"visual-basic",yml:"yaml"},prismLanguage=function prismLanguage(language){var _PRISM_LANGUAGE_REPLA,lower=(null!=language?language:"text").toLocaleLowerCase();return null!==(_PRISM_LANGUAGE_REPLA=PRISM_LANGUAGE_REPLACEMENTS[lower])&&void 0!==_PRISM_LANGUAGE_REPLA?_PRISM_LANGUAGE_REPLA:lower};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var withLabels=function withLabels(children,labels){return children.map((function(child,index){return _objectSpread(_objectSpread({},child),{},{label:labels[index]})}))},inferGraphQLOperationType=function inferGraphQLOperationType(_ref){var code=_ref.code;return code.startsWith("mutation")?"Mutation":code.startsWith("subscription")?"Subscription":"Query"},labeller=function createLabeller(fallback){for(var _len=arguments.length,matchers=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)matchers[_key-1]=arguments[_key];return function(children){if(children.some((function(child){return child.label})))return fallback(children);for(var actualLanguages=JSON.stringify(children.map((function(child){return child.language}))),_i=0,_matchers=matchers;_i<_matchers.length;_i++){var _matchers$_i=_matchers[_i],languages=_matchers$_i.languages,labels=_matchers$_i.labels;if(JSON.stringify(languages)===actualLanguages)return labels(children)}return fallback(children)}}((function determineUniqueLabels(rawChildren){var children=withLabels(rawChildren,rawChildren.map((function(child){var _child$label;return null!==(_child$label=child.label)&&void 0!==_child$label?_child$label:function displayLanguage(language){var _DISPLAY_LANGUAGE_REP,prism=prismLanguage(language);return null!==(_DISPLAY_LANGUAGE_REP=DISPLAY_LANGUAGE_REPLACEMENTS[prism])&&void 0!==_DISPLAY_LANGUAGE_REP?_DISPLAY_LANGUAGE_REP:function titleCase(kebabcased){return kebabcased.split("-").map((function(segment){return segment?"".concat(segment[0].toLocaleUpperCase()).concat(segment.slice(1)):segment})).join(" ")}(prism)}(child.language)}))),originalLabelCounts=children.reduce((function(map,child){var _map$get;return map.set(child.label,(null!==(_map$get=map.get(child.label))&&void 0!==_map$get?_map$get:0)+1),map}),new Map),usedLabels=new Set;return children.map((function(child){for(var label=child.label;usedLabels.has(label)||(null!==(_originalLabelCounts$=originalLabelCounts.get(label))&&void 0!==_originalLabelCounts$?_originalLabelCounts$:0)>1;){var _originalLabelCounts$,_label$match,increment=null===(_label$match=label.match(/ (\d+)$/))||void 0===_label$match?void 0:_label$match[1];label=increment?label.replace(/\d+$/,String(Number(increment)+1)):"".concat(label," 1")}return usedLabels.add(label),label}))}),{languages:["graphql","json","json"],labels:function labels(_ref2){var child=(0,slicedToArray.c)(_ref2,1)[0];return[inferGraphQLOperationType(child),"Variables","Result"]}},{languages:["graphql","json"],labels:function labels(_ref4){var child=(0,slicedToArray.c)(_ref4,1)[0];return[inferGraphQLOperationType(child),"Variables"]}},{languages:["http","http"],labels:function labels(){return["Request","Response"]}}),normaliseChildren=function normaliseChildren(rawChildren,trim){var children=rawChildren.map((function(child){return{code:trim?child.code.trim():child.code,label:child.label,language:prismLanguage(child.language)}})),labels=labeller(children);return withLabels(children,labels)};try{normaliseChildren.displayName="normaliseChildren",normaliseChildren.__docgenInfo={description:"Normalise code nodes with the following operations:\n\n- Trim code whitespace\n- Map language to Prism value\n- Infer label based on language(s)\n- Ensure label uniqueness",displayName:"normaliseChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeBlock/CodeChild.tsx#normaliseChildren"]={docgenInfo:normaliseChildren.__docgenInfo,name:"normaliseChildren",path:"src/components/CodeBlock/CodeChild.tsx#normaliseChildren"})}catch(__react_docgen_typescript_loader_error){}var _IconVideo,TextLink=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.mjs"),IconVideo=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconVideo/IconVideo.mjs"),GraphQLPlaygroundAction=function GraphQLPlaygroundAction(_ref){var query=_ref.query,variables=_ref.variables,graphqlPlayground=_ref.graphqlPlayground,size=_ref.size,playgroundUrl=new URL(graphqlPlayground);playgroundUrl.searchParams.set("query",query),playgroundUrl.searchParams.set("variables",null!=variables?variables:"{}");var href=playgroundUrl.toString(),smallerSize=private_size.K6[size];return(0,jsx.c)(Text.a,{size:smallerSize,weight:"medium"},void 0,(0,jsx.c)(TextLink.cf,{href,icon:_IconVideo||(_IconVideo=(0,jsx.c)(IconVideo.O,{alignY:"lowercase"})),rel:"noreferrer",target:"_blank"},void 0,"GraphQL Explorer"))};try{GraphQLPlaygroundAction.displayName="GraphQLPlaygroundAction",GraphQLPlaygroundAction.__docgenInfo={description:"",displayName:"GraphQLPlaygroundAction",props:{query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"string"}},variables:{defaultValue:null,description:"",name:"variables",required:!0,type:{name:"string | undefined"}},graphqlPlayground:{defaultValue:null,description:"",name:"graphqlPlayground",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeBlock/GraphQLPlaygroundAction.tsx#GraphQLPlaygroundAction"]={docgenInfo:GraphQLPlaygroundAction.__docgenInfo,name:"GraphQLPlaygroundAction",path:"src/components/CodeBlock/GraphQLPlaygroundAction.tsx#GraphQLPlaygroundAction"})}catch(__react_docgen_typescript_loader_error){}var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),code={standard:"yp6glf0",large:"yp6glf1"},LineNumbers=function LineNumbers(_ref){var count=_ref.count,size=_ref.size,numbers=(0,toConsumableArray.c)(new Array(count)).map((function(_,index){return index+1}));return(0,jsx.c)(Box.s,{"aria-hidden":!0,className:"_4jbh580",padding:"medium"},void 0,(0,jsx.c)(Stack.y,{align:"right",space:"small"},void 0,numbers.map((function(number){return(0,jsx.c)(Box.s,{className:code[size]},number,(0,jsx.c)(Box.s,{component:"pre"},void 0,number))}))))};try{LineNumbers.displayName="LineNumbers",LineNumbers.__docgenInfo={description:"",displayName:"LineNumbers",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeBlock/LineNumbers.tsx#LineNumbers"]={docgenInfo:LineNumbers.__docgenInfo,name:"LineNumbers",path:"src/components/CodeBlock/LineNumbers.tsx#LineNumbers"})}catch(__react_docgen_typescript_loader_error){}function Lines_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Lines_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Lines_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.c)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lines_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Lines=function Lines(_ref){var getTokenProps=_ref.getTokenProps,lines=_ref.lines,size=_ref.size;return(0,jsx.c)(Box.s,{padding:"medium"},void 0,(0,jsx.c)(Stack.y,{space:"small"},void 0,lines.map((function(line,lineIndex){return(0,jsx.c)(Box.s,{className:code[size]},lineIndex,(0,jsx.c)(Box.s,{component:"pre"},void 0,line.map((function(token,tokenIndex){var props=getTokenProps({token});return(0,react.createElement)(Box.s,Lines_objectSpread(Lines_objectSpread({component:"span"},props),{},{key:tokenIndex}))}))))}))))};try{Lines.displayName="Lines",Lines.__docgenInfo={description:"",displayName:"Lines",props:{getTokenProps:{defaultValue:null,description:"",name:"getTokenProps",required:!0,type:{name:"(input: TokenInputProps) => TokenOutputProps"}},lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"Token[][]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeBlock/Lines.tsx#Lines"]={docgenInfo:Lines.__docgenInfo,name:"Lines",path:"src/components/CodeBlock/Lines.tsx#Lines"})}catch(__react_docgen_typescript_loader_error){}var CopyableText=__webpack_require__("./src/components/CopyableText.tsx"),CodeBlock=function CodeBlock(_ref){var _children$,rawChildren=_ref.children,rawLabel=_ref.label,rawLanguage=_ref.language,graphqlPlayground=_ref.graphqlPlayground,_ref$size=_ref.size,size=void 0===_ref$size?private_size.QD:_ref$size,_ref$trim=_ref.trim,children=normaliseChildren("string"==typeof rawChildren?[{code:rawChildren,label:rawLabel,language:rawLanguage}]:rawChildren,void 0===_ref$trim||_ref$trim),smallerSize=private_size.K6[size],tablePadding=private_size.y2[size],_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.c)(_useState,2),index=_useState2[0],setIndex=_useState2[1],child=children[index],jsoncVariables="graphql"===children[0].language&&"Variables"===(null===(_children$=children[1])||void 0===_children$?void 0:_children$.label)?children[1].code:void 0,variables=jsoncVariables&&JSON.stringify((0,main.K0)(jsoncVariables),null,2),graphqlPlaygroundButton="graphql"===children[0].language&&graphqlPlayground?(0,jsx.c)(Box.s,{component:"span",paddingLeft:tablePadding},void 0,(0,jsx.c)(GraphQLPlaygroundAction,{graphqlPlayground,size,query:children[0].code,variables})):void 0;return(0,jsx.c)(Stack.y,{space:tablePadding},void 0,(0,jsx.c)(ScrollableInline._,{whiteSpace:"nowrap"},void 0,(0,jsx.c)(Box.s,{display:"flex",justifyContent:"spaceBetween"},void 0,(0,jsx.c)(Box.s,{display:"flex"},void 0,children.map((function(_ref2,labelIndex){var label=_ref2.label;return(0,jsx.c)(Box.s,{component:"span",paddingLeft:0===labelIndex?void 0:tablePadding},label,(0,jsx.c)(Text.a,{size:smallerSize,tone:index===labelIndex?"secondary":void 0,weight:"medium"},void 0,1===children.length||index===labelIndex?label:(0,jsx.c)(TextLinkButton.x,{onClick:function onClick(){return setIndex(labelIndex)}},void 0,label)))}))),(0,jsx.c)(Box.s,{display:"flex"},void 0,(0,jsx.c)(Box.s,{component:"span",paddingLeft:tablePadding},void 0,(0,jsx.c)(CopyableText.Q,{size:smallerSize},void 0,child.code)),graphqlPlaygroundButton))),(0,jsx.c)(Box.s,{borderRadius:"large",className:"_4jbh581 _4jbh582"},void 0,(0,jsx.c)(dist.gl,{prism:dist.sp,code:child.code,language:child.language,theme:dist.ys.github},void 0,(function(_ref3){var getTokenProps=_ref3.getTokenProps,tokens=_ref3.tokens;return(0,jsx.c)(Box.s,{display:"flex"},void 0,(0,jsx.c)(LineNumbers,{count:tokens.length,size}),(0,jsx.c)(Lines,{getTokenProps,lines:tokens,size}))}))))};try{CodeBlock.displayName="CodeBlock",CodeBlock.__docgenInfo={description:"",displayName:"CodeBlock",props:{graphqlPlayground:{defaultValue:null,description:"",name:"graphqlPlayground",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},language:{defaultValue:null,description:"",name:"language",required:!1,type:{name:"string"}},size:{defaultValue:{value:"standard"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"large"'}]}},trim:{defaultValue:{value:"true"},description:"",name:"trim",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CodeBlock.tsx#CodeBlock"]={docgenInfo:CodeBlock.__docgenInfo,name:"CodeBlock",path:"src/components/CodeBlock.tsx#CodeBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CopyableText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>CopyableText});var _IconTick,_IconCopy,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),braid_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconTick/IconTick.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/icons/IconCopy/IconCopy.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Text/Text.mjs"),braid_design_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/TextLinkButton/TextLinkButton.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),CopyableText=function CopyableText(_ref){var children=_ref.children,_ref$copiedIcon=_ref.copiedIcon,copiedIcon=void 0===_ref$copiedIcon?_IconTick||(_IconTick=(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_2__.c)(braid_design_system__WEBPACK_IMPORTED_MODULE_3__.Q,{alignY:"lowercase"})):_ref$copiedIcon,_ref$copiedLabel=_ref.copiedLabel,copiedLabel=void 0===_ref$copiedLabel?"Copied":_ref$copiedLabel,_ref$copyIcon=_ref.copyIcon,copyIcon=void 0===_ref$copyIcon?_IconCopy||(_IconCopy=(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_2__.c)(braid_design_system__WEBPACK_IMPORTED_MODULE_4__.Q,{alignY:"lowercase"})):_ref$copyIcon,_ref$copyLabel=_ref.copyLabel,copyLabel=void 0===_ref$copyLabel?"Copy":_ref$copyLabel,size=_ref.size,_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.c)(_useState,2),copied=_useState2[0],setCopied=_useState2[1],copyText=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__.c)(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!copied){_context.next=2;break}return _context.abrupt("return");case 2:return setCopied(!0),_context.next=5,navigator.clipboard.writeText(children);case 5:setTimeout((function(){return setCopied(!1)}),2e3);case 6:case"end":return _context.stop()}}),_callee)}))),[children,copied]);return copied?(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_2__.c)(braid_design_system__WEBPACK_IMPORTED_MODULE_7__.a,{icon:copiedIcon||void 0,size,tone:"positive",weight:"medium"},void 0,copiedLabel):(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_2__.c)(braid_design_system__WEBPACK_IMPORTED_MODULE_7__.a,{size,weight:"medium"},void 0,(0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_2__.c)(braid_design_system__WEBPACK_IMPORTED_MODULE_8__.x,{icon:copyIcon||void 0,onClick:copyText},void 0,copyLabel))};try{CopyableText.displayName="CopyableText",CopyableText.__docgenInfo={description:"",displayName:"CopyableText",props:{copiedIcon:{defaultValue:{value:'<IconTick alignY="lowercase" />'},description:"",name:"copiedIcon",required:!1,type:{name:"false | ReactElement<UseIconProps, string | JSXElementConstructor<any>>"}},copiedLabel:{defaultValue:{value:"Copied"},description:"",name:"copiedLabel",required:!1,type:{name:"ReactNode"}},copyIcon:{defaultValue:{value:'<IconCopy alignY="lowercase" />'},description:"",name:"copyIcon",required:!1,type:{name:"false | ReactElement<UseIconProps, string | JSXElementConstructor<any>>"}},copyLabel:{defaultValue:{value:"Copy"},description:"",name:"copyLabel",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"large"'},{value:'"xsmall"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CopyableText.tsx#CopyableText"]={docgenInfo:CopyableText.__docgenInfo,name:"CopyableText",path:"src/components/CopyableText.tsx#CopyableText"})}catch(__react_docgen_typescript_loader_error){}},"./src/private/ScrollableInline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>ScrollableInline});var jsx=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/jsx.js"),Bleed=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Bleed/Bleed.mjs"),Box=__webpack_require__("./node_modules/braid-design-system/dist/lib/components/Box/Box.mjs"),ScrollableInline_css_whiteSpace=(__webpack_require__("./node_modules/react/index.js"),{undefined:"_1ctb8tl2",nowrap:"_1ctb8tl3"}),ScrollableInline=function ScrollableInline(_ref){var children=_ref.children,whiteSpace=_ref.whiteSpace;return(0,jsx.c)(Bleed.U,{vertical:"small"},void 0,(0,jsx.c)(Box.s,{className:["_1ctb8tl1",ScrollableInline_css_whiteSpace[null!=whiteSpace?whiteSpace:"undefined"]],paddingY:"small",width:"full"},void 0,children))};try{ScrollableInline.displayName="ScrollableInline",ScrollableInline.__docgenInfo={description:"",displayName:"ScrollableInline",props:{whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"nowrap"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/private/ScrollableInline.tsx#ScrollableInline"]={docgenInfo:ScrollableInline.__docgenInfo,name:"ScrollableInline",path:"src/private/ScrollableInline.tsx#ScrollableInline"})}catch(__react_docgen_typescript_loader_error){}},"./src/private/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K6:()=>SIZE_TO_SMALLER,QD:()=>DEFAULT_SIZE,w5:()=>SIZES,wn:()=>SIZE_TO_SPACE,y2:()=>SIZE_TO_TABLE_PADDING});var DEFAULT_SIZE="standard",SIZES=["standard","large"],SIZE_TO_SMALLER={standard:"small",large:"standard"},SIZE_TO_TABLE_PADDING={standard:"small",large:"medium"},SIZE_TO_SPACE={standard:"medium",large:"large"}},'node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Divider/Divider.css.mjs.vanilla.css","source":"Ll8xNXhmZG5oMCB7CiAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkeSk7Cn0KLl8xNXhmZG5oMyB7CiAgYmFja2dyb3VuZDogdmFyKC0tXzE1eGZkbmgxKTsKfQouXzE1eGZkbmg0IHsKICBiYWNrZ3JvdW5kOiB2YXIoLS1fMTV4ZmRuaDIpOwp9Cmh0bWw6bm90KC5fMXQ0NmtzZ3opIC5fMTV4ZmRuaDUgewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkdCk7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGRyKTsKfQpodG1sOm5vdCguXzF0NDZrc2d6KSAuXzE1eGZkbmg2IHsKICAtLV8xNXhmZG5oMTogdmFyKC0tXzZlMnd4ZHIpOwogIC0tXzE1eGZkbmgyOiB2YXIoLS1fNmUyd3hkdCk7Cn0KaHRtbC5fMXQ0NmtzZ3ogLl8xNXhmZG5oNyB7CiAgLS1fMTV4ZmRuaDE6IHZhcigtLV82ZTJ3eGR0KTsKICAtLV8xNXhmZG5oMjogdmFyKC0tXzZlMnd4ZHIpOwp9Cmh0bWwuXzF0NDZrc2d6IC5fMTV4ZmRuaDggewogIC0tXzE1eGZkbmgxOiB2YXIoLS1fNmUyd3hkcik7CiAgLS1fMTV4ZmRuaDI6IHZhcigtLV82ZTJ3eGR0KTsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/Hidden/Hidden.css.mjs.vanilla.css","source":"QG1lZGlhIHByaW50IHsKICAuaXZxNm9wMCB7CiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7CiAgfQp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/TextLink/TextLink.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62SwW6DMBBE73yFj+FgBCRQYj4mArzELmBXtqEoUf+9StM6cUoKlbgu45m3wwaHaF/GTZbE6OwhVMlWKoKGQm0w/vkU+rmHkIHRYAqVVIXhUlhRCvH7SJN6SoQN41UjQGuCwiDMoLOiXlBQLReAZV1rMARt38bc+/ACS0SYHEA954qmuazzQiAnspZVr/HANS9bmIuWvbnkPFQRhT7SsuXUHXf3T+zSYRBfSymloqCwKijv9YNj6TuU2y+uu/9DEBcMFDe5M4+c+Qo9MdO1REizCQ6R2aWNPp58ZLF2v7HcXq4n4vC5gqM/n5LMpbC5FGZTbgE3/3TFLab8X1bkf95SRi4nbIBOnPC3DV9gs5+3ef1z2+I/HFMG5UKCT8PJTaTIBAAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/AvoidWidowIcon/AvoidWidowIcon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/AvoidWidowIcon/AvoidWidowIcon.css.mjs.vanilla.css","source":"Ll8xbXdobzJzMCB7CiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/MaxLines/MaxLines.css.mjs.vanilla.css","source":"Ll8xaTFxam5hMCB7CiAgbWFyZ2luLWJvdHRvbTogLTAuMWVtOwp9Ci5fMWkxcWpuYTIgewogIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLl8xaTFxam5hMCAuXzFpMXFqbmEyIHsKICBwYWRkaW5nLWJvdHRvbTogMC4xZW07Cn0KQHN1cHBvcnRzIChkaXNwbGF5OiAtd2Via2l0LWJveCkgYW5kICgtd2Via2l0LWxpbmUtY2xhbXA6IDEpIHsKICAuXzFpMXFqbmE0IHsKICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOwogICAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHZhcigtLV8xaTFxam5hMyk7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/components/private/touchable/virtualTouchable.css.mjs.vanilla.css","source":"LnEwdGFrZDAgewogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoucTB0YWtkMDphZnRlciB7CiAgY29udGVudDogIiI7CiAgcG9zaXRpb246IGFic29sdXRlOwogIGxlZnQ6IC0xMHB4OwogIHJpZ2h0OiAtMTBweDsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7CiAgbWluLWhlaWdodDogNDRweDsKICBtaW4td2lkdGg6IDQ0cHg7CiAgaGVpZ2h0OiAxMDAlOwogIHRvcDogNTAlOwp9Ci5xMHRha2QxOmFmdGVyIHsKICBsZWZ0OiAwICFpbXBvcnRhbnQ7CiAgcmlnaHQ6IDAgIWltcG9ydGFudDsKfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/lineHeightContainer.css.mjs.vanilla.css","source":"Ll8zdWx3bXkwIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzMyk7Cn0KLl8zdWx3bXkxIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzZCk7Cn0KLl8zdWx3bXkyIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzbik7Cn0KLl8zdWx3bXkzIHsKICBoZWlnaHQ6IHZhcigtLV82ZTJ3eGQzeCk7Cn0KQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzQwcHgpIHsKICAuXzN1bHdteTAgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkMzgpOwogIH0KICAuXzN1bHdteTEgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM2kpOwogIH0KICAuXzN1bHdteTIgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkM3MpOwogIH0KICAuXzN1bHdteTMgewogICAgaGVpZ2h0OiB2YXIoLS1fNmUyd3hkNDIpOwogIH0KfQ=="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/css/negativeMargin/negativeMargin.css.mjs.vanilla.css","source":"#H4sIAAAAAAAAA62Yy27iQBBF93yFlVUyEpGrusFANvMnkfEDDMYYY56j/PtIUWaEoSqpkmvf91hqHclH/foOcDzVizqczeZZvm2y4M8gCJJt1WZVOwuent4GQZAW+7qML7Ogjedl9jb4GLz+28FsFudt1ihn2PncJm4WRTWcb9t2u5kFSVwmz8e4eR4O38cZns5p+BL8Cobw0mE4HQMohtcxkGKMdAxHMcY6hqcYkY4xohgTHWNMMaY6RkQxYh1jQjHm3zHCrsXjW42/jrbbWuwiRHIAKSJM5ADSQpjKAaSCEMsBpH8wlwNI+SCRA0jzIJUDSO0gkwNI5yDnAF3hML49UGZ5K1YN55IpKRkmkimpF6aSKSkWZpIpqRTmkikpEy4kU1IjXEqmpEBYSKakOrh6nHalcZ2LbIrFUm6Ny0VbUhu3EG1Jb9xStCXFcYVoS5rjVqItqY5bi7akO64UbUl53Ea0Je1xFbH91Of3JkuLONgnTZZVQVylwfOmqIanIm2XsyDyYX1++dz+ZyWdH6cqz4Lg45aUaknAkTItCTlSriU5jrTQkjxHWmpJI45UaEljjrTSkiKOtNaSJhyp/J4UPgxgcfs/lqfdPWapwbASQ6HBsAbDSoNh9YW1BsO6C6UGw4oLGw2GtRYqDYZVFrYaDOsr1DzmUVZcd4/9nIX3gFIGYAXFjQzAqomVDMBKiVsZgNURaxmAFRF3MgCrIDYyACsf7mUAVjtsKcCjcO7usgVJeU+ohQRWObcTEljnXCMksNK5vZDAWudaIYHVzh2EBNY7dxQSWPHcSUhgzXNnkvCl3k8xOp3iQ4xuzGK0MovRrVmM1mYxujOL0cYsRvdmMdqaxejBLEaP6hjd2cRoYxOje5sYbW1i9GATo0ebGD3ZxOjZJkYvNjF6VcXogWoITYweZQA+Rk8yAB+jZxmAj9FL3xi99oxRF/aMUQc9Y9Rhzxh1ThijFzIdNDF6FRJY5XwoJLDOeRASWOk8Cgmsdd4JCax23veNUT/qG6N+3DdGfdQnRgHDx6fRk1mNns1q9GJWo1ezGoXQLEcBzHoU0CxIwZkVKXizJIWRtkkxNGlSBJMmRTRpUnQmTYrepElxZNKkODZpUoxMmhQnJk2KU02TOk+lhKYQRjIA/1o1lgH4x6pIBuDfqiY9m9RN+zZp3LdJ532bNOnbpKmsSf2ELAiFcX4qJPBNGgsJfJPOhQS+SRMhgW/SVEjgmzQTEvgmzXs36aJ3ky6/bdK/J43eXJApAAA="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{},'node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"node_modules/braid-design-system/dist/lib/hooks/useIcon/icon.css.mjs.vanilla.css","source":"Ll8xeW9qcXRtMCB7CiAgd2lkdGg6IDEuMmVtOwogIGhlaWdodDogMS4yZW07Cn0KLl8xeW9qcXRtMSB7CiAgbWFyZ2luOiAtMC4xZW07Cn0KLl8xeW9qcXRtMiB7CiAgbWFyZ2luLXRvcDogLTAuMmVtOwogIG1hcmdpbi1ib3R0b206IC0wLjJlbTsKfQouXzF5b2pxdG0zIHsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5fMXlvanF0bTQgewogIHRvcDogLTAuMTA1ZW07Cn0KLl8xeW9qcXRtNSB7CiAgdG9wOiAtMC4xNjQ5OTk5OTk5OTk5OTk5OGVtOwp9Ci5fMXlvanF0bTYgewogIHRvcDogLTAuMDQ1ZW07Cn0KLl8xeW9qcXRtNyB7CiAgdG9wOiAtMC4wNjVlbTsKfQouXzF5b2pxdG04IHsKICB0b3A6IC0wLjEyNWVtOwp9Ci5fMXlvanF0bTkgewogIHRvcDogLTAuMDA1MDAwMDAwMDAwMDAwMDA0NGVtOwp9Ci5fMXlvanF0bWEgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkMzMpOwp9Ci5fMXlvanF0bWIgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM2QpOwp9Ci5fMXlvanF0bWMgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM24pOwp9Ci5fMXlvanF0bWQgewogIHdpZHRoOiB2YXIoLS1fNmUyd3hkM3gpOwp9CkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc0MHB4KSB7CiAgLl8xeW9qcXRtYSB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDM4KTsKICB9CiAgLl8xeW9qcXRtYiB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNpKTsKICB9CiAgLl8xeW9qcXRtYyB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDNzKTsKICB9CiAgLl8xeW9qcXRtZCB7CiAgICB3aWR0aDogdmFyKC0tXzZlMnd4ZDQyKTsKICB9Cn0="}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js':()=>{}}]);