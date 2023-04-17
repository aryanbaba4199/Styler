import ProductCard from "./productCard/ProductCard";

const HomeProductSwiper = ({ products, category }: any) => {

    let selectedProducts = products.filter((p: any) => p.category.name === category)
    
    return (
        <div className="flex flex-col rounded bg-white h-auto mx-4 mb-4 p-4 border">
            <h4 className="font-bold text-xl mb-4">{category}</h4>
            <div className="flex items-center space-x-4">
                {selectedProducts.map((product: any, i: number) => (
                    <ProductCard product={product} key={i} />
                ))}
            </div>
        </div>
    );
};

export default HomeProductSwiper;