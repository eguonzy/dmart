import React, { useEffect, useState } from "react";
import OptHeaders from "./OptHeaders";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { down, up } from "../../../model/store/alert";
//import io from "socket.io-client";
//const socket = io();
function AddItem(props) {
  let dispatch = useDispatch();
  //const [] = useState(0);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = async ({ target }) => {
    const { files } = target;
    await setSelectedImages((prevState) => [...prevState, ...files]);
  };

  const handleDeleteImage = (image) => {
    const filtrate = selectedImages.filter((file) => image !== file);
    setSelectedImages(filtrate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    dispatch(down());
    console.log(form.images.files);
    form.images.files.length < 3 && alert("Amount of images must be 3");
    setTimeout(() => {
      dispatch(up());
    }, 2000);
  };

  return (
    <div className="add-item">
      <OptHeaders {...props} />
      <AddForm
        history={props.history}
        handleImage={{ handleChange, handleDeleteImage, selectedImages }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddItem;
