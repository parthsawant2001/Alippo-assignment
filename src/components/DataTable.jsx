'use client';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const DataTable = () => {
  const [tableData, setTableData] = useState();
  const nullData = <p className='text-muted-foreground'>No data</p>;
  const tableHeaders = ['Sr no.', 'Name', 'Age', 'City', 'Pincode', 'Actions'];

  const fetchData = async () => {
    try {
      await axios
        .get('https://assets.alippo.com/catalog/static/data.json')
        .then((response) => {
          setTableData(response.data);
        });
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header, idx) => (
              <TableHead key={idx}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map((d, id) => (
            <TableRow>
              <TableCell>{id + 1}</TableCell>
              <TableCell>{d.name ? d.name : nullData}</TableCell>
              <TableCell>{d.age ? d.age : nullData}</TableCell>
              <TableCell>{d.city ? d.city : nullData}</TableCell>
              <TableCell>{d.pinCode ? d.pinCode : nullData}</TableCell>
              <TableCell>
                <div className='flex justify-between'>
                  <EditButton
                    tableData={tableData}
                    setTableData={setTableData}
                    d={d}
                  />

                  <DeleteButton
                    tableData={tableData}
                    setTableData={setTableData}
                    d={d}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
