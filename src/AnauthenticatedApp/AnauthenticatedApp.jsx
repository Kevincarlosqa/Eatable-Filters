import styled from "@emotion/styled";

import AnauthenticatedRoutes from "./Routes/AnauthenticatedRoutes";
import AnauthenticatedHeader from "./Header/AnauthenticatedHeader";

const AnautenticatedAppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AnauthenticatedApp = () => {
  return (
    <AnautenticatedAppWrapper>
      <AnauthenticatedHeader />
      <AnauthenticatedRoutes />
    </AnautenticatedAppWrapper>
  );
};

export default AnauthenticatedApp;
