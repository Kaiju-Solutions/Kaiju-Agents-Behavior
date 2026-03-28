/* my-template/public/main.js */
export default {
  start: () => {
    // 1. Define what we want to do once the affix is found
    const initializeFilter = (affixContainer) => {
      // Check if we've already added it to prevent duplicates
      if (document.getElementById('affix-filter-box')) return;

      const filterBox = document.createElement('input');
      filterBox.id = 'affix-filter-box';
      filterBox.type = 'search';
      filterBox.className = 'form-control mb-3';
      filterBox.placeholder = 'Filter in this article...';

      affixContainer.insertBefore(filterBox, affixContainer.firstChild);

      filterBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const listItems = affixContainer.querySelectorAll('li');

        listItems.forEach(li => {
          const text = li.textContent.toLowerCase();
          li.style.display = text.includes(searchTerm) ? '' : 'none';
        });
      });
    };

    // 2. Set up the MutationObserver
    const observer = new MutationObserver((mutations, obs) => {
      const affixContainer = document.querySelector('.affix') || document.getElementById('affix');
      
      // Check if the container exists AND has its list items populated
      if (affixContainer && affixContainer.querySelectorAll('li').length > 0) {
        initializeFilter(affixContainer);
        obs.disconnect(); // We found it and set it up, so stop watching the DOM
      }
    });

    // 3. Start observing the entire body for added nodes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}