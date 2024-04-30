import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

export const TomarFoto = () => {
    const [photo, setPhoto] = useState(null);

    const handleTakePhoto = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const mediaStreamTrack = stream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(mediaStreamTrack);
        const photoBlob = await imageCapture.takePhoto();
        const imageUrl = URL.createObjectURL(photoBlob);
        setPhoto(imageUrl);
        mediaStreamTrack.stop();
      } catch (error) {
        console.error('Error accessing the camera: ', error);
      }
    };
  return (
    <div>
    
    <Button variant="contained" onClick={handleTakePhoto}>Tomar Foto</Button>
    {photo && (
      <div>
        <h2>Preview:</h2>
        <img src={photo} alt="Captured" style={{ maxWidth: '100%', maxHeight: '300px' }} />
      </div>
    )}
  </div>
  )
}
