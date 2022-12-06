<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as types from "@/types";
import InputText from "@/components/Forms/InputText.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import AppIcon from "@/components/Icons/AppIcon.vue";
import TodoCard from "@/components/Todo-List/TodoCard.vue";

@Options({
  components: { InputText, PrimaryButton, AppIcon, TodoCard },
  props: {
    items: {
      type: Object,
      required: false,
    },
  },
})
export default class TodoList extends Vue {
  items!: types.TodoList[];

  inputChange(event: string) {
    console.log(event);
  }
}
</script>
<template>
  <div class="w-full bg-bodyGrey px-2 pt-10 lg:px-10">
    <div class="block items-center justify-between lg:flex">
      <h2
        class="text-[28px] text-[#171725] font-PoppinsSemiBold tracking-[0.12px]"
      >
        Mes todos
      </h2>
      <div class="block items-center justify-between w-full lg:flex lg:w-2/5">
        <InputText
          v-on:input="inputChange($event)"
          title="Rechercher"
          name="search"
          type="text"
          icon="search"
          :search="true"
          class="mb-2 lg:mr-4 lg:mb-0"
        />
        <PrimaryButton
          variant="primarySmall"
          class="flex items-center justify-center font-PoppinsSemiBold text-base tracking-[0.11px]"
        >
          <AppIcon name="plus" :width="18" :height="18" class="mr-2" />
          Nouveau
        </PrimaryButton>
      </div>
    </div>
    <div class="bg-white rounded-[20px] mt-9">
      <div
        class="flex items-center justify-between border-0 border-b-2 border-[#E2E2EA]"
      >
        <h3
          class="flex items-center justify-start px-8 py-6 font-PoppinsSemiBold text-[21px] text-[#171725] tracking-[0.15px]"
        >
          <AppIcon name="task" :width="31" :height="31" class="mr-14" />
          Todo List
        </h3>
        <div class="test"></div>
      </div>
      <div class="p-2 lg:p-8">
        <TodoCard
          v-for="item in items"
          :key="item.id"
          :label="item.label"
          :done="item.done"
          :date="item.createdAt"
        />
      </div>
    </div>
  </div>
</template>
