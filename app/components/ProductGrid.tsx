import { Products } from "@/sanity.types";
interface ProductGridProps {
  products: Products[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      ProductGrid
    </div>
  );
};

export default ProductGrid;
