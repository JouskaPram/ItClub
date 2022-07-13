import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://okipfjzvejzhhkbccvdf.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9raXBmanp2ZWp6aGhrYmNjdmRmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NzA4Mzc3NCwiZXhwIjoxOTcyNjU5Nzc0fQ.JpgJKuq0CDEZF0lov0mcqeWuhtEcfGzWCoqDNr07FG8",
  supabaseOptions: {},
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
