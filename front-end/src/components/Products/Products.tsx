import ProductCard from './ProductCard';
import products from './products.json'

const Products = () => {
    return(
        <section className='max-w-[90%] mx-auto min-h-screen py-8'>
            <h2 className='text-center text-3xl font-semibold mb-4'>Produtos que estão bombando!</h2>
            <div className='flex flex-col sm:flex-row sm:flex-wrap gap-y-4 sm:gap-x-[5%] sm:gap-y-8 '>
                {products.map(product => (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </div>
        </section>
    )
}

export default Products;