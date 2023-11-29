//-------------------menu--------------------//
const menuHandler = (menuRef, menuBar, closeRef) => {
  menuRef.current?.classList.add("menu-show");
  menuBar.current?.classList.add("hidden");
  closeRef.current?.classList.remove("hidden");
};

const menuBarCloseHandler = (menuRef, menuBar, closeRef) => {
  menuRef.current?.classList.remove("menu-show");
  menuBar.current?.classList.remove("hidden");
  closeRef.current?.classList.add("hidden");
};

//------------------cart--------------------//
const cartCloseHandler = (cartRef) => {
  cartRef.current.classList?.remove("cart-show");
};

const cartShowHandler = (cartRef, menuRef, searchRef, userRef) => {
  cartRef.current?.classList.toggle("cart-show");
  menuRef.current?.classList.remove("menu-show");
  searchRef.current?.classList.remove("search-show");
  userRef.current?.classList.remove("user-show");
};

//------------------search--------------------//
const searchCloseHandler = (searchRef) => {
  searchRef.current?.classList.remove("search-show");
};

const searchHandler = (cartRef, menuRef, searchRef, userRef) => {
  searchRef.current?.classList.toggle("search-show");
  cartRef.current?.classList.remove("cart-show");
  menuRef.current?.classList.remove("menu-show");
  userRef.current?.classList.remove("user-show");
};

//------------------user--------------------//

const userHandler = (cartRef, menuRef, searchRef, userRef) => {
  userRef.current?.classList.toggle("user-show");
  cartRef.current?.classList.remove("cart-show");
  menuRef.current?.classList.remove("menu-show");
  searchRef.current?.classList.remove("search-show");
};

export {
  menuHandler,
  menuBarCloseHandler,
  cartCloseHandler,
  searchCloseHandler,
  searchHandler,
  userHandler,
  cartShowHandler,
};
