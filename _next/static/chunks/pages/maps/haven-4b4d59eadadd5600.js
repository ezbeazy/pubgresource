(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{3492:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maps/haven",function(){return a(6319)}])},3464:function(e,n,a){"use strict";a.d(n,{Z:function(){return d}});var t=a(5893),i=a(7294),s=JSON.parse('[{"id":1,"name":"Erengal","image":"/img/maps/Erangel_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":2,"name":"Miramar","image":"/img/maps/Miramar_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":3,"name":"Vikendi","image":"/img/maps/Vikendi_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":4,"name":"Sanhok","image":"/img/maps/Sanhok_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[4,4]},{"id":5,"name":"Karakin","image":"/img/maps/Karakin_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[2,2]},{"id":6,"name":"Paramo","image":"/img/maps/Paramo_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[3,3]},{"id":7,"name":"Haven","image":"/img/maps/Haven_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[1,1]},{"id":8,"name":"Taego","image":"/img/maps/Taego_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8],"secretRooms":[{"x":1405,"y":1194},{"x":2585,"y":1354},{"x":4855,"y":1727},{"x":6944,"y":2087},{"x":1023,"y":3429},{"x":7163,"y":3380},{"x":958,"y":5286},{"x":4444,"y":4994},{"x":6421,"y":5608},{"x":2433,"y":6482},{"x":4948,"y":6455},{"x":6371,"y":7256}]},{"id":9,"name":"Deston","image":"/img/maps/Deston_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]}]'),r=a(1740),o=a.n(r),d=e=>{let{name:n}=e,[a,r]=(0,i.useState)({width:0,height:0}),[d,m]=(0,i.useState)({width:0,height:0}),[l,h]=(0,i.useState)(1),[c,p]=(0,i.useState)(1),[u,g]=(0,i.useState)({x:0,y:0}),[x,M]=(0,i.useState)({minX:0,maxX:0,minY:0,maxY:0}),[v,w]=(0,i.useState)(!1),k=s.find(e=>e.name===n),j=(0,i.useRef)(null),f=(0,i.useRef)(null),P=(e,n)=>{let a=Math.min(Math.max(e,x.minX),x.maxX),t=Math.min(Math.max(n,x.minY),x.maxY);return{x:a,y:t}},_=(e,n)=>{let a;return function(){let t=this,i=arguments;clearTimeout(a),a=setTimeout(()=>e.apply(t,i),n)}},y=_(()=>{h(e=>Math.min(e+1,10))},50),S=_(()=>{h(e=>Math.max(e-1,1))},50),b=()=>{w(!0)},R=()=>{w(!1)},E=e=>{v&&g(n=>{let a=n.x+e.movementX,t=n.y+e.movementY,i=P(a,t);return i})},z=()=>{w(!1)};return(0,i.useEffect)(()=>{let e=document.getElementById("viewport");return v?(e.removeEventListener("mousedown",b),e.addEventListener("mouseup",R),e.addEventListener("mousemove",E),e.addEventListener("mouseleave",z)):(e.addEventListener("mousedown",b),e.removeEventListener("mouseup",R),e.removeEventListener("mousemove",E),e.removeEventListener("mouseleave",z)),()=>{e.removeEventListener("mousedown",b),e.removeEventListener("mouseup",R),e.removeEventListener("mousemove",E),e.removeEventListener("mouseleave",z)}},[v]),(0,i.useEffect)(()=>{let e=document.getElementById("layers");e.style.transform="translate(".concat(u.x,"px, ").concat(u.y,"px) scale(").concat(l,")"),e.style.transition="transform 50ms ease"},[u]),(0,i.useEffect)(()=>{let e=document.getElementById("layers"),n=P(u.x,u.y);e.style.transform="translate(".concat(n.x,"px, ").concat(n.y,"px) scale(").concat(l,")"),e.style.transition="transform 1000ms ease"},[l,x]),(0,i.useEffect)(()=>{if(!j.current)return;let e=new ResizeObserver(()=>{j.current.offsetWidth!==a.width&&(r({width:j.current.offsetWidth,height:j.current.offsetHeight}),m({width:f.current.offsetWidth,height:f.current.offsetHeight}),p(f.current.offsetWidth/k.size.width))});return e.observe(j.current),()=>e.disconnect()},[j]),(0,i.useEffect)(()=>{M(()=>{let e=(a.width-d.width*l)/2,n=(d.width*l-a.width)/2,t=(a.height-d.height*l)/2,i=(d.height*l-a.height)/2;return{minX:e,maxX:n,minY:t,maxY:i}})},[a,l]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsxs)("div",{className:o().buttons,children:[(0,t.jsx)("button",{className:o().zoomButton,onClick:y,children:"+"}),(0,t.jsx)("button",{className:o().zoomButton,onClick:S,children:"-"})]}),(0,t.jsx)("div",{id:"viewport",className:o().viewport,ref:j,children:(0,t.jsxs)("div",{id:"layers",className:o().layers,ref:f,children:[(0,t.jsx)("div",{id:"mapImg",className:o().mapImg,children:(0,t.jsx)("img",{src:k.image,alt:"".concat(n),draggable:"false"})}),(0,t.jsx)("div",{id:"pins",className:o().pins,children:k.secretRooms&&k.secretRooms.map((e,n)=>(0,t.jsx)("div",{className:o().pin,style:{left:e.x*c,top:e.y*c}},n))})]})})]})})}},979:function(e,n,a){"use strict";var t=a(5893),i=a(1163);n.Z={logo:(0,t.jsx)("span",{className:"logo",children:"PUBG Resource"}),project:{link:"https://github.com/shuding/nextra"},useNextSeoProps(){let{asPath:e}=(0,i.useRouter)();return"/"!==e?{titleTemplate:"%s – PUBG Resource"}:{titleTemplate:"PUBG Resource"}},head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"PUBG Resource"}),(0,t.jsx)("meta",{property:"og:description",content:"Gaming resources for PUBG players"}),(0,t.jsx)("link",{rel:"icon",href:"/img/favicon.png"})]}),feedback:{content:null},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"https://pubgresource.com",target:"_blank",children:"PUBG Resource"})," ","\xa9"," ",new Date().getFullYear()]})}}},6319:function(e,n,a){"use strict";a.r(n);var t=a(5893),i=a(2673),s=a(3931),r=a(979);a(9966);var o=a(1151);a(5675);var d=a(3464);let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/maps/haven.mdx",route:"/maps/haven",headings:[{depth:2,value:"Map",id:"map"},{depth:2,value:"Details",id:"details"},{depth:2,value:"Vehicles",id:"vehicles"},{depth:2,value:"Weapons",id:"weapons"},{depth:2,value:"Supply Crates",id:"supply-crates"},{depth:2,value:"Features",id:"features"},{depth:2,value:"Events",id:"events"},{depth:2,value:"Respawn",id:"respawn"}],pageMap:[{kind:"Meta",data:{index:"Home",maps:"Maps",vehicles:"Vehicles",weapons:"Weapons","tactical-gear":"Tactical Gear",items:"Items",streamers:"Streamers",sponsor:"Sponsor",contact:"Contact",privacy:"Privacy"}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"items",route:"/items"},{kind:"Folder",name:"maps",route:"/maps",children:[{kind:"Meta",data:{erengal:"Erengal",miramar:"Miramar",vikendi:"Vikendi",sanhok:"Sanhok",karakin:"Karakin",paramo:"Paramo",haven:"Haven",taego:"Taego",deston:"Deston"}},{kind:"MdxPage",name:"deston",route:"/maps/deston"},{kind:"MdxPage",name:"erengal",route:"/maps/erengal"},{kind:"MdxPage",name:"haven",route:"/maps/haven"},{kind:"MdxPage",name:"karakin",route:"/maps/karakin"},{kind:"MdxPage",name:"miramar",route:"/maps/miramar"},{kind:"MdxPage",name:"paramo",route:"/maps/paramo"},{kind:"MdxPage",name:"sanhok",route:"/maps/sanhok"},{kind:"MdxPage",name:"taego",route:"/maps/taego"},{kind:"MdxPage",name:"vikendi",route:"/maps/vikendi"}]},{kind:"MdxPage",name:"maps",route:"/maps"},{kind:"MdxPage",name:"privacy",route:"/privacy"},{kind:"MdxPage",name:"sponsor",route:"/sponsor"},{kind:"MdxPage",name:"streamers",route:"/streamers"},{kind:"MdxPage",name:"tactical-gear",route:"/tactical-gear"},{kind:"MdxPage",name:"vehicles",route:"/vehicles"},{kind:"Folder",name:"weapons",route:"/weapons",children:[{kind:"Meta",data:{main:"Main",sidearms:"Sidearms",melee:"Melee",throwables:"Throwables",attachments:"Attachments",meta:"Meta","stat-tables":"Stat Tables"}},{kind:"MdxPage",name:"attachments",route:"/weapons/attachments"},{kind:"Folder",name:"main",route:"/weapons/main",children:[{kind:"Meta",data:{smg:"SMGs",ar:"ARs",lmg:"LMGs",dmr:"DMRs",sr:"Snipers",sg:"Shotguns",misc:"MISC",ap:"Anti Personel"}},{kind:"MdxPage",name:"ap",route:"/weapons/main/ap"},{kind:"MdxPage",name:"ar",route:"/weapons/main/ar"},{kind:"MdxPage",name:"dmr",route:"/weapons/main/dmr"},{kind:"MdxPage",name:"lmg",route:"/weapons/main/lmg"},{kind:"MdxPage",name:"misc",route:"/weapons/main/misc"},{kind:"MdxPage",name:"sg",route:"/weapons/main/sg"},{kind:"MdxPage",name:"smg",route:"/weapons/main/smg"},{kind:"MdxPage",name:"sr",route:"/weapons/main/sr"}]},{kind:"MdxPage",name:"melee",route:"/weapons/melee"},{kind:"MdxPage",name:"meta",route:"/weapons/meta"},{kind:"MdxPage",name:"sidearms",route:"/weapons/sidearms"},{kind:"MdxPage",name:"stat-tables",route:"/weapons/stat-tables"},{kind:"MdxPage",name:"throwables",route:"/weapons/throwables"}]},{kind:"MdxPage",name:"weapons",route:"/weapons"}],flexsearch:{codeblocks:!0},title:"Haven"},pageNextRoute:"/maps/haven",nextraLayout:s.ZP,themeConfig:r.Z};function l(e){let n=Object.assign({h2:"h2",p:"p",br:"br",strong:"strong",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"map",children:"Map"}),"\n",(0,t.jsx)(d.Z,{name:"Haven"}),"\n",(0,t.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,t.jsxs)(n.p,{children:["Status: Inactive",(0,t.jsx)(n.br,{}),"\n","Players: 32",(0,t.jsx)(n.br,{}),"\n","Grid Size: 1x1",(0,t.jsx)(n.br,{}),"\n","Area: 1 km",(0,t.jsx)("sup",{children:"2"}),(0,t.jsx)(n.br,{}),"\n","Region: North America"]}),"\n",(0,t.jsx)(n.h2,{id:"vehicles",children:"Vehicles"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"weapons",children:"Weapons"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SMG"}),": Tommy Gun / UMP45 / Micro Uzi / Vector / MP5k"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AR"}),": M16A4 / M416 / SCAR-L / AUG A3 / AKM / Beryl M762 / MK47 Mutant / ACE32"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LMG"}),": M249 / DP-28"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DMR"}),": Mini14 / Mk12 / SKS / SLR / VSS"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SR"}),": Kar98k / M24"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Shotgun"}),": S12K / S1897 / S686 / DBS / Sawed Off"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pistol"}),": P18C / P92 / P1911 / Skorpion / R1895"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Melee"}),": Crowbar / Machete / Pan / Sickle"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Throwable"}),": Stun Grenade / Frag Grenade / Molotov Cocktail / Smoke Grenade / BZ Grenade / C4"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Anti-Personel"}),": Mortar / Panzerfaust"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ETC"}),": Crossbow"]}),"\n",(0,t.jsx)(n.h2,{id:"supply-crates",children:"Supply Crates"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"P90 / FAMAS / Groza / MG3 / Mk14 / AWM"}),"\n",(0,t.jsx)(n.li,{children:"Lvl 3 Vest"}),"\n",(0,t.jsx)(n.li,{children:"LVl 3 Helmet"}),"\n",(0,t.jsx)(n.li,{children:"Guille Suit"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Security APC"})}),"\n",(0,t.jsx)(n.p,{children:"A hostile security vehicle patrols the map and will shoot at any players within line of sight."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Security Personel"})}),"\n",(0,t.jsx)(n.p,{children:"Buildings with red exterior lights contain Security Personel MPCs that will fire at players when disturbed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Attack Helicopter"})}),"\n",(0,t.jsx)(n.p,{children:"Attack Helicopters patrol the map with a spotlight. Any players caught within the helicopters spot light will be fired upon."}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"respawn",children:"Respawn"}),"\n",(0,t.jsx)(n.p,{children:"None"})]})}n.default=(0,i.j)(m)},1740:function(e){e.exports={container:"MapBox_container__I6lPX",viewport:"MapBox_viewport__sPvvO",layers:"MapBox_layers__i0ANg",mapImg:"MapBox_mapImg__cz3Iz",pins:"MapBox_pins__v5Ur7",pin:"MapBox_pin__Bdejt",buttons:"MapBox_buttons__nRWqW",zoomButton:"MapBox_zoomButton__uTqsp"}}},function(e){e.O(0,[533,774,888,179],function(){return e(e.s=3492)}),_N_E=e.O()}]);