"use client";
import { Center } from "@chakra-ui/react";
import { Container, Grid, Typography } from "@mui/material";
import { Button, Checkbox, Label, TextInput, FileInput } from "flowbite-react";

const Profile = () => {

  function onFileChange(e){}

  

  return (
    <Container>
      <Typography
        variant="h4"
        color={"white"}
        sx={{
          textTransform: "uppercase",
          marginTop: "1%",
          borderBottom: "2px solid white",
          padding: "4px",
        }}
        textAlign={"center"}
      >
        Editar Perfil
      </Typography>
      <Grid container spacing={2} p={2} mt={3}>
        <form className="flex flex-col gap-4 form-grid">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Imagem:"/>
            </div>
            <FileInput
              id="file-upload"
              type="file"
              name="image"
              handleOnChange={onFileChange}
              />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="E-mail:" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Digite seu novo e-mail"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" value="Nome:" />
            </div>
            <TextInput 
              id="name1" 
              type="text"
              placeholder="Digite seu novo nome de perfil"
              required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone1" value="Telefone:" />
            </div>
            <TextInput 
              id="phone1" 
              type="text"
              placeholder="Digite seu novo telefone"
              required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Senha:" />
            </div>
            <TextInput 
              id="password1" 
              type="password"
              placeholder="Digite sua nova senha"
              required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirm_password1" value="Confirmar Senha:" />
            </div>
            <TextInput 
              id="confirm_password1" 
              type="password"
              placeholder="Confirme sua nova senha"
              required />
          </div>
          <Button type="submit" style={{textTransform:"uppercase",marginTop:"16px"}}>Editar</Button>
        </form>
      </Grid>
    </Container>
  );
};

export default Profile;
