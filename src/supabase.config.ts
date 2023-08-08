import { createClient } from '@supabase/supabase-js';
import { commonEnvironment } from './environments/environment.common';

const SUPABASE_URL = commonEnvironment.apiUrl;
const SUPABASE_KEY = commonEnvironment.apiKey;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
