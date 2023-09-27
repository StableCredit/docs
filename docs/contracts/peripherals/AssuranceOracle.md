# AssuranceOracle



> AssuranceOracle

Exposes the target reserve to debt ratio (targetRTD) for the AssurancePool and a quote function intended to be overridden to convert deposit tokens to reserve tokens.

*This contract is meant to be extended in order to serve the necessary data to the AssurancePool and CreditIssuer contracts to manage network credit risk.*

## Methods

### assurancePool

```solidity
function assurancePool() external view returns (contract IAssurancePool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IAssurancePool | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### quote

```solidity
function quote(address depositToken, address reserveToken, uint256 depositAmount) external view returns (uint256)
```

This function is called by the AssurancePool to quote the amount of reserve tokens that would be received for a given deposit token amount.

*this function is meant to be overridden to convert deposit tokens to reserve tokens via on chain pricing data (ex. Uniswap, Chainlink, ect.)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| depositToken | address | address of the deposit token. |
| reserveToken | address | address of the reserve token. |
| depositAmount | uint256 | amount of deposit token to convert to reserve token. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | amount of reserve tokens that would be received for the given deposit token amount. |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setTargetRTD

```solidity
function setTargetRTD(uint256 _targetRTD) external nonpayable
```

This function allows the risk manager to set the target RTD. If the target RTD is increased and there is an excess reserve balance, the excess reserve is reallocated to the primary reserve to attempt to reach the new target RTD.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _targetRTD | uint256 | new target RTD. |

### targetRTD

```solidity
function targetRTD() external view returns (uint256)
```

The target reserve to debt ratio (RTD) for the AssurancePool.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TargetRTDUpdated

```solidity
event TargetRTDUpdated(uint256 newTargetRTD)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newTargetRTD  | uint256 | undefined |



