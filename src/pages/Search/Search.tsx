import { useEffect, useState } from "react";
import "./search.css";
import Header from "../../components/Header/Header.tsx";

const Search = () => {

    const [productsList, setProducts] = useState([
        { id: 1986735, category: "clothing", brand: "Disney", size: "M", price: 35.00, condition: "used", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },
        { id: 1986735, category: "clothing", brand: "Disney", size: "M", price: 5.00, condition: "heavily used", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },
        { id: 1986735, category: "clothing", brand: "Disney", size: "L", price: 25.00, condition: "used", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },
        { id: 1986735, category: "clothing", brand: "Disney", size: "M", price: 15.00, condition: "used", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },
        { id: 1986735, category: "clothing", brand: "Disney", size: "S", price: 115.00, condition: "new", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },
        { id: 1986735, category: "clothing", brand: "Disney", size: "M", price: 30.00, condition: "used", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },
        { id: 1986735, category: "clothing", brand: "Disney", size: "XL", price: 35.99, condition: "Lightly used", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },
        { id: 1986735, category: "clothing", brand: "Disney", size: "M", price: 12.99, condition: "used", image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg", name: "Disney Men's White T-shirt" },

    ]);

    const productItems = productsList.map(product => (
        <li key={product.id} className="product" data-category={product.category} data-brand={product.brand} data-size={product.size} data-price={product.price} data-condition={product.condition}>
            <img src={product.image} alt="" /><br /><a href={`listing/${product.id}`}>{product.name}</a><br /> ${product.price}
        </li>
    ));


    useEffect(() => {

        
        const filters = document.querySelectorAll('.filters select, .price-filter-inputs input');
        const products = document.querySelectorAll('.product');
        const price = document.querySelector(".price-toggle") as HTMLElement;
        const priceFilter = document.querySelector('.wrapper') as HTMLElement;


        //gpt assisted for this section of checkfilter
        function checkFilter(product: HTMLElement) {
            const category = (document.querySelector('select[name="Category"]') as HTMLSelectElement)?.value;
            const brand = (document.querySelector('select[name="Brand"]') as HTMLSelectElement)?.value;
            const size = (document.querySelector('select[name="Size"]') as HTMLSelectElement)?.value;
            const condition = (document.querySelector('select[name="Condition"]') as HTMLSelectElement)?.value;
            const minPrice = parseFloat((document.querySelector('#min-input') as HTMLInputElement)?.value) || 0;
            const maxPrice = parseFloat((document.querySelector('#max-input') as HTMLInputElement)?.value) || Infinity;

            const productCategory = product.getAttribute("data-category");
            const productBrand = product.getAttribute("data-brand");
            const productSize = product.getAttribute("data-size");
            const productCondition = product.getAttribute("data-condition");
            const productPrice = parseFloat(product.getAttribute("data-price") || "");

            return (category === "Category" || category === productCategory) &&
                (brand === "Brand" || brand === productBrand) &&
                (size === "Size" || size === productSize) &&
                (condition === "Condition" || condition === productCondition) &&
                (productPrice >= minPrice && productPrice <= maxPrice);
        }

        function applyFilters() {
            products.forEach(product => {
                if (checkFilter(product as HTMLElement)) {
                    (product as HTMLElement).style.display = 'block';
                } else {
                    (product as HTMLElement).style.display = 'none';
                }
            });
        }

        filters.forEach(filter => {
            filter.addEventListener('change', applyFilters);
        });

        document.querySelectorAll('.price-filter-inputs input').forEach(input => {
            input.addEventListener('input', applyFilters);
        });

        document.querySelector('.price-buttons .reset')?.addEventListener('click', function () {
            filters.forEach(filter => {
                if (filter.tagName === 'SELECT') {
                    (filter as HTMLSelectElement).selectedIndex = 0;
                } else {
                    (filter as HTMLInputElement).value = '';
                }
            });
            applyFilters();
        });

        /*price.addEventListener('click', function () {
            priceFilter.style.display = priceFilter.style.display == 'block' ? 'none' : 'block';
        });*/

        document.querySelector('.price-buttons .done')?.addEventListener('click', function () {
            console.log('Filters applied:', {
                category: (document.querySelector('select[name="Category"]') as HTMLSelectElement)?.value,
                brand: (document.querySelector('select[name="Brand"]') as HTMLSelectElement)?.value,
                size: (document.querySelector('select[name="Size"]') as HTMLSelectElement)?.value,
                condition: (document.querySelector('select[name="Condition"]') as HTMLSelectElement)?.value,
                minPrice: (document.querySelector('#min-input') as HTMLInputElement)?.value,
                maxPrice: (document.querySelector('#max-input') as HTMLInputElement)?.value
            });
        });

        applyFilters();

    }, []);
    
    return (
        <div className="filter-page-container">
            <Header />

            <div className="filter-container">
                <div className="filters">
                    <select name="Category">
                        <option value="Category">Category</option>
                        <option value="clothing">Clothing</option>
                        <option value="school">School</option>
                        <option value="vintage">Vintage</option>
                        <option value="tech">Tech</option>
                    </select>

                    <select name="Brand">
                        <option value="Brand">Brand</option>
                        <option value="nike">Nike</option>
                        <option value="addidas">Addidas</option>
                        <option value="apple">Apple</option>
                    </select>

                    <select name="Size">
                        <option value ="Size">Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L9">L</option>
                        <option value="XL">XL</option>
                    </select>

                    <select name="Condition">
                        <option value="Condition">Condition</option>
                        <option value="used">Used</option>
                        <option value="lightly-used">Lightly Used</option>
                        <option value="heavily-used">Heavily Used</option>
                        <option value="new">New</option>
                    </select>

                    {/* <button className="price-toggle">
                        Edit Price
                    </button> */}
                </div>

                <span className="wrapper">
                    <span className="price-filter">
                        <label htmlFor="price-filter-inputs">Select Price Range</label>
                        <div className="price-filter-inputs">
                            <label htmlFor="min-input" className="min-input-label">Min.</label>
                            <input inputMode="numeric" aria-label="Minimum price" placeholder="US$1" id="min-input" className="price-filter-boundary" type="text"/>
                            <label htmlFor="max-input" className="max-input-label">Max.</label>
                            <input inputMode="numeric" placeholder="Any" aria-label="Maximum price" id="max-input" className="price-filter-boundary" type="text"/>
                        </div>
                        <div className="price-buttons">
                            <button className="reset">
                                Reset
                            </button>
                            <button className="done">
                                Done
                            </button>
                        </div>
                    </span>
                </span>

                <hr style={{ border: "1px solid #e4e4e4" }} />
            </div>

            <section className="listing">
                <h4>Listing</h4>
                <ul>
                    {productItems}
                </ul>
            </section>
        </div>
    );
};

export default Search;