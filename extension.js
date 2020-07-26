let numPosts;

function deduplicatePostsByAuthor() {
  // For better performance, return early if the number of posts hasn't changed, meaning
  // no new posts are detected
  const postNodes = document.querySelectorAll('article[data-sigil*="story-div"]')
  if (postNodes.length === numPosts) return;

  numPosts = postNodes.length;
  const encounteredAuthorIds = {};
  const postEls = Array.from(postNodes);
  for (const postEl of postEls) {
    const postAuthorId = JSON.parse(postEl.getAttribute('data-ft')).content_owner_id_new;
    if (encounteredAuthorIds.hasOwnProperty(postAuthorId)) {
      postEl.innerHTML = 'hidden';
    } else {
      encounteredAuthorIds[postAuthorId] = true;
    }
  }
}

setInterval(deduplicatePostsByAuthor, 1000);

// For debugging
//
//function testFn() { alert(getReactionsCountTextEls().map(el => el.innerText)); }
//setInterval(testFn, 5000);
