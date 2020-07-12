import React from 'react';
import { Button, Input, MyLink, Panel } from '../components';

const Register = () => (
  <Panel>
    <Input placeholder="E-mail" name="email" />
    <Input placeholder="Nombre de usuario" name="uid" />
    <Input placeholder="Contraseña" name="passwd" />
    <Button>Registrar</Button>
    <MyLink to="/login">Ya estas registrado?, ingresa ahora!</MyLink>
  </Panel>
);

export default Register;
