<template>
  <div class="comment" v-bind="showArticle($route.params.id)">
    <div>
      <a-row type="flex">
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <div class="container">
            <div class="img">
              <img alt="Vue logo" :src="this.gambar" height="360px" width="100%" />
              <div class="top-left">
                <a-button type="primary" @click="goBack">Back</a-button>
              </div>
              <div class="top-right">{{ this.tgl }}</div>
              <div class="bottom-left">
                <div style="width:60%">
                  <h2 style="color: blue;font-weight: bold;">{{ this.judul }}</h2>
                </div>
              </div>
              <div class="bottom-right">
                <p>by : Chu Linda</p>
                <StarRating style="width:100px; height:0px" />
              </div>
            </div>
            <div style=" border-style: double; margin-bottom:5px">
              <a-card class="article" justify="space-around" align="left">
                <p v-html="this.article"></p>
              </a-card>
            </div>
            <div style="border-style: double;" @click="openComment">
              <a>Comment( {{ this.comments.length }} )</a>
            </div>
            <div v-if="toggleComment == true">
              <div style="border-style: double;">
                <a-card>
                  <a-input
                    placeholder="Comment.."
                    v-model="input"
                    @keyup.enter="addComment($route.params.id)"
                  />
                </a-card>
              </div>
              <div v-for="(item, idx) in comments" :key="idx">
                <a-row class="comments">
                  <a-col :span="4">
                    <img alt="Vue logo" class="img" :src="avatar" width="80px" />
                  </a-col>
                  <a-col :span="20" justify="space-around" align="left">
                    <a-row>
                      <p v-html="item.value">{{ item.value }}</p>
                    </a-row>
                    <a-row >
                      <a-col :span="19"></a-col>
                      <a-col :span="5">
                        <p>{{ item.time }}</p>
                      </a-col>
                    </a-row>
                  </a-col>
                </a-row>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/rating-stars.vue";

export default {
  name: "Comment",
  components: {
    StarRating
  },
  data() {
    return {
      search: "",
      news: [...this.$store.state.news],
      article: "",
      tgl: "",
      gambar: "",
      input: "",
      toggleComment: false,
      comments: [],
      avatar:
        "https://dvoutgtbe9-flywheel.netdna-ssl.com/wp-content/uploads/2016/04/nopic.jpg",
      times: ""
    };
  },
  methods: {
    showArticle: function(params) {
      return this.news.filter(item => {
        if (item.id == params) {
          this.comments = item.comment;
          this.gambar = item.gambar;
          this.article = item.isi;
          this.tgl = item.tgl;
          this.judul = item.judul;
        }
      });
    },
    addComment: function(params) {
      // this.comments.push(this.input);
      this.currentTime();
      this.$store.commit("comment", { id: params, value: this.input, time: this.times });
      console.log(params);
      console.log(this.input);
      console.log(this.news);
      this.input = null;
    },
    openComment: function() {
      this.toggleComment = !this.toggleComment;
    },
    currentTime: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + "/" + time;
      this.times = dateTime;
    },
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 50px;
  border-style: double;
}

.comments,
.article {
  border-style: double;
}

.img {
  position: relative;
  text-align: center;
  color: blue;
  font-weight: bold;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 0px;
  right: 16px;
}

</style>
