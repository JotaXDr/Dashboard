function openAddProductModal() {
    var modal = document.getElementById('addProductModal');
    modal.style.display = 'block';
  }
  
  function closeAddProductModal() {
    var modal = document.getElementById('addProductModal');
    modal.style.display = 'none';
  }
  
  function addNewProduct() {
    var productName = document.getElementById('productName').value;
    var productQuantity = document.getElementById('productQuantity').value;
  
   
  
    var dashboardContainer = document.getElementById('dashboardContainer');
    var newProductInfo = document.createElement('div');
    newProductInfo.classList.add('product-info');
    newProductInfo.innerHTML = '<h3>' + productName + '</h3><p>Quantidade: ' + productQuantity + ' unidades</p>';
    dashboardContainer.appendChild(newProductInfo);
  
  
    closeAddProductModal();
  }
  function confirmDelete(productId) {
    var confirmDelete = confirm("Tem certeza que deseja excluir este produto?");
    if (confirmDelete) {
     
      var productElement = document.getElementById(productId);
      if (productElement) {
        productElement.remove();
      }
    }
  }
  function confirmDelete(productId) {
    var confirmDelete = confirm("Tem certeza que deseja excluir este produto?");
    if (confirmDelete) {
      // Coloque aqui a lógica para excluir o produto (pode ser uma chamada à sua API, etc.)
      // Por enquanto, apenas removendo o elemento da DOM
      var productElement = document.getElementById(productId);
      if (productElement) {
        productElement.remove();
      }
    }
  }
  
  
  