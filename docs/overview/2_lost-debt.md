---
sidebar_position: 2
---

# Lost Debt

Traditional mutual credit-clearing networks rely on the social pressure of reputation to ensure that members honor their debts. Typically, there is no set expiration on the borrowed value. These approaches are not sufficient for a network to reach a healthy scale. Thus almost all existing mutual credit networks suffer from a lack of sound risk management systems and improper tracking of debt, leading to a decline in usage.

To address this problem, each Stable Credit resembles a promise that the member who minted will return that same borrowed “value” to the network at some point in the future. When that future point passes, and that value is not returned, the member defaults on their debt and the network is left with lost debt. Lost debt is simply debt that is no longer tied to the member that minted it.

The presence of lost debt is problematic for a network because it causes an influx of currency to exist in the network without a corresponding influx of value in the form of member debt obligation. This causes inflationary pressure on the network currency, and is one of the major reasons why mutual credit has not yet become a scalable financial instrument. The Stable Credit protocol tracks lost debt via a **Lost Debt Account** that holds the network's accumulated lost debt. The **Lost Debt Account** is a shared autonomous account that is managed by network members via a concept called assurance.
[Read more on assurance.](/docs/overview/credit-assurance)
