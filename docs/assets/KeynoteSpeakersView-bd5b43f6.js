import{U as b,ab as g,V as f,W as k,H as S,$ as n,a8 as i,a4 as m,E as r,al as h,an as v,a5 as B,_ as D,ap as T,a_ as V,a3 as e,aa as $,aP as E,aC as l,aB as p,a0 as P}from"./index-bbeaed26.js";const w=b({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:g(String),default:"solid"}}),U=f({name:"ElDivider"}),x=f({...U,props:w,setup(d){const s=d,a=k("divider"),c=S(()=>a.cssVar({"border-style":s.borderStyle}));return(t,u)=>(n(),i("div",{class:m([r(a).b(),r(a).m(t.direction)]),style:B(r(c)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(n(),i("div",{key:0,class:m([r(a).e("text"),r(a).is(t.contentPosition)])},[h(t.$slots,"default")],2)):v("v-if",!0)],6))}});var z=D(x,[["__file","divider.vue"]]);const C=T(z);const I=""+new URL("Abdulmotaleb El Saddik-1c5117f5.png",import.meta.url).href;const K={data(){return{speakers:[{name:"TBD",photo:"https://via.placeholder.com/300x300.png?text=TBD",title:"TBD",keynote:"TBD",abstract:"TBD",bio:"TBD"}]}},methods:{getImageUrl(d){return new URL(Object.assign({"../assets/image/photos/Abdulmotaleb El Saddik.png":I})[`../assets/image/photos/${d}`],self.location).href}}},N={class:"keynote-speakers"},A={class:"speaker-content"},L={class:"speaker-photo"},R=["src","alt"],j={class:"speaker-info"},F={class:"speaker-name"},H={class:"italic"},O={class:"speaker-bio"};function W(d,s,a,c,t,u){const y=C;return n(),i("div",N,[s[5]||(s[5]=e("h1",{class:"title1 font-merri"},"Keynote Speakers",-1)),(n(!0),i($,null,E(t.speakers,(o,_)=>(n(),i("div",{key:_,class:"speaker-section"},[e("div",A,[e("div",L,[e("img",{src:u.getImageUrl(o.photo),alt:o.name},null,8,R)]),e("div",j,[e("h2",F,l(o.name),1),e("p",null,[s[0]||(s[0]=e("span",{class:"bold"},"Title:",-1)),p(" "+l(o.title),1)]),e("p",null,[s[1]||(s[1]=e("span",{class:"bold"},"Keynotes:",-1)),p(" "+l(o.keynote),1)]),e("p",null,[s[2]||(s[2]=e("span",{class:"bold"},"Abstract:",-1)),s[3]||(s[3]=p()),e("span",H,l(o.abstract),1)])])]),e("div",O,[e("p",null,[s[4]||(s[4]=e("span",{class:"bold"},"Bio:",-1)),p(" "+l(o.bio),1)])]),_<t.speakers.length-1?(n(),P(y,{key:0})):v("",!0)]))),128)),s[6]||(s[6]=e("h1",{class:"title1 font-merri"},"Topics Speakers",-1))])}const G=V(K,[["render",W],["__scopeId","data-v-441ffc62"]]);export{G as default};
