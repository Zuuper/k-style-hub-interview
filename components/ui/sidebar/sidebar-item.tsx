interface SidebarItemProps {
  title: string,
  url: string
}
export default function SidebarItem({ title, url }: SidebarItemProps) {
  return <a className="w-full p-4 font-semibold" href={url}>
    <p>{title}</p>
  </a>
}