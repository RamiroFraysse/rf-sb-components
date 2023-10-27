import styled from "styled-components";

export const LoginWrapper = styled.div`
   font-family: "system-ui";
  /* m-auto */
  margin-left: auto;
  margin-right: auto;

  /* flex */
  display: flex;

  /* flex-col */
  flex-direction: column;

  /* justify-center */
  justify-content: center;

  /* sm:py-12 */
  @media (min-width: 640px) {
    padding-top: 3rem; /* 12 * 0.25rem */
    padding-bottom: 3rem; /* 12 * 0.25rem */
  }
`;

export const Container = styled.div`
  /* relative */
  position: relative;

  /* py-3 */
  padding-top: 0.75rem; /* 3 * 0.25rem */

  /* sm:max-w-xl sm:mx-auto */
  @media (min-width: 640px) {
    max-width: 36rem; /* El ancho máximo específico puede variar según tu diseño. */
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Background = styled.div`
  /* absolute */
  position: absolute;

  inset:0;

  /* bg-gradient-to-r from-teal-300 to-blue-500 */
  background: linear-gradient(to right, #6EE7B7, #1d4e89);
  /* Los colores (#6EE7B7 y #2563E9) pueden variar dependiendo de tu paleta de colores. */

  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl */
  @media (min-width: 640px) {
    transform: rotate(-6deg);
    /* z-index:2; */
    border-radius: 1.5rem; /* 3 * 0.5rem */
  }
`;

export const Wrapper = styled.div`
  background: linear-gradient(to right, #4fd1c5, #1d4e89);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transform: skewY(-6deg);
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
`;

