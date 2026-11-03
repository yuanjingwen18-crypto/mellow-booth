const SUPABASE_URL = 'https://ihxhtdgngumeboztrejy.supabase.co/';

const SUPABASE_ANON_KEY = 'sb_publishable_afn9Mv8ND0OS7sTJ2ZCHGQ__AdcXPgR';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);