<template>
  <div class="header">
    <div class="row">
      <div class="bottomNavContainer">
        <ul>
          <ul v-for="data in myJson.data" :key="data.objectID">
            <li class="bottomNavItem" v-if="data.data_id !== '8'">
              <a href=""
                ><button class="button_item">
                  <img
                    class="img_logo"
                    :src="require(`../../public/logos/${data.data_logo}`)"
                    alt=""
                  />
                  {{ data.data_name }}
                </button>
              </a>
            </li>
            <li class="" id="el_8" v-else>
              <a href=""
                ><button class="button_item">
                  <img
                    class="img_logo"
                    :src="require(`../../public/logos/${data.data_logo}`)"
                    alt=""
                  />
                  {{ data.data_name }}
                </button></a
              >
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../public/request.json";

export default {
  data() {
    return {
      myJson: request,
    };
  },
};
</script>

<style>
.row {
  min-width: 1298px;
  justify-content: space-around;
}
.bottomNavContainer {
  margin-top: 10px;
  justify-items: space-between;
}
.bottomNavItem {
  max-width: 97px;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: flex-start;
}
#el_8 {
  width: 169px;
}
.button_item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border: none;
  font-style: "SF Pro Display";
}
.img_logo {
  /* width: 40.9px; */
  height: 24px;
  align-self: center;
  margin-bottom: 7px;
}
</style>
