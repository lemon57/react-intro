(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),l=a.n(o);a(16),a(3);var i=function(e){return n.a.createElement("div",null,"Hey you! ",e.firstName," ",e.lastName,"!")},m=a(5),s=a(6),c=a(8),u=a(7),f=a(9),N={form:{margin:50,marginLeft:"auto",marginRight:"auto",padding:10,width:300,border:"1px solid black",backgroundColor:"black",color:"white"},inputGroup:{marginBottom:10},input:{backgroundColor:"#EFEFFF",marginLeft:10},error:{color:"red",margin:5}},d=function(e){var t=e.name,a=e.onChange,r=e.onBlur,o=e.error,l=e.label;return n.a.createElement("div",{style:N.inputGroup},n.a.createElement("label",null,l,n.a.createElement("input",{style:N.input,type:"text",name:t,onChange:a,onBlur:r}),o&&n.a.createElement("div",{style:N.error},o)))},h=a(1),v=function(e){var t=Object(h.a)({},e);return n.a.createElement(d,Object.assign({name:"firstName",label:"First name:"},t))},g=function(e){var t=Object(h.a)({},e);return n.a.createElement(d,Object.assign({name:"lastName",label:"Last name:"},t))},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={firstName:"",lastName:"",firstNameError:""},a.validateName=function(e){return/[A-Za-z]{3,}/.test(e)?"":"The name must contain at least three letters. Numbers and special characters are not allowed."},a.onFirstNameBlur=function(){var e=a.state.firstName,t=a.validateName(e);return a.setState({firstNameError:t})},a.onLastNameBlur=function(){var e=a.state.lastName,t=a.validateName(e);return a.setState({lastNameError:t})},a.onFirstNameChange=function(e){return a.setState({firstName:e.target.value})},a.onLastNameChange=function(e){return a.setState({lastName:e.target.value})},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstNameError,a=e.firstName,r=e.lastName,o=e.lastNameError;return n.a.createElement("div",{style:N.form},n.a.createElement(v,{onChange:this.onFirstNameChange,onBlur:this.onFirstNameBlur,error:t}),n.a.createElement(g,{onChange:this.onLastNameChange,onBlur:this.onLastNameBlur,error:o}),n.a.createElement("div",null,n.a.createElement(i,{firstName:a,lastName:r})))}}]),t}(n.a.Component);var p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement(E,null)),n.a.createElement("div",null,n.a.createElement(i,{firstName:"Roman",lastName:"Lemon"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.1bad8bcb.chunk.js.map