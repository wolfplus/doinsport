<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputText from "@/components/Forms/InputText.vue";
import InputCheckbox from "@/components/Forms/InputCheckbox.vue";
import AppIcon from "@/components/Icons/AppIcon.vue";

@Options({
  components: { InputText, AppIcon, InputCheckbox },
  props: {
    label: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
})
export default class TodoCard extends Vue {
  label!: string;
  done!: boolean;
  createdAt!: string;
  checked = false;

  inputChange(event: boolean) {
    this.checked = event;
  }
}
</script>
<template>
  <ul>
    <li class="flex items-center">
      <InputCheckbox
        class="mr-2 lg:mr-[35px]"
        variant="todo"
        name="todo"
        v-on:input="inputChange($event)"
      />
      <div
        contenteditable="true"
        :class="checked ? 'line-through' : ''"
        class="mr-1 font-Roboto text-[#44444F] text-2xl tracking-[0.15px] focus:outline-none focus:ring-0 lg:mr-5"
      >
        {{ label }}
      </div>
      <span
        class="flex items-center text-[#92929d] font-Roboto text-xl tracking-[0.15px]"
      >
        <img
          class="hidden w-5 mr-2 lg:block"
          src="@/assets/icons/calendar.png"
        />
        9 Novembre 2021
      </span>
    </li>
  </ul>
</template>
