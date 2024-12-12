import NavList from "./NavList/NavList"

const SideMenu = () => {
  return (
    <div className="bg-gray-800 w-56 pt-8 text-white">
        <div>
            <h1 className="text-2xl font-bold px-4">Next Tasks</h1>
            <NavList />
        </div>
    </div>
  )
}

export default SideMenu