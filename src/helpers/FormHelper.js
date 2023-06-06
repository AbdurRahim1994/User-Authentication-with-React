import cogoToast from "cogo-toast";

class FormHelper {
    SuccessToast(msg) {
        cogoToast.success(msg, {})
    }

    ErrorToast(msg) {
        cogoToast.error(msg)
    }

    IsEmpty(value) {
        if (value.length === 0) {
            return true
        }
        else {
            return false
        }
    }
}

export const { IsEmpty, SuccessToast, ErrorToast } = new FormHelper()