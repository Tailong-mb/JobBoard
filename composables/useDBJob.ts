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
      .select("title_job, id_job")
      .eq("id_company", id);
    if (error) throw error;
    return data;
  };

  const deleteJobById = async (id) => {
    const { error } = await supabase.from("joboffer").delete().eq("id_job", id);
    if (error) throw error;
  };

  return {
    getJobByCompanyId,
    getJobTitleByCompanyId,
    deleteJobById,
  };
};

export default useDBJob;
