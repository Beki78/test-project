import React, { useState } from "react";
import { useDispatch } from "react-redux"; 
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  SubmitButton,
  InputField,
} from "./ModalStyle";
import { ModalProp } from "../../types/types";
import { createSong } from "../../feature/song/SongSlice";
import { SongType } from "../../types/types"; 



const Modal = ({ isOpen, onClose }: ModalProp) => {
  const dispatch = useDispatch(); 
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSong: SongType = { title, artist } as SongType;
    dispatch(createSong(newSong)); 
    setTitle(""); 
    setArtist("");
    onClose(); 
  };

  if (!isOpen) return null; 


  
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Add a New Song</h2>
        <form onSubmit={handleSubmit}>
          <InputField>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </InputField>
          <InputField>
            <label>Artist:</label>
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </InputField>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
