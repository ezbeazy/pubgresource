(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{3492:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maps/haven",function(){return t(6319)}])},3464:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(5893),r=t(7294),s=JSON.parse('[{"id":1,"name":"Erengal","image":"/img/maps/Erangel_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":2,"name":"Miramar","image":"/img/maps/Miramar_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":3,"name":"Vikendi","image":"/img/maps/Vikendi_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":4,"name":"Sanhok","image":"/img/maps/Sanhok_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[4,4]},{"id":5,"name":"Karakin","image":"/img/maps/Karakin_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[2,2]},{"id":6,"name":"Paramo","image":"/img/maps/Paramo_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[3,3]},{"id":7,"name":"Haven","image":"/img/maps/Haven_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[1,1]},{"id":8,"name":"Taego","image":"/img/maps/Taego_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8],"secretRooms":[{"x":1405,"y":1194},{"x":2585,"y":1354},{"x":4855,"y":1727},{"x":6944,"y":2087},{"x":1023,"y":3429},{"x":7163,"y":3380},{"x":958,"y":5286},{"x":4444,"y":4994},{"x":6421,"y":5608},{"x":2433,"y":6482},{"x":4948,"y":6455},{"x":6371,"y":7256}]},{"id":9,"name":"Deston","image":"/img/maps/Deston_Main_Low_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]}]'),i=t(1740),o=t.n(i),c=e=>{let{name:n}=e,t=(0,r.useRef)({width:0,height:0}),i=(0,r.useRef)({width:0,height:0}),c=(0,r.useRef)(1),l=(0,r.useRef)(0),d=(0,r.useRef)({minX:0,maxX:0,minY:0,maxY:0}),m=(0,r.useRef)(!1),u=(0,r.useRef)({x:0,y:0}),[h,p]=(0,r.useState)(1),[g,x]=(0,r.useState)({x:0,y:0}),[w,M]=(0,r.useState)({width:0,height:0}),v=s.find(e=>e.name===n),j=(0,r.useRef)(null),f=(0,r.useRef)(null),k=e=>{console.log(" ** NEW LOG ** "+e),console.log("viewport ",Object.values(w)),console.log("viewportSizeRef ",Object.values(t.current)),console.log("mapSizeRef: ",Object.values(i.current)),console.log("zoomRef: ",c.current),console.log("zoom: ",h),console.log("scale: ",l.current),console.log("position: ",Object.values(g)),console.log("boundaries: ",Object.values(d.current))},P=()=>{console.log("viewport.width:"+w.width),console.log("mapSizeRef.current.width:"+i.current.width),console.log("zoomRef:"+c.current),d.current={minX:(w.width-i.current.width*c.current)/2,maxX:(i.current.width*c.current-w.width)/2,minY:(w.height-i.current.height*c.current)/2,maxY:(i.current.height*c.current-w.height)/2},console.log(Object.values(d.current))},_=()=>{i.current={width:w.width*c.current,height:w.height*c.current},console.log("updateMapSize")},y=()=>{l.current=j.current.offsetWidth*h/v.size.width},b=(e,n)=>{let t=Math.min(Math.max(e,d.current.minX),d.current.maxX),a=Math.min(Math.max(n,d.current.minY),d.current.maxY);return{x:t,y:a}},S=(e,n)=>{let t;return function(){let a=this,r=arguments;clearTimeout(t),t=setTimeout(()=>e.apply(a,r),n)}},R=S(()=>{c.current=Math.min(c.current+1,10),P(),console.log("zoom in: ",c.current),p(c.current)},50),z=S(()=>{c.current=Math.max(c.current-1,1),P(),console.log("zoom out: ",c.current),p(c.current)},50),E=e=>{"touchstart"===e.type&&(e.preventDefault(),u.current={x:e.touches[0].clientX,y:e.touches[0].clientY}),m.current=!0,A()},L=e=>{"touchend"===e.type&&e.preventDefault(),m.current=!1,A()},B=e=>{if(m.current){let n,t;if("touchmove"===e.type){e.preventDefault();let a=e.touches[0].clientX,r=e.touches[0].clientY;n=a-u.current.x,t=r-u.current.y,u.current={x:a,y:r}}else n=e.movementX,t=e.movementY;x(e=>{let a=e.x+n,r=e.y+t,s=b(a,r);return s})}},N=e=>{m.current=!1,"touchcancel"===e.type&&e.preventDefault(),A()},G={mousedown:E,mouseup:L,mousemove:B,mouseleave:N,touchstart:E,touchend:L,touchmove:B,touchcancel:N},A=()=>{let e=document.getElementById("viewport");if(m.current)for(let[n,t]of Object.entries(G))"mousedown"!==n&&"touchstart"!==n?e.addEventListener(n,t):e.removeEventListener(n,t);else for(let[n,t]of Object.entries(G))"mousedown"===n||"touchstart"===n?e.addEventListener(n,t):e.removeEventListener(n,t);return()=>{for(let[n,t]of Object.entries(G))e.removeEventListener(n,t)}};return(0,r.useEffect)(()=>{let e=f.current;e.style.transform="translate(".concat(g.x,"px, ").concat(g.y,"px) scale(").concat(h,")"),e.style.transition="transform 50ms ease"},[g]),(0,r.useEffect)(()=>{let e=f.current,n=b(g.x,g.y);e.style.transform="translate(".concat(n.x,"px, ").concat(n.y,"px) scale(").concat(h,")"),e.style.transition="transform 1000ms ease"},[h]),(0,r.useEffect)(()=>{_(),P(),y()},[w]),(0,r.useEffect)(()=>{if(!j.current||!f.current)return;let e=new ResizeObserver(()=>{M({width:j.current.offsetWidth,height:j.current.offsetHeight}),k("viewportObserver"),y()});e.observe(j.current);let n=document.getElementById("viewport");return n.addEventListener("mousedown",E),n.addEventListener("touchstart",E),()=>{for(let[t,a]of(e.disconnect(),Object.entries(G)))n.removeEventListener(t,a)}},[]),k("before return"),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsxs)("div",{className:o().buttons,children:[(0,a.jsx)("button",{className:o().zoomButton,onClick:R,children:"+"}),(0,a.jsx)("button",{className:o().zoomButton,onClick:z,children:"-"})]}),(0,a.jsx)("div",{id:"viewport",className:o().viewport,ref:j,children:(0,a.jsxs)("div",{id:"layers",className:o().layers,ref:f,children:[(0,a.jsx)("div",{id:"mapImg",className:o().mapImg,children:(0,a.jsx)("img",{src:v.image,alt:"".concat(n),draggable:"false"})}),(0,a.jsx)("div",{id:"pins",className:o().pins,children:v.secretRooms&&v.secretRooms.map((e,n)=>(0,a.jsx)("div",{className:o().pin,style:{left:e.x*l.current,top:e.y*l.current}},n))})]})})]})})}},979:function(e,n,t){"use strict";var a=t(5893),r=t(1163);n.Z={logo:(0,a.jsx)("span",{className:"logo",children:"PUBG Resource"}),project:{link:"https://github.com/shuding/nextra"},useNextSeoProps(){let{asPath:e}=(0,r.useRouter)();return"/"!==e?{titleTemplate:"%s – PUBG Resource"}:{titleTemplate:"PUBG Resource"}},head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{property:"og:title",content:"PUBG Resource"}),(0,a.jsx)("meta",{property:"og:description",content:"Gaming resources for PUBG players"}),(0,a.jsx)("link",{rel:"icon",href:"/img/favicon.png"})]}),feedback:{content:null},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,a.jsxs)("span",{children:[(0,a.jsx)("a",{href:"https://pubgresource.com",target:"_blank",children:"PUBG Resource"})," ","\xa9"," ",new Date().getFullYear()]})}}},6319:function(e,n,t){"use strict";t.r(n);var a=t(5893),r=t(2673),s=t(3931),i=t(979);t(9966);var o=t(1151);t(5675);var c=t(3464);let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/maps/haven.mdx",route:"/maps/haven",headings:[{depth:2,value:"Map",id:"map"},{depth:2,value:"Details",id:"details"},{depth:2,value:"Vehicles",id:"vehicles"},{depth:2,value:"Weapons",id:"weapons"},{depth:2,value:"Supply Crates",id:"supply-crates"},{depth:2,value:"Features",id:"features"},{depth:2,value:"Events",id:"events"},{depth:2,value:"Respawn",id:"respawn"}],pageMap:[{kind:"Meta",data:{index:"Home",maps:"Maps",vehicles:"Vehicles",weapons:"Weapons","tactical-gear":"Tactical Gear",items:"Items",streamers:"Streamers",sponsor:"Sponsor",contact:"Contact",privacy:"Privacy"}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"items",route:"/items"},{kind:"Folder",name:"maps",route:"/maps",children:[{kind:"Meta",data:{erengal:"Erengal",miramar:"Miramar",vikendi:"Vikendi",sanhok:"Sanhok",karakin:"Karakin",paramo:"Paramo",haven:"Haven",taego:"Taego",deston:"Deston"}},{kind:"MdxPage",name:"deston",route:"/maps/deston"},{kind:"MdxPage",name:"erengal",route:"/maps/erengal"},{kind:"MdxPage",name:"haven",route:"/maps/haven"},{kind:"MdxPage",name:"karakin",route:"/maps/karakin"},{kind:"MdxPage",name:"miramar",route:"/maps/miramar"},{kind:"MdxPage",name:"paramo",route:"/maps/paramo"},{kind:"MdxPage",name:"sanhok",route:"/maps/sanhok"},{kind:"MdxPage",name:"taego",route:"/maps/taego"},{kind:"MdxPage",name:"vikendi",route:"/maps/vikendi"}]},{kind:"MdxPage",name:"maps",route:"/maps"},{kind:"MdxPage",name:"privacy",route:"/privacy"},{kind:"MdxPage",name:"sponsor",route:"/sponsor"},{kind:"MdxPage",name:"streamers",route:"/streamers"},{kind:"MdxPage",name:"tactical-gear",route:"/tactical-gear"},{kind:"MdxPage",name:"vehicles",route:"/vehicles"},{kind:"Folder",name:"weapons",route:"/weapons",children:[{kind:"Meta",data:{main:"Main",sidearms:"Sidearms",melee:"Melee",throwables:"Throwables",attachments:"Attachments",meta:"Meta","stat-tables":"Stat Tables"}},{kind:"MdxPage",name:"attachments",route:"/weapons/attachments"},{kind:"Folder",name:"main",route:"/weapons/main",children:[{kind:"Meta",data:{smg:"SMGs",ar:"ARs",lmg:"LMGs",dmr:"DMRs",sr:"Snipers",sg:"Shotguns",misc:"MISC",ap:"Anti Personel"}},{kind:"MdxPage",name:"ap",route:"/weapons/main/ap"},{kind:"MdxPage",name:"ar",route:"/weapons/main/ar"},{kind:"MdxPage",name:"dmr",route:"/weapons/main/dmr"},{kind:"MdxPage",name:"lmg",route:"/weapons/main/lmg"},{kind:"MdxPage",name:"misc",route:"/weapons/main/misc"},{kind:"MdxPage",name:"sg",route:"/weapons/main/sg"},{kind:"MdxPage",name:"smg",route:"/weapons/main/smg"},{kind:"MdxPage",name:"sr",route:"/weapons/main/sr"}]},{kind:"MdxPage",name:"melee",route:"/weapons/melee"},{kind:"MdxPage",name:"meta",route:"/weapons/meta"},{kind:"MdxPage",name:"sidearms",route:"/weapons/sidearms"},{kind:"MdxPage",name:"stat-tables",route:"/weapons/stat-tables"},{kind:"MdxPage",name:"throwables",route:"/weapons/throwables"}]},{kind:"MdxPage",name:"weapons",route:"/weapons"}],flexsearch:{codeblocks:!0},title:"Haven"},pageNextRoute:"/maps/haven",nextraLayout:s.ZP,themeConfig:i.Z};function d(e){let n=Object.assign({h2:"h2",p:"p",br:"br",strong:"strong",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"map",children:"Map"}),"\n",(0,a.jsx)(c.Z,{name:"Haven"}),"\n",(0,a.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,a.jsxs)(n.p,{children:["Status: Inactive",(0,a.jsx)(n.br,{}),"\n","Players: 32",(0,a.jsx)(n.br,{}),"\n","Grid Size: 1x1",(0,a.jsx)(n.br,{}),"\n","Area: 1 km",(0,a.jsx)("sup",{children:"2"}),(0,a.jsx)(n.br,{}),"\n","Region: North America"]}),"\n",(0,a.jsx)(n.h2,{id:"vehicles",children:"Vehicles"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"weapons",children:"Weapons"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SMG"}),": Tommy Gun / UMP45 / Micro Uzi / Vector / MP5k"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"AR"}),": M16A4 / M416 / SCAR-L / AUG A3 / AKM / Beryl M762 / MK47 Mutant / ACE32"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"LMG"}),": M249 / DP-28"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"DMR"}),": Mini14 / Mk12 / SKS / SLR / VSS"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SR"}),": Kar98k / M24"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Shotgun"}),": S12K / S1897 / S686 / DBS / Sawed Off"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Pistol"}),": P18C / P92 / P1911 / Skorpion / R1895"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Melee"}),": Crowbar / Machete / Pan / Sickle"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Throwable"}),": Stun Grenade / Frag Grenade / Molotov Cocktail / Smoke Grenade / BZ Grenade / C4"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Anti-Personel"}),": Mortar / Panzerfaust"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ETC"}),": Crossbow"]}),"\n",(0,a.jsx)(n.h2,{id:"supply-crates",children:"Supply Crates"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"P90 / FAMAS / Groza / MG3 / Mk14 / AWM"}),"\n",(0,a.jsx)(n.li,{children:"Lvl 3 Vest"}),"\n",(0,a.jsx)(n.li,{children:"LVl 3 Helmet"}),"\n",(0,a.jsx)(n.li,{children:"Guille Suit"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Security APC"})}),"\n",(0,a.jsx)(n.p,{children:"A hostile security vehicle patrols the map and will shoot at any players within line of sight."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Security Personel"})}),"\n",(0,a.jsx)(n.p,{children:"Buildings with red exterior lights contain Security Personel MPCs that will fire at players when disturbed."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Attack Helicopter"})}),"\n",(0,a.jsx)(n.p,{children:"Attack Helicopters patrol the map with a spotlight. Any players caught within the helicopters spot light will be fired upon."}),"\n",(0,a.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"respawn",children:"Respawn"}),"\n",(0,a.jsx)(n.p,{children:"None"})]})}n.default=(0,r.j)(l)},1740:function(e){e.exports={container:"MapBox_container__I6lPX",viewport:"MapBox_viewport__sPvvO",layers:"MapBox_layers__i0ANg",mapImg:"MapBox_mapImg__cz3Iz",pins:"MapBox_pins__v5Ur7",pin:"MapBox_pin__Bdejt",buttons:"MapBox_buttons__nRWqW",zoomButton:"MapBox_zoomButton__uTqsp"}}},function(e){e.O(0,[533,774,888,179],function(){return e(e.s=3492)}),_N_E=e.O()}]);