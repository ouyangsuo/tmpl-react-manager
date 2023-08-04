import { doPost } from "./request";

export function register(username, password) {
    return doPost(`/user/register`, { username, password })
}

export function login(username, password) {
    return doPost(`/user/login`, { username, password })
}