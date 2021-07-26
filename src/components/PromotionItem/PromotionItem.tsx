import { FC } from "react";
import styled, { css } from "styled-components";
import { Promotion } from "../../interfaces/Promotion";

type Props = {
  promotion: Promotion;
};

const Image = styled.img`
  width: 100%;
  height: auto;

  border-radius: 0.5rem 0.5rem 0 0;
`;

const Title = styled.h2`
  margin: 0.5rem 0;
`;

const Text = styled.p``;

const ButtonsWrapper = styled.div`
  display: flex;
`;

type ButtonProps = {
  outline?: boolean;
};

const Button = styled.button<ButtonProps>`
  flex: 1;
  background: #ff3d68;
  color: white;
  padding: 0.75rem 0.25rem;
  border: 1px solid #ff3d68;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(255, 61, 104, 0.2) 0px 4px 8px;
  }
  &:first-child {
    margin: 0 0.25rem 0 0;
  }
  &:last-child {
    margin: 0 0 0 0.25rem;
  }

  ${({ outline }) =>
    outline &&
    css`
      background: #fff;
      color: #ff3d68;
    `}
`;

const Section = styled.section`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  /* &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  } */
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const PromotionItem: FC<Props> = ({ promotion }) => {
  return (
    <Section>
      <Image src={promotion.heroImageUrl} alt={promotion.name} />
      <Content>
        <Title>{promotion.name}</Title>
        <Text>{promotion.description}</Text>
        <ButtonsWrapper>
          <Button outline>{promotion.termsAndConditionsButtonText}</Button>
          <Button>{promotion.joinNowButtonText}</Button>
        </ButtonsWrapper>
      </Content>
    </Section>
  );
};

export default PromotionItem;
