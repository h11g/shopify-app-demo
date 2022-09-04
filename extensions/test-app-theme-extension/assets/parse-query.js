(function() {
  const search = window.location.search
  window.returnsQueryParams = new URLSearchParams(search)

  window.extra_credit = window.returnsQueryParams.get('extra_credit')

  if(window.extra_credit) {
    fetch(window.Shopify.routes.root + 'cart/update.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        attributes: {
            'extra_credit': window.extra_credit
        }
      })
    }).then(response => {
      return response.json();
    }).catch((error) => {
    });
  }
})()
