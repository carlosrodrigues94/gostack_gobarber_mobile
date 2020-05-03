import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 65px;
  justify-content: center;
  align-items: center;
  background: #ff9000;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;
