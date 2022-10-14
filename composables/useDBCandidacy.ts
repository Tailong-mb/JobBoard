const useDBCandidacy = () => {
    const { supabase } = useSupabase();

    const getAllcandidacy = async () => {
        const { data, error } = await supabase.from("candidacies").select("*");
        if (error) throw error;
        return data;
    };

    const getCandidacyByJobId = async (id) => {
        const { data, error } = await supabase
            .from("candidacies")
            .select("*")
            .eq("id_job", id);
        if (error) throw error;
        return data;
    };

    const getCandidacyByUserId = async (id) => {
        const { data, error } = await supabase
            .from("candidacies")
            .select("*")
            .eq("id_worker", id);
        if (error) throw error;
        return data;
    };

    const getCandidacyById = async (id) => {
        const { data, error } = await supabase
            .from("candidacies")
            .select("*")
            .eq("id_candidacies", id);
        if (error) throw error;
        return data;
    };

    const insertCandidacy = async (candidacy) => {
        const { error } = await supabase.from("candidacies").insert([
            {
            id_worker: candidacy.id_worker,
            id_job: candidacy.id_job,
            status: candidacy.status,
        },
        ]);
        if (error) throw error;
    };

    const updateStatusCandidacy = async (candidacy) => {
        const { error } = await supabase
            .from("candidacies")
            .update({ status: candidacy.status})
            .eq("id_worker", candidacy.id_worker)
            .eq("id_job", candidacy.id_job);
        if (error) throw error;
    };

    const deleteCandidacy = async (candidacy) => {
        const { error } = await supabase
            .from("candidacies")
            .delete()
            .eq("id_worker", candidacy.id_worker)
            .eq("id_job", candidacy.id_job);
        if (error) throw error;
    };

    const deleteCandidacyById = async (id) => {
        const { error } = await supabase
            .from("candidacies")
            .delete()
            .eq("id_candidacies", id);
        if (error) throw error;
    };

    return {
        getAllcandidacy,
        getCandidacyByJobId,
        getCandidacyByUserId,
        getCandidacyById,
        insertCandidacy,
        updateStatusCandidacy,
        deleteCandidacy,
        deleteCandidacyById,
    };
};

export default useDBCandidacy;