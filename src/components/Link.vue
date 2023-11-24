<script setup lang="ts">
import { siteLinks } from "../config";
import { ElRow, ElCol } from "element-plus";
import { Icon } from "@vicons/utils";
</script>

<template>
  <div class="container">
    <el-row :gutter="10">
      <el-col
        v-for="(site, index) in siteLinks"
        :key="index"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="6"
        :xl="6"
      >
        <a :href="site.link" target="_blank">
          <div class="site-card">
            <Icon size="26">
              <component :is="site.icon" />
            </Icon>
            &nbsp;&nbsp;

            <span style="color: aliceblue; font-size: 26px">
              {{ site.name }}
            </span>
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.container {
  a {
    text-decoration: none; /* 去除下划线 */
    color: inherit; /* 继承父元素的颜色 */
    cursor: pointer; /* 添加指针样式，使其看起来可点击 */
  }

  align-items: center;

  margin-top: 5vh;
  width: 70%;
  //   margin-bottom: 0;
  //   margin-left: 50vh;
  //   margin-right: 50vh;

  .site-card {
    min-height: 10vh;
    border-radius: 5px;
    cursor: pointer;

    position: relative;
    // background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .site-card:hover {
    background-color: #00000040;
    backdrop-filter: blur(5px);
    transition: box-shadow 1s ease-in-out, transform 1s ease-in-out;
  }
}
</style>
