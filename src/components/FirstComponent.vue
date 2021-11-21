<template>
  <div class="header box_shadow">
    <span>
      <img class="logo" src="../../public/logos/logo-90x90.png" alt="" />
    </span>
    <div class="middleNav">
      <div class="topNavContainer">
        <ul>
          <img src="../../public/logos/phone.png" class="phone_img" alt="" />
          <li class="service">
            <a href="">{{ topHeaderList.supportService }}</a>
          </li>
          <li>
            <a href="">{{ topHeaderList.brands }}</a>
          </li>
          <li>
            <a href="">{{ topHeaderList.catalogs }}</a>
          </li>
          <li>
            <a href="">{{ topHeaderList.match }}</a>
          </li>
          <li>
            <a href="">{{ topHeaderList.news }}</a>
          </li>
          <li>
            <a href="">{{ topHeaderList.discounts }}</a>
          </li>
        </ul>
      </div>
      <div class="buttomNavContainer">
        <div class="buttomNavContainer_left">
          <button class="addVehicleButton">
            <img src="../../public/logos/car.png" class="car_img" alt="" />{{
              button.addVehicle
            }}
          </button>
        </div>

        <input
          class="input"
          type="search"
          placeholder="Поиск по артикулу или VIN-коду"
          size="50"
        />
        <button class="submit_button">
          <img class="logo_search" src="../../public/logos/search.png" alt="" />
        </button>
      </div>
    </div>
    <div class="rightNavContainer">
      <div class="rightNavContainer_top">
        <ul>
          <li>
            <a href="">{{ topHeaderList.checkIn }}</a>
          </li>
          <li>
            <a id="enter_button" href="">{{ topHeaderList.enter }}</a>
          </li>
        </ul>
      </div>
      <div class="rightNavContainer_bottom">
        <button class="orders">
          <img src="../../public/logos/orders.png" class="orders_img" alt="" />
        </button>
        <button class="favorites">
          <img
            src="../../public/logos/favorite.png"
            class="favorite_img"
            alt=""
          />
        </button>
        <button class="price_button">
          <img src="../../public/logos/shop.png" class="shop_img" alt="" />{{
            button.price
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topHeaderList: {
        supportService: "Служба поддержки 5151",
        brands: "Бренды",
        catalogs: "Каталоги",
        match: "Подбор",
        news: "Новости",
        discounts: "Акции",
        checkIn: "Регистрация",
        enter: "Вход",
      },
      button: {
        addVehicle: "Добавить транспортное средство",

        favorite: "../../public/logos/favorite.png",
        price: "Нет товара",
      },
    };
  },
};
</script>

<style>
html {
  font-family: "SF Pro Display", sans-serif;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.box_shadow {
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
}
.logo {
  margin-right: 20px;
  width: 90px;
  height: 90px;
}
.topNavContainer {
  width: 842px;
}
.phone_img {
  width: 18.5px;
  height: 18.5px;
}
.service {
  margin-left: -70px;
}
.middleNav {
  display: flex;
  flex-direction: column;
  height: 96px;
  width: 860px;
}
.buttomNavContainer_left {
  display: flex;
  align-items: center;
}
.car_img {
  margin-bottom: -3px;
  margin-left: -44px;
  margin-right: 20px;
  width: 22.23px;
  height: 14.18px;
}
.buttomNavContainer {
  display: flex;
  /* justify-content: space-between; */
  margin-top: 2px;
}
.addVehicleButton {
  width: 310px;
  height: 46px;
  font-size: 12px;
  background-color: #ffffff;
  border: 1px solid #bfbfbf;
  border-radius: 3px;
}
.input {
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 3px;
  width: 529px;
  margin-left: 20px;
  padding-left: 20px;
  height: 46px;
}
.logo_search {
  width: 14px;
  height: 14px;
  margin-left: -40px;
  padding-right: 30px;
}
.submit_button {
  background: #ffffff;
  border: none;
}
.rightNavContainer {
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  /* background-color: #69697e; */
}
.rightNavContainer_top {
  display: flex;
  justify-content: flex-end;
}
#enter_button {
  margin-left: 40px;
}
.rightNavContainer_bottom {
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  margin-top: 2px;
}
.favorite_img,
.orders_img {
  width: 16px;
  height: 17px;
}
.orders,
.favorites {
  width: 53px;
  height: 46px;
  /* padding: 8px; */
  margin: 0 5px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 3px;
}
.price_button {
  width: 120px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  border-radius: 3px;
  margin-left: 5px;
  padding-bottom: 4px;
}
.shop_img {
  width: 16px;
  height: 16px;
  margin-bottom: -2px;
  margin-right: 9px;
}
ul {
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  justify-content: space-between;
  padding-left: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  font-size: 14px;
  color: #17488b;
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
}
</style>
