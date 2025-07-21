export const useModal = () => {
  const modalProvider = inject('modalProvider') as {
    openModal: (component: unknown, props: Record<string, unknown>) => void;
    closeModal: () => void;
  };

  if (!modalProvider) {
    throw new Error('modalProvider is not available. Make sure you are calling useModal() inside setup() and that ModalProvider is mounted.');
  }

  return modalProvider;
};
