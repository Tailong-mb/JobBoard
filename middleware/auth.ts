export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn, getMetadataRole } = useAuth();

  setTimeout(() => {
    if (!isLoggedIn()) {
      navigateTo("/signIn");
    }

    if (isLoggedIn && getMetadataRole() === "admin") {
      navigateTo("/management");
    }
  }, 0.00001);
});
