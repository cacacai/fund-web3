import { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import {
    VStack,
    useDisclosure,
    Button,
    Text,
    HStack,
    Select,
    Input,
    Box
  } from "@chakra-ui/react";



const { ethers } = require("ethers");


function Home() {
    const [userbalance, setUserbalance] = useState('');
    const [error, setError] = useState("");
    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    function useContract(contract) {
        const connector = usePriorityConnector();
        const provider = usePriorityProvider();
      
        contract = contract.connect(provider);
      
        if (getConnectorName(connector) !== "Network") {
          const signer = provider?.getSigner?.();
          if (signer !== undefined) contract = contract.connect(signer);
        }
      
        return contract;
      }
      

    const getBlance = async () => {
        if (!library) return;
        try {
            const balance = await library.provider.getBalance(account)
            setUserbalance(balance)
            console.log(account," ",balance)
        } catch (error) {
            console.log(error)
            setError(error);
        }
    };

    useEffect(() => {
    }, []);


    // MetaMask requires requesting permission to connect users accounts
    //await provider.send("eth_requestAccounts", []);
    //

    return (
        <div>
            <Button onClick={getBlance}>
                getBalance
            </Button>
            {userbalance ? (
                <Tooltip label={userbalance} placement="bottom">
                    <Text>{`Balance: ${userbalance}`}</Text>
                </Tooltip>
            ) : null}
        </div>
    )
}
export default Home