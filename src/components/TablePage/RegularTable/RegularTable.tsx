import { type IResponse } from "../../types/Response";

export default function RegularTable({ data }: { data: IResponse[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mass</th>
                    <th>Height</th>
                    <th>Hair color</th>
                    <th>Skin color</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, i) => {
                    return (
                        <tr key={item.name + i}>
                            <td className="sw-name">{item.name}</td>
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
