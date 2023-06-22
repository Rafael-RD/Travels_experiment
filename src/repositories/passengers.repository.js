import db from "../database/database.js";

export function getPassengerTravelsRepository(name = "") {
    return db.query(`
        SELECT passengers."fullName" AS passenger, COUNT(pt."passengerId") AS travels
        FROM passengers
        JOIN passenger_travels pt ON passengers.id = pt."passengerId"
        WHERE passengers."fullName" ILIKE $1
        GROUP BY passengers."fullName"
        ORDER BY "travels" DESC
    `, [`%${name}%`])
}

export function getPagedPassengerTravelsRepository(page, name = "") {
    return db.query(`
        SELECT passengers."fullName" AS passenger, COUNT(pt."passengerId") AS travels
        FROM passengers
        JOIN passenger_travels pt ON passengers.id = pt."passengerId"
        WHERE passengers."fullName" ILIKE $2
        GROUP BY passengers."fullName"
        ORDER BY "travels" DESC
        LIMIT 25 OFFSET $1
    `, [(page - 1) * 25, `%${name}%`]);
}