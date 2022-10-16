import { createClient } from "@supabase/supabase-js";

const useSupabaseService = () => {
  const config = useRuntimeConfig();
  const supabaseService = createClient(
    config.SUPABASE_URL,
    config.SUPABASE_SERVICE_ROLE
  );

  return {
    supabaseService,
  };
};

export default useSupabaseService;
