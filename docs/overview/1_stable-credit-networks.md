---
sidebar_position: 2
---

# Stable Credit Networks

## How does it work?

---

### 1. Membership

Stable Credit networks function best as closed trade networks. This means that in order to transfer or receive the internal credit currency, membership must be granted. Eligibility is determined on a network by network basis, however, basic identity provisions and/or KYC should be implemented in order to increase sybil resiliency and ensure the validity of all participants.

### 2. Credit Issuance

Once members are granted membership, they can be issued their credit line and terms. Credit terms are also determined on a network by network basis, but in their simplest form, they must include a credit limit that regulates the max amount of credits a member can mint and a credit period that denotes the expiration of minted credits. [Read more on Credit Issuance](/docs/overview/credit-issuance).

### 3. ERC20 Lines of Credit

Stable Credits extend the functionality of ERC20 tokens to include mutual credit-clearing logic. Just like any other ERC20 token, credits can be transferred between accounts and balances can be viewed using any Ethereum compatible wallet (like Metamask). However, unlike other ERC20 currencies, members can use their credit lines to transfer credits even when a transaction exceeds their balance. This is done by enabling members to mint credits needed to cover a transaction amount and recording the newly minted credits as a credit balance (or a debt obligation). In addition, when members receive credits while holding a credit balance, those credits are burned on arrival, reducing the recipient's credit balance.

### 4. Assurance Fees

As a network's total supply expands from member’s utilizing their credit lines, so does the risk associated with using that currency. To mitigate this risk, an AssurancePool smart contract is deployed to protect the currency from Lost Debt. How a network chooses to continuously fund its AssurancePool will vary from network to network. Example AssurancePool funding models include:

- Assurance Pool deposits can be called manually by any party in order to ensure prompt risk mitigation.
- Credit transaction fees can be introduced to progressively fund an AssurancePool as members transfer credits amongst each other.
- Membership subscriptions can ensure regular monthly deposits into the AssurancePool.
