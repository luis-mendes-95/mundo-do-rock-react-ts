import styled from "styled-components";

export const Div_background = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Div_controls = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const H2_title = styled.h2`
  text-align: center;
`;

export const Button_control = styled.button`
  cursor: pointer;
  border: 1pt solid black;
  background-color: black;
  border-radius: 8px;
  padding: 4px;
  color: white;
  font-weight: bold;
`;

export const Div_search = styled.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    justify-content: center;
    gap: 5px;
  }
`;

export const Input_search = styled.input`
  width: 100%;
  border-radius: 9px;
  border: none;
  background: lightgray;
  padding: 5px;

  :focus {
    outline: 2pt solid black;
  }
`;

export const Input_general = styled.input`
  width: 90%;
  border-radius: 9px;
  border: none;
  background: lightgray;
  padding: 5px;

  :focus {
    outline: 2pt solid black;
  }
`;

export const Button_search = styled.button`
  cursor: pointer;
  background-color: black;
  border: 1pt solid black;
  border-radius: 8px;
  padding: 2px;
`;

export const Button_add_item = styled.button`
  cursor: pointer;
  background-color: green;
  border: 1pt solid black;
  border-radius: 8px;
  padding: 2px;
  color: white;
  font-weight: bold;
`;

export const Button_remove_item = styled.button`
  cursor: pointer;
  background-color: red;
  border: 1pt solid black;
  border-radius: 8px;
  padding: 2px;
  color: white;
  font-weight: bold;
`;

export const Div_items = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const Div_items_button_add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Form_new_sale = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
`;

export const Label_general = styled.label`
  align-self: flex-start;
  margin: 0 0 0 15px;
  font-weight: bold;
`;

export const Div_item_info = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
`;

export const Div_Item = styled.div`
  border: 2pt solid black;
  border-radius: 8px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`;

export const Div_resume_cart_and_total = styled.div`

`;

export const Div_floating_info = styled.div`
  background-color: white;
  padding: 5px;
  position: sticky;
  top: 20px;
  border: 2pt solid black;
  border-radius: 8px;
`;

export const P_aria_label = styled.p`
  font-size: 12pt;
  color: red;

`;
