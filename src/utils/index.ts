import { ColonyRole } from '@colony/colony-js';
import { tokens } from '../lib/tokens';

export function generateLogText(event: any) {
    let logText;
    switch (event.event) {
        case 'ColonyInitialised':
            logText = `Congratulations! It's beautiful baby colony!`;
            break;
        case 'ColonyRoleSet':
            logText = `<b>${ColonyRole[event.role]}</b> role assigned to user <b>${event.userAddress}</b> in domain <b>${event.domainId}</b>`;
            break;
        case 'PayoutClaimed':
            logText = `User <b>${event.userAddress}</b> claimed <b>${event.amount}</b> <b>${getTokenSymbol(event.token)}</b> payout from pot <b>${event.fundingPotId}</b>`;
            break;
        case 'DomainAdded':
            logText = `Domain <b>${event.domainId}</b> added`;
            break;
        default:
            break;
    }
    return logText;
}

export function getTokenSymbol(address: string) {
    const token = tokens.find(tk => tk.address === address);
    return token ? token.symbol : address;
}