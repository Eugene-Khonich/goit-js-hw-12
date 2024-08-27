import{a as y,S as $,i as n}from"./assets/vendor-d93b82f1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();y.defaults.baseURL="https://pixabay.com/api/";function u(a,e){const r={params:{key:"45505147-33e194e8689097e70f28421cd",image_type:"photo",orientation:"horizontal",safesearch:"true",q:a,page:e,per_page:15}};return y.get("",r)}const q=document.querySelector(".gallery-list"),h=a=>{const e=a.map(({webformatURL:r,largeImageURL:d,tags:t,likes:s,views:o,comments:S,downloads:b})=>`<li class="gallery-item">
        <a class="gallery-link" href="${d}">
          <img class="gallery-image" src="${r}" alt="${t}">
            <div class="gallery-image-stats">
            <ul class="gallery-image-stats-list">
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Likes</p>
                <p class="gallery-image-stats-text">${s}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Views</p>
                <p class="gallery-image-stats-text">${o}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Comments</p>
                <p class="gallery-image-stats-text">${S}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Downloads</p>
                <p class="gallery-image-stats-text">${b}</p>
              </li>
            </ul>
          </div>
        </a>
      </li>`).join("");q.insertAdjacentHTML("beforeend",e)},f=document.querySelector(".form"),L=document.querySelector(".gallery-list"),l=document.querySelector(".loader"),c=document.querySelector(".load-more"),v=new $(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let g="",i=1,p=0,m=0,x=15;const O=async a=>{if(a.preventDefault(),g=a.target.elements.inputField.value.toLowerCase().trim(),i=1,!g){n.error({title:"Error",message:"You need to type something on field!",position:"topRight"});return}l.classList.remove("hidden");try{const e=await u(g,i);if(e.data.total===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.add("hidden"),L.innerHTML="",f.reset();return}else h(e.data.hits),v.refresh(),l.classList.add("hidden"),c.classList.remove("hidden")}catch(e){n.error({message:`There is an Error ${e}. Try again!`,position:"topRight"})}},P=async a=>{try{i+=1,c.classList.add("hidden"),l.classList.remove("hidden");const e=await u(g,i);if(h(e.data.hits),m=e.data.totalHits,console.log(e),console.log(i),console.log(m),i*x>=m){n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c.classList.add("hidden"),l.classList.add("hidden");return}p=L.querySelector(".gallery-item").getBoundingClientRect().height,scrollBy({top:p*2,behavior:"smooth"}),l.classList.add("hidden"),c.classList.remove("hidden"),v.refresh()}catch(e){n.error({message:`There is an Error ${e}. Try again!`,position:"topRight"})}};f.addEventListener("submit",O);c.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
