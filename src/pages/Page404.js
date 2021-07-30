import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, Typography, Container } from '@material-ui/core';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Désolé, page introuvable !
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              Peut-être avez-vous mal saisi l'URL ?
            </Typography>

            <Button to="/" size="large" variant="contained" component={RouterLink}>
              Retourner au tableau de bord
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
