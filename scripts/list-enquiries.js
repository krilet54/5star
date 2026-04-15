const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

const envPath = path.join(__dirname, '..', '.env.local')
let env
try {
  env = fs.readFileSync(envPath, 'utf8')
} catch (err) {
  console.error('No .env.local found at', envPath)
  process.exit(1)
}
const parsed = {}
env.split(/\r?\n/).forEach(line => {
  const m = line.match(/^\s*([^=#\s]+)\s*=\s*(.*)\s*$/)
  if (m) {
    let val = m[2]
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
    parsed[m[1]] = val
  }
})

const url = parsed.NEXT_PUBLIC_SUPABASE_URL
const key = parsed.SUPABASE_SERVICE_ROLE_KEY

if (!url || !key) {
  console.error('Missing env vars. NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set in .env.local')
  process.exit(1)
}

const supabase = createClient(url, key)

;(async () => {
  try {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) {
      console.error('Supabase error:', error)
      process.exit(1)
    }

    if (!data || data.length === 0) {
      console.log('No enquiries found')
      return
    }

    console.log('Latest enquiries:')
    data.forEach(e => {
      console.log(`- ${e.id} | ${e.first_name} ${e.last_name || ''} | ${e.email} | ${e.phone || '-'} | ${e.status || '-'} | ${e.created_at}`)
    })
  } catch (err) {
    console.error('Unexpected error:', err)
    process.exit(1)
  }
})()
