import { useEffect, useState } from "react";
import styles from "./TablePage.module.css";
import Loading from "../elements/loading/Loading";
import { type IResponse } from "../types/Response";
import MobileTable from "./MobileTable/MobileTable";
import RegularTable from "./RegularTable/RegularTable";

export default function TablePage() {
    const [getData, setGetData] = useState<IResponse[]>([]);
    const [mobileTable, setMobileTable] = useState(false);
    const [awaitingResponse, setAwaitingResponse] = useState(false);
    const [badRequest, setBadRequest] = useState(false);

    //////////////////////////////////////////////////////
    // Width check

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    //////////////////////////////////////////////////////
    // Mobile table switch

    useEffect(() => {
        if (width < 720) {
            setMobileTable(true);
        } else {
            setMobileTable(false);
        }
    }, [width]);

    //////////////////////////////////////////////////////
    // Data fecth

    useEffect(() => {
        setAwaitingResponse(true);
        fetch("https://swapi.dev/api/people")
            .then((res) => res.json())
            .then((data) => setGetData(data.results))
            .catch((err) => err && setBadRequest(true))
            .finally(() => setAwaitingResponse(false));
    }, []);

    return (
        <>
            {/* Regular table */}

            {awaitingResponse && <Loading />}

            {!mobileTable && !awaitingResponse && (
                <section className={styles.tableWrap}>
                    {!badRequest && <RegularTable data={getData} />}

                    {badRequest && <h1>Please try again later</h1>}
                </section>
            )}

            {/* Mobile table */}

            {mobileTable && !awaitingResponse && (
                <section className={styles.mobileTableWrap}>
                    {!badRequest && <MobileTable data={getData} />}

                    {badRequest && <h1>Please try again later</h1>}
                </section>
            )}
        </>
    );
}
