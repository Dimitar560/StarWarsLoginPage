import { type IResponse } from "../../types/Response";

export default function RegularTable({ data }: { data: IResponse[] }) {
    return (
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
                {data?.map((item, i) => {
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
    );
}
