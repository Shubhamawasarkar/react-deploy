import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSubCategories } from "../actions/userActions";

const SubCategoryScreen = (props) => {
  const dispatch = useDispatch();
  const subCategories = useSelector((store) => store.subCategories);
  const { error, response, loading } = subCategories;

  useEffect(() => {
    let categoryId = sessionStorage.getItem("categoryId");
    dispatch(getSubCategories(categoryId));
  }, []);
  useEffect(() => {}, [error, response, loading]);

  const onSelectSubCategory = (id) => {
    sessionStorage.setItem("subCategoryId", id);
    props.history.push('/products')
    // document.location.href = "/products";
  };

  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 g-4" >
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((subcat) => {
            return (
              <div class="col">
                <div class="card" style={{ padding: 1 ,cursor: "pointer"}} onClick={() => onSelectSubCategory(subcat.id)}>
                  <img
                    src={`${process.env.REACT_APP_URL}/${subcat.image}`}
                    class="card-img-top"
                    alt="..."
                    style={{ height: 150 }}
                  />
                  <div class="card-body" style={{ padding: 5 }}>
                    <a >
                     <b> {subcat.name}</b>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1612549875_Category_web.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1612550064_Category_web.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1612550155_Category_web.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     


    </div>
  );
};

export default SubCategoryScreen;
