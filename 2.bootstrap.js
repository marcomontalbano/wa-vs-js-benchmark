(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(s,e,t){"use strict";t.r(e);var a=t(130),n=t.n(a),j=t(131),r=t.n(j);const o=s=>{const e=new s,t=[];e.onmessage=function(s){t[parseInt(s.data.id)].resolve(s.data)};return{postMessage:s=>new Promise((a,n)=>{setTimeout(()=>{(s=>{const a=t.length;return new Promise((n,j)=>{t[a]={resolve:n,reject:j},e.postMessage({id:a,payload:s})})})(s).then(a).catch(n)},100)})}},l=o(n.a),d=o(r.a),c=s=>s.reduce((s,e)=>s.then(s=>e().then([].concat.bind(s))),Promise.resolve([])),i=(s,e=5,t=(s=>s))=>c(((s,e)=>s.reduce((s,t)=>s.concat(Array(e).fill(t)),[]))([()=>l.postMessage(s).then(t),()=>d.postMessage(s).then(t)],e));var m=t(132),u=t.n(m);const h=s=>{let e=document.createElement("a");e.id=`method--${s.method}`,e.classList.add("chart-container");let t=document.createElement("canvas"),a=((s,e)=>new u.a(s,{type:"line",data:{labels:[],datasets:[{label:"JS Benchmark",data:[],fill:!1,backgroundColor:"#ffccd7",borderColor:"#ff6183"},{label:"RS Benchmark",data:[],fill:!1,backgroundColor:"#d1eafa",borderColor:"#37a3eb"}]},options:{responsive:!0,title:{display:!0,text:e},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Index"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"ms"}}]}}}))(t,`${s.method}(${s.args.join(", ")})`);return e.appendChild(t),document.getElementById("root").appendChild(e),()=>((s,e,t=5)=>i(s,t,s=>(((s,e,t)=>{s.data.datasets.forEach(s=>{s.label===e&&s.data.push(t)}),s.data.datasets.reduce((s,e)=>s<e.data.length?e.data.length:s,0)>s.data.labels.length&&s.data.labels.push(s.data.labels.length+1),s.update()})(e,`${s.workerName.toUpperCase()} Benchmark`,s.performance.measure.duration.toFixed(2)),console.log(s),s)).then(s=>{console.log(s)}))(s,a)};c([h({method:"get_primes",args:[1e5]}),h({method:"multiply",args:[500,500]})])},130:function(s,e,t){s.exports=function(){return new Worker(t.p+"js/worker.0a55cb784ff75fc0e9bc.js")}},131:function(s,e,t){s.exports=function(){return new Worker(t.p+"js/worker.63e6fbf8f3ddab8c9026.js")}},134:function(s,e,t){var a={"./af":3,"./af.js":3,"./ar":4,"./ar-dz":5,"./ar-dz.js":5,"./ar-kw":6,"./ar-kw.js":6,"./ar-ly":7,"./ar-ly.js":7,"./ar-ma":8,"./ar-ma.js":8,"./ar-sa":9,"./ar-sa.js":9,"./ar-tn":10,"./ar-tn.js":10,"./ar.js":4,"./az":11,"./az.js":11,"./be":12,"./be.js":12,"./bg":13,"./bg.js":13,"./bm":14,"./bm.js":14,"./bn":15,"./bn.js":15,"./bo":16,"./bo.js":16,"./br":17,"./br.js":17,"./bs":18,"./bs.js":18,"./ca":19,"./ca.js":19,"./cs":20,"./cs.js":20,"./cv":21,"./cv.js":21,"./cy":22,"./cy.js":22,"./da":23,"./da.js":23,"./de":24,"./de-at":25,"./de-at.js":25,"./de-ch":26,"./de-ch.js":26,"./de.js":24,"./dv":27,"./dv.js":27,"./el":28,"./el.js":28,"./en-SG":29,"./en-SG.js":29,"./en-au":30,"./en-au.js":30,"./en-ca":31,"./en-ca.js":31,"./en-gb":32,"./en-gb.js":32,"./en-ie":33,"./en-ie.js":33,"./en-il":34,"./en-il.js":34,"./en-nz":35,"./en-nz.js":35,"./eo":36,"./eo.js":36,"./es":37,"./es-do":38,"./es-do.js":38,"./es-us":39,"./es-us.js":39,"./es.js":37,"./et":40,"./et.js":40,"./eu":41,"./eu.js":41,"./fa":42,"./fa.js":42,"./fi":43,"./fi.js":43,"./fo":44,"./fo.js":44,"./fr":45,"./fr-ca":46,"./fr-ca.js":46,"./fr-ch":47,"./fr-ch.js":47,"./fr.js":45,"./fy":48,"./fy.js":48,"./ga":49,"./ga.js":49,"./gd":50,"./gd.js":50,"./gl":51,"./gl.js":51,"./gom-latn":52,"./gom-latn.js":52,"./gu":53,"./gu.js":53,"./he":54,"./he.js":54,"./hi":55,"./hi.js":55,"./hr":56,"./hr.js":56,"./hu":57,"./hu.js":57,"./hy-am":58,"./hy-am.js":58,"./id":59,"./id.js":59,"./is":60,"./is.js":60,"./it":61,"./it-ch":62,"./it-ch.js":62,"./it.js":61,"./ja":63,"./ja.js":63,"./jv":64,"./jv.js":64,"./ka":65,"./ka.js":65,"./kk":66,"./kk.js":66,"./km":67,"./km.js":67,"./kn":68,"./kn.js":68,"./ko":69,"./ko.js":69,"./ku":70,"./ku.js":70,"./ky":71,"./ky.js":71,"./lb":72,"./lb.js":72,"./lo":73,"./lo.js":73,"./lt":74,"./lt.js":74,"./lv":75,"./lv.js":75,"./me":76,"./me.js":76,"./mi":77,"./mi.js":77,"./mk":78,"./mk.js":78,"./ml":79,"./ml.js":79,"./mn":80,"./mn.js":80,"./mr":81,"./mr.js":81,"./ms":82,"./ms-my":83,"./ms-my.js":83,"./ms.js":82,"./mt":84,"./mt.js":84,"./my":85,"./my.js":85,"./nb":86,"./nb.js":86,"./ne":87,"./ne.js":87,"./nl":88,"./nl-be":89,"./nl-be.js":89,"./nl.js":88,"./nn":90,"./nn.js":90,"./pa-in":91,"./pa-in.js":91,"./pl":92,"./pl.js":92,"./pt":93,"./pt-br":94,"./pt-br.js":94,"./pt.js":93,"./ro":95,"./ro.js":95,"./ru":96,"./ru.js":96,"./sd":97,"./sd.js":97,"./se":98,"./se.js":98,"./si":99,"./si.js":99,"./sk":100,"./sk.js":100,"./sl":101,"./sl.js":101,"./sq":102,"./sq.js":102,"./sr":103,"./sr-cyrl":104,"./sr-cyrl.js":104,"./sr.js":103,"./ss":105,"./ss.js":105,"./sv":106,"./sv.js":106,"./sw":107,"./sw.js":107,"./ta":108,"./ta.js":108,"./te":109,"./te.js":109,"./tet":110,"./tet.js":110,"./tg":111,"./tg.js":111,"./th":112,"./th.js":112,"./tl-ph":113,"./tl-ph.js":113,"./tlh":114,"./tlh.js":114,"./tr":115,"./tr.js":115,"./tzl":116,"./tzl.js":116,"./tzm":117,"./tzm-latn":118,"./tzm-latn.js":118,"./tzm.js":117,"./ug-cn":119,"./ug-cn.js":119,"./uk":120,"./uk.js":120,"./ur":121,"./ur.js":121,"./uz":122,"./uz-latn":123,"./uz-latn.js":123,"./uz.js":122,"./vi":124,"./vi.js":124,"./x-pseudo":125,"./x-pseudo.js":125,"./yo":126,"./yo.js":126,"./zh-cn":127,"./zh-cn.js":127,"./zh-hk":128,"./zh-hk.js":128,"./zh-tw":129,"./zh-tw.js":129};function n(s){var e=j(s);return t(e)}function j(s){if(!t.o(a,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=j,s.exports=n,n.id=134}}]);