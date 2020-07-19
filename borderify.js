function getReactionsCountTextEls0() {
  const hookElsNodeList = document.querySelectorAll('span[aria-label="See who reacted to this"]');
  const hookElsArr = Array.from(hookElsNodeList);

  return hookElsArr.map(hookEl => hookEl.parentElement.children[1]);
}

function getReactionsCountTextEls1() {
  const hookElsNodeList = document.querySelectorAll('div[data-sigil="reactions-sentence-container"]');
  const hookElsArr = Array.from(hookElsNodeList);

  return hookElsArr.map(hookEl => hookEl.children[1]);
}

function getReactionsCountTextEls() {
  return getReactionsCountTextEls1();
}

function removeReactionsCountTextFromNewsFeedPosts() {
  const reactionsCountTextEls = getReactionsCountTextEls();

  for (const el of reactionsCountTextEls) {
    el.innerHTML = '';
  }
}

setInterval(removeReactionsCountTextFromNewsFeedPosts, 1000);

// For debugging
//
//function testFn() { alert(getReactionsCountTextEls().map(el => el.innerText)); }
//setInterval(testFn, 5000);
