import { useEffect, useState, useRef } from "react";

import { useWeb3React } from "@web3-react/core";
import {
    Spinner,
    Text,
} from "@chakra-ui/react";
import Web3 from "web3";



const { ethers } = require("ethers");


function Home() {
    const [loading,setLoading] = useState(false);
    const [userbalance, setUserbalance] = useState("");
    const [error, setError] = useState("");
    const componentMounted = useRef(true); // (3) component is mounted

    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    useEffect(async () => {
        setLoading(true);
        //https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
        if (!library) return;
        try {
            const provider = new Web3(library.provider)
            const balance = await provider.eth.getBalance(account)
            if (componentMounted.current){ // (5) is component still mounted?
                setUserbalance(provider.utils.fromWei(balance)) // (1) write data to state
                setLoading(false); // (2) write some value to state
            }
        } catch (error) {
            console.log(error)
            setError(error);
        }
        return () => { // This code runs when component is unmounted
            componentMounted.current = false; // (4) set it to false when we leave the page
        }
    }, []);


    // MetaMask requires requesting permission to connect users accounts
    //await provider.send("eth_requestAccounts", []);
    //

    return (
        <div>
            {loading? (
                <Spinner/>
            ) : <Text>{`Balance: ${userbalance}`}</Text>}
        </div>
    )
}
export default Home