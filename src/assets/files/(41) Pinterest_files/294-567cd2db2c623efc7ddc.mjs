(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[294],{"7vSn":function(e,t,i){},e3KR:function(e,t,i){i.d(t,"c",(function(){return K})),i.d(t,"b",(function(){return Q})),i.d(t,"a",(function(){return $}));var n=i("nKUr"),o=i("q1tI"),r=i("/MKj"),s=(i("7vSn"),i("8cMa")),a=i("s7xj"),c=i("n6mq");const d=({collaborator_count:e,isInWebRepinFlowExp:t,type:i})=>t?Object(n.jsx)(c.e,{marginEnd:e?2:0,children:Object(n.jsx)(s.a,{type:i})}):Object(n.jsx)(s.a,{type:i});var l=({board:e,showCollaborativeIcon:t,showPrivateIcon:i,showProtectedIcon:o,showSectionsIcon:r,isInWebRepinFlowExp:l})=>{var h;const u=(null==e||null===(h=e.collaborating_users)||void 0===h?void 0:h.length)||0;return t||i||o||r?Object(n.jsxs)(c.e,{display:"flex",direction:"row",marginEnd:l?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[i&&Object(n.jsx)(d,{collaborator_count:u,isInWebRepinFlowExp:l,type:"secret"}),o&&Object(n.jsx)(d,{collaborator_count:u,isInWebRepinFlowExp:l,type:"protected"}),t&&(l?Object(n.jsx)(a.a,{board:e,isCompact:!0,ownerOnly:!1}):Object(n.jsx)(s.a,{type:"group"})),r&&Object(n.jsx)(s.a,{type:"sections"})]}):null},h=i("JW66"),u=i("Ye/N"),b=i("4cpq");function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class g extends o.Component{constructor(...e){super(...e),p(this,"state",{hovered:!1}),p(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),p(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),p(this,"handleTouch",()=>{const{board:e,onClick:t}=this.props;t(e)}),p(this,"handleButtonClick",({event:e})=>{const{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),p(this,"tapAreaRef",Object(o.createRef)())}focus(){const e=this.tapAreaRef.current;e&&e.focus()}render(){const{hovered:e}=this.state,{board:t,buttonText:i,isSectionOpen:o,shouldOpenSections:r,showFlyoutSaveButton:s,isInWebRepinFlowExp:a}=this.props,d=!!t.section_count&&t.section_count>0,p=d?"boardWithSection":"boardWithoutSection",g=t.image_cover_url;return Object(n.jsx)(b.a,{id:p,children:Object(n.jsx)(c.V,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,ref:this.tapAreaRef,children:Object(n.jsxs)(c.e,{color:e?"lightGray":"white",display:"flex",alignItems:"center",height:a?64:52,marginStart:a?2:3,marginEnd:a?2:3,marginBottom:a?0:1,marginTop:a?0:1,padding:a?2:0,rounding:3,children:[Object(n.jsxs)(c.e,{flex:"none",marginBottom:a?0:1,marginStart:a?0:2,marginEnd:a?2:3,marginTop:a?0:1,overflow:"hidden",width:a?48:36,height:a?48:36,children:[g&&!r&&Object(n.jsx)(c.C,{rounding:2,wash:!0,width:a?48:36,height:a?48:36,children:Object(n.jsx)(c.x,{src:g,alt:"",naturalHeight:a?48:36,naturalWidth:a?48:36,fit:"cover"})}),g&&r?Object(n.jsx)(c.C,{rounding:2,wash:!0,width:a?48:36,height:a?48:36,children:Object(n.jsx)(c.x,{src:g,alt:"",naturalHeight:a?48:36,naturalWidth:a?48:36,fit:"cover"})}):Object(n.jsx)(c.e,{color:r?"lightGray":"transparent",width:"100%",height:"100%"})]}),Object(n.jsx)(c.e,{flex:"grow",paddingY:1,overflow:"hidden",marginStart:a?0:1,children:Object(n.jsx)(c.W,{truncate:!0,weight:r||!r?"bold":"normal",children:t.name})}),t&&(!e||e&&d&&!o)?Object(n.jsx)(c.e,{children:Object(n.jsx)(l,{board:t,isOpen:t.isOpen,showCollaborativeIcon:!!t.is_collaborative,showPrivateIcon:t.privacy===h.a.BoardPrivacy.SECRET,showProtectedIcon:t.privacy===h.a.BoardPrivacy.PROTECTED,showSectionsIcon:d&&r,isInWebRepinFlowExp:a})}):null,e&&(0===t.section_count||!r)&&s&&Object(n.jsx)(c.e,{marginEnd:a?0:2,flex:"none",children:Object(n.jsx)(c.f,{accessibilityLabel:"save button",color:"red",inline:!0,onClick:this.handleButtonClick,text:i||u.a._("Save","save button","save button")})})]})})})}}p(g,"defaultProps",{shouldOpenSections:!0,showFlyoutSaveButton:!0});var j=({image_url:e,naturalHeight:t,naturalWidth:i})=>Object(n.jsx)(c.e,{marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:Object(n.jsx)(c.C,{wash:!0,width:48,height:48,rounding:2,children:Object(n.jsx)(c.x,{src:e,alt:"",naturalHeight:t,naturalWidth:i})})});function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class f extends o.Component{constructor(...e){super(...e),x(this,"state",{hovered:!1}),x(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),x(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),x(this,"handleTouch",()=>{const{board:e,onClick:t,section:i}=this.props;t(i,e)}),x(this,"handleButtonClick",({event:e})=>{const{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),x(this,"tapAreaRef",Object(o.createRef)())}focus(){const e=this.tapAreaRef.current;e&&e.focus()}render(){var e;const{hovered:t}=this.state,{buttonText:i,section:o,showSectionSaveButton:r,isInWebRepinFlowExp:s}=this.props;return Object(n.jsx)(c.V,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,ref:this.tapAreaRef,children:Object(n.jsxs)(c.e,{color:t?"lightGray":"white",display:"flex",alignItems:"center",height:s?64:52,marginStart:s?2:0,marginEnd:s?2:0,padding:s?2:0,marginTop:s?0:1,rounding:3,dangerouslySetInlineStyle:{__style:s?{}:{marginLeft:53,marginRight:11}},children:[s&&!(null===(e=o.preview_pins)||void 0===e||!e.length)&&Object(n.jsx)(j,{image_url:o.preview_pins[0].image_square_url,naturalHeight:o.preview_pins[0].image_square_size_pixels.height,naturalWidth:o.preview_pins[0].image_square_size_pixels.width}),Object(n.jsx)(c.e,{flex:"grow",paddingY:1,marginStart:s?0:4,children:Object(n.jsx)(c.W,{truncate:!0,weight:s?"bold":"normal",children:o.title})}),t&&r&&Object(n.jsx)(c.e,{marginEnd:s?0:2,flex:"none",children:Object(n.jsx)(c.f,{accessibilityLabel:"save button",color:"red",inline:!0,text:i||u.a._("Save","save button","save button"),onClick:this.handleButtonClick})})]})})}}x(f,"defaultProps",{showSectionSaveButton:!0});var O=i("w70y");var m=Object(O.b)({name:"BoardSectionsRepinResource",key:"sectionsResource",options:e=>({board_id:e.board.id}),allowStale:!1})(e=>{const{board:t,buttonText:i,sectionsResource:o,onClick:r,onButtonClick:s,showSectionSaveButton:a,isInWebRepinFlowExp:d}=e,l=o&&o.data||[];return Object(n.jsxs)(c.e,{children:[!o.isLoaded&&Object(n.jsx)(c.e,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:200,children:Object(n.jsx)(c.P,{accessibilityLabel:u.a._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})}),o.isLoaded&&Object(n.jsxs)(c.e,{children:[d&&Object(n.jsx)(c.e,{marginStart:4,marginTop:2,paddingY:1,children:Object(n.jsx)(c.W,{size:"sm",children:u.a._("Section","PinBetterSave.BoardFlyout.SectionPlaceholderText","section list title")})}),l.map(e=>Object(n.jsx)(f,{board:t,buttonText:i,onButtonClick:s,onClick:r,section:e,showSectionSaveButton:a,isInWebRepinFlowExp:d},e.id))]})]})});function w({isBoardCreate:e,onCreateBoardClick:t,isInWebRepinFlowExp:i}){const[r,s]=Object(o.useState)(!1);return Object(n.jsx)(c.e,{"data-test-id":"create-board",height:"100%",display:"flex",children:Object(n.jsx)(c.V,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onTap:t,rounding:2,children:Object(n.jsxs)(c.e,{display:"flex",alignItems:"center",padding:i?4:2,color:r?"lightGray":"white",width:"100%",height:"100%",children:[Object(n.jsx)(c.e,{rounding:i?2:0,dangerouslySetInlineStyle:{__style:i?{padding:"14px"}:{}},marginStart:i?0:4,marginEnd:i?2:5,color:i?"lightGray":"transparent",children:Object(n.jsx)(c.v,{accessibilityLabel:"Add a board",size:i?20:28,icon:i?"add":"add-circle",color:i?"darkGray":"red"})}),e?Object(n.jsx)(c.W,{align:"center",truncate:!0,weight:"bold",children:u.a._("Create board")}):Object(n.jsx)(c.W,{align:"center",truncate:!0,weight:"bold",children:u.a._("Create section")})]})})})}var y=i("nKlH"),S=i("eOdZ"),v=i("3DIk");function B({onClick:e,title:t,showIcon:i}){const[r,s]=Object(o.useState)(!1);return Object(n.jsx)(c.V,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onTap:()=>{e({title:t})},children:Object(n.jsxs)(c.e,{color:r?"lightGray":"white",display:"flex",alignItems:"center",height:i?64:52,marginStart:3,marginEnd:3,marginBottom:1,rounding:3,children:[Object(n.jsx)(c.e,{flex:"none",marginBottom:1,marginStart:i?1:2,marginEnd:3,marginTop:1,overflow:"hidden",width:i?48:36,height:i?48:36,rounding:i?2:1,children:Object(n.jsx)(c.e,{color:"lightGray",width:"100%",height:"100%",display:i?"flex":void 0,alignItems:i?"center":void 0,justifyContent:i?"center":void 0,children:i&&Object(n.jsx)(c.v,{icon:"add",color:"darkGray",size:20,accessibilityLabel:u.a._("Create board icon","BoardSuggestionRow.AccessibilityLabel.Text","accessibility label text form add icon")})})}),Object(n.jsx)(c.e,{flex:"grow",paddingY:1,children:Object(n.jsx)(c.W,{truncate:!0,weight:"bold",children:t})}),r&&Object(n.jsx)(c.e,{marginEnd:2,children:Object(n.jsx)(c.f,{accessibilityLabel:"create button",color:"red",inline:!0,text:u.a._("Create","create button to create a new board","create button to create a new board")})})]})})}const _=e=>{const{suggestionsResource:t,onClick:i,pinBuilderSuggestions:r,inWebRepinFlowExp:s}=e,a=r||t&&t.data||[],d=Object(n.jsxs)(o.Fragment,{children:[s&&Object(n.jsx)(c.e,{marginStart:4,marginTop:2,paddingY:1,children:Object(n.jsx)(c.W,{size:"sm",children:u.a._("Suggestions","PinBetterSave.BoardFlyout.SectionPlaceholderText","section list title")})}),a.map((e,t)=>Object(n.jsx)(B,{title:e.title,onClick:i,showIcon:s},t))]});return Object(n.jsx)(o.Fragment,{children:a?d:Object(n.jsx)(c.e,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:200,children:Object(n.jsx)(c.P,{accessibilityLabel:u.a._("loading board suggestions","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})})})};var C=i("0BOE"),R=i("eUcp"),k=i("Wer7"),I=i("qyR9"),E=i("r8eU"),L=i("U4JR"),W=i("QAzJ"),T=i("pLLR"),P=i("seP0"),F=i("ANjH");function H(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const A=e=>"enabled_no_searchbar"===e?354:290,M=e=>e?498:439,q=360,U=e=>e?80:52;class z extends o.PureComponent{constructor(...e){var t;super(...e),t=this,H(this,"state",{boardSuggestions:[],isSectionOpen:null,selectedBoardId:"",selectedBoardCategory:"",searchQuery:"",searchBoxFocused:!0}),H(this,"getItems",e=>{const{boardResource:t,suggestedBoardsShortListResource:i,displayShortlistMostRecentBoard:n}=this.props;if(!t||!t.data)return[];const{all_boards:o,boards_shortlist:r}=t&&t.data,s=o.filter(e=>!this.props.advertiser_id||"secret"!==e.privacy).map(e=>this.mapBoards(e,"allBoards",0)),a=n?r.map((e,t)=>this.mapBoards(e,"shortlist",t+1)):(i&&i.data||[]).map((e,t)=>this.mapBoards(e,"shortlist",t+1)),{searchQuery:c}=this.state;return c.length>=I.a?[...Object(C.a)(s,c)]:[...o.length>3&&a&&a.length?[{type:"header",title:e?u.a._("Top choices","PinBetterSave.BoardFlyout.TopChoicesSectionTitle","Header for top suggestions in board picker"):u.a._("Top board suggestions","Header for top suggesions in board picker","Header for top suggesions in board picker")},...a]:[],{type:"header",title:u.a._("All boards","Header for all boards in board picker","Header for all boards in board picker")},...s,...s.length<=3?[{type:"header",title:u.a._("Suggested board names","Header for suggested boards in board picker","Header for suggested boards in board picker")}]:[]]}),H(this,"mapBoards",(e,t,i)=>{const{setBoardWithSection:n}=this.props,{selectedBoardId:o,selectedBoardCategory:r}=this.state,s=e.id===o&&t===r;return s&&n&&n(e),{...e,category:t,isOpen:s,gridIndex:i}}),H(this,"handleBack",()=>{const{setBoardWithSection:e}=this.props;this.setState({isSectionOpen:!1,selectedBoardId:"",selectedBoardCategory:""}),e&&e(null)}),H(this,"handleSectionClick",(e,t)=>{const{onItemChosen:i}=this.props;Object(L.b)(101,{component:13282,element:36,objectId:t.id,view:91,grid_index:t.gridIndex}),i({boardId:t.id,url:e.slug?`${t.url}${e.slug}/`:t.url,sectionId:e.id,title:e.title||"",imageCoverUrl:t.image_cover_url})}),H(this,"getPinBuilderSuggestions",(async function(){const{pin:e}=t.props;if(e){var i;const n=S.a.create("BoardTitleSuggestionsResource",{pin_id:e.id}),o=await n.callGet({showError:!1},{retries:1});if(null!==(i=o.resource_response)&&void 0!==i&&i.data){const e=o.resource_response.data.map(e=>({title:e.title}))||[];t.setState({boardSuggestions:e})}}})),H(this,"handleBoardWithSectionsClick",e=>{const{selectedBoardId:t,selectedBoardCategory:i}=this.state,n=t===e.id&&i===e.category;this.setState({isSectionOpen:!0,selectedBoardId:n?"":e.id,selectedBoardCategory:n?"":e.category})}),H(this,"handleBoardClick",({board:e,toggleSections:t})=>{const{onItemChosen:i}=this.props;this.setState({searchBoxFocused:!1}),t?this.handleBoardWithSectionsClick({id:e.id,category:e.category}):(Object(L.b)(101,{component:13282,element:36,objectId:e.id,view:91,grid_index:e.gridIndex}),i({boardId:e.id,url:e.url,title:e.name||"",imageCoverUrl:e.image_cover_url}))}),H(this,"handleSearchQueryUpdate",e=>{this.setState(t=>({...t,searchQuery:e}))}),H(this,"boardSectionsHeaderRef",Object(o.createRef)())}componentDidMount(){this.props.boardResource&&this.props.boardResource.isLoaded&&this.setPWTLoadingEnd()}componentDidUpdate(e,t){e.boardResource&&!e.boardResource.isLoaded&&this.props.boardResource&&this.props.boardResource.isLoaded&&this.setPWTLoadingEnd(),this.state.isSectionOpen&&!t.isSectionOpen&&this.boardSectionsHeaderRef.current&&this.boardSectionsHeaderRef.current.focus()}setPWTLoadingEnd(){const{boardResource:e,boardPickerStopwatch:t}=this.props;t&&(!e||e.error?t.error():t.stop())}render(){const{boardResource:e,buttonText:t,customItem:i,onBoardCreate:r,onButtonClick:s,paneWidth:a,showCreateBoardButton:d,showFlyoutSaveButton:l,showSections:h,showSectionSaveButton:p,suggestedBoardsShortListResource:j,useStoryboardStyle:x,requestContext:f,webRepinExpGroup:O,ignoreWebRepinExp:S}=this.props,{boardSuggestions:v,isSectionOpen:B,searchBoxFocused:C,searchQuery:k}=this.state,I=!S&&new E.b(f,"web_repin_flow").enabled(),L=S?"":O;if(!e)return null;const{isLoaded:W,error:T}=e;let P=[];(W&&!T||j&&j.data&&!j.error)&&(P=this.getItems(I));const F=P.filter(e=>e&&"allBoards"===e.category).length;F<=3&&0===v.length&&this.getPinBuilderSuggestions();const H=x?200:322,z=x?214:334,G=null===B?"":"BoardsSlideRight",D=e=>Object(n.jsxs)(o.Fragment,{children:[!I&&Object(n.jsx)(c.o,{}),Object(n.jsx)(c.e,{overflow:"hidden",height:U(I),borderStyle:I&&F>=3&&P.length>1?"shadow":"none",dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:8,borderBottomLeftRadius:8}},children:Object(n.jsx)(w,{onCreateBoardClick:()=>r({title:this.state.searchQuery}),isBoardCreate:e,isInWebRepinFlowExp:I})})]});return Object(n.jsxs)(c.e,{width:"100%",rounding:2,overflow:"hidden",height:x?"100%":M(I),color:"white",zIndex:R.a,children:[W?null:Object(n.jsx)(c.e,{display:"flex",alignItems:"center",justifyContent:"center",width:I?q:a,height:"100%",minHeight:200,children:Object(n.jsx)(c.P,{accessibilityLabel:u.a._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})}),Object(n.jsx)(c.e,{display:"flex",direction:"row",children:W&&Object(n.jsx)("div",{className:B?"BoardsSlideLeft":G,children:Object(n.jsx)(c.e,{position:"relative",children:Object(n.jsxs)(c.e,{display:"flex",direction:"row",width:I?720:2*a,zIndex:new c.q(0),children:[Object(n.jsxs)(c.e,{display:"flex",direction:"column",width:I?q:a,children:[I&&Object(n.jsx)(c.e,{height:64,display:"flex",alignItems:"center",justifyContent:"center",children:Object(n.jsx)(c.W,{align:"center",size:"lg",weight:"bold",children:u.a._("Save to board","PinBetterSave.BoardFlyout.SaveToBoardPlaceholder","flyout header text")})}),"enabled_no_searchbar"!==L&&Object(n.jsx)(c.e,{padding:I?0:3,paddingX:I?4:3,height:I?64:"auto",children:Object(n.jsx)(y.a,{accessibilityLabel:u.a._("Search through your boards","search bar placeholder text","search bar placeholder text"),focused:C,id:"pickerSearchField",onChange:({value:e})=>this.handleSearchQueryUpdate(e),placeholder:u.a._("Search","search bar placeholder text","search bar placeholder text"),value:k})}),Object(n.jsxs)(c.e,{minHeight:I?A(L):H,maxHeight:I?A(L):H,overflow:"scrollY",children:[j&&!j.isLoaded?Object(n.jsx)(b.a,{id:"suggestedBoardsContainer",children:Object(n.jsx)(c.e,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",minHeight:128.5,children:Object(n.jsx)(c.P,{accessibilityLabel:u.a._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})})}):null,i,P.map((e,i)=>"header"===e.type?Object(n.jsx)(c.e,{paddingX:I?4:3,paddingY:1,marginTop:i>0?2:1,children:Object(n.jsx)(c.W,{size:I?"sm":"md",children:e.title})},e.title):Object(n.jsx)(c.e,{children:Object(n.jsx)(g,{board:e,buttonText:t,onClick:e=>{this.handleBoardClick({board:e,toggleSections:h&&!!e.section_count})},onButtonClick:s,shouldOpenSections:h,showFlyoutSaveButton:l,isInWebRepinFlowExp:I})},`${e.category}-${e.id}`)),F<=3&&Object(n.jsx)(_,{onClick:r,pinBuilderSuggestions:v,inWebRepinFlowExp:I})]}),d&&D(!0)]}),Object(n.jsxs)(c.e,{display:"flex",direction:"column",width:I?q:a,marginBottom:I?2:0,children:[Object(n.jsxs)(c.e,{display:"flex",direction:"row",justifyContent:"center",alignContent:"center",alignItems:"center",children:[Object(n.jsx)(c.l,{span:2,children:Object(n.jsx)(c.e,{display:"flex",justifyContent:"start",alignContent:"center",alignItems:"center",marginStart:3,children:Object(n.jsx)(c.w,{accessibilityLabel:"Back button",icon:"arrow-back",iconColor:"darkGray",onClick:this.handleBack,size:"sm"})})}),Object(n.jsx)(c.l,{span:8,children:Object(n.jsx)(c.e,{display:"flex",justifyContent:"center",alignItems:"center",height:I?64:52,children:Object(n.jsx)(c.W,{weight:"bold",children:I?u.a._("Save Pin to","PinBetterSave.BoardFlyout.SectionHeader","Header for section header"):u.a._("Choose section","Header for section header","Header for section header")})})}),Object(n.jsx)(c.l,{span:2,children:Object(n.jsx)(c.e,{})})]}),!I&&Object(n.jsx)(c.o,{}),Object(n.jsx)(c.e,{minHeight:I?354:z,maxHeight:I?354:z,overflow:"scrollY",children:P?Object(n.jsx)(o.Fragment,{children:P&&P.map(e=>"header"===e.type?null:Object(n.jsx)(c.e,{children:e.isOpen&&Object(n.jsxs)(o.Fragment,{children:[I&&Object(n.jsx)(c.e,{marginStart:4,marginTop:2,paddingY:1,children:Object(n.jsx)(c.W,{size:"sm",children:u.a._("Board","PinBetterSave.BoardFlyout.BoardPickerTitle","board title on section picker")})}),Object(n.jsx)(g,{board:e,buttonText:t,isSectionOpen:!0,onClick:e=>{this.handleBoardClick({board:e,toggleSections:!1})},onButtonClick:s,shouldOpenSections:!1,showFlyoutSaveButton:l,ref:this.boardSectionsHeaderRef,isInWebRepinFlowExp:I}),Object(n.jsx)(m,{board:e,buttonText:t,onClick:this.handleSectionClick,onButtonClick:s,showSectionSaveButton:p,isInWebRepinFlowExp:I})]})},`${e.category}-${e.id}`))}):null}),d&&D(!1)]})]})})})})]})}}function G(e){const{group:t}=Object(W.a)("web_repin_flow");return Object(n.jsx)(z,{...e,boardPickerStopwatch:Object(P.c)(),requestContext:Object(T.d)(),webRepinExpGroup:t})}function D(e){const{advertiser:t,viewer:i}=e;if(i&&t){var n;const t=e.advertiser;if(i.isAuth&&(null===(n=t.admin_mode_info)||void 0===n?void 0:n.version)===v.a)return{hasMUA:!1,advertiser_id:t.id,username:t.owner_user_id};if(i.isAuth&&t.owner_user_id!==i.id)return{hasMUA:!0,advertiser_id:t.id,username:t.owner_user_id};if(i.isAuth&&t.owner_user_id===i.id)return{hasMUA:!1,advertiser_id:t.id,username:"me"}}return{advertiser_id:void 0,hasMUA:void 0,username:void 0}}function Y(e){const{advertiser_id:t,hasMUA:i,username:n}=e;return{field_set_key:"board_picker",filter:i?"protected":"all",...n?{username:n}:{},...t?{advertiser_id:t}:{}}}function K(){return(e,t)=>e(Object(k.f)("BoardPickerBoardsResource",Y(D(t()))))}H(z,"defaultProps",{paneWidth:320,showCreateBoardButton:!0,showFlyoutSaveButton:!0,showSections:!0,showSectionSaveButton:!0});const Q=Object(F.compose)(Object(r.connect)((function(e){return D(e)})),Object(O.b)({name:"BoardPickerBoardsResource",key:"boardResource",options:Y}))(G),$=Object(O.b)({name:"BoardPickerBoardsShortlistResource",key:"suggestedBoardsShortListResource",options:e=>({pin_id:e.pin.id,shortlist_length:3,num_shortlist_suggestions:3})})(G)},eUcp:function(e,t,i){i.d(t,"i",(function(){return o})),i.d(t,"f",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a})),i.d(t,"d",(function(){return c})),i.d(t,"k",(function(){return d})),i.d(t,"h",(function(){return l})),i.d(t,"j",(function(){return h})),i.d(t,"g",(function(){return u})),i.d(t,"e",(function(){return b})),i.d(t,"b",(function(){return p})),i.d(t,"l",(function(){return g}));var n=i("n6mq");const o=new n.q(0),r=new n.q(1),s=2,a=new n.q(s),c=2,d=new n.q(c),l=new n.q(3),h=new n.q(1),u=new n.q(3),b=3,p=4,g=(new n.q(p),new n.q(100))},nKlH:function(e,t,i){i.d(t,"a",(function(){return s}));var n=i("nKUr"),o=i("q1tI"),r=i("n6mq");function s(e){const{accessibilityLabel:t,focused:i,id:s,onBlur:a,onChange:c,onFocus:d,placeholder:l,value:h,size:u="lg"}=e,b=Object(o.useRef)(null);return Object(o.useEffect)(()=>{if(i){const e=b.current;window.requestAnimationFrame(()=>{const t=e&&e.querySelector("input");t instanceof HTMLInputElement&&t.focus()})}},[i]),Object(n.jsx)(r.e,{ref:b,children:Object(n.jsx)(r.L,{accessibilityLabel:t,id:s,onBlur:a,onChange:c,onFocus:d,placeholder:l,size:u,value:h})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/294-567cd2db2c623efc7ddc.mjs.map