export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth();

  setTimeout(() => {
    if (!isLoggedIn()) {
      navigateTo("/signIn");
    }
  }, 0.00001);
});
