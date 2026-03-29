'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [status, setStatus] = useState<string>('Checking...')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.text())
      .then(data => setStatus(data))
      .catch(err => setStatus('Backend not responding'))
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Style Me</h1>
      <p>Backend Status: {status}</p>
    </main>
  )
}
