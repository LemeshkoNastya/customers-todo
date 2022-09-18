<template>
  <v-dialog
    v-model="openDialog"
    persistent
    :width="options.width"
    class="popup"
  >
    <v-card class="popup__content">
      <v-card-title>
        <h3 class="popup__title">
          {{ options.title }}
        </h3>
        <BaseIcon
          :icon="'mdi-close'"
          @click.native="$emit('close')"
          class="popup__icon"
        />
      </v-card-title>
      <v-card-text>
        <keep-alive v-if="options.component">
          <component :is="componentContent" :data.sync="options.data" />
        </keep-alive>
      </v-card-text>
      <v-card-actions>
        <BaseButton
          v-if="options.buttonSave"
          :text="'Сохранить'"
          @click.native="$emit('save')"
        />
        <BaseButton :text="'Закрыть'" @click.native="$emit('close')" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "Popup",
  props: ["popup", "options"],
  components: { BaseIcon, BaseButton },
  data: () => {
    return {
      openDialog: false,
    };
  },
  computed: {
    componentContent() {
      return () => import(`@/components/${this.options.component}.vue`);
    },
  },
  watch: {
    popup() {
      this.openDialog = this.popup;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.popup {
  &__content {
    padding: 20px;

    .v-card__title {
      justify-content: center;

      .popup__icon {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }

    .v-card__actions {
      justify-content: flex-end;
    }
  }
}

.v-dialog {
  box-shadow: $box-shadow;
}

.v-overlay--active .v-overlay__scrim {
  display: none;
}

.v-overlay--active {
  backdrop-filter: blur(2px);
  background: $cyan-light;
}
</style>
