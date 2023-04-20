import React, { useState } from 'react'
import * as C from './style';
import Input from '../../components/inputs';
import Button from '../../components/button'
import axios from 'axios';

function EditProfile() {

  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profileImage", profileImage);

    axios.post('/api/profile-image', formData).then((res) => {
      alert("Imagem alterada com sucesso!");
    })
  }

  return (
    <C.Container>
      <C.Content>
        <form onSubmit={handleSubmit}>
          <C.Text>Escolha uma imagem de perfil
          <Input type="file" onChange={handleProfileImageChange} />
          </C.Text>
          <Button Text="Salvar" type="submit"/>
        </form>
      </C.Content>
    </C.Container>
  )
}

export default EditProfile;