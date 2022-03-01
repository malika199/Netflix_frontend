import React, { useState } from "react";
import AccordionContext from "./AccordionContext";
import styled from "styled-components";

/*---> Component <---*/
function AccordionItem({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useState(false);
  return (
    <AccordionContext.Provider
      value={[AccordionShow, setAccordionShow]}
      {...restProps}
    >
      <div Wrapper>{children}</div>
    </AccordionContext.Provider>
  );
}
//  style="margin-bottom: 10px"

export default AccordionItem;
