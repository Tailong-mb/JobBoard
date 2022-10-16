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

  const getTitleJobByJobId = async (id) => {
    const { data, error } = await supabase
      .from("joboffer")
      .select("title_job")
      .eq("id_job", id);
    if (error) throw error;
    return data;
  };

  const deleteJobByCompanyId = async (id) => {
    const { error } = await supabase
      .from("joboffer")
      .delete()
      .eq("id_company", id);
    if (error) throw error;
  };

  const insertJob = async (job) => {
    const { error } = await supabase.from("joboffer").insert([
      {
        id_company: job.id_company,
        title_job: job.title_job,
        description_job: job.description_job,
        salary: job.salary,
        location_job: job.location_job,
        dateend: job.dateend,
        datestart: job.datestart,
        degree_job: job.degree_job,
      },
    ]);
    if (error) throw error;
  };

  const updateJobOffer = async (job) => {
    const { error } = await supabase
      .from("joboffer")
      .update({
        id_company: job.id_company,
        title_job: job.title_job,
        description_job: job.description_job,
        salary: job.salary,
        dateend: job.dateend,
        datestart: job.datestart,
        location_job: job.location_job,
        degree_job: job.degree_job,
      })
      .eq("id_job", job.id_job);
    if (error) throw error;
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

  const getAllJob = async () => {
    const { data, error } = await supabase.from("joboffer").select("*");
    if (error) throw error;
    return data;
  };

  return {
    getJobByCompanyId,
    getJobTitleByCompanyId,
    getTitleJobByJobId,
    deleteJobById,
    updateJobOffer,
    getAllJob,
    insertJob,
    deleteJobByCompanyId,
  };
};

export default useDBJob;