(function() {
  const search = window.location.search
  console.log('%c [ search ]', 'font-size:13px; background:pink; color:#bf2c9f;', search)
  window.returnsQueryParams = new URLSearchParams(search)

  const checkoutBtn = document.querySelector('#checkout')
  checkoutBtn.onclick = function() {

  }
})()
