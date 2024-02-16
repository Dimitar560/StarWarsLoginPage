import { Fragment } from "react";
import { type IResponse } from "../../types/Response";

export default function MobileTable({ data }: { data: IResponse[] }) {
    return (
        <table>
            <tbody>
                {data?.map((item, i) => {
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
    );
}
