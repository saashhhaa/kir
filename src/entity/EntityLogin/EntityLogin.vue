<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { useField, useForm } from "vee-validate";
import { useAdminStore } from "../../stores/admin";

const emit = defineEmits<{
  close: [];
}>();

const admin = useAdminStore();

const validationSchema = toTypedSchema(
  z.object({
    password: z.string().min(1, ":(  ?"),
  }),
);

const { handleSubmit, errors, isSubmitting, setFieldError } = useForm({
  validationSchema,
});

const { value: password } = useField("password");

const onSubmit = handleSubmit(async (values) => {
  const success = await admin.login(values.password);

  if (!success) {
    setFieldError("password", "привет я тебя не знаю");
  }
});
</script>

<template>
  <div class="modal" @click.self="emit('close')">
    <form @submit="onSubmit" class="modal__content">
      <div class="modal__form">
        <input
          :class="{ error: errors.password }"
          placeholder="скажи пароль"
          v-model="password"
          type="password"
          class="modal__input"
        />
        <button type="submit" :disabled="isSubmitting" class="modal__button">
          <img src="@/assets/images/common/enter.svg" alt="" />
        </button>
      </div>

      <span class="modal__error-message">{{ errors.password }}</span>
    </form>
  </div>
</template>

<style lang="scss">
.modal {
  background-color: rgba(0, 0, 0, 0.421);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);

  &__content {
    background-color: var(--modal-back);
    padding: 5vh 5vw;
    position: relative;
  }

  &__form {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__input {
    padding: 10px 15px;
    outline: none;
    border: 1.5px solid var(--secondary-light-text);

    &.error {
      border-color: var(--error-text);
    }
  }

  &__error-message {
    margin-top: 10px;
    color: var(--error-text);
    font-size: 0.9rem;
  }
}

button {
  background: none;
}
</style>
