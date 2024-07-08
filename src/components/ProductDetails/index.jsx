const ProductDetails= ({products})=>{
return(
  <div>
<h2>{
    products.title
}</h2>
<p>{
    products.description
}</p>
  </div>
)

};
export default ProductDetails;