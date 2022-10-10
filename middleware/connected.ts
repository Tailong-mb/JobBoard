export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth();

  setTimeout(() => {
    if (isLoggedIn()) {
      navigateTo("/");
    }
  }, 0.00001);
});
