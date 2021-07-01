import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: "slice",
    initialState: {
        topics: {}
    }, 

    reducer: {
        addTopic: (state, action) => {
            const { topicId, name, icon } = action.payload;
            state.topics[topicId] = {
              id: topicId,
              name: name,
              icon,
              quizIds: [],
            };
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;