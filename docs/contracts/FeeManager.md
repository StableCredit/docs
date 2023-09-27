# FeeManager



> FeeManager

Collects fees from network members and distributes collected fees to the network&#39;s reserve pool.



## Methods

### __FeeManager_init

```solidity
function __FeeManager_init(address _stableCredit) external nonpayable
```

initializes the stable credit address to collect fees for.

*should be called directly after deployment (see OpenZeppelin upgradeable standards).*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableCredit | address | address of stable credit contract to collect fees for. |

### baseFeeRate

```solidity
function baseFeeRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### calculateCreditTransactionFee

```solidity
function calculateCreditTransactionFee(address sender, address recipient, uint256 amount) external view returns (uint256)
```

calculate fee to charge for given credit transaction input

*intended to be overwritten in parent implementation to include custom fee calculation logic.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| sender | address | sender address of credit transaction |
| recipient | address | recipient address of credit transaction |
| amount | uint256 | stable credit amount of credit transaction |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | reserve token amount to charge for credit transaction |

### collectCreditTransactionFee

```solidity
function collectCreditTransactionFee(address sender, address recipient, uint256 amount) external nonpayable
```

Called by a StableCredit instance to collect fees from the credit sender

*the sender must approve the feeManager to spend reserve tokens on their behalf before fees can be collected.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| sender | address | stable credit sender address |
| recipient | address | stable credit receiver address |
| amount | uint256 | stable credit amount |

### collectedFees

```solidity
function collectedFees() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### depositFeesToAssurancePool

```solidity
function depositFeesToAssurancePool() external nonpayable
```

Distributes collected fees to the reserve pool.

*intended to be overwritten in parent implementation to include custom fee distribution logic*


### pauseFees

```solidity
function pauseFees() external nonpayable
```

Called by network operator to pause fee collection

*can only be called by network operator*


### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### setBaseFeeRate

```solidity
function setBaseFeeRate(uint256 _baseFeeRate) external nonpayable
```

Called by network operator to set base fee rate

*can only be called by network operator*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _baseFeeRate | uint256 | undefined |

### shouldChargeCreditTransactionFee

```solidity
function shouldChargeCreditTransactionFee(address sender, address recipient, uint256 amount) external view returns (bool)
```

check if sender should be charged fee for tx



#### Parameters

| Name | Type | Description |
|---|---|---|
| sender | address | stable credit sender address |
| recipient | address | stable credit recipient address |
| amount | uint256 | stable credit amount of credit transaction |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | true if tx should be charged fees, false otherwise |

### stableCredit

```solidity
function stableCredit() external view returns (contract IStableCredit)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IStableCredit | undefined |

### unpauseFees

```solidity
function unpauseFees() external nonpayable
```

Called by network operator to unpause fee collection

*can only be called by network operator*




## Events

### FeesCollected

```solidity
event FeesCollected(address member, uint256 totalFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |
| totalFee  | uint256 | undefined |

### FeesDistributed

```solidity
event FeesDistributed(uint256 totalFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| totalFee  | uint256 | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

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



