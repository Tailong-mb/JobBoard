const useDBCompany = () => {
  const { supabase } = useSupabase();

  const getCompanyById = async (id) => {
    const { data, error } = await supabase
      .from("company")
      .select("*")
      .eq("id_company", id);
    if (error) throw error;
    return data;
  };

  const insertOfferJob = async (offer, id) => {
    const { error } = await supabase.from("joboffer").insert([
      {
        id_company: id,
        title_job: offer.title,
        description_job: offer.description,
        salary: offer.salary,
        location_job: offer.location,
        datestart: offer.dateStart,
        dateend: offer.dateEnd,
        degree_job: offer.degreeRequired,
      },
    ]);
    if (error) throw error;
  };

  const insertNewLineCompany = async (company, id) => {
    const { error } = await supabase.from("company").insert([
      {
        id_company: id,
        name: company.name,
        siret: company.siret,
        location: company.location,
        description: company.description,
      },
    ]);
    return error;
  };

  return {
    getCompanyById,
    insertOfferJob,
    insertNewLineCompany,
  };
};

export default useDBCompany;
