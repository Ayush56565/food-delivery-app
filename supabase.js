import { createClient } from "@supabase/supabase-js";
import { AppState } from 'react-native'
import "react-native-url-polyfill/auto";
import AsyncStorage from '@react-native-async-storage/async-storage'
const supabaseUrl = "YOUR SUPABASE URL"
const supabaseAnonKey = "YOUR SUPABASE ANON KEY"
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})


AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})