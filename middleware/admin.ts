export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn, getMetadataRole } = useAuth();
  setTimeout(() => {
    if (isLoggedIn()) {
      if (getMetadataRole() !== "admin") {
        return navigateTo("/");
      }
    }
    if (!isLoggedIn()) {
      return navigateTo("/");
    }
  }, 0.0000001);
});
