import Sidebar from "components/ui/sidebar/sidebar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return <main className="flex h-svh lg:h-screen">
    <div className="py-4 pl-4 pr-1">
      <Sidebar />
    </div>
    <section className="flex-grow h-svh py-4 pr-4 pl-1">
      <div className="bg-slate-50 h-full rounded-lg">
        <Outlet />
      </div>
    </section>
  </main>
}