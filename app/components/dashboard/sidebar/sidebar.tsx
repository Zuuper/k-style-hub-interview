import Logo from "public/logo.png"
import SidebarItem from "./sidebar-item"
const sidebarUrl = [
  {
    id: 0,
    name: 'products',
    url: '/dashboard/products'
  },
  {
    id: 1,
    name: "brands",
    url: "/dashboard/brands"
  }
]
export default function Sidebar() {
  return <>
    <aside className="space-y-6 p-4 bg-slate-50 text-slate-950 h-full rounded-lg w-xs">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="" className="w-12 aspect-square" />
        <p>K-style hub interview</p>
      </div>
      <div className="grid">
        {sidebarUrl.map(item => <SidebarItem key={item.id} title={item.name} url={item.url} />)}
      </div>
    </aside>
  </>
}