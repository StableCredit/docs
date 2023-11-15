# AssurancePool



> AssurancePool

Stores and manages reserve tokens according to pool configurations set by operator access granted addresses.



## Methods

### RTD

```solidity
function RTD() external view returns (uint256)
```

returns the ratio of primary reserve to total debt, where 1 ether == 100%.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | ratio of primary reserve to total debt, where 1 ether == 100%. |

### allocate

```solidity
function allocate() external nonpayable
```

enables caller to allocate unallocated reserve tokens into the needed reserve balance.

*this function should be called on a time frame to ensure collected deposits are allocated to the necessary reserve balances.*


### assuranceOracle

```solidity
function assuranceOracle() external view returns (contract IAssuranceOracle)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IAssuranceOracle | undefined |

### convertReserveTokenToStableCredit

```solidity
function convertReserveTokenToStableCredit(uint256 reserveAmount) external view returns (uint256)
```

converts the reserve token amount to the stable credit denomination.



#### Parameters

| Name | Type | Description |
|---|---|---|
| reserveAmount | uint256 | reserve token amount to convert to credit currency denomination. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | credit currency conversion. |

### convertStableCreditToReserveToken

```solidity
function convertStableCreditToReserveToken(uint256 creditAmount) external view returns (uint256)
```

converts the stable credit amount to the reserve token denomination.



#### Parameters

| Name | Type | Description |
|---|---|---|
| creditAmount | uint256 | stable credit amount to convert to reserve currency denomination. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | reserve currency conversion. |

### deposit

```solidity
function deposit(uint256 amount) external nonpayable
```

enables caller to deposit reserve tokens into the excess reserve.



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount of deposit token to deposit. |

### depositIntoExcessReserve

```solidity
function depositIntoExcessReserve(uint256 amount) external nonpayable
```

enables caller to deposit reserve tokens into the excess reserve.



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount of reserve token to deposit. |

### depositIntoPeripheralReserve

```solidity
function depositIntoPeripheralReserve(uint256 amount) external nonpayable
```

enables caller to deposit reserve tokens into the peripheral reserve.



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount of reserve token to deposit. |

### depositIntoPrimaryReserve

```solidity
function depositIntoPrimaryReserve(uint256 amount) external nonpayable
```

enables caller to deposit reserve tokens into the primary reserve.



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount of reserve token to deposit. |

### excessBalance

```solidity
function excessBalance() external view returns (uint256)
```

returns the amount of current reserve token&#39;s excess balance.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### hasValidRTD

```solidity
function hasValidRTD() external view returns (bool)
```

returns true if the primary reserve is greater than or equal to the target RTD.

*returns true if the primary reserve is greater than or equal to the target RTD.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | true if the primary reserve is greater than or equal to the target RTD. |

### initialize

```solidity
function initialize(address _stableCredit, address _reserveToken) external nonpayable
```

initializes the reserve token and deposit token to be used for assurance, as well as assigns the stable credit and swap router contracts.

*should be called directly after deployment (see OpenZeppelin upgradeable standards).*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableCredit | address | address of the stable credit contract to assure. |
| _reserveToken | address | address of the reserve token to use for assurance. |

### neededReserves

```solidity
function neededReserves() external view returns (uint256)
```

returns the amount of reserve tokens needed for the primary reserve to reach the target RTD.

*the returned amount is denominated in the reserve token*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | amount of reserve tokens needed for the primary reserve to reach the target RTD. |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### peripheralBalance

```solidity
function peripheralBalance() external view returns (uint256)
```

returns the amount of current reserve token&#39;s peripheral balance.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### primaryBalance

```solidity
function primaryBalance() external view returns (uint256)
```

returns the amount of current reserve token&#39;s primary balance.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### reallocateExcessBalance

```solidity
function reallocateExcessBalance() external nonpayable
```

this function reallocates needed reserves from the excess reserve to the primary reserve to attempt to reach the target RTD.




### reimburse

```solidity
function reimburse(address account, uint256 amount) external nonpayable returns (uint256)
```

Called by the stable credit implementation to reimburse an account. If the amount is covered by the peripheral reserve, the peripheral reserve is depleted first, followed by the primary reserve.

*The stable credit implementation should not expose this function to the public as it could be exploited to drain the reserves.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | address to reimburse from reserves. |
| amount | uint256 | amount reserve tokens to withdraw from the excess reserve. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### reserveBalance

```solidity
function reserveBalance() external view returns (uint256)
```

returns the total amount of reserve tokens in the primary and peripheral reserves.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | total amount of reserve tokens in the primary and peripheral reserves. |

### reserveToken

```solidity
function reserveToken() external view returns (contract IERC20Upgradeable)
```

Exposes the ERC20 interface of the reserve token.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20Upgradeable | reserve token of the reserve pool. |

### reserves

```solidity
function reserves(address) external view returns (uint256 unallocatedBalance, uint256 primaryBalance, uint256 peripheralBalance, uint256 excessBalance)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| unallocatedBalance | uint256 | undefined |
| primaryBalance | uint256 | undefined |
| peripheralBalance | uint256 | undefined |
| excessBalance | uint256 | undefined |

### setAssuranceOracle

```solidity
function setAssuranceOracle(address _assuranceOracle) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _assuranceOracle | address | undefined |

### setReserveToken

```solidity
function setReserveToken(address _reserveToken) external nonpayable
```

This function allows the risk manager to set the reserve token.

*Updating the reserve token will not affect the stored reserves of the previous reserve token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _reserveToken | address | address of the new reserve token. |

### stableCredit

```solidity
function stableCredit() external view returns (contract IStableCredit)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IStableCredit | undefined |

### targetRTD

```solidity
function targetRTD() external view returns (uint256)
```

returns the target RTD for the AssurancePool.

*the target RTD is set by the AssuranceOracle contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | target RTD for the AssurancePool, where 1 ether == 100% RTD. |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### unallocatedBalance

```solidity
function unallocatedBalance() external view returns (uint256)
```

returns the amount of current reserve token&#39;s unallocated balance.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdraw

```solidity
function withdraw(uint256 amount) external nonpayable
```

enables caller to withdraw reserve tokens from the excess reserve.



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount of reserve tokens to withdraw from the excess reserve. |



## Events

### AccountReimbursed

```solidity
event AccountReimbursed(address account, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |
| amount  | uint256 | undefined |

### AssuranceOracleUpdated

```solidity
event AssuranceOracleUpdated(address assuranceOracle)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| assuranceOracle  | address | undefined |

### ConversionRateUpdated

```solidity
event ConversionRateUpdated(uint256 conversionRate)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| conversionRate  | uint256 | undefined |

### ExcessReallocated

```solidity
event ExcessReallocated(uint256 excessReserve, uint256 primaryReserve)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| excessReserve  | uint256 | undefined |
| primaryReserve  | uint256 | undefined |

### ExcessReserveDeposited

```solidity
event ExcessReserveDeposited(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

### ExcessReserveWithdrawn

```solidity
event ExcessReserveWithdrawn(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

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

### PeripheralReserveDeposited

```solidity
event PeripheralReserveDeposited(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

### PrimaryReserveDeposited

```solidity
event PrimaryReserveDeposited(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

### ReserveTokenUpdated

```solidity
event ReserveTokenUpdated(address newReserveToken)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newReserveToken  | address | undefined |



