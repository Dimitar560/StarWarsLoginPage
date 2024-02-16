import { Fragment, useEffect, useState } from "react";
import styles from "./TablePage.module.css";

interface IResponse {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export default function TablePage() {
    const [getData, setGetData] = useState<IResponse[]>([]);
    const [mobileTable, setMobileTable] = useState(false);

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
        fetch("https://swapi.dev/api/people")
            .then((res) => res.json())
            .then((data) => setGetData(data.results));
    }, []);

    return (
        <>
            {/* Regular table */}

            {!mobileTable && (
                <section className={styles.tableWrap}>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Mass</td>
                                <td>Height</td>
                                <td>Hair color</td>
                                <td>Skin color</td>
                            </tr>
                        </thead>
                        <tbody>
                            {getData?.map((item, i) => {
                                return (
                                    <tr key={item.name + i}>
                                        <td>{item.name}</td>
                                        <td>{item.mass}</td>
                                        <td>{item.height}</td>
                                        <td>{item.hair_color}</td>
                                        <td>{item.skin_color}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            )}

            {/* Mobile table */}

            {mobileTable && (
                <section className={styles.mobileTableWrap}>
                    <table>
                        <tbody>
                            {getData?.map((item, i) => {
                                return (
                                    <Fragment key={item.name + i}>
                                        <tr>
                                            <td colSpan={2}>{`Charecter ${i + 1}`}</td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td>{item.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Mass</td>
                                            <td>{item.mass}</td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td>{item.height}</td>
                                        </tr>
                                        <tr>
                                            <td>Hair color</td>
                                            <td>{item.hair_color}</td>
                                        </tr>
                                        <tr>
                                            <td>Skin color</td>
                                            <td>{item.skin_color}</td>
                                        </tr>
                                    </Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            )}
        </>
    );
}
