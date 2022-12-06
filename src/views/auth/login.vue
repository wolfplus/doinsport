<template>
  <div class="flex items-center justify-center h-full">
    <div class="w-full lg:w-1/2 mt-5">
      <div class="bg-white rounded-3xl mx-auto p-5">
        <div class="flex flex-col items-center justify-center">
          <img class="w-28" src="../../assets/logo.png" />
          <h3 class="font-SourceSansProBold text-primaryBlue text-3xl mt-2">
            Content de vous revoir !
          </h3>
          <span class="text-primaryGrey text-base"
            >Connectez-vous à votre compte</span
          >
          <div class="w-full mt-5 lg:w-2/3">
            <InputText
              v-on:input="inputChange($event)"
              title="Email"
              name="email"
              type="email"
              icon="mail"
            />
            <InputText
              v-on:input="inputChange($event)"
              title="Mot de passe"
              name="password"
              type="password"
              icon="eye"
            />
            <div class="flex items-start justify-between">
              <InputCheckbox
                title="Se souvenir de moi"
                name="remaind"
                v-on:input="inputChange($event)"
              />
              <a href="#" class="text-sm text-primaryGrey"
                >Mot de passe oublié</a
              >
            </div>
            <div class="flex items-start justify-between my-10">
              <PrimaryButton>Se connecter</PrimaryButton>
              <PrimaryButton variant="primaryWhite">S'inscrire</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 text-center text-xs text-white">
        Consulter les Conditions Générales d’Utilisation
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputText from "@/components/Forms/InputText.vue";
import InputCheckbox from "@/components/Forms/InputCheckbox.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

@Options({
  components: { InputText, InputCheckbox, PrimaryButton },
})
export default class LoginView extends Vue {
  inputChange(event: string) {
    console.log(event);
  }
}
</script>
<style lang="less">
body {
  @apply bg-primaryBlue;
}
</style>
