export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth();

  setTimeout(() => {
    if (isLoggedIn()) {
      navigateTo("/home");
    }
  }, 0.00001);
});
