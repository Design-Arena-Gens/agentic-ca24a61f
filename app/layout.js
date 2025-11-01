export const metadata = {
  title: 'ExamGuard - Secure Online Testing Platform',
  description: 'Advanced online testing solutions with AI-powered anti-cheating, micro-level customization, and enterprise-grade security.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
