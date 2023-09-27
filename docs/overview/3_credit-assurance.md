---
sidebar_position: 3
---

# Credit Assurance

In order for Stable Credit networks to scale beyond the social trust of its members, _assurance_ is introduced to enable the trust of the network as a whole. Assurance exists in order to add resiliency to the system by addressing the presence of _lost debt_. Each network is equipped with an `AssurancePool` smart contract that enables members to participate in assuring the network currency. The AssurancePool exists firstly to incentivize members to participate in the removal of lost debt.

## Lost Debt Removal

Members who hold positive balances of credits are able to participate in the removal of lost debt by converting their credits into the network's reserve currency. This reduces both the lost debt balance and the total supply of credits, which in turn addresses the inflationary pressure of lost debt. To incentive the participation of bad debt removal, members are reimbursed in **Reserve Currency** by the `AssurancePool` for the value of lost debt removed.

## Reserve Currency

Each `AssurancePool` designates a **Reserve Currency** that is used as the network currency's "soft peg". Typically, stable coins use an algorithm to manipulate the market rate of the currency in order to reach and maintain a stable market price. Because Stable Credits are not intended to be traded the currency is softly pegged, meaning the perceived value of a credit is determined by a few key points.

1. Credits only exist as a result of member debt. In order for credits to exist, there must be an equal amount of debt in the network.
2. Stable Credit debt can be paid using the network's reserve currency on a 1:1 basis, giving the perceived value of a 1:1 conversion.
3. Credits can be directly converted to the reserve currency in order to remove lost debt, also attributing to the perceived 1:1 reserve currency value.

## Credit Risk

Similarly to the factional reserve banking system, the `AssurancePool` is not required to hold enough reserve currency to cover the entire supply of credits. An AssurancePool's reserve to debt ratio (**RTD**) measures the amount of credits that are currently being covered. The RTD is calculated by dividing the total amount of reserves held by the total amount of credits in circulation to get a percent of credits being covered. The RTD is used to determine the amount of reserve currency that is available to be reimbursed to members who remove lost debt. Similarly, a **target RTD** is used to determine the amount of reserve currency needed to cover a predicted default rate. This predicted default rate is provided by an **Assurance Oracle** that provides off-chain data to the AssurancePool in order to determine a target RTD that sufficiently covers the network's predicted default rate. The Assurance Oracle can also be used to determine member's credit terms when issuing credit lines to members. [Read more on Credit Issuance](/docs/overview/credit-issuance).
