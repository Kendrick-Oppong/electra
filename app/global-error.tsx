'use client';
import { ButtonLink } from '@/components/shared';
 import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>) {

   useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className="text-center text-lg mt-8">
        <h2 className="text-lg">Something went wrong!</h2>
        <ButtonLink onClick={() => reset()}>Try again</ButtonLink>
      </body>
    </html>
  )
}
