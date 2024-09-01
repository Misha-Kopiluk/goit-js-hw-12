export const galleryMarkup = (info) => {
    return `<li class="gallery-item">
    <a class="gallery-link" href="${info.largeImageURL}">
    <img class="gallery-image" src="${info.webformatURL}" alt="${info.tags}" />
    </a>
    <div class="wrapper">
    <ul class="img">
      <li class="text-item">
        Likes<span class="text">${info.likes}</span>
      </li>
      <li class="text-item">
        Views<span class="text">${info.views}</span>
      </li>
      <li class="text-item">
        Comments<span class="text">${info.comments}</span>
      </li>
      <li class="text-item">
        Downloads<span class="text">${info.downloads}</span>
      </li>
    </ul>
  </div>
  </li>`;
}
