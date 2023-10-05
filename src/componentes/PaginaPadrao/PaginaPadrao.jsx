import { Outlet } from "react-router-dom";
import { Banner } from "../Banner/Banner";

export function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}
