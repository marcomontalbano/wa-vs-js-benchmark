(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(s,e,a){"use strict";a.r(e);const t=s=>{const e=new s,a=[];e.onmessage=function(s){a[parseInt(s.data.id)].resolve(s.data)};return{postMessage:s=>new Promise((t,j)=>{setTimeout(()=>{(s=>{const t=a.length;return new Promise((j,n)=>{a[t]={resolve:j,reject:n},e.postMessage({id:t,payload:s})})})(s).then(t).catch(j)},100)})}},j=t((function(){return new Worker(a.p+"js/worker.0d5e5eda1f8620dc3d33.js")})),n=t((function(){return new Worker(a.p+"js/worker.4602f3b1807970a93f76.js")})),r=s=>s.reduce((s,e)=>s.then(s=>e().then([].concat.bind(s))),Promise.resolve([])),o=(s,e=5,a=(s=>s))=>r(((s,e)=>s.reduce((s,a)=>s.concat(Array(e).fill(a)),[]))([()=>j.postMessage(s).then(a),()=>n.postMessage(s).then(a)],e));var l=a(136),d=a.n(l);const c=s=>{let e=document.createElement("a");e.id="method--"+s.method,e.classList.add("chart-container");let a=document.createElement("canvas"),t=(j=a,n=`${s.method}(${s.args.join(", ")})`,new d.a(j,{type:"line",data:{labels:[],datasets:[{label:"JS Benchmark",data:[],fill:!1,backgroundColor:"#ffccd7",borderColor:"#ff6183"},{label:"RS Benchmark",data:[],fill:!1,backgroundColor:"#d1eafa",borderColor:"#37a3eb"}]},options:{responsive:!0,title:{display:!0,text:n},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Index"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"ms"}}]}}}));var j,n;return e.appendChild(a),document.getElementById("root").appendChild(e),()=>((s,e,a=5)=>o(s,a,s=>(((s,e,a)=>{s.data.datasets.forEach(s=>{s.label===e&&s.data.push(a)});s.data.datasets.reduce((s,e)=>s<e.data.length?e.data.length:s,0)>s.data.labels.length&&s.data.labels.push(s.data.labels.length+1),s.update()})(e,s.workerName.toUpperCase()+" Benchmark",s.performance.measure.duration.toFixed(2)),console.log(s),s)).then(s=>{console.log(s)}))(s,t)};r([c({method:"get_primes",args:[1e5]}),c({method:"multiply",args:[500,500]})])},138:function(s,e,a){var t={"./af":3,"./af.js":3,"./ar":4,"./ar-dz":5,"./ar-dz.js":5,"./ar-kw":6,"./ar-kw.js":6,"./ar-ly":7,"./ar-ly.js":7,"./ar-ma":8,"./ar-ma.js":8,"./ar-sa":9,"./ar-sa.js":9,"./ar-tn":10,"./ar-tn.js":10,"./ar.js":4,"./az":11,"./az.js":11,"./be":12,"./be.js":12,"./bg":13,"./bg.js":13,"./bm":14,"./bm.js":14,"./bn":15,"./bn.js":15,"./bo":16,"./bo.js":16,"./br":17,"./br.js":17,"./bs":18,"./bs.js":18,"./ca":19,"./ca.js":19,"./cs":20,"./cs.js":20,"./cv":21,"./cv.js":21,"./cy":22,"./cy.js":22,"./da":23,"./da.js":23,"./de":24,"./de-at":25,"./de-at.js":25,"./de-ch":26,"./de-ch.js":26,"./de.js":24,"./dv":27,"./dv.js":27,"./el":28,"./el.js":28,"./en-au":29,"./en-au.js":29,"./en-ca":30,"./en-ca.js":30,"./en-gb":31,"./en-gb.js":31,"./en-ie":32,"./en-ie.js":32,"./en-il":33,"./en-il.js":33,"./en-in":34,"./en-in.js":34,"./en-nz":35,"./en-nz.js":35,"./en-sg":36,"./en-sg.js":36,"./eo":37,"./eo.js":37,"./es":38,"./es-do":39,"./es-do.js":39,"./es-us":40,"./es-us.js":40,"./es.js":38,"./et":41,"./et.js":41,"./eu":42,"./eu.js":42,"./fa":43,"./fa.js":43,"./fi":44,"./fi.js":44,"./fil":45,"./fil.js":45,"./fo":46,"./fo.js":46,"./fr":47,"./fr-ca":48,"./fr-ca.js":48,"./fr-ch":49,"./fr-ch.js":49,"./fr.js":47,"./fy":50,"./fy.js":50,"./ga":51,"./ga.js":51,"./gd":52,"./gd.js":52,"./gl":53,"./gl.js":53,"./gom-deva":54,"./gom-deva.js":54,"./gom-latn":55,"./gom-latn.js":55,"./gu":56,"./gu.js":56,"./he":57,"./he.js":57,"./hi":58,"./hi.js":58,"./hr":59,"./hr.js":59,"./hu":60,"./hu.js":60,"./hy-am":61,"./hy-am.js":61,"./id":62,"./id.js":62,"./is":63,"./is.js":63,"./it":64,"./it-ch":65,"./it-ch.js":65,"./it.js":64,"./ja":66,"./ja.js":66,"./jv":67,"./jv.js":67,"./ka":68,"./ka.js":68,"./kk":69,"./kk.js":69,"./km":70,"./km.js":70,"./kn":71,"./kn.js":71,"./ko":72,"./ko.js":72,"./ku":73,"./ku.js":73,"./ky":74,"./ky.js":74,"./lb":75,"./lb.js":75,"./lo":76,"./lo.js":76,"./lt":77,"./lt.js":77,"./lv":78,"./lv.js":78,"./me":79,"./me.js":79,"./mi":80,"./mi.js":80,"./mk":81,"./mk.js":81,"./ml":82,"./ml.js":82,"./mn":83,"./mn.js":83,"./mr":84,"./mr.js":84,"./ms":85,"./ms-my":86,"./ms-my.js":86,"./ms.js":85,"./mt":87,"./mt.js":87,"./my":88,"./my.js":88,"./nb":89,"./nb.js":89,"./ne":90,"./ne.js":90,"./nl":91,"./nl-be":92,"./nl-be.js":92,"./nl.js":91,"./nn":93,"./nn.js":93,"./oc-lnc":94,"./oc-lnc.js":94,"./pa-in":95,"./pa-in.js":95,"./pl":96,"./pl.js":96,"./pt":97,"./pt-br":98,"./pt-br.js":98,"./pt.js":97,"./ro":99,"./ro.js":99,"./ru":100,"./ru.js":100,"./sd":101,"./sd.js":101,"./se":102,"./se.js":102,"./si":103,"./si.js":103,"./sk":104,"./sk.js":104,"./sl":105,"./sl.js":105,"./sq":106,"./sq.js":106,"./sr":107,"./sr-cyrl":108,"./sr-cyrl.js":108,"./sr.js":107,"./ss":109,"./ss.js":109,"./sv":110,"./sv.js":110,"./sw":111,"./sw.js":111,"./ta":112,"./ta.js":112,"./te":113,"./te.js":113,"./tet":114,"./tet.js":114,"./tg":115,"./tg.js":115,"./th":116,"./th.js":116,"./tk":117,"./tk.js":117,"./tl-ph":118,"./tl-ph.js":118,"./tlh":119,"./tlh.js":119,"./tr":120,"./tr.js":120,"./tzl":121,"./tzl.js":121,"./tzm":122,"./tzm-latn":123,"./tzm-latn.js":123,"./tzm.js":122,"./ug-cn":124,"./ug-cn.js":124,"./uk":125,"./uk.js":125,"./ur":126,"./ur.js":126,"./uz":127,"./uz-latn":128,"./uz-latn.js":128,"./uz.js":127,"./vi":129,"./vi.js":129,"./x-pseudo":130,"./x-pseudo.js":130,"./yo":131,"./yo.js":131,"./zh-cn":132,"./zh-cn.js":132,"./zh-hk":133,"./zh-hk.js":133,"./zh-mo":134,"./zh-mo.js":134,"./zh-tw":135,"./zh-tw.js":135};function j(s){var e=n(s);return a(e)}function n(s){if(!a.o(t,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return t[s]}j.keys=function(){return Object.keys(t)},j.resolve=n,s.exports=j,j.id=138}}]);