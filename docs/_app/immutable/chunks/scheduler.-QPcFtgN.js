function D(){}function H(e,t){for(const n in t)e[n]=t[n];return e}function M(e){return e()}function Y(){return Object.create(null)}function P(e){e.forEach(M)}function Z(e){return typeof e=="function"}function $(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ee(e){return Object.keys(e).length===0}function W(e,...t){if(e==null){for(const i of t)i(void 0);return D}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function te(e,t,n){e.$$.on_destroy.push(W(t,n))}function ne(e,t,n,i){if(e){const r=A(e,t,n,i);return e[0](r)}}function A(e,t,n,i){return e[1]&&i?H(n.ctx.slice(),e[1](i(t))):n.ctx}function ie(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(t.dirty.length,r.length);for(let s=0;s<c;s+=1)l[s]=t.dirty[s]|r[s];return l}return t.dirty|r}return t.dirty}function re(e,t,n,i,r,l){if(r){const c=A(t,n,i,l);e.p(c,r)}}function ce(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}let p=!1;function le(){p=!0}function oe(){p=!1}function q(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function B(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const o=[];for(let u=0;u<t.length;u++){const a=t[u];a.claim_order!==void 0&&o.push(a)}t=o}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let o=0;o<t.length;o++){const u=t[o].claim_order,a=(r>0&&t[n[r]].claim_order<=u?r+1:q(1,r,z=>t[n[z]].claim_order,u))-1;i[o]=n[a]+1;const v=a+1;n[v]=o,r=Math.max(v,r)}const l=[],c=[];let s=t.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(t[o-1]);s>=o;s--)c.push(t[s]);s--}for(;s>=0;s--)c.push(t[s]);l.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<l.length&&c[o].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;e.insertBefore(c[o],a)}}function I(e,t){e.appendChild(t)}function L(e,t){if(p){for(B(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function se(e,t,n){p&&!n?L(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function ue(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function F(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ae(){return x(" ")}function fe(){return x("")}function E(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function de(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _e(e){return e.dataset.svelteH}function he(e){return Array.from(e.childNodes)}function R(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function j(e,t,n,i,r=!1){R(e);const l=(()=>{for(let c=e.claim_info.last_index;c<e.length;c++){const s=e[c];if(t(s)){const o=n(s);return o===void 0?e.splice(c,1):e[c]=o,r||(e.claim_info.last_index=c),s}}for(let c=e.claim_info.last_index-1;c>=0;c--){const s=e[c];if(t(s)){const o=n(s);return o===void 0?e.splice(c,1):e[c]=o,r?o===void 0&&e.claim_info.last_index--:e.claim_info.last_index=c,s}}return i()})();return l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,l}function C(e,t,n,i){return j(e,r=>r.nodeName===t,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||l.push(s.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(t))}function me(e,t,n){return C(e,t,n,S)}function pe(e,t,n){return C(e,t,n,F)}function U(e,t){return j(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function be(e){return U(e," ")}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}function ge(e,t){e.value=t??""}function xe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function we(e,t,n){for(let i=0;i<e.options.length;i+=1){const r=e.options[i];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ve(e){const t=e.querySelector(":checked");return t&&t.__value}let h;function G(){if(h===void 0){h=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{h=!0}}return h}function Ee(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=S("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=G();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=E(window,"message",c=>{c.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{l=E(i.contentWindow,"resize",t),t()}),I(e,i),()=>{(r||l&&i.contentWindow)&&l(),O(i)}}function ke(e,t,n){e.classList.toggle(t,!!n)}function J(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Ne(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${e}_END`?(i-=1,n.push(r)):l===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ae(e,t){return new e(t)}let m;function b(e){m=e}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function Se(e){w().$$.on_mount.push(e)}function je(e){w().$$.after_update.push(e)}function Ce(){const e=w();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const l=J(t,n,{cancelable:i});return r.slice().forEach(c=>{c.call(e,l)}),!l.defaultPrevented}return!0}}const _=[],k=[];let d=[];const N=[],T=Promise.resolve();let g=!1;function K(){g||(g=!0,T.then(V))}function Te(){return K(),T}function Q(e){d.push(e)}const y=new Set;let f=0;function V(){if(f!==0)return;const e=m;do{try{for(;f<_.length;){const t=_[f];f++,b(t),X(t.$$)}}catch(t){throw _.length=0,f=0,t}for(b(null),_.length=0,f=0;k.length;)k.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];y.has(n)||(y.add(n),n())}d.length=0}while(_.length);for(;N.length;)N.pop()();g=!1,y.clear(),b(e)}function X(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}function ze(e){const t=[],n=[];d.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),d=t}export{P as A,Y as B,V as C,Z as D,ee as E,Q as F,ze as G,m as H,b as I,M as J,_ as K,K as L,le as M,oe as N,Ne as O,_e as P,ke as Q,E as R,Ce as S,F as T,pe as U,Ee as V,ue as W,we as X,ge as Y,ve as Z,ie as a,ae as b,ne as c,me as d,S as e,he as f,ce as g,U as h,O as i,be as j,se as k,L as l,ye as m,D as n,te as o,fe as p,je as q,Se as r,$ as s,x as t,re as u,de as v,xe as w,k as x,Ae as y,Te as z};
