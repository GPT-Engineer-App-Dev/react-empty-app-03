import { Container, VStack, Box } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box width="100%">
          <SupabaseAuthUI />
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;