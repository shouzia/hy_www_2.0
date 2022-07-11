<template>
  <div class="download">
    <div class="Center_content">
      <div class="download_mian">
        <h1>幻影官网</h1>
        <p>幻影Pin是一款通过跑Pin绕过密码输入的Wifi破解软件。</p>
        <b-button variant="outline-light" class="downlad_btn">
          即刻下载
        </b-button>
      </div>
      <div class="images">
        <img class="images_logo" src="@/assets/images/logo.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.download {
  max-width: 100%;
  height: 90vh;
  background: linear-gradient(180deg, #1867c0, #5cbbf6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.Center_content {
  max-width: 1500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 36px;
  font-weight: 300;
}
.download_mian {
  width: 50%;
  color: #ffffff;
  font-weight: 500;
}
.downlad_btn {
  min-width: 400px;
  height: 60px;
  border-radius: 10px;
}
.images {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.images_logo {
  width: 300px;
}
@media screen and (max-width: 990px) {
  .download {
    height: 100vh;
  }
  .Center_content {
    min-width: 100vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 30% 0;
    font-size: 14px;
    font-weight: 300;
    /* margin: 20vh 0; */
  }
  h1 {
    font-size: 36px;
    font-weight: 300;
  }
  .download_mian {
    width: 80%;
    color: #ffffff;
  }
  .downlad_btn {
    min-width: 100%;
    height: 60px;
    border-radius: 10px;
  }
  .images {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .images_logo {
    width: 200px;
  }
}
</style>