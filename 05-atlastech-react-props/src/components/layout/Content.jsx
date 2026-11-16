import Hero from "../home/Hero";
import ProductGrid from "../products/ProductGrid";
import Sidebar from "../sidebar/Sidebar";

const Content = function () {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {/* <Hero /> */}
          
          <ProductGrid />
        </main>
      </div>
    </div>
  );
};
export default Content;
