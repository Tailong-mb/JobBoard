import { createClient } from "@supabase/supabase-js";

const useSupabase = () => {
  const config = useRuntimeConfig();
  const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

  return {
    supabase,
  };
};

export default useSupabase;
