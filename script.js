var checkbox = document.querySelector('input[type="checkbox"]');
var monthlyPricing = document.getElementsByClassName('pricing-monthly');
var yearlyPricing = document.getElementsByClassName('pricing-yearly');


checkbox.addEventListener('change', function () {

  if (checkbox.checked) {
    Array.prototype.forEach.call(monthlyPricing, price => {
      if (price.classList.contains('pricing-off')){
        price.classList.remove('pricing-off');
      }
    });
    Array.prototype.forEach.call(yearlyPricing, price => {
      if (!price.classList.contains('pricing-off')){
        price.classList.add('pricing-off');
      }
    });

  } else {
    //Not checked = yearly
    // do that
    Array.prototype.forEach.call(yearlyPricing, price => {
      if (price.classList.contains('pricing-off')){
        price.classList.remove('pricing-off');
      }
    });
    Array.prototype.forEach.call(monthlyPricing, price => {
      if (!price.classList.contains('pricing-off')){
        price.classList.add('pricing-off');
      }
    });
  }
});
