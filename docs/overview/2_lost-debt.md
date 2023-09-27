---
sidebar_position: 2
---

# Lost Debt

Traditional mutual credit-clearing networks rely on the social pressure of reputation to ensure that members honor their debts. Typically, there is no set expiration on the borrowed value. However, this approach is not sufficient for a network at scale.

Each Stable Credit resembles a promise that the member who minted will return that same borrowed value to the network at some point in the future. When that future point passes, and that value is not returned, the member defaults on their debt and the network is left with "lost debt". Lost debt can also arise from members who chose to repay their outstanding credit balance using the reserve currency. When a member does this, the paid off credit balance becomes lost debt. Lost debt is simply debt that is no longer tied to the member that minted it.

The presence of lost debt is problematic for a network because it causes an influx of currency to exist in the network without a corresponding influx of value in the form of member debt obligation. This causes inflationary pressure on the network currency. The Stable Credit protocol tracks lost debt via a "Network Debt Account" that holds the network's accumulated lost debt. The Network Debt Account is a shared autonomous account that is managed by network members via a concept called assurance. [Read more on assurance.](/docs/overview/credit-assurance)
