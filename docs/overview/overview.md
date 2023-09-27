---
sidebar_position: 1
---

# Overview

The following are the foundational components that make up the **Stable Credit** protocol.

- [**Stable Credits**](/docs/overview/community-currency): The network currency that is created and destroyed by members as they extend and repay their credit lines.
- [**Credit Lines**](/docs/overview/community-currency): Enables members to mint and burn Stable Credits according to the bookkeeping logic of mutual credit-clearing.
- [**Reserve Currency**](/docs/overview/credit-assurance): The currency that is used to back the network currency and is held in the Assurance Pool.
- [**Assurance Pool**](/docs/overview/credit-assurance): A pool of reserve currency that backs the network currency by insentivizing the removal of [_lost debt_](/).
- [**Network Debt Account**](/docs/overview/lost-debt): A shared autonomous account that holds the network's accumulated [_lost debt_](/).
- [**Credit Issuer**](/docs/overview/credit-issuance): A smart contract that enables the underwriting of member credit lines.
- [**Assurance Oracle**](/docs/overview/credit-assurance#credit-risk): A smart contract that provides necessary off-chain data to the Assurance Pool and/or Credit Issuer.

<img src="/img/stable-credit-overview.png" />

## Useful Links

import DocCardList from '@theme/DocCardList';

<DocCardList />
