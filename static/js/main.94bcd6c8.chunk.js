(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),l=(t(13),t(3)),o=t(4),s=t(6),m=t(5),u=t(7),h=function(e){return c.a.createElement("div",{className:"main-card clearfix"},c.a.createElement("div",{className:"card-img "},c.a.createElement("img",{src:e.patch_url,className:"patch",alt:"mission patch"}),c.a.createElement("span",{className:"flight-no"},e.number)),c.a.createElement("div",{className:"card-details"},c.a.createElement("p",null,c.a.createElement("span",{className:"flight-name"},e.name),c.a.createElement("br",null),"Date/Time: ",e.date,c.a.createElement("br",null),"Location: ",e.site)))},d=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={data:[]},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.spacexdata.com/v3/launches").then(function(e){return e.json()}).then(function(a){return e.setState({data:a})}).catch(function(e){console.log("Error fetching and parsing data...",e)})}},{key:"render",value:function(){var e=this;return this.state.data.map(function(a,t){return console.log(e.state.data[t].flight_number)}),c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",null,"SpaceX-API"),c.a.createElement("div",{className:"container"},this.state.data.map(function(e,a){return c.a.createElement(h,{key:a,patch_url:e.links.mission_patch_small,number:e.flight_number,name:e.mission_name,year:e.launch_year,date:e.launch_date_local,site:e.launch_site.site_name_long,details:e.details})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.94bcd6c8.chunk.js.map