(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{6981:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/maps/vikendi",function(){return a(1554)}])},3464:function(e,n,a){"use strict";a.d(n,{Z:function(){return d}});var t=a(5893),i=a(7294),s=JSON.parse('[{"id":1,"name":"Erengal","image":"/img/maps/Erangel_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":2,"name":"Miramar","image":"/img/maps/Miramar_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":3,"name":"Vikendi","image":"/img/maps/Vikendi_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]},{"id":4,"name":"Sanhok","image":"/img/maps/Sanhok_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[4,4]},{"id":5,"name":"Karakin","image":"/img/maps/Karakin_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[2,2]},{"id":6,"name":"Paramo","image":"/img/maps/Paramo_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[3,3]},{"id":7,"name":"Haven","image":"/img/maps/Haven_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[1,1]},{"id":8,"name":"Taego","image":"/img/maps/Taego_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8],"secretRooms":[{"x":1405,"y":1194},{"x":2585,"y":1354},{"x":4855,"y":1727},{"x":6944,"y":2087},{"x":1023,"y":3429},{"x":7163,"y":3380},{"x":958,"y":5286},{"x":4444,"y":4994},{"x":6421,"y":5608},{"x":2433,"y":6482},{"x":4948,"y":6455},{"x":6371,"y":7256}]},{"id":9,"name":"Deston","image":"/img/maps/Deston_Main_High_Res.webp","size":{"width":8192,"height":8192},"gridSize":[8,8]}]'),r=a(1740),o=a.n(r),d=e=>{let{name:n}=e,[a,r]=(0,i.useState)({width:0,height:0}),[d,l]=(0,i.useState)({width:0,height:0}),[c,m]=(0,i.useState)(1),[h,p]=(0,i.useState)(1),[u,g]=(0,i.useState)({x:0,y:0}),[x,M]=(0,i.useState)({minX:0,maxX:0,minY:0,maxY:0}),[k,j]=(0,i.useState)(!1),[v,w]=(0,i.useState)({x:0,y:0}),f=s.find(e=>e.name===n),y=(0,i.useRef)(null),P=(0,i.useRef)(null),b=(e,n)=>{let a=Math.min(Math.max(e,x.minX),x.maxX),t=Math.min(Math.max(n,x.minY),x.maxY);return{x:a,y:t}},_=(e,n)=>{let a;return function(){let t=this,i=arguments;clearTimeout(a),a=setTimeout(()=>e.apply(t,i),n)}},S=_(()=>{m(e=>Math.min(e+1,10))},50),z=_(()=>{m(e=>Math.max(e-1,1))},50),R=e=>{j(!0),"touchstart"===e.type&&(e.preventDefault(),w({x:e.touches[0].clientX,y:e.touches[0].clientY}))},B=e=>{j(!1),"touchend"===e.type&&e.preventDefault()},E=e=>{if(k){let n,a;if("touchmove"===e.type){e.preventDefault();let t=e.touches[0].clientX,i=e.touches[0].clientY;n=t-v.x,a=i-v.y,w({x:t,y:i})}else n=e.movementX,a=e.movementY;g(e=>{let t=e.x+n,i=e.y+a,s=b(t,i);return s})}},C=e=>{j(!1),"touchcancel"===e.type&&e.preventDefault()};return(0,i.useEffect)(()=>{let e=document.getElementById("viewport"),n={mousedown:R,mouseup:B,mousemove:E,mouseleave:C,touchstart:R,touchend:B,touchmove:E,touchcancel:C};if(k)for(let[a,t]of Object.entries(n))"mousedown"!==a&&"touchstart"!==a?e.addEventListener(a,t):e.removeEventListener(a,t);else for(let[a,t]of Object.entries(n))"mousedown"===a||"touchstart"===a?e.addEventListener(a,t):e.removeEventListener(a,t);return()=>{for(let[a,t]of Object.entries(n))e.removeEventListener(a,t)}},[k]),(0,i.useEffect)(()=>{let e=document.getElementById("layers");e.style.transform="translate(".concat(u.x,"px, ").concat(u.y,"px) scale(").concat(c,")"),e.style.transition="transform 50ms ease"},[u]),(0,i.useEffect)(()=>{let e=document.getElementById("layers"),n=b(u.x,u.y);e.style.transform="translate(".concat(n.x,"px, ").concat(n.y,"px) scale(").concat(c,")"),e.style.transition="transform 1000ms ease"},[c,x]),(0,i.useEffect)(()=>{if(!y.current)return;let e=new ResizeObserver(()=>{y.current.offsetWidth!==a.width&&(r({width:y.current.offsetWidth,height:y.current.offsetHeight}),l({width:P.current.offsetWidth,height:P.current.offsetHeight}),p(P.current.offsetWidth/f.size.width))});return e.observe(y.current),()=>e.disconnect()},[y]),(0,i.useEffect)(()=>{M(()=>{let e=(a.width-d.width*c)/2,n=(d.width*c-a.width)/2,t=(a.height-d.height*c)/2,i=(d.height*c-a.height)/2;return{minX:e,maxX:n,minY:t,maxY:i}})},[a,c]),console.log("viewportSize: ",Object.values(a)),console.log("mapSize: ",Object.values(d)),console.log("zoom: ",c),console.log("scale: ",h),console.log("position: ",Object.values(u)),console.log("boundaries: ",Object.values(x)),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsxs)("div",{className:o().buttons,children:[(0,t.jsx)("button",{className:o().zoomButton,onClick:S,children:"+"}),(0,t.jsx)("button",{className:o().zoomButton,onClick:z,children:"-"})]}),(0,t.jsx)("div",{id:"viewport",className:o().viewport,ref:y,children:(0,t.jsxs)("div",{id:"layers",className:o().layers,ref:P,children:[(0,t.jsx)("div",{id:"mapImg",className:o().mapImg,children:(0,t.jsx)("img",{src:f.image,alt:"".concat(n),draggable:"false"})}),(0,t.jsx)("div",{id:"pins",className:o().pins,children:f.secretRooms&&f.secretRooms.map((e,n)=>(0,t.jsx)("div",{className:o().pin,style:{left:e.x*h,top:e.y*h}},n))})]})})]})})}},979:function(e,n,a){"use strict";var t=a(5893),i=a(1163);n.Z={logo:(0,t.jsx)("span",{className:"logo",children:"PUBG Resource"}),project:{link:"https://github.com/shuding/nextra"},useNextSeoProps(){let{asPath:e}=(0,i.useRouter)();return"/"!==e?{titleTemplate:"%s – PUBG Resource"}:{titleTemplate:"PUBG Resource"}},head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"PUBG Resource"}),(0,t.jsx)("meta",{property:"og:description",content:"Gaming resources for PUBG players"}),(0,t.jsx)("link",{rel:"icon",href:"/img/favicon.png"})]}),feedback:{content:null},sidebar:{defaultMenuCollapseLevel:1},footer:{text:(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{href:"https://pubgresource.com",target:"_blank",children:"PUBG Resource"})," ","\xa9"," ",new Date().getFullYear()]})}}},1554:function(e,n,a){"use strict";a.r(n);var t=a(5893),i=a(2673),s=a(3931),r=a(979);a(9966);var o=a(1151);a(5675);var d=a(3464);let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/maps/vikendi.mdx",route:"/maps/vikendi",headings:[{depth:2,value:"Map",id:"map"},{depth:2,value:"Details",id:"details"},{depth:2,value:"Vehicles",id:"vehicles"},{depth:2,value:"Weapons",id:"weapons"},{depth:2,value:"Supply Crates",id:"supply-crates"},{depth:2,value:"Features",id:"features"},{depth:2,value:"Events",id:"events"},{depth:2,value:"Respawn",id:"respawn"}],pageMap:[{kind:"Meta",data:{index:"Home",maps:"Maps",vehicles:"Vehicles",weapons:"Weapons","tactical-gear":"Tactical Gear",items:"Items",streamers:"Streamers",sponsor:"Sponsor",contact:"Contact",privacy:"Privacy"}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"items",route:"/items"},{kind:"Folder",name:"maps",route:"/maps",children:[{kind:"Meta",data:{erengal:"Erengal",miramar:"Miramar",vikendi:"Vikendi",sanhok:"Sanhok",karakin:"Karakin",paramo:"Paramo",haven:"Haven",taego:"Taego",deston:"Deston"}},{kind:"MdxPage",name:"deston",route:"/maps/deston"},{kind:"MdxPage",name:"erengal",route:"/maps/erengal"},{kind:"MdxPage",name:"haven",route:"/maps/haven"},{kind:"MdxPage",name:"karakin",route:"/maps/karakin"},{kind:"MdxPage",name:"miramar",route:"/maps/miramar"},{kind:"MdxPage",name:"paramo",route:"/maps/paramo"},{kind:"MdxPage",name:"sanhok",route:"/maps/sanhok"},{kind:"MdxPage",name:"taego",route:"/maps/taego"},{kind:"MdxPage",name:"vikendi",route:"/maps/vikendi"}]},{kind:"MdxPage",name:"maps",route:"/maps"},{kind:"MdxPage",name:"privacy",route:"/privacy"},{kind:"MdxPage",name:"sponsor",route:"/sponsor"},{kind:"MdxPage",name:"streamers",route:"/streamers"},{kind:"MdxPage",name:"tactical-gear",route:"/tactical-gear"},{kind:"MdxPage",name:"vehicles",route:"/vehicles"},{kind:"Folder",name:"weapons",route:"/weapons",children:[{kind:"Meta",data:{main:"Main",sidearms:"Sidearms",melee:"Melee",throwables:"Throwables",attachments:"Attachments",meta:"Meta","stat-tables":"Stat Tables"}},{kind:"MdxPage",name:"attachments",route:"/weapons/attachments"},{kind:"Folder",name:"main",route:"/weapons/main",children:[{kind:"Meta",data:{smg:"SMGs",ar:"ARs",lmg:"LMGs",dmr:"DMRs",sr:"Snipers",sg:"Shotguns",misc:"MISC",ap:"Anti Personel"}},{kind:"MdxPage",name:"ap",route:"/weapons/main/ap"},{kind:"MdxPage",name:"ar",route:"/weapons/main/ar"},{kind:"MdxPage",name:"dmr",route:"/weapons/main/dmr"},{kind:"MdxPage",name:"lmg",route:"/weapons/main/lmg"},{kind:"MdxPage",name:"misc",route:"/weapons/main/misc"},{kind:"MdxPage",name:"sg",route:"/weapons/main/sg"},{kind:"MdxPage",name:"smg",route:"/weapons/main/smg"},{kind:"MdxPage",name:"sr",route:"/weapons/main/sr"}]},{kind:"MdxPage",name:"melee",route:"/weapons/melee"},{kind:"MdxPage",name:"meta",route:"/weapons/meta"},{kind:"MdxPage",name:"sidearms",route:"/weapons/sidearms"},{kind:"MdxPage",name:"stat-tables",route:"/weapons/stat-tables"},{kind:"MdxPage",name:"throwables",route:"/weapons/throwables"}]},{kind:"MdxPage",name:"weapons",route:"/weapons"}],flexsearch:{codeblocks:!0},title:"Vikendi"},pageNextRoute:"/maps/vikendi",nextraLayout:s.ZP,themeConfig:r.Z};function c(e){let n=Object.assign({h2:"h2",p:"p",br:"br",strong:"strong",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"map",children:"Map"}),"\n",(0,t.jsx)(d.Z,{name:"Vikendi"}),"\n",(0,t.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,t.jsxs)(n.p,{children:["Status: Active",(0,t.jsx)(n.br,{}),"\n","Players: 100",(0,t.jsx)(n.br,{}),"\n","Grid Size: 8x8",(0,t.jsx)(n.br,{}),"\n","Area: 64 km",(0,t.jsx)("sup",{children:"2"}),(0,t.jsx)(n.br,{}),"\n","Region: Europe"]}),"\n",(0,t.jsx)(n.h2,{id:"vehicles",children:"Vehicles"}),"\n",(0,t.jsx)(n.p,{children:"Dacia / Coupe RB / Motorbike / Sidecar Motorbike / Quad / Zima / Snowmobile / Pony Coupe / Mountain Bike / Glider / BRDM-2"}),"\n",(0,t.jsx)(n.h2,{id:"weapons",children:"Weapons"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SMG"}),": Tommy Gun / UMP45 / Micro Uzi / Vector / PP-19 Bizon"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AR"}),": M16A4 / M416 / SCAR-L / AUG A3 / AKM / Beryl M762 / MK47 Mutant / ACE32"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LMG"}),": M249 / DP-28"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DMR"}),": Mini14 / Mk12 / SKS / SLR / VSS"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SR"}),": Kar98k / Mosin Nagan / M24"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Shotgun"}),": S12K / S1897 / S686 / Sawed Off"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pistol"}),": P18C / P92 / P1911 / R1895"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Melee"}),": Crowbar / Machete / Pan / Sickle"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Throwable"}),": Stun Grenade / Frag Grenade / Molotov Cocktail / Smoke Grenade / BZ Grenade / C4"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Anti-Personel"}),": Mortar"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ETC"}),": Crossbow"]}),"\n",(0,t.jsx)(n.h2,{id:"supply-crates",children:"Supply Crates"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"P90 / FAMAS / Groza / MG3 / Mk14 / AWM"}),"\n",(0,t.jsx)(n.li,{children:"Lvl 3 Vest"}),"\n",(0,t.jsx)(n.li,{children:"LVl 3 Helmet"}),"\n",(0,t.jsx)(n.li,{children:"Snow Guille Suit"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Cable Car"})}),"\n",(0,t.jsx)(n.p,{children:"Vikendi features cable cars to rapidly tranist the map. Cable cars can fit vehicles."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Train"})}),"\n",(0,t.jsx)(n.p,{children:"Vikendi also features 2 train routes with trains that travel back and forth from their stops."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Locked Rooms"})}),"\n",(0,t.jsx)(n.p,{children:"Vikendi features locked rooms that can be accessed with a crowbar."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Polar Bears"})}),"\n",(0,t.jsx)(n.p,{children:"Polar Bears stalk near mountain caves and will attack players within range."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Thermal Scope"})}),"\n",(0,t.jsx)(n.p,{children:"Vikendi exclusively features a thermal scope that dectects player heat signatures within range. However this scope has a very low resolution."}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Blizzard"})}),"\n",(0,t.jsx)(n.p,{children:"Blizzards appear randomly on the map. Entering the blizzard will reduce player visibility, cause icing of optics and slowly reduce player health."}),"\n",(0,t.jsx)(n.h2,{id:"respawn",children:"Respawn"}),"\n",(0,t.jsx)(n.p,{children:"Vikendi features a respawn mode in the form of 2 comeback arenas. Players must survive enemy players in the comeback arena to return to the game and rejoin the game."})]})}n.default=(0,i.j)(l)},1740:function(e){e.exports={container:"MapBox_container__I6lPX",viewport:"MapBox_viewport__sPvvO",layers:"MapBox_layers__i0ANg",mapImg:"MapBox_mapImg__cz3Iz",pins:"MapBox_pins__v5Ur7",pin:"MapBox_pin__Bdejt",buttons:"MapBox_buttons__nRWqW",zoomButton:"MapBox_zoomButton__uTqsp"}}},function(e){e.O(0,[533,774,888,179],function(){return e(e.s=6981)}),_N_E=e.O()}]);