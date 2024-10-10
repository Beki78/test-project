export interface SongType {
  _id: string; 
  id?: number; 
  title: string;
  artist: string;
}
export interface SongsState {
  songs: SongType[];
  isLoading: boolean;
  error: string | null;
}
export interface ModalState {
  isOpen: boolean;
}

export interface RootState {
  songs: SongsState; 
  modal: ModalState;
}

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (song: Pick<SongType, "title" | "artist">) => void; 
  initialTitle?: string;
  initialArtist?: string;
}
