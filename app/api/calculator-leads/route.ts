import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, companyType, activity, visas, office, services, estimatedCost } = body

    const supabase = await createClient()
    
    const { error } = await supabase
      .from('calculator_leads')
      .insert([
        {
          email,
          company_type: companyType,
          activity,
          visas: parseInt(visas) || 0,
          office,
          services: JSON.stringify(services),
          estimated_cost: estimatedCost,
          status: 'new',
        },
      ])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error submitting calculator lead:', error)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
