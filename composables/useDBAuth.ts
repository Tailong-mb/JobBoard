const useDBAuth = () => {
  const { supabaseService } = useSupabaseService();

  const getAllUsers = async () => {
    const { data: user, error } = await supabaseService.auth.api.listUsers();
    if (error) throw error;
    return user;
  };

  const deleteUserById = async (id: string) => {
    const { data: user, error } = await supabaseService.auth.api.deleteUser(id);
    if (error) throw error;
    return user;
  };

  const createUser = async (
    email: string,
    password: string,
    metadata: string
  ) => {
    const { data: user, error } = await supabaseService.auth.api.createUser({
      email,
      email_confirm: true,
      password,
      user_metadata: {
        role: metadata,
      },
    });
    if (error) throw error;
    return user;
  };

  return {
    getAllUsers,
    deleteUserById,
    createUser,
  };
};

export default useDBAuth;
