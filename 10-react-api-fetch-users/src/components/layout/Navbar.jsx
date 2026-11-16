export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex space-x-4 p-4">
        <li>
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Users
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Posts
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
