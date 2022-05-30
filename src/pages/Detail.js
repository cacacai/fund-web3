import { useEffect, useState, useRef } from "react";

import { useWeb3React } from "@web3-react/core";
import {
    Spinner,
    Text,
} from "@chakra-ui/react";




const { ethers } = require("ethers");
function Detail() {
    const [loading, setLoading] = useState(false);
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

    const getBlance = async () => {
        //https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp
        if (!library) return;
        try {
            console.log(componentMounted.current)
            const provider = new ethers.providers.Web3Provider(library.provider)
            const balance = await provider.getBalance(account)
            console.log(componentMounted.current,balance)
            if (componentMounted.current) { // (5) is component still mounted?
                setUserbalance(balance) // (1) write data to state
                setLoading(false); // (2) write some value to state
            }
        } catch (error) {
            console.log(error)
            setError(error);
        }
    }
    useEffect(() => {
        setLoading(true);
        getBlance()

        return () => { // This code runs when component is unmounted
            componentMounted.current = false; // (4) set it to false when we leave the page
        }

    }, []);
    return (
        <div>
            <h1>Detail</h1>
            {loading ? (
                <Spinner />
            ) : null}
            {userbalance ? (
                <Text>{`Balance: ${userbalance}`}</Text>
            ) : null}
        </div>
    )
}
export default Detail