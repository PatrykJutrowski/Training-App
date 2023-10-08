function updateContentBlock(path) {
    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach((block) => {
        if (block.getAttribute('data-post') === path) {
            block.classList.remove('hidden');
        } else {
            block.classList.add('hidden');
        }
    });
}


// Event listener for links
const nav_links = document.getElementById('nav_links');
nav_links.addEventListener('click', function(event) {
    const link = event.target;
    if (link.tagName === 'A' && link.hasAttribute('data-path')) {
        event.preventDefault();
        const path = link.dataset.path
        history.pushState(null, '', path);
        updateContentBlock(path);
        nav_links.style.display = 'none';
    }
});

const nav_links1 = document.getElementById('nav_links1');
nav_links1.addEventListener('click', function(event) {
    const link = event.target;
    if (link.tagName === 'A' && link.hasAttribute('data-path')) {
        event.preventDefault();
        const path = link.dataset.path;
        history.pushState(null, '', path);
        updateContentBlock(path);
        nav_links1.style.display = 'flex';
    }
});

const nav_links_LowerBody = document.getElementById('nav_links_LowerBody');
nav_links_LowerBody.addEventListener('click', (event)=>{
    const link = event.target;
    if (link.tagName === "A" && link.hasAttribute('data-path')){
        event.preventDefault();
        const path = link.dataset.path;
        history.pushState(null, '', path);
        updateContentBlock(path);
        nav_links_LowerBody.style.display = 'flex';
    }
})
// Event listener for popstate
window.addEventListener('popstate', function() {
    const path = window.location.pathname;
    if (path === '/upperBody' || path === '/lowerBody'){
        nav_links.style.display = 'none'
    }else {
        nav_links.style.display = 'flex';
    }
    updateContentBlock(path);
});

// Initial content block update
const initialPath = window.location.pathname;
updateContentBlock(initialPath);


