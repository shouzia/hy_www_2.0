<template>
  <div class="Characteristic">
    <div class="Characteristic_main">
      <div
        class="Characteristic_items"
        v-for="items in items_content"
        :key="items.title"
      >
        <div class="Characteristic_items_images">
          <img :src="items.images" alt="" />
        </div>
        <h1>{{ items.title }}</h1>
        <p>
          {{ items.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Compatible from '@/assets/images/Compatible.svg'
import Operate from '@/assets/images/Operate.svg'
import Safety from '@/assets/images/Safety.svg'
export default {
  data() {
    return {
      items_content: [
        {
          images: Compatible,
          title: '兼容性强',
          content:
            '幻影系列软件在多次版本更新迭代和改良后，保证了大部分机型可以正常使用，并且突破网卡限制，省去再花费一份网卡的钱。',
        },
        {
          images: Operate,
          title: '兼容性强',
          content:
            '幻影系列软件在多次版本更新迭代和改良后，保证了大部分机型可以正常使用，并且突破网卡限制，省去再花费一份网卡的钱。',
        },
        {
          images: Safety,
          title: '兼容性强',
          content:
            '幻影系列软件在多次版本更新迭代和改良后，保证了大部分机型可以正常使用，并且突破网卡限制，省去再花费一份网卡的钱。',
        },
      ],
    }
  },
}
</script>

<style>
.Characteristic {
  height: 70vh;
  background-color: white;
  border-radius: 40px 40px 0 0;
  transform: translateY(-50px);
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
.Characteristic_main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1500px;
  width: 100%;
  transform: translateY(100px);
}
.Characteristic_items {
  width: 28%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}
.Characteristic_items_images {
  width: 100%;
  margin-bottom: 20px;
}
.Characteristic_items_images img {
  width: 200px;
}
@media screen and (max-width: 500px) {
  .Characteristic {
    height: auto;
    /* min-height: 1200px; */
  }
  .Characteristic_items {
    width: 75%;
  }
  .Characteristic_items_images img {
    width: 150px;
  }
  .Characteristic_main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1500px;
    width: 100%;
    transform: translateY(20px);
  }
}
</style>