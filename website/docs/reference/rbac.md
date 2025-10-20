# Role-Based Access Control (RBAC)

**Role-Based Access Control (RBAC)** is the system used to define and manage access across KEYNOA system.  
Instead of assigning permissions directly to individual users, RBAC organizes users into **groups** and assigns **roles** to those groups.  
Each role defines which operations can be performed for a specific IssuingCA, ensuring secure, consistent, and
easy-to-manage access control.


## How RBAC Works

- **Roles are scoped per IssuingCA** — Each role applies only to a specific Certification Authority (CA) instance.
- **Users inherit permissions through groups** — Permissions are granted based on the user’s group membership, which
  carries assigned roles.
- **Roles are linked to Keycloak groups** — When a user joins a Keycloak group, they automatically receive the
  permissions associated with the role assigned to that group in KEYNOA.
- **Role management is restricted** — Only users with the **Head of CA Operations** or **Access Manager** roles can assign
  or modify roles for groups within a given IssuingCA.


## Roles and Permissions in KEYNOA

Each IssuingCA includes a predefined set of roles. These roles define what users can view, configure, or operate within
that CA.

### 1. Head of CA Operations

The **Head of CA Operations** has full administrative control over a specific IssuingCA.  
This role includes all permissions of CA Operator, RA Operator, Access Manager, and Revisor roles.

**Key capabilities:**

- Manage certificates and devices (issue, revoke, replace, etc.).
- Create and manage certificate policies.
- Configure and manage cloud and application templates (MQTT, OPC UA, ThinEdge, Cumulocity Config, Cloud Config).
- Manage device selectors and update or replace device configurations.
- Assign or update roles for Keycloak groups.
- View all audit logs related to the IssuingCA.

### 2. CA Operator

The **CA Operator** handles operational tasks for certificates and devices.  
This role focuses on day-to-day CA operations without configuration or user management access.

**Key capabilities:**

- Revoke certificates.
- Revoke devices and all associated certificates.

### 3. RA Operator

The **RA Operator** manages registration and policy configurations for certificate issuance, including templates and
cloud integrations.

**Key capabilities:**

- Create, update, and delete cloud configurations (MQTT Cloud Config, Cumulocity Config).
- Create, update, and delete application templates (MQTT, OPC UA, ThinEdge).
- Manage device selectors, switch device configurations, and replace devices.
- Create and manage certificate templates and policies.

### 4. Access Manager

The **Access Manager** is responsible for maintaining user access for a given IssuingCA.  
This includes mapping roles to Keycloak groups and ensuring users have the correct permissions.

**Key capabilities:**

- View available roles and their permissions.
- View and manage role mappings for user groups.
- Assign or remove roles for groups.



### 5. Revisor

The **Revisor** provides audit and compliance oversight without operational permissions.  
This role is read-only and intended for monitoring and traceability.

**Key capabilities:**

- View audit logs for a specific IssuingCA.
- Review activities and changes for compliance purposes.


## KEYNOA Administrator Operations

Some high-level operations are reserved exclusively for system administrators and are **not part of IssuingCA roles**.  
These operations affect the overall system rather than individual IssuingCAs.

**Reserved administrator operations:**

- **Create IssuingCA** — Add a new Certification Authority instance.
- **Import IssuingCA** — Upload an Enterprise CA configuration into the system.
- **Delete IssuingCA** — Delete an existing Certification Authority instance.

> **Note:**  
> KEYNOA administrators do **not** automatically have operational permissions for each IssuingCA.  
> To perform CA-specific actions, administrators must explicitly assign themselves the appropriate roles (e.g., Head of
> CA Operations) per IssuingCA.


## Granting Permissions

When a new IssuingCA is created, KEYNOA automatically generates predefined roles for that CA.

RBAC permissions are managed through **Keycloak (IAM - Identity Access Manager)** and **KEYNOA** in a simple, two-step process:


### Step 1 – Create Groups and Assign Users in Keycloak (IAM)

Administrators first create user groups in Keycloak and add users to them.

1. Log in to the Keycloak admin console.
2. Navigate to the **Groups** page.  
   ![list keycloak groups](/img/rbac/keycloak-groups.png)
3. Create the desired user groups.  
   ![create keycloak group](/img/rbac/keycloak-create-group.png)
4. Add users to these groups.  
   ![add members](/img/rbac/keycloak-add-members.png)

> **Note:** Users inherit permissions only after the roles are mapped in KEYNOA.


### Step 2 – Map Roles to Groups in KEYNOA

Once the groups are created in Keycloak, administrators assign roles to these groups in KEYNOA.  
Users added to these groups automatically inherit the corresponding permissions.

1. Log in to KEYNOA as an administrator.
2. Navigate to **Settings → User Groups**.
3. Click the gear icon next to the desired group to edit its permissions.  
   ![list user groups](/img/rbac/keynoa-group-list.png)
4. Select the relevant certificate authority (IssuingCA), then choose the roles to assign.  
   ![edit group permissions](/img/rbac/keynoa-ca-roles-list.png)
5. Click **Assign** to save the role mapping.  
   ![assign ca roles](/img/rbac/keynoa-assign-roles.png)


> **Tip:** Any new user added to a Keycloak group automatically inherits the roles assigned to that group in KEYNOA.
