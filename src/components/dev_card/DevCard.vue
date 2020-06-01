<template>
  <div>
    <transition name="modal">
      <div class="modal-template modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <button class="modal-default-button" @click="$emit('close')">
                X
              </button>
              <slot name="header">
                default header
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "DevCard",
  data() {
    return {
      showModal: false
    };
  }
};
</script>
