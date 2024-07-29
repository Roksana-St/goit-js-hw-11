import{S as c,i as a}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="45130160-d43b37f420c01d8101f282345",d="https://pixabay.com/api/";function u(o){const n=`${d}?key=${l}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).catch(t=>{console.log(t)})}function f(o){const n=document.querySelector(".gallery");n.innerHTML="";const t=o.map(e=>`
      
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
    </a>`).join("");n.insertAdjacentHTML("beforeend",t),new c(".gallery a").refresh()}function p(){const o=document.querySelector(".gallery");o.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".form"),n=o.querySelector('input[name="query"]'),t=document.querySelector(".loader");let i=new c(".gallery a");o.addEventListener("submit",e=>{e.preventDefault();const r=n.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query!"});return}p(),t.classList.remove("hidden"),u(r).then(s=>{if(t.classList.add("hidden"),s.hits.length===0){a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}f(s.hits),i.refresh()}).catch(s=>{t.classList.add("hidden"),console.error("Error fetching images:",s)}),o.reset()})});
//# sourceMappingURL=commonHelpers.js.map
