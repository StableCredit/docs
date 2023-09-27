# AccessManager



> AccessManager

This contract is responsible for managing role based access control for the Admin, Operator, and Member roles.

*NOTE: Addresses granted the Admin role should be as limited as possible as this role has root level access to the network and can cause irreversible damage to the network.*

## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### grantAdmin

```solidity
function grantAdmin(address admin) external nonpayable
```

grants admin access to a given address

*caller must have admin access*

#### Parameters

| Name | Type | Description |
|---|---|---|
| admin | address | undefined |

### grantMember

```solidity
function grantMember(address member) external nonpayable
```

grants member access to a given address

*caller must have operator access*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | undefined |

### grantOperator

```solidity
function grantOperator(address operator) external nonpayable
```

grants operator access to a given address

*caller must have operator access*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleGranted} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### initialize

```solidity
function initialize(address admin) external nonpayable
```

Initializes role hierarchy and grant provided address &#39;admin&#39; role access.

*should be called directly after deployment (see OpenZeppelin upgradeable standards).*

#### Parameters

| Name | Type | Description |
|---|---|---|
| admin | address | initial address to grant admin role access |

### isAdmin

```solidity
function isAdmin(address admin) external view returns (bool)
```

returns true if the given address has admin access



#### Parameters

| Name | Type | Description |
|---|---|---|
| admin | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isMember

```solidity
function isMember(address member) external view returns (bool)
```

returns true if the given address has member access



#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isOperator

```solidity
function isOperator(address operator) external view returns (bool)
```

returns true if the given address has operator access



#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### revokeAdmin

```solidity
function revokeAdmin(address admin) external nonpayable
```

revokes admin access to a given address

*caller must have admin access*

#### Parameters

| Name | Type | Description |
|---|---|---|
| admin | address | undefined |

### revokeMember

```solidity
function revokeMember(address member) external nonpayable
```

revokes member access to a given address

*caller must have operator access*

#### Parameters

| Name | Type | Description |
|---|---|---|
| member | address | undefined |

### revokeOperator

```solidity
function revokeOperator(address operator) external nonpayable
```

revokes operator access to a given address

*caller must have operator access*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |



## Events

### AdminAdded

```solidity
event AdminAdded(address admin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| admin  | address | undefined |

### AdminRemoved

```solidity
event AdminRemoved(address admin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| admin  | address | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### MemberAdded

```solidity
event MemberAdded(address member)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |

### MemberRemoved

```solidity
event MemberRemoved(address member)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| member  | address | undefined |

### OperatorAdded

```solidity
event OperatorAdded(address operator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator  | address | undefined |

### OperatorRemoved

```solidity
event OperatorRemoved(address operator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator  | address | undefined |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |



