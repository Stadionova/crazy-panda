(this["webpackJsonpcrazy-panda"]=this["webpackJsonpcrazy-panda"]||[]).push([[0],{15:function(e,t,n){e.exports={table:"Table_table__1ZJfq"}},23:function(e,t,n){e.exports={container:"Search_container__1TASp"}},24:function(e,t,n){e.exports={pagination:"Pagination_pagination__2TPaI"}},30:function(e,t,n){},31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),i=(n(30),n(8)),o=n(9),l=n(12),u=n(11),p=(n(31),n(10)),d=n(6),j=n(22),h="SEARCH_INPUT_VALUE_WAS_CHANGED",b="SHOW_MATCHED_DATA_AFTER_SEARCH",O="TURN_ON_FILTER",f={newTaskInputValue:"",arrOfMatches:{},isFilterTurnedOn:!1,tableColumns:{0:"",1:"A",2:"B",3:"C",4:"D"},pagesData:{1:{1:["q","w1","r","q1"],2:["q","2\u0439","r","w2"],3:["q","w3","z","e3"],4:["q","4ww","r","r4"],5:["s","w5","r","t5"]},2:{1:["q","ddw","l","t6"],2:["x","\u0439ff","rp","y7"],3:["xx","wgg","zzzzz","u8"],4:["vb","wbw","1","i9"],5:["ss","w6","2","o10"]},3:{1:["1","wl","6","a11"],2:["2","ll","7p","s12"],3:["3x","waa","8zzzz","d13"],4:["4b","wssw","9","f14"],5:["5s","55w","10","g15"]}}};var v=Object(j.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{newTaskInputValue:t.inputValue});case b:return Object(d.a)(Object(d.a)({},e),{},{arrOfMatches:t.arrOfMatches});case O:return!1===e.isFilterTurnedOn&&!0===t.isFilterTurnedOn?Object(d.a)(Object(d.a)({},e),{},{isFilterTurnedOn:t.isFilterTurnedOn}):Object(d.a)(Object(d.a)({},e),{},{isFilterTurnedOn:!1});default:return e}}),f),x=v,T=n(15),w=n.n(T),g=n(1),m=function(e){return Object(g.jsx)("div",{className:w.a.container,children:Object(g.jsx)("div",{className:w.a.row,children:Object(g.jsx)("div",{className:w.a.board,children:Object(g.jsx)("table",{className:w.a.table,children:Object(g.jsx)("tbody",{children:e.renderTable()})})})})})},y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderTd=function(t){var n=[];return 0===t?e.renderTableHeaders(n,t):e.renderCellsWithData(n,t)},e.renderTable=function(){var t=[],n=window.location.href.slice(-1);if(t.push(Object(g.jsx)("tr",{id:0,children:e.renderTd(0)},0)),void 0===e.props.arrOfMatches)for(var a in e.props.pagesData[n])t.push(Object(g.jsx)("tr",{id:a,children:e.renderTd(a)},a));else if(typeof n!==Number){var r=function(a){var r;null===(r=e.props.arrOfMatches[n])||void 0===r||r.forEach((function(n){a===n&&t.push(Object(g.jsx)("tr",{id:a,children:e.renderTd(a)},a))}))};for(var c in e.props.pagesData[1])r(c)}else{var s=function(a){var r;null===(r=e.props.arrOfMatches[n])||void 0===r||r.forEach((function(n){a===n&&t.push(Object(g.jsx)("tr",{id:a,children:e.renderTd(a)},a))}))};for(var i in e.props.pagesData[n])s(i)}return e.reverseRows(t)},e}return Object(o.a)(n,[{key:"renderTableHeaders",value:function(e,t){for(var n in this.props.tableColumns)+n>0?e.push(Object(g.jsx)("td",{className:"tr_".concat(t,"-td_").concat(+n),onClick:this.props.catchClickOnFilter,style:{textAlign:"center"},children:this.props.tableColumns[n]},n)):e.push(Object(g.jsx)("td",{className:"tr_".concat(t,"-td_").concat(+n),disabled:"disabled",onClick:this.props.catchClickOnFilter},n));return e}},{key:"renderHeadersWithNums",value:function(e,t,n){e.push(Object(g.jsx)("td",{className:"tr_".concat(n,"-td_").concat(t),style:{textAlign:"center"},children:n},t))}},{key:"renderCellsWithData",value:function(e,t){var n=window.location.href.slice(-1);return this.renderHeadersWithNums(e,0,t),this.props.pagesData[n][t].forEach((function(n,a){e.push(Object(g.jsx)("td",{className:"tr_".concat(t,"-td_").concat(a+1),children:n},a+1))})),e}},{key:"reverseRows",value:function(e){if(!0===this.props.isFilterTurnedOn){var t=e.slice(1).reverse();return[e[0]].concat(t)}return e}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(m,{renderTable:this.renderTable})})}}]),n}(r.a.Component),_=Object(p.b)((function(e){return{tableColumns:e.tableColumns,isFilterTurnedOn:e.isFilterTurnedOn,pagesData:e.pagesData,arrOfMatches:e.arrOfMatches}}),(function(e){return{catchClickOnFilter:function(){e({type:O,isFilterTurnedOn:!0})}}}))(y),C=n(23),k=n.n(C),z=function(e){return Object(g.jsx)("div",{className:k.a.container,children:Object(g.jsx)("div",{children:Object(g.jsx)("input",{placeholder:"\u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435",onChange:e.getInputValue})})})},N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=window.location.href.slice(-1);return""!==this.props.newTaskInputValue?function(){var n,a={},r=function(n){e.props.pagesData[t][n].map((function(r){var c;r===e.props.newTaskInputValue&&((null===(c=a[t])||void 0===c?void 0:c.length)>0||(a[t]=[]),a[t].push(n));return a}))};for(var c in e.props.pagesData[t])r(c);(null===(n=a[t])||void 0===n?void 0:n.length)>0&&e.props.rowsToHide(a)}():this.props.rowsToHide(),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(z,{getInputValue:this.props.getInputValue})})}}]),n}(r.a.Component),D=Object(p.b)((function(e){return{newTaskInputValue:e.newTaskInputValue,pagesData:e.pagesData}}),(function(e){return{getInputValue:function(t){var n=t.target.value;e({type:h,inputValue:n})},rowsToHide:function(t){e(function(e){return{type:b,arrOfMatches:e}}(t))}}}))(N),F=n(24),A=n.n(F),I=n(13),V=function(){return Object(g.jsxs)("div",{className:A.a.pagination,children:[Object(g.jsx)(I.b,{exact:!0,to:{pathname:"/crazy-panda/1",page:1},children:"1"}),Object(g.jsx)(I.b,{to:{pathname:"/crazy-panda/2",page:2},children:"2"}),Object(g.jsx)(I.b,{to:{pathname:"/crazy-panda/3",page:3},children:"3"})]})},H=n(2),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)(I.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(D,{}),Object(g.jsxs)(H.c,{children:[Object(g.jsx)(H.a,{path:"/crazy-panda/1",component:_}),Object(g.jsx)(H.a,{path:"/crazy-panda/2",component:_}),Object(g.jsx)(H.a,{path:"/crazy-panda/3",component:_}),Object(g.jsx)(H.a,{path:"/",component:_})]}),Object(g.jsx)(V,{})]})})}}]),n}(r.a.Component);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(p.a,{store:x,children:Object(g.jsx)(E,{store:x})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.df79a376.chunk.js.map