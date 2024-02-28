import React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import AuthForm from '@/components/AuthForm';

const AuthDialog = (
  { isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void },
) => {
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
    >
      <DialogContent>
        <AuthForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
