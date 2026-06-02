const menuData = {
  Starters: [
    ["French Fries", "$3.50", "Classic basket fries"],
    ["Cheese Fries", "$4.50", "Fries topped with melted cheese"],
    ["Onion Rings", "$4.50", "Crisp pub-style rings"],
    ["Mozzarella Sticks", "$5.50", "Served with marinara"],
    ["Chicken Fingers", "$6.50", "Breaded chicken tenders"],
    ["Buffalo Wings", "$7.95", "Classic pub wings"],
    ["Potato Skins", "$6.50", "Loaded potato skins"],
    ["Nachos", "$6.95", "Shareable bar snack"],
    ["Steamed Clams", "$7.95", "Pub seafood starter"],
    ["Fried Mushrooms", "$5.95", "Crispy fried mushrooms"],
    ["Jalapeno Poppers", "$5.95", "Cheese-filled poppers"],
    ["Sampler Platter", "$9.95", "A mix of favorite starters"]
  ],
  Soups: [
    ["Soup of the Day", "$3.25", "Ask what is available today"],
    ["French Onion Soup", "$4.25", "Pub classic"],
    ["Chili", "$4.25", "Hearty chili bowl"]
  ],
  Salads: [
    ["Garden Salad", "$5.95", "Fresh greens and vegetables"],
    ["Chef Salad", "$7.95", "Loaded entree salad"],
    ["Caesar Salad", "$5.95", "Romaine, dressing, croutons"],
    ["Chicken Caesar Salad", "$8.95", "Caesar salad with chicken"],
    ["Tuna Salad Platter", "$7.95", "Tuna salad plate"],
    ["Turkey Salad Platter", "$7.95", "Turkey salad plate"],
    ["Grilled Chicken Salad", "$8.95", "Fresh salad with grilled chicken"]
  ],
  Burgers: [
    ["Hamburger", "$5.50", "Classic burger"],
    ["Cheeseburger", "$5.95", "Burger with cheese"],
    ["Bacon Cheeseburger", "$6.95", "Cheeseburger with bacon"],
    ["Mushroom Cheeseburger", "$6.95", "Cheeseburger with mushrooms"],
    ["Turkey Burger", "$5.95", "Turkey patty burger"]
  ],
  Sandwiches: [
    ["Grilled Cheese", "$3.95", "Simple toasted classic"],
    ["Grilled Ham & Cheese", "$5.25", "Ham and melted cheese"],
    ["BLT", "$5.25", "Bacon, lettuce, tomato"],
    ["Tuna Salad Sandwich", "$5.95", "Tuna salad on bread"],
    ["Chicken Salad Sandwich", "$5.95", "Chicken salad on bread"],
    ["Roast Beef Sandwich", "$6.95", "Sliced roast beef"],
    ["Hot Roast Beef Sandwich", "$7.95", "Hot roast beef sandwich"],
    ["Turkey Sandwich", "$6.95", "Turkey sandwich"],
    ["Club Sandwich", "$7.95", "Triple-decker club"]
  ],
  Steaks: [
    ["Cheese Steak", "$6.95", "Philadelphia-style steak sandwich"],
    ["Pizza Steak", "$7.50", "Steak with pizza sauce and cheese"],
    ["Mushroom Cheese Steak", "$7.50", "Cheesesteak with mushrooms"],
    ["Chicken Cheese Steak", "$6.95", "Chicken cheesesteak"],
    ["Buffalo Chicken Cheese Steak", "$7.50", "Buffalo-style chicken steak"],
    ["Cheese Steak Hoagie", "$7.50", "Cheesesteak with hoagie fixings"]
  ],
  Hoagies: [
    ["Italian Hoagie", "$6.95", "Italian meats and cheese"],
    ["American Hoagie", "$6.95", "American-style hoagie"],
    ["Turkey Hoagie", "$6.95", "Turkey hoagie"],
    ["Tuna Hoagie", "$6.95", "Tuna hoagie"],
    ["Roast Beef Hoagie", "$7.25", "Roast beef hoagie"],
    ["Ham & Cheese Hoagie", "$6.95", "Ham and cheese hoagie"]
  ],
  Wraps: [
    ["Turkey Wrap", "$7.95", "Turkey wrapped with fresh fixings"],
    ["Chicken Caesar Wrap", "$7.95", "Chicken Caesar in a wrap"],
    ["Buffalo Chicken Wrap", "$7.95", "Buffalo chicken wrap"],
    ["Tuna Wrap", "$7.95", "Tuna salad wrap"],
    ["Veggie Wrap", "$7.95", "Vegetable wrap"]
  ],
  Pasta: [
    ["Spaghetti with Sauce", "$7.95", "Pasta with red sauce"],
    ["Spaghetti with Meatballs", "$9.95", "Spaghetti with meatballs"],
    ["Baked Ziti", "$9.95", "Baked pasta dish"],
    ["Chicken Parmesan", "$10.95", "Chicken parm entree"],
    ["Shrimp Scampi", "$12.95", "Shrimp scampi over pasta"],
    ["Fettuccine Alfredo", "$9.95", "Creamy Alfredo pasta"]
  ],
  Seafood: [
    ["Fried Shrimp", "$11.95", "Fried shrimp platter"],
    ["Fried Flounder", "$10.95", "Fried flounder platter"],
    ["Deviled Crab", "$10.95", "Deviled crab dinner"],
    ["Seafood Combination", "$14.95", "Combination seafood platter"],
    ["Crab Cakes", "$12.95", "Crab cake entree"],
    ["Shrimp Basket", "$8.95", "Basket of fried shrimp"],
    ["Fish & Chips", "$9.95", "Fried fish with fries"]
  ],
  Platters: [
    ["Hot Roast Beef Platter", "$9.95", "Hot roast beef dinner plate"],
    ["Hot Turkey Platter", "$9.95", "Hot turkey dinner plate"],
    ["Chicken Finger Platter", "$8.95", "Chicken fingers with sides"],
    ["Hamburger Steak", "$9.95", "Hamburger steak platter"],
    ["Liver & Onions", "$8.95", "Classic dinner platter"],
    ["Meatloaf Platter", "$8.95", "Meatloaf dinner plate"]
  ],
  Kids: [
    ["Kids Chicken Fingers", "$4.95", "Kid-size chicken fingers"],
    ["Kids Grilled Cheese", "$3.95", "Kid-size grilled cheese"],
    ["Kids Hamburger", "$4.95", "Kid-size burger"],
    ["Kids Hot Dog", "$3.95", "Kid-size hot dog"],
    ["Kids Spaghetti", "$4.95", "Kid-size spaghetti"]
  ]
};

