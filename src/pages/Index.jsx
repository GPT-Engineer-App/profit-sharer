import { Container, Text, VStack, Box, Heading, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { FaBitcoin, FaDollarSign, FaLock, FaUserCheck, FaWallet } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Cryptocurrency Trading Platform
        </Heading>
        <Text fontSize="xl" textAlign="center">
          A secure and efficient platform for trading and managing your cryptocurrency.
        </Text>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Profit Sharing Mechanism
          </Heading>
          <List spacing={3} my={4}>
            <ListItem>
              <ListIcon as={FaUserCheck} color="green.500" />
              80% of trading fees to the buyer - Rewarding their crucial role in liquidity provision.
            </ListItem>
            <ListItem>
              <ListIcon as={FaDollarSign} color="green.500" />
              20% of trading fees to the company - For operational and developmental costs.
            </ListItem>
          </List>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Transaction Process
          </Heading>
          <List spacing={3} my={4}>
            <ListItem>
              <ListIcon as={FaLock} color="blue.500" />
              Secure BTC transactions with smart contract integration.
            </ListItem>
            <ListItem>
              <ListIcon as={FaWallet} color="blue.500" />
              Dynamic profit distribution ensuring fairness and transparency.
            </ListItem>
          </List>
        </Box>

        <Button leftIcon={<FaBitcoin />} colorScheme="orange" variant="solid">
          Start Trading
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
