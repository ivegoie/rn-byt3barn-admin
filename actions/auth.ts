"use server";

import { createClient } from "@/utils/supabase/server";

export const authenticate = async (email: string, password: string) => {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Auth Error", error);
    throw error;
  }
};
