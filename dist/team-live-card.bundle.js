/*! For license information please see team-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new a(i,t,s)},n=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=e.cssText,s.appendChild(i)}},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,_=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);a.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const a=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??y)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,v?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.0.4");const x=globalThis,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+S,P=`<${M}>`,k=document,T=()=>k.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,R=/"/g,V=/^(?:script|style|textarea|title)$/i,L=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),I=L(1),B=(L(2),L(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),G=new WeakMap,Y=k.createTreeWalker(k,129);function q(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,o=0;const n=t.length-1,r=this.parts,[l,c]=((t,e)=>{const s=t.length-1,i=[];let a,o=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<s;e++){const s=t[e];let r,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===U?"!--"===l[1]?n=j:void 0!==l[1]?n=z:void 0!==l[2]?(V.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=a??U,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?D:'"'===l[3]?R:F):n===R||n===F?n=D:n===j||n===z?n=U:(n=D,a=void 0);const d=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===U?s+P:c>=0?(i.push(r),s.slice(0,c)+C+s.slice(c)+S+d):s+S+(-2===c?e:d)}return[q(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=J.createElement(l,s),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Y.nextNode())&&r.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[o++],s=i.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:n[2],strings:s,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?st:Q}),i.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:a}),i.removeAttribute(t));if(V.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),Y.nextNode(),r.push({type:2,index:++a});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===M)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)r.push({type:7,index:a}),t+=S.length-1}a++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===B)return e;let a=void 0!==i?s.o?.[i]:s.l;const o=N(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,s,i)),void 0!==i?(s.o??=[])[i]=a:s.l=a),void 0!==a&&(e=K(t,a._$AS(t,e.values),a,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);Y.currentNode=i;let a=Y.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new X(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new it(a,this,t)),this._$AV.push(e),r=s[++n]}o!==r?.index&&(a=Y.nextNode(),o++)}return Y.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),N(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new J(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new X(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const a=this.strings;let o=!1;if(void 0===a)t=K(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const i=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=K(this,i[s+n],e,n),r===B&&(r=this._$AH[n]),o||=!N(r)||r!==this._$AH[n],r===W?t=W:t!==W&&(t+=(r??"")+a[n+1]),this._$AH[n]=r}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends Q{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===B)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(J,X),(x.litHtmlVersions??=[]).push("3.2.0");class ot extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,s)=>{const i=s?.renderBefore??e;let a=i._$litPart$;if(void 0===a){const t=s?.renderBefore??null;i._$litPart$=a=new X(e.insertBefore(T(),t),t,void 0,s??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return B}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("team-live-standings",class extends ot{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean},selectedGroup:{type:String}}}setConfig(t){if(!t.entity)throw new Error("You must define an entity");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10,this.hideHeader=t.hide_header||!1,this.selectedGroup=t.selected_group||""}getCardSize(){return 3}static getConfigElement(){return document.createElement("team-live-standings-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_teams_visible:10,hide_header:!1,selected_group:""}}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Unknown entity: ${t}</ha-card>`;e.attributes.standings;const s=e.attributes.season||"",i=(e.attributes.season_start,e.attributes.season_end,e.attributes.standings_groups.find((t=>t.name===this.selectedGroup)));let a=i?i.standings:[];a=a.filter((t=>null!=t.rank&&void 0!==t.rank)),s.includes("MLS")?(a=a.sort(((t,e)=>e.points!==t.points?e.points-t.points:e.goal_difference!==t.goal_difference?e.goal_difference-t.goal_difference:e.goals_for-t.goals_for)),a.forEach(((t,e)=>{t.rank=e+1}))):a=a.sort(((t,e)=>t.rank-e.rank));const o=Math.min(this.maxTeamsVisible,a.length);return I`
      <ha-card>
        ${this.hideHeader?I``:I`
              <div class="card-header">
                <div class="header-row">
                  <div class="competition-details">
                    <div class="competition-name">${e.state}</div>
                    <div class="season-dates">${s}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="card-content">
          <div class="table-container" style="--max-teams-visible: ${o};">
            <table>
              <thead>
                <tr>
                  <th class="small-column">Pos</th>
                  <th class="team-column">Team</th>
                  <th class="small-column">Points</th>
                  <th class="small-column">W</th>
                  <th class="small-column">D</th>
                  <th class="small-column">L</th>
                  <th class="small-column">GF</th>
                  <th class="small-column">GA</th>
                  <th class="small-column">+/-</th>
                </tr>
              </thead>
              <tbody>
                ${a.map((t=>I`
                  <tr>
                    <td class="small-column">${t.rank??"-"}</td>
                    <td class="team-column">
                      <div class="team-name">
                        <img class="team-crest" src="${t.team_logo}" alt="${t.team_name}" />
                        ${t.team_name}
                      </div>
                    </td>
                    <td class="points small-column">${t.points}</td>
                    <td class="won small-column">${t.wins}</td>
                    <td class="draw small-column">${t.draws}</td>
                    <td class="lost small-column">${t.losses}</td>
                    <td class="small-column">${t.goals_for}</td>
                    <td class="small-column">${t.goals_against}</td>
                    <td class="small-column">${t.goal_difference}</td>
                  </tr>
                `))}
              </tbody>
            </table>
          </div>
        </div>
      </ha-card>
    `}static get styles(){return o`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .card-header {
        margin-bottom: 2px;
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .competition-details {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.3em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 16px;
      }
      .table-container {
        width: 100%;
        overflow-y: auto;
        max-height: calc(var(--max-teams-visible, 10) * 40px);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 2px; 
      }
      th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid var(--divider-color);
        white-space: nowrap;
      }
      th {
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
        text-align: center;
      }
      td {
        vertical-align: middle;
        text-align: center;
      }
      .team-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .team-crest {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      .points {
        font-weight: bold;
        color: #4CAF50;
      }
      .won {
        color: #4CAF50; 
      }
      .draw {
        color: #FFC107;
      }
      .lost {
        color: #F44336;
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 2px 0;
      }
      .team-column {
        width: 180px;
        text-align: left;
      }
      .small-column {
        width: 40px;
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"team-live-standings",name:"Team Live Standings Card",description:"Shows league standings or cup standings"}),customElements.define("team-live-standings-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},groups:{type:Array}}}constructor(){super(),this._entity="",this.entities=[],this.groups=[]}static get styles(){return o`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Space between options */
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      ha-select {
        width: 100%; /* Full width for sensor field */
      }
      ha-textfield {
        width: 100%; /* Full width for numeric fields */
      }
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity,this._fetchGroups())}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_classifica"))).sort())}_fetchGroups(){const t=this._config.entity;if(this.hass&&t){const e=this.hass.states[t];e&&e.attributes.standings_groups?this.groups=e.attributes.standings_groups.map((t=>t.name)):this.groups=[]}}_valueChanged(t){if(!this._config)return;const e=t.target,s="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:s};this.configChanged(t)}}_groupChanged(t){if(!this._config)return;const e=t.target.value,s={...this._config,selected_group:e};this.configChanged(s)}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
              
        <h3>Settings:</h3>
              
        <div class="option">
          <ha-select
            label="Select Group"
            .value=${this._config.selected_group||""}
            .configValue=${"selected_group"}
            @change=${this._groupChanged}
            @closed=${t=>t.stopPropagation()} 
          >
            ${this.groups.length?this.groups.map((t=>I`
                  <ha-list-item .value=${t}>${t}</ha-list-item>
                `)):I`<ha-list-item .value="">No groups available</ha-list-item>`}
          </ha-select>
        </div>

        </div>
          <div class="option">
          <ha-switch
            .checked=${!0===this._config.hide_header}
            @change=${this._valueChanged}
            .configValue=${"hide_header"}
          >
          </ha-switch>
          <label>Hide Header</label>
        </div>
        <div class="option">
          <ha-textfield
            label="Max Teams Visible"
            type="number"
            .value=${this._config.max_teams_visible||10}
            @change=${this._valueChanged}
            .configValue=${"max_teams_visible"}
          ></ha-textfield>
        </div>
      `:I``}}),customElements.define("team-live-matches",class extends ot{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("You must define an entity");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:5,this.maxEventsTotal=t.max_events_total?t.max_events_total:50,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches,this.hideHeader=void 0!==t.hide_header&&t.hide_header,this.hidePastDays=void 0!==t.hide_past_days?t.hide_past_days:0,this.activeMatch=null,this.showPopup=!1}getCardSize(){return 3}static getConfigElement(){return document.createElement("team-live-matches-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:!0,hide_header:!1}}_parseMatchDate(t){const[e,s]=t.split(" "),[i,a,o]=e.split("/").map(Number),[n,r]=s?s.split(":").map(Number):[0,0];return new Date(o,a-1,i,n,r)}getMatchStatusText(t){return t.completed?`${t.home_score} - ${t.away_score} (Full Time)`:1===t.period||2===t.period?`${t.home_score} - ${t.away_score} (${t.clock})`:"Scheduled"===t.status?`${t.date}`:t.season_info?`${t.season_info}`:"Data not available"}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],s=[],i=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?s.push(t):t.includes("Red Card")&&i.push(t)})),{goals:e,yellowCards:s,redCards:i}}renderMatchDetails(t,e){if(!t||0===t.length)return I`<p>No details available.</p>`;const{goals:s,yellowCards:i,redCards:a}=this.separateEvents(t);return I`
      ${e?I`<p><strong>Final clock:</strong> ${e}</p>`:""}
      ${s.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Goals</h5>
              <ul class="goal-details">
                ${s.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${i.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Yellow Cards</h5>
              <ul class="yellow-card-details">
                ${i.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${a.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Red Cards</h5>
              <ul class="red-card-details">
                ${a.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
    `}renderPopup(){return this.showPopup&&this.activeMatch?I`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${t=>t.stopPropagation()}">
          <h3 class="popup-title">Match Details</h3>
        
          <div class="popup-logos">
            <img class="popup-logo" src="${this.activeMatch.home_logo}" alt="${this.activeMatch.home_team}" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_logo}" alt="${this.activeMatch.away_team}" />
          </div>
        
          <p><strong>Home Formation:</strong> <span class="home-stat">${this.activeMatch.home_form}</span></p>
          <p><strong>Away Formation:</strong> <span class="away-stat">${this.activeMatch.away_form}</span></p>
        
          <p><strong>Home Statistics:</strong></p>
          <ul>
            <li>Ball Possession: <span class="stat-value">${this.activeMatch.home_statistics?.possessionPct??"N/A"}%</span></li>
            <li>Total Shots: <span class="stat-value">${this.activeMatch.home_statistics?.totalShots??"N/A"}</span></li>
            <li>Shots on Target: <span class="stat-value">${this.activeMatch.home_statistics?.shotsOnTarget??"N/A"}</span></li>
            <li>Fouls Committed: <span class="stat-value">${this.activeMatch.home_statistics?.foulsCommitted??"N/A"}</span></li>
            <li>Assists: <span class="stat-value">${this.activeMatch.home_statistics?.goalAssists??"N/A"}</span></li>
          </ul>
          <p><strong>Away Statistics:</strong></p>
          <ul>
            <li>Ball Possession: <span class="stat-value">${this.activeMatch.away_statistics?.possessionPct??"N/A"}%</span></li>
            <li>Total Shots: <span class="stat-value">${this.activeMatch.away_statistics?.totalShots??"N/A"}</span></li>
            <li>Shots on Target: <span class="stat-value">${this.activeMatch.away_statistics?.shotsOnTarget??"N/A"}</span></li>
            <li>Fouls Committed: <span class="stat-value">${this.activeMatch.away_statistics?.foulsCommitted??"N/A"}</span></li>
            <li>Assists: <span class="stat-value">${this.activeMatch.away_statistics?.goalAssists??"N/A"}</span></li>
          </ul>

          <h4 class="popup-subtitle">Match Events</h4>
          ${this.renderMatchDetails(this.activeMatch.match_details,this.activeMatch.clock)}
          <button @click="${this.closePopup}" class="close-button">Close</button>
        </div>
      </div>
    `:I``}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Unknown entity: ${t}</ha-card>`;let s=e.attributes.matches||[];const i=e.attributes.league_info?e.attributes.league_info[0]:null,a=e.attributes.team_logo||null;this.showFinishedMatches||(s=s.filter((t=>"Full Time"!==t.status))),s=s.sort(((t,e)=>new Date(t.date)-new Date(e.date)));const o=new Date;if(this.hidePastDays>0){const t=new Date(o);t.setDate(t.getDate()-this.hidePastDays),console.log(`Current date: ${o}, Filter date (days ago): ${t}`),s=s.filter((e=>this._parseMatchDate(e.date)>=t))}const n=s.slice(0,this.maxEventsTotal);if(0===n.length)return I`<ha-card>No matches available</ha-card>`;const r=150*this.maxEventsVisible;return I`
        <ha-card>
          ${this.hideHeader?"":I`
          <div class="header">
            ${i&&i.logo_href?I`
            <div class="league-header">
              <img class="league-logo" src="${i.logo_href}" alt="Logo ${i.abbreviation}" />
              <div class="league-info">
                <div class="league-name">${i.abbreviation}</div>
                <div class="league-dates">${i.startDate} - ${i.endDate}</div>
              </div>
            </div>`:""}

            ${a?I`
            <div class="team-header">
              <img class="team-logo" src="${a}" alt="Team Logo" />
            </div>`:""}
          </div>
          `}
          <div class="scroll-content" style="max-height: ${r}px; overflow-y: auto;">
            ${n.map(((t,e)=>I`
              <div class="match-wrapper">
                <div class="match-header">
                  <div class="match-competition">
                    ${t.venue} | <span class="match-date">${t.date}</span>
                    ${"Scheduled"!==t.status?I`<span class="info-icon" @click="${()=>this.showDetails(t)}">Info</span>`:""}
                  </div>
                </div>
                <div class="match">
                  <img class="team-logo" src="${t.home_logo}" alt="${t.home_team}" />
                  <div class="match-info">
                    <div class="team-name">${t.home_team}</div>
                    <div class="match-result">
                      ${this.getMatchStatusText(t)}
                    </div>
                    <div class="team-name">${t.away_team}</div>
                  </div>
                  <img class="team-logo" src="${t.away_logo}" alt="${t.away_team}" />
                </div>
                ${e<n.length-1?I`<hr class="separator-line" />`:""}
              </div>
            `))}
          </div>
          ${this.renderPopup()}
        </ha-card>
      `}static get styles(){return o`
        ha-card {
          padding: 16px;
          box-sizing: border-box;
          width: 100%;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          position: relative;
        }
        .league-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .league-logo {
          width: 80px;
          height: 80px;
          margin-right: 15px;
        }
        .league-info {
          text-align: center;
          flex-grow: 1;
        }
        .league-name {
          font-size: 22px;
          font-weight: bold;
        }
        .league-dates {
          font-size: 14px;
          color: gray;
        }
        .team-header {
          text-align: center;
        }
        .team-logo {
          width: 75px;
          height: 75px;
          margin-left: 15px;
        }
        .separator-line {
          border: none;
          border-top: 1px solid var(--divider-color);
          margin-top: 10px;
        }
        .match-competition {
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
          color: blue;
        }
        .match-date {
          color: orange;
        }
        .match-wrapper {
          margin-bottom: 16px;
        }
        .team-name {
          font-size: 17px;
          font-weight: bold;
          text-align: center;
        }
        hr {
          border: 0;
          border-top: 1px solid var(--divider-color);
          margin: 16px 0;
        }
        .scroll-content {
          overflow-y: auto;
        }
        .match {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .match-info {
          text-align: center;
          flex: 1;
        }
        .match-result {
          font-size: 16px;
          font-weight: bold;
          margin: 8px 0;
          color: green;
        }
        .info-icon {
          font-size: 12px;
          color: var(--primary-color);
          cursor: pointer;
          margin-left: 8px;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: var(--primary-background-color);
          padding: 16px;
          border-radius: 8px;
          width: 80%;
          max-width: 400px;
          overflow-y: auto;
          max-height: 80vh;
        }
        .popup-title {
          color: var(--primary-color);
          margin-top: 0;
        }
        .popup-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }
        .popup-logo {
          width: 60px;
          height: 60px;
          margin: 0 10px;
        }
        .popup-vs {
          font-size: 24px;
          font-weight: bold;
          color: var(--primary-color);
          margin: 0 10px;
        }
        .popup-teams {
          text-align: center;
          font-size: 1.2em;
          color: var(--primary-text-color);
          margin-bottom: 16px;
        }
        .popup-subtitle {
          color: var(--primary-color);
          margin-top: 16px;
        }
        .stat-value {
          color: var(--primary-color);
        }
        .home-stat {
          color: green;
        }
        .away-stat {
          color: red;
        }
        .event-section {
          margin-bottom: 16px;
        }
        .event-title {
          color: var(--primary-color);
          font-weight: bold;
          margin-bottom: 8px;
        }
        .goal-details li, .yellow-card-details li, .red-card-details li {
          color: var(--primary-text-color);
          margin-bottom: 4px;
        }
        .close-button {
          background: var(--primary-color);
          color: white;
          padding: 8px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 16px;
        }
        .close-button:hover {
          background: var(--primary-color-dark);
        }
      `}}),window.customCards=window.customCards||[],window.customCards.push({type:"team-live-matches",name:"Team Live Matches Card",description:"Shows weekly matches or your team matches"}),customElements.define("team-live-matches-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return o`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Space between options */
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      ha-select {
        width: 100%; /* Full width for sensor field */
      }
      ha-textfield {
        width: 100%; /* Full width for numeric fields */
      }
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_all"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,s="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:s};this.configChanged(t)}}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
        
          <h3>Settings:</h3>
          <div class="option">
            <ha-switch
              .checked=${!1!==this._config.show_finished_matches}
              @change=${this._valueChanged}
              .configValue=${"show_finished_matches"}
            >
            </ha-switch>
            <label>Show Finished Matches</label>
          </div>

          <div class="option">
            <ha-switch
              .checked=${!0===this._config.hide_header}
              @change=${this._valueChanged}
              .configValue=${"hide_header"}
            >
            </ha-switch>
            <label>Hide Header</label>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Visible"
              type="number"
              .value=${this._config.max_events_visible||5}
              @change=${this._valueChanged}
              .configValue=${"max_events_visible"}
            ></ha-textfield>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Total"
              type="number"
              .value=${this._config.max_events_total||50}
              @change=${this._valueChanged}
              .configValue=${"max_events_total"}
            ></ha-textfield>
          </div>
          
          <h4>For work, 'Show Finished Matches' must be enabled. </h4>
          <div class="option">
            <ha-textfield
              label="Hide Matches Older Than (Days)"
              type="number"
              .value=${this._config.hide_past_days||0}
              @change=${this._valueChanged}
              .configValue=${"hide_past_days"}
            ></ha-textfield>
          </div>
        </div>
      `:I``}}),customElements.define("team-live-team",class extends ot{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("You must define an entity");this._config=t,this.showPopup=!1,this.activeMatch=null}getCardSize(){return 3}static getConfigElement(){return document.createElement("team-live-team-editor")}static getStubConfig(){return{entity:"sensor.calcio_live"}}getMatchStatusText(t){return t.completed?`${t.home_score} - ${t.away_score} (Full Time)`:1===t.period||2===t.period?`${t.home_score} - ${t.away_score} (${t.clock})`:"Scheduled"===t.status?`${t.date}`:"Data not available"}showDetails(t){console.log("Match details:",t),this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],s=[],i=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?s.push(t):t.includes("Red Card")&&i.push(t)})),{goals:e,yellowCards:s,redCards:i}}renderMatchDetails(t,e,s){if(!t||0===t.length)return I`<p>No details available.</p>`;const i=s.status||"Unknown state";let a;switch(i){case"First Half":a=`First Half (${e})`;break;case"Second Half":a=`Second Half (${e})`;break;case"Halftime":a="Halftime";break;case"Scheduled":a=`Scheduled for ${s.date}`;break;case"Full Time":a="Full Time Completed";break;case"Extra Time":a=`Extra Time (${e})`;break;case"Penalties":a=`Penalties (${e})`;break;default:a=`Status: ${i}`}return I`
      <p><strong>Match Status:</strong> ${a}</p>
      ${this.renderMatchEvents(t)}
    `}renderMatchEvents(t){const{goals:e,yellowCards:s,redCards:i}=this.separateEvents(t);return I`
      ${e.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Goals</h5>
              <ul class="goal-details">
                ${e.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${s.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Yellow Cards</h5>
              <ul class="yellow-card-details">
                ${s.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${i.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Red Cards</h5>
              <ul class="red-card-details">
                ${i.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
    `}renderPopup(){return this.showPopup&&this.activeMatch?I`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${t=>t.stopPropagation()}">
          <h3 class="popup-title">Match Details</h3>
        
          <div class="popup-logos">
            <img class="popup-logo" src="${this.activeMatch.home_logo}" alt="${this.activeMatch.home_team}" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_logo}" alt="${this.activeMatch.away_team}" />
          </div>
        
          <p><strong>Home Formation:</strong> <span class="home-stat">${this.activeMatch.home_form}</span></p>
          <p><strong>Away Formation:</strong> <span class="away-stat">${this.activeMatch.away_form}</span></p>
        
          <p><strong>Home Statistics:</strong></p>
          <ul>
            <li>Ball Possession: <span class="stat-value">${this.activeMatch.home_statistics?.possessionPct??"N/A"}%</span></li>
            <li>Total Shots: <span class="stat-value">${this.activeMatch.home_statistics?.totalShots??"N/A"}</span></li>
            <li>Shots on Target: <span class="stat-value">${this.activeMatch.home_statistics?.shotsOnTarget??"N/A"}</span></li>
            <li>Fouls Committed: <span class="stat-value">${this.activeMatch.home_statistics?.foulsCommitted??"N/A"}</span></li>
            <li>Assists: <span class="stat-value">${this.activeMatch.home_statistics?.goalAssists??"N/A"}</span></li>
          </ul>
          <p><strong>Away Statistics:</strong></p>
          <ul>
            <li>Ball Possession: <span class="stat-value">${this.activeMatch.away_statistics?.possessionPct??"N/A"}%</span></li>
            <li>Total Shots: <span class="stat-value">${this.activeMatch.away_statistics?.totalShots??"N/A"}</span></li>
            <li>Shots on Target: <span class="stat-value">${this.activeMatch.away_statistics?.shotsOnTarget??"N/A"}</span></li>
            <li>Fouls Committed: <span class="stat-value">${this.activeMatch.away_statistics?.foulsCommitted??"N/A"}</span></li>
            <li>Assists: <span class="stat-value">${this.activeMatch.away_statistics?.goalAssists??"N/A"}</span></li>
          </ul>

          <h4 class="popup-subtitle">Match Events</h4>
          ${this.renderMatchDetails(this.activeMatch.match_details,this.activeMatch.clock,this.activeMatch)}
          <button @click="${this.closePopup}" class="close-button">Close</button>
        </div>
      </div>
    `:I``}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Unknown entity: ${t}</ha-card>`;if(!e.attributes.matches||0===e.attributes.matches.length)return I`<ha-card>No matches available</ha-card>`;const s=e.attributes.matches[0];return I`
      <ha-card>
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${s.home_logo}" alt="Home team logo" />
          </div>
          <div class="background-logo away-logo">
            <img src="${s.away_logo}" alt="Away team logo" />
          </div>
        </div>
        <div class="match-wrapper">
          <div class="match-header">
            <div class="match-competition">
              ${s.venue} | <span class="match-date">${s.date}</span>
              ${"Scheduled"!==s.status?I`<span class="info-icon" @click="${()=>this.showDetails(s)}">Info</span>`:""}
            </div>
          </div>
          <div class="match">
            <img class="team-logo" src="${s.home_logo}" alt="${s.home_team}" />
            <div class="match-info">
              <div class="team-name">${s.home_team}</div>
                <div class="match-result">
                ${this.getMatchStatusText(s)} <!-- Shows status and result -->
                </div>
              <div class="team-name">${s.away_team}</div>
            </div>
            <img class="team-logo" src="${s.away_logo}" alt="${s.away_team}" />
          </div>
        </div>

        ${this.renderPopup()}
      </ha-card>
    `}static get styles(){return o`
        ha-card {
          padding: 16px;
          box-sizing: border-box;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .background-logos {
          position: absolute;
          top: -20px;
          left: -50px;
          width: 150%;
          height: 160%;
          display: flex;
          justify-content: space-between;
          opacity: 0.1;
          pointer-events: none;
          transform: translateX(-10%);
        }

        .background-logo {
          width: 50%;
          overflow: hidden;
        }

        .home-logo {
          display: flex;
          justify-content: flex-end;
        }

        .away-logo {
          display: flex;
          justify-content: flex-start;
        }

        .background-logo img {
          width: 150%;
        }
        .team-header {
          text-align: center;
        }
        .team-logo {
          width: 80px;
          height: 80px;
          margin-left: 15px;
        }
        .match-header {
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
          color: blue;
        }
        .match-competition {
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
          color: blue;
        }
        .match-date {
          color: orange;
        }
        .team-logo {
          width: 90px;
          height: 90px;
        }
        .match-wrapper {
          margin-bottom: 16px;
        }
        .team-name {
          font-size: 17px;
          font-weight: bold;
          text-align: center;
        }
        hr {
          border: 0;
          border-top: 1px solid var(--divider-color);
          margin: 16px 0;
        }
      
        .match {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .match-info {
          text-align: center;
          flex: 1;
        }
        .match-result {
          font-size: 16px;
          font-weight: bold;
          margin: 8px 0;
          color: green;
        }
        .info-icon {
          font-size: 12px;
          color: var(--primary-color);
          cursor: pointer;
          margin-left: 8px;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: var(--primary-background-color);
          padding: 16px;
          border-radius: 8px;
          width: 80%;
          max-width: 400px;
          overflow-y: auto;
          max-height: 80vh;
        }
        .popup-title {
          color: var(--primary-color);
          margin-top: 0;
        }
        .popup-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }
        .popup-logo {
          width: 60px;
          height: 60px;
          margin: 0 10px;
        }
        .popup-vs {
          font-size: 24px;
          font-weight: bold;
          color: var(--primary-color);
          margin: 0 10px;
        }
        .popup-teams {
          text-align: center;
          font-size: 1.2em;
          color: var(--primary-text-color);
          margin-bottom: 16px;
        }
        .popup-subtitle {
          color: var(--primary-color);
          margin-top: 16px;
        }
        .stat-value {
          color: var(--primary-color);
        }
        .home-stat {
          color: green;
        }
        .away-stat {
          color: red;
        }
        .event-section {
          margin-bottom: 16px;
        }
        .event-title {
          color: var(--primary-color);
          font-weight: bold;
          margin-bottom: 8px;
        }
        .goal-details li, .yellow-card-details li, .red-card-details li {
          color: var(--primary-text-color);
          margin-bottom: 4px;
        }
        .close-button {
          background: var(--primary-color);
          color: white;
          padding: 8px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 16px;
        }
        .close-button:hover {
          background: var(--primary-color-dark);
        }
      `}}),window.customCards=window.customCards||[],window.customCards.push({type:"team-live-team",name:"Team Live Team Card",description:"Shows matches for your team"}),customElements.define("team-live-team-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return o`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Space between options */
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      ha-select {
        width: 100%; /* Full width for sensor field */
      }
      ha-textfield {
        width: 100%; /* Full width for numeric fields */
      }
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_next"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,s="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:s};this.configChanged(t)}}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h4>CalcioLive Sensor:</h4>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
        </div>
      `:I``}})})();