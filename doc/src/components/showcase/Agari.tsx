import { useState } from "react";

interface Props {
	style?: React.CSSProperties;
}

export default function Agari({ style }: Props) {
	const [selected] = useState("Hikarimono");

	return (
		<div className="card" style={{ ...style, padding: 0 }}>
			<table className="table" style={{ width: "100%" }}>
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Position</th>
						<th scope="col">Area in Charge</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Taro Magurokawa</td>
						<td>Manager</td>
						<td>Tokyo</td>
					</tr>
					<tr>
						<td>Misaki Burita</td>
						<td>Head Chef</td>
						<td>Tsukiji</td>
					</tr>
					<tr>
						<td>Kengo Taihara</td>
						<td>Floor Staff</td>
						<td>Shinjuku</td>
					</tr>
					<tr>
						<td>Aoi Sabaike</td>
						<td>Logistics Staff</td>
						<td>Yokohama</td>
					</tr>
				</tbody>
				<caption>Employees</caption>
			</table>
		</div>
	);
}
