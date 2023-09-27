---
sidebar_position: 4
---

# Credit Issuance

Each Stable Credit Network is also equipped with a `CreditIssuer` contract that is responsible for issuing credit lines to members. In its most basic form, the `CreditIssuer` enables addresses with "Operator" access to create new credit lines with supplied credit terms. These terms include a credit limit that regulates the max amount of credits a member can mint and a credit period that denotes the expiration of said minted credits. However, Credit Terms and underwriting logic should be extended to accommodate more complex network requirements.

## Credit Terms

Each credit line is issued with a set of credit terms (that can vary from network to network) that alter the meaning of "good standing" for a given credit line. If a credit line is in good standing, this means that at the end of a given period, the credit line will not default, and the credits minted during that period are still valid. As an example credit term structure, a credit line may be issued with a credit limit of 1000 credits, a credit period of 30 days, and a minimum ITD (Income to debt ratio), of 15%. This means that the credit line can mint up to 1000 credits, and that within the period of 30 days, the member must have received at least 15% of their outstanding balance at some point during the period. This term structure is designed to ensure that the credit lines are used for their intended purpose (i.e. to facilitate trade between members). In order to support terms like this, the `CreditIssuer` contract should be extended to include the concept of ITD, and the `inGoodStanding` function overridden to include that logic.
