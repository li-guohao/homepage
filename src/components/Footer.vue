<script setup lang="ts">
import { computed, ref } from "vue";

const fullYear = new Date().getFullYear();

const siteStartDate = ref(import.meta.env.VITE_SITE_START);
const siteIcp = ref(import.meta.env.VITE_SITE_ICP);
const siteAnthor = ref(import.meta.env.VITE_SITE_ANTHOR);
const siteUrl = computed(() => {
  const url = import.meta.env.VITE_SITE_URL;
  if (!url) return "https://liguohao.cn";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "//" + url;
  }
  return url;
});
</script>

<template>
  <footer id="footer">
    <span>
      Copyright&nbsp;&copy;
      <span v-if="siteStartDate?.length >= 4" class="site-start">
        {{ siteStartDate.substring(0, 4) }}
        -
      </span>
      {{ fullYear }}
      <a :href="siteUrl" style="color: aliceblue">{{ siteAnthor }}</a>
    </span>
    &amp;
    <!-- 站点备案 -->
    <a v-if="siteIcp" href="https://beian.miit.gov.cn" target="_blank">
      <span style="color: aliceblue">
        {{ siteIcp }}
      </span>
    </a>
  </footer>
</template>

<style lang="scss" scoped>
#footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 46px;
  line-height: 46px;
  text-align: center;
  z-index: 0;
  font-size: 14px;
  .power {
    animation: fade 0.3s;
  }

  &.blur {
    backdrop-filter: blur(10px);
    background: rgb(0 0 0 / 25%);
    font-size: 16px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.15s ease-in-out;
  }
  @media (max-width: 720px) {
    font-size: 0.85rem;
    &.blur {
      font-size: 0.85rem;
    }
  }
  @media (max-width: 480px) {
    .hidden {
      display: none;
    }
  }
}
</style>
