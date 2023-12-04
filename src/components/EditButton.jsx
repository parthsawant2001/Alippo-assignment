import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const EditButton = ({ tableData, d, setTableData }) => {
  const [modal, setModal] = useState(false);
  const [newName, setNewName] = useState();

  const onEdit = () => {
    setModal(true);
    setNewName(d.name);
  };

  const onSubmit = () => {
    setTableData(
      tableData.map((a) => {
        if (d.name === a.name) {
          return { ...a, name: newName };
        }
        return a;
      })
    );
    setModal(false);
  };

  return (
    <div>
      <Button className='mr-2' onClick={onEdit}>
        Edit
      </Button>
      {modal && (
        <div className='bg-[#00000046] w-screen h-screen fixed flex flex-col items-center justify-center top-0 left-0'>
          <Card className='w-[350px]'>
            <CardHeader>
              <CardTitle>Edit Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col space-y-1.5'>
                <Input
                  onChange={(e) => setNewName(e.target.value)}
                  value={newName}
                  type='text'
                />
              </div>
            </CardContent>
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

export default EditButton;
