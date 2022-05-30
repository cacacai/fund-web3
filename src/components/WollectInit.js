import { useEffect, useState } from "react";
import { connectors } from "../pages/web3/connectors";
import { useWeb3React } from "@web3-react/core";


/**
 * 钱包初始化工作
 * 获取连接状态
 * 获取币的数量大小
 */
function WollectInit() {
    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    useEffect(() => {
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(connectors[provider]);
    }, []);
    return (<></>)
}
export default WollectInit