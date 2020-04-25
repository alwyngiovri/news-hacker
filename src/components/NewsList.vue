<template>
  <div class="newslist">
    <div class="news" v-for="item in filterNews" :key="item.id">
      <div @click="goToComment(item.id)">
        <a-row>
          <a-col :span="6">
            <img alt="Vue logo" class="img" :src="item.gambar"/>
          </a-col>
          <a-col :span="18">
            <div class="isi">
              <a-row>
                <a-col :span="8" align="left">
                  <p>{{ item.tgl }}</p>
                </a-col>
                <a-col :span="8"></a-col>
                <a-col :span="8">
                  <div style="height:10px" align="right">
                    <StarRating />
                  </div>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="16" align="left">
                  <p>
                    <b>{{ item.judul }}</b>
                  </p>
                </a-col>
                <a-col :span="8" align="right">
                  <p>By : Chu Linda</p>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="24" align="left">
                  <p v-text="text(item.isi)"></p>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="8"></a-col>
                <a-col :span="8"></a-col>
                <a-col :span="8" align="right">
                  <a @click="goToComment(item.id)">Comment( {{ item.comment.length }} )</a>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/rating-stars.vue";

export default {
  name: "NewsList",
  components: {
    StarRating
  },
  props: {
    news: Array,
    search: String
  },
  data() {
    return {
    };
  },
  computed: {
    filterNews() {
      if (this.search) {
        return this.news.filter(item => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every(val => item.isi.toLowerCase().includes(val));
        });
      } else {
        return this.news;
      }
    }
  },
  methods: {
    text: function(val) {
      return val.substring(0, 200) + "...";
    },
    goToComment: function(id) {
      this.$router.push({ name: "Comment", params: { id: id } });
    }
  }
};
</script>

<style scoped>
.container {
  /* background: wheat; */
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

.img{
  display: block; 
  margin: auto;
  border-style: double;
  height: 220px;
  width: 200px;
}

.isi {
  height: 220px;
  padding: 20px;
  border-style: double;
}
</style>

