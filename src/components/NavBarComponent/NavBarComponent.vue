<template>
  <van-nav-bar
    :id="navBarStoreState.showNavBarLeft ? 'navBar' : 'navBarNoLeft'"
    v-show="navBarStoreState.showNavBar"
    fixed
    left-text="返回"
    left-arrow
    :right-text="navBarStoreState.rightText"
    placeholder
    safe-area-inset-top
    :title="navBarStoreState.title"
    @click-left="$router.back()"
    @click-right="navBarStoreState.clickRight"
  />
</template>

<script>
import { NavBar } from "vant";
import NavBarStore from "@/components/NavBarComponent/store/NavBarStore";

export default {
  name: "NavBarComponent",
  components: { [NavBar.name]: NavBar },
  data() {
    return {
      navBarStoreState: NavBarStore.state,
    };
  },
};
</script>

<style>
#navBarNoLeft .van-nav-bar__left {
  display: none;
}

#navBar .van-nav-bar__left {
  display: flex;
}
</style>
