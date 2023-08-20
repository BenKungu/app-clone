import { axiosInstance } from "./TokenService"

class RequestService {

    createAppointment = (data) => {
        return axiosInstance.post("appointment", data);
    }

    getAppointments = () => {
        return axiosInstance.get("appointments");
    }

    getSlots = (dates) => {
        return axiosInstance.get("slots?start_date=" + dates);
    }
}

export default new RequestService();