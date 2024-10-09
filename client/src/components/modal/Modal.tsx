  import React, { useState } from "react";
  import {
    ModalContainer,
    ModalContent,
    CloseButton,
    SubmitButton,
  } from "./ModalStyle";
  import {ModalProp} from "../../types/types"

  const Modal = ({ isOpen, onClose, onSubmit }: ModalProp) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ title, artist });
      setTitle("");
      setArtist("");
      onClose();
    };

    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
      <ModalContainer>
        <ModalContent>
          <h2>Add a New Song</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Artist:</label>
              <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                required
              />
            </div>
            <div>
              <SubmitButton type="submit">Add Song</SubmitButton>
              <CloseButton type="button" onClick={onClose}>
                Close
              </CloseButton>
            </div>
          </form>
        </ModalContent>
      </ModalContainer>
    );
  };

  export default Modal;
