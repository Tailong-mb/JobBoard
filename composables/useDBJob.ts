const useDBJob = () => {
  const { supabase } = useSupabase();

  const getJobByCompanyId = async (id) => {
    const { data, error } = await supabase
      .from("joboffer")
      .select("*")
      .eq("id_company", id);
    if (error) throw error;
    return data;
  };

  const getJobTitleByCompanyId = async (id) => {
    const { data, error } = await supabase
      .from("joboffer")
      .select("title_job")
      .eq("id_company", id);
    if (error) throw error;
    return data;
  };

  return {
    getJobByCompanyId,
    getJobTitleByCompanyId,
  };
};

export default useDBJob;
