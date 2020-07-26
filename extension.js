let numPosts;

function removeNewsFeedPostsBySameAuthor() {
  // For better performance, return early if the number of posts hasn't changed, meaning
  // no new posts are detected
  const postNodes = document.querySelectorAll('#m_newsfeed_stream article[data-sigil*="story-div"]');
  if (postNodes.length === numPosts) return;

  numPosts = postNodes.length;
  const encounteredAuthorIds = {};
  const postEls = Array.from(postNodes);
  for (const postEl of postEls) {
    const postAuthorId = JSON.parse(postEl.getAttribute('data-ft')).content_owner_id_new;
    if (encounteredAuthorIds.hasOwnProperty(postAuthorId)) {
      postEl.style.display = 'none';
    } else {
      encounteredAuthorIds[postAuthorId] = true;
    }
  }
}

setInterval(removeNewsFeedPostsBySameAuthor, 1000);

// For debugging
//
//function testFn() { alert(getReactionsCountTextEls().map(el => el.innerText)); }
//setInterval(testFn, 5000);
