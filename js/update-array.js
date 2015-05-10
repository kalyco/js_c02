var colors = ['white',
              'black',
              'custom'];
//update the third item
colors[2] = 'purple';

// get element with the id of colors
var el = document.getElementById('colors');

// replace the third item from the array
el.textContent = colors[2];
