  export interface SongType{
      id?: number,
      title: string,
      artist: string
  }

  export interface SongsState {
    songs: SongType[];
    isLoading: boolean;
    error: string | null;
  }

  export interface RootState {
    songs: SongsState; // Define the shape according to your slices
  }

 export interface ModalProp {
   isOpen: boolean;
   onClose: () => void; // Change this to a function type
   onSubmit: (song: SongType) => void; // Change this to a function type
 }