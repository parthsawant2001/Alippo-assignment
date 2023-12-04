import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
const DeleteButton = ({ tableData, d, setTableData }) => {
  const [modal, setModal] = useState(false);

  const onSubmit = () => {
    setTableData(tableData.filter((a) => a.name !== d.name));
    setModal(false);
  };

  const onDelete = () => {
    setModal(true);
  };

  return (
    <div>
      <Button className='mr-2' onClick={onDelete}>
        Delete
      </Button>
      {modal && (
        <div className='bg-[#00000046] w-screen h-screen fixed flex flex-col items-center justify-center top-0 left-0'>
          <Card>
            <CardHeader>
              <CardTitle>Are you sure you want to delete this entry?</CardTitle>
              <CardDescription>{d.name}</CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-between'>
              <Button onClick={onSubmit}>Save</Button>
              <Button onClick={() => setModal(false)}>close</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
