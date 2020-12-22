import {
  GET_TIME_ACTIVITY_DATA,
  GET_ROW_FILTER,
  UPDATE_TICKET_ROW_DATA,
  GET_TICKET_ACTIVITY_DATA,
  GET_TICKET_DATA_SUCCESS,
  GET_TICKET_DATA_FAILURE,
} from "../typeConstants";
import Axios from "axios";

export const getTicketActivityData = () => {
  return {
    type: GET_TIME_ACTIVITY_DATA,
  };
};
export const getRowFilterToEdit = (rowId) => {
  return {
    type: GET_ROW_FILTER,
    rowId: rowId,
  };
};
export const updateTicketRowData = (updatedRow) => {
  return {
    type: UPDATE_TICKET_ROW_DATA,
    updatedRow: updatedRow,
  };
};

export const getTicketRowData = () => {
  return (dispatch) => {
    dispatch({ type: GET_TICKET_ACTIVITY_DATA });
    return Axios.get("http://localhost:5000/ticket").then(
      (response) => dispatch({ type: GET_TICKET_DATA_SUCCESS, response }),
      (err) => dispatch({ type: GET_TICKET_DATA_FAILURE, err })
    );
  };
};
