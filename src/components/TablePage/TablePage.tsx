import { useEffect, useState } from "react";

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

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((res) => res.json())
            .then((data) => setGetData(data.results));
    }, []);

    console.log(getData);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>mass</td>
                        <td>height</td>
                        <td>hair color</td>
                        <td>skin color</td>
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
        </>
    );
}
