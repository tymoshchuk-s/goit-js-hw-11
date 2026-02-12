import{a as y,S as g,i as a}from"./assets/vendor-D8JM3d_r.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="54606407-cd906ecd7aeac5d34d8006dc4",v="https://pixabay.com/api/";function b(o){const i={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(v,{params:i}).then(r=>r.data).catch(r=>{console.error("Error fetching images:",r)})}const l=document.querySelector(".gallery"),u=document.querySelector("#loader"),L=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function S(o){const i=o.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>{const m=e.split(",").slice(0,5).join(", ");return`
                <li class="gallery-item">
                <a href="${n}">
                    <img src="${r}" alt="${m}" loading="lazy" class="gallery-image" />
                </a>
                 <div class="info">
          <div class="image-info">
            <div class="info-item">
              <p class="info-title"><b>❤️ likes:</b></p>
              <p class="info-value">${t}</p>
            </div>
            <div class="info-item">
              <p class="info-title"><b>👁️ views:</b></p>
              <p class="info-value">${s}</p>
            </div>
            <div class="info-item">
              <p class="info-title"><b>💬 comments:</b></p>
              <p class="info-value">${f}</p>
            </div>
            <div class="info-item">
              <p class="info-title"><b>⬇️ downloads:</b></p>
              <p class="info-value">${p}</p>
            </div>
          </div>
        </div>
            </li>`}).join("");l.insertAdjacentHTML("beforeend",i),L.refresh()}function q(){return u.hidden=!1}function w(){return u.hidden=!0}function E(){return l.innerHTML=""}const d=document.querySelector(".form"),c=d.querySelector("input[name='search-text']");d.addEventListener("submit",$);async function $(o){o.preventDefault();const i=c.value.trim();if(!i){a.warning({message:"Please enter a search query.",position:"topRight"});return}E(),q();try{const r=await b(i);r.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(S(r.hits),c.value="")}catch(r){a.error({message:`Error: ${r.message}`,position:"topRight"})}finally{w()}}
//# sourceMappingURL=index.js.map
