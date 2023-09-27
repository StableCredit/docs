# CreditIssuer



> CreditIssuer

Issue Credit to network members and store/manage credit periods.

*This contract is intended to be extended by a parent contract that implements custom credit terms and underwriting logic.*

## Methods

### __CreditIssuer_init

```solidity
function __CreditIssuer_init(address _stableCredit) external nonpayable
```

initializes the stable credit address to issue credit for.

*should be called directly after deployment (see OpenZeppelin upgradeable standards).*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableCredit | address | address of stable credit contract to issue credit for. |

### creditPeriods

```solidity
function creditPeriods(address) external view returns (uint256 issuedAt, uint256 expiration, uint256 graceLength, bool paused)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| issuedAt | uint256 | undefined |
| expiration | uint256 | undefined |
| graceLength | uint256 | undefined |
| paused | bool | undefined |

### graceExpirationOf

```solidity
function graceExpirationOf(address member) external view returns (uint256)
```

fetches a given member&#39;s credit grace period expiration timestamp.



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | expiration timestamp of member&#39;s credit grace period. |

### inActivePeriod

```solidity
function inActivePeriod(address member) external view returns (bool)
```

returns whether a given member is in an active period.



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | whether member is in an active credit period. |

### inCompliance

```solidity
function inCompliance(address member) external view returns (bool)
```

returns whether a given member is in compliance with credit terms.

*intended to be overwritten in parent implementation to include custom compliance logic.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | whether member is in compliance with credit terms. |

### inDefault

```solidity
function inDefault(address member) external view returns (bool)
```

returns whether a given member is in default.

*returns true if period has expired, grace period has expired, and member is not compliant.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | whether member is in default. |

### inExpiredPeriod

```solidity
function inExpiredPeriod(address member) external view returns (bool)
```

returns whether a given member&#39;s credit period has expired.



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | whether member&#39;s credit period has expired. |

### inGracePeriod

```solidity
function inGracePeriod(address member) external view returns (bool)
```

returns whether a given member is in an active grace period.



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | whether member is in an active grace period. |

### inInitializedPeriod

```solidity
function inInitializedPeriod(address member) external view returns (bool)
```

returns whether a given member&#39;s credit period is initialized.



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | whether member&#39;s credit period is initialized. |

### initializeCreditLine

```solidity
function initializeCreditLine(address member, uint256 limit, uint256 initialBalance, uint256 periodLength, uint256 graceLength) external nonpayable
```

enables authorized address recipient manually initialize a member&#39;s credit line with provided credit terms.

*by default the caller must have operator authorization. Child implementations should employ authorization logic that is appropriate for the given use case.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to initialize credit line for. |
| limit | uint256 | credit limit of credit line. |
| initialBalance | uint256 | initial balance of member. |
| periodLength | uint256 | length of credit period. |
| graceLength | uint256 | length of grace period. |

### isFrozen

```solidity
function isFrozen(address member) external view returns (bool)
```

returns whether a given member&#39;s credit line is frozen.

*returns true if member is in grace period and not compliant.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | whether member&#39;s credit line is frozen. |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### pausePeriodOf

```solidity
function pausePeriodOf(address member) external nonpayable
```

enables network operators to pause a given member&#39;s credit period.

*by default the caller must have operator authorization. Child implementations should employ authorization logic that is appropriate for the given use case.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to pause terms for. |

### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### periodExpirationOf

```solidity
function periodExpirationOf(address member) external view returns (uint256)
```

fetches a given member&#39;s credit period expiration timestamp.



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | expiration timestamp of member&#39;s credit period. |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setGraceLengthOf

```solidity
function setGraceLengthOf(address member, uint256 graceLength) external nonpayable
```

called by network operators to set the grace period length.

*by default the caller must have operator authorization. Child implementations should employ authorization logic that is appropriate for the given use case.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to set grace period for. |
| graceLength | uint256 | length of grace period. |

### setPeriodExpirationOf

```solidity
function setPeriodExpirationOf(address member, uint256 periodExpiration) external nonpayable
```

called by network operators to set the credit period length.

*by default the caller must have operator authorization. Child implementations should employ authorization logic that is appropriate for the given use case.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to set period expiration for. |
| periodExpiration | uint256 | expiration timestamp of credit period. |

### stableCredit

```solidity
function stableCredit() external view returns (contract IStableCredit)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IStableCredit | undefined |

### syncCreditPeriod

```solidity
function syncCreditPeriod(address member) external nonpayable returns (bool)
```

syncs the credit period state and returns validation status.

*this function is intended to be called after credit expiration to ensure that defaulted debt is written off to the network debt account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to sync credit line for. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | transaction validation result. |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### underwriteMember

```solidity
function underwriteMember(address member) external nonpayable
```

called by network authorized to issue credit.

*intended to be overwritten in parent implementation to include custom underwriting logic.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member. |

### unpausePeriodOf

```solidity
function unpausePeriodOf(address member) external nonpayable
```

enables network operators to unpause a given member&#39;s credit period.

*by default the caller must have operator authorization. Child implementations should employ authorization logic that is appropriate for the given use case.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to unpause period for. |

### updateCreditPeriod

```solidity
function updateCreditPeriod(address member, uint256 periodExpiration, uint256 graceLength) external nonpayable
```

responsible for initializing the given member&#39;s credit period.

*by default the caller must have operator authorization. Child implementations should employ authorization logic that is appropriate for the given use case.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to initialize credit period for. |
| periodExpiration | uint256 | expiration timestamp of credit period. |
| graceLength | uint256 | length of grace period. |

### validateCreditTransaction

```solidity
function validateCreditTransaction(address sender, address recipient, uint256 amount) external nonpayable returns (bool)
```

called by the StableCredit contract when members transfer credits.



#### Parameters

| Name | Type | Description |
|---|---|---|
| sender | address | sender address of stable credit transaction. |
| recipient | address | recipient address of stable credit transaction. |
| amount | uint256 | of credits in transaction. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | transaction validation result. |



## Events

### CreditLineDefaulted

```solidity
event CreditLineDefaulted(address member)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |

### CreditPeriodCreated

```solidity
event CreditPeriodCreated(address member, uint256 periodExpiration, uint256 graceLength)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| periodExpiration  | uint256 | undefined |
| graceLength  | uint256 | undefined |

### CreditPeriodExpired

```solidity
event CreditPeriodExpired(address member)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |

### CreditTermsPaused

```solidity
event CreditTermsPaused(address member)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |

### CreditTermsUnpaused

```solidity
event CreditTermsUnpaused(address member)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |

### GraceLengthUpdated

```solidity
event GraceLengthUpdated(address member, uint256 graceLength)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| graceLength  | uint256 | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Paused

```solidity
event Paused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### Unpaused

```solidity
event Unpaused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |



