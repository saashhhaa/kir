
<template>
  <button class="button">
    <img
      class="button__icon"
      src="@/assets/images/common/enter.svg"
      alt=""
    />
  </button>
</template>

<style lang="scss">
.button {
    position: absolute;
    top: 5vh;
    right: 10vw;
    background-color: none;
    z-index: 10;

  &__icon {
    filter: invert(1);
  }
}
</style>
