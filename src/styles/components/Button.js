import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Button = styled.button`
  ${tw`inline-block py-2 px-4 rounded font-bold text-black no-underline select-none`};
  ${props => (props.white ? tw`bg-white hover:bg-black hover:text-white` : '')};
  ${props => (props.white && props.disabled ? tw`bg-grey text-grey-dark hover:bg-grey hover:text-grey-dark` : '')};
`;
