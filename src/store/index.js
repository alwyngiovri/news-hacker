import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [
      {
        id: 1,
        gambar: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVZO7mvJ4FAc/v4/-1x-1.png",
        judul: `U.S. Economy Shrinks at 4.8% Pace, Signaling Start of Recession`,
        isi: 
          `The record-long U.S. economic expansion is over after almost 11 years, with what’s likely to be the deepest recession in at least eight decades now under way.
          <br>
          <br>
          The world’s largest economy shrank at a 4.8% annualized pace in the first quarter, the biggest slide since 2008 and the first contraction since 2014, as the need to fight the coronavirus forced businesses to close and consumers to stay home.`,
        tgl: "2020-04-23",
        comment: []
      },
      {
        id: 2,
        gambar: "https://obs.line-scdn.net/0hZaNaLH_tBU5zGC2ASxJ6GUlOBiFAdBZNFy5UUCN2W3oKeEoaS3ofIFAbXXpbf0IQHSxJIFQbHn8NfEYcHXsf/w644",
        judul: "15 Negara Klaim Nol Kasus Corona Covid-19",
        isi: `Dikutip dari The Interpreter, salah satu negara di Benua Afrika yang belum pernah melaporkan kasus positif Covid-19 adalah Komoro. Pada awal April lalu, sekitar 250 warga Komoro telah dikarantina, dan hanya orang-orang yang menunjukan gejala yang diuji.
        <br>
        <br>
        Selain Komoro, negara di Afrika lainnya yang belum terdampak kasus virus corona adalah Lesotho. Sejak awal mewabahnya Covid-19 ke sejumlah negara, pemerintah Lesotho hampir tidak pernah membahas persoalan pandemi tersebut. `,
        tgl: "2019-01-11",
        comment: []
      },
      {
        id: 3,
        gambar: "https://obs.line-scdn.net/0hrsLxHv2iLVxxAQWSGChSC0tXLjNCbT5fFTd8QiFvc2gIYWINSGE2aV0Jcm9dMmoCGGdmPlADNm0PZW4DHmA2/w644",
        judul: "1 Juta TKI Terjebak Lockdown di Malaysia Terancam Kelaparan",
        isi: `Komisi Nasional Hak Asasi Manusia (Komnas HAM) memperkirakan setidaknya satu juta tenaga kerja Indonesia (TKI) di Malaysia terancam kelaparan imbas dari kebijakan lockdown Negeri Jiran untuk menekan penyebaran virus corona (Covid-19).
        <br>
        <br>
        Anggota tim Pengkajian dan Penelitian Covid-19 Komnas HAM, Kania Rahma Nureda menuturkan lockdown di Malaysia telah menghambat penyaluran sembako kepada para TKI yang berada di sana.`,
        tgl: "2019-06-02",
        comment: []
      },
      {
        id: 4,
        gambar:"https://obs.line-scdn.net/0hEnaXkRFNGkFcITKPbbBlFmR3GS5vTQlCOBdLXwxPRHUlQVUVMhVSL38nQyEmEl0fNUZQJTwgFyV1Fl9EZw/w644",
        judul:"Pertama kalinya, Tingkat Kesembuhan Corona di Jakarta Lampaui Tingkat Kematian",
        isi: `Jumlah pasien corona yang sembuh di DKI Jakarta mengalami peningkatan. Pada Rabu (29/4), pasien sembuh bertambah menjadi 71 orang. Ini merupakan rekor penambahan tertinggi sejak kasus corona pertama kali mengemuka.
        <br>
        <br>
        Berdasarkan data corona.jakarta.go.id, penambahan pasien sembuh sempat tinggi pada 11 April 2020, yakni 60 orang. Namun, angkanya kembali menurun hingga di bawah 50 pada hari-hari selanjutnya. Oleh sebab itu, bertambahnya pasien sembuh sebesar 71 orang menjadi kabar baik pada hari ini.`,
        tgl: "2019-04-08",
        comment: []
      }
    ]
  },
  mutations: {
    comment(state, payload) {
      console.log("store :" + payload.value);
      // mutate state
      state.news.filter(item => {
        if (item.id == payload.id) {
          return item.comment.push(payload);
        }
      });
    }
  },
  actions: {},
  modules: {}
});
