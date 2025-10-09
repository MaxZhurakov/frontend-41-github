<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Магазин кросівок</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f4f4;
    }
    header {
      background: #111;
      color: #fff;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .profile {
      font-size: 1rem;
    }
    .container {
      display: flex;
      gap: 2rem;
      padding: 2rem;
    }
    .products, .cart {
      flex: 1;
      background: #fff;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
      max-height: 80vh;
      overflow-y: auto;
    }
    .product {
      border-bottom: 1px solid #ddd;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .product img {
      width: 80px;
      height: auto;
      border-radius: 5px;
    }
    .product button {
      background: #111;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .product button:hover {
      background: #333;
    }
    .cart ul {
      list-style: none;
      padding: 0;
    }
    .cart li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid #ddd;
    }
    .cart button {
      background: red;
      color: #fff;
      border: none;
      padding: 0.3rem 0.7rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .cart button:hover {
      background: darkred;
    }
    .total {
      font-weight: bold;
      margin-top: 1rem;
      text-align: right;
    }
    /* Auth modal */
    .modal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
    }
    .modal-content {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      width: 300px;
    }
    .modal-content h2 {
      margin-top: 0;
    }
    .modal-content input {
      width: 100%;
      padding: 0.5rem;
      margin: 0.5rem 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .modal-content button {
      width: 100%;
      padding: 0.7rem;
      background: #111;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .modal-content button:hover {
      background: #333;
    }
  </style>
</head>
<body>
  <header>
    <h1>👟 Магазин кросівок</h1>
    <div class="profile" id="profile-section">
      <a href="#" onclick="openAuth()" style="color:#fff">Увійти / Зареєструватися</a>
    </div>
  </header>

  <div class="container">
    <div class="products">
      <h2>Товари</h2>
      <div id="products-list"></div>
    </div>

    <div class="cart">
      <h2>Кошик</h2>
      <ul id="cart-items"></ul>
      <div class="total">Всього: <span id="total">0</span>₴</div>
    </div>
  </div>

  <!-- Auth Modal -->
  <div class="modal" id="auth-modal">
    <div class="modal-content">
      <h2 id="auth-title">Авторизація</h2>
      <input type="text" id="username" placeholder="Логін">
      <input type="password" id="password" placeholder="Пароль">
      <button onclick="authAction()">Увійти</button>
      <p style="margin-top:0.5rem; text-align:center;">
        <a href="#" onclick="toggleAuthMode()">Немає акаунту? Зареєструватися</a>
      </p>
    </div>
  </div>

  <script>
    const products = [
      {name: 'Nike Air Max', price: 3500, img:'https://via.placeholder.com/80'},
      {name: 'Adidas Yeezy', price: 5000, img:'https://via.placeholder.com/80'},
      {name: 'Puma RS-X', price: 2800, img:'https://via.placeholder.com/80'},
      {name: 'New Balance 574', price: 3200, img:'https://via.placeholder.com/80'},
      {name: 'Reebok Classic', price: 2700, img:'https://via.placeholder.com/80'},
      {name: 'Asics Gel Lyte', price: 4000, img:'https://via.placeholder.com/80'},
      {name: 'Converse Chuck Taylor', price: 2300, img:'https://via.placeholder.com/80'},
      {name: 'Vans Old Skool', price: 2100, img:'https://via.placeholder.com/80'},
      {name: 'Jordan 1 Retro', price: 6200, img:'https://via.placeholder.com/80'},
      {name: 'Nike Blazer Mid', price: 2900, img:'https://via.placeholder.com/80'},
      {name: 'Adidas Superstar', price: 2600, img:'https://via.placeholder.com/80'},
      {name: 'Saucony Jazz', price: 3100, img:'https://via.placeholder.com/80'},
      {name: 'Fila Disruptor', price: 2500, img:'https://via.placeholder.com/80'},
      {name: 'Mizuno Wave Rider', price: 4500, img:'https://via.placeholder.com/80'},
      {name: 'Hoka One One', price: 4800, img:'https://via.placeholder.com/80'},
      {name: 'Salomon XT-6', price: 5300, img:'https://via.placeholder.com/80'},
      {name: 'Under Armour Curry', price: 3600, img:'https://via.placeholder.com/80'},
      {name: 'Balenciaga Triple S', price: 12000, img:'https://via.placeholder.com/80'},
      {name: 'Gucci Rhyton', price: 15000, img:'https://via.placeholder.com/80'}
    ];

    const cartItems = [];
    let isLoginMode = true;
    let currentUser = null;

    function renderProducts(){
      const list = document.getElementById('products-list');
      products.forEach((p,i)=>{
        const div = document.createElement('div');
        div.className='product';
        div.innerHTML = `
          <div>
            <img src="${p.img}" alt="${p.name}">
            <span>${p.name}</span>
          </div>
          <div>
            <span>${p.price}₴</span>
            <button onclick="addToCart(${i})">Додати</button>
          </div>`;
        list.appendChild(div);
      });
    }

    function addToCart(index) {
      cartItems.push(products[index]);
      renderCart();
    }
    function removeFromCart(i){
      cartItems.splice(i,1);
      renderCart();
    }
    function renderCart() {
      const cartList = document.getElementById('cart-items');
      const totalSpan = document.getElementById('total');
      cartList.innerHTML = '';
      let total = 0;
      cartItems.forEach((item, i) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price}₴ <button onclick="removeFromCart(${i})">X</button>`;
        cartList.appendChild(li);
        total += item.price;
      });
      totalSpan.textContent = total;
    }

    // Auth functions
    function openAuth(){
      document.getElementById('auth-modal').style.display='flex';
    }
    function closeAuth(){
      document.getElementById('auth-modal').style.display='none';
    }
    function toggleAuthMode(){
      isLoginMode = !isLoginMode;
      document.getElementById('auth-title').textContent = isLoginMode ? 'Авторизація' : 'Реєстрація';
      document.querySelector('#auth-modal button').textContent = isLoginMode ? 'Увійти' : 'Зареєструватися';
      return false;
    }
    function authAction(){
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if(!username || !password) {alert('Заповніть усі поля'); return;}
      if(isLoginMode){
        // для демо просто приймаємо будь-який логін
        currentUser = username;
        updateProfile();
        closeAuth();
      } else {
        alert('Реєстрація успішна! Тепер увійдіть.');
        toggleAuthMode();
      }
    }
    function updateProfile(){
      document.getElementById('profile-section').innerHTML = `Привіт, <b>${currentUser}</b> | <a href='#' style='color:#fff' onclick='logout()'>Вийти</a>`;
    }
    function logout(){
      currentUser = null;
      document.getElementById('profile-section').innerHTML = `<a href='#' onclick='openAuth()' style='color:#fff'>Увійти / Зареєструватися</a>`;
    }

    renderProducts();
  </script>
</body>
</html>