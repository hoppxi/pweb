function loadHTML(url, elementId) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      const container = document.getElementById(elementId);
      if (container) {
        container.insertAdjacentHTML('beforeend', html);
        console.log(html)
      } else {
        console.warn(`Element with id "${elementId}" not found.`);
      }
    })
    .catch(error => {
      console.error('Error loading HTML:', error);
    });
}


function resolveBasePath() {
  const path = window.location.pathname;
  const depth = path.split('/').filter(Boolean).length;

  if (depth === 1) return './';
  else if (depth === 2) return '../';
  else if (depth >= 3) return '../../';
  else return './';
}

function loadHeaderAndFooter() {
  const basePath = resolveBasePath();
  loadHTML(basePath + 'imports/header.html', 'header');
  loadHTML(basePath + 'imports/footer.html', 'footer');
}

export { loadHeaderAndFooter, loadHTML };