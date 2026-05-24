const Navbar = () => {
  return (
    <nav className="h-16 bg-gray-800 flex items-center justify-between px-8">
      <h2 className="text-white text-xl font-bold">MyApp</h2>

      <div className="flex gap-4">
        <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-gray-800 transition">
          Sign In
        </button>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
