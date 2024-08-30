import{a as f,S as q,i as n}from"./assets/vendor-d93b82f1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();f.defaults.baseURL="https://pixabay.com/api/";const p={params:{key:"45505147-33e194e8689097e70f28421cd",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}};async function L(r,e){return p.params.q=r,p.params.page=e,(await f.get("",p)).data}const x=document.querySelector(".gallery-list"),v=r=>{const e=r.map(({webformatURL:l,largeImageURL:d,tags:t,likes:s,views:o,comments:b,downloads:$})=>`<li class="gallery-item">
        <a class="gallery-link" href="${d}">
          <img class="gallery-image" src="${l}" alt="${t}">
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
                <p class="gallery-image-stats-text">${b}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Downloads</p>
                <p class="gallery-image-stats-text">${$}</p>
              </li>
            </ul>
          </div>
        </a>
      </li>`).join("");x.insertAdjacentHTML("beforeend",e)},S=document.querySelector(".form"),y=document.querySelector(".gallery-list"),a=document.querySelector(".loader"),i=document.querySelector(".load-more"),g=new q(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let m="",c=1,u=0,h=0,w=15;const O=async r=>{if(r.preventDefault(),a.classList.remove("hidden"),m=r.target.elements.inputField.value.toLowerCase().trim(),c=33,!m){n.error({title:"Error",message:"You need to type something on field!",position:"topRight"});return}try{const e=await L(m,c);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.classList.add("hidden"),i.classList.add("hidden"),y.innerHTML="",S.reset();return}else y.innerHTML="",v(e.hits),g.refresh(),a.classList.add("hidden"),i.classList.remove("hidden")}catch(e){n.error({message:`There is an Error ${e}. Try again!`,position:"topRight"})}},P=async r=>{try{c+=1,i.classList.add("hidden"),a.classList.remove("hidden");const e=await L(m,c);if(v(e.hits),g.refresh(),h=e.totalHits,c*w>=h){n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i.classList.add("hidden"),a.classList.add("hidden"),g.refresh();return}u=y.querySelector(".gallery-item").getBoundingClientRect().height,scrollBy({top:u*2,behavior:"smooth"}),a.classList.add("hidden"),i.classList.remove("hidden"),g.refresh()}catch(e){n.error({message:`There is an Error ${e}. Try again!`,position:"topRight"})}};S.addEventListener("submit",O);i.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
