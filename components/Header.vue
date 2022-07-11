<template>
  <div class="Header">
    <b-navbar toggleable="lg" type="dark" class="Nav-bar">
      <b-navbar-brand href="/">
        <img
          src="@/assets/images/logo.png"
          width="40px"
          height="40px"
          class="Header_logo"
        />幻影官网
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            :href="items.link"
            v-for="items in HeaderLink"
            :key="items.title"
          >
            {{ items.title }}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HeaderLink: [
        { title: '首页', link: '/' },
        { title: '下载', link: '/download' },
        { title: '特性', link: '/' },
        { title: '文档与技术', link: '/' },
        { title: '技术支持', link: '/' },
        { title: '幻影论坛', link: 'https://bbs.hypin.cn' },
      ],
    }
  },
}
</script>

<style>
.Header {
  width: 100%;
  background-color: rgb(46 163 255);
  min-height: 70px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 50px;
  box-shadow: 0px 1px 10px rgb(89, 89, 89);
  position: fixed;
  z-index: 3;

  /* 0rem 0rem 1rem 0rem rgb(34 46 69 / 7%), 0rem 0rem 0rem 0rem rgb(173 174 189 / 30%) */
}
.Nav-bar {
  width: 100%;
}
.Header_logo {
  margin: 0 8px;
}
@media screen and (max-width: 990px) {
  .Header {
    padding: 0px;
  }
}
</style>