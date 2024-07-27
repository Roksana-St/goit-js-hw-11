import{i,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="45130160-d43b37f420c01d8101f282345",d="https://pixabay.com/api/";async function u(n){const o=`${d}?key=${l}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`,s=await fetch(o);if(!s.ok)throw new Error("Failed to fetch images");return(await s.json()).hits}function f(n){const o=document.querySelector(".gallery");o.innerHTML="";const s=n.map(t=>`
      <div class="photo-card">
        <a href="${t.largeImageURL}">

        </a>
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />

        <div class="info">
          <p class="info-item">
            Likes <span>${t.likes}</span>
          </p>
          <p class="info-item">
            Views <span>${t.views}</span>
          </p>
          <p class="info-item">
            Comments<span>${t.comments}</span>
          </p>
          <p class="info-item">
            Downloads <span>${t.downloads}</span>
          </p>
        </div>
      </div>
    `).join("");o.insertAdjacentHTML("beforeend",s)}document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".form"),o=n.querySelector('input[name="query"]'),s=document.querySelector(".loader");let t=null;n.addEventListener("submit",async e=>{e.preventDefault();const r=o.value.trim();if(r===""){i.error({title:"Error",message:"Please enter a search query."});return}s.style.display="block";const a=await u(r);s.style.display="none",a.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!"}):(f(a),t?t.refresh():t=new c(".gallery a",{})),o.value=""})});
//# sourceMappingURL=commonHelpers.js.map
