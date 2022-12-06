<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Watch, Emit } from "vue-property-decorator";
import AppIcon from "@/components/Icons/AppIcon.vue";

@Options({
  components: { AppIcon },
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    step: {
      type: Number,
      default: 1,
    },
    search: {
      type: Boolean,
      defautl: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  emits: ["input"],
  mounted: function () {
    this.inputVal = this.value;
  },
})
export default class InputText extends Vue {
  title!: string;
  name!: string;
  type!: string;
  value!: string | number;
  step!: string | number;
  icon!: string;
  search!: boolean;
  inputVal = "";

  @Watch("inputVal")
  onPropertyChanged(value: string) {
    this.onValueChange(value);
  }

  @Emit("input")
  onValueChange(value: string) {
    return value;
  }
}
</script>
<template>
  <div
    :class="
      !search
        ? 'z-0 mb-6 border-0 border-b-2 border-[#e9e9f0]'
        : 'bg-white py-2 rounded-[10px]'
    "
    class="group relative w-full"
  >
    <input
      :type="type"
      :name="name"
      :step="step"
      v-model="inputVal"
      :class="
        search
          ? 'ml-10 font-[#696974] font-Roboto'
          : 'w-[95%] px-0 pt-2.5 pb-2 text-secondGrey'
      "
      class="peer block bg-transparent text-base focus:outline-none focus:ring-0"
      :placeholder="search ? 'Rechercher' : ''"
    />
    <label
      v-if="!search"
      :for="name"
      class="absolute top-3 -z-10 origin-[0] -translate-y-6 text-base text-secondGrey duration-300 peer-placeholder-shown:translate-y-0 peer-focus:left-0 peer-focus:-translate-y-5 peer-focus:font-medium"
      >{{ title }}</label
    >
    <AppIcon
      v-if="icon !== ''"
      :class="search ? 'top-2.5 left-3' : 'top-4 right-0'"
      class="absolute"
      :name="icon"
      :width="18"
      :height="18"
    />
  </div>
</template>
