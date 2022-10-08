const useDB = () => {
  const { supabase } = useSupabase();

  const getCompanyById = async (id) => {
    const { data, error } = await supabase
      .from("company")
      .select("*")
      .eq("id_company", id);
    if (error) throw error;
    return data;
  };

  return {
    getCompanyById,
  };
};

export default useDB;
