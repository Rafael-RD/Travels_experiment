import httpStatus from "http-status";
import { getPassengerTravelsService } from "../services/passengers.service.js";

export async function passengerTravelsController(req, res) {
    const { page, name } = req.query;

    if (page !== undefined && (isNaN(page) === true || page === "" || page < 1)) return res.status(httpStatus.BAD_REQUEST).send("Invalid page value");

    try {
        const list = await getPassengerTravelsService(page, name);
        if (list === "Too many results") return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Too many results");
        return res.send(list)
    } catch (error) {
        console.error(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
