import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary/Summary";
import ExpenceView from "../expense-view/ExpenceView";
import { GlobalContext } from "../context/Context";

function Main() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    totalExpence,
    totalIncome,
    setTotalIncome,
    setTotalExpence,
    allTransaction,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expence = 0;
    allTransaction.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expence = expence + parseFloat(item.amount));
    });
    setTotalExpence(expence);
    setTotalIncome(income);
  }, [allTransaction]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expence Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary totalExpence={totalExpence} totalIncome=
      {totalIncome}  isOpen={isOpen} onClose={onClose} />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenceView />
        <ExpenceView />
      </Flex>
    </Flex>
  );
}

export default Main;
