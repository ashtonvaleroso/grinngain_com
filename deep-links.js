(() => {
  "use strict";

  // Android App Links and iOS Universal Links open the installed app before
  // this page loads. If no installed app claims a supported link, send the
  // visitor to the website homepage instead of leaving them on a 404 page.
  const website = "https://www.grinngain.com/";
  const path = window.location.pathname;
  const supported =
    /^\/workouts\/[^/]+\/\d+\/?$/.test(path) ||
    /^\/profiles\/[^/]+\/(routines|programs)\/\d+\/?$/.test(path);

  if (supported) {
    window.location.replace(website);
  }
})();
