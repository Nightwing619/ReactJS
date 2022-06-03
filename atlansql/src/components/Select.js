import React from "react";
export default function Select(props){
    let heading=["Sl_No","customerID","companyName","contactName","contactTitle","address","city","region","postalCode","country","phone","fax"]
    const [tableCell,setTableCell] = React.useState(props.database)
    return(
        <table border="2">
            <tbody>
                {props.show && <tr className="table--heading">
                    {heading.map((item,i) => (
                        <th>{item}</th>
                    ))}
                </tr>}
                {tableCell.slice(0,props.limit).map((item, i) => (
                    <tr key={i}>
                        <td>{item.Sl_No}</td>
                        <td>{item.customerID}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.region}</td>
                        <td>{item.postalCode}</td>
                        <td>{item.country}</td>
                        <td>{item.phone}</td>
                        <td>{item.fax}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}