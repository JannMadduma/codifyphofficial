import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../../service/propertyService";
import { setProperties } from "../../actions/propertiesActions";

export default function ManageProperties() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);

  React.useEffect(() => {
    getAllProperties().then((res) => {
      dispatch(setProperties(res.data));
    });
  }, []);

  return (
    <div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Property Lisiting</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Property Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Developer</TableCell>
            <TableCell>Project Type</TableCell>
            <TableCell>Monthly Payment</TableCell>
            <TableCell>TCP</TableCell>
            <TableCell>BedRooms</TableCell>
            <TableCell>BathRooms</TableCell>
            <TableCell>LotArea</TableCell>
            <TableCell>FloorArea</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.propertyName}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.developer}</TableCell>
              <TableCell>{row.projectType}</TableCell>
              <TableCell>{row.monthly}</TableCell>
              <TableCell>{row.tcp}</TableCell>
              <TableCell>{row.bedRooms}</TableCell>
              <TableCell>{row.bathRooms}</TableCell>
              <TableCell>{row.lotArea}</TableCell>
              <TableCell>{row.floorArea}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
