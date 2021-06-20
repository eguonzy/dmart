import React, { useEffect, useRef, useState } from "react";
import AddImage from "./AddImage";
import DateBox from "./DateBox";
import Input from "./Input";
import Select from "./Select";
import TextField from "./TextField";

function AddForm({ onSubmit, history, handleImage }) {
  const [isMedicalEquipment, setIsMedicalEquipment] = useState(false);
  const [isMedicalDevice, setIsMedicalDevice] = useState(false);
  const [isConsumable, setIsConsumable] = useState(false);
  const [isDrug, setIsDrug] = useState(false);
  const [formulationOptions, setFormulationOptions] = useState([]);
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    brand: "",
    generic: "",
    images: [],
    strength: "",
    formulation: "",
    price: "",
    manufacture_date: "",
    expiry_date: "",
    packsize: "",
    quantity: "",
    company: "",
    nafdac: "",
    description: "",
  });
  let {
    brand,
    generic,
    strength,
    formulation,
    price,
    manufacture_date,
    expiry_date,
    packsize,
    quantity,
    company,
    nafdac,
    description,
  } = formState;

  useEffect(() => {
    let {
      brand,
      generic,
      images,
      strength,
      formulation,
      price,
      manufacture_date,
      expiry_date,
      packsize,
      quantity,
      company,
      nafdac,
      description,
    } = JSON.parse(localStorage.getItem("formState")) || formState;

    setFormState({
      brand,
      generic,
      images,
      strength,
      formulation,
      price,
      manufacture_date,
      expiry_date,
      packsize,
      quantity,
      company,
      nafdac,
      description,
    });
    console.log(images);
    // handleImage.handleChange({ target: { files: images } });
  }, []);

  const handlePreview = async () => {
    const form = formRef.current;

    const state = {
      brand: form.brand?.value,
      generic: form.generic?.value,
      strength: form.strength?.value,
      formulation: form.formulation?.value,
      description: form.description?.value,
      expiry_date: form.expiry_date?.value,
      manufacture_date: form.manufacture_date?.value,
      packsize: form.packsize?.value,
      quantity: form.quantity?.value,
      nafdac: form.nafdac?.value,
      price: form.price?.value,
      company: form.company?.value,
      images: handleImage.selectedImages,
    };
    localStorage.setItem("formState", JSON.stringify(state));
    history.push({ pathname: "/merchant/preview", state });
  };
  const handleType = (type) => {
    switch (type) {
      case 1: //consumable
        setIsDrug(false);
        setIsMedicalDevice(false);
        setIsMedicalEquipment(false);
        setIsConsumable(true);
        break;
      case 2: //medical device
        setIsDrug(false);
        setIsMedicalDevice(true);
        setIsMedicalEquipment(false);
        setIsConsumable(false);
        break;
      case 3: //medical equipment
        setIsDrug(false);
        setIsMedicalDevice(false);
        setIsMedicalEquipment(true);
        setIsConsumable(false);
        break;

      default:
        //drug
        setIsDrug(true);
        setIsMedicalDevice(false);
        setIsMedicalEquipment(false);
        setIsConsumable(false);
        break;
    }
  };
  const handleFormulationOptions = (code) => {
    switch (code) {
      case 0: //oral
        setFormulationOptions([
          { option: "Tablet", value: "tablet" },
          { option: "Caplet", value: "caplet" },
          { option: "Capsule", value: "capsule" },
          { option: "Syrup", value: "syrup" },
          { option: "Suspension", value: "suspension" },
          { option: "Drop", value: "drop" },
          { option: "Paste", value: "paste" },
          { option: "Mouth wash", value: "mouth wash" },
          { option: "Lozenge e.g(strepsil)", value: "lozenge" },
        ]);
        break;
      case 1: //rectal
        setFormulationOptions([
          { option: "Suppository", value: "suppository" },
          { option: "Cream", value: "cream" },
          { option: "Enema", value: "enema" },
        ]);
        break;
      case 2: //iv,im,im/iv,it,id
        setFormulationOptions([
          { option: "Ampoule", value: "ampoule" },
          { option: "Vial", value: "vial" },
          { option: "Pen", value: "pen" },
        ]);
        break;
      case 3: //sublingual
        setFormulationOptions([
          { option: "Tablet", value: "tablet" },
          { option: "Powder", value: "powder" },
        ]);
        break;
      case 4: //topical
        setFormulationOptions([
          { option: "Cream", value: "cream" },
          { option: "Paste", value: "paste" },
          { option: "Lotion", value: "lotion" },
          { option: "Spray", value: "spray" },
        ]);
        break;
      case 5: //ear nose eye
        setFormulationOptions([
          { option: "Ointment", value: "ointment" },
          { option: "Eye drop", value: "eye drop" },
          { option: "Ear drop", value: "ear drop" },
          { option: "Eye/Ear drop", value: "eye/ear drop" },
          { option: "Inhaler", value: "inhaler" },
          { option: "Nasal drop (Nose drop)", value: "nasal drop" },
        ]);
        break;
      case 6: //intravaginal
        setFormulationOptions([
          { option: "Pessary (insert)", value: "pessary" },
          { option: "Cream", value: "cream" },
          { option: "Douche", value: "douche" },
        ]);

        break;

      default:
        break;
    }
  };
  const handleSort = (array) =>
    array.sort((a, b) =>
      a.option > b.option ? 1 : a.option < b.option ? -1 : 0
    );
  return (
    <form
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="add-form"
      ref={formRef}
    >
      <Select
        label="Type"
        onChange={handleType}
        options={handleSort([
          { option: "Drug", value: "drug" },
          { option: "*Select type of item", value: "" },
          {
            option: "Medical Equipment e.g wheel chair,knee support",
            value: "medical equipment",
            code: 3,
          },
          {
            option: "Medical Device e.g Accucheck",
            value: "medical device",
            code: 2,
          },
          {
            option: "Consumable e.g drug envelopes",
            value: "consumable",
            code: 1,
          },
        ])}
      />
      {isDrug && (
        <>
          {" "}
          <Input
            type="text"
            name="brand"
            label="Brand Name"
            id="brand_name"
            placeholder="e.g Augmentin"
            value={brand}
          />
          <Input
            type="text"
            name="generic"
            placeholder="e.g Amoxicillin + Clavulanic acid"
            label="Generic Name"
            id="generic_name"
            value={generic}
          />
          <Input
            type="text"
            name="strength"
            placeholder="625mg"
            label="Strength"
            value={strength}
          />
          <Select
            type="text"
            name="formulation"
            label="Route Of Administeration"
            group={true}
            id="formulation"
            selectFormulation={handleFormulationOptions}
            value={formulation}
            options={handleSort([
              { option: "*Select Route", value: "" },
              { option: "Oral", value: "oral" },
              { option: "Rectal", value: "rectal" },
              { option: "Intravenous I.V (through the vein)", value: "iv" },
              {
                option: "Intramuscular I.M (through the muscles e.g Buttocks)",
                value: "im",
              },
              {
                option:
                  "Intramuscular & Intravenous I.M/I.V(both veins and muscles)",
                value: "im/iv",
              },
              { option: "Sublingual (under the tounge)", value: "sl" },
              { option: "Topical (on the skin)", value: "topical" },
              { option: "ENE (ear, nose, eye )", value: "ene" },

              { option: "Intradermal (injected in the skin)", value: "id" },
              {
                option: "Intravaginal (through the vagina)",
                value: "intravaginal",
              },
              { option: "Intracavenous (into the penis)", value: "ic" },
              { option: "Intrathecal (into the spinal cord)", value: "it" },
            ])}
          />
          {formulationOptions.length > 1 && (
            <Select
              name="formulation"
              options={handleSort(formulationOptions)}
              label="Formulation"
            />
          )}
          <Input
            name="packsize"
            placeholder="14"
            value={packsize}
            label="Packsize"
            type="number"
          />{" "}
        </>
      )}
      {isConsumable && (
        <>
          <Input type="text" label="Name" name="name" />
          <Select
            label="Category"
            options={handleSort([
              { option: "Drug envelope", value: "drug envelope" },
              { option: "Syringe", value: "syringe" },
              { option: "Disposable needle", value: "disposable needle" },
              { option: "Catheter", value: "catheter" },
              { option: "Canular", value: "canular" },
              { option: "Scalpvein needle", value: "scalpvein needle" },
              { option: "Drip set", value: "Drip set" },

              { option: "Blood giving set", value: "Blood giving set" },
            ])}
          />
        </>
      )}
      {isMedicalDevice && (
        <>
          <Input label="Name" type="text" name="name" />
          <Select
            label="Category"
            name="category"
            options={handleSort([
              { option: "Electronic", value: "electronic" },
              { option: "Not Electronic", value: "not electronic" },
            ])}
          />
        </>
      )}
      {isMedicalEquipment && <Input type="text" name="name" label="Name" />}
      <Input name="quantity" value={quantity} label="Quantity" type="number" />
      <Input name="price" value={price} label="Price" type="number" />
      <Input
        type="text"
        name="company"
        label="Company"
        value={company}
        placeholder="GSK"
      />
      <Input
        type="text"
        label="Nafdac Number"
        name="nafdac"
        placeholder="234dcf"
        value={nafdac}
      />
      <DateBox values={{ expiry_date, manufacture_date }} />

      <TextField value={description} label="Description" />
      <AddImage handleImage={handleImage} />
      <Input type="submit" value="Add Item" />
      <div onClick={handlePreview} className="preview">
        <i className="fa fa-eye fa-lg"></i>
      </div>
    </form>
  );
}

export default AddForm;
