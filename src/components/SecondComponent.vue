<template>
  <div class="bottomNavContainer row">
    <ul>
      <li class="bottomNavItem1">
        <a href="">{{ buttomHeaderList.catalogs }}</a>
      </li>
      <li class="bottomNavItem2">
        <a href="">{{ buttomHeaderList.tires }}</a>
      </li>
      <li class="bottomNavItem3">
        <a href="">{{ buttomHeaderList.batteries }}</a>
      </li>
      <li class="bottomNavItem4">
        <a href="">{{ buttomHeaderList.autoElectricks }}</a>
      </li>
      <li class="bottomNavItem5">
        <a href="">{{ buttomHeaderList.brushes }}</a>
      </li>
      <li class="bottomNavItem6">
        <a href="">{{ buttomHeaderList.filters }}</a>
      </li>
      <li class="bottomNavItem7">
        <a href="">{{ buttomHeaderList.liquids }}</a>
      </li>
      <li class="bottomNavItem8">
        <a href="">{{ buttomHeaderList.oils }}</a>
      </li>
      <li class="bottomNavItem9">
        <a href="">{{ buttomHeaderList.rims }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttomHeaderList: {
        catalogs: "Каталоги",
        tires: "Шины",
        batteries: "Аккумуляторы",
        autoElectricks: "Автоэлектрика и автолампы",
        brushes: "Щетки",
        filters: "Фильтры",
        liquids: "Жидкости и автохимия",
        oils: "Смазочные материалы",
        rims: "Диски",
      },
    };
  },
};
</script>

<style>
.bottomNavContainer {
  display: flex;
  justify-content: space-between;
}
.bottomNavItem8 {
  max-height: 70px;
  min-width: 95px;
}
</style>
