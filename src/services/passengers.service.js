import { getPagedPassengerTravelsRepository, getPassengerTravelsRepository } from "../repositories/passengers.repository.js";

export async function getPassengerTravelsService(page, name) {
    let searchPassengerTravels;

    if (page) searchPassengerTravels = await getPagedPassengerTravelsRepository(page, name);
    else searchPassengerTravels = await getPassengerTravelsRepository(name);

    if (searchPassengerTravels.rowCount > 100) return "Too many results";
    return searchPassengerTravels.rows;
}
