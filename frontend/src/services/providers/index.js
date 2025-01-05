import { useAuthStore } from "@/store/authStore";

import AxiosProvider from "./axiosProvider";

const httpProvider = new AxiosProvider();
httpProvider.addInterceptor({
  onError: async (status) => {
    // Если с сервиса приходит ошибка 401 Unauthorized, выполняем выход из системы
    if (status === 401) {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated) await authStore.logout();
    }
  },
});

export default httpProvider;
