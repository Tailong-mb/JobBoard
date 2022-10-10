const useAuth = () => {
  // Set an user state
  const user = useState("user", () => null);

  // Router
  const router = useRouter();

  // Connect to supabase
  const { supabase } = useSupabase();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });

  const signUp = async ({ email, password, role }) => {
    const { user: u, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: {
          role: role,
        },
      }
    );
    if (error) throw error;
    return u;
  };

  const signIn = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) throw error;
    return u;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push("/");
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  const getMetadataRole = () => {
    const role = supabase.auth.user().user_metadata.role;
    return role;
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
    getMetadataRole,
  };
};

export default useAuth;