const tabContainer = document.querySelector(".menu-tabs");
const resultContainer = document.querySelector(".menu-results");
const searchInput = document.querySelector("#menuSearch");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const requestForm = document.querySelector(".request-form");
let activeCategory = "Starters";

function categories() {
  return ["All", ...Object.keys(menuData)];
}

function allItemsFor(category) {
  const selected = category === "All" ? Object.keys(menuData) : [category];
  const search = searchInput.value.trim().toLowerCase();

  return selected.flatMap((categoryName) =>
    menuData[categoryName]
      .filter(([name, price, description]) => {
        const haystack = `${name} ${price} ${description} ${categoryName}`.toLowerCase();
        return haystack.includes(search);
      })
      .map((item) => ({ categoryName, item }))
  );
}

function renderTabs() {
  tabContainer.innerHTML = categories()
    .map((category) => {
      const active = category === activeCategory;
      return `<button type="button" class="${active ? "active" : ""}" data-category="${category}" role="tab" aria-selected="${active}">${category}</button>`;
    })
    .join("");
}

function renderMenu() {
  const items = allItemsFor(activeCategory);

  if (!items.length) {
    resultContainer.innerHTML = '<p class="empty-menu">No menu items match that search.</p>';
    return;
  }

  resultContainer.innerHTML = items
    .map(({ categoryName, item }) => {
      const [name, price, description] = item;
      return `
        <article class="menu-item">
          <div>
            <h3>${name}</h3>
            <p>${description || categoryName}</p>
          </div>
          <strong>${price}</strong>
        </article>
      `;
    })
    .join("");
}

tabContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderTabs();
  renderMenu();
});

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim()) {
    activeCategory = "All";
    renderTabs();
  }
  renderMenu();
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  navLinks.classList.remove("open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
});

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  requestForm.querySelector(".form-status").textContent =
    "Demo sent. A live site would route this to email, Toast, Square, or a simple restaurant inbox.";
  requestForm.reset();
});

renderTabs();
renderMenu();
