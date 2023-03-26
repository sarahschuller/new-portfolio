import { css } from 'styled-components/macro';

const fonts = css`
  @font-face {
    font-family: 'Bitter';
    src: url('../fonts/Bitter-Regular-woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bitter';
    src: url('../fonts/Bitter-Medium.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bitter';
    src: url('../fonts/Bitter-ExtraBold.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

export default fonts;