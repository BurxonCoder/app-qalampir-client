import {UPDATE_STATE} from "../types/newsTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";

export function updateState(data) {
    return{
        type:UPDATE_STATE,
        payload:data
    }
}
// News (uz) functions


export const saveNewsUz = (values) => (dispatch, getState) =>{
    if (getState().news.selectedIndexUz.id){
        axios.put(API_PATH + "uz/news/" + getState().news.selectedIndexUz.id, values)
            .then((res) => {
                dispatch(getNewsUz());
                dispatch(updateState({openUz: false, selectedItemUz: {}}))
                toast.success("Muvafaqqiyatli o'zgartirildi!")
            })
            .catch((error) => {
                toast.error(error)
            })
    }else {
        axios.post(API_PATH + "uz/news" , values)
            .then((res) =>{
                dispatch(getNewsUz())      ;
                dispatch(updateState({openUz:false}));
                toast.success("Muvafaqiyatli saqlandi")
            })

    }
}



export const deleteNewsUz = () => (dispatch, getState) => {
    axios.delete(API_PATH + "uz/news/" + getState().news.selectedIndexUz)
        .then((res) => {
            dispatch(getNewsUz())
            dispatch(updateState({deleteModalUz: false, selectedIndexUz: ''}))
            toast.success("Muvafaqiyatli saqlandi");
        })
        .catch((error) =>{
            toast.error(error)
        })
}

export const getNewsUz =() => (dispatch) =>{
    axios.get(API_PATH + "uz")
        .then((res) =>{
            dispatch(updateState({newsUz:res.data.top}))
        })
        .catch((error) =>{
            toast.error(error)
        })
}

// News (ru) functions


export const saveNewsRu = (values) => (dispatch, getState) =>{
    if (getState().news.selectedIndexRu.id){
        axios.put(API_PATH + "ru/news/" + getState().news.selectedIndexRu.id, values)
            .then((res) => {
                dispatch(getNewsRu());
                dispatch(updateState({openRu: false, selectedItemRu: {}}))
                toast.success("Muvafaqqiyatli o'zgartirildi!")
            })
            .catch((error) => {
                toast.error(error)
            })
    }else {
        axios.post(API_PATH + "ru/news" , values)
            .then((res) =>{
                dispatch(getNewsRu())      ;
                dispatch(updateState({openRu:false}));
                toast.success("Muvafaqiyatli saqlandi")
            })

    }
}



export const deleteNewsRu = () => (dispatch, getState) => {
    axios.delete(API_PATH + "ru/news/" + getState().news.selectedIndexRu)
        .then((res) => {
            dispatch(getNewsRu())
            dispatch(updateState({deleteModalRu: false, selectedIndexRu: ''}))
            toast.success("Muvafaqiyatli saqlandi");
        })
        .catch((error) =>{
            toast.error(error)
        })
}

export const getNewsRu =() => (dispatch) =>{
    axios.get(API_PATH + "ru")
        .then((res) =>{
            dispatch(updateState({newsRu:res.data.top}))
        })
        .catch((error) =>{
            toast.error(error)
        })
}


// News (en) functions


export const saveNewsEn = (values) => (dispatch, getState) =>{
    if (getState().news.selectedIndexEn.id){
        axios.put(API_PATH + "en/news/" + getState().news.selectedIndexEn.id, values)
            .then((res) => {
                dispatch(getNewsEn());
                dispatch(updateState({openEn: false, selectedItemEn: {}}))
                toast.success("Muvafaqqiyatli o'zgartirildi!")
            })
            .catch((error) => {
                toast.error(error)
            })
    }else {
        axios.post(API_PATH + "en/news" , values)
            .then((res) =>{
                dispatch(getNewsEn())      ;
                dispatch(updateState({openEn:false}));
                toast.success("Muvafaqiyatli saqlandi")
            })

    }
}
export const deleteNewsEn = () => (dispatch, getState) => {
    axios.delete(API_PATH + "en/news/" + getState().news.selectedIndexEn)
        .then((res) => {
            dispatch(getNewsEn())
            dispatch(updateState({deleteModalEn: false, selectedIndexEn: ''}))
            toast.success("Muvafaqiyatli saqlandi");
        })
        .catch((error) =>{
            toast.error(error)
        })
}

export const getNewsEn =() => (dispatch) =>{
    axios.get(API_PATH + "en")
        .then((res) =>{
            dispatch(updateState({newsEn:res.data.top}))
        })
        .catch((error) =>{
            toast.error(error)
        })
}