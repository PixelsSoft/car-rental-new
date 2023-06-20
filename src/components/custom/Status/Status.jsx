import { Container } from "./Status.styles";

export default function Status({ status }) {
  return <Container status={status}>{status}</Container>;
}
