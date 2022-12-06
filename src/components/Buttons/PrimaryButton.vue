<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { ButtonVariants } from "@/types";

@Options({
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
})
export default class PrimaryButton extends Vue {
  variant!: ButtonVariants;
  disabled!: boolean;
  icon!: string;
  variantClassLists = {
    primary: "bg-primaryBlue text-white py-2 rounded-[50px]",
    primaryWhite: "bg-white text-primaryBlue py-2 rounded-[50px]",
    primarySmall: "bg-primaryBlue text-white py-1.5 rounded-[10px]",
  } as Record<ButtonVariants, string>;
}
</script>
<template>
  <button
    :class="variantClassLists[variant]"
    class="border border-solid border-primaryBlue text-base w-full first:mr-2"
    type="button"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
