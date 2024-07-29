import{S as c,i as a}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="45130160-d43b37f420c01d8101f282345",d="https://pixabay.com/api/";function u(o){const n=`${d}?key=${l}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).catch(r=>{console.log(r)})}function f(o){const n=document.querySelector(".gallery");n.innerHTML="";const r=o.map(e=>`
      
        <a href="${e.largeImageURL}">

        <div class="photo-card">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />

        <div class="info">
          <p class="info-item">
            Likes <span>${e.likes}</span>
          </p>
          <p class="info-item">
            Views <span>${e.views}</span>
          </p>
          <p class="info-item">
            Comments<span>${e.comments}</span>
          </p>
          <p class="info-item">
            Downloads <span>${e.downloads}</span>
          </p>
        </div>
      </div>
    </a>`).join("");n.insertAdjacentHTML("beforeend",r),new c(".gallery a",{captions:!0,captionsDelay:250}).refresh()}function p(){const o=document.querySelector(".gallery");o.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".form"),n=o.querySelector('input[name="query"]'),r=document.querySelector(".loader");o.addEventListener("submit",s=>{s.preventDefault();const e=n.value.trim();if(!e){a.error({title:"Error",message:"Please enter a search query!"});return}p(),r.classList.remove("hidden"),u(e).then(t=>{if(r.classList.add("hidden"),t.hits.length===0){a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}f(t.hits),lightbox.refresh()}).catch(t=>{r.classList.add("hidden"),console.error("Error fetching images:",t)}),o.reset()})});
//# sourceMappingURL=commonHelpers.js.map
