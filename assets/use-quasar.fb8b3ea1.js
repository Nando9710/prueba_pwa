var Be=Object.defineProperty,Ee=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var me=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))Oe.call(t,n)&&me(e,n,t[n]);if(ve)for(var n of ve(t))Pe.call(t,n)&&me(e,n,t[n]);return e},K=(e,t)=>Ee(e,$e(t));import{x as Me,y as N,s as oe,a6 as qe,u as W,a7 as Ie,i as ce,a8 as Te,j as y,k,a9 as ze,r as j,aa as je,ab as Ne,ac as De,G as ae,q as H,ad as Re,ae as Fe,p as fe,n as Le,N as J,l as G,a3 as ge,af as Ue,ag as Ze,ah as Ke,E as Qe,O as he,V as He,ai as We}from"./index.84e5adcd.js";import{b as Ge,u as Je,a as Xe}from"./format.b9cc9735.js";function Ye({validate:e,resetValidation:t,requiresQForm:n}){const u=Me(qe,!1);if(u!==!1){const{props:v,proxy:m}=W();Object.assign(m,{validate:e,resetValidation:t}),N(()=>v.disable,f=>{f===!0?(typeof t=="function"&&t(),u.unbindComponent(m)):u.bindComponent(m)}),v.disable!==!0&&u.bindComponent(m),oe(()=>{v.disable!==!0&&u.unbindComponent(m)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ye=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,pe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Y=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ke={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>ye.test(e),hexOrHexaColor:e=>pe.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>Y.test(e),rgbOrRgbaColor:e=>X.test(e)||Y.test(e),hexOrRgbColor:e=>be.test(e)||X.test(e),hexaOrRgbaColor:e=>ye.test(e)||Y.test(e),anyColor:e=>pe.test(e)||X.test(e)||Y.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const et=K(I({},Ie),{min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean}),le=50,Ve=2*le,Ae=Ve*Math.PI,tt=Math.round(Ae*1e3)/1e3;ce({name:"QCircularProgress",props:K(I({},et),{value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean}),setup(e,{slots:t}){const{proxy:{$q:n}}=W(),u=Te(e),v=y(()=>{const F=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-F}deg)`:`rotate3d(0, 0, 1, ${F-90}deg)`}}),m=y(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),f=y(()=>Ve/(1-e.thickness/2)),q=y(()=>`${f.value/2} ${f.value/2} ${f.value} ${f.value}`),x=y(()=>Ge(e.value,e.min,e.max)),p=y(()=>Ae*(1-(x.value-e.min)/(e.max-e.min))),E=y(()=>e.thickness/2*f.value);function R({thickness:F,offset:g,color:C,cls:z}){return k("circle",{class:"q-circular-progress__"+z+(C!==void 0?` text-${C}`:""),style:m.value,fill:"transparent",stroke:"currentColor","stroke-width":F,"stroke-dasharray":tt,"stroke-dashoffset":g,cx:f.value,cy:f.value,r:le})}return()=>{const F=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&F.push(k("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:le-E.value/2,cx:f.value,cy:f.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&F.push(R({cls:"track",thickness:E.value,offset:0,color:e.trackColor})),F.push(R({cls:"circle",thickness:E.value,offset:p.value,color:e.color}));const g=[k("svg",{class:"q-circular-progress__svg",style:v.value,viewBox:q.value,"aria-hidden":"true"},F)];return e.showValue===!0&&g.push(k("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[k("div",x.value)])),k("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:u.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:x.value},ze(t.internal,g))}}});const ot=["rejected"],rt=[...ot,"start","finish","added","removed"],nt=()=>!0;function at(e){const t={};return e.forEach(n=>{t[n]=nt}),t}at(rt);let ne,ee=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const lt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let u=t;u>0;u--)n.push(Math.floor(Math.random()*256));return n}})(),xe=4096;function ut(){(ne===void 0||ee+16>xe)&&(ee=0,ne=lt(xe));const e=Array.prototype.slice.call(ne,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}const it=[!0,!1,"ondemand"],st={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>it.includes(e)}};function ct(e,t){const{props:n,proxy:u}=W(),v=j(!1),m=j(null),f=j(null);Ye({validate:C,resetValidation:g});let q=0,x;const p=y(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),E=y(()=>n.disable!==!0&&p.value===!0),R=y(()=>n.error===!0||v.value===!0),F=y(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:m.value);N(()=>n.modelValue,()=>{z()}),N(()=>n.reactiveRules,O=>{O===!0?x===void 0&&(x=N(()=>n.rules,()=>{z(!0)})):x!==void 0&&(x(),x=void 0)},{immediate:!0}),N(e,O=>{O===!0?f.value===null&&(f.value=!1):f.value===!1&&(f.value=!0,E.value===!0&&n.lazyRules!=="ondemand"&&t.value===!1&&_())});function g(){q++,t.value=!1,f.value=null,v.value=!1,m.value=null,_.cancel()}function C(O=n.modelValue){if(E.value!==!0)return!0;const $=++q;t.value!==!0&&n.lazyRules!==!0&&(f.value=!0);const w=(S,o)=>{v.value!==S&&(v.value=S);const l=o||void 0;m.value!==l&&(m.value=l),t.value=!1},B=[];for(let S=0;S<n.rules.length;S++){const o=n.rules[S];let l;if(typeof o=="function"?l=o(O):typeof o=="string"&&ke[o]!==void 0&&(l=ke[o](O)),l===!1||typeof l=="string")return w(!0,l),!1;l!==!0&&l!==void 0&&B.push(l)}return B.length===0?(w(!1),!0):(t.value=!0,Promise.all(B).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return $===q&&w(!1),!0;const o=S.find(l=>l===!1||typeof l=="string");return $===q&&w(o!==void 0,o),o===void 0},S=>($===q&&(console.error(S),w(!0)),!1)))}function z(O){E.value===!0&&n.lazyRules!=="ondemand"&&(f.value===!0||n.lazyRules!==!0&&O!==!0)&&_()}const _=je(C,0);return oe(()=>{x!==void 0&&x(),_.cancel()}),Object.assign(u,{resetValidation:g,validate:C}),Ne(u,"hasError",()=>R.value),{isDirtyModel:f,hasRules:p,hasError:R,errorMessage:F,validate:C,resetValidation:g}}const Ce=/^on[A-Z]/;function ft(e,t){const n={listeners:j({}),attributes:j({})};function u(){const v={},m={};for(const f in e)f!=="class"&&f!=="style"&&Ce.test(f)===!1&&(v[f]=e[f]);for(const f in t.props)Ce.test(f)===!0&&(m[f]=t.props[f]);n.attributes.value=v,n.listeners.value=m}return De(u),u(),n}let ue=[],dt=[];function de(e){dt.length===0?e():ue.push(e)}function vt(e){ue=ue.filter(t=>t!==e)}function ie(e){return e===void 0?`f_${ut()}`:e}function se(e){return e!=null&&(""+e).length>0}const mt=K(I(I({},Je),st),{label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]}),gt=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function ht(){const{props:e,attrs:t,proxy:n,vnode:u}=W();return{isDark:Xe(e,n.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:j(!1),focused:j(!1),hasPopupOpen:!1,splitAttrs:ft(t,u),targetUid:j(ie(e.for)),rootRef:j(null),targetRef:j(null),controlRef:j(null)}}function bt(e){const{props:t,emit:n,slots:u,attrs:v,proxy:m}=W(),{$q:f}=m;let q;e.hasValue===void 0&&(e.hasValue=y(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{n("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:c}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:c,focus:l}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:x,hasRules:p,hasError:E,errorMessage:R,resetValidation:F}=ct(e.focused,e.innerLoading),g=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=y(()=>t.bottomSlots===!0||t.hint!==void 0||p.value===!0||t.counter===!0||t.error!==null),z=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),_=y(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(g.value===!0?" q-field--float":"")+($.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(E.value===!0?" q-field--error":"")+(E.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),O=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(E.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),$=y(()=>t.labelSlot===!0||t.label!==void 0),w=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&E.value!==!0?` text-${t.labelColor}`:"")),B=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:g.value,modelValue:t.modelValue,emitValue:e.emitValue})),S=y(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});N(()=>t.for,r=>{e.targetUid.value=ie(r)});function o(){const r=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(r===null||r.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==r&&h.focus({preventScroll:!0}))}function l(){de(o)}function d(){vt(o);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function s(r){clearTimeout(q),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",r))}function c(r,h){clearTimeout(q),q=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,n("blur",r)),h!==void 0&&h())})}function i(r){ae(r),f.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),H(()=>{F(),f.platform.is.mobile!==!0&&(x.value=!1)})}function M(){const r=[];return u.prepend!==void 0&&r.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},u.prepend())),r.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),E.value===!0&&t.noErrorIcon===!1&&r.push(D("error",[k(ge,{name:f.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(D("inner-loading-append",u.loading!==void 0?u.loading():[k(Ue,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(D("inner-clearable-append",[k(ge,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||f.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),u.append!==void 0&&r.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},u.append())),e.getInnerAppend!==void 0&&r.push(D("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function b(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):u.rawControl!==void 0?r.push(u.rawControl()):u.control!==void 0&&r.push(k("div",K(I({ref:e.targetRef,class:"q-field__native row",tabindex:-1},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus===!0||void 0}),u.control(B.value))),$.value===!0&&r.push(k("div",{class:w.value},G(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(G(u.default))}function V(){let r,h;E.value===!0?R.value!==null?(r=[k("div",{role:"alert"},R.value)],h=`q--slot-error-${R.value}`):(r=G(u.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[k("div",t.hint)],h=`q--slot-hint-${t.hint}`):(r=G(u.hint),h="q--slot-hint"));const a=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&a===!1&&r===void 0)return;const A=k("div",{key:h,class:"q-field__messages col"},r);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?A:k(Ze,{name:"q-transition--field-message"},()=>A),a===!0?k("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function D(r,h){return h===null?null:k("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}Object.assign(m,{focus:l,blur:d});let U=!1;return Re(()=>{U=!0}),Fe(()=>{U===!0&&t.autofocus===!0&&m.focus()}),fe(()=>{Le.value===!0&&t.for===void 0&&(e.targetUid.value=ie()),t.autofocus===!0&&m.focus()}),oe(()=>{clearTimeout(q)}),function(){const h=e.getControl===void 0&&u.control===void 0?I(K(I({},e.splitAttrs.attributes.value),{"data-autofocus":t.autofocus}),S.value):S.value;return k("label",I({ref:e.rootRef,class:[_.value,v.class],style:v.style},h),[u.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},u.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",I({ref:e.controlRef,class:O.value,tabindex:-1},e.controlEvents),M()),C.value===!0?V():null]),u.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},u.after()):null])}}const we={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},_e=Object.keys(te);_e.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const yt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+_e.join("")+"])|(.)","g"),Se=/[.*+?^${}()|[\]\\]/g,P=String.fromCharCode(1),pt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function kt(e,t,n,u){let v,m,f,q;const x=j(null),p=j(R());function E(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,g),N(()=>e.mask,o=>{if(o!==void 0)C(p.value,!0);else{const l=B(p.value);g(),e.modelValue!==l&&t("update:modelValue",l)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&C(p.value,!0)}),N(()=>e.unmaskedValue,()=>{x.value===!0&&C(p.value)});function R(){if(g(),x.value===!0){const o=$(B(e.modelValue));return e.fillMask!==!1?S(o):o}return e.modelValue}function F(o){if(o<v.length)return v.slice(-o);let l="",d=v;const s=d.indexOf(P);if(s>-1){for(let c=o-d.length;c>0;c--)l+=P;d=d.slice(0,s)+l+d.slice(s)}return d}function g(){if(x.value=e.mask!==void 0&&e.mask.length>0&&E(),x.value===!1){q=void 0,v="",m="";return}const o=we[e.mask]===void 0?e.mask:we[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",d=l.replace(Se,"\\$&"),s=[],c=[],i=[];let M=e.reverseFillMask===!0,b="",V="";o.replace(yt,(h,a,A,Z,Q)=>{if(Z!==void 0){const L=te[Z];i.push(L),V=L.negate,M===!0&&(c.push("(?:"+V+"+)?("+L.pattern+"+)?(?:"+V+"+)?("+L.pattern+"+)?"),M=!1),c.push("(?:"+V+"+)?("+L.pattern+")?")}else if(A!==void 0)b="\\"+(A==="\\"?"":A),i.push(A),s.push("([^"+b+"]+)?"+b+"?");else{const L=a!==void 0?a:Q;b=L==="\\"?"\\\\\\\\":L.replace(Se,"\\\\$&"),i.push(L),s.push("([^"+b+"]+)?"+b+"?")}});const D=new RegExp("^"+s.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?$"),U=c.length-1,r=c.map((h,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+d+"*"+h):a===U?new RegExp("^"+h+"("+(V===""?".":V)+"+)?"+(e.reverseFillMask===!0?"$":d+"*")):new RegExp("^"+h));f=i,q=h=>{const a=D.exec(h);a!==null&&(h=a.slice(1).join(""));const A=[],Z=r.length;for(let Q=0,L=h;Q<Z;Q++){const re=r[Q].exec(L);if(re===null)break;L=L.slice(re.shift().length),A.push(...re)}return A.length>0?A.join(""):h},v=i.map(h=>typeof h=="string"?h:P).join(""),m=v.split(P).join(l)}function C(o,l,d){const s=u.value,c=s.selectionEnd,i=s.value.length-c,M=B(o);l===!0&&g();const b=$(M),V=e.fillMask!==!1?S(b):b,D=p.value!==V;s.value!==V&&(s.value=V),D===!0&&(p.value=V),document.activeElement===s&&H(()=>{if(V===m){const r=e.reverseFillMask===!0?m.length:0;s.setSelectionRange(r,r,"forward");return}if(d==="insertFromPaste"&&e.reverseFillMask!==!0){const r=c-1;_.right(s,r,r);return}if(["deleteContentBackward","deleteContentForward"].indexOf(d)>-1){const r=e.reverseFillMask===!0?c===0?V.length>b.length?1:0:Math.max(0,V.length-(V===m?0:Math.min(b.length,i)+1))+1:c;s.setSelectionRange(r,r,"forward");return}if(e.reverseFillMask===!0)if(D===!0){const r=Math.max(0,V.length-(V===m?0:Math.min(b.length,i+1)));r===1&&c===1?s.setSelectionRange(r,r,"forward"):_.rightReverse(s,r,r)}else{const r=V.length-i;s.setSelectionRange(r,r,"backward")}else if(D===!0){const r=Math.max(0,v.indexOf(P),Math.min(b.length,c)-1);_.right(s,r,r)}else{const r=c-1;_.right(s,r,r)}});const U=e.unmaskedValue===!0?B(V):V;String(e.modelValue)!==U&&n(U,!0)}function z(o,l,d){const s=$(B(o.value));l=Math.max(0,v.indexOf(P),Math.min(s.length,l)),o.setSelectionRange(l,d,"forward")}const _={left(o,l,d,s){const c=v.slice(l-1).indexOf(P)===-1;let i=Math.max(0,l-1);for(;i>=0;i--)if(v[i]===P){l=i,c===!0&&l++;break}if(i<0&&v[l]!==void 0&&v[l]!==P)return _.right(o,0,0);l>=0&&o.setSelectionRange(l,s===!0?d:l,"backward")},right(o,l,d,s){const c=o.value.length;let i=Math.min(c,d+1);for(;i<=c;i++)if(v[i]===P){d=i;break}else v[i-1]===P&&(d=i);if(i>c&&v[d-1]!==void 0&&v[d-1]!==P)return _.left(o,c,c);o.setSelectionRange(s?l:d,d,"forward")},leftReverse(o,l,d,s){const c=F(o.value.length);let i=Math.max(0,l-1);for(;i>=0;i--)if(c[i-1]===P){l=i;break}else if(c[i]===P&&(l=i,i===0))break;if(i<0&&c[l]!==void 0&&c[l]!==P)return _.rightReverse(o,0,0);l>=0&&o.setSelectionRange(l,s===!0?d:l,"backward")},rightReverse(o,l,d,s){const c=o.value.length,i=F(c),M=i.slice(0,d+1).indexOf(P)===-1;let b=Math.min(c,d+1);for(;b<=c;b++)if(i[b-1]===P){d=b,d>0&&M===!0&&d--;break}if(b>c&&i[d-1]!==void 0&&i[d-1]!==P)return _.leftReverse(o,c,c);o.setSelectionRange(s===!0?l:d,d,"forward")}};function O(o){if(Ke(o)===!0)return;const l=u.value,d=l.selectionStart,s=l.selectionEnd;if(o.keyCode===37||o.keyCode===39){const c=_[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];o.preventDefault(),c(l,d,s,o.shiftKey)}else o.keyCode===8&&e.reverseFillMask!==!0&&d===s?_.left(l,d,s,!0):o.keyCode===46&&e.reverseFillMask===!0&&d===s&&_.rightReverse(l,d,s,!0)}function $(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return w(o);const l=f;let d=0,s="";for(let c=0;c<l.length;c++){const i=o[d],M=l[c];if(typeof M=="string")s+=M,i===M&&d++;else if(i!==void 0&&M.regex.test(i))s+=M.transform!==void 0?M.transform(i):i,d++;else return s}return s}function w(o){const l=f,d=v.indexOf(P);let s=o.length-1,c="";for(let i=l.length-1;i>=0&&s>-1;i--){const M=l[i];let b=o[s];if(typeof M=="string")c=M+c,b===M&&s--;else if(b!==void 0&&M.regex.test(b))do c=(M.transform!==void 0?M.transform(b):b)+c,s--,b=o[s];while(d===i&&b!==void 0&&M.regex.test(b));else return c}return c}function B(o){return typeof o!="string"||q===void 0?typeof o=="number"?q(""+o):o:q(o)}function S(o){return m.length-o.length<=0?o:e.reverseFillMask===!0&&o.length>0?m.slice(0,-o.length)+o:o+m.slice(o.length)}return{innerValue:p,hasMask:x,moveCursorForPaste:z,updateMaskValue:C,onMaskedKeydown:O}}const xt={name:String};function Ct(e){return y(()=>e.name||e.for)}function wt(e,t){function n(){const u=e.modelValue;try{const v="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(m=>{v.items.add(m)}),{files:v.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return n()}):y(n)}const St=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Mt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,qt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Rt=/[a-z0-9_ -]$/i;function Ft(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"?n.target.qComposing!==!0&&typeof n.data=="string"&&(Qe.is.firefox===!0?Rt.test(n.data)===!1:St.test(n.data)===!0&&Mt.test(n.data)===!0&&qt.test(n.data)===!0)===!0&&(n.target.qComposing=!0):n.target.qComposing=!0}}var Bt=ce({name:"QInput",inheritAttrs:!1,props:K(I(I(I({},mt),pt),xt),{modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]}),emits:[...gt,"paste","change"],setup(e,{emit:t,attrs:n}){const u={};let v=NaN,m,f,q,x;const p=j(null),E=Ct(e),{innerValue:R,hasMask:F,moveCursorForPaste:g,updateMaskValue:C,onMaskedKeydown:z}=kt(e,t,M,p),_=wt(e,!0),O=y(()=>se(R.value)),$=Ft(i),w=ht(),B=y(()=>e.type==="textarea"||e.autogrow===!0),S=y(()=>B.value===!0||["text","search","url","tel","password"].includes(e.type)),o=y(()=>{const a=K(I({},w.splitAttrs.listeners.value),{onInput:i,onPaste:c,onChange:V,onBlur:D,onFocus:he});return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=$,F.value===!0&&(a.onKeydown=z),e.autogrow===!0&&(a.onAnimationend=b),a}),l=y(()=>{const a=K(I({tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:E.value},w.splitAttrs.attributes.value),{id:w.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0});return B.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});N(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),N(()=>e.modelValue,a=>{if(F.value===!0){if(f===!0&&(f=!1,String(a)===v))return;C(a)}else R.value!==a&&(R.value=a,e.type==="number"&&u.hasOwnProperty("value")===!0&&(m===!0?m=!1:delete u.value));e.autogrow===!0&&H(b)}),N(()=>e.autogrow,a=>{a===!0?H(b):p.value!==null&&n.rows>0&&(p.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&H(b)});function d(){de(()=>{const a=document.activeElement;p.value!==null&&p.value!==a&&(a===null||a.id!==w.targetUid.value)&&p.value.focus({preventScroll:!0})})}function s(){p.value!==null&&p.value.select()}function c(a){if(F.value===!0&&e.reverseFillMask!==!0){const A=a.target;g(A,A.selectionStart,A.selectionEnd)}t("paste",a)}function i(a){if(!a||!a.target||a.target.qComposing===!0)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const A=a.target.value;if(F.value===!0)C(A,!1,a.inputType);else if(M(A),S.value===!0&&a.target===document.activeElement){const{selectionStart:Z,selectionEnd:Q}=a.target;Z!==void 0&&Q!==void 0&&H(()=>{a.target===document.activeElement&&A.indexOf(a.target.value)===0&&a.target.setSelectionRange(Z,Q)})}e.autogrow===!0&&b()}function M(a,A){x=()=>{e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==a&&v!==a&&(v=a,A===!0&&(f=!0),t("update:modelValue",a),H(()=>{v===a&&(v=NaN)})),x=void 0},e.type==="number"&&(m=!0,u.value=a),e.debounce!==void 0?(clearTimeout(q),u.value=a,q=setTimeout(x,e.debounce)):x()}function b(){const a=p.value;if(a!==null){const A=a.parentNode.style,{overflow:Z}=a.style;A.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.overflow="hidden",a.style.height=a.scrollHeight+"px",a.style.overflow=Z,A.marginBottom=""}}function V(a){$(a),clearTimeout(q),x!==void 0&&x(),t("change",a.target.value)}function D(a){a!==void 0&&he(a),clearTimeout(q),x!==void 0&&x(),m=!1,f=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=R.value!==void 0?R.value:"")})}function U(){return u.hasOwnProperty("value")===!0?u.value:R.value!==void 0?R.value:""}oe(()=>{D()}),fe(()=>{e.autogrow===!0&&b()}),Object.assign(w,{innerValue:R,fieldClass:y(()=>`q-${B.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:p,emitValue:M,hasValue:O,floatingLabel:y(()=>O.value===!0||se(e.displayValue)),getControl:()=>k(B.value===!0?"textarea":"input",I(I(I({ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle},l.value),o.value),e.type!=="file"?{value:U()}:_.value)),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(B.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},U()),k("span",e.shadowText)])});const r=bt(w),h=W();return Object.assign(h.proxy,{focus:d,select:s,getNativeElement:()=>p.value}),r}}),Et=ce({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:t,emit:n}){const u=W(),v=j(null);let m=0;const f=[];function q(g){const C=[],z=typeof g=="boolean"?g:e.noErrorFocus!==!0,_=++m,O=($,w)=>{n("validation-"+($===!0?"success":"error"),w)};for(let $=0;$<f.length;$++){const w=f[$],B=w.validate();if(typeof B.then=="function")C.push(B.then(S=>({valid:S,comp:w}),S=>({valid:!1,comp:w,err:S})));else if(B!==!0){if(e.greedy===!1)return O(!1,w),z===!0&&typeof w.focus=="function"&&w.focus(),Promise.resolve(!1);C.push({valid:!1,comp:w})}}return C.length===0?(O(!0),Promise.resolve(!0)):Promise.all(C).then($=>{const w=$.filter(l=>l.valid!==!0);if(w.length===0)return _===m&&O(!0),!0;const{valid:B,comp:S,err:o}=w[0];return _===m&&(o!==void 0&&console.error(o),O(!1,S),z===!0&&B!==!0&&typeof S.focus=="function"&&S.focus()),!1})}function x(){m++,f.forEach(g=>{typeof g.resetValidation=="function"&&g.resetValidation()})}function p(g){g!==void 0&&ae(g);const C=m+1;q().then(z=>{C===m&&z===!0&&(e.onSubmit!==void 0?n("submit",g):g!==void 0&&g.target!==void 0&&typeof g.target.submit=="function"&&g.target.submit())})}function E(g){g!==void 0&&ae(g),n("reset"),H(()=>{x(),e.autofocus===!0&&e.noResetFocus!==!0&&R()})}function R(){de(()=>{if(v.value===null)return;const g=v.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(v.value.querySelectorAll("[tabindex]"),C=>C.tabIndex>-1);g!=null&&g.focus({preventScroll:!0})})}He(qe,{bindComponent(g){f.push(g)},unbindComponent(g){const C=f.indexOf(g);C>-1&&f.splice(C,1)}});let F=!1;return Re(()=>{F=!0}),Fe(()=>{F===!0&&e.autofocus===!0&&R()}),fe(()=>{e.autofocus===!0&&R()}),Object.assign(u.proxy,{validate:q,resetValidation:x,submit:p,reset:E,focus:R,getValidationComponents:()=>f}),()=>k("form",{class:"q-form",ref:v,onSubmit:p,onReset:E},G(t.default))}});function $t(){return Me(We)}export{Bt as Q,Et as a,$t as u};
