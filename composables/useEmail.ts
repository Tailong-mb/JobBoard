const useEmail = () => {
  // Connect to supabase
  const { supabase } = useSupabase();

  const sendEmailResetPassword = async (email) => {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
  };

  const checkEmailResetPasswordEvent = async () => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.update({
          password: newPassword,
        });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });
  };

  return { sendEmailResetPassword, checkEmailResetPasswordEvent };
};

export default useEmail;
