import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sendMessageIsOpen: false,
  selectedMail:null,
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    selectMail: (state,action) => {
      state.selectedMail= action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen= true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false;
    },
  },
});

export const { selectMail,openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenMail= (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen= (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;