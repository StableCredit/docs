---
sidebar_position: 2
---

# Community Currency

## How does it work?

---

### 1. Membership

Stable Credit networks are closed trade networks. This means that in order to transfer or receive the credit currency, membership must be granted. Eligibility is determined on a network by network basis, however, basic KYC should be implemented in order to increase sybil resiliency and ensure the validity of all participants.

### 2. Credit Issuance

Once members are granted membership, they can be issued their credit line and terms. Credit terms are also determined on a network by network basis, but in their simplest form, include a credit limit that regulates the max amount of credits a member can mint and a credit period that denotes the expiration of minted credits. [Read more on Credit Issuance](/docs/overview/credit-issuance).

### 3. ERC20 Lines of Credit

Stable Credits extend the functionality of ERC20 tokens to include mutual credit-clearing logic. This means stable credits behave like any other ERC20 token in that they can be transferred between accounts and balances can be seen using any Ethereum compatible wallet (like Metamask). However, unlike other ERC20 currencies, members can use their credit lines to transfer credits even when a transaction exceeds their balance. This is done by enabling members to mint credits needed to cover a transaction amount and recording the newly minted credits as a credit balance (or a debt obligation). In addition, when members receive credits while holding a credit balance, those credits are burned on arrival, reducing the recipient's credit balance.

### 4. Assurance Fees

When members transfer credits to one another, an additional transaction fee is collected to _**assure**_ the network. This fee is collected in a designated _**reserve currency**_ that is an external currency that does not require membership to hold (ex. Eth, USDC, ect.). Transaction fees are calculated based on the analyzed network health and an individual member's reputation (ex. Credit Scores) can also be used to determine the transaction fee rate to be collected. [Read more on fees and network assurance](/docs/overview/credit-assurance).
