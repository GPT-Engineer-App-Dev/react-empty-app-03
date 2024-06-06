import { Box, Container, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Container maxW="container.md" centerContent>
      <Box p={4} textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">
          Welcome to our application! We are dedicated to providing the best service possible. Our team is committed to ensuring your satisfaction and delivering top-notch solutions.
        </Text>
      </Box>
    </Container>
  );
};

export default AboutUs;