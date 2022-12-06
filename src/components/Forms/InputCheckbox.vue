<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Emit } from "vue-property-decorator";

@Options({
  props: {
    title: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: "",
    },
    checked: {
      type: Boolean,
      required: false,
    },
    emits: ["input"],
  },
})
export default class InputCheckbox extends Vue {
  title!: string;
  name!: string;
  checked!: boolean;
  variant!: string;

  onCheckChange(event: any) {
    return this.onValueChange(event.target.checked);
  }

  @Emit("input")
  onValueChange(value: boolean) {
    return value;
  }
}
</script>
<template>
  <div class="flex items-center">
    <input
      :id="name"
      @change="onCheckChange"
      :checked="checked"
      type="checkbox"
      :class="variant !== '' ? 'w-[29.5px] h-[29.5px]' : 'w-4 h-4'"
      class="opacity-0 absolute"
    />
    <div
      :class="
        variant !== ''
          ? 'w-[29.5px] h-[29.5px] focus-within:bg-[#3DD598] focus-within:border-[#3DD598]'
          : 'w-4 h-4 focus-within:border-blue-500'
      "
      class="bg-white border rounded border-secondGrey flex flex-shrink-0 justify-center items-center mr-2"
    >
      <svg
        :class="
          variant !== ''
            ? 'w-[18.5px] h-[18.5px] text-white'
            : 'w-2 h-2 text-blue-600'
        "
        class="fill-current hidden pointer-events-none"
        version="1.1"
        viewBox="0 0 17 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <g
            transform="translate(-9 -11)"
            :fill="variant !== '' ? '#FFF' : '#1F73F1'"
            fill-rule="nonzero"
          >
            <path
              d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
            />
          </g>
        </g>
      </svg>
    </div>
    <label v-if="title !== ''" :for="name" class="text-sm text-primaryGrey">{{
      title
    }}</label>
  </div>
</template>
