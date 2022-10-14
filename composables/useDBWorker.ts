const useDBWorker = () => {
  const { supabase } = useSupabase();

  const getWorkerById = async (id) => {
    const { data, error } = await supabase
      .from("worker")
      .select("*")
      .eq("id_worker", id);
    if (error) throw error;
    return data;
  };

  const insertWorker = async (worker) => {
    const { error } = await supabase.from("worker").insert([
      {
        id_worker: worker.id_worker,
        first_name: worker.name,
        last_name: worker.surname,
        phone_number: worker.phone_number,
        degree: worker.degree,
      },
    ]);
    if (error) throw error;
  };

  const getAllWorkers = async () => {
    const { data, error } = await supabase.from("worker").select("*");
    if (error) throw error;
    return data;
  };

  const deleteWorker = async (id) => {
    const { error } = await supabase
      .from("worker")
      .delete()
      .eq("id_worker", id);
    if (error) throw error;
  };

  const updateWorker = async (data) => {
    const { error } = await supabase
      .from("worker")
      .update({
        id_worker: data.id_worker,
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        degree: data.degree,
      })
      .eq("id_worker", data.id_worker);
    if (error) throw error;
  };

  const editWorker = async (editUser, id) => {
    const { error } = await supabase
      .from("worker")
      .update({
        first_name: editUser.first_name,
        last_name: editUser.last_name,
        phone_number: editUser.phone_number,
        degree: editUser.degree,
      })
      .eq("id_worker", id);
    if (error) throw error;
  };

  const jobOffer = async (id) => {
    const { data, error } = await supabase
      .from("joboffer")
      .select("*")
      .eq("id_job", id);
    if (error) throw error;
    return data;
  };

  return {
    getWorkerById,
    editWorker,
    jobOffer,
    updateWorker,
    deleteWorker,
    getAllWorkers,
    insertWorker,
  };
};

export default useDBWorker;
