export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn()) {
    navigateTo("/signIn");
  }
});
