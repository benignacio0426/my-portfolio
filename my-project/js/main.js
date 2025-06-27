document.addEventListener('alpine:init', () => {
  Alpine.data('modalHandler', () => ({
    activeModal: null,

    openModal(name) {
      this.activeModal = name;
    },

    closeModal() {
      this.activeModal = null;
    }
  }));
});