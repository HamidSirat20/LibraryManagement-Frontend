import { useNavigate } from "react-router";
import "tailwindcss";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen">
      <img
        className="absolute  inset-0 w-full h-full object-cover opacity-70"
        src="src\assets\oodi.jpg"
        alt="landing image"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Connecting Readers to Knowledge
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Your city’s knowledge hub — organized, accessible, and always within
          reach
        </p>
        <button
          onClick={() => navigate("./books")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
          Explore Books
        </button>
      </div>
    </div>
  );
};

export default HomePage;
