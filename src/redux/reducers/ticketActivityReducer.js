import { GET_TIME_ACTIVITY_DATA } from "../typeConstants";

const INITIAL_STATE = {
  rows: [],
  timeActivityRowData: [
    {
      ticket_id: "9867888",
      ticket_assignedto: "Sai",
      ticket_createddate: "1-2-2020",
      ticket_status: "Open",
      user_name: "XYZ",
      email: "t@t.com",
      ticket_updateddate: "10-20-2020",
      ticket_content: "The The The",
    },
    {
      ticket_id: "9867899",
      ticket_assignedto: "Lohith",
      ticket_createddate: "3-7-2020",
      ticket_status: "inprogress...",
      user_name: "ABC",
      email: "test@test.com",
      ticket_updateddate: "10-20-2020",
      ticket_content: "The The The",
    },
  ],
};

const ticketActivityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TIME_ACTIVITY_DATA:
      return {
        ...state,
        rows: state.timeActivityRowData,
      };

    default:
      return state;
  }
};

export default ticketActivityReducer;
