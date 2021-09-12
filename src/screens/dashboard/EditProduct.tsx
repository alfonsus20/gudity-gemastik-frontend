import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import { RootState } from "../../store";
import {
  addUserSupplierProduct,
  editUserSupplierProduct,
  getUserSupplierProducts,
} from "../../store/actions/userActions";

const EditProduct = () => {
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [quality, setQuality] = React.useState<string>("");
  const [productType, setProductType] = React.useState<number>(1);

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      editUserSupplierProduct(
        {
          name,
          price: Number(price),
          description,
          quality,
          product_type_id: productType,
        },
        Number(productId)
      )
    );
  };

  const productTypes = [
    { label: "Gula", value: 1 },
    { label: "Kopi", value: 2 },
  ];

  React.useEffect(() => {
    if (userInfo && userInfo.supplier_info) {
      if (userInfo.supplier_info.products) {
        const currentProduct = userInfo.supplier_info.products.filter(
          (product) => product.id === Number(productId)
        )[0];
        console.log(currentProduct);
        setName(currentProduct.name);
        setPrice(currentProduct.price.toString());
        setDescription(currentProduct.description);
        setQuality(currentProduct.quality);
        setProductType(currentProduct.productType);
      } else {
        dispatch(getUserSupplierProducts(userInfo.supplier_info.id));
      }
    }
  }, [userInfo]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Edit Produk Anda</h2>
      <form className="space-y-2  mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Nama Produk
          </label>
          <TextField
            variant="tertiary"
            placeholder="Masukkan nama produk"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Deskripsi Produk
          </label>
          <TextArea
            variant="tertiary"
            value={description}
            required
            placeholder="Masukkan deskripsi produk"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-between gap-x-4">
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="" className="text-blue-primary font-medium">
              Harga
            </label>
            <TextField
              variant="tertiary"
              value={price}
              required
              placeholder="Masukkan harga produk"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="" className="text-blue-primary font-medium">
              Jenis Produk
            </label>
            <Dropdown
              defaultValue={
                productTypes.filter((type) => type.value === productType)[0]
              }
              options={productTypes}
              placeholder="Masukkan Satuan"
              className="border-gray-200 border-2 text-sm "
              handleChange={setProductType}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Kualitas
          </label>
          <TextField
            variant="tertiary"
            value={quality}
            required
            placeholder="Masukkan kualitas produk"
            onChange={(e) => setQuality(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-blue-primary font-medium">
            Gambar
          </label>
          <TextField
            variant="tertiary"
            placeholder="Masukkan gambar produk"
            type="file"
          />
        </div>
        <div className="flex justify-end pt-2">
          <Button text="Ubah" variant="primary" size="md" className="w-28" />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
