(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{5994:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/weapons/main/smg",function(){return n(1108)}])},8288:function(e,a,n){"use strict";var s=n(5893),i=n(5506),t=n.n(i),d=n(6187),r=n(4513);a.Z=e=>{let a,{name:n}=e,i=d.Z.find(e=>e.name===n);if(!i)return(0,s.jsx)("div",{children:"Error: Weapon not found"});let{class:o,type:h,image:l,link:m,caliber:c,capacity:x,ironSiteZero:p,fireSelect:j,damage:g,rof:u,velocity:M,range:k}=i;return a="AP"==h||"MISC"==h||"SG"==h?3:2,(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:t().weaponContainer,children:[(0,s.jsx)("div",{className:t().imageContainer,children:(0,s.jsx)("img",{src:l,alt:"Weapon",className:t().weaponImage})}),(0,s.jsx)("aside",{className:t().aside,children:(0,s.jsxs)("div",{className:t().infoContainer,children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Caliber:"})," ",c]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Capacity:"})," ",x]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Iron Site Zero:"})," ",p]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Fire Select:"})," ",j]})]})})]}),(0,s.jsxs)("div",{weaponClass:t().statsContainer,children:[(0,s.jsx)(r.Z,{label:"Damage",value:g,max:"AP"==h?300:125}),(0,s.jsx)(r.Z,{label:"Damage Per Second",value:Math.round(1/u*g),max:1e3}),(0,s.jsx)(r.Z,{label:"Rate of Fire",value:a,fill:a-u,max:3}),(0,s.jsx)(r.Z,{label:"Rounds Per Minute",value:Math.round(1/u*60),max:1500}),(0,s.jsx)(r.Z,{label:"Muzzle Velocity",value:M,max:1200}),(0,s.jsx)(r.Z,{label:"Range",value:k,max:1e3})]})]})}},1108:function(e,a,n){"use strict";n.r(a);var s=n(5893),i=n(2673),t=n(3931),d=n(979);n(9966);var r=n(1151);n(5675);var o=n(8288);let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/weapons/main/smg.mdx",route:"/weapons/main/smg",headings:[{depth:2,value:"Thompson",id:"thompson"},{depth:3,value:"Map Availability",id:"map-availability"},{depth:3,value:"Attachments",id:"attachments"},{depth:2,value:"UMP45",id:"ump45"},{depth:2,value:"Micro Uzi",id:"micro-uzi"},{depth:2,value:"Vector",id:"vector"},{depth:2,value:"PP-19 Bizon",id:"pp-19-bizon"},{depth:2,value:"MP5K",id:"mp5k"},{depth:2,value:"MP9",id:"mp9"},{depth:2,value:"P90",id:"p90"},{depth:2,value:"Stat Sheet",id:"stat-sheet"}],pageMap:[{kind:"Meta",data:{index:"Home",maps:"Maps",vehicles:"Vehicles",weapons:"Weapons","tactical-gear":"Tactical Gear",items:"Items",streamers:"Streamers",sponsor:"Sponsor",contact:"Contact",privacy:"Privacy"}},{kind:"MdxPage",name:"contact",route:"/contact"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"items",route:"/items"},{kind:"Folder",name:"maps",route:"/maps",children:[{kind:"Meta",data:{erengal:"Erengal",miramar:"Miramar",vikendi:"Vikendi",sanhok:"Sanhok",karakin:"Karakin",paramo:"Paramo",haven:"Haven",taego:"Taego",deston:"Deston"}},{kind:"MdxPage",name:"deston",route:"/maps/deston"},{kind:"MdxPage",name:"erengal",route:"/maps/erengal"},{kind:"MdxPage",name:"haven",route:"/maps/haven"},{kind:"MdxPage",name:"karakin",route:"/maps/karakin"},{kind:"MdxPage",name:"miramar",route:"/maps/miramar"},{kind:"MdxPage",name:"paramo",route:"/maps/paramo"},{kind:"MdxPage",name:"sanhok",route:"/maps/sanhok"},{kind:"MdxPage",name:"taego",route:"/maps/taego"},{kind:"MdxPage",name:"vikendi",route:"/maps/vikendi"}]},{kind:"MdxPage",name:"maps",route:"/maps"},{kind:"MdxPage",name:"privacy",route:"/privacy"},{kind:"MdxPage",name:"sponsor",route:"/sponsor"},{kind:"MdxPage",name:"streamers",route:"/streamers"},{kind:"MdxPage",name:"tactical-gear",route:"/tactical-gear"},{kind:"MdxPage",name:"vehicles",route:"/vehicles"},{kind:"Folder",name:"weapons",route:"/weapons",children:[{kind:"Meta",data:{main:"Main",sidearms:"Sidearms",melee:"Melee",throwables:"Throwables",attachments:"Attachments",meta:"Meta","stat-tables":"Stat Tables"}},{kind:"MdxPage",name:"attachments",route:"/weapons/attachments"},{kind:"Folder",name:"main",route:"/weapons/main",children:[{kind:"Meta",data:{smg:"SMGs",ar:"ARs",lmg:"LMGs",dmr:"DMRs",sr:"Snipers",sg:"Shotguns",misc:"MISC",ap:"Anti Personel"}},{kind:"MdxPage",name:"ap",route:"/weapons/main/ap"},{kind:"MdxPage",name:"ar",route:"/weapons/main/ar"},{kind:"MdxPage",name:"dmr",route:"/weapons/main/dmr"},{kind:"MdxPage",name:"lmg",route:"/weapons/main/lmg"},{kind:"MdxPage",name:"misc",route:"/weapons/main/misc"},{kind:"MdxPage",name:"sg",route:"/weapons/main/sg"},{kind:"MdxPage",name:"smg",route:"/weapons/main/smg"},{kind:"MdxPage",name:"sr",route:"/weapons/main/sr"}]},{kind:"MdxPage",name:"melee",route:"/weapons/melee"},{kind:"MdxPage",name:"meta",route:"/weapons/meta"},{kind:"MdxPage",name:"sidearms",route:"/weapons/sidearms"},{kind:"MdxPage",name:"stat-tables",route:"/weapons/stat-tables"},{kind:"MdxPage",name:"throwables",route:"/weapons/throwables"}]},{kind:"MdxPage",name:"weapons",route:"/weapons"}],flexsearch:{codeblocks:!0},title:"Smg"},pageNextRoute:"/weapons/main/smg",nextraLayout:t.ZP,themeConfig:d.Z};function l(e){let a=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a",strong:"strong",br:"br",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:["\n",(0,s.jsx)(a.h2,{id:"thompson",children:"Thompson"}),"\n",(0,s.jsx)(o.Z,{name:"Thompson"}),"\n",(0,s.jsx)(a.h3,{id:"map-availability",children:"Map Availability"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/maps/erengal",children:"Erengal"}),",\n",(0,s.jsx)(a.a,{href:"/maps/miramar",children:"Miramar"}),",\n",(0,s.jsx)(a.a,{href:"/maps/vikendi",children:"Vikendi"}),",\n",(0,s.jsx)(a.a,{href:"/maps/sanhok",children:"Sanhok"}),",\n",(0,s.jsx)(a.a,{href:"/maps/karakin",children:"Karakin"}),",\n",(0,s.jsx)(a.a,{href:"/maps/paramo",children:"Paramo"}),",\n",(0,s.jsx)(a.a,{href:"/maps/haven",children:"Haven"}),",\n",(0,s.jsx)(a.a,{href:"/maps/taego",children:"Taego"}),",\n",(0,s.jsx)(a.a,{href:"/maps/deston",children:"Deston"})]}),"\n",(0,s.jsx)(a.h3,{id:"attachments",children:"Attachments"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Barrel"}),": Compensator, Flash Hider, Supressor",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.strong,{children:"Grip"}),": Vert Grip",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.strong,{children:"Magazine"}),": Quick Mag, Extended Mag, Quick Extended Mag",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.strong,{children:"Sight"}),": Red Dot, Holographic",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.strong,{children:"Stock"}),": N/A"]}),"\n",(0,s.jsxs)(a.p,{children:["IRL: Thompson M1A1",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Thompson_submachine_gun",children:"Wikipedia"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"https://www.forgottenweapons.com/the-iconic-american-ww2-thompson-the-m1a1/",children:"Forgotten Weapons"})]}),"\n",(0,s.jsx)(a.h2,{id:"ump45",children:"UMP45"}),"\n",(0,s.jsx)(o.Z,{name:"UMP45"}),"\n",(0,s.jsx)(a.h2,{id:"micro-uzi",children:"Micro Uzi"}),"\n",(0,s.jsx)(o.Z,{name:"Micro Uzi"}),"\n",(0,s.jsx)(a.h2,{id:"vector",children:"Vector"}),"\n",(0,s.jsx)(o.Z,{name:"Vector"}),"\n",(0,s.jsx)(a.h2,{id:"pp-19-bizon",children:"PP-19 Bizon"}),"\n",(0,s.jsx)(o.Z,{name:"PP-19 Bizon"}),"\n",(0,s.jsx)(a.h2,{id:"mp5k",children:"MP5K"}),"\n",(0,s.jsx)(o.Z,{name:"MP5K"}),"\n",(0,s.jsx)(a.h2,{id:"mp9",children:"MP9"}),"\n",(0,s.jsx)(o.Z,{name:"MP9"}),"\n",(0,s.jsx)(a.h2,{id:"p90",children:"P90"}),"\n",(0,s.jsx)(o.Z,{name:"P90"}),"\n",(0,s.jsx)(a.h2,{id:"stat-sheet",children:"Stat Sheet"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Weapon"}),(0,s.jsx)(a.th,{children:"Cal"}),(0,s.jsx)(a.th,{children:"Base Damage"}),(0,s.jsx)(a.th,{children:"Capacity"}),(0,s.jsx)(a.th,{children:"DPS"}),(0,s.jsx)(a.th,{children:"Range"}),(0,s.jsx)(a.th,{children:"Fire Rate"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Thompson"}),(0,s.jsx)(a.td,{children:".45acp"}),(0,s.jsx)(a.td,{children:"42"}),(0,s.jsx)(a.td,{children:"30/50"}),(0,s.jsx)(a.td,{children:"100"}),(0,s.jsx)(a.td,{children:"45"}),(0,s.jsx)(a.td,{children:"20"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"UMP45"}),(0,s.jsx)(a.td,{children:".45acp"}),(0,s.jsx)(a.td,{children:"43"}),(0,s.jsx)(a.td,{children:"25"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Micro Uzi"}),(0,s.jsx)(a.td,{children:"9mm"}),(0,s.jsx)(a.td,{children:"27"}),(0,s.jsx)(a.td,{children:"25"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Vector"}),(0,s.jsx)(a.td,{children:"9mm"}),(0,s.jsx)(a.td,{children:"32"}),(0,s.jsx)(a.td,{children:"19"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"PP-19 Bizon"}),(0,s.jsx)(a.td,{children:"9mm"}),(0,s.jsx)(a.td,{children:"36"}),(0,s.jsx)(a.td,{children:"53"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"MP5K"}),(0,s.jsx)(a.td,{children:"9mm"}),(0,s.jsx)(a.td,{children:"33"}),(0,s.jsx)(a.td,{children:"30"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"MP9"}),(0,s.jsx)(a.td,{children:"9mm"}),(0,s.jsx)(a.td,{children:"31"}),(0,s.jsx)(a.td,{children:"30"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"P90"}),(0,s.jsx)(a.td,{children:"5.7"}),(0,s.jsx)(a.td,{children:"35"}),(0,s.jsx)(a.td,{children:"50"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]})]})]})]})}a.default=(0,i.j)(h)},5506:function(e){e.exports={weaponContainer:"Weapon_weaponContainer__EATwi",imageContainer:"Weapon_imageContainer__hMTum",aside:"Weapon_aside__Z_Q2g",weaponImage:"Weapon_weaponImage__YLrRb",infoContainer:"Weapon_infoContainer__Hb7ga",label:"Weapon_label__23P7e"}}},function(e){e.O(0,[533,138,774,888,179],function(){return e(e.s=5994)}),_N_E=e.O()}]);