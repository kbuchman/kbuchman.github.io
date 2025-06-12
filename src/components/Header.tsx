import { Stack, Paper, Dialog, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

export const Header: React.FC = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const linkedInUrl = 'https://www.linkedin.com/in/kbuchman';
  const gitHubUrl = 'https://github.com/kbuchman';
  const emailUrl = 'mailto:kbuchman.contact@gmail.com';

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const linkProps = {
    target: '_blank',
    rel: 'noopener',
    color: 'inherit' as const,
    underline: 'none' as 'none' | 'hover' | 'always' | undefined,
    sx: { display: 'flex', alignItems: 'center', gap: 1 }
  };

  return (
    <>
      <Stack
        direction={'row'}
        gap={2}
      >
        <Paper
          onClick={handleDialogOpen}
          sx={{
            width: 'min-content',
            alignItems: 'center',
            justifyContent: 'center',
            ':hover': {
              cursor: 'pointer',
            }
          }}
        >
          CONTACT
        </Paper>
        <Paper
          elevation={3}
          sx={{ width: '100%' }}
        />
        <Paper
          elevation={3}
          sx={{
            width: 'min-content',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          EN
        </Paper>
      </Stack>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
      >
        <IconButton
          onClick={handleDialogClose}
          sx={{
            position: 'absolute',
            alignSelf: 'flex-end',
            padding: '4px',
            right: '4px'
          }}
        >
          <CloseIcon sx={{ color: 'white' }} />
        </IconButton>
        <Stack
          direction={'column'}
          gap={1}
          sx={{ padding: 1 }}
        >
          <Link
            href={linkedInUrl}
            {...linkProps}
          >
            <LinkedInIcon />
            linkedin.com/in/kbuchman
          </Link>
          <Link
            href={gitHubUrl}
            {...linkProps}
          >
            <GitHubIcon />
            github.com/kbuchman
          </Link>
          <Link
            href={emailUrl}
            {...linkProps}
          >
            <EmailIcon />
            kbuchman.contact@gmail.com
          </Link>
        </Stack>
      </Dialog>
    </>
  );
}