-- Create leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  industry TEXT,
  services TEXT[] NOT NULL DEFAULT '{}',
  budget TEXT,
  timeline TEXT,
  preferred_date DATE,
  preferred_time TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'NEW',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert a new lead (via the Booking Form)
CREATE POLICY "Allow public insert to leads" 
  ON leads FOR INSERT 
  TO public 
  WITH CHECK (true);

-- By default, no one can read leads without a Service Role key or Authenticated session
