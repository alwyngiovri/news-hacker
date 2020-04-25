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
                style="width:80%; margin-right:20px"
                v-model="search"
              />
              <a-button type="primary">Search</a-button>
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
  padding: 50px;
  border-style: double;
}

.content {
  margin-top: 50px;
}

</style>
