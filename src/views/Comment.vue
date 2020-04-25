<template>
  <div class="comment">
    <div>
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="4"></a-col>
        <a-col :span="16">
          <div class="container">
            <a-card class="article">
              <p v-bind="showArticle($route.params.id)">{{article}}</p>
            </a-card>
            <a-card v-for="(value, idx) in comments" :key="idx" class="comments">
              <p>{{ value }}</p>
            </a-card>
            <a-card>
              <a-input
                placeholder="Comment.."
                v-model="input"
                @keyup.enter="addComment($route.params.id)"
              />
            </a-card>
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  components: {},
  data() {
    return {
      search: "",
      news: [...this.$store.state.news],
      article: "",
      input: "",
      comments: []
    };
  },
  methods: {
    showArticle: function(params) {
      return this.news.filter(item => {
        if (item.id == params) {
          this.comments = item.comment;
          return (this.article = item.isi);
        }
      });
    },
    addComment: function(params) {
      // this.comments.push(this.input);
      this.$store.commit("comment", { id: params, value: this.input });
      console.log(params);
      console.log(this.input);
      console.log(this.news);
      this.input = null;
    }
  }
};
</script>

<style scoped>
.container {
  background: wheat;
  padding: 50px;
}

.article, .comments{
  text-align: justify;
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
  height: 200px;
  width: 30%;
  float: left;
}

.isi {
  height: 200px;
  width: 70%;
  background-color: white;
  float: left;
}
</style>
