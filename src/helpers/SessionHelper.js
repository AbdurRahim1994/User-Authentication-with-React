class SessionHelper {
    SetToken(value) {
        localStorage.setItem("AuthToken", value)
    }

    GetToken() {
        return localStorage.getItem("AuthToken")
    }

    SetUserDetail(value) {
        localStorage.setItem("AuthUser", JSON.stringify(value))
    }

    GetUserDetail() {
        return JSON.parse(localStorage.getItem("AuthUser"));
    }

    RemoveSession() {
        localStorage.removeItem("AuthToken")
        localStorage.removeItem("AuthUser")
        window.location.href = '/'
    }
}

export const { SetToken, GetToken, SetUserDetail, GetUserDetail, RemoveSession } = new SessionHelper()

