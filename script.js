var checkbox = document.querySelector('input[type="checkbox"]');
var monthlyPricing = document.getElementsByClassName('pricing-monthly');
var yearlyPricing = document.getElementsByClassName('pricing-yearly');


checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    Array.prototype.forEach.call(monthlyPricing, price => {
        price.classList.remove('pricing-off');

    });
    Array.prototype.forEach.call(yearlyPricing, price => {
        price.classList.add('pricing-off');
    });

  } else {
    //Not checked = yearly
    // do that
    Array.prototype.forEach.call(yearlyPricing, price => {
        price.classList.remove('pricing-off');
    });
    Array.prototype.forEach.call(monthlyPricing, price => {
        price.classList.add('pricing-off');
    });
  }
});
