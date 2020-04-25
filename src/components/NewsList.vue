<template>
  <div class="newslist">
    <div class="news" v-for="item in filterNews" :key="item.id">
      <div @click="goToComment(item.id)">
        <div class="img">
          <img alt="Vue logo" src="../assets/logo.png" style="height:150px" />
        </div>
        <div class="isi">
          <a-row>
            <a-col :span="8">
              <p>{{ item.tgl }}</p>
            </a-col>
            <a-col :span="8"></a-col>
            <a-col :span="8">
              <div style="height:10px">
                <StarRating config="this.config"/>
              </div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <p v-text="text(item.isi)"></p>
            </a-col>
          </a-row>
          <a @click="goToComment(item.id)">Comment( {{ item.comment.length }} )</a>
        </div>
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
      config: {
        rating: 4.2,
        isIndicatorActive: true,
        starStyle: {
          fullStarColor: "#ed8a19",
          emptyStarColor: "#737373",
          starWidth: 10,
          starHeight: 10
        }
      }
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
  background-color: white;
}

.isi {
  height: 170px;
  padding: 20px;
  width: 70%;
  background-color: white;
  float: left;
}
</style>

