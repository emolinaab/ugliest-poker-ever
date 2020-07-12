import React from 'react';
import { Button, Input, MyLink, Panel } from '../components';

const Login = () => (
  <Panel>
    <Input placeholder="Nombre de usuario" name="uid" />
    <Input placeholder="Contraseña" name="passwd" />
    <Button>Ingresar</Button>
    <MyLink to="/register">No estas registrado?</MyLink>
  </Panel>
);

export default Login;
