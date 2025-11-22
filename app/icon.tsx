import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'
 
export const runtime = 'nodejs'
 
export const size = {
  width: 32,
  height: 32,
}
 
export const contentType = 'image/png'
 
export default async function Icon() {
  const imageData = await readFile(join(process.cwd(), 'public', 'samar_pfp.jpeg'))
  const base64Image = Buffer.from(imageData).toString('base64')
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          <img
            src={`data:image/jpeg;base64,${base64Image}`}
            alt="Profile"
            width="32"
            height="32"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

