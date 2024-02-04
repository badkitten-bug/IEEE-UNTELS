document.addEventListener("astro:page-load",()=>{const a=document.querySelectorAll(".background");if(window.IntersectionObserver==null){a.forEach(e=>{e.style.backgroundImage="url('"+e.dataset.src+"')"});return}function t(e){e.map(r=>{if(r.isIntersecting){const s=r.target,{style:n,dataset:d}=s;n.backgroundImage="url('"+d.src+"')",i.unobserve(r.target)}})}const i=new IntersectionObserver(t,{rootMargin:"100px"});a.forEach(e=>i.observe(e))});class o extends HTMLElement{constructor(){super(),this.isIframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid","playlistid"]}connectedCallback(){this.addEventListener("pointerover",o.warmConnections,{once:!0}),this.addEventListener("click",()=>this.addIframe())}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(t){this.setAttribute("videoid",t)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(t){this.setAttribute("playlistid",t)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(t){this.setAttribute("videotitle",t)}get videoPlay(){return this.getAttribute("videoPlay")||"Play"}set videoPlay(t){this.setAttribute("videoPlay",t)}get videoStartAt(){return this.getAttribute("videoStartAt")||"0"}get autoLoad(){return this.hasAttribute("autoload")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}set params(t){this.setAttribute("params",t)}setupDom(){const t=this.attachShadow({mode:"open"});let i="";window.liteYouTubeNonce&&(i=`nonce="${window.liteYouTubeNonce}"`),t.innerHTML=`
      <style ${i}>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (16 / 9));
        }

        @media (max-width: 40em) {
          :host([short]) {
            padding-bottom: calc(100% / (9 / 16));
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
          height: 60px;
          width: 100%;
          z-index: 1;
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
        </picture>
        <button id="playButton"></button>
      </div>
    `,this.domRefFrame=t.querySelector("#frame"),this.domRefImg={fallback:t.querySelector("#fallbackPlaceholder"),webp:t.querySelector("#webpPlaceholder"),jpeg:t.querySelector("#jpegPlaceholder")},this.domRefPlayButton=t.querySelector("#playButton")}setupComponent(){this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),(this.autoLoad||this.isYouTubeShort())&&this.initIntersectionObserver()}attributeChangedCallback(t,i,e){switch(t){case"videoid":case"playlistid":case"videoTitle":case"videoPlay":{i!==e&&(this.setupComponent(),this.domRefFrame.classList.contains("activated")&&(this.domRefFrame.classList.remove("activated"),this.shadowRoot.querySelector("iframe").remove(),this.isIframeLoaded=!1));break}}}addIframe(t=!1){if(!this.isIframeLoaded){let i=t?0:1;const e=this.noCookie?"-nocookie":"";let r;this.playlistId?r=`?listType=playlist&list=${this.playlistId}&`:r=`${this.videoId}?`,this.isYouTubeShort()&&(this.params=`loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`,i=1);const s=`
<iframe frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${e}.com/embed/${r}autoplay=${i}&${this.params}"
></iframe>`;this.domRefFrame.insertAdjacentHTML("beforeend",s),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.attemptShortAutoPlay(),this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){const t=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,i=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg.fallback.loading=this.posterLoading,this.domRefImg.webp.srcset=t,this.domRefImg.jpeg.srcset=i,this.domRefImg.fallback.src=i,this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.domRefImg?.fallback?.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}initIntersectionObserver(){const t={root:null,rootMargin:"0px",threshold:0};new IntersectionObserver((e,r)=>{e.forEach(s=>{s.isIntersecting&&!this.isIframeLoaded&&(o.warmConnections(),this.addIframe(!0),r.unobserve(this))})},t).observe(this)}attemptShortAutoPlay(){this.isYouTubeShort()&&setTimeout(()=>{this.shadowRoot.querySelector("iframe")?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},2e3)}isYouTubeShort(){return this.getAttribute("short")===""&&window.matchMedia("(max-width: 40em)").matches}static addPrefetch(t,i){const e=document.createElement("link");e.rel=t,e.href=i,e.crossOrigin="true",document.head.append(e)}static warmConnections(){o.isPreconnected||window.liteYouTubeIsPreconnected||(o.addPrefetch("preconnect","https://i.ytimg.com/"),o.addPrefetch("preconnect","https://s.ytimg.com"),o.addPrefetch("preconnect","https://www.youtube.com"),o.addPrefetch("preconnect","https://www.google.com"),o.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),o.addPrefetch("preconnect","https://static.doubleclick.net"),o.isPreconnected=!0,window.liteYouTubeIsPreconnected=!0)}}o.isPreconnected=!1;customElements.define("lite-youtube",o);
