// script.js
document.getElementById('product-dropdown').addEventListener('change', function() {
    const selectedProduct = this.options[this.selectedIndex].text;
    alert('You selected: ' + selectedProduct);
});
