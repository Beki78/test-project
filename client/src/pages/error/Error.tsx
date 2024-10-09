import { ErrorContainer, Message, Title } from "./ErrorStyle";

const Error = () => {
  return (
    <ErrorContainer>
      <Title>404</Title>
      <Message>Oops! Page not found.</Message>
      <p>The page you are looking for does not exist.</p>
    </ErrorContainer>
  );
}

export default Error