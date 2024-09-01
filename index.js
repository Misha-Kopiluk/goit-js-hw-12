import{a as b,S as v,i}from"./assets/vendor-CcU07tmu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const w="https://pixabay.com/api/",x="45654098-015d10b92a1455385bf1e768f",h=(e,r)=>{const o={params:{q:e,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:15,page:r}};return b.get(`${w}?key=${x}`,o)},y=e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
    </a>
    <div class="wrapper">
    <ul class="img">
      <li class="text-item">
        Likes<span class="text">${e.likes}</span>
      </li>
      <li class="text-item">
        Views<span class="text">${e.views}</span>
      </li>
      <li class="text-item">
        Comments<span class="text">${e.comments}</span>
      </li>
      <li class="text-item">
        Downloads<span class="text">${e.downloads}</span>
      </li>
    </ul>
  </div>
  </li>`,d=document.querySelector(".forms"),m=document.querySelector(".gallery"),f=document.querySelector(".js-loader"),p=document.querySelector(".js-load-more-btn"),L=new v(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let n=1,l="",u=0;const R=()=>{f.classList.remove("hidden")},g=()=>{f.classList.add("hidden")},S=async e=>{R();try{if(e.preventDefault(),l=d.elements.user.value.trim(),n=1,l===""){i.warning({position:"topRight",message:"Fill in the input field"}),g();return}const r=await h(l,n);if(r.data.hits.length===0){i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m.innerHTML="";return}const o=r.data.hits.map(a=>y(a)).join("");m.innerHTML=o,L.refresh(),p.classList.remove("is-hidden")}catch{i.error({position:"topRight",message:"An error occurred"})}finally{g()}d.reset()},q=()=>{u=document.querySelector(".gallery-item").getBoundingClientRect().height,window.scrollBy({top:u*2,behavior:"smooth"})},M=async()=>{try{n++;const e=await h(l,n),r=e.data.hits.map(a=>y(a)).join("");m.insertAdjacentHTML("beforeend",r),L.refresh(),q();const o=Math.ceil(e.data.totalHits/15);n>=o&&(i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),p.classList.add("is-hidden"))}catch{i.error({position:"topRight",message:"An error occurred"})}};d.addEventListener("submit",S);p.addEventListener("click",M);
//# sourceMappingURL=index.js.map
