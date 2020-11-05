import { ColonyRole, getBlockTime, getLogs } from '@colony/colony-js';
import { utils } from 'ethers';
import { provider } from './colony';



export const getPayoutClaimed = async (colonyClient: any) => {

    const eventFilter = colonyClient.filters.PayoutClaimed();
    const eventLogs = await getLogs(colonyClient, eventFilter);
    const parsedLogs = await eventLogs.map((event: any) => colonyClient.interface.parseLog(event));

    const payoutClaimed: any = [];
    await Promise.all(parsedLogs.map(async (parsedLog, index) => {
        //PotId
        const humanReadableFundingPotId = new utils.BigNumber(
            parsedLog.values.fundingPotId
        ).toString();

        //Amount
        const humanReadableAmount = new utils.BigNumber(parsedLog.values.amount);
        const wei = new utils.BigNumber(10);

        //Log Time
        const logTime = await getBlockTime(provider, parsedLog.blockHash);

        const readableData = {
            amount: humanReadableAmount.div(wei.pow(18)).toString(),
            event: 'PayoutClaimed',
            fundingPotId: humanReadableFundingPotId,
            logTime,
            token: parsedLog.values.token,
            userAddress: eventLogs[index].address
        };
        payoutClaimed.push(readableData);
    }));
    return payoutClaimed;
}

export const getColonyInitialised = async (colonyClient: any) => {

    const eventFilter = colonyClient.filters.ColonyInitialised();
    const eventLogs = await getLogs(colonyClient, eventFilter);
    const parsedLogs = await eventLogs.map((event: any) => colonyClient.interface.parseLog(event));

    //Log Time
    const logTime = await getBlockTime(provider, parsedLogs[0].blockHash);

    const readableData = {
        event: 'ColonyInitialised',
        logTime
    };
    return readableData;
}

export const getColonyRoleSet = async (colonyClient: any) => {
    const eventFilter = colonyClient.filters.ColonyRoleSet();
    const eventLogs = await getLogs(colonyClient, eventFilter);
    const parsedLogs = await eventLogs.map((event: any) => colonyClient.interface.parseLog(event));

    const colonyRoleSet: any = [];

    await Promise.all(parsedLogs.map(async (parsedLog, index) => {
        //PotId
        const humanReadableDomainId = new utils.BigNumber(
            parsedLog.values.domainId
        ).toString();

        //Log Time
        const logTime = await getBlockTime(provider, parsedLog.blockHash);

        const readableData = {
            domainId: humanReadableDomainId,
            event: 'ColonyRoleSet',
            logTime,
            role: parsedLog.values.role,
            userAddress: eventLogs[index].address
        };
        colonyRoleSet.push(readableData);
    }));
    return colonyRoleSet;
}

export const getDomainAdded = async (colonyClient: any) => {
    const eventFilter = colonyClient.filters.DomainAdded();
    const eventLogs = await getLogs(colonyClient, eventFilter);
    const parsedLogs = await eventLogs.map((event: any) => colonyClient.interface.parseLog(event));

    const colonyRoleSet: any = [];
    await Promise.all(parsedLogs.map(async (parsedLog) => {
        //PotId
        const humanReadableDomainId = new utils.BigNumber(
            parsedLog.values.domainId
        ).toString();

        //Log Time
        const logTime = await getBlockTime(provider, parsedLog.blockHash);

        const readableData = {
            domainId: humanReadableDomainId,
            event: 'DomainAdded',
            logTime
        };
        colonyRoleSet.push(readableData);
    }));
    return colonyRoleSet;
}