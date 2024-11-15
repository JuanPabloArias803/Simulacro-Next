import AuthGuard from "./guard/AuthGuard";

export default function DashboardLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <AuthGuard>{children}</AuthGuard>
  )
}
