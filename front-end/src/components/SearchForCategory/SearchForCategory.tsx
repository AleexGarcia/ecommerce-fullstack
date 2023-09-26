import CategoryCard from "./CategoryCard";
import categories from "./categories.json";

const SearchForCategory = () => {
  return (
    <section className="min-h-screen max-w-[90%] mx-auto grid grid-rows-[auto,1fr] gap-4 py-8 lg:min-h-min">
      <h2 className="text-3xl text-center">Busque por categoria:</h2>
      <div className="flex flex-row flex-wrap gap-x-[10%] gap-y-4 sm:gap-[5%] lg:gap-[2%]">
        {categories.map((category) => {
          return <CategoryCard key={category.id} {...category} />;
        })}
      </div>
    </section>
  );
};

export default SearchForCategory;
