import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Container, Button, ButtonText } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Button onPress={() => signOut()}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
};
export default Dashboard;
