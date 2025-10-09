let currentUser = null;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let selectedCategory = "All";
let topCategory = "All";

const products = [
    {id:1,name:"Chuck Taylor All Star High",price:70,category:"High",topCategory:"Чоловічі",sizes:[38,39,40,41],colors:["Black"],img:"https://static.supersklep.pl/1299676-trampki-converse-chuck-taylor-all-star-hi-black.jpg?width=1920"},
    {id:2,name:"Chuck Taylor All Star Low",price:65,category:"Low",topCategory:"Жіночі",sizes:[36,37,38,39],colors:["Red"],img:"https://img.eobuwie.cloud/eob_product_528w_704h(a/d/0/3/ad034c34305941e1a587e601beb43c1e17db33e8_10_0000050178780_EK.jpg,webp)/trampki-converse-chuck-taylor-all-star-ox-m9696c-czerwony-0000050178780.webp"},
    {id:3,name:"One Star Platform",price:85,category:"Classic",topCategory:"Лімітовані",sizes:[37,38,39,40],colors:["Black"],img:"https://media.converse.pl/catalog/product/5/6/563869c_3_2.jpg"},
    {id:4,name:"Chuck 70 High",price:95,category:"High",topCategory:"Новинки",sizes:[39,40,41],colors:["White"],img:"https://img.eobuwie.cloud/eob_product_660w_880h(3/5/2/4/3524729db9f65106608ab10f1fd919cb10c697ab_10_0000191656727_RP.jpg,webp)/trampki-converse-chuck-taylor-all-star-hi-132169c-bialy-0000191656727.webp"},
    {id:5,name:"Chuck 70 Low",price:90,category:"Low",topCategory:"Дітям",sizes:[36,37,38],colors:["White"],img:"https://m.media-amazon.com/images/I/51GtEfluNXL._AC_.jpg"},
    {id:6,name:"Run Star Hike",price:110,category:"Classic",topCategory:"Жіночі",sizes:[37,38,39,40],colors:["Black"],img:"https://media.converse.pl/catalog/product/1/6/168816c_d_107x1_1.jpg"},
    {id:7,name:"Chuck Taylor All Star Platform",price:80,category:"High",topCategory:"Жіночі",sizes:[36,37,38,39],colors:["Pink"],img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSUX5yjTkZV7vgOrTn8rb0O32OGHO0s-uGrysZdPDCFKnPKSEkuLnqET6STqXlCc1B4erFkCsCeEOtgKHP6jZn8kqpH_-l60o4exJYgcw_WbxO-UFco3oAXMA"},
    {id:8,name:"Converse Pro Leather",price:120,category:"Classic",topCategory:"Чоловічі",sizes:[39,40,41,42],colors:["Black"],img:"https://static.supersklep.pl/1402351-trampki-converse-chuck-taylor-all-star-pro-hi-black-black-white.jpg?width=800"},
    {id:9,name:"Chuck Taylor All Star Move",price:75,category:"Low",topCategory:"Новинки",sizes:[36,37,38,39,40],colors:["Black"],img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQslCuSe41kpjle0UmKims7yzoPV2FkvCjeeAwCTxbIVTycrIIPfIoPRRU7059SMRd-2H2lND-NqsKPTD-TR3DslBIo4gJEEzTBtFo1raaW"},
    {id:10,name:"Converse Run Star Trainer",price:130,category:"Low",topCategory:"Лімітовані",sizes:[38,39,40,41],colors:["Green"],img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRosksCqg2rVkzs1EfeQ61cGuol-eiC_PVO31KDpMmwwlcztVTkLS5-K1BvGIQWZHJs4t2dyV856ewOz236ZCYMdxjDcZdsDuwax3K4p_X3ltb4rdFvEZvRWCo"},
    {id:11,name:"Chuck Taylor All Star CX",price:85,category:"Low",topCategory:"Жіночі",sizes:[36,37,38,39],colors:["White"],img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDtboSeIFqKJ_7Wce6eD_94sS4n_vbwL8gm6i8oTUa16S6uFAmcJm-7nGfl0rk9epPShQQ_Lcm5UQv9LLiQApPqcwJdSPfLwoVvIKlYGFUint5dPOSucaC"},
    {id:12,name:"Converse All Star Pro BB",price:140,category:"High",topCategory:"Чоловічі",sizes:[39,40,41,42],colors:["Black"],img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTG86bflrZRBFI2dskR73cQOTM5X4PYBKPdit0rjRQhHiQNo-13JJwoOrXbVzAHS0r7FBEyv6C4yrNWR-LcPolo4IYG-yczKnA-zxLKVQQdx8D8m7D7jPLyvw"}
];

function showProfile()
{
    let html = '';
    if(currentUser){
        html = `<div class="profile">
            <h2>Профіль</h2>
            <p>Ім'я: ${currentUser.username}</p>
            <button onclick="logout()">Вийти</button>
        </div>`;
    } else {
        html = `<div class="profile">
            <h2>Реєстрація / Логін</h2>
            <input type="text" id="username" placeholder="Ім'я"><br>
            <input type="password" id="password" placeholder="Пароль"><br>
            <button onclick="register()">Зареєструватися</button>
            <button onclick="login()">Увійти</button>
        </div>`;
    }
    document.getElementById("main-content").innerHTML = html;
}

function register()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(!username || !password){ alert("Заповніть всі поля!"); return; }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if(users.find(u=>u.username===username)){ alert("Користувач існує!"); return; }
    users.push({username,password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Реєстрація успішна! Тепер увійдіть.");
}

function login()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u=>u.username===username && u.password===password);
    if(user){ currentUser = user; alert("Вхід успішний!"); showProfile(); }
    else { alert("Невірний логін або пароль!"); }
}

function logout()
{
    currentUser = null;
    showProfile();
}

function addToCart(id)
{
    if(!currentUser){ alert("Увійдіть або зареєструйтесь"); return; }
    const item = products.find(p=>p.id===id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Додано в кошик!");
}

function showCart()
{
    if(!currentUser){ alert("Увійдіть або зареєструйтесь"); return; }
    let html = '<h2>Кошик</h2>';
    if(cart.length===0){ html+="<p>Кошик порожній</p>"; }
    cart.forEach((item,index)=>{
        html += `<div class="cart-item">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})">Видалити</button>
        </div>`;
    });
    document.getElementById("main-content").innerHTML = html;
}

function removeFromCart(index)
{
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
    updateCartCount();
}

function updateCartCount()
{
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleFavorite(id)
{
    if(favorites.includes(id)) favorites = favorites.filter(f=>f!==id);
    else favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function showFavorites()
{
    topCategory="All";
    let favProducts = products.filter(p=>favorites.includes(p.id));
    let html = '<h2>Улюблені</h2><div class="products">';
    favProducts.forEach(p=>{
        html += `<div class="product" onclick="showProductDetails(${p.id})" style="cursor:pointer;">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Ціна: $${p.price}</p>
            <p>Розміри: ${p.sizes.join(", ")}</p>
            <p>Кольори: ${p.colors.join(", ")}</p>
            <button onclick="event.stopPropagation(); addToCart(${p.id})">Додати в кошик</button>
            <button onclick="event.stopPropagation(); toggleFavorite(${p.id})">❤️</button>
        </div>`;
    });
    html += '</div>';
    document.getElementById("main-content").innerHTML = html;
}

function showProducts(category="All")
{
    selectedCategory = category;
    applyFilters();
}

function filterTopCategory(cat)
{
    topCategory = cat;
    showProducts(selectedCategory);
}

function applyFilters()
{
    const sizeFilter = document.getElementById("filter-size")?.value || "All";
    const colorFilter = document.getElementById("filter-color")?.value || "All";
    const priceFilter = parseFloat(document.getElementById("filter-price")?.value) || Infinity;

    let filtered = products.filter(p => 
        (selectedCategory==="All" || p.category===selectedCategory) &&
        (topCategory==="All" || p.topCategory===topCategory) &&
        (sizeFilter==="All" || p.sizes.includes(parseInt(sizeFilter))) &&
        (colorFilter==="All" || p.colors.includes(colorFilter)) &&
        (p.price <= priceFilter)
    );

    let html = '<h2>Товари</h2><div class="products">';
    filtered.forEach(p=>{
        html += `<div class="product" onclick="showProductDetails(${p.id})" style="cursor:pointer;">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Ціна: $${p.price}</p>
            <p>Розміри: ${p.sizes.join(", ")}</p>
            <p>Кольори: ${p.colors.join(", ")}</p>
            <button onclick="event.stopPropagation(); addToCart(${p.id})">Додати в кошик</button>
            <button onclick="event.stopPropagation(); toggleFavorite(${p.id})">❤️</button>
        </div>`;
    });
    html += '</div>';
    document.getElementById("main-content").innerHTML = html;
}

function showProductDetails(id){
    const product = products.find(p=>p.id === id);
    if(!product) return;

    let html = `<div class="product-details">
        <button onclick="showProducts()">⬅ Повернутись до всіх товарів</button>
        <h2>${product.name}</h2>
        <img src="${product.img}" alt="${product.name}" style="max-width:300px;">
        <p>Ціна: $${product.price}</p>
        <p>Розміри: ${product.sizes.join(", ")}</p>
        <p>Кольори: ${product.colors.join(", ")}</p>
        <p>Категорія: ${product.category}</p>
        <p>Тип: ${product.topCategory}</p>
        <button onclick="addToCart(${product.id})">Додати в кошик</button>
        <button onclick="toggleFavorite(${product.id})">❤️</button>
    </div>`;

    document.getElementById("main-content").innerHTML = html;
}

updateCartCount();
showProducts();
