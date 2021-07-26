import { useEffect, useState } from "react";
import styled from "styled-components";
import PromotionList from "./components/PromotionList/PromotionList";
import Segment from "./components/Segment/Segment";
import { OptionsType } from "./interfaces/OptionsType";
import { Promotion } from "./interfaces/Promotion";
import compareFunction from "./services/compareFunc";
import { ActiveSegmentType } from "./types/ActiveSegmentType";

const segmentValues: OptionsType[] = [
  { name: "All Promotions", id: "all" },
  { name: "New Customers", id: "newCustomers" },
];

const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: auto;
  @media (min-width: 576px) {
    max-width: 376px;
  }
  @media (min-width: 768px) {
    max-width: 568px;
  }
  @media (min-width: 992px) {
    max-width: 792px;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
  @media (min-width: 1400px) {
    max-width: 1200px;
  }
`;

function App() {
  const [activeSegment, setActiveSegment] = useState<ActiveSegmentType>(
    segmentValues[0].id
  );
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    async function getPromotions() {
      fetch("http://www.mocky.io/v2/5bc3b9cc30000012007586b7")
        .then((res) => res.json())
        .then((data: Promotion[]) => {
          setPromotions([...data.sort(compareFunction)]);
        });
    }
    getPromotions();
  }, []);

  const filteredPromotions = () => {
    if (activeSegment === "newCustomers") {
      return promotions.filter(
        (promotion) => promotion.onlyNewCustomers === true
      );
    }
    return [...promotions];
  };

  return (
    <Container>
      <Segment
        activeSegment={activeSegment}
        setActiveSegment={setActiveSegment}
        options={segmentValues}
      />
      <PromotionList promotions={filteredPromotions()} />
    </Container>
  );
}

export default App;
