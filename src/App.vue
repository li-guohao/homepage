<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Profile from "./components/Profile.vue";
import SocialLinks from "./components/SocialLinks.vue";
import Link from "./components/Link.vue";
</script>

<template>
  <div id="app">
    <Profile />
    <SocialLinks />
    <Link />
    <!-- <BangumiProgress /> -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("/images/background.jpg"); /* 请替换为你的背景图片路径 */
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: #fff; /* 文字颜色，可以根据需要修改 */
}

.social-links {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
