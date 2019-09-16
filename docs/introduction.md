# Introduction

## What is Homas?

Homas is a different kind of human resource software. Unlike other soulless HR tools, it has been designed to mimic and represent what happens in the real world. Its main goals are to:

- help managers be more empathetic,
- help companies be better at managing people's dreams and ambitions,
- help employees better communicate with their employers.

Homas aims to be a combination of softwares like BambooHR, Officevibe and Monica – although in a single application and at a much more reasonable price.

At a high level, Homas allows a company to:

*
*
*
*
*

It also gives users and companies a complete control over their data. Homas is open source and can be installed on your own server if you so desire.

To use the software, companies have to pay a fair fixed annual fee, regardless of the size of your team. We do not sell your data, don't use ads nor use external analytical services. You can export your data at anytime or use the API without restrictions.

In terms of user experience, the software aims to be simple to use with the minimum amount of configuration. The design itself is not a priority - user experience is.

Technically, the software is developed with boring, proven, predictible, easy to maintain technologies that make the tool fast and secure. We want to create a product useful for users and companies, not something that is technologically exciting.

## Why is Homas different?

## Pricing and open source

##

# Development

# Hosting Homas on your own server

# Homas in 10 minutes

Homas is built around the notion that while companies own data about their employees, users have complete control over which data they give to companies.

## Setup

### Developers

Dates all have the `datetime` format in order for us to use SQLite for testing purposes.

#### Crons

* `LogMissedWorklogEntry` that runs at 11pm every day. This job checks all the employees who hasn't logged a worklog on the current day, and increments the `consecutive_worklog_missed` field in the Employee table for each found employee.

#### Shared data in Vue

Data is shared accross views in Vue within Inertia. Shared data come from AppServiceProvider.

### Users vs employees

Homas makes the distinction between users and employees.

A user is someone who creates an account on the Homas platform. An employee is an entity who is part of a company on Homas. A user can be an employee in one or more companies, but an employee can only be linked to a single user. A user account is necessary for each employee to interact with the software and change data. However you don't need to give accounts to employees if you don't want to.

Once a user has an account on Homas, he can decide to either create a company, or join an existing company.

The natural way to create this software would have been that an employee is a user, and get rid of those two notions altogether to only keep the notion of User. This would have been a severe limitation though. In an ideal world, every company would run on Homas to manage their human resources, and once a user has a profile on Homas, he can simply join other companies as he changes jobs, and most data about him would follow (if he wants to). It's important to realize that at any time, the user has the control over his data and can decide to remove them from the company he's joined.

At the database level, the <code>Users</code> table contains almost the same data as the <code>Employees</code> table. That is because information in the Users table is information given by the user himself, whereas information in the Employees table is filled by the company.

### Creating an account for a company

To create an account, you simply need a valid email address and a strong password. Nothing else is needed, really. Upon signing up, the system will send you an email to confirm the validity of the email, but you can use the software without it. Confirming the email address is necessary to be able to add employees to your account.

Once you create your account, you are presented with the option to either create a company, or join an existing company.

Clicking on Create a company will ask you to name the company, and that's it. There is one important rule here: the company name is unique on an instance of Homas. That means it's not possible to create two companies named Microsoft, for instance. If you believe that the name of your company has been already used on the system and that this is an abuse, please contact us - we will sort this out.

As you are the one who has created the company, you will be an administrator of the company, with full control over the account of the company. To know more about what it means, read the documentation about roles.

### Creating an account to join an existing company

### Understanding roles

When adding an employee in the system, you need to indicate a role. A role is a set of rights the employee will have in the system, once the employee is linked to a user account.

There are only three roles in Homas:
- Administrator
- Human Resource Representative
- Employee.

We want to keep the application simple, so we want as few roles as possible. With those permissions and the presence of the audit log that tracks everything that happens in the application, those roles should be enough.

That being said, an employee can be a manager. When an employee is a manager, he has some controls and additional powers over a regular employee, but only towards the employees he manages.

### Adding employees

### Inviting users

### Teams

A team is a group of people. This is vague on purpose. It’s up to you to decide whether a team is a department, a separate business entity or a team within another bigger team.

A team is created in Adminland by an administrator or a human resource representative. A team has one team leader (and only one).

### Work logs

Employees can log the work they've done for a given day. When an employee provides this information, it becomes visible but only for those people:
- the employee himself,
- people from the team(s) of the employee, on the actual team page
- the manager of the employee, or any managers,
- people with the HR role.

Employees can only log what they've done once per day. By definition, we don't allow someone to change the date of a post they have written – that means if they omit one day, they can't come back the next day and fill the information. This is done on purpose in order to force people to actually use this feature if a team needs it.

Every night at 11pm (UTC), the server checks whose employees have logged their work and keeps count. It’s up to the company to decide how they want to enforce this policy of logging the work. A company can choose to create automated rules using the powerful flow feature if they want to be warned when an employee skips, say, 7 days of logging work in a row.

### Morale

Employees can indicate how they feel each day. They have the choice between a good day, a normal day or a bad day. After they have indicated their feelings, they can also add a comment to it. This feeling can't be changed once it’s logged, on purpose.

This information is used to take the pulse on how a team or an entire company is going, and therefore will be displayed on a team page and on the company profile's page. However, data is completely anonymized. It will be impossible for anyone regardless of their roles, to know who has voted and what is the result of this vote.

To be perfectly clear, the feeling, along with its comment, will be shown:
- on the employee's profile page. In this case, only the employee will see this information. No one, not even an administrator, will be able to see how the employee feels.
- on the team's page. In this case, we will only show the feeling of every team member without indicating who has said what, as well as the average feeling of the team on a given time range.
- on the company's profile. In this case, like the team's page, we will only show the average feeling of the company.