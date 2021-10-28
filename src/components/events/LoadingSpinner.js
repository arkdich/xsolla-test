import { ReactComponent as ReactLogo } from './../../assets/spinner.svg';
import { LoadingSpinnerStyled } from './LoadingSpinner.styles';

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerStyled>
      <ReactLogo />
    </LoadingSpinnerStyled>
  );
}
