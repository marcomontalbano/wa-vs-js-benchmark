(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(s,e,a){"use strict";a.r(e);var t=a(146),n=a.n(t),j=a(147),r=a.n(j);const o=s=>{const e=new s,a=[];e.onmessage=function(s){a[parseInt(s.data.id)].resolve(s.data)};return{postMessage:s=>new Promise((t,n)=>{setTimeout(()=>{(s=>{const t=a.length;return new Promise((n,j)=>{a[t]={resolve:n,reject:j},e.postMessage({id:t,payload:s})})})(s).then(t).catch(n)},100)})}},l=o(n.a),d=o(r.a),c=s=>s.reduce((s,e)=>s.then(s=>e().then([].concat.bind(s))),Promise.resolve([])),i=(s,e=5,a=(s=>s))=>c(((s,e)=>s.reduce((s,a)=>s.concat(Array(e).fill(a)),[]))([()=>l.postMessage(s).then(a),()=>d.postMessage(s).then(a)],e));var m=a(148),u=a.n(m);const h=s=>{let e=document.createElement("a");e.id=`method--${s.method}`,e.classList.add("chart-container");let a=document.createElement("canvas"),t=((s,e)=>new u.a(s,{type:"line",data:{labels:[],datasets:[{label:"JS Benchmark",data:[],fill:!1,backgroundColor:"#ffccd7",borderColor:"#ff6183"},{label:"RS Benchmark",data:[],fill:!1,backgroundColor:"#d1eafa",borderColor:"#37a3eb"}]},options:{responsive:!0,title:{display:!0,text:e},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Index"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"ms"}}]}}}))(a,`${s.method}(${s.args.join(", ")})`);return e.appendChild(a),document.getElementById("root").appendChild(e),()=>((s,e,a=5)=>i(s,a,s=>(((s,e,a)=>{s.data.datasets.forEach(s=>{s.label===e&&s.data.push(a)}),s.data.datasets.reduce((s,e)=>s<e.data.length?e.data.length:s,0)>s.data.labels.length&&s.data.labels.push(s.data.labels.length+1),s.update()})(e,`${s.workerName.toUpperCase()} Benchmark`,s.performance.measure.duration.toFixed(2)),console.log(s),s)).then(s=>{console.log(s)}))(s,t)};c([h({method:"get_primes",args:[1e5]}),h({method:"multiply",args:[500,500]})])},146:function(s,e,a){s.exports=function(){return new Worker(a.p+"js/worker.8c391da84a66a3278ad5.js")}},147:function(s,e,a){s.exports=function(){return new Worker(a.p+"js/worker.3d71c4a8183ba3e4b6c4.js")}},173:function(s,e,a){var t={"./af":19,"./af.js":19,"./ar":20,"./ar-dz":21,"./ar-dz.js":21,"./ar-kw":22,"./ar-kw.js":22,"./ar-ly":23,"./ar-ly.js":23,"./ar-ma":24,"./ar-ma.js":24,"./ar-sa":25,"./ar-sa.js":25,"./ar-tn":26,"./ar-tn.js":26,"./ar.js":20,"./az":27,"./az.js":27,"./be":28,"./be.js":28,"./bg":29,"./bg.js":29,"./bm":30,"./bm.js":30,"./bn":31,"./bn.js":31,"./bo":32,"./bo.js":32,"./br":33,"./br.js":33,"./bs":34,"./bs.js":34,"./ca":35,"./ca.js":35,"./cs":36,"./cs.js":36,"./cv":37,"./cv.js":37,"./cy":38,"./cy.js":38,"./da":39,"./da.js":39,"./de":40,"./de-at":41,"./de-at.js":41,"./de-ch":42,"./de-ch.js":42,"./de.js":40,"./dv":43,"./dv.js":43,"./el":44,"./el.js":44,"./en-SG":45,"./en-SG.js":45,"./en-au":46,"./en-au.js":46,"./en-ca":47,"./en-ca.js":47,"./en-gb":48,"./en-gb.js":48,"./en-ie":49,"./en-ie.js":49,"./en-il":50,"./en-il.js":50,"./en-nz":51,"./en-nz.js":51,"./eo":52,"./eo.js":52,"./es":53,"./es-do":54,"./es-do.js":54,"./es-us":55,"./es-us.js":55,"./es.js":53,"./et":56,"./et.js":56,"./eu":57,"./eu.js":57,"./fa":58,"./fa.js":58,"./fi":59,"./fi.js":59,"./fo":60,"./fo.js":60,"./fr":61,"./fr-ca":62,"./fr-ca.js":62,"./fr-ch":63,"./fr-ch.js":63,"./fr.js":61,"./fy":64,"./fy.js":64,"./ga":65,"./ga.js":65,"./gd":66,"./gd.js":66,"./gl":67,"./gl.js":67,"./gom-latn":68,"./gom-latn.js":68,"./gu":69,"./gu.js":69,"./he":70,"./he.js":70,"./hi":71,"./hi.js":71,"./hr":72,"./hr.js":72,"./hu":73,"./hu.js":73,"./hy-am":74,"./hy-am.js":74,"./id":75,"./id.js":75,"./is":76,"./is.js":76,"./it":77,"./it-ch":78,"./it-ch.js":78,"./it.js":77,"./ja":79,"./ja.js":79,"./jv":80,"./jv.js":80,"./ka":81,"./ka.js":81,"./kk":82,"./kk.js":82,"./km":83,"./km.js":83,"./kn":84,"./kn.js":84,"./ko":85,"./ko.js":85,"./ku":86,"./ku.js":86,"./ky":87,"./ky.js":87,"./lb":88,"./lb.js":88,"./lo":89,"./lo.js":89,"./lt":90,"./lt.js":90,"./lv":91,"./lv.js":91,"./me":92,"./me.js":92,"./mi":93,"./mi.js":93,"./mk":94,"./mk.js":94,"./ml":95,"./ml.js":95,"./mn":96,"./mn.js":96,"./mr":97,"./mr.js":97,"./ms":98,"./ms-my":99,"./ms-my.js":99,"./ms.js":98,"./mt":100,"./mt.js":100,"./my":101,"./my.js":101,"./nb":102,"./nb.js":102,"./ne":103,"./ne.js":103,"./nl":104,"./nl-be":105,"./nl-be.js":105,"./nl.js":104,"./nn":106,"./nn.js":106,"./pa-in":107,"./pa-in.js":107,"./pl":108,"./pl.js":108,"./pt":109,"./pt-br":110,"./pt-br.js":110,"./pt.js":109,"./ro":111,"./ro.js":111,"./ru":112,"./ru.js":112,"./sd":113,"./sd.js":113,"./se":114,"./se.js":114,"./si":115,"./si.js":115,"./sk":116,"./sk.js":116,"./sl":117,"./sl.js":117,"./sq":118,"./sq.js":118,"./sr":119,"./sr-cyrl":120,"./sr-cyrl.js":120,"./sr.js":119,"./ss":121,"./ss.js":121,"./sv":122,"./sv.js":122,"./sw":123,"./sw.js":123,"./ta":124,"./ta.js":124,"./te":125,"./te.js":125,"./tet":126,"./tet.js":126,"./tg":127,"./tg.js":127,"./th":128,"./th.js":128,"./tl-ph":129,"./tl-ph.js":129,"./tlh":130,"./tlh.js":130,"./tr":131,"./tr.js":131,"./tzl":132,"./tzl.js":132,"./tzm":133,"./tzm-latn":134,"./tzm-latn.js":134,"./tzm.js":133,"./ug-cn":135,"./ug-cn.js":135,"./uk":136,"./uk.js":136,"./ur":137,"./ur.js":137,"./uz":138,"./uz-latn":139,"./uz-latn.js":139,"./uz.js":138,"./vi":140,"./vi.js":140,"./x-pseudo":141,"./x-pseudo.js":141,"./yo":142,"./yo.js":142,"./zh-cn":143,"./zh-cn.js":143,"./zh-hk":144,"./zh-hk.js":144,"./zh-tw":145,"./zh-tw.js":145};function n(s){var e=j(s);return a(e)}function j(s){if(!a.o(t,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t[s]}n.keys=function(){return Object.keys(t)},n.resolve=j,s.exports=n,n.id=173}}]);