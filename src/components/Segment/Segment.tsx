import React, { FC } from "react";
import styled, { css } from "styled-components";
import { OptionsType } from "../../interfaces/OptionsType";
import { ActiveSegmentType } from "../../types/ActiveSegmentType";

type Props = {
  options: OptionsType[];
  activeSegment: ActiveSegmentType;
  setActiveSegment: React.Dispatch<React.SetStateAction<ActiveSegmentType>>;
};

interface SegmentButtonProp {
  active: boolean;
}
const SegmentWrapper = styled.ul`
  width: 100%;
  display: flex;
  padding: 0;
  border: 1px solid #ff3d68;
  border-radius: 0.25rem;
`;

const SegmentButton = styled.li<SegmentButtonProp>`
  flex: 1;
  list-style-type: none;
  display: inline;
  text-align: center;
  padding: 0.5rem 0.25rem;
  color: #ff3d68;
  cursor: pointer;
  &:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }
  &:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
  ${({ active }) =>
    active &&
    css`
      background: #ff3d68;
      color: white;
    `}
`;

const Segment: FC<Props> = ({ options, activeSegment, setActiveSegment }) => {
  const handleClick = (optionId: ActiveSegmentType) => {
    setActiveSegment(optionId);
  };

  return (
    <SegmentWrapper>
      {options.map((option) => (
        <SegmentButton
          key={option.id}
          onClick={() => handleClick(option.id)}
          active={option.id === activeSegment ? true : false}
        >
          {option.name}
        </SegmentButton>
      ))}
    </SegmentWrapper>
  );
};

export default Segment;
