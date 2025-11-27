// popup.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('getTitleBtn');
  const titleArea = document.getElementById('titleArea');

  btn.addEventListener('click', async () => {
    titleArea.textContent = 'Getting title...';

    try {
      // Query the active tab in the current window
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

      if (!tabs || tabs.length === 0) {
        titleArea.textContent = 'No active tab found.';
        return;
      }

      const tab = tabs[0];
      // tab.title contains the title
      titleArea.textContent = tab.title || 'No title available';

      // Optional: show the tab URL as well
      // titleArea.textContent = `Title: ${tab.title}\nURL: ${tab.url}`;
    } catch (err) {
      console.error('Error fetching tab:', err);
      titleArea.textContent = 'Error fetching tab title. See console.';
    }
  });
});
