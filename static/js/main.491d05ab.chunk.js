(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports={data:[{id:1,src:"https://images.unsplash.com/photo-1533748179483-64d7c9cee775?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VhfHx8fHx8MTY1NzAyMTAwMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",description:"Oneplus",itemtype:"mobile"},{id:2,src:"https://images.unsplash.com/photo-1527489377706-5bf97e608852?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW5zfHx8fHx8MTY1NzAyMTA3Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",description:"Spiderman",itemtype:"toys"},{id:3,src:"https://images.unsplash.com/photo-1530273435116-00b27f0fba7d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW5zfHx8fHx8MTY1NzAyMTEwMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",description:"Milton",itemtype:"bottle"},{id:4,src:"https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW5zfHx8fHx8MTY1NzAyMTEyNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",description:"Iphone 13",itemtype:"mobile"},{id:5,src:"https://images.unsplash.com/photo-1568015490643-f55ab9a561c4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW5zfHx8fHx8MTY1NzAyMTE0OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",description:"Samsung S22",itemtype:"mobile"},{id:6,src:"https://images.unsplash.com/photo-1618859437366-03b96f6558c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW5zfHx8fHx8MTY1NzAyMTE2Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",description:"Remote Control Car",itemtype:"toys"}]}},26:function(e,t,a){e.exports=a(43)},34:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(21),i=a.n(c),l=(a(34),a(14)),o=a(0),s=a(4),u=r.a.createContext(),m=function(e){var t=e.children,a=window.localStorage.getItem("user"),c=JSON.parse(a),i={name:"",cartList:[]};null!==c?(i.name=c.name,i.cartList=c.cartList):console.log("Nahi hai kuch bhai");var l=Object(n.useState)({name:i.name,cartList:i.cartList}),o=Object(s.a)(l,2),m=o[0],p=o[1];return Object(n.useEffect)(function(){window.localStorage.setItem("user",JSON.stringify(m))},[m]),r.a.createElement(u.Provider,{value:{user:m,setUser:p}},t)},p=(u.Consumer,a(3)),d=a(45);function f(){var e=Object(n.useContext)(u),t=e.user,a=e.setUser,c=Object(o.f)();return r.a.createElement("span",null,t.name?r.a.createElement("div",null,r.a.createElement("span",null,"Hi ",t.name),r.a.createElement("button",{onClick:function(){a(Object(p.a)({},t,{name:"",cartList:[]}))}},"Logout")):r.a.createElement("button",{onClick:function(){a(Object(p.a)({},t,{name:"Hrishikesh"}))}},"Login"),r.a.createElement(d.a,{onClick:function(){""===t.name?alert("Please login"):c("/Ecommerce/cart")}}))}var b,g,h,x,y,E=a(11),M=a(12),v=M.a.div(b||(b=Object(E.a)(["\nborder: 1px solid black;\nwidth: 20vw;\n"]))),w=M.a.img(g||(g=Object(E.a)(["\npadding:5%;\nwidth: 90%;\nheight: 90%\n"]))),j=M.a.div(h||(h=Object(E.a)(["\nfont-size: large;\nfont-family:system-ui;\n"]))),O=M.a.div(x||(x=Object(E.a)(["\n"]))),_=M.a.button(y||(y=Object(E.a)(["\nborder:none;\nborder-radius: 5px;\nfont-size: 15px;\npadding: 5px;\nmargin:5px;\ncolor:white;\nbackground-color: ","\n"])),function(e){return e.cart?"red":"blue"});function k(e){var t,a=Object(n.useContext)(u),c=a.user,i=a.setUser;function l(e,t){for(var a=0;a<e.length;)e[a]===t?e.splice(a,1):++a;return e}return r.a.createElement(v,null,r.a.createElement(w,{src:e.url}),r.a.createElement(j,null,e.desc),r.a.createElement(O,null,(t=e.id,c.cartList.includes(t)?r.a.createElement(_,{cart:!0,onClick:function(){var e;e=t,i(Object(p.a)({},c,{cartList:l(c.cartList,e)})),console.log(e)}},"Remove From Cart"):r.a.createElement(_,{onClick:function(){!function(e){var t,a;i(Object(p.a)({},c,{cartList:(t=c.cartList,a=e,t.includes(a)||t.push(a),t)})),console.log(e)}(t)}},"Add to cart"))))}a(19);var L=a(46),H=a(47),T=a(48);function C(){var e=Object(n.useState)("all"),t=Object(s.a)(e,2),c=t[0],i=t[1],l=Object(n.useContext)(u).user,o=a(20),m=Object(n.useState)(o.data),p=Object(s.a)(m,2),d=p[0],f=p[1],b={data:""};return 0!==l.cartList.length&&""!==l.name?b.data=d.filter(function(e){return!l.cartList.includes(e.id)}):""===l.name&&0!==l.cartList.length?b.data=d.filter(function(e){return!l.cartList.includes(e.id)}):(""===l.name&&l.cartList.length,b.data=d),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{fluid:!0,style:{paddingTop:10,paddingBottom:10}},r.a.createElement("div",{onChange:function(e){i(e.target.value),"all"===e.target.value?f(o.data):f(o.data.filter(function(t){return t.itemtype==e.target.value})),console.log(d)}},r.a.createElement("input",{type:"radio",value:"all",name:"alter",checked:"all"===c}),"All",r.a.createElement("input",{type:"radio",value:"mobile",name:"alter",checked:"mobile"===c})," Mobile",r.a.createElement("input",{type:"radio",value:"toys",name:"alter",checked:"toys"===c})," Toys",r.a.createElement("input",{type:"radio",value:"bottle",name:"alter",checked:"bottle"===c})," Bottle"),r.a.createElement(H.a,null,b.data.map(function(e){return r.a.createElement(T.a,{lg:3,style:{paddingTop:10}},r.a.createElement(k,{key:e.id,id:e.id,url:e.src,desc:e.description,tag:e.itemtype}))}))))}function W(){var e=Object(n.useContext)(u).user,t=a(20),c={data:""};if(0!==e.cartList.length&&""!==e.name)return c.data=t.data.filter(function(t){return e.cartList.includes(t.id)}),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{fluid:!0,style:{paddingTop:10,paddingBottom:10}},r.a.createElement(H.a,null,c.data.map(function(e){return r.a.createElement(T.a,{lg:3,style:{paddingTop:10}},r.a.createElement(k,{key:e.id,id:e.id,url:e.src,desc:e.description,tag:e.itemtype}))}))));if(""!==e.name)return r.a.createElement("div",null,"No Items present in the cart");throw new Error("Not Logged In")}var N=function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/Ecommerce",exact:!0,component:r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(C,null))}),r.a.createElement(o.a,{path:"/Ecommerce/cart",exact:!0,component:r.a.createElement(W,null)})))))},z=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,49)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null))),z()}},[[26,3,2]]]);
//# sourceMappingURL=main.491d05ab.chunk.js.map