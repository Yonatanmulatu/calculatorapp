(this.webpackJsonpcalculatorapp=this.webpackJsonpcalculatorapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),i=(n(12),n(1)),c=n(2),s=n(4),u=n(3);n(13),r.a.Component;var m=function(e){return r.a.createElement("button",{onClick:e.numberBtnClickHandler},e.num)};var d=function(e){return r.a.createElement("button",{onClick:e.operatorBtnClickHandler},e.operator)},p=(r.a.Component,function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={numberField:"",operator:"",numberField2:"",left:"",display:""},e.buttons=[1,2,3,4,5,6,7,8,9,0],e.operations=["+","-","x","/"],e.numberBtnClickHandler=function(t){e.setState({numberField:e.state.numberField+t.target.textContent})},e.ClearBtnClickHandler=function(t){e.setState({numberField:"",operator:"",numberField2:"",left:"",display:""})},e.operatorBtnClickHandler=function(t){e.setState({operator:t.target.textContent,left:e.state.numberField,numberField:"",display:e.state.display+e.state.numberField+t.target.textContent}),e.solve()},e.solve=function(){var t;switch(console.log(e.state.operator),e.state.operator){case"+":t=1*e.state.left+1*e.state.numberField,console.log(e.state.left,e.state.numberField);break;case"-":t=1*e.state.left-1*e.state.numberField;break;case"x":t=1*e.state.left*e.state.numberField*1;break;case"/":t=1*e.state.left/e.state.numberField*1;break;default:return"Error"}e.setState({left:t})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,"operator: ",this.state.operator,r.a.createElement("br",null),"numberField1: ",this.state.numberField,r.a.createElement("br",null),"left: ",this.state.left,r.a.createElement("br",null),"output: ",this.state.output,r.a.createElement("br",null)),r.a.createElement("div",null,"display: ",this.state.display),r.a.createElement("div",null,this.buttons.map((function(t){return r.a.createElement(m,{numberBtnClickHandler:e.numberBtnClickHandler,num:t})}))),r.a.createElement("div",null,this.operations.map((function(t){return r.a.createElement(d,{operatorBtnClickHandler:e.operatorBtnClickHandler,operator:t})})),r.a.createElement("button",{onClick:this.solve},"="),r.a.createElement("button",{onClick:this.ClearBtnClickHandler},"Clear"))))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.88690981.chunk.js.map