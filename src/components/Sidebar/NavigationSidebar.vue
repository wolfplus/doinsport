<script lang="ts">
import { Vue } from "vue-class-component";
export default class NavigationSidebar extends Vue {}
</script>
<template>
  <div class="w-full bg-white pt-3 pr-1 md:pr-0">
    <ul>
      <li
        class="flex items-center relative py-1.5 before:absolute before:left-0 before:bg-primaryBlue before:rounded-r-full before:w-1 before:h-full"
      >
        <a href="#" class="flex items-center justify-start ml-1.5 md:ml-5">
          <img class="w-7 mr-5" src="@/assets/icons/todo-list.png" />
          <span
            class="hidden font-PoppinsSemiBold text-primaryBlue text-base tracking-[0.11px] md:block"
            >Todo List</span
          >
        </a>
      </li>
    </ul>
  </div>
</template>
