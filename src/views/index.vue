<template>
  <div class="h-full">
    <HeaderBar />
    <div class="grid grid-cols-[1fr_4fr] h-[calc(100vh_-_76px)]">
      <NavigationSidebar />
      <TodoList :items="list.items" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import * as types from "@/types";
import HeaderBar from "@/components/Header/HeaderBar.vue";
import NavigationSidebar from "@/components/Sidebar/NavigationSidebar.vue";
import TodoList from "@/components/Todo-List/TodoList.vue";

@Options({
  components: { HeaderBar, NavigationSidebar, TodoList },
  computed: {
    currentUser() {
      return this.$store.state.$useAuthStore.user;
    },
    ...mapState({
      list: (state: any) => state.$useTodoListStore.all,
    }),
  },
  mounted: function () {
    if (this.currentUser) {
      this.$router.push("/login");
      return;
    }

    this.$store.dispatch("$useTodoListStore/getAll");
    console.log(this.list);
  },
})
export default class HomeView extends Vue {
  list!: object;
}
</script>
