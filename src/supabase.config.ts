import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { commonEnvironment } from './environments/environment.common';
import { SupabaseAuthClientOptions } from '@supabase/supabase-js/dist/module/lib/types';

let SUPABASE_URL: string = '';
let SUPABASE_KEY: string = '';
let supabase: SupabaseClient;
let { apiKey, apiUrl } = commonEnvironment;

if (apiKey && apiUrl) {
  SUPABASE_URL = apiUrl;
  SUPABASE_KEY = apiKey;
}
supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default supabase;
