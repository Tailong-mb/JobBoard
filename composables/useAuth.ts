const useAuth = () => {
  // Set an user state
  const user = useState("user", () => null);

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
    navigateTo("/");
  };

  const getMetadataRole = () => {
    const role = supabase.auth.user().user_metadata.role;
    return role;
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  const changePassword = async (password) => {
    const { user: u, error } = await supabase.auth.update({
      password: password,
    });
    if (error) throw error;
    return u;
  };

  const changeEmail = async (email) => {
    const { user: u, error } = await supabase.auth.update({
      email: email,
    });
    if (error) throw error;
    return u;
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
    getMetadataRole,
    changePassword,
    changeEmail,
  };
};

export default useAuth;
