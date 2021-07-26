import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartCommodity from "../components/cart/CartCommodity";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import { RootState } from "../store";
import { fetchCartItems } from "../store/actions/cartActions";

const Cart = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { cartItems, total, totalItems } = useSelector(
    (state: RootState) => state.cart
  );

  const { productsCheckout } = useSelector(
    (state: RootState) => state.checkout
  );

  const productIds = cartItems.map((item) =>
    item.products.map((product) => product.cart_id)
  );

  const merged = productIds.reduce((prev, next) => prev.concat(next), []);

  React.useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <div className="mt-20">
      <Header title="Keranjang Belanja" />
      <Wrapper>
        <Wrapper.Left>
          {cartItems.map((item) => (
            <CartCommodity
              key={item.supplier_id}
              id={item.supplier_id}
              name={item.supplier_name}
              items={item.products}
            />
          ))}
        </Wrapper.Left>
        <Wrapper.Right>
          <Sidebar
            title="Total Biaya"
            buttonText="Pesan Sekarang"
            buttonAction={() => history.push("/checkout")}
            buttonDisabled={productsCheckout.length === 0}
            total={
              productsCheckout.length >= 0
                ? productsCheckout.reduce(
                    (acc, product) =>
                      (acc += product.product_price * product.product_quantity),
                    0
                  )
                : 0
            }
            items={[{ left: "Total Produk", right: productsCheckout.length }]}
          />
        </Wrapper.Right>
      </Wrapper>
    </div>
  );
};

export default Cart;
