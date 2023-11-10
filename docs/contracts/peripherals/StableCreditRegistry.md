# StableCreditRegistry



> This contract is responsible for maintaining a list of stable credit networks for indexing purposes.

enables the contract owner to add and remove stable credit contracts from the registry.



## Methods

### addNetworkToRegistry

```solidity
function addNetworkToRegistry(address network) external nonpayable
```

Allows owner address to add networks to the registry

*The caller must be the owner of the contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| network | address | address of the network to add |

### networks

```solidity
function networks(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### removeNetworkFromRegistry

```solidity
function removeNetworkFromRegistry(address network) external nonpayable
```

Allows owner address to remove networks from the registry

*The caller must be the owner of the contract*

#### Parameters

| Name | Type | Description |
|---|---|---|
| network | address | address of the network to remove |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


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

### NetworkAdded

```solidity
event NetworkAdded(address network, address accessManager, address creditIssuer, address assurancePool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| network  | address | undefined |
| accessManager  | address | undefined |
| creditIssuer  | address | undefined |
| assurancePool  | address | undefined |

### NetworkRemoved

```solidity
event NetworkRemoved(address network)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| network  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



