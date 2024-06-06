import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Box bg="teal.500" px={4} py={2} color="white">
      <Flex align="center">
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          Home
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/about-us" ml={4}>
          About Us
        </Link>
        {session && (
          <Button ml={4} onClick={handleLogout} colorScheme="teal" variant="outline">
            Logout
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;