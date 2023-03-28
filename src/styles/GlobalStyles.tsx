import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Inter';
        color: #000000;
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
    }
`;
