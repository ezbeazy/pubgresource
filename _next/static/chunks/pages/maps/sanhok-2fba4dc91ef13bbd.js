(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3579:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maps/sanhok",function(){return n(9762)}])},3464:function(e,a,n){"use strict";n.d(a,{Z:function(){return d}});var t=n(5893),s=n(7294),i=JSON.parse('[{"id":1,"name":"Erengal","image":"/img/maps/Erangel_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":2,"name":"Miramar","image":"/img/maps/Miramar_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":3,"name":"Vikendi","image":"/img/maps/Vikendi_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":4,"name":"Sanhok","image":"/img/maps/Sanhok_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[4,4]},{"id":5,"name":"Karakin","image":"/img/maps/Karakin_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[2,2]},{"id":6,"name":"Paramo","image":"/img/maps/Paramo_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[3,3]},{"id":7,"name":"Haven","image":"/img/maps/Haven_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[1,1]},{"id":8,"name":"Taego","image":"/img/maps/Taego_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8],"secretRooms":[{"x":1405,"y":1194},{"x":2585,"y":1354},{"x":4855,"y":1727},{"x":6944,"y":2087},{"x":1023,"y":3429},{"x":7163,"y":3380},{"x":958,"y":5286},{"x":4444,"y":4994},{"x":6421,"y":5608},{"x":2433,"y":6482},{"x":4948,"y":6455},{"x":6371,"y":7256}]},{"id":9,"name":"Deston","image":"/img/maps/Deston_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]}]'),r=n(1740),o=n.n(r),d=e=>{let{name:a}=e,[n,r]=(0,s.useState)({width:0,height:0}),[d,l]=(0,s.useState)({width:0,height:0}),[m,c]=(0,s.useState)(1),[h,p]=(0,s.useState)(1),[u,g]=(0,s.useState)({x:0,y:0}),[x,M]=(0,s.useState)({minX:0,maxX:0,minY:0,maxY:0}),[k,w]=(0,s.useState)(!1),j=i.find(e=>e.name===a),v=(0,s.useRef)(null),f=(0,s.useRef)(null),P=(e,a)=>{let n=Math.min(Math.max(e,x.minX),x.maxX),t=Math.min(Math.max(a,x.minY),x.maxY);return{x:n,y:t}},_=(e,a)=>{let n;return function(){let t=this,s=arguments;clearTimeout(n),n=setTimeout(()=>e.apply(t,s),a)}},y=_(()=>{c(e=>Math.min(e+1,10))},50),S=_(()=>{c(e=>Math.max(e-1,1))},50),b=e=>{w(!0),"touchstart"===e.type&&e.preventDefault()},R=e=>{w(!1),"touchend"===e.type&&e.preventDefault()},B=e=>{if(k){let a,n;"touchmove"===e.type?(e.preventDefault(),a=e.touches[0].clientX-e.targetTouches[0].clientX,n=e.touches[0].clientY-e.targetTouches[0].clientY):(a=e.movementX,n=e.movementY),g(e=>{let t=e.x+a,s=e.y+n,i=P(t,s);return i})}},z=e=>{w(!1),"touchcancel"===e.type&&e.preventDefault()};return(0,s.useEffect)(()=>{let e=document.getElementById("viewport"),a={mousedown:b,mouseup:R,mousemove:B,mouseleave:z,touchstart:b,touchend:R,touchmove:B,touchcancel:z};if(k)for(let[n,t]of Object.entries(a))"mousedown"!==n&&"touchstart"!==n?e.addEventListener(n,t):e.removeEventListener(n,t);else for(let[n,t]of Object.entries(a))"mousedown"===n||"touchstart"===n?e.addEventListener(n,t):e.removeEventListener(n,t);return()=>{for(let[n,t]of Object.entries(a))e.removeEventListener(n,t)}},[k]),(0,s.useEffect)(()=>{let e=document.getElementById("layers");e.style.transform="translate(".concat(u.x,"px, ").concat(u.y,"px) scale(").concat(m,")"),e.style.transition="transform 50ms ease"},[u]),(0,s.useEffect)(()=>{let e=document.getElementById("layers"),a=P(u.x,u.y);e.style.transform="translate(".concat(a.x,"px, ").concat(a.y,"px) scale(").concat(m,")"),e.style.transition="transform 1000ms ease"},[m,x]),(0,s.useEffect)(()=>{if(!v.current)return;let e=new ResizeObserver(()=>{v.current.offsetWidth!==n.width&&(r({width:v.current.offsetWidth,height:v.current.offsetHeight}),l({width:f.current.offsetWidth,height:f.current.offsetHeight}),p(f.current.offsetWidth/j.size.width))});return e.observe(v.current),()=>e.disconnect()},[v]),(0,s.useEffect)(()=>{M(()=>{let e=(n.width-d.width*m)/2,a=(d.width*m-n.width)/2,t=(n.height-d.height*m)/2,s=(d.height*m-n.height)/2;return{minX:e,maxX:a,minY:t,maxY:s}})},[n,m]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsxs)("div",{className:o().buttons,children:[(0,t.jsx)("button",{className:o().zoomButton,onClick:y,children:"+"}),(0,t.jsx)("button",{className:o().zoomButton,onClick:S,children:"-"})]}),(0,t.jsx)("div",{id:"viewport",className:o().viewport,ref:v,children:(0,t.jsxs)("div",{id:"layers",className:o().layers,ref:f,children:[(0,t.jsx)("div",{id:"mapImg",className:o().mapImg,children:(0,t.jsx)("img",{src:j.image,alt:"".concat(a),draggable:"false"})}),(0,t.jsx)("div",{id:"pins",className:o().pins,children:j.secretRooms&&j.secretRooms.map((e,a)=>(0,t.jsx)("div",{className:o().pin,style:{left:e.x*h,top:e.y*h}},a))})]})})]})})}},979:function(e,a,n){"use strict";var t=n(5893),s=n(1163);a.Z={logo:(0,t.jsx)("span",{className:"logo",children:"PUBG Resource"}),project:{link:"https://github.com/shuding/nextra"},useNextSeoProps(){let{asPath:e}=(0,s.useRouter)();return"/"!==e?{titleTemplate:"%s – PUBG Resource"}:{titleTemplate:"PUBG Resource"}},head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"PUBG Resource"}),(0,t.jsx)("meta",{property:"og:description",content:"Gaming resources for PUBG players"}),(0,t.jsx)("link",{rel:"icon",href:"/img/favicon.png"})]}),feedback:{content:null},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"https://pubgresource.com",target:"_blank",children:"PUBG Resource"})," ","\xa9"," ",new Date().getFullYear()]})}}},9762:function(e,a,n){"use strict";n.r(a);var t=n(5893),s=n(2673),i=n(3931),r=n(979);n(9966);var o=n(1151);n(5675);var d=n(3464);let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/maps/sanhok.mdx",route:"/maps/sanhok",headings:[{depth:2,value:"Map",id:"map"},{depth:2,value:"Details",id:"details"},{depth:2,value:"Vehicles",id:"vehicles"},{depth:2,value:"Weapons",id:"weapons"},{depth:2,value:"Supply Crates",id:"supply-crates"},{depth:2,value:"Features",id:"features"},{depth:2,value:"Events",id:"events"},{depth:2,value:"Respawn",id:"respawn"}],pageMap:[{kind:"Meta",data:{index:"Home",maps:"Maps",vehicles:"Vehicles",weapons:"Weapons","tactical-gear":"Tactical Gear",items:"Items",streamers:"Streamers",sponsor:"Sponsor",contact:"Contact",privacy:"Privacy"}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"items",route:"/items"},{kind:"Folder",name:"maps",route:"/maps",children:[{kind:"Meta",data:{erengal:"Erengal",miramar:"Miramar",vikendi:"Vikendi",sanhok:"Sanhok",karakin:"Karakin",paramo:"Paramo",haven:"Haven",taego:"Taego",deston:"Deston"}},{kind:"MdxPage",name:"deston",route:"/maps/deston"},{kind:"MdxPage",name:"erengal",route:"/maps/erengal"},{kind:"MdxPage",name:"haven",route:"/maps/haven"},{kind:"MdxPage",name:"karakin",route:"/maps/karakin"},{kind:"MdxPage",name:"miramar",route:"/maps/miramar"},{kind:"MdxPage",name:"paramo",route:"/maps/paramo"},{kind:"MdxPage",name:"sanhok",route:"/maps/sanhok"},{kind:"MdxPage",name:"taego",route:"/maps/taego"},{kind:"MdxPage",name:"vikendi",route:"/maps/vikendi"}]},{kind:"MdxPage",name:"maps",route:"/maps"},{kind:"MdxPage",name:"privacy",route:"/privacy"},{kind:"MdxPage",name:"sponsor",route:"/sponsor"},{kind:"MdxPage",name:"streamers",route:"/streamers"},{kind:"MdxPage",name:"tactical-gear",route:"/tactical-gear"},{kind:"MdxPage",name:"vehicles",route:"/vehicles"},{kind:"Folder",name:"weapons",route:"/weapons",children:[{kind:"Meta",data:{main:"Main",sidearms:"Sidearms",melee:"Melee",throwables:"Throwables",attachments:"Attachments",meta:"Meta","stat-tables":"Stat Tables"}},{kind:"MdxPage",name:"attachments",route:"/weapons/attachments"},{kind:"Folder",name:"main",route:"/weapons/main",children:[{kind:"Meta",data:{smg:"SMGs",ar:"ARs",lmg:"LMGs",dmr:"DMRs",sr:"Snipers",sg:"Shotguns",misc:"MISC",ap:"Anti Personel"}},{kind:"MdxPage",name:"ap",route:"/weapons/main/ap"},{kind:"MdxPage",name:"ar",route:"/weapons/main/ar"},{kind:"MdxPage",name:"dmr",route:"/weapons/main/dmr"},{kind:"MdxPage",name:"lmg",route:"/weapons/main/lmg"},{kind:"MdxPage",name:"misc",route:"/weapons/main/misc"},{kind:"MdxPage",name:"sg",route:"/weapons/main/sg"},{kind:"MdxPage",name:"smg",route:"/weapons/main/smg"},{kind:"MdxPage",name:"sr",route:"/weapons/main/sr"}]},{kind:"MdxPage",name:"melee",route:"/weapons/melee"},{kind:"MdxPage",name:"meta",route:"/weapons/meta"},{kind:"MdxPage",name:"sidearms",route:"/weapons/sidearms"},{kind:"MdxPage",name:"stat-tables",route:"/weapons/stat-tables"},{kind:"MdxPage",name:"throwables",route:"/weapons/throwables"}]},{kind:"MdxPage",name:"weapons",route:"/weapons"}],flexsearch:{codeblocks:!0},title:"Sanhok"},pageNextRoute:"/maps/sanhok",nextraLayout:i.ZP,themeConfig:r.Z};function m(e){let a=Object.assign({h2:"h2",p:"p",br:"br",strong:"strong",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"map",children:"Map"}),"\n",(0,t.jsx)(d.Z,{name:"Sanhok"}),"\n",(0,t.jsx)(a.h2,{id:"details",children:"Details"}),"\n",(0,t.jsxs)(a.p,{children:["Status: Active",(0,t.jsx)(a.br,{}),"\n","Players: 100",(0,t.jsx)(a.br,{}),"\n","Grid Size: 4x4",(0,t.jsx)(a.br,{}),"\n","Area: 16 km",(0,t.jsx)("sup",{children:"2"}),(0,t.jsx)(a.br,{}),"\n","Region: Asia"]}),"\n",(0,t.jsx)(a.h2,{id:"vehicles",children:"Vehicles"}),"\n",(0,t.jsx)(a.p,{children:"Buggy / UAZ / Dacia / Pony Coupe / Coupe RB / Motorbike / Sidecar Motorbike / Ronny / Porter / Mountain Bike / Boat / BRDM-2"}),"\n",(0,t.jsx)(a.h2,{id:"weapons",children:"Weapons"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"SMG"}),": Tommy Gun / UMP45 / Micro Uzi / Vector / PP-19 Bizon"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"AR"}),": M16A4 / M416 / SCAR-L / QBZ95 / AKM / Beryl M762 / MK47 Mutant"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"LMG"}),": M249 / DP-28"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"DMR"}),": Mini14 / Mk12 / SKS / QBU88 / VSS"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"SR"}),": Kar98k / M24"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Shotgun"}),": S12K / S1897 / S686 / DBS / Sawed Off"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Pistol"}),": P18C / P92 / P1911 / R1895 / Deagle"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Melee"}),": Crowbar / Machete / Pan / Sickle"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Throwable"}),": Stun Grenade / Frag Grenade / Molotov Cocktail / Smoke Grenade / BZ Grenade / C4"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Anti-Personel"}),": Mortar"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"ETC"}),": Crossbow"]}),"\n",(0,t.jsx)(a.h2,{id:"supply-crates",children:"Supply Crates"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"P90 / FAMAS / Groza / MG3 / Mk14 / AWM"}),"\n",(0,t.jsx)(a.li,{children:"Lvl 3 Vest"}),"\n",(0,t.jsx)(a.li,{children:"LVl 3 Helmet"}),"\n",(0,t.jsx)(a.li,{children:"Guille Suit"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Ascenders"})}),"\n",(0,t.jsx)(a.p,{children:"Sanhok features acender/descender cables to access vertical spaces on the map such as buildings, rooftops and high walls."}),"\n",(0,t.jsx)(a.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Red Zones"})}),"\n",(0,t.jsx)(a.p,{children:"Artilliary strikes are called inside redzones that peridocially appear on random areas of the map. Players and vehicles not protected by solid structures can be injured, damaged, killed or destroyed."}),"\n",(0,t.jsx)(a.h2,{id:"respawn",children:"Respawn"}),"\n",(0,t.jsx)(a.p,{children:"None"})]})}a.default=(0,s.j)(l)},1740:function(e){e.exports={container:"MapBox_container__I6lPX",viewport:"MapBox_viewport__sPvvO",layers:"MapBox_layers__i0ANg",mapImg:"MapBox_mapImg__cz3Iz",pins:"MapBox_pins__v5Ur7",pin:"MapBox_pin__Bdejt",buttons:"MapBox_buttons__nRWqW",zoomButton:"MapBox_zoomButton__uTqsp"}}},function(e){e.O(0,[533,774,888,179],function(){return e(e.s=3579)}),_N_E=e.O()}]);