import { BaseURL } from '../helpers/Config'
import axios from 'axios'
import { SuccessToast, ErrorToast } from '../helpers/FormHelper'
import store from '../redux/store/store'
import { HideLoader, ShowLoader } from '../redux/state-slice/setting-slice'
import { SetProfile } from '../redux/state-slice/profile-slice'
import { SetToken, SetUserDetail, GetToken } from '../helpers/SessionHelper'

const token = GetToken();
axios.defaults.headers.common['token'] = token

export const UserRegistrationRequest = async (name, email, password) => {
    try {
        store.dispatch(ShowLoader())
        const postBody = {
            name: name,
            email: email,
            password: password
        }

        const res = await axios.post(BaseURL + '/UserRegistration', postBody)
        store.dispatch(HideLoader())
        if (res.status === 200) {
            if (res?.data?.status === 'success') {
                SuccessToast("Registration Successful")
                return true
            }
            else {
                ErrorToast(res?.data?.status)
                return false
            }
        }
        else {
            ErrorToast("Something went wrong")
            return false
        }
    }
    catch (error) {
        ErrorToast("Something went wrong")
        store.dispatch(HideLoader())
        return false
    }
}

export const UserLoginRequest = async (email, password) => {
    try {
        store.dispatch(ShowLoader())
        const postBody = {
            email: email,
            password: password
        }

        const res = await axios.post(BaseURL + '/UserLogin', postBody)
        store.dispatch(HideLoader())
        if (res.status === 200) {
            if (res?.data?.status === 'success') {
                SuccessToast("Login Successful")
                SetToken(res?.data?.token)
                SetUserDetail(res?.data?.data)
                return true
            }
            else {
                ErrorToast(res?.data?.status)
                return false
            }
        }
        else {
            ErrorToast("Something went wrong")
            return false
        }
    }
    catch (error) {
        ErrorToast("Something went wrong")
        store.dispatch(HideLoader())
        return false
    }
}

export const UserProfileDetailRequest = async () => {
    try {
        store.dispatch(ShowLoader())
        const res = await axios.get(BaseURL + '/UserProfileDetail')
        store.dispatch(HideLoader())
        if (res.status === 200) {
            if (res?.data?.status === 'success') {
                store.dispatch(SetProfile(res?.data?.data[0]))
                return true
            }
            else {
                ErrorToast(res?.data?.status)
                return false
            }
        }
        else {
            ErrorToast("Something went wrong")
            return false
        }
    }
    catch (error) {
        ErrorToast("Something went wrong")
        store.dispatch(HideLoader())
        return false
    }
}

export const UserUpdateRequest = async (name, email) => {
    try {
        const postBody = {
            name: name,
            email: email
        }
        store.dispatch(ShowLoader())
        const res = await axios.post(BaseURL + '/UserProfileUpdate', postBody)
        store.dispatch(HideLoader())
        if (res.status === 200) {
            if (res?.data?.status === 'success') {
                SuccessToast("Successfully Updated");
                SetUserDetail(postBody)
                return true
            }
            else {
                ErrorToast(res?.data?.status)
                return false
            }
        }
        else {
            ErrorToast("Something went wrong")
            return false
        }
    }
    catch (error) {
        ErrorToast("Something went wrong")
        store.dispatch(HideLoader())
        return false
    }
}

export const UserPasswordUpdateWithLoginRequest = async (oldPassword, newPassword) => {
    try {
        store.dispatch(ShowLoader())
        const postBody = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }
        const res = await axios.post(BaseURL + '/UserPasswordUpdateWithLogin', postBody);
        store.dispatch(HideLoader())
        if (res.status === 200) {
            if (res?.data?.status === 'success') {
                SuccessToast("Password Updated")
                return true
            }
            else {
                ErrorToast(res?.data?.status)
                return false
            }
        }
        else {
            ErrorToast("Something went wrong")
            return false
        }
    }
    catch (error) {
        ErrorToast("Something went wrong")
        store.dispatch(HideLoader())
        return false
    }
}