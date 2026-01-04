import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const getdata = createAsyncThunk("getdata", async (args, { rejectWithValue }) => {

    try {

        const response = await axios.get('http://localhost:8000/api/employees')
        // console.log(response);
        return response.data

    } catch (error) {
        // console.log(error);
        return rejectWithValue(error.massage)

    }

})

export const deletedata = createAsyncThunk('deletedata', async (id, { rejectWithValue }) => {
    try {

        const response = await axios.delete(`http://localhost:8000/api/employees/${id}`)
        // console.log(response);
        return response.data


    } catch (error) {
        return rejectWithValue(error.massage)

    }

})

export const createdata = createAsyncThunk('createdata', async (data, { rejectWithValue }) => {
    try {

        const response = await axios.post('http://localhost:8000/api/employees', data)
        // console.log(response);
        return response.data

    } catch (error) {
        return rejectWithValue(error.massage)

    }
})

export const updatedata = createAsyncThunk('updatedata', async (data, { rejectWithValue }) => {
    try {

        const response = await axios.put(`http://localhost:8000/api/employees/${data.id}`, data)
        // console.log(response);
        return response.data

    } catch (error) {
        return rejectWithValue(error.massage)

    }
})

const initialState = {

    useData: [],
    deletedata: {},
    createdata: {},
    updatedata: {},
    onedata: {},
    viewdata: {},
    searchdata: "",

    loading: false,

    error: null

}

const EmployeesSlice = createSlice({

    name: "Employees",

    initialState,

    reducers: {
        settabledata: (state, action) => {

            state.onedata = action.payload

        },

        setviewdata: (state, action) => {

            state.viewdata = action.payload

        },

        setsearchdata: (state, action) => {

            state.searchdata = action.payload

        }

    },

    extraReducers: (builder) => {

        builder.addCase(getdata.pending, (state) => {

            state.loading = true
            state.error = null

        })

        builder.addCase(getdata.fulfilled, (state, action) => {

            state.useData = action.payload
            state.loading = false

        })

        builder.addCase(getdata.rejected, (state, action) => {

            state.error = action.payload
            state.loading = false

        })

        builder.addCase(deletedata.pending, (state) => {

            state.loading = true
            state.error = null

        })

        builder.addCase(deletedata.fulfilled, (state, action) => {

            state.deletedata = action.payload
            state.loading = false

        })

        builder.addCase(deletedata.rejected, (state, action) => {

            state.error = action.payload
            state.loading = false

        })

        builder.addCase(createdata.pending, (state) => {

            state.loading = true
            state.error = null

        })

        builder.addCase(createdata.fulfilled, (state, action) => {

            state.createdata = action.payload
            state.loading = false

        })

        builder.addCase(createdata.rejected, (state, action) => {

            state.error = action.payload
            state.loading = false

        })


        builder.addCase(updatedata.pending, (state) => {

            state.loading = true
            state.error = null

        })

        builder.addCase(updatedata.fulfilled, (state, action) => {

            state.updatedata = action.payload
            state.loading = false

        })

        builder.addCase(updatedata.rejected, (state, action) => {

            state.error = action.payload
            state.loading = false

        })

    }
})

export const { settabledata, setviewdata, setsearchdata } = EmployeesSlice.actions

export default EmployeesSlice.reducer

