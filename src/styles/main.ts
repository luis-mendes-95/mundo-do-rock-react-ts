import styled from "styled-components";

export const Div_background = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 5px 0;
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
  background-color: green;
  border-radius: 25px;
  padding: 4px;
  color: white;
  font-weight: bold;
  height: 70%;
  align-items: center;
  font-size: 10pt;
`;

export const Div_search = styled.div`
  display: flex;
  gap: 5px;
  margin: 5px 0;
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
  width: 75px;
  height: 30px;
`;

export const Button_remove_item = styled.button`
  cursor: pointer;
  background-color: red;
  border: 1pt solid black;
  border-radius: 8px;
  padding: 2px;
  color: white;
  font-weight: bold;
  width: 75px;
  height: 30px;
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
  background-color: white;
  height: 100%;
  gap: 2px;
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

export const Div_resume_cart_and_total = styled.div``;

export const Div_floating_info = styled.div`
  background-color: white;
  padding: 5px;
  position: sticky;
  top: 20px;
  border: 2pt solid black;
  border-radius: 8px;
  padding: 5px 5px;
  margin: 5px 0;
`;

export const P_aria_label = styled.p`
  font-size: 12pt;
  color: red;
`;

export const Li_item = styled.li`
  text-align: center;
  display: flex;
  gap: 0px;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border: 1pt solid black;
  border-radius: 8px;
  padding: 2px;
  margin: 4px;
  background-color: darkgray;
`;

export const Div_item_data = styled.div`
  border-radius: 0px;
  border: 1pt solid black;
  overflow: hidden;
  background-color: white;
  width: 33%;
`;

export const H3_data_title = styled.h3`
  background-color: lightgray;
  color: black;
`;

export const P_data = styled.p`
  font-weight: bold;
`;

export const Button_more_details = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: black;
  font-weight: bold;
  color: white;
  text-shadow: 1pt 1pt 1pt black;
`;

export const Button_save = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: green;
  font-weight: bold;
  color: white;
  text-shadow: 1pt 1pt 1pt black;
`;

export const Button_delete = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: red;
  font-weight: bold;
  color: white;
  text-shadow: 1pt 1pt 1pt black;
`;
