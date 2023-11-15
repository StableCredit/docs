# StableCredit



> StableCredit contract

Extends the ERC20 standard to include mutual credit functionality where users can mint tokens into existence by utilizing their lines of credit. Credit defaults result in the transfer of the outstanding credit balance to the lost debt balance.

*Restricted functions are only callable by network operators.*

## Methods

### __MutualCredit_init

```solidity
function __MutualCredit_init(string name_, string symbol_) external nonpayable
```

initializes ERC20 with the name and symbol provided.

*should be called directly after deployment (see OpenZeppelin upgradeable standards).*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name_ | string | name of the credit token. |
| symbol_ | string | symbol of the credit token. |

### __StableCredit_init

```solidity
function __StableCredit_init(string name_, string symbol_, address access_) external nonpayable
```

initializes lost debt account with max limit and assigns access contract provided.

*should be called directly after deployment (see OpenZeppelin upgradeable standards).*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name_ | string | name of the credit token. |
| symbol_ | string | symbol of the credit token. |
| access_ | address | address of access manager contract. |

### access

```solidity
function access() external view returns (contract IAccessManager)
```



*the access manager contract which manages network role access control*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IAccessManager | undefined |

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```



*See {IERC20-allowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### assurancePool

```solidity
function assurancePool() external view returns (contract IAssurancePool)
```



*the reserve pool contract which holds and manages reserve tokens*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IAssurancePool | undefined |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```



*See {IERC20-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### burn

```solidity
function burn(uint256 amount) external nonpayable
```



*Destroys `amount` tokens from the caller. See {ERC20-_burn}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### burnFrom

```solidity
function burnFrom(address account, uint256 amount) external nonpayable
```



*Destroys `amount` tokens from `account`, deducting from the caller&#39;s allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``&#39;s tokens of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |
| amount | uint256 | undefined |

### burnLostDebt

```solidity
function burnLostDebt(address member, uint256 amount) external nonpayable returns (uint256)
```

Reduces lost debt in exchange for assurance reimbursement.

*Must have sufficient lost debt to service.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | reimbursement amount from assurance pool |

### createCreditLine

```solidity
function createCreditLine(address member, uint256 limit, uint256 initialBalance) external nonpayable
```

called by the underwriting layer to assign credit lines

*If the member address is not a current member, then the address is granted membership*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of line holder |
| limit | uint256 | credit limit of new line |
| initialBalance | uint256 | positive balance to initialize member with (will increment lost debt) |

### creditBalanceOf

```solidity
function creditBalanceOf(address member) external view returns (uint256)
```

returns the credit balance of a given member



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | credit balance of member |

### creditIssuer

```solidity
function creditIssuer() external view returns (contract ICreditIssuer)
```



*the credit issuer contract which manages credit line issuance*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ICreditIssuer | undefined |

### creditLimitLeftOf

```solidity
function creditLimitLeftOf(address member) external view returns (uint256)
```

returns the credit limit left of a given member



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | credit limit left of member |

### creditLimitOf

```solidity
function creditLimitOf(address member) external view returns (uint256)
```

returns the credit limit of a given member



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | credit limit of member |

### decimals

```solidity
function decimals() external view returns (uint8)
```

returns the number of decimals used by the credit token.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | number of decimals. |

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```



*Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| subtractedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```



*Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| addedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### lostDebt

```solidity
function lostDebt() external view returns (uint256)
```

Shared account that manages the rectification of lost debt.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | amount of lost debt shared by network participants. |

### name

```solidity
function name() external view returns (string)
```



*Returns the name of the token.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### repayCreditBalance

```solidity
function repayCreditBalance(address member, uint128 amount) external nonpayable
```

Repays referenced member&#39;s credit balance by amount.

*Caller must approve this contract to spend reserve tokens in order to repay.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | undefined |
| amount | uint128 | undefined |

### setAccessManager

```solidity
function setAccessManager(address _access) external nonpayable
```

enables network admin to set the access manager address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _access | address | address of access manager contract |

### setAssurancePool

```solidity
function setAssurancePool(address _assurancePool) external nonpayable
```

enables network admin to set the assurance pool address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _assurancePool | address | address of assurance pool contract |

### setCreditIssuer

```solidity
function setCreditIssuer(address _creditIssuer) external nonpayable
```

enables network admin to set the credit issuer address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _creditIssuer | address | address of credit issuer contract |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the symbol of the token, usually a shorter version of the name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC20-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``&#39;s tokens of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### updateCreditLimit

```solidity
function updateCreditLimit(address member, uint256 creditLimit) external nonpayable
```

update existing credit lines



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | undefined |
| creditLimit | uint256 | must be greater than given member&#39;s outstanding debt |

### writeOffCreditLine

```solidity
function writeOffCreditLine(address member) external nonpayable
```

transfer a given member&#39;s debt to the lost debt account



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | address of member to write off |



## Events

### AccessManagerUpdated

```solidity
event AccessManagerUpdated(address accessManager)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| accessManager  | address | undefined |

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### AssurancePoolUpdated

```solidity
event AssurancePoolUpdated(address assurancePool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| assurancePool  | address | undefined |

### ComplianceUpdated

```solidity
event ComplianceUpdated(address sender, address recipient, bool senderCompliance, bool recipientCompliance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender  | address | undefined |
| recipient  | address | undefined |
| senderCompliance  | bool | undefined |
| recipientCompliance  | bool | undefined |

### CreditBalanceRepaid

```solidity
event CreditBalanceRepaid(address member, uint128 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| amount  | uint128 | undefined |

### CreditIssuerUpdated

```solidity
event CreditIssuerUpdated(address creditIssuer)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| creditIssuer  | address | undefined |

### CreditLimitUpdate

```solidity
event CreditLimitUpdate(address member, uint256 limit)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| limit  | uint256 | undefined |

### CreditLimitUpdated

```solidity
event CreditLimitUpdated(address member, uint256 creditLimit)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| creditLimit  | uint256 | undefined |

### CreditLineCreated

```solidity
event CreditLineCreated(address member, uint256 creditLimit, uint256 balance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| creditLimit  | uint256 | undefined |
| balance  | uint256 | undefined |

### CreditLineWrittenOff

```solidity
event CreditLineWrittenOff(address member, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| amount  | uint256 | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### LostDebtBurned

```solidity
event LostDebtBurned(address member, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| amount  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |



