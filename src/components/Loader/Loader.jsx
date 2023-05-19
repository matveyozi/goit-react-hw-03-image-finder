import { RotatingLines } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export function Loader() {
  return (
    <LoaderDiv>
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
/>
    </LoaderDiv>
  );
}