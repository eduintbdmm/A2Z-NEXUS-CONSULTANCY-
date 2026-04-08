'use server';

import { supabase } from '@/lib/supabase';
import type { Lead } from '@/lib/supabase';

export async function submitBookingForm(data: Lead) {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          industry: data.industry,
          services: data.services,
          budget: data.budget,
          timeline: data.timeline,
          preferred_date: data.preferred_date || null,
          preferred_time: data.preferred_time || null,
          message: data.message,
          status: 'NEW'
        }
      ]);

    if (error) {
      console.error('Supabase insertion error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Server action error:', err);
    return { success: false, error: 'An unexpected error occurred while saving the lead.' };
  }
}
