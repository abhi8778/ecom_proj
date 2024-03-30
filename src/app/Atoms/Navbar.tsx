export default function Navbar() {
  return (
    <main>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center">
                <a href="/" className="text-lg font-semibold text-gray-900">
                  eCommerce Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
