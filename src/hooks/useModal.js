import { useState } from "react";

export const useModal = (isOpen = false) => {
    const [showModal, setShowModal] = useState(isOpen);
    const toggleModal = () => setShowModal(!showModal);
  
    return [showModal, toggleModal];
  }