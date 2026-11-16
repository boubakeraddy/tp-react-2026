import React from "react";

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          MirTech
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Ordinateurs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Composants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Périphériques
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
