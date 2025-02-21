export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    // This layout does NOT import or wrap with the root layout
    // so it’s effectively a separate "root" layout.
    return (
      <html lang="en">
        <body>
          {/* Put minimal or custom layout here for auth pages */}
          {children}
        </body>
      </html>
    );
  }