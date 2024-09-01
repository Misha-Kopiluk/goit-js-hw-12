import{a as b,S as v,i}from"./assets/vendor-CcU07tmu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const w="https://pixabay.com/api/",x="45654098-015d10b92a1455385bf1e768f",g=(t,r)=>{const a={params:{q:t,orientation:"horizontal",image_type:"photo",safesearch:"true",per_page:15,page:r}};return b.get(`${w}?key=${x}`,a)},h=t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
    </a>
    <div class="wrapper">
    <ul class="img">
      <li class="text-item">
        Likes<span class="text">${t.likes}</span>
      </li>
      <li class="text-item">
        Views<span class="text">${t.views}</span>
      </li>
      <li class="text-item">
        Comments<span class="text">${t.comments}</span>
      </li>
      <li class="text-item">
        Downloads<span class="text">${t.downloads}</span>
      </li>
    </ul>
  </div>
  </li>`,d=document.querySelector(".forms"),m=document.querySelector(".gallery"),y=document.querySelector(".js-loader"),p=document.querySelector(".js-load-more-btn"),f=new v(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let n=1,l="",L=0;const R=()=>{y.classList.remove("hidden")},u=()=>{y.classList.add("hidden")},q=async t=>{R();try{if(t.preventDefault(),l=d.elements.user.value.trim(),n=1,l===""){i.warning({position:"topRight",message:"Fill in the input field"}),u();return}const r=await g(l,n);if(r.data.hits.length===0){i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m.innerHTML="";return}const a=r.data.hits.map(e=>h(e)).join("");m.innerHTML=a,f.refresh(),L=document.querySelector(".gallery-item").getBoundingClientRect().height,p.classList.remove("is-hidden")}catch{i.error({position:"topRight",message:"An error occurred"})}finally{u()}d.reset()},S=async()=>{try{n++;const t=await g(l,n),r=t.data.hits.map(o=>h(o)).join("");m.insertAdjacentHTML("beforeend",r),f.refresh(),window.scrollBy({top:L*2,behavior:"smooth"});const a=Math.ceil(t.data.totalHits/15);n>=a&&(i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),p.classList.add("is-hidden"))}catch{i.error({position:"topRight",message:"An error occurred"})}};d.addEventListener("submit",q);p.addEventListener("click",S);
//# sourceMappingURL=index.js.map
