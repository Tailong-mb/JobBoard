const useDBWorker = () => {
    const {supabase} = useSupabase();


    const getWorkerById = async (id) => {
        const {data, error} = await supabase
        .from("worker")
        .select("*")
        .eq("id_worker", id);
        if(error) throw error;
        return data;
};



    const editWorker = async (editUser, id)  => {

        const {error} = await supabase.from("worker").update({
            first_name: editUser.first_name,
            last_name: editUser.last_name,
            phone_number: editUser.phone_number,
            degree: editUser.degree,

        }).eq("id_worker", id); 
        if(error) throw error;
    }

    const jobOffer = async(id) => {
        const {data, error} = await supabase
        .from("joboffer")
        .select("*")
        .eq("id_job", id);
        if(error) throw error;
        return data;
    }




    return{
        getWorkerById,
        editWorker,
        jobOffer,
    };
};    


export default useDBWorker;