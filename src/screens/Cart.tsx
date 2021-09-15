import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CartCommodity from "../components/cart/CartCommodity";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Wrapper from "../components/Wrapper";
import { RootState } from "../store";
import { fetchCartItems } from "../store/actions/cartActions";
import { CHECKOUT_ITEMS_RESET } from "../store/constants/checkoutConstants";

const Cart = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const { productsCheckout } = useSelector(
    (state: RootState) => state.checkout
  );

  const { userInfo } = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    if (userInfo.id) {
      dispatch(fetchCartItems(userInfo.id));
      dispatch({ type: CHECKOUT_ITEMS_RESET });
    }
  }, [dispatch, userInfo]);

  const handleClick = () => {
    const storeCount = Array.from(
      new Set(productsCheckout.map((product) => product.supplier_id))
    );

    if (productsCheckout.length === 0) {
      toast.error("Pilih produk untuk dicheckout");
    } else if (storeCount.length > 1) {
      toast.error("Produk yang ingin dicheckout harus dari pemasok yang sama");
    } else {
      history.push("/checkout");
    }
  };

  return (
    <div className="mt-20">
      <Header title="Keranjang Belanja" />
      {cartItems.length > 0 ? (
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
              buttonAction={handleClick}
              total={
                productsCheckout.length >= 0
                  ? productsCheckout.reduce(
                      (acc, product) =>
                        (acc += product.price * product.quantity),
                      0
                    )
                  : 0
              }
              items={[{ left: "Total Produk", right: productsCheckout.length }]}
            />
          </Wrapper.Right>
        </Wrapper>
      ) : (
        <div
          style={{ minHeight: "50vh" }}
          className="flex items-center justify-center"
        >
          <h2 className="text-center text-xl">Belum ada produk di Keranjang</h2>
        </div>
      )}
      <ToastContainer autoClose={2000} position="bottom-right" />
    </div>
  );
};

export default Cart;
