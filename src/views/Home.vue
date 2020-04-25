<template>
  <div class="home">
    <div>
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <div class="container">
            <div class="search">
              <a-input-search
                placeholder="input search text"
                style="width: 500px"
                v-model="search"
              />
            </div>
            <div class="content">
              <a-row>
                <a-col :span="24">
                  <NewsList :news="this.news" :search="this.search"/>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>

import NewsList from "@/components/NewsList.vue";

export default {
  name: "Home",
  components: {
    NewsList
  },
  data() {
    return {
      search: null,
      news: [...this.$store.state.news]
    };
  }
};
</script>

<style scoped>
.container {
  background: wheat;
  padding: 50px;
}

.content {
  margin-top: 50px;
}

.news:after {
  content: "";
  display: table;
  clear: both;
  margin-bottom: 10px;
}

.img {
  height: 170px;
  width: 30%;
  float: left;
}

.isi {
  height: 170px;
  padding: 20px;
  width: 70%;
  background-color: white;
  float: left;
}
</style>
